// Modules
import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class BottomNavbarComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect style={{ marginBottom: 0 }}>
          <Nav>
            <NavItem eventKey={1} href="#">加入我们</NavItem>
            <NavItem eventKey={2} href="#">联系我们</NavItem>
            <NavItem eventKey={3} href="#">法律条款</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Copyright <b>思博锐</b> 2017</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  };
}