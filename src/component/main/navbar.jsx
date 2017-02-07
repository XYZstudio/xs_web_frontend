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
import LoginStore from 'store/login';
import LogoImage from 'style/asset/logo.png';


export default class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      user: null,
      loginTab: true
    };
    this.openRegister = this.openRegister.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.close = this.close.bind(this);
    this.goToCourse = this.goToCourse.bind(this);
    this.loginOrUserDropdown = this.loginOrUserDropdown.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    const user = LoginStore.getState();
    if (user && user.email) {
      this.setState({ user: user });
    } else {
      this.setState({ user: null });
    }
  }

  componentDidMount() {
    LoginStore.subscribe(() => {
      this.setState({ user: LoginStore.getState() });
    });
  }

  openLogin() {
    this.setState({ showModal: true , loginTab: true });
  }

  openRegister() {
    this.setState({ showModal: true, loginTab: false });
  }

  close() {
    this.setState({ showModal: false }); 
  }

  goToCourse() {
    browserHistory.push('/course');
  }

  logout() {
    LoginStore.dispatch({ type: 'LOGOUT' });
    this.setState({ user: null });
  }

  loginOrUserDropdown() {
    if (this.state.user) {
      return (
        <NavDropdown eventKey={1} title={`你好，${this.state.user.name}`} id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} onClick={ () => {browserHistory.push('/dashboard')} }>我的教室</MenuItem>
          <MenuItem eventKey={1.2} onClick={ this.logout }>退出</MenuItem>
        </NavDropdown>
      );
    } else {
      return (
        <div>
          <Button className="loginRegisterButton registerButton" bsSize="small" onClick={this.openRegister}>注册</Button>
          <Button className="loginRegisterButton loginButton" bsSize="small" onClick={this.openLogin}>登录</Button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar fixedTop collapseOnSelect style={{ marginBottom: 0 }} className="whiteBackground">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img className="sporitLogo" src={ LogoImage }/></a>
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
              <NavItem eventKey={1} href="#" onClick={ this.goToCourse }>Sporit学位</NavItem>
              <NavItem eventKey={2} href="#">所有课程</NavItem>
              <NavItem eventKey={3} href="#">Sporit观点</NavItem>
              <NavItem eventKey={4} href="#">人才需求</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">
                { this.loginOrUserDropdown() }
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close}>
            <div className="textCenter">
              <a href="#"><img id="loginSporitLogo" src={ LogoImage }/></a>
            </div>
            <button type="button" className="modalCloseButton" onClick={this.close}>×</button>
          <Modal.Body>
            <LoginRegisterTabs closeModalWindow={this.close} showLoginTab={this.state.loginTab}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
}