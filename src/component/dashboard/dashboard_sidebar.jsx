import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import LogoImage from 'style/asset/logo.png';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaBook from 'react-icons/lib/fa/book';
import FaHome from 'react-icons/lib/fa/home';
import FaCartPlus from 'react-icons/lib/fa/cart-plus';
import FaCog from 'react-icons/lib/fa/cog';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaAlignLeft from 'react-icons/lib/fa/align-left';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="textCenter" id="dashboardLogoDiv">
          <a href="#"><img id="loginSporitLogo" src={ LogoImage }/></a>
        </div>
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard'); }} >
                <FaHome className="dashboardSideBarIcon"/> &nbsp;我的课程
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/courses'); }} >
                <FaBook className="dashboardSideBarIcon"/> &nbsp;所有课程
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerOppor'); }} >
                <FaGlobe className="dashboardSideBarIcon"/> &nbsp;人才需求
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo'); }} >
                <FaAlignLeft className="dashboardSideBarIcon"/> &nbsp;职业资料
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/chart'); }} >
                <FaCartPlus className="dashboardSideBarIcon"/> &nbsp;充值
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/setting'); }} >
                <FaCog className="dashboardSideBarIcon"/> &nbsp;设置
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/'); }} >
                <FaSignOut className="dashboardSideBarIcon"/> &nbsp;退出
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
