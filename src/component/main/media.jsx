// Modules
import React from 'react';
import Media from 'react-bootstrap/lib/Media';
import mediaImage1 from 'style/asset/media1.png';
import mediaImage2 from 'style/asset/media2.png';

const tempImg = 'https://sandbergwallpaper.com/wp-content/uploads/2014/09/515-61_image2-300x300.jpg';

export default class MediaComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ margin: 50 }}>

        <hr style={{ border: 0, height: 1, backgroundColor: '#e6e6e6' }} />

        <Media>
         <Media.Left>
            <img width={500}  src={ mediaImage1 } alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading className="agreementH2">公司介绍</Media.Heading>
            <p className="pgraph">思博锐——集培训，求职，交流为一体，是全国第一个由国际班底组成的体育类教育机构。通过在线平台，让你随时随地都能在第一时间接受哥伦比亚大学以及行业内权威导师的授课指点。除此之外，思博锐整合独家体育类就业机遇，为会员打开职场瓶颈。在线下，思博锐定期开展赴美考察交流，让您与职业联盟高管、赛事运销高手面对面零距离接触。让思博锐助您一臂之力，成为蓬勃发展的中国体育产业最渴求的人才！
</p>
          </Media.Body>
        </Media>

        <hr style={{ border: 0, height: 1, backgroundColor: '#e6e6e6' }} />

        <Media>
          <Media.Body>
            <Media.Heading className="agreementH2">课程介绍</Media.Heading>
            <p className="pgraph">跟随海内外体育管理精英和学者，学习领先企业与组织的最佳实践和前沿知识。来自全世界各地的老师们和思博锐为您共同搭建体育管理的课堂。传授与分享他们在体育管理教学和实践领域的深刻与独到的知识和见解。雄心勃勃但切实可行的2017全年学习规划，通过3阶段课程矩阵，步步进阶，循序渐进地学习多门课程：国际体育组织管理、体育场馆，体育营销，体育媒体，体育数字技术，体育商业分析，电子竞技，等等，并在学习中体会当今体育的三大趋势， 数字化、全球化和数据分析，在体育管理中的运用。</p>
          </Media.Body>
          <Media.Right>
            <img width={500}  src={ mediaImage2 } alt="Image"/>
          </Media.Right>
        </Media>

      </div>
    );
  }
}