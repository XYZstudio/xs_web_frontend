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

export default class DashboardExperiencePage extends React.Component {
  constructor() {
    super();

    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleStartYearChange = this.handleStartYearChange.bind(this);
    this.handleStartMonthChange = this.handleStartMonthChange.bind(this);
    this.handleEndYearChange = this.handleEndYearChange.bind(this);
    this.handleEndMonthChange = this.handleEndMonthChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    
    this.addNewWorkingExperience = this.addNewWorkingExperience.bind(this);
    this.displayWorkExperience = this.displayWorkExperience.bind(this);
    this.updateWorkingExperience = this.updateWorkingExperience.bind(this);
    this.deleteWorkingExperience = this.deleteWorkingExperience.bind(this);
    
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    
    this.getWorkingExperience = this.getWorkingExperience.bind(this);

    this.state = {
      user: null,

      workingExperience : null,
      selectedWorkExperienceId : '',

      companyName : '',
      title : '',
      location : '',
      startYear : '',
      startMonth : '',
      endYear : '',
      endMonth : '',
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
    this.getWorkingExperience();
  }

  getWorkingExperience(){
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_work_experience/${this.state.user.email}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        var workingExperience = JSON.parse(res.text);
        console.log('******** workingExperience**********');
        console.log(workingExperience);
        console.log('******************');
        this.setState({
          workingExperience : workingExperience
        });
      }
    });
  }

  handleCompanyNameChange(e) {
    this.setState({companyName : e.target.value });
  }
  handleTitleChange(e) {
    this.setState({title : e.target.value });
  }
  handleLocationChange(e) {
    this.setState({location : e.target.value });
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
        selectedWorkExperienceId  : obj._id,
        companyName : obj.companyName,
        title : obj.title,
        location : obj.location,
        startYear : obj.startYear,
        startMonth : obj.startMonth,
        endYear : obj.endYear,
        endMonth : obj.endMonth,
        description : obj.description,

        showModal: true,
        showAddButton : false,
        showUpdateButton : true
      }); 
    } else {
      this.setState({
        selectedWorkExperienceId  : '',
        companyName : '',
        title : '',
        location : '',
        startYear : '',
        startMonth : '',
        endYear : '',
        endMonth : '',
        description : '',
        showModal: true,
        showAddButton : true,
        showUpdateButton : false
      }); 
    }
  }
  displayWorkExperience(){
    var workExp = [];
    var workingExperienceArr = this.state.workingExperience;
    if (workingExperienceArr) {
      for (var i = 0; i < workingExperienceArr.length;i++) {
        var c = workingExperienceArr[i];
        workExp.push(
          //TODO: UI change
            <div key={c._id} className="workExperienceHolder">
              <div>职位名称: {c.title}</div>
              <div>公司: {c.companyName} - {c.location}</div>
              <div>开始时间: {c.startYear}年{c.startMonth}月</div>
              <div>结束时间: {c.endYear}年{c.endMonth}月</div>
              <div>
                <div>工作描述: {c.description}</div>
              </div>
              <div>
                <Button className="buttonMargin" onClick={this.open.bind(null, c)}>修改</Button>
                <Button className="buttonMargin" onClick={this.deleteWorkingExperience.bind(null, c._id)}>删除</Button>
              </div>
            </div>
          );
      }
    }
    return workExp;
  }

  updateWorkingExperience() {
    var requestJson = {
      _id : this.state.selectedWorkExperienceId,
      userName : this.state.user.email,
      companyName : this.state.companyName,
      title : this.state.title,
      location : this.state.location,
      startYear : this.state.startYear,
      startMonth : this.state.startMonth,
      endYear : this.state.endYear,
      endMonth : this.state.endMonth,
      description : this.state.description
    };
    console.log('******** add new work experience requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_work_experience`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('工作经验已更新');
        this.close();
        this.getWorkingExperience();
      }
    });
  }

  deleteWorkingExperience(id) {
    console.log('delete' + id);
    var requestJson = {
      _id : id,
    };
    console.log('******** delete work experience requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/delete_user_work_experience_by_id`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('工作经验已删除');
        this.getWorkingExperience();
      }
    });
  }

  addNewWorkingExperience() {
    var requestJson = {
      userName : this.state.user.email,
      companyName : this.state.companyName,
      title : this.state.title,
      location : this.state.location,
      startYear : this.state.startYear,
      startMonth : this.state.startMonth,
      endYear : this.state.endYear,
      endMonth : this.state.endMonth,
      description : this.state.description
    };
    console.log('******** add new work experience requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_work_experience`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('工作经验已添加');
        this.close();
        this.getWorkingExperience();
      }
    });
  }

  render() {
    return (
        <Grid>
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
              <Row>
                <h3 className="dashboardContentChineseHead">工作经验:</h3>
                <div>
                { this.displayWorkExperience() }
                </div>
              </Row>
          </Col>
          <Col xs={5} md={3}>
            <Button className="buttonMargin" onClick={this.open.bind(null, null)}>添加工作经验</Button>
          </Col>
            <Modal show={this.state.showModal} onHide={this.close}>
              {this.state.showAddButton ? <h3 className="dashboardContentChineseHead leftMargin">添加工作经验:</h3> : null}
              {this.state.showUpdateButton ? <h3 className="dashboardContentChineseHead leftMargin">更新工作经验:</h3> : null}        
              <Modal.Body>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      公司
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.companyName} onChange={this.handleCompanyNameChange}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      职位名称
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={this.state.title} onChange={this.handleTitleChange}/>
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
                      {this.state.showAddButton ? <Button className="buttonMargin" onClick={this.addNewWorkingExperience}>添加工作经验</Button> : null}
                      {this.state.showUpdateButton ? <Button className="buttonMargin" onClick={this.updateWorkingExperience}>更新工作经验</Button> : null}
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