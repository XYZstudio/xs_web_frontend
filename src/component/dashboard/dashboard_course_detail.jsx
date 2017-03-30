import config from 'root/config.json';
import React from 'react';
import * as request from 'superagent';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';
import Alert from 'react-bootstrap/lib/Alert';
import LoginStore from 'store/login';
import VideoStore from 'store/video';
import courseStyle from 'style/course.scss';
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
      alertVisible: false,
      openOrderModal: false,
      qrCode: null,
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
        console.log(res.body);
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
      this.setState({ openOrderModal: true });
      request
      .post(`http://${config.host}:${config.rest_port}/api/v1/wechat/order`)
      .withCredentials()
      .send({ product_id: courseName })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
          this.setState({ qrCode: res.text });
          // request
          // .post(`http://${config.host}:${config.rest_port}/api/v1/add_course_to_user`)
          // .withCredentials()
          // .send({
          //   email: this.state.user.email,
          //   courseNames: [courseName]
          // })
          // .end((err, res) => {
          //   if (err) {
          //     console.error(err);
          //   } else {
          //     LoginStore.dispatch({
          //       type: 'LOGIN',
          //       user: res.body,
          //     });
          //     this.handleAlert(true);
          //   }
          // });
        }
      })
    }
  }

  handleAlert(bool) {
    this.setState({ alertVisible: bool });
  }

  playVideo(video) {
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_last_activity`)
    .withCredentials()
    .send({
      email: this.state.user.email,
      courseName: this.state.courseName,
      videoName: video.name,
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
        VideoStore.dispatch({
          type: 'PLAY',
          description: video.description,
        });
      }
    });
    browserHistory.push(`/dashboard/video/${video.name}`);
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

  orderModal() {
    return (
      <Modal
        show={ this.state.openOrderModal }
        onHide={ () => { this.setState({ openOrderModal: false }); } }
        container={ this }
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">购买课程：{ this.state.courseName }</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 250 }}>
          <Col xs={7} md={7}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              请按照以下步骤来购买此课程：
              <li>1. 请扫描以下二维码。</li>
              <li>2. 付款完毕后，请将微信支付凭证中的交易单号记下。</li>
              <li>3. 请将交易单号填入以下输入框以完成支付。</li>
              <li><b>交易单号：</b><input type="text" /></li>
              <li>4. 点击‘确认’，就可以尽情享受思博锐为你精心准备的课程：<b>{ this.state.courseName }</b> 啦！</li>
            </ul>
          </Col>
          <Col xs={5} md={5}>
            <Row style={{ textAlign: 'center' }}><Image src={ `data:png;base64,${ this.state.qrCode }` } /></Row>
            <Row style={{ textAlign: 'center' }}><b>价格：{ this.state.course.fee / 100 || 0 } 元</b></Row>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => { this.setState({ openOrderModal: false }); } } bsStyle="primary">确认</Button>
          <Button onClick={ () => { this.setState({ openOrderModal: false }); } }>取消</Button>
        </Modal.Footer>
      </Modal>
    );
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
                  onClick={ () => { this.playVideo(video) } }
                >
                  开始学习
                </Button>
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
          <h4>您已成功添加该课程！您可以在免费试用期内免费学习本课程。</h4>
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
                  { this.orderModal() }
                  <Col xs={12} md={4}>
                    <h3 className="agreementH2">{ this.state.courseName }</h3>
                    <p className="courseDescribtion">{ this.state.course && this.state.course.description }</p>
                    { this.addCourseButton() }
                  </Col>
                  <Col xs={12} md={8} className="textCenter">
                    <video
                      id="preview-video"
                      className="videoPlayer"
                      src={ `http://${config.host}:${config.rest_port}/api/v1/preview/${this.state.preview.name}` }
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
