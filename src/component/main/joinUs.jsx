import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class JoinUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={12} md={10}>
        <div className="professorsIntroBlock">
            <Jumbotron>
                <div className="agreementH1">平台运营实习生</div>
                &nbsp;
                <div className="agreementH2">工作内容：</div>
                <div className="pgraph">-协助管理公司公众账号（有微信公众号运营经验者优先）</div>
                <div className="pgraph">-文字内容审核及排版</div>
                <div className="pgraph">-多媒体内容制作</div>
                <div className="pgraph">-协助参与市场调查及分析</div>
                <div className="agreementH2">职位要求:</div>
                <div className="pgraph">有公众账号管理经验，中文功底优秀，做事细心认真，有足够的在线时间</div>
                <div className="agreementH2">实习生待遇：</div>
                <div className="pgraph">-实习证明</div>
                <div className="pgraph">-优先考虑暑期实习</div>
                <div className="pgraph">-推荐信</div>
                <div className="pgraph">-公司活动</div>
                <div className="pgraph">-独家就业咨询</div>
                <div className="pgraph">-每月200刀补贴（因公产生交通费用报销</div>
                <div className="pgraph">-一周15-20小时工作</div>
                <div className="agreementH2">申请方式：</div>
                <div className="pgraph">发送简历到：xinyi.zhang@sporit.cn</div>
              </Jumbotron>
              <Jumbotron>
                    <div className="agreementH1">课程监制组实习生</div>
                    &nbsp;
                    <div className="agreementH2">工作内容：</div>
                    <div className="pgraph">-协助视频拍摄制作</div>
                    <div className="pgraph">-参与摄制后期制作</div>
                    <div className="pgraph">-活动统筹执行</div>
                    <div className="agreementH2">职位要求：</div>
                    <div className="pgraph">在纽约市区，行动力强，身体健康吃苦耐劳，交流能力强，熟悉纽约交通及其他生活信息。倾向于长期合作</div>
                    <div className="agreementH2">实习生待遇：</div>
                    <div className="pgraph">-实习证明</div>
                    <div className="pgraph">-优先考虑暑期实习</div>
                    <div className="pgraph">-推荐信</div>
                    <div className="pgraph">-公司活动</div>
                    <div className="pgraph">-独家就业咨询</div>
                    <div className="pgraph">-每月200刀补贴（因公产生交通费用报销</div>
                    <div className="pgraph">-一周15-20小时工作</div>
                    <div className="agreementH2">申请方式：</div>
                    <div className="pgraph">发送简历到：xinyi.zhang@sporit.cn</div>
              </Jumbotron>
            </div>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    );
  }
}