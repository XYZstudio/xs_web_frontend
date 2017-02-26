import React from 'react';
import { Link } from 'react-router';
import FaHandPeaceO from 'react-icons/lib/fa/thumbs-up';

export default class VerifyEmail extends React.Component {
  render() {
    return (
      <div className="systemMessageContainer">
        <FaHandPeaceO className="systemMessageIcon"/>
        <h2 className="systemMessageHeader">验证邮箱已发送，请立即查收！</h2>
        <p>
          <Link to="/">回到主页继续登录</Link>
        </p>
      </div>
    );
  }
}