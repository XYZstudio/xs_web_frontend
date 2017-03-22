import config from 'root/config.json';
import React from 'react';
import { Link } from 'react-router';
import * as request from 'superagent';
import FaHandPeaceO from 'react-icons/lib/fa/thumbs-up';

export default class VerifySuccess extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.params.token;
  }

  componentDidMount() {
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/verify/${this.token}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      }
    });
  }

  render() {
    return (
      <div className="systemMessageContainer">
        <FaHandPeaceO className="systemMessageIcon"/>
        <h2 className="systemMessageHeader">恭喜！您的账户已激活！</h2>
        <p>
          <Link to="/">回到主页继续登录</Link>
        </p>
      </div>
    );
  }
}