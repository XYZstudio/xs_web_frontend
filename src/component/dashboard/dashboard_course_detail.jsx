import React from 'react';
import * as request from 'superagent';
import { Col, Row, Jumbotron, Button, Thumbnail } from 'react-bootstrap';
import LoginStore from 'store/login';
import videoImg from 'asset/video.png';
import courseStyle from 'style/course.scss';
import { Icon } from 'react-fa';
import faker from 'faker';

export default class DashboardCourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      courseName: props.params.courseName,
      course: null,
      videos: [],
      open: false,
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
        this.setState({
          course: res.body.course,
          videos: res.body.videos
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Jumbotron>
            <h3>{ this.state.courseName }</h3>
            <p>{ this.state.course && this.state.course.description }</p>
            <p><Button bsStyle="primary">收藏课程</Button></p>
          </Jumbotron>
        </Row>
        <Row>
          {
            this.state.videos.map(video => {
              return (
                <Thumbnail key={ video._id } src={ videoImg } alt="242x200" className="video-container">
                  <h4>{ video.name }</h4>
                  <p>
                    <Icon name="clock-o" style={{ marginLeft: 10, marginRight: 5 }} />{ parseInt(faker.random.number() / 1000) }min
                    <Icon name="heart" style={{ marginLeft: 10, marginRight: 5 }} />{ parseInt(faker.random.number() / 100) }
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
