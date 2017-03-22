// Modules
import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import { browserHistory } from 'react-router';

export default class BottomNavbarComponent extends React.Component {
  constructor() {
    super();
  }

  gotoContactUs(){
    browserHistory.push('/contactus');
  }

  gotoJoinUs(){
    browserHistory.push('/joinus');
  }

  gotoAgreement(){
    browserHistory.push('/agreement');
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect style={{ marginBottom: 0 }}>
          <Nav>
            <NavItem eventKey={1} onClick={ this.gotoJoinUs }>加入我们</NavItem>
            <NavItem eventKey={2} onClick={ this.gotoContactUs }>联系我们</NavItem>
            <NavItem eventKey={3} onClick={ this.gotoAgreement }>法律条款</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" style={{marginRight:18}}>Copyright <b>思博锐</b> 2017</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  };
}