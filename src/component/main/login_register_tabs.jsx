import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Loginform from './login_form';
import Registerform from './register_form';

export default class LoginRegisterTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log();
    return (
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Login">
            <Loginform closeModalWindow={this.props.closeModalWindow}/>
          </Tab>
          <Tab eventKey={2} title="Register"> 
            <Registerform closeModalWindow={this.props.closeModalWindow}/>
          </Tab>
        </Tabs>
    );
  }
}