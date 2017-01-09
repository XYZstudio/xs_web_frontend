// Modules
import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

const tempImg = 'https://sandbergwallpaper.com/wp-content/uploads/2014/09/515-61_image2-300x300.jpg';

export default class CarouselComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Carousel style={{ height: 500 }}>
        <Carousel.Item style={{ height: 500 }}>
          <img width={1600} height={500} alt="900x500" src={ tempImg }/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500 }}>
          <img width={1600} height={500} alt="900x500" src={ tempImg }/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500 }}>
          <img width={1600} height={500} alt="900x500" src={ tempImg }/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}