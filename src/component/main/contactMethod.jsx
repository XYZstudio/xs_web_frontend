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
import faker from 'faker';
import courseStyle from 'style/mainPageCourse.scss';

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