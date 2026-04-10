// 30 道管理咨询顾问性格测试题
// 每题 4 个选项，每个选项对应维度分值
// 维度：S/D (输出偏好：PPT至上/数据至上), C/A (工作节奏：佛系/卷王), G/L (协作倾向：群狼/独狼), N/V (江湖段位：萌新/老法师)
// 分值范围：每个维度 -2 ~ +2，负=前者，正=后者

var QUESTIONS = [
  {
    id: 1,
    text: 'Partner 说这个项目需要一份 80 页的 final deck，你的第一反应是？',
    options: [
      { text: '80 页？我 30 页就能讲清楚，剩下 50 页是凑数的', scores: { depth: -1, exp: 1 } },
      { text: '打开模板库，先把框架搭好，内容后面填', scores: { depth: -2, action: 1 } },
      { text: '先搞清楚客户到底需要什么数据支撑，PPT是最后一步', scores: { depth: 2, action: 0 } },
      { text: '才 80 页？上个项目我做了 150 页', scores: { depth: -1, action: 2, exp: 1 } }
    ]
  },
  {
    id: 2,
    text: '周五晚上 10 点，Partner 突然发来消息说周一早上要跟客户 CEO 汇报，你？',
    options: [
      { text: '已读不回，假装没看到，周六早上再说', scores: { action: -2, exp: 0 } },
      { text: '秒回"收到"，然后打开电脑开始干', scores: { action: 2, exp: -1 } },
      { text: '回一句"我先看看现有材料够不够用"，然后继续追剧', scores: { action: -1, exp: 1 } },
      { text: '拉一个紧急作战群，把团队全部 @ 起来', scores: { action: 2, social: -2 } }
    ]
  },
  {
    id: 3,
    text: '关于数据分析工具，你的态度是？',
    options: [
      { text: 'Excel 能解决 99% 的问题，剩下 1% 也能', scores: { depth: 0, exp: -1 } },
      { text: 'Python + SQL，数据量大了 Excel 就是玩具', scores: { depth: 2, exp: 1 } },
      { text: '工具不重要，重要的是 insight。用计算器都行', scores: { depth: 1, exp: 2 } },
      { text: '我一般让分析师跑数据，我负责讲故事', scores: { depth: -2, exp: 1 } }
    ]
  },
  {
    id: 4,
    text: '客户方的中层经理在会上公开质疑你的分析结论，你？',
    options: [
      { text: '微笑着说"这是个很好的观点"，然后翻到 backup slides', scores: { depth: -1, exp: 2 } },
      { text: '当场打开数据源，一行一行给他看', scores: { depth: 2, action: 1 } },
      { text: '看向 Partner，用眼神求助', scores: { exp: -2, social: -1 } },
      { text: '"我理解你的顾虑，会后我们单独对一下数据"', scores: { social: -1, exp: 1 } }
    ]
  },
  {
    id: 5,
    text: '你最想要的咨询超能力是？',
    options: [
      { text: '无限精力——连续工作 48 小时还能保持微笑', scores: { action: 2, exp: -1 } },
      { text: '读心术——一眼看穿客户 CEO 到底想要什么', scores: { social: -1, exp: 1 } },
      { text: '时间暂停——让我多做几版 sensitivity analysis', scores: { depth: 2, action: 1 } },
      { text: '完美 storytelling——数据一般但讲得天花乱坠', scores: { depth: -2, exp: 1 } }
    ]
  },
  {
    id: 6,
    text: '项目结束后最重要的事情是什么？',
    options: [
      { text: '写 knowledge base 文档，沉淀方法论', scores: { exp: 2, action: 0, depth: 1 } },
      { text: '约客户团队吃个饭，维护关系', scores: { social: -1, action: -1 } },
      { text: '把 deck 整理好放进自己的"弹药库"', scores: { depth: -1, exp: 1 } },
      { text: '什么都不做，先睡三天', scores: { action: -2, exp: -1 } }
    ]
  },
  {
    id: 7,
    text: '等电梯的 30 秒，CEO 问你项目进展如何，你？',
    options: [
      { text: '完美的 elevator pitch，三句话讲完核心发现', scores: { depth: -1, exp: 2 } },
      { text: '开始紧张，语速加快，恨不得把 80 页 deck 口述一遍', scores: { exp: -2, action: 1 } },
      { text: '"数据还在跑，下周给您一个完整的 update"', scores: { depth: 1, exp: 0 } },
      { text: '假装在打电话', scores: { action: -2, social: 2 } }
    ]
  },
  {
    id: 8,
    text: '同事在做的分析明显有逻辑漏洞，你？',
    options: [
      { text: '当面指出来，对事不对人', scores: { social: -1, action: 1, exp: 1 } },
      { text: '私下跟他说，给他留面子', scores: { social: -1, exp: 1 } },
      { text: '不说了，反正最后 Partner 会发现的', scores: { social: 2, action: -1 } },
      { text: '默默把正确的版本做出来，"参考一下？"', scores: { social: 1, depth: 1, exp: 1 } }
    ]
  },
  {
    id: 9,
    text: '如果让你选一种动物代表你的咨询风格？',
    options: [
      { text: '狼——团队协作，精准围猎', scores: { social: -2, action: 1 } },
      { text: '猫头鹰——安静观察，一击必中', scores: { social: 2, depth: 2 } },
      { text: '金毛犬——人见人爱，客户关系满分', scores: { social: -2, exp: -1 } },
      { text: '蜜蜂——勤劳到死，但产出的都是甜蜜的 PPT', scores: { action: 2, depth: -1 } }
    ]
  },
  {
    id: 10,
    text: '你的 PPT 风格是？',
    options: [
      { text: '极简——每页一个核心信息，大量留白', scores: { depth: -1, exp: 2 } },
      { text: '信息密集——每一页都塞满图表和数据', scores: { depth: 2, exp: 0 } },
      { text: '视觉系——配色、排版、动画一个都不能少', scores: { depth: -2, action: 1, exp: -1 } },
      { text: '我尽量不做 PPT', scores: { depth: 2, action: -1 } }
    ]
  },
  {
    id: 11,
    text: '客户突然要求把项目范围扩大一倍，但预算不变，你？',
    options: [
      { text: '跟 Partner 说不行，这超出了 scope', scores: { exp: 1, action: 0 } },
      { text: '先答应，做的时候再想办法砍', scores: { exp: -1, action: 1 } },
      { text: '拉个 scope change 的讨论会，把利弊摆清楚', scores: { social: -1, exp: 2 } },
      { text: '无所谓，反正加班也不是按小时算的', scores: { action: 2, exp: -2 } }
    ]
  },
  {
    id: 12,
    text: '你更喜欢什么类型的项目？',
    options: [
      { text: '战略规划——画大饼的快乐只有顾问懂', scores: { depth: -2, exp: 0 } },
      { text: '尽职调查——翻数据的快感比什么都真实', scores: { depth: 2, action: 1 } },
      { text: '组织变革——改变人比改变数字有意思', scores: { social: -1, depth: -1 } },
      { text: '数字化转型——听起来很酷但没人知道在做什么', scores: { depth: 1, exp: -1 } }
    ]
  },
  {
    id: 13,
    text: '项目 kickoff 会上，你的状态是？',
    options: [
      { text: '认真做笔记，生怕漏掉任何一个关键信息', scores: { exp: -1, action: 1 } },
      { text: '边听边在脑子里搭分析框架', scores: { exp: 2, depth: 1, social: 1 } },
      { text: '积极发言，让客户记住我的名字', scores: { social: -2, exp: -1 } },
      { text: '观察客户团队的微表情，判断谁支持谁反对', scores: { exp: 2, social: 1, action: 0 } }
    ]
  },
  {
    id: 14,
    text: '你的工作时间管理如何？',
    options: [
      { text: '永远是办公室最后走的那个人', scores: { action: 2, exp: -2 } },
      { text: '效率极高，该走就走，结果说话', scores: { action: -1, exp: 2 } },
      { text: '看项目，忙的时候拼命，闲的时候摸鱼', scores: { action: 0, exp: 0 } },
      { text: '我在咖啡厅工作效率更高，别管我在哪', scores: { social: 2, action: -1 } }
    ]
  },
  {
    id: 15,
    text: '客户 CEO 在 steering committee 上说"你们的建议我们内部早就想到了"，你？',
    options: [
      { text: '内心崩溃但面带微笑："是的，我们的分析进一步验证了这个方向"', scores: { exp: 1, depth: -1 } },
      { text: '翻到数据页："但我们发现了三个你们没注意到的风险点"', scores: { depth: 2, action: 1, exp: 1 } },
      { text: '看向 Partner，等他接话', scores: { exp: -2, social: -1 } },
      { text: '心想：那你花这么多钱请我们干嘛', scores: { action: -1, exp: 1 } }
    ]
  },
  {
    id: 16,
    text: '组建项目团队时，你更希望自己是什么角色？',
    options: [
      { text: '项目经理——统筹全局，拉通各方', scores: { social: -2, action: 1, exp: 1 } },
      { text: '核心分析师——数据和模型都归我', scores: { depth: 2, social: 1 } },
      { text: '客户关系——跟客户打交道我最在行', scores: { social: -2, depth: -1, exp: 0 } },
      { text: '独立 workstream lead——给我一个模块我自己搞定', scores: { social: 2, action: 1, exp: 1 } }
    ]
  },
  {
    id: 17,
    text: '你的工作笔记通常长什么样？',
    options: [
      { text: '什么笔记？都在脑子里', scores: { exp: 1, action: -1 } },
      { text: 'OneNote/Notion 里分门别类，堪比知识管理系统', scores: { exp: 1, depth: 1, action: 1 } },
      { text: '便签纸和白板涂鸦，创意都在草稿里', scores: { depth: -1, social: -1 } },
      { text: '只记 action items 和 deadlines，其他不重要', scores: { action: 1, exp: 0 } }
    ]
  },
  {
    id: 18,
    text: '遇到一个完全陌生的行业，你的做法是？',
    options: [
      { text: '花三天读完行业报告和 10-K，再开始做分析', scores: { depth: 2, action: -1, exp: 0 } },
      { text: '找一个行业专家聊两小时，速成', scores: { social: -1, action: 1, exp: 1 } },
      { text: '先套一个通用的分析框架，边做边学', scores: { depth: -1, exp: 1, action: 1 } },
      { text: '慌了，但不会让任何人看出来', scores: { exp: -2, action: 0 } }
    ]
  },
  {
    id: 19,
    text: '你怎么选择下一个项目？',
    options: [
      { text: '哪个 Partner 好说话就跟谁', scores: { social: -1, exp: -1 } },
      { text: '哪个行业有前景就做哪个，布局长线', scores: { depth: 1, exp: 1, action: 1 } },
      { text: '哪个不用出差就做哪个', scores: { action: -2, social: 2 } },
      { text: '哪个能学到最多新东西就做哪个', scores: { depth: 1, exp: -1, action: 0 } }
    ]
  },
  {
    id: 20,
    text: '项目间的空窗期，你在干什么？',
    options: [
      { text: '主动帮其他团队，到处刷存在感', scores: { social: -2, action: 2 } },
      { text: '终于可以整理我的方法论和案例库了', scores: { depth: 1, exp: 1, social: 1 } },
      { text: '摸鱼、刷手机、假装在写 proposal', scores: { action: -2, exp: -1 } },
      { text: '研究内部数据库，给自己充电', scores: { depth: 2, action: 0, social: 1 } }
    ]
  },
  {
    id: 21,
    text: '你怎么看待咨询公司的"up or out"文化？',
    options: [
      { text: '很合理，有压力才有动力', scores: { action: 2, exp: -1 } },
      { text: '太残酷了，但也没别的选择', scores: { action: 0, exp: -1 } },
      { text: '我已经在想 exit opportunity 了', scores: { action: -1, exp: 1 } },
      { text: '不存在的，我就是那个永远 up 的人', scores: { action: 2, exp: 2 } }
    ]
  },
  {
    id: 22,
    text: 'Partner 对你的评价最可能是？',
    options: [
      { text: '"做事靠谱，但需要更多 client exposure"', scores: { social: 2, depth: 1, exp: -1 } },
      { text: '"能力很强，但要学会 manage expectations"', scores: { action: 2, exp: 0 } },
      { text: '"客户很喜欢他/她，但分析深度还需加强"', scores: { social: -2, depth: -1, exp: -1 } },
      { text: '"独当一面，就是太独了"', scores: { social: 2, exp: 2, action: 0 } }
    ]
  },
  {
    id: 23,
    text: '你对"框架"的看法是？',
    options: [
      { text: 'MECE 是信仰，没有框架我无法思考', scores: { depth: -1, exp: -2 } },
      { text: '框架是起点不是终点，真正的洞察在框架之外', scores: { depth: 1, exp: 2 } },
      { text: '客户喜欢看框架，那我就给他们框架', scores: { depth: -2, exp: 1 } },
      { text: '我有自己的分析方法，不需要别人的框架', scores: { depth: 2, social: 2, exp: 1 } }
    ]
  },
  {
    id: 24,
    text: '模型跑出来的结果跟客户预期完全相反，你会？',
    options: [
      { text: '检查三遍数据和假设，确认没问题就如实汇报', scores: { depth: 2, exp: 1 } },
      { text: '调一下假设让结果好看点，反正都是 assumption driven', scores: { depth: -1, exp: -1 } },
      { text: '先跟 Partner 通气，让他决定怎么跟客户说', scores: { social: -1, exp: 0 } },
      { text: '兴奋——这才是咨询最有价值的时刻', scores: { depth: 1, action: 1, exp: 2 } }
    ]
  },
  {
    id: 25,
    text: '你怎么看待 AI 对咨询行业的影响？',
    options: [
      { text: '慌了，感觉自己快被替代了', scores: { exp: -2, action: -1 } },
      { text: '已经在用了，效率翻倍，但不会告诉别人', scores: { depth: 1, exp: 1, social: 2 } },
      { text: 'AI 能替代分析，但替代不了跟客户吃饭喝酒', scores: { depth: -1, social: -2, exp: 0 } },
      { text: '正在学 prompt engineering，准备转型', scores: { depth: 2, action: 2, exp: -1 } }
    ]
  },
  {
    id: 26,
    text: '你心目中完美的同事是？',
    options: [
      { text: '聪明又勤奋，半夜发消息秒回那种', scores: { social: -1, action: 2 } },
      { text: '专业能力强，不需要我操心质量', scores: { social: 0, exp: 2 } },
      { text: '无所谓，我习惯自己干', scores: { social: 2, exp: 1 } },
      { text: '有趣的灵魂，加班的时候能一起吐槽', scores: { social: -2, exp: -1 } }
    ]
  },
  {
    id: 27,
    text: '你在咨询中最享受的时刻是？',
    options: [
      { text: '数据里发现了一个所有人都忽略的 insight', scores: { depth: 2, social: 1 } },
      { text: '客户 CEO 点头说"这就是我想要的"', scores: { depth: -1, social: -1 } },
      { text: 'Final deck 定稿那一刻——终于结束了', scores: { action: -2, depth: -1 } },
      { text: '带着新人做完一个项目，看到他们成长', scores: { social: -1, exp: 2, action: 0 } }
    ]
  },
  {
    id: 28,
    text: '你的 Excel 水平如何？',
    options: [
      { text: 'VLOOKUP 都要百度，但我讲故事能力一流', scores: { depth: -2, exp: -1 } },
      { text: '够用就行，复杂的让分析师做', scores: { depth: -1, exp: 1 } },
      { text: '数据透视表、INDEX MATCH 信手拈来', scores: { depth: 1, exp: 0 } },
      { text: 'VBA 和 Power Query 才是正道', scores: { depth: 2, action: 1 } }
    ]
  },
  {
    id: 29,
    text: '你在公司内部的社交风格是？',
    options: [
      { text: '只跟自己项目组的人说话', scores: { social: 2, exp: 0 } },
      { text: '每个 Partner 的生日我都记得', scores: { social: -2, action: 1, exp: -1 } },
      { text: '该 network 的时候 network，平时自己待着', scores: { social: 1, exp: 1 } },
      { text: '公司团建？我那天请假', scores: { social: 2, action: -1 } }
    ]
  },
  {
    id: 30,
    text: '如果必须放弃一样咨询技能，你会放弃哪个？',
    options: [
      { text: 'PPT 排版——内容好就行，丑一点怎么了', scores: { depth: 2, exp: 1 } },
      { text: '数据分析——我是来讲故事的不是来算数的', scores: { depth: -2, exp: 0 } },
      { text: '客户社交——我跟数据打交道就好', scores: { social: 2, depth: 1 } },
      { text: '谁也不放弃，你这个问题不 MECE', scores: { exp: 2, action: 0 } }
    ]
  }
];
