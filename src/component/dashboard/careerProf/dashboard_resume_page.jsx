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

export default class DashboardResumePage extends React.Component {
  constructor() {
    super();
    this.changeFile = this.changeFile.bind(this);
    this.uploadResume = this.uploadResume.bind(this);
    this.downloadResume = this.downloadResume.bind(this);
    this.getExistingFileName = this.getExistingFileName.bind(this);
    this.state = {
      user: null,
      resumeFileName : '',
      resuleFilePath : '',
      selectedFile : null
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

  componentDidMount(){
    this.getExistingFileName();
  }

  getExistingFileName(){
    request
    .get(`http://${config.host}:${config.rest_port}/api/v1/get_user_resume_name/${this.state.user.email}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('******** resume file name **********');
        console.log(res);
        console.log('******************');
        var resumeFile = JSON.parse(res.text);
        this.setState({
          resumeFileName : resumeFile.fileName,
          resumeFilePath : resumeFile.filePath
        });
      }
    });
  }
  downloadResume(){
    const stream = fs.createWriteStream('testing.pdf');
    var req = request
    .get(`http://${config.host}:${config.rest_port}/api/v1/download_user_resume/${this.state.user.email}`)
    .withCredentials()
    .type('png')
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('******** download resume **********');
        console.log(res);
        console.log('******************');
      }
    });
    console.log('pipe file');
    req.pipe(stream);
  }
  changeFile(event){
    console.log('**** selected resume file ****');
    console.log(event.target.value);
    console.log(event.target.files[0]);
    console.log('********');
    this.state.selectedFile = event.target.files[0];
  }

  uploadResume(){
    console.log(this.state.user.email);
    console.log(this.state.selectedFile);
    if (!this.state.selectedFile) {
      alert('请选择上传文件');
    } else {
      request
      .post(`http://${config.host}:${config.rest_port}/api/v1/update_user_resume`)
      .withCredentials()
      .field('userName', this.state.user.email)
      .attach('file', this.state.selectedFile)
      .end((err, res) => {
        if(err) {
          console.log(err);
        } else {
          console.log(res);
          this.getExistingFileName();
        }
      })
    }
  }

  render() {
    return (
        <Grid>
          <Col xs={1} md={1}></Col>
          <Col xs={12} md={8}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>
                已上传简历:
                </Col>
                <Col sm={10}>
                  {this.state.resumeFilePath ? <a onClick={this.downloadResume}>{ this.state.resumeFileName }</a> : null}
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col sm={2}>
                更新简历
                </Col>
                <Col sm={10}>
                  <FormControl type="file" onChange={(event) => this.changeFile(event) }/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={ this.uploadResume }>
                    上传简历
                  </Button>
                </Col>
              </FormGroup>
            </Form>  
          </Col>
          <Col xs={5} md={3}></Col>
        </Grid>
    );
  };
}