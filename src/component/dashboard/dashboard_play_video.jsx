import React from 'react';
import LoginStore from 'store/login';
import courseStyle from 'style/course.scss';
import { browserHistory } from 'react-router';
import { Col, Row, Button } from 'react-bootstrap';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export default class DashboardPlayVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      vedioName: props.params.videoName,
      vedioPath: null
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
    .get(`http://localhost:3000/api/v1/get_video/${this.state.videoName}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res.body);
        this.setState({

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

  render() {
    return (
      <div>
        <Row>
          <Button onClick={ browserHistory.goBack }><FaAngleLeft />返回目录</Button>
        </Row>
        <Row className="textCenter">
          <h3>{ this.state.vedioName }</h3>
        </Row>
        <Row className="textCenter">
          <video 
            className="videoPlayer" 
            src="http://localhost:3000/api/v1/display/movie.mp4" 
            controls>
          </video>
        </Row>
        <Row>
          <h3>相关介绍</h3>
          <p>相关介绍为帮助你快速实现目标，我们根据你的报名时间为你的每个实战项目设置了截止日期。此时间线的设计标准为每周大约投入 10 小时。请在任何可能的时候回到教室继续学习，即使只是 5 分钟，也能确保不断取得进步。</p>
        </Row>
      </div>
    );
  };
}