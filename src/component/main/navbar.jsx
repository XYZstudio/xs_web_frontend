// Modules
import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Loginform from './login_form';

export default class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false }); 
  }

  render() {
    return (
      <div>
        <Navbar fixedTop collapseOnSelect style={{ marginBottom: 0 }}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Sporit</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="关于Sporit" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>公司故事</MenuItem>
                <MenuItem eventKey={3.2}>Sporit社区</MenuItem>
                <MenuItem eventKey={3.3}>团队介绍</MenuItem>
                 <MenuItem eventKey={3.4}>专家介绍</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#">在线课程</NavItem>
              <NavItem eventKey={2} href="#">名人讲座</NavItem>
              <NavItem eventKey={2} href="#">Sporit观点</NavItem>
              <NavItem eventKey={2} href="#">人才需求</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Sign Up</NavItem>
              <NavItem eventKey={2} onClick={this.open} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Loginform close={this.close} />
          </Modal.Body>
        </Modal>
      </div>
    );
  };
}