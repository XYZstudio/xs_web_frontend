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
import traningImg from 'style/asset/trainingSchedule.png';

export default class TrainingS extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="textCenter bigMarginTop">
        <img src={traningImg}/>
      </div>
    );
  }
}