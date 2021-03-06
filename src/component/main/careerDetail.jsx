import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';

const positionInfo = {
  'c0' : [{
      'title' : '杂志编辑',
      'compensation' : '',
      'location' : '',
      'responsibility' : [],
      'requirment' : ['热爱网球、认真负责,','擅长沟通与写作，','具备英文翻译和会话能力，','媒体相关专业毕业为佳。'],
      'application' : '发送简历到：tianchenyan@tennismaster.com.cn'
    },{
      'title' : '新媒体编辑',
      'compensation' : '',
      'location' : '',
      'responsibility' : [],
      'requirment' : ['热爱网球、认真负责,','擅长沟通与写作，','具备英文翻译和会话能力，','媒体相关专业毕业为佳。'],
      'application' : '发送简历到：tianchenyan@tennismaster.com.cn'
    },
  ],
  'c1' : [{
      'title' : '赛事经纪',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
        '按照公司赛事规划，参与制定公司的营销战略；',
        '带领团队完成各项赛事销售任务；',
        '定期对营销环境、目标、计划、业务活动等进行核查分析，及时调整营销策略和计划，制定预防和纠正措施，确保营销目标和营销计划的完成；',
        '参与并负责重大营销项目的谈判与合同签订；',
        '及时了解目标客户的体育营销投放计划动向，稳固并开拓客户资源，建立有效渠道；',
        '管理销售团队的内部工作，并做好团队成员的工作考核。'
      ],
      'requirment' : [
        '大专以上学历，有体育行业销售工作3年以上工作经验，有丰富的客户资源；',
        '热爱体育，熟悉体育行业；',
        '具有良好的沟通、协调、组织、策划、合作能力；具备一定的亲和力及洞察力；',
        '能吃苦、可承受较大工作压力、能适应频繁出差、做事细致有耐心、具备团队合作精神；',
        '熟练使用各种常用办公软件；',
        '品行端正、思维敏捷、应变能力强、为人诚信、刻苦敬业；',
        '有志于长期从事体育销售行业者。'
      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    },{
      'title' : '新媒体运营',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
        '策划微信、微博话题，组织并执行微信、微博营销线上线下活动，微信、微博公众账号的日常运营和维护工作；',
        '熟悉行业信息资源的搜索及分析，制造话题、提炼可用观点及文宣素材；',
        '定期与粉丝互动，社交媒体活动策划、执行（配合产品推广、媒体合作）；',
        '负责媒体推广模式与渠道的探索，了解用户需求，收集用户反馈，分析用户行为及需求；',
        '跟踪推广效果,分析数据并反馈,总结经验,建立有效运营手段提升用户活跃度,增加粉丝数量；',
        '利用社会化新媒体沟通方式：微博、微信、论坛进行社会化营销，获取用户资源，树立品牌形象；',
        '完成领导交代的其他事项。'
      ],
      'requirment' : [
        '专科以上学历，营销、新闻、传播、中文等相关专业优先；',
        '有部门管理经验及行业资源。',
        '三年以上新媒体品牌传播策划经验，具备线上活动策划、组织、实施的从业经历优先。',
        '对社会化媒体传播形式如微博微信营销、SNS社区及论坛营销有丰富的实操经验。',
        '具有出色的表达、沟通、组织、协调能力，项目管理能力及良好的职业素养、服务意识和团队精神。'
      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    },
    {
      'title' : '体育经纪',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'发现聚焦优秀运动员，进行可行性分析；',
'确定商业价值开发渠道，为运动员做好定位宣传方案；',
'接触赞助商，设计招商方案；',
'调整经纪人合同完成合同签订；',
'履行经纪人合同，完善相关策划宣传活动，追踪落地方案实施进度；',
'调整赞助方案，完成续约任务。'
      ],
      'requirment' : [
'体育、管理、营销等相关专业大专以上学历，有体育经纪人资格证；',
'热爱经纪工作，有明星经纪经验者优先；',
'工作认真仔细，沟通能力强；有较强的明星包装和洽谈能力；',
'有良好的服务意识和团队合作精神；有明星运动员资源者优先。'

      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    },
    {
      'title' : '媒介经理',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'根据公司整体发展战略及目标，对媒体策略的制定提出建议并执行；',
'收集、分析、反馈媒体资讯，整合内外部媒体资源，为公司相关部门提供媒介支持；',
'建立广泛、长期、稳定的媒体合作关系，并对其进行维护；',
'负责依据公司业务板块及项目特性进行媒体稿件发布及效果监控；',
'负责公司微信、微博的内容策划和运营维护。'
      ],
      'requirment' : [
'具有公关传播或媒体行业从业经验；',
'拥有丰富的媒体资源，且具有敏锐的媒体资源洞察能力；',
'表达能力强，具有良好的沟通能力和协调能力；',
'工作认真负责，细致严谨，富有责任感；',
'具有卓越的媒体整合、策划、及文案撰写能力。'

      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    },
        {
      'title' : '赛事执行（客户执行AE）',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'根据项目实际情况制定相应的活动计划负责方案的撰写、落地执行；',
'赛事现场管理工作；',
'负责公司旗下各类活动的组织、执行、跟踪，总结；',
'活动物料的配发管理；项目执行成本的把控；',
'熟悉临时工作人员招聘、培训流程。'


      ],
      'requirment' : [
'大学本科及以上学历；',
'市场营销、中文、新闻、传播学、公共关系、广告相关专业优先；',
'大型体育赛事活动执行经验；',
'了解体育赛事的商务运营流程；',
'有政府部门沟通、协调经验和成功案例。',
'具有策略能力，能够独立把控项目工作推进；',
'具有严谨的逻辑思维，能够井然有序的推进项目落地；',
'具有较强的沟通能力，协调客群关系和项目关系；',
'结果导向，具有较强的执行力。责任心强，主动性强，善于团队配合；',
'英语熟练者优先考虑。'

      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    },

        {
      'title' : '实习生',
      'compensation' : '本科生是 100 元/天，研究生 150 元/天',
      'location' : '',
      'responsibility' : [
'辅助企划部门和商务部门进行项目谈判工作；',
'网上收集并整理行业信息；',
'协助处理部分公司日常事务。',

      ],
      'requirment' : [
'全日制本科生及以上，至少能连续实习 3 个月，细心好学，动手操作能力强，文字功底好，具有体育（高尔夫、游泳、冰球）相关专业知识背景或有一项体育运动爱好者优先。'

      ],
      'application' : '投递邮箱：info@bridgecc.cn'
    }
  ],
  'c2' : [
  {
      'title' : '文案编辑',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'自媒体运营、微信公众号内容撰写；',
'微博、微信、官网平台维护；',
'协助完成品牌活动相关工作（线下活动）；',
'媒体传播。'

      ],
      'requirment' : [
'具有捕捉社会热点、网红信息的敏感度和反应能力；',
'文字功底较强、责任心强；',
'吃苦耐劳、团队协作精神强、善于沟通；',
'具有新媒体运营经验者优先。'
      ],
      'application' : '简历投递：qiqi.shen@dgp-commercial.com'
    }
  ],
  'c3' : [
    {
        'title' : '广告营销总监1人',
        'compensation' : '基本工资+绩效奖金/提成+五险一金+交通补贴+饭贴+培训+团建',
        'location' : '',
        'responsibility' : [
'1、针对公司重要客户和重大目标客户进行整合销售工作，完成公司既定的销售任务；',
'2、带领团队完成与更新公司全产品的包装与整合；',
'3、完成公司产品的市场推广及各项媒体项目的方案撰写；',
'4、 带领团队根据销售部门需求，随时提供个性化的销售策划方案并协助提案、分析等工作；',
'5、完善市场数据研究和信息收集，能够经常性的提出有利于市场竞争、产品竞争的建议'
        ],
        'requirment' : [
'1、广告、新闻传播、市场营销等专业，本科及以上学历；',
'2、10年以上广告销售经验，销售业绩优异 ；',
'3、具有品牌客户销售服务经验，并有成功开发案例；',
'4、熟悉媒体资源与环境，有广告客户开发、管理、维护能力，有丰富的商务谈判经验和技巧，PPT策划能力优秀者优先考虑；',
'5、热爱体育行业，沟通能力强，善于承受压力，具有开拓精神及良好的团队合作精神；'

        ],
        'application' : '联系人：李江涛 18811042797（微信号）; 投递邮箱：jtli@hoopbattle.com'
    },
      {
      'title' : '广告营销经理2人',
      'compensation' : '基本工资+绩效奖金/提成+五险一金+交通补贴+饭贴+培训+团建',
      'location' : '',
      'responsibility' : [
'1、熟悉传统媒体、网络媒体、体育类等广告运营，配合总监制定项目销售目标、市场策略，完成销售业绩；',
'2、根据项目类型开发资源客户、洽谈广告业务、做好广告销售工作；',
'3、定期拜访客户，及时了解客户需求，了解客户状态，高品质服务客户；',
'4、根据项目招商需求，建立客户网络，完成公司销售业绩。'

      ],
      'requirment' : [
'1、新闻传播、市场营销、广告等相关专业，大专及以上学历；',
'2、熟悉广告行业，并熟悉各类广告操作流程，3年以上广告媒体相关工作经验，熟悉互联网及相关的媒体或公关行业；',
'3、善于资源整合及资源置换，能发现各广告板块的闲置资源并能提出有效的置换方案；',
'4、具有较强的人际关系沟通能力、业务拓展能力、敏锐力、执行力；',
'5、热爱体育行业，工作责任心强，能承受紧张的工作压力，具备团队合作精神。'

      ],
      'application' : '联系人：李江涛 18811042797（微信号）; 投递邮箱：jtli@hoopbattle.com'
    },
      {
      'title' : '商业空间设计师1人',
      'compensation' : '基本工资+绩效奖金/提成+五险一金+交通补贴+饭贴+培训+团建',
      'location' : '',
      'responsibility' : [
'1、负责商业零售空间及展示道具的创意及设计；',
'2、与团队成员一起进行方案的深化与落实；',
'3、在项目执行的后期能参与商业制作环节的沟通与协调，并进行施工制作现场的控制；',
'4、通过创意与设计，体现商业零售设计的空间感，实用性，优越性，革命性，凸显其人性化；',
'5、协助进行室内装饰的成本核算和资源分析。'

      ],
      'requirment' : [
'1、拥有5年以上商业空间设计实际项目操作经验；',
'2、能够独立完成前期的方案设计，并掌控后期的深化与施工图制作；',
'3、了解常用的材料构造，并具备一定的施工现场沟通和协调能力；',
'4、熟悉3DMax/Sketchup建模及AutoCAD的施工图绘制；了解 Photoshop / Illustrator / MS office等软件的操作；',
'5、有创造性的设计思维和良好的团队合作精神，吃苦耐劳，责任心强。'

      ],
      'application' : '联系人：李江涛 18811042797（微信号）; 投递邮箱：jtli@hoopbattle.com'
    },
      {
      'title' : '赛事活动策划2人',
      'compensation' : '基本工资+绩效奖金/提成+五险一金+交通补贴+饭贴+培训+团建',
      'location' : '',
      'responsibility' : [
'1、负责公司各种体育赛事方案的文案策划、监督方案执行过程和反馈。',
'2、根据不同赛事能够独立撰写各类活动策划方案、调研报告、报价、总结等；',
'3、与公司其他部门合作，承担公司项目的创意、策划等配合工作；',
'4、负责宣传文稿的撰写，协助赛事品牌的建设和推广方案的拟定；',
'5、能够较好与第三方供应商对接、合作、做到有效管理，控制项目成本'
      ],
      'requirment' : [
'1、本科及以上学历，体育、营销、广告、传媒等相关专业；',
'2、从事赛事策划工作2年以上，具有的赛事策划经验，熟悉国内外各大体育赛事；',
'3、具有很强的逻辑思维能力、策略思考能力和创意能力、极强的客户服务理念，具备较好的文案基础，能制定各类赛事营销策划案、赛事活动方案；',
'4、品行端正，稳重踏实，做事细心、严谨自律、有条理性；',
'5、优秀的语言表达能力，良好的沟通、协调能力；',
'6、热爱体育运动，对体育行业、市场具有一定了解或相关经验。'
      ],
      'application' : '联系人：李江涛 18811042797（微信号）; 投递邮箱：jtli@hoopbattle.com'
    },
      {
      'title' : '赛事主管1人',
      'compensation' : '基本工资+绩效奖金/提成+五险一金+交通补贴+饭贴+培训+团建',
      'location' : '',
      'responsibility' : [
'1、大学本科及以上学历;',
'2、具有3年以上广告、策划、公关市场部、体育活动执行公司工作背景;',
'3、熟悉大型活动的运作规律、现场管理;',
'4、了解体育运动或者具有体育运动行业营销策划经验;',
'5、具有良好的沟通能力和团队合作精神、能够独立领导团队完成活动任务;'

      ],
      'requirment' : [
'1、 制定体育赛事或推广活动管理工作计划;',
'2、 制定赛事或推广活动策划方案及执行预算;',
'3、 统筹赛事项目或推广活动的前期筹备和后期现场各项执行工作;',
'4、 培训现场工作人员和监督工作人员完成工作;',
'5、 解决现场活动中出现的问题、灵活应对突发事件;',
'6、 撰写项目活动总结报告，提出改进意见和建议;',
'7、 参与公关活动、赛事活动等商业活动方案的策划与组织实施、执行;',
'8、 协助项目统筹处理各项工作;',
'9、 完成部门交付的其他工作任务;'

      ],
      'application' : '联系人：李江涛 18811042797（微信号）; 投递邮箱：jtli@hoopbattle.com'
    }
  ],
  'c4' : [
  {
      'title' : '新媒体运营推广',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'负责爱奇艺体育官方微博、微信等新媒体平台日常内容的撰写和运营，配合频道版权赛事和活动进行新媒体传播； ',
'负责爱奇艺体育版权赛事及相关活动的线上方案的策划、撰写、执行等工作；',
'策划、组织线上大型合作活动以及定向专题活动的组织策划执行推广，并做相应的活动评估报告和总结报告，同时负责微博、微信媒体资源拓展渠道的运营及管理； ',
'分析同行业微博、微信内容结构及话题热点，调研目标用户群体喜好，在此基础上定位用户需求及喜好，增长粉丝量并增加用户粘性； ',
'完成上级指定的其他工作等。'
      ],
      'requirment' : [
'本科及以上学历，有2年以上相关工作经验； ',
'有较强的新闻、热点敏感性，有较强的文案功底；',
'有丰富的线上线下活动推广实战经验，了解知识性媒体特点，熟悉口碑营销的执行操作流程； ',
'网感好，创意优，执行力强，有良好的策略思考能力并能独立撰写方案，一定程度掌握图片处理软件； ',
'知识面广，思维活跃，工作主动，有责任感，能承受较大的工作压力； ',
'有微博、微信运营成功案例者优先； ',
'良好团队合作精神；较强的执行力，独立思考能力、观察力和应变能力。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    },
      {
      'title' : '体育营销专员',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'负责体育产品的包装运营工作，支持公司销售团队工作。',
'开发体育频道项目的客户资源，完成一部分体育频道的销售开发工作。',
'结合体育赛事资源，进行商业化的深度利用和卖点挖掘，进行产品包装。',
'设计符合用户需求的VIP会员体育类产品与服务。 ',
'探索除赛事直播、视频点播等之外的体育产品形态与服务形态，创造新的可以营利的产品与服务。',
'开发新的可转化商业价值的体育合作资源。'
      ],
      'requirment' : [
'本科及以上学历； ',
'2-3年体育营销、互联网体育媒体、体育赛事公司等相关工作背景优先；',
'有相关体育行业客户资源优先；',
'沟通协作能力强，思维敏捷，能够准确把握产品优势和客户心理，促成销售业绩',
'具有较强的商业文档策划及包装能力，精通PPT, EXCEL 等OFFICE软件；',
'富有创意，关注新鲜事物，乐于团队协作，具有较好沟通能力；',
'熟悉网球、高尔夫等运动项目更佳。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    },
      {
      'title' : '高尔夫编导',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'负责体育与高尔夫、美巡赛网页的日常维护与更新。',
'参与高尔夫赛事的直播。',
'外出拍摄高尔夫赛事或行业内发布会、活动。',
'新闻、短专题等视频节目剪辑。'

      ],
      'requirment' : [
'本科及以上学历；',
'互联网体育媒体、体育赛事公司等相关工作背景优先；',
'有高尔夫从业经验优先；',
'沟通协作能力、协作能力强，责任心强，对待工作认真，为人踏实。',
'具有较强的拍摄或后期编辑能力，精通PR、PS、Final Cut等后期软件。',
'会使用摄像机独立完成拍摄。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    },
      {
      'title' : '体育编辑',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'日常体育页面维护、视频短片制作及内容推荐；',
'新闻敏感度高，第一时间跟进热点新闻，完成视频及专题策划。',
'承担体育日常值班工作，能够接受倒班、夜班，抗压能力强；',
'重点赛事及热点新闻外出承担摄像或采访记者工作。',
      ],
      'requirment' : [
'大学本科及以上学历，新闻传媒类及广播电视类专业优先考虑；',
'热爱体育，尤其是网球项目；',
'能够熟练使用PS、PR等编辑类软件；',
'英语出色者优先考虑；',
'2年及以上相关工作经验。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    },
      {
      'title' : '节目编导',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'负责体育比赛直播；',
'负责体育频道节目策划、文案、执行；',
'负责体育频道相关新闻制作、上线工作；',
'负责外拍专题节目的策划、文案及执行。'
      ],
      'requirment' : [
'本科学历，两年以上电视台或体育网站视频编导经验；',
'熟悉体育直播、节目制作流程及规范，有体育直播、节目制作经验，并介绍自己在直播、节目流程中的角色与作用；',
'能独立制作相关视频策划、专题；',
'英文听说能力佳；',
'熟悉网球者优先；',
'良好的承压能力和团队合作精神，能够适应不规律的工作时间。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    },
      {
      'title' : '网球解说、出镜主持人（实习生）',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'根据比赛进程对比赛过程进行讲解；',
'熟悉球员技术特点，能够快速阅读比赛，进行技术和数据分析；',
'可完成各种类型稿件的配音工作；',
'可配合节目完成主持工作；',
'可完成外景主持和现场采访工作；',
'能够应对现场出现的意外状况。'
      ],
      'requirment' : [
'喜欢网球运动，有自己喜欢的球员和故事；',
'普通话标准，表达能力强；',
'形象气质佳，有很强的表演欲，不怵镜头；',
'英文听说能力佳；',
'熟悉WTA者优先；',
'良好的承压能力和团队合作精神，能够适应不规律的工作时间；',
'实习生需要保证一周能有4天以上的工作时间。'
      ],
      'application' : '投递邮箱：2633115625@qq.com(邮件名称规范：职位-姓名-生态圈)'
    }
  ],
  'c5' : [
  {
      'title' : 'Marketing intern',
      'compensation' : '',
      'location' : '',
      'responsibility' : [
'Basic translations as needed.',
'Competitor data collection.',
'Website content update.',
'Wechat/weibo content creation and update.',
'Coordination with agency.',
'Necessary supports on PR, offline events, ticketing and training',
'Support on other marketing work as assigned'
      ],
      'requirment' : [
'Good Chinese and English skills.',
'Good knowledge of social media and digital, good at content creation and executions.',
'Good command of design softwares would be a plus, Adobe Photoshop, Illustrator etc.',
'Passion for sports and lifestyle.',
'Smart, diligent, willing to learn and take on challenges.',
'Team player with can-do spirit and willing to get involved.',
'注：能尽快入职者优先。'
      ],
      'application' : '投递简历到： cnrecruitment@img.com'
    }
  ],
  'c6' : [
  {
      'title' : '内容运营实习生',
      'compensation' : '面议。我们能够给予你一份不错的报酬，高于同行业水平。工作期间内容会被几十万体育迷阅读到，对于文章质量过硬的人，可获得单独的约稿机会。当然如果你表现出色能够得到一份正式的工作。',
      'location' : '',
      'responsibility' : [
'体育新闻的撰写与内容质量监督；',
'自媒体公众号文章的编辑和创作；',
'帮助乌潮推进新项目，例如原创视频，视频制作等。'
      ],
      'requirment' : [
'长期关注国内外的体育媒体，拥有第一首消息源，对新闻有自己的见解，我们不欢迎无脑的搬运工；',
'有基本的翻译能力，能听懂简单的对话；',
'文笔和表达能力出色，语感好、审美佳；',
'有为体育媒体、公众号写稿的经验。',
'优先考虑条件：',
'生活在广州：',
'会用专业的视频剪辑软件进行原创视频的创作；',
'有独立采访和图片处理能力。 ',
      ],
      'application' : '投递简历到邮箱：hello@wuchao.us '
    }
  ],
  'c7' : [
  {
      'title' : '新媒体运营',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'具备工作所需新媒体及体育专业知识；',
'了解互联网平台（微信，微博，在行，百度等）特性',
'了解使用Office办公工具、互联网编辑器以及Photoshop、Flash等软件；',
'具有新媒体及体育行业运营经验者优先考虑，知晓体育行业营销模式，热爱体育及有相关体育行业工作经验优先，英语水平良好者优先。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '传播&公关经理',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'制定和整合东风队的媒体合作计划和公关方案，组织策划宣传活动，密切配合赞助商和赛事方的宣传计划，扩大东风队的影响力。',
'维护媒体关系，和重要媒体进行战略合作，丰富东风队媒体资源库，进行媒体传播分析。',
'具有2年以上媒体从业经验，熟悉媒体传播行业，拥有广泛的媒体资源。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
    {
      'title' : '图片视频编辑',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'对东风队的图片和视频进行管理和编辑；',
'对影像内容有独到的审美，快速获取需要的图片与视频，协助其他媒体团队的成员丰富传播内容；',
'具有图片精修，视频剪辑和编辑能力。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '随队摄像&摄影师',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'具有好奇心和想象力',
'配合媒体团队的宣传需求，拍摄东风队近岸训练和岸上生活的照片和视频；',
'制作和剪辑东风队的专题视频；'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '客户管理执行助理',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'有灵活的应变能力，协助商务合作伙伴关系的维护，内部沟通、日常沟通及项目执行；',
'协助媒体及公关团队处理相关的业务；',
'协调停靠港现场的客户接待安排；',
'配合组织赛事村内的公众参与及航行体验活动。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '后勤执行助理',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'协助管理东风队上下几十个船队和岸队成员的机票、酒店的预订，签证申请；',
'熟悉东风队驻地的周边服务，保证团队成员的生活便利；',
'协助东风队集装箱的运输和搭建；',
'东风队日常运营的内部沟通和协调。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '嘉宾航行体验协调员',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'配合客户关系管理团队，对比赛期间在赛事村内的嘉宾航行体验进行安排、现场执行、讲解；',
'负责协调全部嘉宾航行体验的安全保障。',

      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    },
      {
      'title' : '青少年航海项目协调员',
      'compensation' : '',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'和海内外帆船俱乐部建立良好联系，负责青少年航海项目的规划、联络和执行。',
'熟悉青少年航海项目的特点，拥有广泛的俱乐部资源。',
'有耐心有爱心，有青少年夏令营工作经验者优先。'
      ],
      'application' : '简历投递：dongfengraceteam@foxmail.com'
    }
  ],
  'c8' : [
  {
      'title' : '市场活动执行助理',
      'compensation' : '本科生：100元/天; 研究生：150元/天',
      'location' : '',
      'responsibility' : [
'配合上级领导开拓优质线下活动合作渠道，充分利用外界资源，为公司争取更多市场活动合作关系。',
'配合上级领导拓宽线下活动推广渠道，维护与媒体（含互联网）及政府协会关系，与不同媒体合作细节汇总，塑造良好的公司形象，完成营销推广活动；',
'配合上级领导完成公司各类线下推广方案要求，并配合各部门项目实施活动落地（如展会，新闻发布会）；',
'配合上级管理团队，完成上级交代的其他事项。'

      ],
      'requirment' : [
'工作所需市场营销或体育专业知识；',
'热爱体育及有相关市场营销或体育行业实习工作经验；',
'结合各活动平台特性，能灵活运用各渠道提升营销效果；',
'了解主流新媒体特征，运用市场营销或体育行业内相关媒体资源传播；',
'具有拓展、策划、活动执行的能力，擅于总结经验；'
      ],
      'application' : '投递邮箱：elsie.l@shalisports.com'
    },
    {
      'title' : '新媒体运营经理助理',
      'compensation' : '本科生：100元/天; 研究生：150元/天',
      'location' : '',
      'responsibility' : [
'了解新媒体，撰写微信，微博、官网公众号文章，执行各类线上活动传播；',
'了解互联网媒体营销模式，利用公司互联网平台开展营销工作；',
'运用公司优质线上线下媒体合作渠道，利用内外部资源，为公司争取更多市场合作关系；',
'拓宽网络新媒体推广渠道，完成的营销线上线下推广活动；',
'配合上级管理团队及其他部门工作，完成上级交代的其他事项。'
      ],
      'requirment' : [
'具备工作所需新媒体及体育专业知识；',
'了解互联网平台（微信，微博，在行，百度等）特性',
'了解使用Office办公工具、互联网编辑器以及Photoshop、Flash等软件；',
'具有新媒体及体育行业运营经验者优先考虑，知晓体育行业营销模式，热爱体育及有相关体育行业工作经验优先，英语水平良好者优先。'
      ],
      'application' : '投递邮箱：elsie.l@shalisports.com'
    },
    {
      'title' : '投资开发部调研助理',
      'compensation' : '本科生：100元/天; 研究生：150元/天',
      'location' : '',
      'responsibility' : [
'辅助投资部门进行投资项目调研工作；',
'网上收集并整理行业信息；',
'辅助筹备公司举办的行业论坛与会议；',
'协助处理公司部分日常事务。'
      ],
      'requirment' : [
'至少能连续实习3个月；',
'动手操作能力强，文字功底好；',
'工作细心，擅于从整体上分析事物；',
'对体育场馆的运营有一定了解；',
'具有体育相关专业知识背景或有体育运动爱好者优先。'
      ],
      'application' : '投递邮箱：elsie.l@shalisports.com'
    }
  ],
  'c9' : [
  {
      'title' : '新媒体运营推广员师',
      'compensation' : '一经录用上岗，即为中心正式员工，工资待遇采取国家规定标准+绩效考核相结合。新媒体运营师工资可以面谈。',
      'location' : '',
      'responsibility' : [
'根据项目需要，策划并制定中心微信、微博等新媒体的运营策略，策划并执行推广活动；',
'制定目标任务，通过活动、社群、内容等手段完成KPI考核，建设有效运营手段用户并提升用户活跃度；',
'提取数据报表，分析推广效果并优化。'

      ],
      'requirment' : [
'有较强的数据分析能力、活动策划能力和执行力；',
'本科以上学历，有一定文字功底；',
'热爱体育、爱好运动，有相关工作经验者优先考虑；',
'为人靠谱，工作责任心强，有成就一番事业的雄心壮志。'

      ],
      'application' : '简历投递：651837113@qq.com '
    },
  {
      'title' : '田径教练',
      'compensation' : '一经录用上岗，即为中心正式员工，工资待遇采取国家规定标准+绩效考核相结合。',
      'location' : '',
      'responsibility' : [

      ],
      'requirment' : [
'全日制体育类本科及以上学历，运动训练专业毕业，本人熟练掌握当今最新青少年田径训练原理、方法手段、技术理论，且具有较强的事业心责任感；',
'为人正直、作风正派，有志于为基层青少年田径训练奉献终身的男女青年，年龄在22－30岁均可；有专业运动员经历且运动成绩达一级以上者优先考虑。'
      ],
      'application' : '简历投递：651837113@qq.com '
    }
  ],
};

export default class CareerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: props.params.companyId,
    };
  }

  render(){

    console.log(positionInfo[this.state.courseName]);

    var openPositionList = positionInfo[this.state.courseName].map((c, i) => {
      
      var responsibilityList = c.responsibility.map((c, j) => {
        return (
          <div key={j} className="pgraph">{c}</div>
        );
      });

      var requirmentList = c.requirment.map((c, k) => {
        return (
          <div key={k} className="pgraph">{c}</div>
        );
      });

      return (
        <Jumbotron key={i}>
          <div className="agreementH1">{c.title}</div>
          {c.location ? (
              <div>
                <div className="agreementH2">工作地点：</div>
                <div className="pgraph">{c.location}</div>
              </div>
            ) : (null)}

          {c.compensation ? (
              <div>
                <div className="agreementH2">薪资待遇：</div>
                <div className="pgraph">{c.compensation}</div>
              </div>
          ) : (null)}

          {c.responsibility.length == 0 ? (null) : (
            <div>
              <div className="agreementH2">工作职责：</div>
              { responsibilityList }
            </div>
          )}

          {c.requirment.length == 0 ? (null) : (
            <div>
              <div className="agreementH2">岗位要求：</div>
              { requirmentList }
            </div>
          )}

          {c.application ? (
              <div>
                <div className="agreementH2">申请方式：</div>
                <div className="pgraph">{c.application}</div>
              </div>
          ) : (null)}
        </Jumbotron>
      )
    });

    return (
      <Grid>
        <Col xs={2} md={1}></Col>
        <Col xs={12} md={10}>
          <div className="professorsIntroBlock">
            { openPositionList }
          </div>
        </Col>
        <Col xs={2} md={1}></Col>
      </Grid>
    )
  }
}
