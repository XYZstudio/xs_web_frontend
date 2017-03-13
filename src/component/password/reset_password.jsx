import config from 'root/config.json';
import React from 'react';
import { browserHistory } from 'react-router';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import ResetPasswordStore from 'store/reset_password';
import LoginStore from 'store/login';
import * as request from 'superagent';

export default class ResetPassword extends React.Component {
  constructor() {
    super();
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.state = {
      password: '',
      passwordConfirm: '',
      error: null,
      message: '',
      token: '',
    };
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirmChange(e) {
    this.setState({ passwordConfirm: e.target.value });
  }

  handleTokenChange(e) {
    this.setState({ token: e.target.value });
  }

  validatePassword() {
    if (this.state.error === true) {
      return 'error';
    } else if (this.state.error === false) {
      return 'success';
    } else {
      return null;
    }
  }

  submitPassword() {
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ message: '上下密码不一致，请检查', error: true });
    } else {
      if (!this.state.password || this.state.password.length < 6) {
        this.setState({ message: '请使用长度大于6位的密码', error: true });
        return;
      }
      this.setState({ message: '上下密码一致', error: false });
      const email = ResetPasswordStore.getState().email;
      request
      .post(`http://${config.host}:${config.rest_port}/api/v1/reset_password`)
      .send({
        email: email,
        password: this.state.password,
        token: this.state.token,
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res.body);
          this.setState({ error: res.body.error });
          if (res.body.error) {
            this.setState({ message: res.body.message });
          } else {
            LoginStore.dispatch({ type: 'LOGIN', user: res.body.user });
            browserHistory.push('/');
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Row style={{ height: 700 }}>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <Panel style={{ marginTop: 200 }}>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={ this.validatePassword() }
                >
                  <ControlLabel>输入你的新密码</ControlLabel>
                  <FormControl
                    type="password"
                    value={ this.state.password }
                    placeholder="设置你的新密码(长度大于6位)"
                    onChange={ this.handlePasswordChange }
                  />
                  <FormControl.Feedback />
                  <FormControl
                    type="password"
                    value={ this.state.passwordConfirm }
                    placeholder="确认密码(长度大于6位)"
                    onChange={ this.handlePasswordConfirmChange }
                  />
                  <FormControl.Feedback />
                  <FormControl
                    type="password"
                    value={ this.state.token }
                    placeholder="黏贴验证码"
                    onChange={ this.handleTokenChange }
                  />
                  <FormControl.Feedback />
                  <HelpBlock>{ this.state.message }</HelpBlock>
                  <Button bsStyle="primary" onClick={ this.submitPassword }>确定</Button>
                </FormGroup>
              </form>
            </Panel>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </div>
    );
  }
}