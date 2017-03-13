import config from 'root/config.json';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import ResetPasswordStore from 'store/reset_password';

export default class SendVerification extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendVerificationCode = this.sendVerificationCode.bind(this);
    this.state = {
      email: '',
      error: null,
      message: '',
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  validateEmail() {
    if (this.state.error === true) {
      return 'error';
    } else if (this.state.error === false) {
      return 'success';
    }
  }

  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  sendVerificationCode() {
    const email = this.state.email;
    if (!this.validateEmail(email)) {
      this.setState({ error: true, message: "请输入有效邮箱地址" });
      return;
    }
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/verify/${email}/email`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        if (res.body.error) {
          this.setState({ error: true, message: res.body.response });
        } else {
          this.setState({ error: false, message: res.body.response }, () => {
            ResetPasswordStore.dispatch({
              type: 'EMAIL',
              payload: { email: email }
            });
            this.props.setView(2);
          });
        }
      }
    })
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
                  validationState={ this.validateEmail() }
                >
                  <ControlLabel>输入你的注册邮箱，我们将会发送验证码到你的邮箱</ControlLabel>
                  <FormControl
                    type="text"
                    value={ this.state.email }
                    placeholder="输入你的注册邮箱"
                    onChange={ this.handleEmailChange }
                  />
                  <FormControl.Feedback />
                  <HelpBlock>{ this.state.message }</HelpBlock>
                  <Button bsStyle="primary" onClick={ this.sendVerificationCode }>发送验证码</Button>
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