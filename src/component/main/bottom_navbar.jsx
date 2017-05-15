// Modules
import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Modal from 'react-bootstrap/lib/Modal';
import { browserHistory } from 'react-router';
import QRCCodeImage from 'style/asset/qrcode.jpg';
import wechatIcon from 'style/asset/wechat.png';

export default class BottomNavbarComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
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

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
            <NavItem eventKey={1}>关注我们 <img src={ wechatIcon } onClick={ this.open } height="30" width="30" /></NavItem>
            <NavItem eventKey={3} href="#" style={{marginRight:18}}>Copyright <b>思博锐</b> 2017</NavItem>
          </Nav>
        </Navbar>
        <Modal show={ this.state.showModal } onHide={ this.close }>
          <Modal.Header closeButton>
            <Modal.Title>关注我们的微信公众号</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={ QRCCodeImage } style={{ display: 'block',margin: 'auto' }} />
          </Modal.Body>
        </Modal>
      </div>
    );
  };
}