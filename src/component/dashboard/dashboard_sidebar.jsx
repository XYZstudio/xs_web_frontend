import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/courses'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Courses
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/lectures'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Lectures
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/profile'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
