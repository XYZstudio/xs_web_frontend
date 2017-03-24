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
import traningImg from 'style/asset/trainingSchedule.png';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class Activities extends React.Component {
  constructor() {
    super();
  }

  goToDetail(activityName) {
    browserHistory.push(`/activities/${activityName}`);
  }

  render() {
    return (
      <div className="textCenter bigMarginTop">
                <Jumbotron>
                    <Row>
                        <div className="agreementH2 hoverChangeColor" onClick={ () => { this.goToDetail('beijing'); } }>
                          中美体育管理发展与人才培养论坛
                        </div>
                    </Row>
                    <Row>
                        <div className="agreementH2 hoverChangeColor" onClick={ () => { this.goToDetail('shanghai'); } }>
                          Sport Industry Management – Talent Development Workshop
                        </div>
                    </Row>
                </Jumbotron>
      </div>
    );
  }
}
