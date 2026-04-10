// 16 种管理咨询顾问人格（中英双语）
// 维度：S/D (PPT至上/数据至上) × C/A (佛系/卷王) × G/L (群狼/独狼) × N/V (萌新/老法师)
var CONSULTANT_TYPES = {
  // ============ S (PPT至上派) ============
  SCGN: {
    code: 'SCGN',
    name: 'PPT小甜心',
    name_en: 'The Slide Sweetheart',
    tagline: '做了 60 页 deck 但没一页有 insight',
    tagline_en: '60 slides, zero insights',
    emoji: '🎨',
    color: '#FF6B9D',
    description: [
      '你是咨询公司里的视觉系偶像。你的 PPT 美得像 Vogue 封面，配色和谐得让设计师都自愧不如。你在 deck review 上收到最多的评价是"哇好漂亮"，但紧接着就是"所以 so what 是什么？"',
      '你在团队里的角色是"美工"，虽然 offer letter 上写的是分析师。每次做项目你最先打开的不是 Excel 而是 PowerPoint，最先调的不是数据而是字体。你坚信 McKinsey Blue 是世界上最高级的颜色，在你心里 Calibri 11 号字是信仰。',
      '你特别喜欢跟同事一起加班，不是因为工作需要，而是因为一个人做 PPT 太孤独了。你需要有人在旁边说"哇这页排版好好看"来获得继续工作的动力。你的社交方式就是拿着 PPT 到处找人看。',
      '同事评价：你做的 PPT 是全组最好看的，可惜 Partner 看完记不住任何一个数字。'
    ],
    description_en: [
      'You are the visual idol of the consulting world. Your slides look like Vogue covers. Your color palettes make graphic designers weep with envy. The most common feedback at deck reviews? "Wow, beautiful." Immediately followed by: "So what\'s the so-what?"',
      'Your actual role on the team is "graphic designer," despite what your offer letter says. Every project begins not with Excel, but with PowerPoint. Your first move is never data — it\'s font selection. You genuinely believe McKinsey Blue is the most sophisticated color in existence, and Calibri 11pt is a way of life.',
      'You love working late with colleagues — not because of deadlines, but because making slides alone is too lonely. You need someone nearby saying "omg this layout is gorgeous" to fuel your will to continue. Your entire social strategy is showing people your slides.',
      'Colleague review: Your decks are the prettiest in the firm. Unfortunately, the Partner can\'t remember a single number from them.'
    ]
  },
  SCGV: {
    code: 'SCGV',
    name: '佛系合伙人',
    name_en: 'The Zen Partner',
    tagline: '做到合伙人靠的不是 PPT 是人缘',
    tagline_en: 'Made Partner on vibes, not slides',
    emoji: '🧘',
    color: '#7EC8E3',
    description: [
      '你已经过了拼命的阶段。客户给你打电话不是因为你的方案好，是因为跟你吃饭比跟自家 VP 吃饭开心。你的项目 pipeline 靠的是十年积累的关系网，不是什么 thought leadership。',
      '你在团队里是定海神针。所有人都在焦虑 deadline 的时候，你在阳台喝咖啡。不是因为你不在乎，是因为你知道最后都会交上去的，而且客户其实也没那么赶。你的"项目管理方法论"就一句话：别慌。',
      '你的 PPT 模板是 2018 年的，但没人敢说。因为你用这个模板签下的单子比整个 practice 其他人加起来还多。你对新员工说的最多的一句话是"别太累了，这就是一份工作"，人力资源部听到这句话想打你。',
      '同事评价：跟你做项目最轻松，但也学不到任何硬技能。你是咨询界的退休干部。'
    ],
    description_en: [
      'You\'re past the hustle phase. Clients call you not because your solutions are brilliant, but because dinner with you is more fun than dinner with their own VP. Your pipeline runs on a decade of relationships, not thought leadership.',
      'You\'re the team\'s anchor. While everyone panics over deadlines, you\'re on the terrace sipping coffee. Not because you don\'t care — because you know it always gets delivered, and the client isn\'t actually in that much of a rush. Your entire project management methodology is one sentence: Don\'t panic.',
      'Your slide template is from 2018 and nobody dares mention it, because that template has won more deals than the rest of the practice combined. Your most frequent advice to new hires? "Don\'t burn yourself out. It\'s just a job." HR wants to fire you for saying that.',
      'Colleague review: Easiest Partner to work with. Also the one you learn the least from. You are consulting\'s retired civil servant.'
    ]
  },
  SCLN: {
    code: 'SCLN',
    name: '摆烂叛逃者',
    name_en: 'The Quiet Quitter',
    tagline: '谁说咨询不能 work-life balance？',
    tagline_en: 'Who says consulting can\'t have work-life balance?',
    emoji: '😴',
    color: '#FFB347',
    description: [
      '你是咨询公司里的行为艺术家。你准时下班的样子让整个办公室以为你被 fire 了。你的出勤记录完美避开了所有 team dinner、周末加班和"自愿参加"的 knowledge sharing session。',
      '你独来独往不是因为社恐，是因为你在精密计算如何用最少的时间完成最多的工作然后溜走。你的效率其实不错——在你真正工作的那四个小时里。剩下的时间你在用公司网络看 Netflix。',
      '你做 PPT 的原则是"够用就行"，你对"够用"的定义是"Partner 不会退回来让你重做"。你对职业发展没有野心，你的 exit plan 就是等到 bonus 发了再走。你在年度评审里总是得到"meets expectations"，你觉得这是最完美的分数。',
      '同事评价：没有人真正了解你在做什么。但奇怪的是，该交的东西你一次都没迟到过。'
    ],
    description_en: [
      'You are a performance artist in a consulting firm. You leave on time so consistently that the office thinks you\'ve been fired. Your attendance record has miraculously avoided every team dinner, weekend sprint, and "voluntary" knowledge-sharing session.',
      'You work alone not because you\'re antisocial, but because you\'re mathematically optimizing for minimum input, maximum output, earliest escape. Your efficiency is actually solid — during the four hours you actually work. The rest of the time you\'re watching Netflix on the company Wi-Fi.',
      'Your slide-making philosophy: "good enough." Your definition of "good enough": "the Partner won\'t send it back." You have zero career ambition. Your exit plan is simple: wait for the bonus, then leave. Your annual review says "meets expectations" and you consider that a perfect score.',
      'Colleague review: Nobody truly knows what you do. Strangely, you\'ve never missed a single deadline.'
    ]
  },
  SCLV: {
    code: 'SCLV',
    name: '幻灯片隐士',
    name_en: 'The Slide Hermit',
    tagline: '我的 PPT 不需要解释，你看不懂是你的问题',
    tagline_en: 'My deck speaks for itself. If you can\'t follow, that\'s on you.',
    emoji: '🎭',
    color: '#95E1D3',
    description: [
      '你做 PPT 的速度是普通人的三倍，但你从来不出现在团队讨论中。你的工作方式是：接到任务，消失，三天后发出一份让所有人闭嘴的 deck。你不需要 brainstorm，因为你的大脑已经在 brainstorm 了。',
      '你的模板库比公司官方知识库还全。你有一个 2TB 的硬盘，里面是你参与过的所有项目的所有版本。每次新项目你都能在五分钟内找到一个几乎完全匹配的历史 deck，改改数字就交差了。你管这叫"知识复用"。',
      '你几乎不跟客户直接打交道，因为你觉得"我的 deck 已经说明了一切"。你最烦的事情是被拉到会上"解释一下这页"——如果你写得够清楚，为什么还需要解释？你认为最好的演示是不需要演讲者的演示。',
      '同事评价：传说中的 deck machine。但如果你消失了，没有人知道去哪里找你。'
    ],
    description_en: [
      'You produce slides at 3x the speed of a normal human, but you never show up to team discussions. Your workflow: receive task, vanish, reappear three days later with a deck that silences all critics. You don\'t need brainstorms — your brain is a perpetual brainstorm.',
      'Your personal template library is more comprehensive than the firm\'s official knowledge base. You have a 2TB drive containing every version of every project you\'ve ever touched. For any new project, you can find a near-perfect historical match in five minutes. Swap some numbers, submit. You call this "knowledge reuse."',
      'You almost never interact with clients directly, because "the deck says everything that needs to be said." Your pet peeve? Being dragged into a meeting to "walk through this slide." If you wrote it clearly enough, why does it need a narrator? The best presentation is one that doesn\'t need a presenter.',
      'Colleague review: The legendary deck machine. But when you disappear, literally nobody knows where to find you.'
    ]
  },
  SAGN: {
    code: 'SAGN',
    name: '卷王新兵蛋子',
    name_en: 'The Overachiever Rookie',
    tagline: '凌晨三点还在对齐字体',
    tagline_en: 'Aligning fonts at 3am',
    emoji: '🔥',
    color: '#FF69B4',
    description: [
      '你相信咨询是一种信仰，加班是对信仰的证明。你的工作时间表让投行的朋友都觉得过分。你在凌晨三点发的 PPT 版本号是 v17.3，其中 v1 到 v16 的区别是标题字号从 28 改到 30 又改回 28。',
      '你是团队里的氛围制造机——焦虑氛围。你会在工作群里发"我觉得这个分析还不够深"来制造紧迫感，然后自己熬夜把别人的 slides 全部重做一遍。你的 Partner 已经多次暗示你"工作要聪明不要只是拼命"，但你把这理解为"要更聪明地拼命"。',
      '你参加过三次 case competition，赢了两次。你的 LinkedIn 上有 "McKinsey | BCG | Bain" 的标签，但其实你只在其中一家实习过。你的梦想是在 30 岁之前成为最年轻的 Principal，你的现实是你可能在 28 岁因为颈椎病提前退休。',
      '同事评价：你的热情让人敬佩，你的加班让人害怕。请不要在凌晨两点往群里发消息了。'
    ],
    description_en: [
      'You believe consulting is a calling and overtime is proof of devotion. Your work schedule makes investment bankers uncomfortable. The PPT you sent at 3am is version 17.3. The only difference between v1 and v16? Title font size went from 28 to 30 and back to 28.',
      'You\'re the team\'s atmosphere creator — specifically, anxiety. You post "I feel like this analysis could go deeper" in the team chat to create urgency, then pull an all-nighter redoing everyone else\'s slides. The Partner has hinted multiple times to "work smarter, not harder." You interpreted this as "be smarter about working harder."',
      'You\'ve competed in three case competitions and won two. Your LinkedIn says "McKinsey | BCG | Bain" but you only interned at one of them. Your dream: youngest Principal by 30. Your reality: early retirement at 28 from cervical spine damage.',
      'Colleague review: Your passion is admirable. Your 2am messages are terrifying. Please stop.'
    ]
  },
  SAGV: {
    code: 'SAGV',
    name: 'PPT布道者',
    name_en: 'The Slide Evangelist',
    tagline: '你的字体没对齐，你的人生也没对齐',
    tagline_en: 'If your fonts aren\'t aligned, your life isn\'t either',
    emoji: '⚔️',
    color: '#6C5CE7',
    description: [
      '你是团队的精神领袖，也是所有新人的噩梦。你对 PPT 的执念已经上升到了哲学层面：你认为一个人做 PPT 的态度就是做人的态度。字体没对齐？说明你做事不严谨。配色不统一？说明你缺乏全局思维。',
      '每次 deck review 都是你的个人表演时间。你会从第一页看到最后一页，每一页给出至少三条修改意见，其中两条是关于视觉呈现的。你已经让四个新人在卫生间偷偷哭过。你不觉得这是问题——"这叫高标准严要求"。',
      '你跟客户的关系极好，因为你总能在 deadline 前交出一份完美的 deck。客户不知道的是，这个"完美"的代价是你的团队连续三个周末没有休息。你的口头禅是"最后再改一版"，这句话已经在公司内部变成了恐怖故事的开头。',
      '同事评价：跟你学到了很多，但也失去了很多——头发、睡眠和对咨询的热爱。'
    ],
    description_en: [
      'You are the team\'s spiritual leader and every junior analyst\'s worst nightmare. Your obsession with slides has reached philosophical levels: you believe how someone makes a deck reveals how they live their life. Misaligned fonts? Sloppy character. Inconsistent colors? Lack of big-picture thinking.',
      'Every deck review is your personal TED Talk. You go page by page, dropping at least three comments per slide, two of which are about visual formatting. You\'ve made four junior analysts cry in the bathroom. You don\'t see the problem — "That\'s called having high standards."',
      'Clients adore you because you always deliver a flawless deck before deadline. What clients don\'t know: that "flawless" cost your team three consecutive weekends. Your catchphrase is "one more revision" — a sentence that has become the opening line of horror stories at the firm.',
      'Colleague review: Learned a lot from you. Also lost a lot — hair, sleep, and the will to continue in consulting.'
    ]
  },
  SALN: {
    code: 'SALN',
    name: '野生独狼',
    name_en: 'The Rogue Wolf',
    tagline: '别人在 brainstorm 的时候我已经做完了',
    tagline_en: 'While you were brainstorming, I already shipped it',
    emoji: '🐺',
    color: '#E74C3C',
    description: [
      '你拒绝一切协作，因为别人做的 PPT 你一页都看不下去。你有自己的模板库、自己的配色方案、自己的分析框架，跟公司标准完全不一样，但效果就是比公司标准好。这让你的 manager 非常纠结。',
      '你在项目里的工作方式是：kickoff 的时候就把自己的 workstream 认领了，然后消失。中间不参加 team check-in、不回群消息、不出现在办公室。deadline 前两天突然出现，往群里丢一份比所有人预期都好的 deck，然后又消失了。',
      '你不是社恐——你是效率偏执。你计算过，一个小时的会议中真正有用的信息不超过 5 分钟，剩下 55 分钟是浪费生命。你宁愿花这 55 分钟多做两页分析。你的日历上没有任何 recurring meeting，因为你全拒了。',
      '同事评价：一个人的产能等于半个团队，但团队协作评分永远是 D。HR 想约你谈谈，但找不到你。'
    ],
    description_en: [
      'You reject all collaboration because you physically cannot look at other people\'s slides. You have your own templates, your own color schemes, your own frameworks — all deviating from firm standards, all objectively better. This drives your manager insane.',
      'Your project workflow: claim your workstream at kickoff, then vanish. No team check-ins. No group chat replies. No office appearances. Two days before deadline, you resurface, drop a deck that exceeds all expectations into the chat, and vanish again.',
      'You\'re not antisocial — you\'re efficiency-obsessed. You\'ve calculated that a one-hour meeting contains roughly 5 minutes of useful information. The other 55 minutes are wasted life. You\'d rather spend those 55 minutes on two more analysis pages. Your calendar has zero recurring meetings because you declined them all.',
      'Colleague review: One person\'s output equals half the team. Collaboration score: permanent D. HR wants to schedule a chat but can\'t locate you.'
    ]
  },
  SALV: {
    code: 'SALV',
    name: 'Slide教父',
    name_en: 'The Slide Godfather',
    tagline: '据说他做的 deck 让客户 CEO 当场签了三年续约',
    tagline_en: 'Legend says his deck got a 3-year renewal signed on the spot',
    emoji: '👑',
    color: '#C49A2A',
    description: [
      '传说级人物。你的 PPT 在公司内部流传，新人入职第一天的培训材料就是你三年前做的那份 deck。你已经不需要做 PPT 了，但你偶尔心血来潮做一份，整个 practice 都会传阅学习。',
      '你不参加团队活动，不是因为你高冷，而是因为你的时间全部花在了思考上。你看一份 deck 不是看排版，是看逻辑链条——从第一页到最后一页是不是一个不可辩驳的论证过程。你对"storytelling"的理解比 99% 的咨询顾问都深刻。',
      '你做过最 mean 的事情是在 deck review 的时候沉默了 30 秒，然后说了一句"这个 deck 的结论在第三页就能推导出来，后面 70 页是噪音"。全场安静了五分钟。',
      '同事评价：你是所有人的标杆，也是所有人的心理阴影。好消息是你从不主动评价别人的 deck，坏消息是当你开口的时候，总有人会哭。'
    ],
    description_en: [
      'A legend. Your slides circulate internally like sacred texts. Day-one training for new hires features a deck you made three years ago. You don\'t need to make slides anymore, but when you occasionally do, the entire practice studies it.',
      'You skip team events not out of arrogance, but because all your time goes to thinking. When you review a deck, you don\'t see formatting — you see the logical chain. Is it an airtight argument from slide one to the last? Your understanding of "storytelling" runs deeper than 99% of consultants.',
      'The meanest thing you\'ve done: sat in silence for 30 seconds during a deck review, then said, "The conclusion of this deck is derivable from slide three. The next 70 pages are noise." The room was silent for five minutes.',
      'Colleague review: You are everyone\'s benchmark and everyone\'s psychological shadow. The good news? You never volunteer feedback. The bad news? When you do speak, someone always cries.'
    ]
  },

  // ============ D (数据至上派) ============
  DCGN: {
    code: 'DCGN',
    name: 'Excel小白兔',
    name_en: 'The Excel Bunny',
    tagline: '打开了数据但不知道该看哪一列',
    tagline_en: 'Opened the spreadsheet. No idea which column to look at.',
    emoji: '🐰',
    color: '#DDA0DD',
    description: [
      '你不知道自己怎么就走上了数据分析这条路。可能是因为面试的时候说了一句"我喜欢用数据说话"，可能是因为你的 VLOOKUP 在 case interview 里唬住了面试官。现在你每天对着 20 万行的 Excel 怀疑人生。',
      '你是团队里最淡定的新人——不是因为自信，是因为你还没意识到该害怕什么。你做的 pivot table 把日期放在了 value 栏里算了一个平均数，还觉得"这个数字很有 insight"。你的 manager 看到你的 Excel 表情像是看到了车祸现场。',
      '你最擅长的事情是问问题——"这个数据从哪里来的？""这个指标是什么意思？""为什么我的数字跟你不一样？" 你问的问题经常让老员工也答不上来，不是因为你聪明，是因为你连基本假设都不知道。',
      '同事评价：一块未经打磨的璞玉，前提是不要让你碰客户的原始数据。'
    ],
    description_en: [
      'You have no idea how you ended up in data analysis. Maybe it was that one line in your interview: "I like to let data do the talking." Maybe your VLOOKUP bluffed the interviewer. Now you stare at 200,000-row spreadsheets daily, questioning your life choices.',
      'You\'re the calmest junior on the team — not from confidence, but from not yet realizing what you should be afraid of. Your pivot table put dates in the Values field and averaged them. You thought the resulting number was "insightful." Your manager\'s face looked like they witnessed a car crash.',
      'Your greatest skill is asking questions — "Where does this data come from?" "What does this metric mean?" "Why is my number different from yours?" Your questions often stump senior staff. Not because you\'re brilliant, but because you don\'t know the basic assumptions.',
      'Colleague review: An unpolished gem. With one caveat: do not let you near the client\'s raw data.'
    ]
  },
  DCGV: {
    code: 'DCGV',
    name: '佛系数据大师',
    name_en: 'The Zen Data Master',
    tagline: '数据说什么就是什么，别来跟我 argue',
    tagline_en: 'The data says what it says. Don\'t argue with me — argue with the data.',
    emoji: '📊',
    color: '#0ABDE3',
    description: [
      '你的 Excel 里有 300 个 tab，每个 tab 都有清晰的命名规范。你对数据的尊重程度超过了对 Partner 的尊重——Partner 的意见可以挑战，数据的结论不行。',
      '你在团队里的角色是"行走的数据仓库"。所有人有数据问题都来问你，你总能在五分钟内找到答案。不是因为你记忆力好，是因为你的文件管理系统比公司的知识库还完善。你曾经因为一个小数点的差异追溯了三天，最后发现是数据源的四舍五入问题。',
      '你从不加班。不是因为你工作少，是因为你效率高到离谱。你写的公式别人看不懂，但跑出来的结果从不出错。你对 deadline 的态度是：按时交就行，提前交说明你可以接更多活，何必呢。',
      '同事评价：你是团队的定心丸——你说数据没问题，那就一定没问题。但你六点准时关电脑的样子让加班的同事非常不爽。'
    ],
    description_en: [
      'Your Excel file has 300 tabs, each with a pristine naming convention. Your respect for data exceeds your respect for the Partner — you\'ll challenge a Partner\'s opinion, but never the data\'s conclusion.',
      'Your role on the team: the walking data warehouse. Everyone comes to you with data questions, and you always have the answer within five minutes. Not because of memory, but because your file management system is more comprehensive than the firm\'s knowledge base. You once spent three days chasing a decimal-point discrepancy. Root cause: a rounding difference in the source data.',
      'You never work overtime. Not because you have less work, but because your efficiency is borderline supernatural. Your formulas are illegible to everyone else, but they never produce wrong results. Your stance on deadlines: deliver on time, never early. Early delivery just means they\'ll give you more work.',
      'Colleague review: You are the team\'s anxiety medication — if you say the data is clean, it\'s clean. But your 6pm-sharp laptop shutdown makes the overtime crew deeply resentful.'
    ]
  },
  DCLN: {
    code: 'DCLN',
    name: '沉默数据矿工',
    name_en: 'The Silent Data Miner',
    tagline: '三天没说话，但模型已经跑完了',
    tagline_en: 'Haven\'t spoken in three days. Model\'s done though.',
    emoji: '⛏️',
    color: '#2C3E50',
    description: [
      '你在项目里的存在感为零，直到你默默发出了那个改变整个项目方向的分析。你不参加讨论、不发表意见、不回复群消息。但你的屏幕上永远开着七八个 Excel 和两个 SQL 查询窗口。',
      '你对人类互动的容忍度极低。每次被拉到会议上你都在心里倒计时，计算这 60 分钟本来可以跑多少个 scenario analysis。你发现 80% 的会议可以用一封邮件替代，90% 的 brainstorm 产出的想法你已经在数据里验证过了（大部分不成立）。',
      '你对新行业的学习方式是：下载这个行业过去十年的财务数据，先跑一遍相关性分析再说。你相信"如果一个 insight 不能被数据证明，那它就不是 insight，是 opinion"。',
      '同事评价：理论上你是团队最有价值的人，但你从来不在 steering committee 上出现，所以客户不知道你的存在。'
    ],
    description_en: [
      'Your presence on the project is invisible — until you silently drop the analysis that changes the entire project direction. You don\'t join discussions, don\'t share opinions, don\'t reply in group chats. But your screen always has seven Excel files and two SQL query windows open.',
      'Your tolerance for human interaction is critically low. Every time you\'re pulled into a meeting, you\'re mentally calculating how many scenario analyses those 60 minutes could have produced. You\'ve determined 80% of meetings could be an email, and 90% of brainstorm ideas have already been disproven in your data (most don\'t hold up).',
      'Your approach to learning a new industry: download ten years of financial data, run correlation analysis first, read reports later. Your philosophy: "If an insight can\'t be proven by data, it\'s not an insight — it\'s an opinion."',
      'Colleague review: Theoretically the most valuable person on the team. But you never appear at steering committees, so the client doesn\'t know you exist.'
    ]
  },
  DCLV: {
    code: 'DCLV',
    name: '数据隐士',
    name_en: 'The Data Hermit',
    tagline: 'SQL 写得比情书还好',
    tagline_en: 'Writes better SQL than love letters',
    emoji: '🧙',
    color: '#636E72',
    description: [
      '你上一次跟人类正常交流是在三周前的项目 kickoff。从那以后你就钻进了数据库，偶尔浮出水面吃个外卖。你的同事怀疑你在公司有一张行军床，但没人敢去确认。',
      '你的 SQL 查询像是诗歌——结构优雅、逻辑清晰、注释比代码还多。你在公司内部被称为"数据考古学家"，因为你能从十年前的 legacy system 里挖出所有人都以为已经丢失的数据。你做过最 impressive 的事是用一条 SQL 推翻了客户三年前一个十亿级别的投资决策。',
      '你对 PPT 的态度是："给我一页就够了，我只需要一张图和三个数字"。你的一页 slide 含金量比别人 30 页加起来都高。Partner 学会了一个技巧：让你做分析，让别人做 deck，这样项目既有深度又好看。',
      '同事评价：你是最不像咨询顾问的咨询顾问。但每次遇到数据问题，所有人都会说"去问那个人"。'
    ],
    description_en: [
      'Your last normal human interaction was at the project kickoff three weeks ago. Since then, you\'ve been submerged in databases, surfacing only for food delivery. Colleagues suspect you have a cot hidden in the office. Nobody dares verify.',
      'Your SQL queries read like poetry — elegant structure, crystal-clear logic, more comments than code. Internally, you\'re known as "the data archaeologist" — you excavate data from decade-old legacy systems that everyone assumed was lost forever. Your most impressive feat: a single SQL query that overturned a client\'s billion-dollar investment decision from three years prior.',
      'Your stance on slides: "Give me one page. One chart. Three numbers." That single slide carries more weight than anyone else\'s 30 pages combined. The Partner has learned a trick: let you do the analysis, let someone else build the deck. Best of both worlds.',
      'Colleague review: You are the least consultant-looking consultant in the firm. But whenever a data question comes up, everyone says the same thing: "Go ask that person."'
    ]
  },
  DAGN: {
    code: 'DAGN',
    name: '数据暴走族',
    name_en: 'The Data Berserker',
    tagline: '才入职半年就想自己建 financial model',
    tagline_en: 'Six months in and already building their own financial model',
    emoji: '🚀',
    color: '#FD79A8',
    description: [
      '你的 Python 水平在咨询公司里是天花板，但你的沟通能力在公司里是地下室。你入职第一周就用 Python 自动化了团队 80% 的 Excel 重复工作，然后被 Manager 提醒"用大家看得懂的工具"。',
      '你是项目里最活跃的数据分析师——活跃到让人害怕。你不满足于"回答问题"，你要"发现问题"。你经常在凌晨一点发消息说"我发现了一个有趣的相关性"，然后附上一张没有人看得懂的散点图。',
      '你在所有人还在讨论分析框架的时候，已经把数据拉完跑了三个模型。你最不能忍的事是等别人——等客户给数据、等 Manager 拍方向、等 IT 开权限。你的口头禅是"我先做着，有问题再说"，这句话已经给你惹过不少麻烦。',
      '同事评价：你是团队的加速器，也是失控的风险。请在跑模型之前至少跟 Manager 说一声。'
    ],
    description_en: [
      'Your Python skills are ceiling-level for a consulting firm. Your communication skills are basement-level. In your first week, you automated 80% of the team\'s repetitive Excel work with Python — and got told by the Manager to "use tools everyone can understand."',
      'You\'re the most active data analyst on any project — alarmingly active. You\'re not satisfied with "answering questions." You want to "find questions." You regularly message at 1am: "I found an interesting correlation," followed by a scatter plot nobody can interpret.',
      'While everyone else is still debating the analysis framework, you\'ve already pulled the data and run three models. Your biggest frustration: waiting — for client data, for the Manager to set direction, for IT to grant access. Your catchphrase: "I\'ll just start. We can course-correct later." This phrase has gotten you in trouble more than once.',
      'Colleague review: You\'re the team\'s accelerator and its biggest flight risk. Please — at minimum — tell the Manager before running the model.'
    ]
  },
  DAGV: {
    code: 'DAGV',
    name: '数据指挥官',
    name_en: 'The Data Commander',
    tagline: '整个项目的 data pipeline 都在他脑子里',
    tagline_en: 'The entire project\'s data pipeline lives in their head',
    emoji: '🎖️',
    color: '#F39C12',
    description: [
      '你不做 PPT，你做"事实基础"。你的 workstream 永远是最先完成的，因为你在 kickoff 当天就已经想好了整个分析框架、数据来源和交叉验证方案。别人还在讨论 work plan 的时候，你已经在跑数据了。',
      '你是团队里最严格的 reviewer——但只 review 数据质量。你可以容忍 PPT 字体不统一，但不能容忍小数点后第三位的误差。你建了一个"数据质量 checklist"，要求每个人提交分析前先自查一遍。这个 checklist 有 47 条。',
      '你跟客户开会时永远自带一份 backup 数据。你最骄傲的时刻是客户质疑一个数字，你打开笔记本电脑，用 30 秒找到了原始数据源、计算逻辑和交叉验证，客户当场闭嘴。',
      '同事评价：跟你做项目不用担心数据出错，但做错了你那个表情真的很恐怖。'
    ],
    description_en: [
      'You don\'t make slides. You build "the fact base." Your workstream is always first to complete because you had the entire analytical framework, data sources, and cross-validation plan mapped out on kickoff day. While others debate the work plan, you\'re already running queries.',
      'You\'re the team\'s strictest reviewer — but only for data quality. Mismatched fonts? You can live with that. Third-decimal-place discrepancy? Unacceptable. You created a "data quality checklist" and require everyone to self-audit before submitting analysis. The checklist has 47 items.',
      'You always bring backup data to client meetings. Your proudest moment: a client questioned a number, you opened your laptop, found the raw source, calculation logic, and cross-validation in 30 seconds flat. The client went silent.',
      'Colleague review: No data errors on your watch, ever. But the look on your face when someone does make an error? Genuinely terrifying.'
    ]
  },
  DALN: {
    code: 'DALN',
    name: '量化独行侠',
    name_en: 'The Quantitative Lone Ranger',
    tagline: '不跟人说话，只跟数据说话',
    tagline_en: 'Doesn\'t talk to people. Talks to data.',
    emoji: '🎯',
    color: '#A29BFE',
    description: [
      '你在咨询公司里像一个错配的存在。你的同事在做 PPT，你在写 Python 脚本。你的同事在跟客户吃饭，你在跑 Monte Carlo 模拟。你应该在对冲基金或者科技公司，但命运把你送到了这里。',
      '你把每一个咨询项目当成一个 optimization problem。客户的业务问题在你眼里就是一堆变量和约束条件。你的分析精度到了让人不舒服的地步——"我们预测收入增长 12.7%"，Manager 问你能不能说"约 13%"，你说不行，因为 0.3% 是一个有统计显著性的差异。',
      '你不参加 team dinner 是因为你在跑一个需要 6 小时才能出结果的模型。你不回消息是因为你在 debug 一段代码。你在公司年会上唯一说的一句话是"抽奖的概率模型好像有 bug"。',
      '同事评价：如果数据分析有奥运会，你至少是奖牌选手。但你交的 PPT 永远只有三页，其中两页是图表。'
    ],
    description_en: [
      'You\'re a misfit in a consulting firm. Your colleagues make slides; you write Python scripts. They wine and dine clients; you run Monte Carlo simulations. You belong at a hedge fund or a tech company, but fate dropped you here.',
      'You treat every consulting project as an optimization problem. Client business issues are just variables and constraints. Your precision makes people uncomfortable — "We project 12.7% revenue growth." The Manager asks if you can just say "about 13%." You refuse: 0.3% is a statistically significant difference.',
      'You skip team dinners because you\'re running a model that takes 6 hours. You don\'t reply to messages because you\'re debugging code. Your only comment at the company annual party: "The lottery probability model seems to have a bug."',
      'Colleague review: If data analysis had an Olympics, you\'d medal. But the slides you submit are always three pages max, two of which are charts.'
    ]
  },
  DALV: {
    code: 'DALV',
    name: '数据哲学家',
    name_en: 'The Data Philosopher',
    tagline: '用回归分析推导出客户的 business model 不成立',
    tagline_en: 'Used regression analysis to prove the client\'s business model is fundamentally broken',
    emoji: '🧠',
    color: '#1B1464',
    description: [
      '你做咨询不是为了帮客户解决问题，是为了用数据理解这个世界的运行规律。每个项目在你眼里都是一个自然实验，客户的商业决策只不过是你的样本数据。你的分析 depth 已经超出了项目的 scope，但你控制不了自己。',
      '你做过最 mean 的事是用数据证明客户的核心战略完全错误，然后在 steering committee 上用一种讲学术论文的平静语气展示。客户 CEO 当场脸色大变，Partner 在桌子底下踢了你三次。但后来事实证明你是对的，那个项目续签了两期。',
      '你有自己固定的几个分析方法，每个都用了超过五年。你不追逐新工具，因为你五年前选的那套方法已经被你打磨到了极致。你和你的 R 语言之间有一种无法言说的默契。别人问你为什么不用 Python，你说"我跟 R 的关系你不会懂"。',
      '同事评价：你是整个公司最深刻的分析师，也是最难以合作的人。但你说"数据不支持这个结论"的时候，全场没有人敢反驳。'
    ],
    description_en: [
      'You don\'t do consulting to solve client problems. You do it to understand how the world works through data. Every project is a natural experiment; client decisions are merely sample data. Your analytical depth has long exceeded project scope, but you can\'t help yourself.',
      'The meanest thing you\'ve done: used data to prove the client\'s core strategy was fundamentally wrong, then presented it at the steering committee with the calm detachment of someone reading an academic paper. The CEO\'s face changed color instantly. The Partner kicked you three times under the table. But later, you were proven right. That project got renewed for two more phases.',
      'You have a handful of analytical methods you\'ve used for over five years. You don\'t chase new tools because the ones you chose years ago have been refined to perfection. You and R have an unspoken bond. When people ask why you don\'t use Python, you say: "You wouldn\'t understand my relationship with R."',
      'Colleague review: The most profound analyst in the entire firm, and the hardest person to work with. But when you say "the data doesn\'t support this conclusion," no one in the room dares push back.'
    ]
  }
};
