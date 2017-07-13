import config from 'root/config.json';
import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import * as urlencode from 'urlencode';
import LoginStore from 'store/login';
import FaHandPeaceO from 'react-icons/lib/fa/thumbs-up';

export default class AutoLogin extends React.Component {
  constructor(props) {
    super(props);
    this.username = props.params.username;
    this.password = props.params.password;
    this.state = {
      login: false
    };
  }

  decode(param) {
    return urlencode.decode(param).replace(/ /g, '.');
  }

  componentDidMount() {
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/login_user`)
    .withCredentials()
    .send({
      email: this.decode(this.username),
      password: this.decode(this.password),
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        LoginStore.dispatch({
          type: 'LOGIN',
          user: res.body,
        });
        this.setState({ login: true });
        setTimeout(function() {
          browserHistory.push('/');
        }, 10000);
      }
    });
  }

  render() {
    let header;
    if (this.state.login) {
      header = (
        <div>
          <FaHandPeaceO className="systemMessageIcon"/>
          <h2 className="systemMessageHeader">已成功跳转登陆！10秒后跳转至主页</h2>
        </div>
      );
    } else {
      header = (
        <div>
          <h2 className="systemMessageHeader">跳转失败</h2>
        </div>
      );
    }

    return (
      <div className="systemMessageContainer">
        { header }
        <p>
          <Link to="/">回到主页继续登录</Link>
        </p>
      </div>
    );
  }
}