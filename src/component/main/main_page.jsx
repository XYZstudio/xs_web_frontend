// Modules
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import NavbarComponent from './navbar';
import CarouselComponent from './carousel';
import ThumbnailComponent from './thumbnail';
import MediaComponent from './media';
import PartnershipComponent from './partnership';
import BottomNavbarComponent from './bottom_navbar';

// Styles
import MainPageStyle from 'style/main.scss';


export default class MainPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row className="main-navbar"><NavbarComponent /></Row>
        <Row><CarouselComponent /></Row>
        <Row><ThumbnailComponent /></Row>
        <Row><MediaComponent /></Row>
        <Row><PartnershipComponent /></Row>
        <Row><BottomNavbarComponent /></Row>
      </div>
    );
  };
}