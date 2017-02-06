// Modules
import React from 'react';
import DashboardHeader from './dashboard_header';
import Sidebar from './dashboard_sidebar';

export default class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <DashboardHeader/>
        <div>
          <Sidebar/>
          <div id="dashboardContent">{ this.props.children }</div>
        </div>
      </div>
    );
  };
}