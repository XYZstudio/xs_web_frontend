import config from 'root/config.json';
import React from 'react';
import VideoStore from 'store/video';
import courseStyle from 'style/course.scss';
import { browserHistory } from 'react-router';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export default class DashboardPlayVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: props.params.videoName,
      videoDescription: '',
      vedioPath: null,
      error: null,
    };
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    VideoStore.subscribe(() => {
      const description = VideoStore.getState();
      this.setState({ videoDescription: description });
    });
  }

  handleError(event) {
    let error = event.target.error.code;
    if (error) {
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Button onClick={ browserHistory.goBack }><FaAngleLeft />返回目录</Button>
        </Row>
        <Row className="textCenter">
          <h3>{ this.state.videoName }</h3>
        </Row>
        <Row className="textCenter">
          {
            this.state.error ?
            <div style={{ position: 'relative', top: 400, opacity: 0.6 }}>
              <h4>无法播放该视频，可能由于以下原因：</h4>
              <ul style={{ listStyle: 'none' }}>
                <li>你尚未购买该视频</li>
                <li>视频播放错误</li>
                <li>网络不稳定</li>
              </ul>
            </div>
            :
            ''
          }
          <video 
            className="videoPlayer" 
            src={ `http://${config.host}:${config.rest_port}/api/v1/display/${this.state.videoName}` }
            onError={ this.handleError }
            controls
            autoPlay
          >
          </video>
        </Row>
        <Row className="videoDescription">
          <h3>相关介绍</h3>
          <p>{ this.state.videoDescription }</p>
        </Row>
      </div>
    );
  };
}
