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
    var lastActivity = this.state.user.lastActivity;
    var enrolledCourseInfo =  this.state.user.course;
    console.log("*********");
    console.log(enrolledCourseInfo);
    console.log("*********");
    var enrolledCourses = [];
    for (var i = 0;i < enrolledCourseInfo.length;i++) {
      enrolledCourses.push(
            <div className="dashboardContentPanel dashboardContentPanelBorder dashboardContentCoursePanel">
              <div><img className="coursePanelIcon" src={ courseIcon }/></div>
              <div>
                <h3 className="dashboardContentHeaderInPanel">{ this.state.user.course[i].courseName }</h3>
                <p >Course Description { i }</p>
              </div>
              <div>
                <a className="panelButton" href="">View Course</a>
              </div>
            </div>
      );
    }

    return (
      <div className="container">
        <div id="dashboardContentLastActivity">
          <h3 className="dashboardContentHeader">Latest Activity</h3>
          <div className="dashboardContentPanel dashboardContentPanelBorder">
            <h1 className="dashboardContentPanelHeader">
              <span>
                <strong>
                  { this.state.user.lastActivity.courseName }
                </strong>
              </span>
            </h1>
            <a className="panelButton" href="">Resume Learning</a>
            <p >You are on { this.state.user.lastActivity.videoName }</p>
          </div>
        </div>

        <div>
          <h3 className="dashboardContentHeader">Enrolled Courses</h3>
          <div>

            { enrolledCourses }

          </div>
        </div>
      </div>
    );
  };
}
