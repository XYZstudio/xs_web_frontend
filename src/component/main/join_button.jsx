// Modules
import React from 'react';

import Loginform from './login_form';

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


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
          <Button id="joinButton" bsSize="large" block onClick={this.open}>JOIN OUR NETWORK</Button>
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
  }
}