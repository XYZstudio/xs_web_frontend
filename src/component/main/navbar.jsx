// Modules
import React from 'react';
import { browserHistory } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import LoginRegisterTabs from './login_register_tabs';
import LogoImage from 'style/asset/logo.png';


export default class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.goToCourse = this.goToCourse.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false }); 
  }

  goToCourse() {
    browserHistory.push('/course');
  }

  render() {
    return (
      <div>
        <Navbar fixedTop collapseOnSelect style={{ marginBottom: 0 }} className="whiteBackground">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img id="sporitLogo" src={ LogoImage }/></a>
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
              <NavItem eventKey={1} href="#" onClick={ this.goToCourse }>在线课程</NavItem>
              <NavItem eventKey={2} href="#">名人讲座</NavItem>
              <NavItem eventKey={3} href="#">Sporit观点</NavItem>
              <NavItem eventKey={4} href="#">人才需求</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Sign Up</NavItem>
              <NavItem eventKey={2} onClick={this.open} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close}>
            <div className="textCenter">
              <a href="#"><img id="loginSporitLogo" src={ LogoImage }/></a>
            </div>
            <button type="button" className="modalCloseButton" onClick={this.close}>×</button>
          <Modal.Body>
            <LoginRegisterTabs/>
            {/*<Loginform close={this.close} />*/}
          </Modal.Body>
        </Modal>
      </div>
    );
  };
}