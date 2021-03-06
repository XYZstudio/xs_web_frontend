import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import config from '../../../config.json';
import { browserHistory } from 'react-router';
import LoginStore from 'store/login';
import QRCCodeImage from 'style/asset/qrcode.jpg';

export default class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.show2dCode = this.show2dCode.bind(this);
    this.showErrorMesg = this.showErrorMesg.bind(this);
    this.goToResetPwd = this.goToResetPwd.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
    this.state = {
      email: '',
      password: '',
      show2dCode: { display: 'none' },
      showErrorMesg: {
        display: 'none',
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      },
      needReload: props.needReload ? true : false,
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitLogin() {
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/login_user`)
    .withCredentials()
    .send({
      email: this.state.email,
      password: this.state.password,
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
        this.showErrorMesg();
      } else {
        LoginStore.dispatch({
          type: 'LOGIN',
          user: res.body,
        });
        this.props.closeModalWindow();
        if (this.state.needReload) { window.location.reload(); }
      }
    });
  }

  handleEnterKeyPress(e) {
    if (e.key === 'Enter') {
      this.submitLogin();
    }
  }

  show2dCode() {
    this.setState({ show2dCode: {} });
  }

  showErrorMesg() {
    this.setState({
      showErrorMesg: {
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      }
    });
  }

  goToResetPwd(e) {
    e.preventDefault();
    this.props.closeModalWindow();
    browserHistory.push('/reset_password');
  }

  render() {
    const firstFormGroupStyle = {
      marginTop: '15px'
    };
    const thirdpartyLoginDiv = {
      marginLeft: '30%',
      marginTop: '15px'
    }
    const thirdpartyLoginSpan = {
      color: '#4b8abf',
      marginRight: '10px',
      float: 'left'
    }
    const thirdpartyLoginIcon = {
      padding: '10px'
    }
    const iconImageStyle = {
      width: '22px'
    }
    return (
      <form>
        <FormGroup
          controlId='formBasicText'
          style={firstFormGroupStyle}
        >
          <FormControl
            type='text'
            value={this.state.email}
            placeholder='手机号或邮箱'
            onChange={this.handleEmailChange}
            onKeyDown={this.handleEnterKeyPress}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='密码'
            onChange={this.handlePasswordChange}
            onKeyDown={this.handleEnterKeyPress}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup><a href="#" onClick={ this.goToResetPwd }>忘记密码？</a></FormGroup>

        <Button
          className="centerBlockEle loginRegisterFormButton"
          bsStyle="success"
          onClick={this.submitLogin}
          block
        >
          登录Sporit
        </Button>
        <p style={this.state.showErrorMesg}>用户名或密码错误</p>

        <Row>
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