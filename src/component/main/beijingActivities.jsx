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
import courseStyle from 'style/mainPageCourse.scss';
import QRCCodeImage from 'style/asset/qrcode.jpg';

export default class BeijingActivities extends React.Component {
  constructor() {
    super();
  }

    render() {
    return (
      <Grid>
        <Col xs={2} md={2}></Col>
        <Col xs={14} md={8}>
          <Row>
            <div className="textCenter agreementH1 bigMarginTop">中美体育管理发展与人才培养论坛</div>
          </Row>
          <Row>
            <div className="agreementH2">地点：</div>
            <div className="pgraph">北京大学光华管理学院 898创新空间报告厅（1号楼301）</div>
          </Row>
          <Row>
            <div className="agreementH2">时间：</div>
            <div className="pgraph">2017年03月28日 13:30-16:30</div>
          </Row>
          <Row>
            <div className="pgraph">由北京大学光华管理学院与哥伦比亚大学联合主办，SPORiT思博锐体育支持的“中美体育管理发展与人才培养论坛”将在3月28日隆重举行。</div>
            <div className="pgraph">本次论坛旨在促进中美交流、推进互动合作，将主要针对中国体育产业人才痛点问题进行深入讨论、提出解决方案。
</div>

            <div className="agreementH2 textCenter">高峰对话，名师云集
</div>
            <div className="pgraph">本次论坛嘉宾阵容强大，聚集了中美体育产业的领军人物。美方嘉宾包括哥伦比亚大学体育管理系主任Vince Gennaro教授、前CBS体育频道主席Neal Pilson教授、及前美国场馆协会主席William Squires教授。
</div>
            <div className="pgraph">中方嘉宾包括国家体育总局体育科学研究所体育社会科学研究中心主任鲍明晓教授、乐视体育副董事长马国力先生、新浪体育总裁魏江雷先生、首都体育学院校长钟秉枢教授、阿里体育首席运营官余星宇先生、中奥体育董事长刘亚群先生等业界资深专家。中央电视台著名主持人张斌会亲临现场，担当特邀嘉宾主持本次论坛的圆桌会议环节。
</div>
            <div className="pgraph">与美国哥伦比亚代表团同行的还有思博锐体育团队。思博锐团队将会在本次论坛中推出他们为中国体育人才痛点问题的提出的核心解决方案。思博锐是由哥伦比亚大学毕业生创建的、致力于打造最专业体育管理培训平台及职业社交联盟。本次论坛是思博锐在中国的首次亮相。
</div>

            <div className="agreementH2 textCenter">论坛精彩内容流程</div>
            <div className="agreementH2">开幕致辞</div>
            <div className="pgraph">论坛主席：</div>
            <div className="pgraph">赵龙凯，北京大学光华管理学院院长助理，MBA项目、北大光华－巴萨体育管理中心副主任，金融系教授
</div><br/>
            <div className="pgraph">14:00-14:05 </div>
            <div className="pgraph">冒大卫，北京大学光华管理学院党委书记，北大光华－巴萨体育管理中心主任
</div><br/>

            <div className="agreementH2">主题演讲</div>
            <div className="pgraph">14:05-14:25</div>
            <div className="pgraph">体育管理人才供需现状分析</div>
            <div className="pgraph">鲍明晓 ，国家体育总局体育科学研究所体育社会科学研究中心主任</div>
            <br/>
            <div className="pgraph">14:25-14:45</div>
            <div className="pgraph">体育大数据的力量</div>
            <div className="pgraph">Vince Gennaro， 哥伦比亚大学教授，体育管理项目主任</div>
            <br/>
            <div className="pgraph">14:45-15:00 </div>
            <div className="pgraph">直击人才痛点：思博锐的知识经济</div>
            <div className="pgraph">宋文昊， 创始人及CEO， 思博锐体育，哥伦比亚大学体育管理项目代表</div>
            <br/>
            <div className="agreementH2">圆桌会议</div>
            <div className="pgraph">圆桌会议引导嘉宾：张斌， 中央电视台著名主持人</div>
            <br/>
            <div className="pgraph">15:00-15:30 </div>
            <div className="pgraph">东方 vs 西方：中美体育场馆运营现状及展望</div>
            <div className="pgraph">探讨嘉宾：</div>
            <div className="pgraph">William Squires， 哥伦比亚大学教授，前美国场馆协会主席</div>
            <div className="pgraph">刘亚群， 中奥体育董事长，中国场馆协会副主席</div>
            <div className="pgraph">霍建新， 首都体院教授，中国体育场馆专家</div>
            <div className="pgraph">周文信，北京鼎信体育产业股份有限公司董事长</div>
            <div className="pgraph">黄江， 中国建筑集团副总裁（已邀请）</div>
            <div className="pgraph">Eric Cuthbertson， CEO，AEG中国（已邀请）</div>
            <br/>
            <div className="pgraph">15:30-16:00</div>
            <div className="pgraph">中美体育人才培养之路</div>
            <div className="pgraph">主持嘉宾：</div>
            <div className="pgraph">方君， 联合创始人及首席运营官， 思博锐体育</div>
            <div className="pgraph">探讨嘉宾：</div>
            <div className="pgraph">Vince Gennaro， 哥伦比亚大学教授，体育管理中心主任</div>
            <div className="pgraph">江明华，北京大学光华管理学院院长助理，EMBA项目执行主任，北大光华－巴萨体育管理中心副主任，营销系教授</div>
            <div className="pgraph">戴倩， 道经体育执行董事，前李宁公司首席人力官，联想控股高级顾问</div>
            <div className="pgraph">唐小燕， 人才招聘与管理总监， NBA中国 （已邀请）</div>
            <div className="pgraph">李韬之， 创始人及CEO，WEsport</div>
            <br/>
            <div className="pgraph">16:00-16:30</div>
            <div className="pgraph">体育媒体与数字化变革</div>
            <div className="pgraph">探讨嘉宾：</div>
            <div className="pgraph">Neal Pilson， 哥伦比亚大学教授，Pilson Communication集团主席，前CBS体育频道主席</div>
            <div className="pgraph">马国力， 资深媒体人，前中央电视台体育中心主任，乐视体育副董事长</div>
            <div className="pgraph">魏江雷， 新浪体育总裁</div>
            <div className="pgraph">余星宇， 阿里体育首席运营官</div>
            <div className="pgraph">朱敏捷， 安踏集团品牌营销资深总监</div>
            <div className="pgraph">贾文秀， 腾讯体育采编中心总监</div>
            <br/>
            <div className="pgraph">特邀到场嘉宾：</div>
            <div className="pgraph">张勇， 鑫苑集团，纽交所上市公司董事局主席，金融学博士</div>
          </Row>
          <Row>
            <div className="pgraph textCenter">诚挚邀请您的参与！</div>
            <br/>
            <div className="pgraph textCenter">点击下方链接，报名注册论坛！</div>
            <div className="pgraph textCenter"><a href="http://t.cn/RiE5wjk" target="_blank">http://t.cn/RiE5wjk</a></div>
            <br/>
            <div className="pgraph textCenter">关注SPORiT思博锐体育</div>
            <div className="pgraph textCenter">更多了解大咖嘉宾</div>
            <div className="pgraph textCenter">掌握论坛最新资讯和实时动态</div>
          </Row>
          <Row className="textCenter">
            <img src={QRCCodeImage}/>
          </Row>
        </Col>
        <Col xs={2} md={2}></Col>
      </Grid>
    );
  }
}