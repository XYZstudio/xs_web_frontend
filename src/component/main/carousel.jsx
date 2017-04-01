// Modules
import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import 'style/carousel.scss';
import slidingImg1 from 'style/asset/sliding1.jpg';
import slidingImg2 from 'style/asset/sliding2.jpg';
import slidingImg3 from 'style/asset/sliding3.jpg';

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
            <h3 className="carouselHeader">全球化</h3>
            <p className="carouselPgraph">国际化赛事的蓬勃发展，本土赛事海外比拼.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ slidingImg2 }/>
          <Carousel.Caption>
            <h3 className="carouselHeader">数据分析</h3>
            <p className="carouselPgraph">体育商业分析、运动技战术分析.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ slidingImg3 }/>
          <Carousel.Caption>
            <h3 className="carouselHeader">数字化</h3>
            <p className="carouselPgraph">数字媒体、社交媒体与可视化技术.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}