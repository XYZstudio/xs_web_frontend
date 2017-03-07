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

// {
//   "userName":         "zhangkakashi@gmail.com",
//   "firstName":        "嘿", 
//   "lastName":         "嘿嘿嘿",
//   "email":            "zhangkakashi@gmail.com",
//   "address":          "1131 conpass ln", 
//   "city":             "foster city",
//   "province":         "ca",
//   "zipcode":          "94404",
//   "cellPhone":        "123456",
//   "mobile":           "123456789"
// }

export default class DashboardContactInfoPage extends React.Component {
  constructor() {
    super();

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleCellPhoneChange = this.handleCellPhoneChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.updateContactInfoChange = this.updateContactInfoChange.bind(this);


    this.state = {
      user: null,

      userName : '',
      firstName : '', 
      lastName : '',
      email : '',
      address : '', 
      city : '',
      province : '',
      zipcode : '',
      cellPhone : '',
      mobile : ''
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
    console.log(this.state.user.email);
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_contact/${this.state.user.email}`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        var contactInfo = JSON.parse(res.text);
        console.log('******** user contact info**********');
        console.log(contactInfo);
        console.log('******************');
        this.setState({      
          userName : contactInfo.userName,
          firstName : contactInfo.firstName, 
          lastName : contactInfo.lastName,
          email : contactInfo.email,
          address : contactInfo.address, 
          city : contactInfo.city,
          province : contactInfo.province,
          zipcode : contactInfo.zipcode,
          cellPhone : contactInfo.cellPhone,
          mobile : contactInfo.mobile
        });
      }
    });
  }

  handleFirstNameChange(e){
    this.setState({firstName : e.target.value });
  }

  handleLastNameChange(e){
    this.setState({lastName : e.target.value });
  }

  handleEmailChange(e){
    this.setState({email : e.target.value });   
  }
  handleAddressChange(e){
    this.setState({address : e.target.value }); 
  }
  handleCityChange(e){
    this.setState({city : e.target.value }); 
  }
  handleProvinceChange(e){
    this.setState({province : e.target.value }); 
  }
  handleZipcodeChange(e){
    this.setState({zipcode : e.target.value }); 
  }
  handleCellPhoneChange(e){
    this.setState({cellPhone : e.target.value }); 
  }
  handleMobileChange(e){
    this.setState({mobile : e.target.value }); 
  }

  updateContactInfoChange(){
    console.log({
      userName : this.state.userName,
      firstName : this.state.firstName, 
      lastName : this.state.lastName,
      email : this.state.email,
      address : this.state.address, 
      city : this.state.city,
      province : this.state.province,
      zipcode : this.state.zipcode,
      cellPhone : this.state.cellPhone,
      mobile : this.state.mobile
    });
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_contact`)
    .withCredentials()
    .send({
      userName : this.state.userName,
      firstName : this.state.firstName, 
      lastName : this.state.lastName,
      email : this.state.email,
      address : this.state.address, 
      city : this.state.city,
      province : this.state.province,
      zipcode : this.state.zipcode,
      cellPhone : this.state.cellPhone,
      mobile : this.state.mobile
    })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('联系方式已修改');
      }
    });
  }


  render() {
    return (
        <Grid>
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
            <Form horizontal>
              <Row>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      名
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={ this.state.firstName } onChange={this.handleFirstNameChange}/>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      姓
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={ this.state.lastName } onChange={this.handleLastNameChange}/>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="dashboardContentOneLineControlRow">
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    地址
                  </Col>
                  <Col sm={10}>
                    <FormControl placeholder={ this.state.address } onChange={this.handleAddressChange}/>
                  </Col>
                </FormGroup>
              </Row>

              <Row>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      市
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={ this.state.city } onChange={this.handleCityChange}/>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs={9} md={6}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      省
                    </Col>
                    <Col sm={10}>
                      <FormControl placeholder={ this.state.province } onChange={this.handleProvinceChange}/>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="dashboardContentOneLineControlRow">
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    邮编
                  </Col>
                  <Col sm={10}>
                    <FormControl placeholder={ this.state.zipcode } onChange={this.handleZipcodeChange}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    邮箱
                  </Col>
                  <Col sm={10}>
                    <FormControl placeholder={ this.state.email } onChange={this.handleEmailChange}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    移动电话
                  </Col>
                  <Col sm={10}>
                    <FormControl placeholder={ this.state.cellPhone } onChange={this.handleCellPhoneChange}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    固话
                  </Col>
                  <Col sm={10}>
                    <FormControl placeholder={ this.state.mobile } onChange={this.handleMobileChange}/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button onClick={this.updateContactInfoChange}>
                      保存
                    </Button>
                  </Col>
                </FormGroup>
              </Row>
            </Form>
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}