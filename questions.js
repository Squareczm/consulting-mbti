// 30 道管理咨询顾问性格测试题（中英双语）
// 维度：S/D (输出偏好：PPT至上/数据至上), C/A (工作节奏：佛系/卷王), G/L (协作倾向：群狼/独狼), N/V (江湖段位：萌新/老法师)

var QUESTIONS = [
  {
    id: 1,
    text: 'Partner 说这个项目需要一份 80 页的 final deck，你的第一反应是？',
    text_en: 'The Partner says this project needs an 80-page final deck. Your first reaction?',
    options: [
      { text: '80 页？我 30 页就能讲清楚，剩下 50 页是凑数的', text_en: '80 pages? I can nail it in 30. The other 50 are just padding.', scores: { depth: -1, exp: 1 } },
      { text: '打开模板库，先把框架搭好，内容后面填', text_en: 'Open the template library. Framework first, content later.', scores: { depth: -2, action: 1 } },
      { text: '先搞清楚客户到底需要什么数据支撑，PPT是最后一步', text_en: 'Figure out what data the client actually needs first. The deck is the last step.', scores: { depth: 2, action: 0 } },
      { text: '才 80 页？上个项目我做了 150 页', text_en: 'Only 80? My last project was 150 pages.', scores: { depth: -1, action: 2, exp: 1 } }
    ]
  },
  {
    id: 2,
    text: '周五晚上 10 点，Partner 突然发来消息说周一早上要跟客户 CEO 汇报，你？',
    text_en: 'Friday 10pm. Partner texts: "CEO presentation Monday morning." You?',
    options: [
      { text: '已读不回，假装没看到，周六早上再说', text_en: 'Leave it on read. Pretend you didn\'t see it until Saturday morning.', scores: { action: -2, exp: 0 } },
      { text: '秒回"收到"，然后打开电脑开始干', text_en: 'Reply "On it" instantly. Laptop open before the phone hits the desk.', scores: { action: 2, exp: -1 } },
      { text: '回一句"我先看看现有材料够不够用"，然后继续追剧', text_en: '"Let me check if existing materials are sufficient." Resume Netflix.', scores: { action: -1, exp: 1 } },
      { text: '拉一个紧急作战群，把团队全部 @ 起来', text_en: 'Create a war room group chat. @ the entire team.', scores: { action: 2, social: -2 } }
    ]
  },
  {
    id: 3,
    text: '关于数据分析工具，你的态度是？',
    text_en: 'Your stance on data analysis tools?',
    options: [
      { text: 'Excel 能解决 99% 的问题，剩下 1% 也能', text_en: 'Excel solves 99% of problems. And the other 1% too.', scores: { depth: 0, exp: -1 } },
      { text: 'Python + SQL，数据量大了 Excel 就是玩具', text_en: 'Python + SQL. Once you hit real data volume, Excel is a toy.', scores: { depth: 2, exp: 1 } },
      { text: '工具不重要，重要的是 insight。用计算器都行', text_en: 'Tools don\'t matter. Insight matters. I could use an abacus.', scores: { depth: 1, exp: 2 } },
      { text: '我一般让分析师跑数据，我负责讲故事', text_en: 'I delegate the data to analysts. I\'m here to tell the story.', scores: { depth: -2, exp: 1 } }
    ]
  },
  {
    id: 4,
    text: '客户方的中层经理在会上公开质疑你的分析结论，你？',
    text_en: 'A client\'s middle manager openly challenges your analysis in a meeting. You?',
    options: [
      { text: '微笑着说"这是个很好的观点"，然后翻到 backup slides', text_en: 'Smile. "That\'s a great point." Flip to backup slides.', scores: { depth: -1, exp: 2 } },
      { text: '当场打开数据源，一行一行给他看', text_en: 'Open the raw data on screen. Walk them through it line by line.', scores: { depth: 2, action: 1 } },
      { text: '看向 Partner，用眼神求助', text_en: 'Glance at the Partner. Send telepathic SOS.', scores: { exp: -2, social: -1 } },
      { text: '"我理解你的顾虑，会后我们单独对一下数据"', text_en: '"I appreciate the concern. Let\'s align on the data offline."', scores: { social: -1, exp: 1 } }
    ]
  },
  {
    id: 5,
    text: '你最想要的咨询超能力是？',
    text_en: 'Your dream consulting superpower?',
    options: [
      { text: '无限精力——连续工作 48 小时还能保持微笑', text_en: 'Infinite stamina — 48 hours straight and still smiling', scores: { action: 2, exp: -1 } },
      { text: '读心术——一眼看穿客户 CEO 到底想要什么', text_en: 'Mind reading — instantly know what the CEO actually wants', scores: { social: -1, exp: 1 } },
      { text: '时间暂停——让我多做几版 sensitivity analysis', text_en: 'Time freeze — just a few more sensitivity analyses, please', scores: { depth: 2, action: 1 } },
      { text: '完美 storytelling——数据一般但讲得天花乱坠', text_en: 'Perfect storytelling — mediocre data, mesmerizing narrative', scores: { depth: -2, exp: 1 } }
    ]
  },
  {
    id: 6,
    text: '项目结束后最重要的事情是什么？',
    text_en: 'Most important thing after a project wraps up?',
    options: [
      { text: '写 knowledge base 文档，沉淀方法论', text_en: 'Write up the knowledge base. Codify the methodology.', scores: { exp: 2, action: 0, depth: 1 } },
      { text: '约客户团队吃个饭，维护关系', text_en: 'Take the client team out for dinner. Nurture the relationship.', scores: { social: -1, action: -1 } },
      { text: '把 deck 整理好放进自己的"弹药库"', text_en: 'Archive the deck into my personal "ammo vault."', scores: { depth: -1, exp: 1 } },
      { text: '什么都不做，先睡三天', text_en: 'Absolutely nothing. Sleep for three days straight.', scores: { action: -2, exp: -1 } }
    ]
  },
  {
    id: 7,
    text: '等电梯的 30 秒，CEO 问你项目进展如何，你？',
    text_en: '30-second elevator ride. CEO asks how the project is going. You?',
    options: [
      { text: '完美的 elevator pitch，三句话讲完核心发现', text_en: 'Flawless elevator pitch. Three sentences. Core findings delivered.', scores: { depth: -1, exp: 2 } },
      { text: '开始紧张，语速加快，恨不得把 80 页 deck 口述一遍', text_en: 'Panic. Speed-talk. Try to verbally deliver all 80 slides before the doors open.', scores: { exp: -2, action: 1 } },
      { text: '"数据还在跑，下周给您一个完整的 update"', text_en: '"Data\'s still running. Full update next week."', scores: { depth: 1, exp: 0 } },
      { text: '假装在打电话', text_en: 'Pretend to be on a very important call.', scores: { action: -2, social: 2 } }
    ]
  },
  {
    id: 8,
    text: '同事在做的分析明显有逻辑漏洞，你？',
    text_en: 'A colleague\'s analysis has an obvious logical flaw. You?',
    options: [
      { text: '当面指出来，对事不对人', text_en: 'Call it out directly. Nothing personal.', scores: { social: -1, action: 1, exp: 1 } },
      { text: '私下跟他说，给他留面子', text_en: 'Pull them aside privately. Preserve their dignity.', scores: { social: -1, exp: 1 } },
      { text: '不说了，反正最后 Partner 会发现的', text_en: 'Say nothing. The Partner will catch it eventually.', scores: { social: 2, action: -1 } },
      { text: '默默把正确的版本做出来，"参考一下？"', text_en: 'Quietly build the correct version. "Maybe this helps?"', scores: { social: 1, depth: 1, exp: 1 } }
    ]
  },
  {
    id: 9,
    text: '如果让你选一种动物代表你的咨询风格？',
    text_en: 'Pick an animal that represents your consulting style.',
    options: [
      { text: '狼——团队协作，精准围猎', text_en: 'Wolf — pack tactics, surgical precision', scores: { social: -2, action: 1 } },
      { text: '猫头鹰——安静观察，一击必中', text_en: 'Owl — silent observation, lethal strike', scores: { social: 2, depth: 2 } },
      { text: '金毛犬——人见人爱，客户关系满分', text_en: 'Golden Retriever — everyone loves me, client NPS through the roof', scores: { social: -2, exp: -1 } },
      { text: '蜜蜂——勤劳到死，但产出的都是甜蜜的 PPT', text_en: 'Bee — works itself to death, but produces sweet, sweet slides', scores: { action: 2, depth: -1 } }
    ]
  },
  {
    id: 10,
    text: '你的 PPT 风格是？',
    text_en: 'Your slide deck style?',
    options: [
      { text: '极简——每页一个核心信息，大量留白', text_en: 'Minimalist — one key message per slide, generous whitespace', scores: { depth: -1, exp: 2 } },
      { text: '信息密集——每一页都塞满图表和数据', text_en: 'Data-dense — every slide packed with charts and numbers', scores: { depth: 2, exp: 0 } },
      { text: '视觉系——配色、排版、动画一个都不能少', text_en: 'Visual — color palette, typography, animations, the whole nine yards', scores: { depth: -2, action: 1, exp: -1 } },
      { text: '我尽量不做 PPT', text_en: 'I avoid making slides whenever humanly possible.', scores: { depth: 2, action: -1 } }
    ]
  },
  {
    id: 11,
    text: '客户突然要求把项目范围扩大一倍，但预算不变，你？',
    text_en: 'Client wants to double the project scope. Same budget. You?',
    options: [
      { text: '跟 Partner 说不行，这超出了 scope', text_en: 'Tell the Partner: no. This is out of scope.', scores: { exp: 1, action: 0 } },
      { text: '先答应，做的时候再想办法砍', text_en: 'Say yes now. Figure out how to cut corners later.', scores: { exp: -1, action: 1 } },
      { text: '拉个 scope change 的讨论会，把利弊摆清楚', text_en: 'Set up a scope change discussion. Lay out the trade-offs clearly.', scores: { social: -1, exp: 2 } },
      { text: '无所谓，反正加班也不是按小时算的', text_en: 'Whatever. It\'s not like we get paid by the hour anyway.', scores: { action: 2, exp: -2 } }
    ]
  },
  {
    id: 12,
    text: '你更喜欢什么类型的项目？',
    text_en: 'What type of project do you prefer?',
    options: [
      { text: '战略规划——画大饼的快乐只有顾问懂', text_en: 'Strategy — the joy of painting grand visions only consultants understand', scores: { depth: -2, exp: 0 } },
      { text: '尽职调查——翻数据的快感比什么都真实', text_en: 'Due diligence — nothing beats the raw thrill of digging through data', scores: { depth: 2, action: 1 } },
      { text: '组织变革——改变人比改变数字有意思', text_en: 'Org transformation — changing people beats changing spreadsheets', scores: { social: -1, depth: -1 } },
      { text: '数字化转型——听起来很酷但没人知道在做什么', text_en: 'Digital transformation — sounds impressive, nobody knows what it means', scores: { depth: 1, exp: -1 } }
    ]
  },
  {
    id: 13,
    text: '项目 kickoff 会上，你的状态是？',
    text_en: 'Your state during the project kickoff meeting?',
    options: [
      { text: '认真做笔记，生怕漏掉任何一个关键信息', text_en: 'Taking meticulous notes. Can\'t miss a single key detail.', scores: { exp: -1, action: 1 } },
      { text: '边听边在脑子里搭分析框架', text_en: 'Half-listening, half-building the analysis framework in my head.', scores: { exp: 2, depth: 1, social: 1 } },
      { text: '积极发言，让客户记住我的名字', text_en: 'Speaking up proactively. Making sure the client remembers my name.', scores: { social: -2, exp: -1 } },
      { text: '观察客户团队的微表情，判断谁支持谁反对', text_en: 'Reading micro-expressions. Mapping who\'s an ally and who\'s a blocker.', scores: { exp: 2, social: 1, action: 0 } }
    ]
  },
  {
    id: 14,
    text: '你的工作时间管理如何？',
    text_en: 'How do you manage your working hours?',
    options: [
      { text: '永远是办公室最后走的那个人', text_en: 'Always the last one out of the office. Always.', scores: { action: 2, exp: -2 } },
      { text: '效率极高，该走就走，结果说话', text_en: 'Brutally efficient. Leave when the work\'s done. Results speak.', scores: { action: -1, exp: 2 } },
      { text: '看项目，忙的时候拼命，闲的时候摸鱼', text_en: 'Depends on the project. Sprint when it\'s hot, coast when it\'s not.', scores: { action: 0, exp: 0 } },
      { text: '我在咖啡厅工作效率更高，别管我在哪', text_en: 'I\'m more productive at a coffee shop. Don\'t track my location.', scores: { social: 2, action: -1 } }
    ]
  },
  {
    id: 15,
    text: '客户 CEO 在 steering committee 上说"你们的建议我们内部早就想到了"，你？',
    text_en: 'Client CEO at the steering committee: "We already thought of this internally." You?',
    options: [
      { text: '内心崩溃但面带微笑："是的，我们的分析进一步验证了这个方向"', text_en: 'Dying inside, smiling outside: "Absolutely. Our analysis further validates this direction."', scores: { exp: 1, depth: -1 } },
      { text: '翻到数据页："但我们发现了三个你们没注意到的风险点"', text_en: 'Flip to the data page: "But we found three risk factors you hadn\'t identified."', scores: { depth: 2, action: 1, exp: 1 } },
      { text: '看向 Partner，等他接话', text_en: 'Look at the Partner. Wait for rescue.', scores: { exp: -2, social: -1 } },
      { text: '心想：那你花这么多钱请我们干嘛', text_en: 'Think: then why are you paying us seven figures?', scores: { action: -1, exp: 1 } }
    ]
  },
  {
    id: 16,
    text: '组建项目团队时，你更希望自己是什么角色？',
    text_en: 'When staffing a project team, what role do you want?',
    options: [
      { text: '项目经理——统筹全局，拉通各方', text_en: 'Project Manager — orchestrate everything, align all stakeholders', scores: { social: -2, action: 1, exp: 1 } },
      { text: '核心分析师——数据和模型都归我', text_en: 'Lead Analyst — all models and data flow through me', scores: { depth: 2, social: 1 } },
      { text: '客户关系——跟客户打交道我最在行', text_en: 'Client Relations — I\'m the one they actually want to talk to', scores: { social: -2, depth: -1, exp: 0 } },
      { text: '独立 workstream lead——给我一个模块我自己搞定', text_en: 'Independent workstream lead — give me a module, I\'ll handle it solo', scores: { social: 2, action: 1, exp: 1 } }
    ]
  },
  {
    id: 17,
    text: '你的工作笔记通常长什么样？',
    text_en: 'What do your work notes look like?',
    options: [
      { text: '什么笔记？都在脑子里', text_en: 'Notes? It\'s all in my head.', scores: { exp: 1, action: -1 } },
      { text: 'OneNote/Notion 里分门别类，堪比知识管理系统', text_en: 'Notion/OneNote, perfectly categorized. Basically a knowledge management system.', scores: { exp: 1, depth: 1, action: 1 } },
      { text: '便签纸和白板涂鸦，创意都在草稿里', text_en: 'Post-its and whiteboard scribbles. The magic lives in the chaos.', scores: { depth: -1, social: -1 } },
      { text: '只记 action items 和 deadlines，其他不重要', text_en: 'Action items and deadlines only. Everything else is noise.', scores: { action: 1, exp: 0 } }
    ]
  },
  {
    id: 18,
    text: '遇到一个完全陌生的行业，你的做法是？',
    text_en: 'Dropped into a completely unfamiliar industry. Your move?',
    options: [
      { text: '花三天读完行业报告和 10-K，再开始做分析', text_en: 'Spend three days devouring industry reports and 10-Ks before touching any analysis.', scores: { depth: 2, action: -1, exp: 0 } },
      { text: '找一个行业专家聊两小时，速成', text_en: 'Find an industry expert. Two-hour crash course. Good enough.', scores: { social: -1, action: 1, exp: 1 } },
      { text: '先套一个通用的分析框架，边做边学', text_en: 'Apply a general framework first. Learn on the fly.', scores: { depth: -1, exp: 1, action: 1 } },
      { text: '慌了，但不会让任何人看出来', text_en: 'Panicking internally. Externally? Absolute composure.', scores: { exp: -2, action: 0 } }
    ]
  },
  {
    id: 19,
    text: '你怎么选择下一个项目？',
    text_en: 'How do you pick your next project?',
    options: [
      { text: '哪个 Partner 好说话就跟谁', text_en: 'Whichever Partner is the least terrifying to work with.', scores: { social: -1, exp: -1 } },
      { text: '哪个行业有前景就做哪个，布局长线', text_en: 'Whichever industry has the best long-term career upside.', scores: { depth: 1, exp: 1, action: 1 } },
      { text: '哪个不用出差就做哪个', text_en: 'Whichever one doesn\'t require travel. Non-negotiable.', scores: { action: -2, social: 2 } },
      { text: '哪个能学到最多新东西就做哪个', text_en: 'Whichever one has the steepest learning curve.', scores: { depth: 1, exp: -1, action: 0 } }
    ]
  },
  {
    id: 20,
    text: '项目间的空窗期，你在干什么？',
    text_en: 'Between projects. What are you doing?',
    options: [
      { text: '主动帮其他团队，到处刷存在感', text_en: 'Volunteering for other teams. Maximum visibility.', scores: { social: -2, action: 2 } },
      { text: '终于可以整理我的方法论和案例库了', text_en: 'Finally organizing my methodology notes and case library.', scores: { depth: 1, exp: 1, social: 1 } },
      { text: '摸鱼、刷手机、假装在写 proposal', text_en: 'Scrolling my phone. Tab open on a "proposal" for cover.', scores: { action: -2, exp: -1 } },
      { text: '研究内部数据库，给自己充电', text_en: 'Deep-diving into the internal knowledge base. Self-improvement mode.', scores: { depth: 2, action: 0, social: 1 } }
    ]
  },
  {
    id: 21,
    text: '你怎么看待咨询公司的"up or out"文化？',
    text_en: 'Your take on the consulting "up or out" culture?',
    options: [
      { text: '很合理，有压力才有动力', text_en: 'Makes sense. Pressure creates diamonds.', scores: { action: 2, exp: -1 } },
      { text: '太残酷了，但也没别的选择', text_en: 'Brutal, but what choice do I have?', scores: { action: 0, exp: -1 } },
      { text: '我已经在想 exit opportunity 了', text_en: 'Already planning my exit opportunity, honestly.', scores: { action: -1, exp: 1 } },
      { text: '不存在的，我就是那个永远 up 的人', text_en: 'Doesn\'t apply to me. I only go up.', scores: { action: 2, exp: 2 } }
    ]
  },
  {
    id: 22,
    text: 'Partner 对你的评价最可能是？',
    text_en: 'The Partner\'s most likely review of you?',
    options: [
      { text: '"做事靠谱，但需要更多 client exposure"', text_en: '"Reliable, but needs more client-facing exposure."', scores: { social: 2, depth: 1, exp: -1 } },
      { text: '"能力很强，但要学会 manage expectations"', text_en: '"Very capable, but needs to manage expectations better."', scores: { action: 2, exp: 0 } },
      { text: '"客户很喜欢他/她，但分析深度还需加强"', text_en: '"Clients love them, but analytical depth needs work."', scores: { social: -2, depth: -1, exp: -1 } },
      { text: '"独当一面，就是太独了"', text_en: '"Can handle anything independently. Emphasis on independently."', scores: { social: 2, exp: 2, action: 0 } }
    ]
  },
  {
    id: 23,
    text: '你对"框架"的看法是？',
    text_en: 'Your view on "frameworks"?',
    options: [
      { text: 'MECE 是信仰，没有框架我无法思考', text_en: 'MECE is religion. Without a framework I literally cannot think.', scores: { depth: -1, exp: -2 } },
      { text: '框架是起点不是终点，真正的洞察在框架之外', text_en: 'Frameworks are starting points, not destinations. Real insight lives outside the box.', scores: { depth: 1, exp: 2 } },
      { text: '客户喜欢看框架，那我就给他们框架', text_en: 'Clients love frameworks? Fine. I\'ll give them frameworks.', scores: { depth: -2, exp: 1 } },
      { text: '我有自己的分析方法，不需要别人的框架', text_en: 'I have my own analytical methods. Don\'t need anyone else\'s framework.', scores: { depth: 2, social: 2, exp: 1 } }
    ]
  },
  {
    id: 24,
    text: '模型跑出来的结果跟客户预期完全相反，你会？',
    text_en: 'Your model\'s results completely contradict what the client expected. You?',
    options: [
      { text: '检查三遍数据和假设，确认没问题就如实汇报', text_en: 'Triple-check the data and assumptions. If it holds, present it as-is.', scores: { depth: 2, exp: 1 } },
      { text: '调一下假设让结果好看点，反正都是 assumption driven', text_en: 'Tweak the assumptions until the output looks friendlier. It\'s all assumptions anyway.', scores: { depth: -1, exp: -1 } },
      { text: '先跟 Partner 通气，让他决定怎么跟客户说', text_en: 'Flag it to the Partner first. Let them decide how to deliver the news.', scores: { social: -1, exp: 0 } },
      { text: '兴奋——这才是咨询最有价值的时刻', text_en: 'Excited — this is where consulting actually earns its fee.', scores: { depth: 1, action: 1, exp: 2 } }
    ]
  },
  {
    id: 25,
    text: '你怎么看待 AI 对咨询行业的影响？',
    text_en: 'How do you feel about AI disrupting consulting?',
    options: [
      { text: '慌了，感觉自己快被替代了', text_en: 'Terrified. My job is basically "expensive ChatGPT" now.', scores: { exp: -2, action: -1 } },
      { text: '已经在用了，效率翻倍，但不会告诉别人', text_en: 'Already using it. 2x productivity. Telling no one.', scores: { depth: 1, exp: 1, social: 2 } },
      { text: 'AI 能替代分析，但替代不了跟客户吃饭喝酒', text_en: 'AI can replace analysis, but it can\'t replace a steak dinner with the client.', scores: { depth: -1, social: -2, exp: 0 } },
      { text: '正在学 prompt engineering，准备转型', text_en: 'Learning prompt engineering. Pivoting before it\'s too late.', scores: { depth: 2, action: 2, exp: -1 } }
    ]
  },
  {
    id: 26,
    text: '你心目中完美的同事是？',
    text_en: 'Your ideal colleague?',
    options: [
      { text: '聪明又勤奋，半夜发消息秒回那种', text_en: 'Smart and hardworking. Replies to 2am messages instantly.', scores: { social: -1, action: 2 } },
      { text: '专业能力强，不需要我操心质量', text_en: 'Highly competent. Zero quality babysitting required.', scores: { social: 0, exp: 2 } },
      { text: '无所谓，我习惯自己干', text_en: 'Don\'t care. I\'m used to working alone.', scores: { social: 2, exp: 1 } },
      { text: '有趣的灵魂，加班的时候能一起吐槽', text_en: 'Fun personality. Someone to commiserate with at midnight.', scores: { social: -2, exp: -1 } }
    ]
  },
  {
    id: 27,
    text: '你在咨询中最享受的时刻是？',
    text_en: 'The moment you enjoy most in consulting?',
    options: [
      { text: '数据里发现了一个所有人都忽略的 insight', text_en: 'Finding an insight in the data that everyone else missed.', scores: { depth: 2, social: 1 } },
      { text: '客户 CEO 点头说"这就是我想要的"', text_en: 'Client CEO nods and says "This is exactly what I needed."', scores: { depth: -1, social: -1 } },
      { text: 'Final deck 定稿那一刻——终于结束了', text_en: 'The final deck is locked. It\'s over. Freedom.', scores: { action: -2, depth: -1 } },
      { text: '带着新人做完一个项目，看到他们成长', text_en: 'Watching a junior analyst grow after mentoring them through a project.', scores: { social: -1, exp: 2, action: 0 } }
    ]
  },
  {
    id: 28,
    text: '你的 Excel 水平如何？',
    text_en: 'Your Excel proficiency?',
    options: [
      { text: 'VLOOKUP 都要百度，但我讲故事能力一流', text_en: 'I Google VLOOKUP every time. But my storytelling is elite.', scores: { depth: -2, exp: -1 } },
      { text: '够用就行，复杂的让分析师做', text_en: 'Good enough. Complex stuff gets delegated to analysts.', scores: { depth: -1, exp: 1 } },
      { text: '数据透视表、INDEX MATCH 信手拈来', text_en: 'Pivot tables, INDEX MATCH — second nature.', scores: { depth: 1, exp: 0 } },
      { text: 'VBA 和 Power Query 才是正道', text_en: 'VBA and Power Query are the only true path.', scores: { depth: 2, action: 1 } }
    ]
  },
  {
    id: 29,
    text: '你在公司内部的社交风格是？',
    text_en: 'Your internal networking style?',
    options: [
      { text: '只跟自己项目组的人说话', text_en: 'Only talk to people on my current project team.', scores: { social: 2, exp: 0 } },
      { text: '每个 Partner 的生日我都记得', text_en: 'I remember every Partner\'s birthday. Every. Single. One.', scores: { social: -2, action: 1, exp: -1 } },
      { text: '该 network 的时候 network，平时自己待着', text_en: 'Network when it matters. Otherwise, leave me alone.', scores: { social: 1, exp: 1 } },
      { text: '公司团建？我那天请假', text_en: 'Company team-building? I\'m "sick" that day.', scores: { social: 2, action: -1 } }
    ]
  },
  {
    id: 30,
    text: '如果必须放弃一样咨询技能，你会放弃哪个？',
    text_en: 'If you had to sacrifice one consulting skill, which one?',
    options: [
      { text: 'PPT 排版——内容好就行，丑一点怎么了', text_en: 'Slide formatting — content over aesthetics. Ugly is fine.', scores: { depth: 2, exp: 1 } },
      { text: '数据分析——我是来讲故事的不是来算数的', text_en: 'Data analysis — I\'m here to tell stories, not crunch numbers.', scores: { depth: -2, exp: 0 } },
      { text: '客户社交——我跟数据打交道就好', text_en: 'Client socializing — just let me work with the data in peace.', scores: { social: 2, depth: 1 } },
      { text: '谁也不放弃，你这个问题不 MECE', text_en: 'None. This question isn\'t MECE.', scores: { exp: 2, action: 0 } }
    ]
  }
];
