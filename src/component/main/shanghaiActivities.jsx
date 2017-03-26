import config from 'root/config.json';
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import MainPageStyle from 'style/main.scss';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import { Icon } from 'react-fa';
import courseStyle from 'style/mainPageCourse.scss';
import activity2Img from 'style/asset/activity2Img.jpg';
import QRCCodeImage from 'style/asset/qrcode.jpg';

export default class ShanghaiActivities extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={2}></Col>
        <Col xs={14} md={8}>
          <Row>
            <div className="textCenter agreementH1 bigMarginTop">体育产业管理与人才培养研讨会【上海】</div>
          </Row>
          <Row>
            <div className="agreementH2">地点：</div>
            <div className="pgraph">上海南京西路1376号波特曼丽思卡尔顿酒店 </div>
          </Row>
          <Row>
            <div className="agreementH2">时间：</div>
            <div className="pgraph">星期四，3月30日，11：30AM-1：30PM </div>
          </Row>
          <Row>
            <div className="pgraph">中国体育的蓬勃发展已被列为2018国际体育行业十大走向的首位。这个新兴行业正在以每年30万个新增职位的速度前进，为现有从业人员和想要跨界从事体育行业的专业人士提供了前所未有的契机。专业的体育管理人才需要具备哪些素质？在NBA、美巡赛 (PGATour)和IMG这样一流的国际体育公司工作是怎样的感受？如何才能够加入这样的公司？
</div>
            <div className="pgraph">3月30号中午美国哥伦比亚大学体育管理项目主任、美国棒球分析专家Vince Gennaro教授，体育场馆管理专家、前美国场馆协会会长William Squires教授， 国际高尔夫赛事领导者美巡赛(PGA Tour)副总裁、大中华区董事总经理葛国瑞 (Greg Gilligan)，及著名体育经纪公司IMG中国区CEO、前NBA副总裁Michael Ma, 将作客上海美国商会共同探讨体育管理人才发展的问题。
</div>
            <div className="pgraph">为广大体育行业的专业人士提供向国内外顶尖专家学习和交流的机会就是我们的宗旨！在发送300个高峰论坛座席之后，思博锐再送超级大福利！思博锐体育将送出价值600元的美商会午餐研讨会入场券20张！
</div>
            <div className="pgraph">美商会活动链接<a href="https://amcham-shanghai.eventbank.cn/event/8634/" target="_blank">https://amcham-shanghai.eventbank.cn/event/8634/</a></div>
            <div className="pgraph textCenter">关注SPORiT思博锐体育</div>
            <div className="pgraph textCenter">更多了解大咖嘉宾</div>
            <div className="pgraph textCenter">掌握论坛最新资讯和实时动态
</div>
          </Row>
          <Row className="textCenter">
            <img src={QRCCodeImage}/>
          </Row>
        </Col>
        <Col xs={2} md={2}></Col>
      </Grid>
    );
  }
}