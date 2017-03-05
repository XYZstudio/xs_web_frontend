import config from 'root/config.json';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import QRCCodeImage from 'style/asset/qrcode.jpg';
import { browserHistory } from 'react-router';

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    this.toggle2dCode = this.toggle2dCode.bind(this);
    this.show2dCode = this.show2dCode.bind(this);
    this.showErrorMesg = this.showErrorMesg.bind(this);
    this.state = {
      name:'',
      email: '',
      password: '',
      show2dCode: { display: 'none' },
      showErrorMessage: {
        display: 'none',
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      },
      errorMessage:''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitRegister() {
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/create_user`)
    .send({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      status: 'active'
    })
    .end((err, res) => {
      console.log(res);
      if (err) {
        console.error(err);
        console.log(res.body.code);
        this.showErrorMesg(res.body.warning);
      } else {
        console.log('REGISTER: ', res);
        browserHistory.push('/verifyEmail');
      }
    });
  }

  show2dCode() {
    this.setState({ show2dCode: {} });
  }

  toggle2dCode(){
    if (this.state.show2dCode.display == 'none') {
      this.setState({ show2dCode: { display: '' } });
    } else {
      this.setState({ show2dCode: { display: 'none' } });
    }
    
  }

  showErrorMesg(errMes) {
    this.setState({
      showErrorMessage: {
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      },
      errorMessage: errMes
    });
  }

  render() {
    const firstFormGroupStyle = {
      marginTop: '15px'
    };

    const agreementStyle = {
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '12px'
    };

    return (
      <form>
        <FormGroup style={firstFormGroupStyle}>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="姓名"
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type='text'
            value={this.state.email}
            placeholder='手机号或邮箱'
            onChange={this.handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='密码(不少于6位)'
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
        </FormGroup>

        <Button className="centerBlockEle loginRegisterFormButton" bsStyle="success" onClick={this.submitRegister} block>注册Sporit</Button>
        <p style={ this.state.showErrorMessage }>{ this.state.errorMessage }</p>
        <FormGroup style={agreementStyle}>
          <p>
            点击「注册Sporit」按钮，即代表你同意
            <a href="" target="_blank">《Sporit协议》</a>
          </p>
        </FormGroup>

        <Button className="centerBlockEle loginRegisterFormButton" onClick={this.toggle2dCode} block>关注Sporit公众号</Button>
        <Row style={this.state.show2dCode}>
          <img
            src={ QRCCodeImage }
            style={{ display: 'block',margin: 'auto' }}
          />
          <div className="textCenter">扫描二维码关注Sporit微信公众号</div>
        </Row>
      </form>
    );
  }
}