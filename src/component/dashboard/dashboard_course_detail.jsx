import React from 'react';
import * as request from 'superagent';
import { Col, Row, Jumbotron, Button, Thumbnail, Alert } from 'react-bootstrap';
import LoginStore from 'store/login';
import videoImg from 'asset/video.png';
import courseStyle from 'style/course.scss';
import { Icon } from 'react-fa';
import faker from 'faker';
import { browserHistory } from 'react-router';

export default class DashboardCourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      courseName: props.params.courseName,
      course: null,
      videos: [],
      open: false,
      alertVisible: false,
    };
  }

  componentWillMount() {
    const user = LoginStore.getState();
    if (user && user.email) {
      this.setState({ user: user });
    } else {
      this.setState({ user: null });
    }
  }

  componentDidMount() {
    request
    .get(`http://localhost:3000/api/v1/get_course/${this.state.courseName}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res.body);
        this.setState({
          course: res.body.course,
          videos: res.body.videos
        });
      }
    });
  }

  addCourse(courseName) {
    request
    .post('http://localhost:3000/api/v1/add_course_to_user')
    .withCredentials()
    .send({
      email: this.state.user.email,
      courseNames: [courseName]
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        LoginStore.dispatch({
          type: 'LOGIN',
          user: res.body,
        });
        this.handleAlert(true);
      }
    });
  }

  handleAlert(bool) {
    this.setState({ alertVisible: bool });
  }

  playVideo(videoName) {
    browserHistory.push(`/dashboard/video/${videoName}`);
  }

  addCourseButton() {
    var user = this.state.user;
    if (user != null) {
      var enrolledCourseInfo =  user.course;
      if (enrolledCourseInfo != null) {
        for (var i = 0;i < enrolledCourseInfo.length;i++) {
          var enrolledCourseName = enrolledCourseInfo[i].courseName;
          if (enrolledCourseName == this.state.courseName) {
            return (<div></div>);
          }
        }
      }
    }
    return (
      <Button bsStyle="primary" onClick={ () => { this.addCourse(this.state.courseName); } }>加入课程</Button>
    );
  }

  render() {
    var alert = '';
    if (this.state.alertVisible) {
      alert =  (
        <Alert bsStyle="info" onDismiss={ () => { this.handleAlert(false); } }>
          <h4>You have successfully added course: { this.courseName }</h4>
        </Alert>
      );
    }

    return (
      <div>
        { alert }
        <Row>
          <Jumbotron>
            <h3>{ this.state.courseName }</h3>
            <p>{ this.state.course && this.state.course.description }</p>
            { this.addCourseButton() }
          </Jumbotron>
        </Row>
        <Row>
          {
            this.state.videos.map(video => {
              return (
                <Thumbnail 
                  key={ video._id } 
                  src={ videoImg } 
                  alt="242x200" 
                  className="video-container"
                  onClick={ () => { this.playVideo(video.name) } }>
                  <h4>{ video.name }</h4>
                  <p>
                    <Icon className="video-sub-icon" name="clock-o" />{ parseInt(faker.random.number() / 1000) }min
                  </p>
                  <p>{ video.description }</p>
                </Thumbnail>
              );
            })
          }
        </Row>
      </div>
    );
  };
}
