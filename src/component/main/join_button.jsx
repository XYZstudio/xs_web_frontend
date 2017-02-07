// Modules
import React from 'react';

import Loginform from './login_form';

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import LoginRegisterTabs from './login_register_tabs';
import LogoImage from 'style/asset/logo.png';

export default class JoinButtonComponent extends React.Component {

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
          <Button className="blockCenter" id="joinButton" bsSize="large" block onClick={this.open}>JOIN OUR NETWORK</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
              <div className="textCenter">
                <a href="#"><img id="loginSporitLogo" src={ LogoImage }/></a>
              </div>
              <button type="button" className="modalCloseButton" onClick={this.close}>×</button>
            <Modal.Body>
              <LoginRegisterTabs closeModalWindow={this.close}/>
              {/*<Loginform close={this.close} />*/}
            </Modal.Body>
          </Modal>
        </div>
    );
  }
}