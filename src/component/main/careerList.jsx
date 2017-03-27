import config from 'root/config.json';
import React from 'react';
import * as request from 'superagent';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import { browserHistory } from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ListGroup from 'react-bootstrap/lib/ListGroup';

export default class CareerList extends React.Component {
  constructor() {
    super();
    this.state = { companyList: [] };
  }

  componentDidMount() {
  	request
  	.get(`http://${config.host}:${config.rest_port}/api/v1/get_career_companies`)
  	.end((err, res) => {
  		if (err) {
  			console.error(err);
  		} else {
  			this.setState({ companyList: res.body });
  		}
  	});
  }

  goToCareerDetail(companyId){
    browserHistory.push(this.props.location.pathname + '/' +`${companyId}`);
  }

  render() {
    let companyList = this.state.companyList.map((c, idx) => {
      return (
        <Jumbotron key={idx}>
          <Row>
            <div className="agreementH2">{c.companyTitle}</div>
          </Row>
          <Row>
            <Col xs={5} md={4}>
              <img className="professorsIntroPhoto" src={ `data:png;base64,${ c.companyImage }` }></img>
            </Col>
            <Col xs={11} md={8}>
              <Row>
                <ListGroup componentClass="ul">
                  <li className="pgraph">{c.companyInfo}</li>
                  <li className="pgraph">{c.companyLocation}</li>
                </ListGroup>
              </Row>
              <Row>
                <Button
                  bsStyle="primary"
                  className="course-detail-btn"
                  onClick={ () => { this.goToCareerDetail(c.companyId); } }
                >
                  查看详情
                </Button>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
	    )}
		);
		
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={14} md={10}>
          <div className="professorsIntroBlock">
            { companyList }
          </div>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    );
  }
}