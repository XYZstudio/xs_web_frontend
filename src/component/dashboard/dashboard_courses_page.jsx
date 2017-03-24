import config from 'root/config.json';
import React from 'react';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import { Icon } from 'react-fa';
import courseStyle from 'style/course.scss';

export default class DashboardCoursesPage extends React.Component {
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
    browserHistory.push(`/dashboard/courses/${courseName}`);
  }

  render() {
    var courses = this.state.courses;
    courses = courses.map(c => {
      return (
        <Well key={ c._id } className="dashboardCourseCellWrap">
          <Row>
            <Media>
              <Media.Left>
                <img width={250} height={200} src={ `data:png;base64,${ c.image }` } alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{ c.name }</Media.Heading>
                <p>{ c.description }</p>
              </Media.Body>
            </Media>
          </Row>
          <Row>
            <Button
              bsStyle="primary"
              className="course-detail-btn"
              onClick={ () => { this.goToDetail(c.name); } }
            >
              查看课程
            </Button>
          </Row>
        </Well>
      );
    });

    return (
      <div className="dashboardContentMargin">
        { courses }
      </div>
    );
  }
}