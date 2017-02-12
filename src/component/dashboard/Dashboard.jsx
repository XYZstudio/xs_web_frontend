// Modules
import React from 'react';
import DashboardHeader from './dashboard_header';
import Sidebar from './dashboard_sidebar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div id="dashboardSidebarContainer">
          <Sidebar/>
        </div>
        <div id="dashboardContentContainer">
          { this.props.children }
        </div>
      </div>
    );
  };
}