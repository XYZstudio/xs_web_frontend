import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    // this.close = props.close;
    this.show2dCode = this.show2dCode.bind(this);
    this.state = {
      name:'',
      email: '',
      password: '',
      show2dCode: { display: 'none' },
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
    .post('http://localhost:3000/api/v1/create_user')
    .send({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      status: 'active'
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('REGISTER: ', res);
      }
    });
  }

  show2dCode() {
    this.setState({ show2dCode: {} });
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

        <Button bsStyle="success" onClick={this.submitRegister} block>注册Sporit</Button>

        <FormGroup style={agreementStyle}>
          <p>
            点击「注册Sporit」按钮，即代表你同意
            <a href="" target="_blank">《Sporit协议》</a>
          </p>
        </FormGroup>

        <Button onClick={this.show2dCode} block>下载Sporit</Button>
        <Row style={this.state.show2dCode}>
          <img
            src='http://optional.is/required/wp-content/uploads/2009/06/barcode-qr.png'
            style={{ display: 'block',margin: 'auto' }}
          />
        </Row>
      </form>
    );
  }
}