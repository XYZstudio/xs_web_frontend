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

export default class AlipayForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : null
    };
  }

  render() {
    const bigMargin = {
      marginTop : '50px',
      marginBottom : '50px'
    };
    return (
      <div className="textCenter" style={bigMargin}>
      <Button>进入支付宝收银台</Button>
      </div>
    );
  }
}