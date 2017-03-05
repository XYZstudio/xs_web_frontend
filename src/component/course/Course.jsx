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
import { Icon } from 'react-fa';
import faker from 'faker';
import courseStyle from 'style/mainPageCourse.scss';

export default class Course extends React.Component {
  constructor() {
    super();
    this.state = {
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
        this.setState({ courses: res.body });
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
                <img width={250} height={200} src={ c.image } alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{ c.name }</Media.Heading>
                <p>
                  <Icon name="clock-o" />{ parseInt(faker.random.number() / 1000) }hrs
                  <Icon name="heart" />{ parseInt(faker.random.number() / 100) }
                </p>
                <p>{ c.description }</p>
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
      <Row>{ courses }</Row>
    );
  }
}