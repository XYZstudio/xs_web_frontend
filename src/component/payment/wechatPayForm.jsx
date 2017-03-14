import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import config from '../../../config.json';
import { browserHistory } from 'react-router';
import LoginStore from 'store/login';

export default class WechatPayForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : null
    };
  }

  render() {
    return (
      <div>
        <div className="textCenter">请使用微信扫描下方二维码付款</div>
        <div>
          
        </div>
        <div className="textCenter">请打开「微信－扫一扫」扫描上方二维码，按操作提示完成支付。</div>
        <div className="textCenter">请在 2 小时内完成操作，过期后请返回作品页面重新开始购买</div>
      </div>  
    );
  }
}