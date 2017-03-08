// Modules
import React from 'react';
import LoginStore from 'store/login';
import config from 'root/config.json';
import * as request from 'superagent';
import Form from 'react-bootstrap/lib/Form';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class DashboardEducationPage extends React.Component {
  constructor() {
    super();

    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleStartYearChange = this.handleStartYearChange.bind(this);
    this.handleStartMonthChange = this.handleStartMonthChange.bind(this);
    this.handleEndYearChange = this.handleEndYearChange.bind(this);
    this.handleEndMonthChange = this.handleEndMonthChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    
    this.addNewEducationBackground = this.addNewEducationBackground.bind(this);
    this.displayEducationBackground = this.displayEducationBackground.bind(this);
    this.updateEducationBackground = this.updateEducationBackground.bind(this);
    this.deleteEducationBackground = this.deleteEducationBackground.bind(this);
    
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    
    this.getEducationBackground = this.getEducationBackground.bind(this);

    this.state = {
      user: null,

      educationBackground : null,
      selectedEducationBackground : '',

      schoolName : '', 
      location : '',
      startYear : '', 
      startMonth : '', 
      endYear : '',
      endMonth : '',
      degree : '',
      major : '',
      description : '',

      showModal: false,
      showAddButton : false,
      showUpdateButton : false
    };

  }

  componentWillMount() {
    const user = LoginStore.getState();
    if (user && user.email) {
      this.setState({ user: user });
    } else {
      this.setState({ user: null });
    }
  }

  componentDidMount() {
    this.getEducationBackground();
  }

  getEducationBackground(){
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_education/${this.state.user.email}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        var educationBackground = JSON.parse(res.text);
        console.log('******** education background **********');
        console.log(educationBackground);
        console.log('******************');
        this.setState({
          educationBackground : educationBackground
        });
      }
    });
  }
  handleSchoolNameChange(e) {
    this.setState({schoolName : e.target.value });
  }
  handleDegreeChange(e) {
    this.setState({degree : e.target.value });
  }
  handleLocationChange(e) {
    this.setState({location : e.target.value });
  }
  handleMajorChange(e) {
    this.setState({major : e.target.value });
  }
  handleStartYearChange(e) {
    //TODO:check number?
    this.setState({startYear : e.target.value });
  }
  handleStartMonthChange(e) {
    //TODO:check number?
    this.setState({startMonth : e.target.value });
  }
  handleEndYearChange(e) {
    //TODO:check number?
    this.setState({endYear : e.target.value });
  }
  handleEndMonthChange(e) {
    //TODO:check number?
    this.setState({endMonth : e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({description : e.target.value });
  }
  close() {
    this.setState({ showModal: false }); 
  }
  open(obj) {
    if (obj) {
      this.setState({
        selectedEducationBackground : obj._id,
        schoolName : obj.schoolName, 
        location : obj.location,
        startYear : obj.startYear,
        startMonth : obj.startMonth,
        endYear : obj.endYear,
        endMonth : obj.endMonth,
        description : obj.description,
        degree : obj.degree,
        major : obj.major,

        showModal: true,
        showAddButton : false,
        showUpdateButton : true
      }); 
    } else {
      this.setState({
        selectedEducationBackground : '',
        schoolName : '', 
        location : '',
        startYear : '',
        startMonth : '',
        endYear : '',
        endMonth : '',
        description : '',
        degree : '',
        major : '',

        showModal: true,
        showAddButton : true,
        showUpdateButton : false
      }); 
    }
  }
  displayEducationBackground(){
    var eduBack = [];
    var eduBakArr = this.state.educationBackground;
    if (eduBakArr) {
      for (var i = 0; i < eduBakArr.length;i++) {
        var c = eduBakArr[i];
        eduBack.push(
          //TODO: UI change
            <div key={c._id} className="workExperienceHolder">
              <div>专业学位: {c.degree} - {c.major}</div>
              <div>学校: {c.schoolName} - {c.location}</div>
              <div>开始时间: {c.startYear}年{c.startMonth}月</div>
              <div>结束时间: {c.endYear}年{c.endMonth}月</div>
              <div>
                <div>背景描述: {c.description}</div>
              </div>
              <div>
                <Button className="buttonMargin" onClick={this.open.bind(null, c)}>修改</Button>
                <Button className="buttonMargin" onClick={this.deleteEducationBackground.bind(null, c._id)}>删除</Button>
              </div>
            </div>
          );
      }
    }
    return eduBack;
  }

  updateEducationBackground() {
    var requestJson = {
      _id : this.state.selectedEducationBackground,
      userName : this.state.user.email,

      schoolName : this.state.schoolName, 
      location : this.state.location,
      startYear : this.state.startYear,
      startMonth : this.state.startMonth,
      endYear : this.state.endYear,
      endMonth : this.state.endMonth,
      description : this.state.description,
      degree : this.state.degree,
      major : this.state.major
    };
    console.log('******** add new education background requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_education_background`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('教育背景已更新');
        this.close();
        this.getEducationBackground();
      }
    });
  }

  deleteEducationBackground(id) {
    console.log('delete' + id);
    var requestJson = {
      _id : id,
    };
    console.log('******** delete education background requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/delete_user_education_by_id`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('教育背景已删除');
        this.getEducationBackground();
      }
    });
  }

  addNewEducationBackground() {
    var requestJson = {
      userName : this.state.user.email,
      schoolName : this.state.schoolName, 
      location : this.state.location,
      startYear : this.state.startYear,
      startMonth : this.state.startMonth,
      endYear : this.state.endYear,
      endMonth : this.state.endMonth,
      description : this.state.description,
      degree : this.state.degree,
      major : this.state.major
    };
    console.log('******** add new education background requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_education_background`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('教育背景已更新');
        this.close();
        this.getEducationBackground();
      }
    });
  }

  render() {
    return (
        <Grid>
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
              <Row>
                <h3 className="dashboardContentChineseHead">教育背景:</h3>
                <div>
                { this.displayEducationBackground() }
                </div>
              </Row>
          </Col>
          <Col xs={5} md={3}>
            <Button className="buttonMargin" onClick={this.open.bind(null, null)}>添加教育背景</Button>
          </Col>
            <Modal show={this.state.showModal} onHide={this.close}>
              {this.state.showAddButton ? <h3 className="dashboardContentChineseHead leftMargin">添加教育背景:</h3> : null}
              {this.state.showUpdateButton ? <h3 className="dashboardContentChineseHead leftMargin">更新教育背景:</h3> : null}        
              <Modal.Body>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      学校
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.schoolName} onChange={this.handleSchoolNameChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      学位
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.degree} onChange={this.handleDegreeChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      专业
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.major} onChange={this.handleMajorChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      地址
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.location} onChange={this.handleLocationChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      开始年份
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.startYear} onChange={this.handleStartYearChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      开始月份
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.startMonth} onChange={this.handleStartMonthChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      结束年份
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.endYear} onChange={this.handleEndYearChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      结束月份
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.endMonth} onChange={this.handleEndMonthChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      经历描述
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.description} componentClass="textarea" onChange={this.handleDescriptionChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      {this.state.showAddButton ? <Button className="buttonMargin" onClick={this.addNewEducationBackground}>添加教育背景</Button> : null}
                      {this.state.showUpdateButton ? <Button className="buttonMargin" onClick={this.updateEducationBackground}>更新教育背景</Button> : null}
                      <Button className="buttonMargin" onClick={this.close}>
                        取消
                      </Button>
                    </Col>
                  </FormGroup>
                </Form> 
              </Modal.Body>
            </Modal>
        </Grid>
    );
  };
}