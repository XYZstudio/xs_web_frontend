import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Loginform from './login_form';
import Registerform from './register_form';

export default class LoginRegisterTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needReload: props.needReload ? true : false,
    };
  }

  render() {
    let activeTabKey = 1;
    if (!this.props.showLoginTab) {
      activeTabKey = 2;
    }
    return (
        <Tabs defaultActiveKey={ activeTabKey } id="uncontrolled-tab-example">
          <Tab eventKey={1} title="登录">
            <Loginform needReload={ this.state.needReload } closeModalWindow={ this.props.closeModalWindow }/>
          </Tab>
          <Tab eventKey={2} title="注册"> 
            <Registerform needReload={ this.state.needReload } closeModalWindow={ this.props.closeModalWindow }/>
          </Tab>
        </Tabs>
    );
  }
}