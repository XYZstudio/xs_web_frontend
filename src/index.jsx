// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'component/App.jsx';
import MainPage from 'component/main/main_page.jsx';
import Course from 'component/course/Course.jsx';
import ContactMethod from 'component/main/contactMethod.jsx';
import JoinUs from 'component/main/joinUs.jsx';
import CareerList from 'component/main/careerList.jsx';
import CareerDetail from 'component/main/careerDetail.jsx';
import ProfessorsIntro from 'component/main/professorsIntro.jsx';
import CompanyIntro from 'component/main/companyIntro.jsx';
import NotFoundPage from 'component/main/not_found_page.jsx';
import VerifyEmail from 'component/main/verify_email.jsx';
import NavbarComponent from 'component/main/navbar.jsx';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import Agreement from 'component/main/agreement.jsx';
import Activities from 'component/main/activities.jsx';
import BeijingActivities from 'component/main/beijingActivities.jsx';
import ShanghaiActivities from 'component/main/shanghaiActivities.jsx';

// Password
import FindMyPassword from 'component/password/find_password.jsx';
import VerifySuccess from 'component/password/verify_success.jsx';

// Dashboard Components
import Dashboard from 'component/dashboard/Dashboard.jsx';
import DashboardHomePage from 'component/dashboard/dashboard_home_page.jsx';
import DashboardCoursesPage from 'component/dashboard/dashboard_courses_page.jsx';
import DashboardCareerOpporPage from 'component/dashboard/dashboard_careerOppor_page.jsx';
import DashboardCareerInfoPage from 'component/dashboard/dashboard_careerInfo_page.jsx';
import DashboardChartPage from 'component/dashboard/dashboard_chart_page.jsx';
import DashboardSettingPage from 'component/dashboard/dashboard_setting_page.jsx';
import DashboardSummaryPage from 'component/dashboard/careerProf/dashboard_summary_page.jsx';
import DashboardContactInfoPage from 'component/dashboard/careerProf/dashboard_contactInfo_page.jsx';
import DashboardExperiencePage from 'component/dashboard/careerProf/dashboard_experience_page.jsx';
import DashboardEducationPage from 'component/dashboard/careerProf/dashboard_education_page.jsx';
import DashboardResumePage from 'component/dashboard/careerProf/dashboard_resume_page.jsx';
import DashboardBasicInfoPage from 'component/dashboard/careerProf/dashboard_basic_info_page.jsx';
import DashboardCourseDetail from 'component/dashboard/dashboard_course_detail.jsx';
import DashboardPlayVideo from 'component/dashboard/dashboard_play_video.jsx';


// Router
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute components={{ navbar: NavbarComponent, body: MainPage, footer: BottomNavbarComponent }} />
      <Route path='/course' components={{ navbar: NavbarComponent, body: Course, footer: BottomNavbarComponent  }} />
      <Route path='/contactus' components={{ navbar: NavbarComponent, body: ContactMethod, footer: BottomNavbarComponent  }} />
      <Route path='/joinus' components={{ navbar: NavbarComponent, body: JoinUs, footer: BottomNavbarComponent  }} />
      <Route path='/careerList' components={{ navbar: NavbarComponent, body: CareerList, footer: BottomNavbarComponent  }} />
      <Route
        path='/careerList/:companyId'
        getComponents={
          (nextState, cb) => {
            cb(null, { navbar: NavbarComponent, body: CareerDetail, footer: BottomNavbarComponent  });
          } 
        }
      />
      <Route path='/professorsIntro' components={{ navbar: NavbarComponent, body: ProfessorsIntro, footer: BottomNavbarComponent  }} />
      <Route path='/companyIntro' components={{ navbar: NavbarComponent, body: CompanyIntro, footer: BottomNavbarComponent  }} />
      <Route path='/agreement' components={{ navbar: NavbarComponent, body: Agreement , footer: BottomNavbarComponent  }} />
      <Route path='/activities' components={{ navbar: NavbarComponent, body: Activities , footer: BottomNavbarComponent  }} />
      <Route path='/activities/beijing' components={{ navbar: NavbarComponent, body: BeijingActivities , footer: BottomNavbarComponent  }} />
      <Route path='/activities/shanghai' components={{ navbar: NavbarComponent, body: ShanghaiActivities , footer: BottomNavbarComponent  }} />
      <Route
        path='/courses/:courseName'
        getComponents={
          (nextState, cb) => {
            cb(null, { navbar: NavbarComponent, body: DashboardCourseDetail, footer: BottomNavbarComponent  });
          } 
        }
      />
      <Route path='/verifyEmail' components={{ navbar: NavbarComponent, body: VerifyEmail, footer: BottomNavbarComponent }} />
      <Route path='/reset_password' components={{ navbar: NavbarComponent, body: FindMyPassword, footer: BottomNavbarComponent }} />
      <Route
        path='/verify/:token'
        getComponents={
          (nextState, cb) => {
            cb(null, { navbar: NavbarComponent, body: VerifySuccess, footer: BottomNavbarComponent  });
          } 
        }
      />
    </Route>

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
      <Route path='/dashboard/careerList' component={ CareerList } />
      <Route path='/dashboard/careerList/:companyId' component={ CareerDetail } />
      <Route path='/dashboard/careerOppor' component={ DashboardCareerOpporPage } />
      <Route path='/dashboard/chart' component={ DashboardChartPage } />
      <Route path='/dashboard/setting' component={ DashboardSettingPage } />
      <Route path='/dashboard/careerInfo/Resume' component={ DashboardResumePage } />
      <Route path='/dashboard/careerInfo/Education' component={ DashboardEducationPage } />
      <Route path='/dashboard/careerInfo/Experience' component={ DashboardExperiencePage } />
      <Route path='/dashboard/careerInfo/ContactInfo' component={ DashboardContactInfoPage } />
      <Route path='/dashboard/careerInfo/Summary' component={ DashboardSummaryPage } />
      <Route path='/dashboard/careerInfo/BasicInfo' component={ DashboardBasicInfoPage } />
    </Route>
      
  	{/* This match-all route below must be defined as the last one.*/}
    <Route path="*" component={ NotFoundPage }/>
  </Router>,
document.getElementById('app'));
