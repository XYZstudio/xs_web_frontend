// Modules
import React from 'react';
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
import Image from 'react-bootstrap/lib/Image';
import touxiang from 'style/asset/touxiang.png';
import LoginStore from 'store/login';

// {
//   "_id": "58bc8b65804e0c553b368439",
//   "userName": "binqi0830@gmail.com",
//   "avatarPath": "",
//   "myWebsite": "wwww.webs.com",
//   "weibo": "wwww.weibote.com",
//   "qq": "wwww.qqq.com",
//   "Wechat": "wwww.wechat.com",
//   "tweeter": "wwww.tweeter.com",
//   "facobook": "wwww.fa.com",
//   "linkedin": "wwww.link.com",
//   "renren": "wwww.renren.com",
//   "__v": 0
// }

export default class DashboardSummaryPage extends React.Component {
  constructor() {
    super();
    
    this.handleQQChange = this.handleQQChange.bind(this);
    this.handleSelfIntroductionChange = this.handleSelfIntroductionChange.bind(this);
    this.handleRenrenChange = this.handleRenrenChange.bind(this);
    this.handleWechatChange = this.handleWechatChange.bind(this);
    this.handleWeiboChange = this.handleWeiboChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.updateUserSummary = this.updateUserSummary.bind(this);

    this.state = {
      user : null,
      userName : '',
      avatarPath : '',
      myWebsite : '',
      weibo : '',
      qq : '',
      Wechat : '',
      tweeter : '',
      facobook : '',
      linkedin : '',
      renren : '',
      selfIntroduction : ''
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
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_introduction/${this.state.user.email}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        var summaryInfo = JSON.parse(res.text);
        console.log('******** user summary info**********');
        console.log(summaryInfo);
        console.log('******************');
        this.setState({
          avatarPath : summaryInfo.avatarPath,
          myWebsite : summaryInfo.myWebsite,
          weibo : summaryInfo.weibo,
          qq : summaryInfo.qq,
          Wechat : summaryInfo.Wechat,
          tweeter : summaryInfo.tweeter,
          facebook : summaryInfo.facobook,
          linkedin : summaryInfo.linkedin,
          renren : summaryInfo.renren,
          selfIntroduction : summaryInfo.selfIntroduction
        });
      }
    });
  }

  handleQQChange(e) {
    this.setState({qq : e.target.value });
  }

  handleSelfIntroductionChange(e) {
    this.setState({selfIntroduction : e.target.value });
  }

  handleRenrenChange(e) {
    this.setState({renren : e.target.value });
  }

  handleWechatChange(e) {
    this.setState({Wechat : e.target.value });
  }

  handleWeiboChange(e) {
    this.setState({weibo : e.target.value });
  }

  handleLinkedinChange(e) {
    this.setState({linkedin : e.target.value });
  }

  updateUserSummary(){
    var requestJson = {
      userName : this.state.user.email,
      avatarPath : this.state.avatarPath,
      myWebsite : this.state.myWebsite,
      weibo : this.state.weibo,
      qq : this.state.qq,
      Wechat : this.state.Wechat,
      tweeter : this.state.tweeter,
      facebook : this.state.facobook,
      linkedin : this.state.linkedin,
      renren : this.state.renren,
      selfIntroduction : this.state.selfIntroduction
    };
    console.log('******** requestJson ********');
    console.log(requestJson);
    console.log('***************************');
    request
    .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_introduction`)
    .withCredentials()
    .send(requestJson)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        alert('用户信息已修改');
      }
    });
  }

  render() {
    return (
        <Grid>
        <Col xs={3} md={2}></Col>
        <Col xs={12} md={8}>
          <Row className="textCenter dashboradContent">
            <Image className="dashboardAvatar" src= {touxiang} circle />
            <h3 className="profileSettingUserName">{ this.state.user.name }</h3>
          </Row>
          <Row>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  个人签名
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.selfIntroduction } onChange={this.handleSelfIntroductionChange}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  微信
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.Wechat } onChange={this.handleWechatChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  QQ
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.qq } onChange={this.handleQQChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  微博
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.weibo } onChange={this.handleWeiboChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  领英
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.linkedin } onChange={this.handleLinkedinChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  人人
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={ this.state.renren } onChange={this.handleRenrenChange}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={this.updateUserSummary}>
                    保存
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Col>
        <Col xs={3} md={2}></Col>
          
        </Grid>
    );
  };
}