import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

export default class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.close = this.close.bind(this);
    this.show2dCode = this.show2dCode.bind(this);
    this.state = {
      username: '',
      password: '',
      show2dCode: { display: 'none' },
      close: props.close
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  close() {
    this.state.close();
  }

  show2dCode() {
    this.setState({ show2dCode: {} });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId='formBasicText'
        >
          <ControlLabel>Username/Email/Phone: </ControlLabel>
          <FormControl
            type='text'
            value={this.state.username}
            placeholder='Username/Email/Phone'
            onChange={this.handleUsernameChange}
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
        </FormGroup>

        <Button bsStyle="success" onClick={this.close} block>Login</Button>
        <Button onClick={this.close} block>Close</Button>
        <Button onClick={this.show2dCode} block>Login with WeChat</Button>
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