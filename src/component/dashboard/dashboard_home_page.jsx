import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';
import courseIcon from 'style/asset/courseIcon.png';
import LoginStore from 'store/login';


export default class DashboardHomePage extends React.Component {
  constructor() {
    super();
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
    var lastActivity = this.state.user.lastActivity;
    if (lastActivity != null) {
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
          <p>You are on { lastActivity.videoName }</p>
        </div>
      );
    }
  }

  showEnrolledCourses() {
    var user = this.state.user;
    if (user != null) {
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
              <p>Course Description { i }</p>
            </div>
            <div>
              <a className="panelButton" href="" onClick={ () => { this.goToDetail(c.courseName) } }>查看课程</a>
            </div>
          </div>
        );
      });
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
