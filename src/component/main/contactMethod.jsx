import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ContactMethod extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={16} md={11}>
          <Row>
            <div className="agreementH1 bigMarginTop">联系我们</div>
          </Row>
          <Row>
            <div className="pgraph">官方邮箱: info@sporit.cn</div>
            <div className="pgraph">问题反馈: even.zhang@sporit.cn</div>
            <div className="pgraph">产品咨询: jane.wang@sporit.cn</div>
            <div className="pgraph">商务合作: jan.fang@sporit.cn</div>
            <div className="pgraph">媒体合作: xiaoxu.wang@sporit.cn</div>
            <div className="pgraph">人才应聘: xinyi.zhang@sporit.cn</div>
          </Row>
        </Col>
      </Grid>
    );
  }
}