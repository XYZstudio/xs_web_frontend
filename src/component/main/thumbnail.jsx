// Modules
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import { browserHistory } from 'react-router';
import tn1Image from 'style/asset/tn1.jpg';
import tn2Image from 'style/asset/tn2.jpg';
import tn3Image from 'style/asset/tn3.jpg';

const tempImg = 'https://sandbergwallpaper.com/wp-content/uploads/2014/09/515-61_image2-300x300.jpg';

export default class ThumbnailComponent extends React.Component {
  constructor() {
    super();
  }

  gotoTrainingS(){
    browserHistory.push('/trainingS');
  }

  render() {
    return (
      <Grid>
        <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={ tn1Image } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3 className="agreementH2">最专业的线上体育管理课程</h3>
            <p className="pgraph">国际化的水准，本地化的内容和世界顶级专家的讲解，快速提升你的知识技能。模块化的课程设计，为你建立系统化的知识结构。</p>
            <p>
             {/* <Button bsStyle="default" onClick={this.gotoTrainingS}>详细信息</Button>*/}
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={ tn2Image } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3 className="agreementH2">与优质企业沟通交流的平台</h3>
            <p className="pgraph">丰富的线下活动，与潜在的雇主面对面交流，优先知晓新职位，定期职位推介，为你的职业发展做好准备。</p>
            <p>
              {/* <Button bsStyle="default">详细信息</Button>*/}
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={ tn3Image } alt="242x200" style={{ margin: 40, border: 0 }}>
            <h3 className="agreementH2">为企业量身定做的培训项目</h3>
            <p className="pgraph">整合海内外专家资源，为公司的体育业务发展提供咨询服务，量身打造知识产品，助力公司和行业发展。</p>
            <p>
               {/*<Button bsStyle="default">详细信息</Button>*/}
            </p>
          </Thumbnail>
        </Col>
        </Row>
      </Grid>
    );
  }
}