import config from 'root/config.json';
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import NavbarComponent from 'component/main/navbar';
import BottomNavbarComponent from 'component/main/bottom_navbar';
import MainPageStyle from 'style/main.scss';
import { browserHistory } from 'react-router';
import * as request from 'superagent';
import { Icon } from 'react-fa';
import faker from 'faker';
import courseStyle from 'style/mainPageCourse.scss';

export default class JoinUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={16} md={11}>
          <div className="joinUsBlock">
            <div className="joinUsBlockTitle">平台运营实习生</div>
            <div className="joinUsBlockSubTitle">工作内容：</div>
            <div className="joinUsText">-协助管理公司公众账号（有微信公众号运营经验者优先）</div>
            <div className="joinUsText">-文字内容审核及排版</div>
            <div className="joinUsText">-多媒体内容制作</div>
            <div className="joinUsText">-协助参与市场调查及分析</div>
            <div className="joinUsBlockSubTitle">职位要求:</div>
            <div className="joinUsText">有公众账号管理经验，中文功底优秀，做事细心认真，有足够的在线时间</div>
            <div className="joinUsBlockSubTitle">实习生待遇：</div>
            <div className="joinUsText">-实习证明</div>
            <div className="joinUsText">-优先考虑暑期实习</div>
            <div className="joinUsText">-推荐信</div>
            <div className="joinUsText">-公司活动</div>
            <div className="joinUsText">-独家就业咨询</div>
            <div className="joinUsText">-每月200刀补贴（因公产生交通费用报销</div>
            <div className="joinUsText">-一周15-20小时工作</div>
            <div className="joinUsBlockSubTitle">申请方式：</div>
            <div className="joinUsText">发送简历到：xinyi.zhang@sporit.cn</div>
          </div>
          <div className="joinUsBlock">
            <div className="joinUsBlockTitle">课程监制组实习生</div>
            <div className="joinUsBlockSubTitle">工作内容：</div>
            <div className="joinUsText">-协助视频拍摄制作</div>
            <div className="joinUsText">-参与摄制后期制作</div>
            <div className="joinUsText">-活动统筹执行</div>
            <div className="joinUsBlockSubTitle">要求：</div>
            <div className="joinUsText">在纽约市区，行动力强，身体健康吃苦耐劳，交流能力强，熟悉纽约交通及其他生活信息。倾向于长期合作</div>
            <div className="joinUsBlockSubTitle">实习生待遇：</div>
            <div className="joinUsText">-实习证明</div>
            <div className="joinUsText">-优先考虑暑期实习</div>
            <div className="joinUsText">-推荐信</div>
            <div className="joinUsText">-公司活动</div>
            <div className="joinUsText">-独家就业咨询</div>
            <div className="joinUsText">-每月200刀补贴（因公产生交通费用报销</div>
            <div className="joinUsText">-一周15-20小时工作</div>
            <div className="joinUsBlockSubTitle">申请方式：</div>
            <div className="joinUsText">发送简历到：xinyi.zhang@sporit.cn</div>
          </div>
        </Col>
      </Grid>
    );
  }
}