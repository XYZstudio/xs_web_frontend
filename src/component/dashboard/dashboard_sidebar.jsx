import config from 'root/config.json';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import VideoStore from 'store/video';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaBook from 'react-icons/lib/fa/book';
import FaHome from 'react-icons/lib/fa/home';
import FaCartPlus from 'react-icons/lib/fa/cart-plus';
import FaCog from 'react-icons/lib/fa/cog';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      course: null,
      collapseCreerInfo: {
        display: 'none'
      },
      leftArrow: {
        display: ''
      },
      downArrow: {
        display: 'none'
      }
    };
    this.toggleCareerInfo = this.toggleCareerInfo.bind(this);
    this.handleGoBackToMenu = this.handleGoBackToMenu.bind(this);
  }

  componentDidMount() {
    VideoStore.subscribe(() => {
      let video = VideoStore.getState();
      this.getCourseByVideoName(video.videoName);
    });

    if (this.props.params.videoName) {
      this.getVideoInfo(this.props.params.videoName);
    }
  }

  getCourseByVideoName(videoName) {
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_course_by_video_name/${videoName}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ course: res.body });
      }
    });
  }

  getVideoInfo(videoName) {
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_video/${videoName}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ videoName: videoName }, () => {
          VideoStore.dispatch({
            type: 'PLAY',
            videoName: videoName,
            description: res.body.description
          });
        }); 
      }
    });
  }

  handleClickTabs(videoName) {
    this.getVideoInfo(videoName);
  }

  handleGoBackToMenu(e) {
    e.preventDefault();
    this.setState({ videoName: null, course: null }, () => {
      VideoStore.dispatch({
        type: 'PLAY',
        videoName: null,
        description: ''
      });
      browserHistory.push('/dashboard/courses');
    });
  }

  toggleCareerInfo(){
    if (this.state.collapseCreerInfo.display == 'none') {
      this.setState(
        { 
          collapseCreerInfo : { display: '' },
          leftArrow : { display: 'none' },
          downArrow : { display: '' } 
        }
      );
    } else {
      this.setState(
        { 
          collapseCreerInfo : { display: 'none' },
          leftArrow : { display: '' },
          downArrow : { display: 'none' } 
        }
      );
    }
  }

  render() {
    if (this.state.course) {
      return (
        <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
          <div className="sidebar-nav navbar-collapse collapse">
            <ul className="nav in" id="side-menu">
              {
                this.state.course.video.map((c, idx) => {
                  if (idx === 0) {
                    return (
                      <li key={0}>
                        <img src={ `data:png;base64,${ this.state.course.image }` } height="180" width="272" />
                      </li>
                    );
                  }
                  return (
                    <li key={idx} style={{ paddingLeft: 10 }}>
                      <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push(`/dashboard/video/${c.videoName}`); this.handleClickTabs(c.videoName); }}>
                        { c.videoName }
                      </a>
                    </li>
                  );
                })
              }
              <li style={{ paddingLeft: 10 }}>
                <a href="" onClick={ (e) => { this.handleGoBackToMenu(e); } }>
                  返回目录
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
          <div className="sidebar-nav navbar-collapse collapse">
            <ul className="nav in" id="side-menu">
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard'); }} >
                  <FaHome className="dashboardSideBarIcon"/> &nbsp;我的课程
                </a>
              </li>

              <li>
                <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/courses'); }} >
                  <FaBook className="dashboardSideBarIcon"/> &nbsp;所有课程
                </a>
              </li>

              <li>
                <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerList'); }} >
                  <FaGlobe className="dashboardSideBarIcon"/> &nbsp;职业中心
                </a>
              </li>

              <li>
                <a onClick={ this.toggleCareerInfo } >
                  <FaAlignLeft className="dashboardSideBarIcon"/> &nbsp;职业资料
                  <FaAngleLeft className="collapseExpandArrow" style={ this.state.leftArrow }/>
                  <FaAngleDown className="collapseExpandArrow" style={ this.state.downArrow }/>
                </a>
                <ul style={ this.state.collapseCreerInfo }>
                  <li>
                    <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Summary'); }} >
                      &nbsp;个人简介
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/ContactInfo');}} >
                      &nbsp;联系方式
                    </a>
                  </li>
                  <li>
                    <a 
                      href="" 
                      onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Experience');}} >
                      &nbsp;工作经历
                    </a>
                  </li>
                  <li>
                    <a 
                      href="" 
                      onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Education');}} >
                      &nbsp;教育背景
                    </a>
                  </li>
                  <li>
                    <a 
                      href="" 
                      onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Resume');}} >
                      &nbsp;简历上传
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/BasicInfo');}} >
                      &nbsp;注册信息
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/'); }} >
                  <FaSignOut className="dashboardSideBarIcon"/> &nbsp;返回主页
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Sidebar;
