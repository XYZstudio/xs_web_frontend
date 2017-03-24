import config from 'root/config.json';
import React from 'react';
import * as request from 'superagent';
import { Col, Row, Jumbotron, Button, Thumbnail, Alert } from 'react-bootstrap';
import LoginStore from 'store/login';
import courseStyle from 'style/course.scss';
import { Icon } from 'react-fa';
import { browserHistory } from 'react-router';

export default class DashboardCourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      courseName: props.params.courseName,
      course: null,
      videos: [],
      preview: null,
      open: false,
      alertVisible: false
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
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_course/${this.state.courseName}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({
          course: res.body.course,
          videos: res.body.videos,
          preview: res.body.preview,
        });
      }
    });

    LoginStore.subscribe(() => {
      this.setState({ user: LoginStore.getState() });
    });
  }

  addCourse(courseName) {
    if (this.state.user) {
      request
      .post(`http://${config.host}:${config.rest_port}/api/v1/add_course_to_user`)
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
  }

  handleAlert(bool) {
    this.setState({ alertVisible: bool });
  }

  playVideo(videoName) {
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_last_activity`)
    .withCredentials()
    .send({
      email: this.state.user.email,
      courseName: this.state.courseName,
      videoName: videoName,
      time: 0
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        LoginStore.dispatch({
          type: 'LOGIN',
          user: res.body,
        });
      }
    });
    browserHistory.push(`/dashboard/video/${videoName}`);
  }

  addCourseButton() {
    var user = this.state.user;
    if (user && user.email) {
      var enrolledCourseInfo =  user.course;
      if (enrolledCourseInfo) {
        for (var i = 0;i < enrolledCourseInfo.length;i++) {
          var enrolledCourseName = enrolledCourseInfo[i].courseName;
          if (enrolledCourseName === this.state.courseName) {
            return (<div></div>);
          }
        }
      }

      return (
        <Button bsStyle="primary" onClick={ () => { this.addCourse(this.state.courseName); } }>加入课程</Button>
      );
    } else {
      return (
        <Button bsStyle="primary" disabled>加入课程（请先登录）</Button>
      );
    }
  }

  playButton(video) {
    var user = this.state.user;
    if (user && user.email) {
      var enrolledCourseInfo =  user.course;
      if (enrolledCourseInfo) {
        for (var i = 0;i < enrolledCourseInfo.length;i++) {
          var enrolledCourseName = enrolledCourseInfo[i].courseName;
          if (enrolledCourseName == this.state.courseName) {
            return (
              <div>
                <Button 
                  bsStyle="primary" 
                  className="videoThumbnailPlayButton"
                  onClick={ () => { this.playVideo(video.name) } }>
                  开始学习</Button>
              </div>
            );
          }
        }
      }
    }
    return (
      <div></div>
    );
  }

  videoThumbnail() {
    return this.state.videos.map(video => {
      return (
        <Thumbnail 
          key={ video._id } 
          src={ `data:png;base64,${ video.image }` } 
          alt="242x200" 
          className="video-container">
          <h4>{ video.name }</h4>
          <div className="videoThumbnailContent">
            <p>{ video.description }</p>
          </div>
          { this.playButton(video) }
        </Thumbnail>
      );
    })
  }

  render() {
    var alert = '';
    if (this.state.alertVisible) {
      alert =  (
        <Alert bsStyle="info" onDismiss={ () => { this.handleAlert(false); } }>
          <h4>您已成功添加该课程！</h4>
        </Alert>
      );
    }

    if (!this.state.preview) { return null; }

    return (
      <div>
        { alert }
        <Row>
          <Jumbotron>
            <Row className="show-grid">
              <Col xs={12} md={4}>
                <h3>{ this.state.courseName }</h3>
                <p>{ this.state.course && this.state.course.description }</p>
                { this.addCourseButton() }
              </Col>
              <Col xs={12} md={8} className="textCenter">
                <video
                  id="preview-video"
                  className="videoPlayer" 
                  src={ `http://${config.host}:${config.rest_port}/api/v1/display/${this.state.preview.name}` }
                  controls
                  autoPlay
                >
                </video>
              </Col>
            </Row>
          </Jumbotron>
        </Row>
        <Row>
          { this.videoThumbnail() }
        </Row>
      </div>
    );
  };
}
