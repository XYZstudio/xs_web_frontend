import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import LogoImage from 'style/asset/logo.png';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaBook from 'react-icons/lib/fa/book';
import FaHome from 'react-icons/lib/fa/home';
import FaCartPlus from 'react-icons/lib/fa/cart-plus';
import FaCog from 'react-icons/lib/fa/cog';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.toggleCareerInfo = this.toggleCareerInfo.bind(this);
    this.state = {
      collapseCreerInfo: {
        display: 'none'
      },
      leftArrow: {
        display: ''
      },
      downArrow: {
        display: 'none'
      }
    };
  }

  toggleCareerInfo(){
    if (this.state.collapseCreerInfo.display == 'none') {
      this.setState(
        { 
          collapseCreerInfo : { display: '' },
          leftArrow : { display: 'none' },
          downArrow : { display: '' } 
        }
      );
    } else {
      this.setState(
        { 
          collapseCreerInfo : { display: 'none' },
          leftArrow : { display: '' },
          downArrow : { display: 'none' } 
        }
      );
    }
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="textCenter" id="dashboardLogoDiv">
          <a href="/"><img id="loginSporitLogo" src={ LogoImage }/></a>
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
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerList'); }} >
                <FaGlobe className="dashboardSideBarIcon"/> &nbsp;职业中心
              </a>
            </li>

            <li>
              <a onClick={ this.toggleCareerInfo } >
                <FaAlignLeft className="dashboardSideBarIcon"/> &nbsp;职业资料
                <FaAngleLeft className="collapseExpandArrow" style={ this.state.leftArrow }/>
                <FaAngleDown className="collapseExpandArrow" style={ this.state.downArrow }/>
              </a>
              <ul style={ this.state.collapseCreerInfo }>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Summary'); }} >
                    &nbsp;个人简介
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/ContactInfo');}} >
                    &nbsp;联系方式
                  </a>
                </li>
                <li>
                  <a 
                    href="" 
                    onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Experience');}} >
                    &nbsp;工作经历
                  </a>
                </li>
                <li>
                  <a 
                    href="" 
                    onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Education');}} >
                    &nbsp;教育背景
                  </a>
                </li>
                <li>
                  <a 
                    href="" 
                    onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/Resume');}} >
                    &nbsp;简历上传
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/careerInfo/BasicInfo');}} >
                    &nbsp;注册信息
                  </a>
                </li>
              </ul>
            </li>

            {/*<li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/dashboard/setting'); }} >
                <FaCog className="dashboardSideBarIcon"/> &nbsp;设置
              </a>
            </li>*/}

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); browserHistory.push('/'); }} >
                <FaSignOut className="dashboardSideBarIcon"/> &nbsp;返回主页
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
