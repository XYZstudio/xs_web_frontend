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
import DashboardProfilePage from 'component/dashboard/dashboard_profile_page.jsx';

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
        <Route path='/dashboard/lectures' component={ DashboardLecturesPage } />
        <Route path='/dashboard/profile' component={ DashboardProfilePage } />
      </Route>
      
  		{/* This match-all route below must be defined as the last one.*/}
      <Route path="*" component={ NotFoundPage }/>
    </Route>
  </Router>,
document.getElementById('app'));
