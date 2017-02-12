// Modules
import React from 'react';

export default class DashboardCareerInfoPage extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="dashboardContentPanel dashboardContentPanelBorder dashboardContentCoursePanel">
        <div><img className="coursePanelIcon" src={ courseIcon }/></div>
        <div>
          <h3 className="dashboardContentHeaderInPanel">{ this.props.courseInfo.courseName }</h3>
          <p >{ this.props.courseInfo.courseDescribtion }</p>
        </div>
        <div>
          <a className="panelButton" href="">View Course</a>
        </div>
      </div>
    );
  };
}