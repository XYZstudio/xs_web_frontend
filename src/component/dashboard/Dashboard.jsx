// Modules
import React from 'react';
import DashboardHeader from './dashboard_header';
import Sidebar from './dashboard_sidebar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import dashboardStyle from 'style/dashboard.scss';

export default class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div id="dashboardSidebarContainer">
          { this.props.side }
        </div>
        <div id="dashboardContentContainer">
          { this.props.body }
        </div>
      </div>
    );
  };
}