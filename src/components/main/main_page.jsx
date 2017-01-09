// Modules
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import NavbarComponent from './navbar';
import CarouselComponent from './carousel';
import ThumbnailComponent from './thumbnail';
import MediaComponent from './media';

// Styles
require('../../styles/main.scss');


export default class MainPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row><NavbarComponent /></Row>
        <Row><CarouselComponent /></Row>
        <Row><ThumbnailComponent /></Row>
        <Row><MediaComponent /></Row>
      </div>
    );
  };
}