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
            <NavItem eventKey={1} href="#">About us</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
            <NavItem eventKey={3} href="#">Career</NavItem>
            <NavItem eventKey={4} href="#">Support</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Copyright <b>SPORIT</b> 2017</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  };
}