// Modules
import React from 'react';
import LoginStore from 'store/login';
import config from 'root/config.json';
import * as request from 'superagent';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

//localhost:3000/api/v1/update_user_work_experience
// {
//     "userName":         "binqi0830@gmail.com",
//     "companyName":      "mphasis", 
//     "title":            "Systems Engineer",
//     "location":         "Bele, AR",
//     "startYear":        "2003", 
//     "startMonth":       "12", 
//     "endYear":          "2018",
//     "endMonth":         "12",
//     "description":      "release engineer"
// }

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
    this.handleDescriptionChange = this.handleEndMonthChange.bind(this);
    this.addNewWorkingExperience = this.addNewWorkingExperience.bind(this);
    this.displayWorkExperience = this.displayWorkExperience.bind(this);
    this.state = {
      user: null,
      workingExperience : null,
      companyName : '',
      title : '',
      location : '',
      startYear : '',
      startMonth : '',
      endYear : '',
      endMonth : '',
      description : ''
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

  displayWorkExperience(){
    var workExp = [];
    var workingExperienceArr = this.state.workingExperience;
    if (workingExperienceArr) {
      for (var i = 0; i < workingExperienceArr.length;i++) {
        var c = workingExperienceArr[i];
        workExp.push(
          //TODO: UI change
            <div>
              <div>
                <p>{c.companyName}</p>
              </div>
              <div>
                <p>{c.title}</p>
              </div>
              <div>
                <p>{c.location}</p>
              </div>
              <div>
                <p>{c.startYear}</p>
              </div>
              <div>
                <p>{c.startMonth}</p>
              </div>
              <div>
                <p>{c.endYear}</p>
              </div>
              <div>
                <p>{c.endMonth}</p>
              </div>
              <div>
                <p>{c.description}</p>
              </div>
              <button>修改</button>
            </div>
          );
      }
    }
    return workExp;
  }

  updateNewWorkingExperience(id) {
    //TODO: update this work experience
    console.log(id);
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
      }
    });
  }

  render() {
    return (
        <Grid>
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
            <Row>
              <Row>
                <h3 className="dashboardContentChineseHead">工作经验:</h3>
                <div>
                { this.displayWorkExperience() }
                </div>
              </Row>
              <Row>
                <h3 className="dashboardContentChineseHead">添加工作经验:</h3>
                <Row>
                  <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        公司
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleCompanyNameChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={2}>
                        职位名称
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleTitleChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        地址
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleLocationChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        开始年份
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleStartYearChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        开始月份
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleStartMonthChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        结束年份
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleEndYearChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        结束月份
                      </Col>
                      <Col sm={10}>
                        <FormControl onChange={this.handleEndMonthChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        经历描述
                      </Col>
                      <Col sm={10}>
                        <FormControl componentClass="textarea" onChange={this.handleDescriptionChange}/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button onClick={this.addNewWorkingExperience}>
                          添加工作经历
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>     
                </Row>
              </Row>
            </Row>
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}