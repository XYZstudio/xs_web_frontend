import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import config from '../../../config.json';

import qqIcon from 'style/asset/qqI.png';
import wechatIcon from 'style/asset/wechatI.png';
import weiboIcon from 'style/asset/weiboI.png';

export default class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.show2dCode = this.show2dCode.bind(this);
    this.state = {
      email: '',
      password: '',
      show2dCode: { display: 'none' },
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
    .post('http://localhost:' + config.rest_port + '/api/v1/login_user')
    .send({
      email: this.state.email,
      password: this.state.password,
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('LOGIN: ', res);
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
    const thirdpartyLoginDiv = {
      marginLeft: '15px',
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
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
        </FormGroup>

        <FormGroup>
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='密码'
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
        </FormGroup>

        <Button bsStyle="success" onClick={this.submitLogin} block>Login</Button>

        <FormGroup>
          <div style={ thirdpartyLoginDiv }>
            <span style={ thirdpartyLoginSpan }>社交帐号登录</span>
            <div>
              <a title="微信登录" href="#" style={ thirdpartyLoginIcon }>
                <i><img style={iconImageStyle} src={ qqIcon }/></i>
              </a>
              <a title="微博登录" href="#" style={ thirdpartyLoginIcon }>
                <i><img style={iconImageStyle} src={ wechatIcon }/></i>
              </a>
              <a title="QQ 登录" href="#" style={ thirdpartyLoginIcon }>
                <i><img style={iconImageStyle} src={ weiboIcon }/></i>
              </a>
            </div>
          </div>
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