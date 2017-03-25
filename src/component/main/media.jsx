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
            <p className="pgraph">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
          <Media.Right>
            <img width={500}  src={ mediaImage2 } alt="Image"/>
          </Media.Right>
        </Media>

      </div>
    );
  }
}