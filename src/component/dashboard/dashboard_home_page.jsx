import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';
import courseIcon from 'style/asset/courseIcon.png';

function DashboardHomePage(props) {
  return (
    <div className="dashboardContentMarginDiv">
      <div className="dashboardContentLargePanel">
        <h3 className="dashboardContentHeader">Latest Activity</h3>
        <div className="dashboardContentLargePanelMargin dashboardContentPanelBorder dashbardContentLargePanel">
          <h1 className="dashboardContentHeaderInPanel">
            <span>
              Continue
              <strong>
                Real-Time Analytics with Apache Storm
              </strong>
              ?
            </span>
          </h1>
          <a className="panelButton" href="">Resume Learning</a>
          <p >You are on Lesson 4</p>
        </div>
      </div>
      <div>
        <h3 className="dashboardContentHeader">Enrolled Courses</h3>
        <div className="dashboardContentSmallPanelMargin dashboardContentPanelBorder dashboardContentFloatSamllPanel">
          <div><img className="coursePanelIcon" src={ courseIcon }/></div>
          <div>
            <h3 className="dashboardContentHeaderInPanel">Course 1</h3>
            <p >balbablbalblablablablalbllalblalblalblalbllabllabllalblal</p>
          </div>
          <div>
            <a className="panelButton" href="">View Course</a>
          </div>
        </div>
        <div className="dashboardContentSmallPanelMargin dashboardContentPanelBorder dashboardContentFloatSamllPanel">
          <div><img className="coursePanelIcon" src={ courseIcon }/></div>
          <div>
            <h3 className="dashboardContentHeaderInPanel">Course 2</h3>
            <p >balbablbalblablablablalbllalblalblalblalbllabllabllalblal</p>
          </div>
          <div>
            <a className="panelButton" href="">View Course</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHomePage;
