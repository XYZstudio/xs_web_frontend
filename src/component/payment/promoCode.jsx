import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import config from '../../../config.json';
import { browserHistory } from 'react-router';
import LoginStore from 'store/login';

export default class PromoCodeForm extends React.Component {
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
      <div>
        <form>
          <FormGroup className="marginTop" style={bigMargin}>
            <FormControl type="text" placeholder="请输入课程券号码" />
          </FormGroup>
        </form>
        <Button className="sporitButton" bsStyle="primary" bsSize="large" active>使用课程券</Button>
      </div>
    );
  }
}