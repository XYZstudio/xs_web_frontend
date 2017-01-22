// Modules
import React from 'react';
import * as request from 'superagent';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(event, value) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event, value) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    request
    .post('http://localhost:3000/api/v1/login')
    .withCredentials()
    .send(this.state)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleLogin }>
          <label>
            USERNAME: <input type="text" value={ this.state.username } onChange={ this.handleUsername } />
          </label>
          <label>
            PASSWORD: <input type="password" value={ this.state.password } onChange={ this.handlePassword } />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  };
}