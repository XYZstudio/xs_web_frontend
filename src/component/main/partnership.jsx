// Modules
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Carousel from 'react-bootstrap/lib/Carousel';
import PartnershipStyle from 'style/partnership.scss';

import temp1Img from 'style/asset/parterner_1.png';
import temp2Img from 'style/asset/parterner_2.png';
import temp3Img from 'style/asset/parterner_3.png';
import temp4Img from 'style/asset/parterner_4.png';
import temp5Img from 'style/asset/parterner_5.png';

import temp6Img from 'style/asset/parterner_6.png';
import temp7Img from 'style/asset/parterner_7.png';
import temp8Img from 'style/asset/parterner_8.png';
import temp9Img from 'style/asset/parterner_3.png';
import temp10Img from 'style/asset/parterner_2.png';

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
              <img src={ temp5Img }/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={ temp6Img }/>
              <img src={ temp7Img }/>
              <img src={ temp8Img }/>
              <img src={ temp9Img }/>
              <img src={ temp10Img }/>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    );
  }
}