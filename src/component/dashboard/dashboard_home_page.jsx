import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import courseIcon from 'style/asset/courseIcon.png';
import LoginStore from 'store/login';


export default class DashboardHomePage extends React.Component {
  constructor() {
    super();
    this.showLastActivity = this.showLastActivity.bind(this);
    this.showEnrolledCourses = this.showEnrolledCourses.bind(this);

    this.state = {
      user: null
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

  goToDetail(courseName) {
    browserHistory.push(`/dashboard/courses/${courseName}`);
  }

  showLastActivity() {
    console.log("********* User **********");
    console.log(this.state.user);
    console.log("*************************");
    var lastActivity = this.state.user.lastActivity;
    if (lastActivity && lastActivity.courseName && lastActivity.videoName) {
      return (
        <div className="dashboardContentPanel dashboardContentPanelBorder">
          <h1 className="dashboardContentPanelHeader">
            <span>
              <strong>
                { lastActivity.courseName }
              </strong>
            </span>
          </h1>
          <a className="panelButton" href="" onClick={ () => { this.goToDetail(lastActivity.courseName) } }>继续学习</a>
          <p>您现在正在学习: { lastActivity.videoName }</p>
        </div>
      );
    } else {
      return (
        <div className="dashboardContentPanel dashboardContentPanelBorder">
          <h1 className="dashboardContentPanelHeader">
            <span>
              <strong>
                目前没有最新动态。
              </strong>
            </span>
          </h1>
        </div>
      );
    }
  }

  showEnrolledCourses() {
    var user = this.state.user;
    if (user && user.course.length != 0) {
      var enrolledCourseInfo =  user.course;
      return enrolledCourseInfo = enrolledCourseInfo.map((c, i) => {
        return (
          <div
            key={ c.courseName }
            className="dashboardContentPanel dashboardContentPanelBorder dashboardContentCoursePanel"
          >
            <div><img className="coursePanelIcon" src={ courseIcon }/></div>
            <div>
              <h3 className="dashboardContentHeaderInPanel">{ c.courseName }</h3>
            </div>
            <div>
              <a className="panelButton" href="" onClick={ () => { this.goToDetail(c.courseName) } }>查看课程</a>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="dashboardContentPanel dashboardContentPanelBorder">
          <h1 className="dashboardContentPanelHeader">
            <span>
              <strong>
                目前没有加入课程。
              </strong>
            </span>
          </h1>
          <p>请去“所有课程”中查看我们提供的课程!</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div id="dashboardContentLastActivity">
          <h3 className="dashboardContentHeader">最近动态</h3>
          <div>
            { this.showLastActivity() }
          </div>
        </div>
        <div>
          <h3 className="dashboardContentHeader">我的课程</h3>
          <div>
            { this.showEnrolledCourses() }
          </div>
        </div>
      </div>
    );
  };
}
