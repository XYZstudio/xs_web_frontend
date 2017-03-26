import config from 'root/config.json';
import React from 'react';
import VideoStore from 'store/video';
import courseStyle from 'style/course.scss';
import { browserHistory } from 'react-router';
import { Col, Row, Button } from 'react-bootstrap';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

export default class DashboardPlayVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: props.params.videoName,
      videoDescription: '',
      vedioPath: null
    };
  }

  componentDidMount() {
    VideoStore.subscribe(() => {
      const description = VideoStore.getState();
      this.setState({ videoDescription: description });
    });
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
          <video 
            className="videoPlayer" 
            src={ `http://${config.host}:${config.rest_port}/api/v1/display/${this.state.videoName}` }
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
