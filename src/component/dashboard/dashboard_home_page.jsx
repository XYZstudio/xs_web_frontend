import React, { PropTypes } from 'react';
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

  render() {
    console.log(this.state.user);
    if (this.state.user != null) {
      var lastActivity = this.state.user.lastActivity;
      var enrolledCourseInfo =  this.state.user.course;
      var lastActivityElem = [];
      var enrolledCourses = [];

      if (lastActivity != null) {
        lastActivityElem.push(
            <div className="dashboardContentPanel dashboardContentPanelBorder">
              <h1 className="dashboardContentPanelHeader">
                <span>
                  <strong>
                    { this.state.user.lastActivity.courseName }
                  </strong>
                </span>
              </h1>
              <a className="panelButton" href="">继续学习</a>
              <p >You are on { this.state.user.lastActivity.videoName }</p>
            </div>
        );
      }

      if (enrolledCourseInfo != null) {
        for (var i = 0;i < enrolledCourseInfo.length;i++) {
          enrolledCourses.push(
            <div className="dashboardContentPanel dashboardContentPanelBorder dashboardContentCoursePanel">
              <div><img className="coursePanelIcon" src={ courseIcon }/></div>
              <div>
                <h3 className="dashboardContentHeaderInPanel">{ this.state.user.course[i].courseName }</h3>
                <p >Course Description { i }</p>
              </div>
              <div>
                <a className="panelButton" href="">查看课程</a>
              </div>
            </div>
          );
        }
      }
    }

    return (
      <div className="container">
        <div id="dashboardContentLastActivity">
          <h3 className="dashboardContentHeader">最近动态</h3>
          <div>
            { lastActivityElem }
          </div>
        </div>
        <div>
          <h3 className="dashboardContentHeader">我的课程</h3>
          <div>
            { enrolledCourses }
          </div>
        </div>
      </div>
    );
  };
}
