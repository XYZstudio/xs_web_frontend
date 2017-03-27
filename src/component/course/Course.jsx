import config from 'root/config.json';
import React from 'react';
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
import courseStyle from 'style/mainPageCourse.scss';
import Grid from 'react-bootstrap/lib/Grid';

var Loading = require('react-loading');

export default class Course extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoading: true,
      courses: []
    };
  }

  componentDidMount() {
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_all_courses`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res.body);
        this.setState({ 
          courses: res.body,
          showLoading: false
        });
      }
    });
  }

  goToDetail(courseName) {
    browserHistory.push(`/courses/${courseName}`);
  }

  render() {
    var courses = this.state.courses;
    courses = courses.map(c => {
      return (
        <Well key={ c._id } className="main-page-course">
          <Row>
            <Media>
              <Media.Left>
                <img className="courseImage" width={250} height={200} src={ `data:png;base64,${ c.image }` } alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading className="agreementH2">{ c.name }</Media.Heading>
                <p className="pgraph">{ c.description }</p>
                <Button
                  bsStyle="primary"
                  className="main-page-course-detail-btn"
                  onClick={ () => { this.goToDetail(c.name); } }
                >
                  查看课程
                </Button>
              </Media.Body>
            </Media>
          </Row>
        </Well>
      );
    });

    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={14} md={10}>
          {this.state.showLoading ? <div className="textCenter"><div className="loadingIcon"><Loading type='balls' color='#e3e3e3' /></div></div> : <Row>{ courses }</Row>}
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    );
  }
}