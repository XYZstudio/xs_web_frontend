// Modules
import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselStyle from 'style/carousel.scss';
import slidingImg1 from 'style/asset/sliding1.png';
import slidingImg2 from 'style/asset/sliding2.png';
import slidingImg3 from 'style/asset/sliding3.png';

export default class CarouselComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={ slidingImg1 }/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ slidingImg2 }/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ slidingImg3 }/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}