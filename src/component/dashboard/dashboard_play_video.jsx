import config from 'root/config.json';
import React from 'react';
import VideoStore from 'store/video';
import { browserHistory } from 'react-router';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import LoginRegisterTabs from '../main/login_register_tabs';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import LogoImage from 'style/asset/logo.png';
import 'style/course.scss';

export default class DashboardPlayVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: props.params.videoName,
      videoDescription: '',
      error: null,
      showModal: false,
      loginTab: true,
    };
    this.handleError = this.handleError.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    VideoStore.subscribe(() => {
      const video = VideoStore.getState();
      this.setState({
        videoName: video.videoName,
        videoDescription: video.description,
        error: null,
      });
    });
  }

  handleError(event) {
    let error = event.target.error.code;
    if (error) {
      this.setState({ error: error });
    }
  }

  openLogin() {
    this.setState({ showModal: true , loginTab: true });
  }

  openRegister() {
    this.setState({ showModal: true, loginTab: false });
  }

  close() {
    this.setState({ showModal: false }); 
  }

  render() {
    return (
      <div>
        <Row className="textCenter" style={{ marginBottom: 30 }}>
          <h3>{ this.state.videoName }</h3>
        </Row>
        <Row>
          <Row className="textCenter" style={{ position: 'relative' }}>
            <video
              className="videoPlayer"
              src={ `http://${config.host}:${config.rest_port}/api/v1/display/${this.state.videoName}` }
              onError={ this.handleError }
              controls
              autoPlay
            />
            {
              this.state.error ?
              <div className="videoWarning">
                <h4>无法播放该视频，可能由于以下原因：</h4>
                <ul>
                  <li>你尚未<a href="#" onClick={ this.openLogin }>登陆</a></li>
                  <li>你尚未购买该视频</li>
                  <li>网络不稳定</li>
                </ul>
              </div>
              : ''
            }
          </Row>
          <Row className="videoDescription">
            <p>{ this.state.videoDescription }</p>
          </Row>
        </Row>
        <Modal show={ this.state.showModal } onHide={ this.close }>
            <div className="textCenter">
              <a href="#"><img id="loginSporitLogo" src={ LogoImage }/></a>
            </div>
            <button type="button" className="modalCloseButton" onClick={ this.close }>×</button>
          <Modal.Body>
            <LoginRegisterTabs needReload={ true } closeModalWindow={ this.close } showLoginTab={ this.state.loginTab }/>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
}
