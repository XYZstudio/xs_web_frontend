import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

export default class CompanyIntro extends React.Component {
  constructor() {
    super();
  }

  render() {
    var balankspace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={14} md={10}>
          <div className="textCenter agreementH1 bigMarginTop">公司故事</div>
          &nbsp;&nbsp;
          <div className="pgraph">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2014，国务院《关于加快发展体育产业促进体育消费的若干意见》出台；2016，国家体育总局《体育产业发展“十三五”规划》发布。2020年，中国体育产业总规模超过5万亿元，预计从业人员数超过600万人。国家战略、转型支撑，中国体育产业的黄金时代来了。</div>
          <div className="pgraph">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;竞技体育到职业体育，体育事业到体育产业。专业的人做专业的事，中国最高的“主席”姚明破冰而来。产业发展的核心是人才，中国体育产业在迎来历史发展机遇的同时，体育营销、体育经纪、体育赛事管理、体育与互联网科技融合......缺口将达400万。行业风口，一将难求。</div>
          <div className="pgraph">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这样的时刻，思博锐集结了这样一群人，与前任NBA总裁斯特恩畅谈交流，在美国最火爆的职业橄榄球联盟实习，为拜仁慕尼黑制定线上宣传策略…他们在哥伦比亚大学体育管理硕士项目取得真经。中美体育产业的业内顶尖专家名师，组成思博锐签约顾问团队。由全哥伦比亚大学班底组成的思博锐，为您打造一流的国际职业体育管理学习平台，共谋中国体育大业 。</div>
          <div className="pgraph">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;思博锐——集培训，求职，交流为一体，是全国第一个由国际班底组成的体育类教育机构。通过在线平台，让你随时随地都能在第一时间接受哥伦比亚大学以及行业内权威导师的授课指点。除此之外，思博锐整合独家体育类就业机遇，为会员打开职场瓶颈。在线下，思博锐定期开展赴美考察交流，让您与职业联盟高管、赛事运销高手面对面零距离接触。</div>
          <div className="pgraph">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论是欧洲豪门的频频夏日访华，还是NBA中国的强势发展，无不昭示着中国在体育全球化大趋势下机会无限。朝阳体育不缺资本不缺钱，不断呼唤的是人才，迫切需要的是专才。所以，思博锐来了！2017，中国体育产业快速发展元年，传统的体育产业迎来商业化转型，在这样绝佳的时期，让思博锐助您一臂之力，成为蓬勃发展的中国体育产业最渴求的人才！</div>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    );
  }
}