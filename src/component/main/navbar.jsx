import config from 'root/config.json';
import React from 'react';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import LoginRegisterTabs from './login_register_tabs';
import LoginStore from 'store/login';
import LogoImage from 'style/asset/logo.png';
import defaultAvatar from 'style/asset/default_avatar.png';


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

  goToActivities() {
    browserHistory.push('/activities');
  }

  gotoCareer(){
    browserHistory.push('/careerList');
  }

  logout() {
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/logout_user`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        LoginStore.dispatch({ type: 'LOGOUT' });
        this.setState({ user: null });
        browserHistory.push('/');
      }
    });
  }
  
  gotoCompanyInto(){
    browserHistory.push('/companyIntro');
  }

  gotoProfessorsIntro(){
    browserHistory.push('/professorsIntro');
  }

  loginOrUserDropdown() {
    if (this.state.user && this.state.user.name) {
      let userName = this.state.user.name.length > 12 ? this.state.user.name.slice(0, 9) + '...' : this.state.user.name;
      return (
        <NavItem eventKey={2} href="#" style={{ marginRight:18, width: 200 }}>
          <span>
            {
              this.state.user.icon ?
              <Image className="navbar-avatar" src={ `data:${ this.state.user.icon_type };base64,${ this.state.user.icon }` } /> :
              <Image className="navbar-avatar" src={ defaultAvatar } />
            }
          </span>
          <NavDropdown eventKey={1} title={`${userName}`} id="basic-nav-dropdown" className="navbarElement" style={{ cursor: 'default' }}>
            <MenuItem eventKey={1.1} onClick={ () => {browserHistory.push('/dashboard')} }>我的教室</MenuItem>
            <MenuItem eventKey={1.2} onClick={ this.logout }>退出</MenuItem>
          </NavDropdown>
        </NavItem>
      );
    } else {
      return (
        <NavItem eventKey={2} href="#" style={{ marginRight:18, width: 290 }}>
          <Button className="loginRegisterButton registerButton" bsSize="small" onClick={this.openRegister}>注册</Button>
          <Button className="loginRegisterButton loginButton" bsSize="small" onClick={this.openLogin}>登录</Button>
        </NavItem>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar fixedTop collapseOnSelect style={{ marginBottom: 0, height: 60 }} className="whiteBackground">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img className="sporitLogo" src={ LogoImage }/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navbarNav" style={{ height: 59 }}>
              <NavDropdown eventKey={3} title="关于思博锐" id="basic-nav-dropdown" className="navbarElement">
                <MenuItem eventKey={3.1} className="menuNavbarDropdownItem" onClick={ this.gotoCompanyInto }>公司简介</MenuItem>
                <MenuItem eventKey={3.4} className="menuNavbarDropdownItem" onClick={ this.gotoProfessorsIntro }>专家介绍</MenuItem>
              </NavDropdown>
              <NavItem className="navbarElement" eventKey={1} onClick={ this.goToCourse }>精品课程</NavItem>
              <NavItem className="navbarElement" eventKey={3} onClick={ this.goToActivities }>精彩活动</NavItem>
              <NavItem className="navbarElement" eventKey={4} onClick={ this.gotoCareer }>职业中心</NavItem>
            </Nav>
            <Nav pullRight>
              { this.loginOrUserDropdown() }
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