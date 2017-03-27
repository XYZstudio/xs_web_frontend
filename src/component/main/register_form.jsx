import config from 'root/config.json';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import * as request from 'superagent';
import QRCCodeImage from 'style/asset/qrcode.jpg';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    this.toggle2dCode = this.toggle2dCode.bind(this);
    this.show2dCode = this.show2dCode.bind(this);
    this.showErrorMesg = this.showErrorMesg.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHighestDegreeChange = this.handleHighestDegreeChange.bind(this);
    this.handleInputDateChange = this.handleInputDateChange.bind(this);
    this.handleCurrentStatueChange = this.handleCurrentStatueChange.bind(this);
    this.handleHighestDegreeChange = this.handleHighestDegreeChange.bind(this);
    this.handleCareerDomainChange = this.handleCareerDomainChange.bind(this);
    this.handleHobbiesChange = this.handleHobbiesChange.bind(this);
    this.updateBasicInfo = this.updateBasicInfo.bind(this);
    this.inputIsNotValid = this.inputIsNotValid.bind(this);

    this.state = {
      name:'',
      email: '',
      password: '',
      show2dCode: { display: 'none' },
      showErrorMessage: {
        display: 'none',
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      },
      errorMessage:'',

      firstName : '',
      lastName : '',
      gender : '',
      currentStatus : '',
      careerDomain : [],
      hobbies : [],
      birthYear : '',
      birthMonth : '',
      birthDate : '',
      highestDegree : ''
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitRegister() {
    if (this.inputIsNotValid()) return;
    console.log(this.state);
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/create_user`)
    .send({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      status: 'active'
    })
    .end((err, res) => {
      console.log(res);
      if (err) {
        console.error(err);
        console.log(res.body.code);
        this.showErrorMesg(res.body.warning);
      } else {
        console.log('REGISTER: ', res);
        this.updateBasicInfo(res);
        this.props.closeModalWindow();
        browserHistory.push('/verifyEmail');
      }
    });
  }

  inputIsNotValid(){
    //email
    if (!this.validateEmail(this.state.email)) {
      this.showErrorMesg("请填写正确email");
      return true;
    }
    //password length
    if (!this.state.password || this.state.password.length < 6) {
      this.showErrorMesg("密码长度需要大于6位");
      return true;
    }
    //firstName
    if (!this.state.firstName) {
      this.showErrorMesg("名字不能为空");
      return true;
    }
    //lastName
    if (!this.state.lastName) {
      this.showErrorMesg("姓氏不能为空");
      return true;
    }
    //gender
    if (!this.state.gender) {
      this.showErrorMesg("性别不能为空");
      return true;
    }
    //currentStatus
    if (!this.state.currentStatus) {
      this.showErrorMesg("目前状态不能为空");
      return true;
    }
    //highestDegree
    if (!this.state.highestDegree) {
      this.showErrorMesg("最高学历不能为空");
      return true;
    }
    //careerDomain : [],
    if (!this.state.careerDomain || this.state.careerDomain.length == 0) {
      this.showErrorMesg("职业领域不能为空");
      return true;
    }
    //hobbies : [],
    if (!this.state.hobbies || this.state.hobbies.length == 0) {
      this.showErrorMesg("兴趣爱好不能为空");
      return true;
    }
    //birth
    if (!this.state.birthYear) {
      this.showErrorMesg("出生年月不能为空");
      return true;
    }
  }

  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  updateBasicInfo(res){
    var requestJson = {
      userName : res.body[0].email,
      userId : res.body[0]._id,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      currentStatus : this.state.currentStatus,
      gender : this.state.gender,
      careerDomain : this.state.careerDomain,
      hobbies : this.state.hobbies,
      birthYear : this.state.birthYear,
      birthMonth : this.state.birthMonth,
      birthDate : this.state.birthDate,
      highestDegree : this.state.highestDegree
    };
    console.log('******** requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/create_user_basic_info_by_id`)
    .send(requestJson)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('basic info already inserted！');
      }
    });
  }

  show2dCode() {
    this.setState({ show2dCode: {} });
  }

  toggle2dCode(){
    if (this.state.show2dCode.display == 'none') {
      this.setState({ show2dCode: { display: '' } });
    } else {
      this.setState({ show2dCode: { display: 'none' } });
    }
  }

  showErrorMesg(errMes) {
    this.setState({
      showErrorMessage: {
        color: 'red',
        paddingTop: '5px',
        paddingLeft: '10px'
      },
      errorMessage: errMes
    });
  }

  handleFirstNameChange(e) {
    var fName = e.target.value;
    this.setState({
      firstName : fName,
      name : this.state.lastName + " " + fName
    });
  }

  handleLastNameChange(e) {
    var lName = e.target.value;
    this.setState({
      lastName : lName,
      name : lName + " " + this.state.firstName
    });
  }

  handleGenderChange(e) {
    this.setState({gender : e.target.value });
  }
  handleInputDateChange(date) {
    console.log(date.format('YYYY'));
    console.log(date.format('M'));
    console.log(date.format('D'));
    this.setState({
      inputDate : date,
      birthYear : date.format('YYYY'),
      birthMonth : date.format('M'),
      birthDate : date.format('D')
    });
  }
  handleCurrentStatueChange(val) {
      console.log("Selected: " + val);
      this.setState({
        currentStatus : val.value
      });
  }
  handleHighestDegreeChange(val){
      console.log("Selected: " + val);
      this.setState({
        highestDegree : val.value
      });
  }
  handleCareerDomainChange(val){
      console.log("Selected: " + val);
      var careerDomainArr = [];
      for (var i = 0;i < val.length;i++) {
        careerDomainArr.push(val[i].value);
      }
      this.setState({
        careerDomain : careerDomainArr
      });
  }
  handleHobbiesChange(val){
      console.log("Selected: " + val);
      var hobbiesArr = [];
      for (var i = 0;i < val.length;i++) {
        hobbiesArr.push(val[i].value);
      }
      this.setState({
        hobbies : hobbiesArr
      });
  }

  render() {
    const firstFormGroupStyle = {
      marginTop: '15px'
    };

    const agreementStyle = {
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '12px'
    };

    var currentOptions = [
        { value: '我目前待业，有意进入体育行业', label: '我目前待业，有意进入体育行业' },
        { value: '我已工作，在体育行业工作', label: '我已工作，在体育行业工作'},
        { value: '我已工作，所属非体育行业，想进入体育行业工作', label: '我已工作，所属非体育行业，想进入体育行业工作'},
        { value: '我已工作，所属非体育行业，想了解体育行业', label: '我已工作，所属非体育行业，想了解体育行业'},
        { value: '我是学生，体育相关专业(专业名称中包含“体育”“运动”“竞技”等)', label: '我是学生，体育相关专业(专业名称中包含“体育”“运动”“竞技”等)'},
        { value: '我是学生，非体育相关专业，想从事体育行业工作', label: '我是学生，非体育相关专业，想从事体育行业工作'},
        { value: '其他', label: '其他'}
    ];

    var degreeOptions = [
        { value: '博士研究生', label: '博士研究生' },
        { value: '硕士研究生', label: '硕士研究生' },
        { value: '本科', label: '本科' },
        { value: '大专', label: '大专' },
        { value: '高中', label: '高中' },
        { value: '中专', label: '中专' },
        { value: '初中', label: '初中' },
        { value: '小学', label: '小学' },
    ];

    var careerDomainOptions = [
        { value: '体育', label: '体育' },
        { value: '体育营销', label: '体育营销' },
        { value: '体育媒体', label: '体育媒体' },
        { value: '体育场馆', label: '体育场馆' },
        { value: '体育赛事', label: '体育赛事' },
        { value: '体育商业分析', label: '体育商业分析' },
        { value: '体育技战术分析', label: '体育技战术分析' },
        { value: '体育科技（VR，可穿戴设备等）', label: '体育科技（VR，可穿戴设备等）' },
        { value: '其他体育相关工作', label: '其他体育相关工作' },
        { value: '政府', label: '政府' },
        { value: '金融', label: '金融' },
        { value: '咨询/外包/公众服务', label: '咨询/外包/公众服务' },
        { value: '传媒/广告/公关/文化', label: '传媒/广告/公关/文化' },
        { value: '互联网/通信/电子', label: '互联网/通信/电子' },
        { value: '教育培训', label: '教育培训' },
        { value: '医疗/卫生/健康', label: '医疗/卫生/健康' },
        { value: '机械/制造/消费/贸易', label: '机械/制造/消费/贸易' },
        { value: '汽车/车联网/智能交通', label: '汽车/车联网/智能交通' },
        { value: '能源/军工', label: '能源/军工' },
        { value: '建设工程/房地产/物业管理', label: '建设工程/房地产/物业管理' },
        { value: '物流/仓储/运输', label: '物流/仓储/运输' },
        { value: '农林牧渔', label: '农林牧渔' },
        { value: '其他', label: '其他' },
    ];

    var hobbiesOptions = [
        { value: '体育场馆运营', label: '体育场馆运营' },
        { value: '体育赛事运营', label: '体育赛事运营' },
        { value: '体育经纪人', label: '体育经纪人' },
        { value: '体育赞助', label: '体育赞助' },
        { value: '体育公关', label: '体育公关' },
        { value: '体育广告', label: '体育广告' },
        { value: '体育营销', label: '体育营销' },
        { value: '体育媒体', label: '体育媒体' },
        { value: '体育数字媒体', label: '体育数字媒体' },
        { value: '体育金融与投资', label: '体育金融与投资' },
        { value: '体育财务分析', label: '体育财务分析' },
        { value: '体育法', label: '体育法' },
        { value: '体育联盟管理', label: '体育联盟管理' },
        { value: '体育医疗', label: '体育医疗' },
        { value: '体育营养', label: '体育营养' },
        { value: '运动康复', label: '运动康复' },
        { value: '体育俱乐部/球队管理', label: '体育俱乐部/球队管理' },
        { value: '奥林匹克运动', label: '奥林匹克运动' },
        { value: '篮球技战术分析', label: '篮球技战术分析' },
        { value: '足球技战术分析', label: '足球技战术分析' },
        { value: '棒球技战术分析', label: '棒球技战术分析' },
        { value: '橄榄球技战术分析', label: '橄榄球技战术分析' },
        { value: '其他运动技战术分析', label: '其他运动技战术分析' },
        { value: '电子竞技', label: '电子竞技' },
        { value: '体育科技（VR, AR, 可穿戴设备等）', label: '体育科技(VR, AR, 可穿戴设备等)' },
    ];

    return (
      <form>
        <Row className='inputRow'>
          <FormGroup style={firstFormGroupStyle}>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>邮箱
            </Col>
            <Col md={10}>
              <FormControl
                type='text'
                value={this.state.email}
                placeholder='邮箱'
                onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>
        </Row>
        <Row className='inputRow'>
          <FormGroup>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>密码
            </Col>
            <Col md={10}>
            <FormControl.Feedback />
              {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
              <FormControl
                type='password'
                value={this.state.password}
                placeholder='不少于6位'
                onChange={this.handlePasswordChange}
              />
              <FormControl.Feedback />
              {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
            </Col>
          </FormGroup>
        </Row>
        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>姓
            </Col>
            <Col md={4}>
              <FormControl placeholder={ this.state.lastName } onChange={this.handleLastNameChange}/>
            </Col>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>名
            </Col>
            <Col md={4}>
              <FormControl placeholder={ this.state.firstName } onChange={this.handleFirstNameChange}/>
            </Col>
        </Row>

        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>性别
            </Col>
            <Col md={4}>
              <FormControl placeholder={ this.state.gender } onChange={this.handleGenderChange}/>
            </Col>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>出生年月
            </Col>
            <Col md={4} >
              <DatePicker
                md={12}
                showYearDropdown 
                scrollableYearDropdown
                className="form-control"
                selected={this.state.inputDate}
                onChange={this.handleInputDateChange} />
            </Col>
        </Row>

        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>目前状态
            </Col>
            <Col md={10}>
              <Select 
                options={currentOptions}
                value={this.state.currentStatus}
                onChange={this.handleCurrentStatueChange}/>
            </Col>
        </Row>

        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>最高学历
            </Col>
            <Col md={10}>
              <Select
                options={degreeOptions}
                value={this.state.highestDegree}
                onChange={this.handleHighestDegreeChange}/>
            </Col>
        </Row>

        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
              <div className="mandatoryStar">*</div>职业领域
            </Col>
            <Col md={10}>
              <Select 
                options={careerDomainOptions}
                multi={true}
                value={this.state.careerDomain}
                onChange={this.handleCareerDomainChange}/>
            </Col>
        </Row>

        <Row className='inputRow'>
            <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
               <div className="mandatoryStar">*</div>兴趣爱好
            </Col>
            <Col md={10}>
              <Select 
                title="兴趣爱好"
                options={hobbiesOptions}
                multi={true}
                value={this.state.hobbies}
                onChange={this.handleHobbiesChange}/>
            </Col>
        </Row>

        <Button className="centerBlockEle loginRegisterFormButton" bsStyle="success" onClick={this.submitRegister} block>注册Sporit</Button>
        <p style={ this.state.showErrorMessage }>{ this.state.errorMessage }</p>
        <FormGroup style={agreementStyle}>
          <p>
            点击「注册Sporit」按钮，即代表你同意
            <a href="/agreement" target="_blank">《Sporit协议》</a>
          </p>
        </FormGroup>

        <Button className="centerBlockEle loginRegisterFormButton" onClick={this.toggle2dCode} block>关注Sporit公众号</Button>
        <Row style={this.state.show2dCode}>
          <img
            src={ QRCCodeImage }
            style={{ display: 'block',margin: 'auto' }}
          />
          <div className="textCenter">扫描二维码关注Sporit微信公众号</div>
        </Row>
      </form>
    );
  }
}