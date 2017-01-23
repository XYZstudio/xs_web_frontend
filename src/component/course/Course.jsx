import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';

import MainPageStyle from 'style/main.scss';

export default class Course extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row className="main-navbar"><NavbarComponent /></Row>
        <h2>This is course</h2>
        <Row><BottomNavbarComponent /></Row>
      </div>
    );
  }
}