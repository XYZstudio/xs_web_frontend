import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import { browserHistory } from 'react-router';
import { Icon } from 'react-fa';
import activity1Img from 'style/asset/activity1Img.png';
import activity2Img from 'style/asset/activity2Img.jpg';
import ListGroup from 'react-bootstrap/lib/ListGroup';

export default class Activities extends React.Component {
  constructor() {
    super();
  }

  goToDetail(activityName) {
    browserHistory.push(`/activities/${activityName}`);
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={14} md={10}>
                <Well className="course-cell-wrap" style={{height: 400}}>
                  <Row>
                      <div className="agreementH1 hoverChangeColor activityHeader" onClick={ () => { this.goToDetail('beijing'); } }>
                        中美体育管理发展与人才培养论坛【北京】
                      </div>
                  </Row>
                  <Row>
                      <Col xs={4} md={5}>
                          <img className="activityPicture" src={activity1Img} style={{height: 280, cursor: 'pointer'}} onClick={ () => { this.goToDetail('beijing'); } } />
                      </Col>
                      <Col xs={12} md={7}>
                          <Row>
                              <ListGroup componentClass="ul">
                                <Row>
                                  <div className="agreementH2">地点：</div>
                                  <div className="pgraph">北京大学光华管理学院 898创新空间报告厅（1号楼301）</div>
                                </Row>
                                <Row>
                                  <div className="agreementH2">时间：</div>
                                  <div className="pgraph">2017年03月28日 13:30-16:30</div>
                                </Row>
                              </ListGroup>
                          </Row>
                      </Col>
                  </Row>
                </Well>

                <Well className="course-cell-wrap" style={{height: 400}}>
                  <Row>
                      <div className="agreementH1 hoverChangeColor activityHeader" onClick={ () => { this.goToDetail('shanghai'); } }>
                        体育产业管理与人才培养研讨会【上海】
                      </div>
                  </Row>
                  <Row>
                      <Col xs={4} md={5}>
                          <img className="activityPicture" src={activity2Img} style={{height: 280, cursor: 'pointer'}} onClick={ () => { this.goToDetail('shanghai'); } } />
                      </Col>
                      <Col xs={12} md={7}>
                          <Row>
                              <ListGroup componentClass="ul">
                                <Row>
                                  <div className="agreementH2">地点：</div>
                                  <div className="pgraph">上海南京西路1376号波特曼丽思卡尔顿酒店 </div>
                                </Row>
                                <Row>
                                  <div className="agreementH2">时间：</div>
                                  <div className="pgraph">星期四，3月30日，11：30AM-1：30PM </div>
                                </Row>
                              </ListGroup>
                          </Row>
                      </Col>
                  </Row>
                </Well>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>

    );
  }
}
