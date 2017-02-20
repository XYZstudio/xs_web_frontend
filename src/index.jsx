// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'component/App.jsx';
import Login from 'component/login/login_main.jsx';
import MainPage from 'component/main/main_page.jsx';
import Course from 'component/course/Course.jsx';
import FindMyPassword from 'component/password/find_password.jsx';
import NotFoundPage from 'component/main/not_found_page';
// Dashboard Components
import Dashboard from 'component/dashboard/Dashboard.jsx';
import DashboardHomePage from 'component/dashboard/dashboard_home_page.jsx';
import DashboardCoursesPage from 'component/dashboard/dashboard_courses_page.jsx';
import DashboardLecturesPage from 'component/dashboard/dashboard_lecture_page.jsx';

import DashboardCareerOpporPage from 'component/dashboard/dashboard_careerOppor_page.jsx';
import DashboardCareerInfoPage from 'component/dashboard/dashboard_careerInfo_page.jsx';
import DashboardChartPage from 'component/dashboard/dashboard_chart_page.jsx';
import DashboardSettingPage from 'component/dashboard/dashboard_setting_page.jsx';

import DashboardSummaryPage from 'component/dashboard/dashboard_summary_page.jsx';
import DashboardContactInfoPage from 'component/dashboard/dashboard_contactInfo_page.jsx';
import DashboardExperiencePage from 'component/dashboard/dashboard_experience_page.jsx';
import DashboardEducationPage from 'component/dashboard/dashboard_education_page.jsx';
import DashboardResumePage from 'component/dashboard/dashboard_resume_page.jsx';
import DashboardCourseDetail from 'component/dashboard/dashboard_course_detail.jsx';
import DashboardPlayVideo from 'component/dashboard/dashboard_play_video.jsx';

// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage } />
      <Route path='/course' component={ Course } />
      <Route path='/login' component={ Login } />
      <Route path='/reset_password' component={ FindMyPassword } />
      <Route path='/dashboard' component={ Dashboard } >
        <IndexRoute component={ DashboardHomePage } />
        <Route path='/dashboard/courses' component={ DashboardCoursesPage } />
        <Route
          path='/dashboard/courses/:courseName'
          getComponent={
            (nextState, cb) => {
              cb(null, DashboardCourseDetail);
            } 
          }
        />
        <Route
          path='/dashboard/video/:videoName'
          getComponent={
            (nextState, cb) => {
              cb(null, DashboardPlayVideo);
            } 
          }
        />
        <Route path='/dashboard/lectures' component={ DashboardLecturesPage } />
        <Route path='/dashboard/careerOppor' component={ DashboardCareerOpporPage } />
        <Route path='/dashboard/chart' component={ DashboardChartPage } />
        <Route path='/dashboard/setting' component={ DashboardSettingPage } />
        <Route path='/dashboard/careerInfo/Resume' component={ DashboardResumePage } />
        <Route path='/dashboard/careerInfo/Education' component={ DashboardEducationPage } />
        <Route path='/dashboard/careerInfo/Experience' component={ DashboardExperiencePage } />
        <Route path='/dashboard/careerInfo/ContactInfo' component={ DashboardContactInfoPage } />
        <Route path='/dashboard/careerInfo/Summary' component={ DashboardSummaryPage } />
      </Route>
      
  		{/* This match-all route below must be defined as the last one.*/}
      <Route path="*" component={ NotFoundPage }/>
    </Route>
  </Router>,
document.getElementById('app'));
