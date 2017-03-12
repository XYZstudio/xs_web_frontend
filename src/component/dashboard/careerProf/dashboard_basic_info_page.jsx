// Modules
import React from 'react';
import LoginStore from 'store/login';
import config from 'root/config.json';
import * as request from 'superagent';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';

//import Calendar from 'react-input-calendar';
//localhost:3000/api/v1/get_user_basic_info_by_id/589fb50140a8d520c8f73a10
//localhost:3000/api/v1/update_user_basic_info_by_id
// {
//   "userId": "589fb50140a8d520c8f73a10",
//   "userName":         "zhangkakashi@gmail.com",
//         "firstName":        "body.firstName",
//         "lastName":         "body.lastName", 
//         "gender":           "male",
//         "careerDomain":     ["搬砖", "挑粪","捡屎"],
//         "hobbies":          ["嘿嘿嘿",  "嘿嘿","嘿"],
//     "birthYear":        1,
//     "birthMonth":       2,
//     "birthDate":        3,
//     "highestDegree":    "蓝翔"
//   }

export default class DashboardBasicInfoPage extends React.Component {
  constructor() {
    super();

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHighestDegreeChange = this.handleHighestDegreeChange.bind(this);
    this.handleInputDateChange = this.handleInputDateChange.bind(this);
    this.handleCurrentStatueChange = this.handleCurrentStatueChange.bind(this);
    this.handleHighestDegreeChange = this.handleHighestDegreeChange.bind(this);
    this.handleCareerDomainChange = this.handleCareerDomainChange.bind(this);
    this.handleHobbiesChange = this.handleHobbiesChange.bind(this);

    this.state = {
      user: null,
      inputDate : moment(),
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
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_basic_info_by_id/${this.state.user._id}`)
    .withCredentials()
    .end((err, res) => {
      if(err) {
        console.error(err);
      } else {
        var basicInfo = JSON.parse(res.text);
        console.log('******** user basic info**********');
        console.log(basicInfo);
        console.log('******************');
        this.setState({
          firstName : basicInfo.firstName,
          lastName : basicInfo.lastName,
          gender : basicInfo.gender,
          careerDomain : basicInfo.careerDomain,
          hobbies : basicInfo.hobbies,
          birthYear : basicInfo.birthYear,
          birthMonth : basicInfo.birthMonth,
          birthDate : basicInfo.birthDate,
          highestDegree : basicInfo.highestDegree
        });
      }
    });
  }
  handleFirstNameChange(e) {
    this.setState({firstName : e.target.value });
  }
  handleLastNameChange(e) {
    this.setState({lastName : e.target.value });
  }
  handleGenderChange(e) {
    this.setState({gender : e.target.value });
  }
  handleHighestDegreeChange(e) {
    this.setState({highestDegree : e.target.value });
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
        currentStatus : val
      });
  }
  handleHighestDegreeChange(val){
      console.log("Selected: " + val);
      this.setState({
        highestDegree : val
      });
  }
  handleCareerDomainChange(val){
      console.log("Selected: " + val);
      this.setState({
        careerDomain : val
      });
  }
  handleHobbiesChange(val){
      console.log("Selected: " + val);
      this.setState({
        hobbies : val
      });
  }
  updateBasicInfo(){
    var requestJson = {
      userName : this.state.user.email,
      userId : this.state.user._id,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
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
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_basic_info_by_id`)
    .send(requestJson)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('注册信息已修改');
      }
    });
  }

  render() {
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
      <Grid>
        <Col xs={3} md={2}></Col>
        <Col xs={12} md={8}>

          <Row className='inputRow'>
              <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
                姓
              </Col>
              <Col md={4}>
                <FormControl placeholder={ this.state.lastName } onChange={this.handleLastNameChange}/>
              </Col>
              <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
                名
              </Col>
              <Col md={4}>
                <FormControl placeholder={ this.state.firstName } onChange={this.handleFirstNameChange}/>
              </Col>
          </Row>

          <Row className='inputRow'>
              <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
                性别
              </Col>
              <Col md={4}>
                <FormControl placeholder={ this.state.lastName } onChange={this.handleLastNameChange}/>
              </Col>
              <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
                出生年月
              </Col>
              <Col md={4} >
                <DatePicker
                  md={12}
                  className="form-control"
                  selected={this.state.inputDate}
                  onChange={this.handleInputDateChange} />
              </Col>
          </Row>

          <Row className='inputRow'>
              <Col md={2} componentClass={ControlLabel} className="inputRowLabel">
                目前状态
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
                最高学历
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
                职业领域
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
                 兴趣爱好
              </Col>
              <Col md={10}>
                <Select 
                  options={hobbiesOptions}
                  multi={true}
                  value={this.state.hobbies}
                  onChange={this.handleHobbiesChange}/>
              </Col>
          </Row>

          <Row>
              <Button id="basicInfoSaveButton" onClick={this.updateContactInfoChange}>
                保存
              </Button>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Grid>
    );
  };
}