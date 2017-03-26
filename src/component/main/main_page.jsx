// Modules
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import CarouselComponent from './carousel';
import JoinButtonComponent from './join_button';
import ThumbnailComponent from './thumbnail';
import MediaComponent from './media';
import PartnershipComponent from './partnership';

// Styles
import MainPageStyle from 'style/main.scss';


export default class MainPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row><CarouselComponent /></Row>
        <Row><JoinButtonComponent /></Row>
        <Row><ThumbnailComponent /></Row>
        <Row><MediaComponent /></Row>
        {/*<Row><PartnershipComponent /></Row>*/}
      </div>
    );
  };
}