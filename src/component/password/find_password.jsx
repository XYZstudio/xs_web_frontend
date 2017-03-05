import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import SendVerification from './send_verification';
import ResetPassword from './reset_password';
import MainPageStyle from 'style/main.scss';

export default class FindMyPassword extends React.Component {
  constructor() {
    super();
    this.setView = this.setView.bind(this);
    this.state = {
      viewId: 1,
    };
  }

  setView(viewId) {
    this.setState({ viewId: viewId });
  }

  showView() {
    switch(this.state.viewId) {
      case 1:
        return <SendVerification setView={ this.setView } />;
      case 2:
        return <ResetPassword setView={ this.setView } />;
      default:
        return <SendVerification setView={ this.setView } />;
    }
  }

  render() {
    return (
      <Row>{ this.showView() }</Row>
    );
  }
}