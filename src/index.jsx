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
import Dashboard from 'component/dashboard/Dashboard.jsx';
import NotFoundPage from 'component/main/not_found_page';

// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage } />
      <Route path='/course' component={ Course } />
      <Route path='/dashboard' component={ Dashboard } />
      <Route path='/login' component={ Login } />
      <Route path='/reset_password' component={ FindMyPassword } />
  		{/* This match-all route below must be defined as the last one.*/}
      <Route path="*" component={ NotFoundPage }/>
    </Route>
  </Router>,
document.getElementById('app'));
