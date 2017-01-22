// Modules
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Carousel from 'react-bootstrap/lib/Carousel';
import PartnershipStyle from 'style/partnership.scss';
import partnerImg from 'asset/partner-img.png';

const temp1Img = 'https://s-media-cache-ak0.pinimg.com/originals/b6/78/49/b6784979a4bee915ac58e014630f229c.jpg';
const temp2Img = 'http://www.webdesignburn.com/wp-content/uploads/2015/04/Grey-Texture-Background-and-Wallpaper-12.jpg';
const temp3Img = 'https://s-media-cache-ak0.pinimg.com/originals/17/1a/27/171a2773864905863b9a017357507110.jpg';
const temp4Img = 'http://www.photohdx.com/images/2016/05/grey-dark-vintage-background-texture.jpg';

export default class PartnershipComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row >
          <h2 className="text-center">Who We've Helped</h2>
          <p className="partnership-caption text-center">We've enabled the hiring of 10000 people to our clients. Our clients include:</p>
        </Row>
        <Row>
          <Carousel className="partnership" indicators={false}>
            <Carousel.Item>
              <img src={ temp1Img }/>
              <img src={ temp2Img }/>
              <img src={ temp3Img }/>
              <img src={ temp4Img }/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ temp1Img }/>
              <img src={ temp2Img }/>
              <img src={ temp3Img }/>
              <img src={ temp4Img }/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ temp1Img }/>
              <img src={ temp2Img }/>
              <img src={ temp3Img }/>
              <img src={ temp4Img }/>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    );
  }
}