export type L = { en: string; zh: string };

export type NavItem = {
  id: string;
  label: L;
  kind: "section" | "page";
  to?: string;
};

export const NAV: NavItem[] = [
  { id: "roadmap", label: { en: "Roadmap", zh: "路线图" }, kind: "page", to: "/roadmap" },
  { id: "features", label: { en: "Features", zh: "特色" }, kind: "section" },
  { id: "community", label: { en: "Community", zh: "社区" }, kind: "section" },
  { id: "team", label: { en: "Team", zh: "团队" }, kind: "section" },
  { id: "about", label: { en: "About", zh: "关于" }, kind: "page", to: "/about" },
];

export const HERO = {
  eyebrow: { en: "Datawhale · a free, hands-on course", zh: "Datawhale · 免费实战课程" },
  titleTop: { en: "Hello", zh: "Hello" },
  titleBottom: { en: "Agents", zh: "Agents" },
  tagline: {
    en: "Go from pasting prompts to shipping your own agents.",
    zh: "从复制粘贴提示词，到发布你自己的智能体。",
  },
  subtitle: {
    en: "Sixteen chapters, five parts, one goal. Understand what actually makes an agent tick, then build one you would trust in production. No black boxes, no magic. Just working code and honest explanations.",
    zh: "十六章、五大部分、一个目标。真正搞懂智能体是怎么运转的，然后亲手构建一个你愿意在生产环境使用的智能体。没有黑箱，没有魔法，只有能跑的代码和诚实的讲解。",
  },
  ctaPrimary: { en: "Start reading", zh: "开始学习" },
  ctaSecondary: { en: "See the roadmap", zh: "查看路线图" },
  scroll: { en: "Scroll to explore", zh: "向下滚动探索" },
};

export const STATS = [
  { value: "16", label: { en: "Chapters", zh: "章节" } },
  { value: "5", label: { en: "Parts", zh: "部分" } },
  { value: "100%", label: { en: "Open source", zh: "开源" } },
  { value: "13", label: { en: "Extra chapters", zh: "补充章节" } },
] as const;

export const ABOUT = {
  kicker: { en: "About the project", zh: "关于项目" },
  title: {
    en: "From prompting to building.",
    zh: "从调用提示词，到亲手构建。",
  },
  p1: {
    en: "2024 was the year everyone trained a bigger model. 2025 is the year everyone ships a smarter agent. The bookshelf is full of hype and thin on real, hands-on guidance. Hello Agents exists to fill that gap.",
    zh: "2024 年是大家争相训练更大模型的一年，2025 年则是大家竞相发布更聪明智能体的一年。书架上满是炒作，却缺少真正可以上手的指导。Hello Agents 就是为了填补这个空白而生。",
  },
  p2: {
    en: "It is Datawhale's free, project-first course on agent systems. We skip the fluff and split the field the way it actually splits: flow-driven tools like Dify, Coze and n8n on one side, and genuine AI-native agents on the other. This course goes all in on the second.",
    zh: "这是 Datawhale 推出的免费、以项目为核心的智能体系统课程。我们跳过花哨的部分，把领域按照它真实的样子一分为二：一边是 Dify、Coze、n8n 这类流程驱动的工具，另一边则是真正的 AI 原生智能体。这门课程把全部精力放在后者。",
  },
  p3: {
    en: "You will look under the hood of the classic paradigms, then build your own framework, your own memory, your own multi-agent apps. By the end you will have stopped asking what an agent can do, because you will have built one.",
    zh: "你会打开经典范式的引擎盖一探究竟，再亲手搭建自己的框架、自己的记忆系统、自己的多智能体应用。到最后，你不会再问「智能体能做什么」，因为你已经亲手做过一个。",
  },
  chips: [
    { en: "AI-native", zh: "AI 原生" },
    { en: "Theory + practice", zh: "理论 + 实践" },
    { en: "Beginner friendly", zh: "对新手友好" },
    { en: "From scratch", zh: "从零开始" },
  ],
};

export const FEATURES: { icon: string; title: L; desc: L }[] = [
  {
    icon: "book",
    title: { en: "Free, forever", zh: "永久免费" },
    desc: {
      en: "Every chapter, exercise and code sample is free and open. Learn at your own pace, with the community.",
      zh: "每一章、每道习题、每一段代码都免费开放。按自己的节奏学习，和社区一起成长。",
    },
  },
  {
    icon: "eye",
    title: { en: "The real principles", zh: "真正的原理" },
    desc: {
      en: "Skip the marketing. We cover what an agent is, where it came from, and the patterns that actually work.",
      zh: "跳过营销话术。我们讲清楚智能体是什么、从何而来，以及真正管用的那些范式。",
    },
  },
  {
    icon: "wrench",
    title: { en: "Build by hand", zh: "亲手搭建" },
    desc: {
      en: "Low-code tools are handy, but you will type the code yourself. That is where understanding sticks.",
      zh: "低代码工具固然好用，但代码要你自己敲。理解才会真正沉淀下来。",
    },
  },
  {
    icon: "gear",
    title: { en: "Your own framework", zh: "你自己的框架" },
    desc: {
      en: "Build HelloAgents on top of raw OpenAI-style APIs. Wheels are fine, but you will learn to make your own.",
      zh: "在原生 OpenAI 风格 API 之上搭建 HelloAgents。现成的轮子很好，但你会学会造自己的轮子。",
    },
  },
  {
    icon: "database",
    title: { en: "Memory and context", zh: "记忆与上下文" },
    desc: {
      en: "Context engineering, retrieval, protocols. The quiet skills that separate demos from products.",
      zh: "上下文工程、检索、协议。这些看似低调的技能，正是区分演示与产品的分水岭。",
    },
  },
  {
    icon: "cpu",
    title: { en: "Train, don't just prompt", zh: "不止于提示词，更要训练" },
    desc: {
      en: "Agentic RL, from SFT to GRPO. The full path from a chat model to a reasoner.",
      zh: "Agentic RL，从 SFT 到 GRPO。从聊天模型到推理模型的完整路径。",
    },
  },
  {
    icon: "rocket",
    title: { en: "Projects that run", zh: "能跑起来的项目" },
    desc: {
      en: "A travel assistant, a deep-research agent, a living cyber town. Real things you can point at.",
      zh: "旅行助手、深度研究智能体、一个活起来的赛博小镇。都是你可以拿出手的成果。",
    },
  },
  {
    icon: "briefcase",
    title: { en: "Interview ready", zh: "面试就绪" },
    desc: {
      en: "Curated agent-role questions with model answers, gathered from real interviews.",
      zh: "从真实面试中收集整理的智能体岗位高频题与参考答案。",
    },
  },
];

export type Chapter = { num: string; title: L; desc: L };
export type Part = { id: string; num: string; title: L; blurb: L; chapters: Chapter[] };

export const CURRICULUM: Part[] = [
  {
    id: "p1",
    num: "01",
    title: { en: "Agent & LLM fundamentals", zh: "智能体与语言模型基础" },
    blurb: {
      en: "What an agent is, where it came from, and the language model underneath it.",
      zh: "智能体是什么、从何而来，以及支撑它的语言模型。",
    },
    chapters: [
      { num: "01", title: { en: "Meet your first agent", zh: "初识智能体" }, desc: { en: "Definitions, types, paradigms, and where agents actually get used.", zh: "定义、类型、范式，以及智能体真正被用在哪些地方。" } },
      { num: "02", title: { en: "How we got here", zh: "我们是怎么走到今天的" }, desc: { en: "From symbolic systems to the LLM agents we build today.", zh: "从符号系统到今天构建的 LLM 智能体。" } },
      { num: "03", title: { en: "The model underneath", zh: "底层的模型" }, desc: { en: "Transformers, prompting, and the limits you should know.", zh: "Transformer、提示工程，以及你应该了解的局限。" } },
    ],
  },
  {
    id: "p2",
    num: "02",
    title: { en: "Build your first agent", zh: "构建你的第一个智能体" },
    blurb: {
      en: "Hand-build the classic patterns, use the low-code tools, then write a framework from zero.",
      zh: "亲手实现经典范式，体验低代码工具，再从零写一个框架。",
    },
    chapters: [
      { num: "04", title: { en: "The classic patterns", zh: "经典范式" }, desc: { en: "ReAct, Plan-and-Solve and Reflection, built by hand.", zh: "亲手实现 ReAct、Plan-and-Solve 和 Reflection。" } },
      { num: "05", title: { en: "Low-code platforms", zh: "低代码平台" }, desc: { en: "Coze, Dify, n8n. When to use them, and when to leave them.", zh: "Coze、Dify、n8n，什么时候该用，什么时候该放弃。" } },
      { num: "06", title: { en: "Frameworks in the wild", zh: "主流框架" }, desc: { en: "AutoGen, AgentScope, LangGraph and how they differ.", zh: "AutoGen、AgentScope、LangGraph 的区别与取舍。" } },
      { num: "07", title: { en: "Build your own framework", zh: "打造你自己的框架" }, desc: { en: "A minimal agent framework, written from zero.", zh: "从零写一个极简的智能体框架。" } },
    ],
  },
  {
    id: "p3",
    num: "03",
    title: { en: "Go deeper", zh: "更进一步" },
    blurb: {
      en: "Give your agent a memory, a sense of context, and a way to talk to other agents.",
      zh: "给你的智能体装上记忆、上下文意识，以及和其他智能体对话的能力。",
    },
    chapters: [
      { num: "08", title: { en: "Memory and retrieval", zh: "记忆与检索" }, desc: { en: "Memory systems, RAG, and storage that scales.", zh: "记忆系统、RAG，以及可以扩展的存储。" } },
      { num: "09", title: { en: "Context engineering", zh: "上下文工程" }, desc: { en: "Keeping a conversation coherent across many turns.", zh: "让对话在多个回合里始终保持连贯。" } },
      { num: "10", title: { en: "Talking to other agents", zh: "与其他智能体对话" }, desc: { en: "MCP, A2A, ANP and how agents interoperate.", zh: "MCP、A2A、ANP 与智能体互操作。" } },
      { num: "11", title: { en: "Agentic RL", zh: "Agentic RL" }, desc: { en: "From SFT to GRPO, training models that reason.", zh: "从 SFT 到 GRPO，训练会推理的模型。" } },
      { num: "12", title: { en: "Measuring what you built", zh: "衡量你构建的东西" }, desc: { en: "Metrics, benchmarks and evaluation frameworks.", zh: "指标、基准测试与评估框架。" } },
    ],
  },
  {
    id: "p4",
    num: "04",
    title: { en: "Real projects", zh: "真实项目" },
    blurb: {
      en: "Everything converges on projects you can actually run and show.",
      zh: "一切都会汇聚到你可以真正运行、真正展示的项目上。",
    },
    chapters: [
      { num: "13", title: { en: "Smart travel assistant", zh: "智能旅行助手" }, desc: { en: "MCP plus multi-agent work in a real app.", zh: "在真实应用里使用 MCP 与多智能体协作。" } },
      { num: "14", title: { en: "Deep research agent", zh: "深度研究智能体" }, desc: { en: "Reproduce and dissect a DeepResearch agent.", zh: "复现并拆解一个 DeepResearch 智能体。" } },
      { num: "15", title: { en: "A living cyber town", zh: "活起来的赛博小镇" }, desc: { en: "Agents that play, trade and collide in a simulated town.", zh: "在模拟小镇里玩耍、交易、碰撞的智能体。" } },
    ],
  },
  {
    id: "p5",
    num: "05",
    title: { en: "Capstone and outlook", zh: "毕业设计与展望" },
    blurb: {
      en: "Ship a complete project of your own, then look at what comes next.",
      zh: "发布一个属于你自己的完整项目，再抬头看看前方。",
    },
    chapters: [
      { num: "16", title: { en: "Your capstone", zh: "你的毕业设计" }, desc: { en: "Ship a complete multi-agent app you can be proud of.", zh: "发布一个你引以为傲的完整多智能体应用。" } },
    ],
  },
];

export const COMMUNITY: { icon: string; title: L; desc: L }[] = [
  { icon: "compass", title: { en: "Interview question bank", zh: "面试题库" }, desc: { en: "Curated agent-role questions with model answers.", zh: "精选的智能体岗位面试题与参考答案。" } },
  { icon: "sparkles", title: { en: "Dify, step by step", zh: "Dify 保姆级教程" }, desc: { en: "A foolproof walkthrough for your first Dify agent.", zh: "带你一步步搭起第一个 Dify 智能体，零踩坑。" } },
  { icon: "link", title: { en: "Skills vs MCP", zh: "Skills 与 MCP 对比" }, desc: { en: "A clear-eyed comparison of two hot techniques.", zh: "两种热门技术的清醒对比。" } },
  { icon: "monitor", title: { en: "GUI and web agents", zh: "GUI 与 Web 智能体" }, desc: { en: "Browser and desktop agents, explained and practiced.", zh: "浏览器与桌面智能体的原理与实战。" } },
  { icon: "mountain", title: { en: "Pitfalls and scars", zh: "踩坑与心得" }, desc: { en: "Hard-won lessons from real Code Agent development.", zh: "真实 Code Agent 开发中得来不易的经验。" } },
  { icon: "bolt", title: { en: "Self-evolution", zh: "自我进化" }, desc: { en: "Four feedback loops and the projects leading them.", zh: "四类反馈闭环，以及走在前面的项目。" } },
];

export const TEAM: { name: L; role: L; tag: L }[] = [
  { name: { en: "Sizhou Chen", zh: "陈思州" }, role: { en: "Project lead", zh: "项目负责人" }, tag: { en: "Author · Editor", zh: "作者 · 校对" } },
  { name: { en: "Tao Sun", zh: "孙韬" }, role: { en: "Co-founder", zh: "联合发起人" }, tag: { en: "CAMEL-AI · Ch.9", zh: "CAMEL-AI · 第9章" } },
  { name: { en: "Shufan Jiang", zh: "姜舒凡" }, role: { en: "Co-founder", zh: "联合发起人" }, tag: { en: "Exercises · Editor", zh: "习题设计 · 校对" } },
  { name: { en: "Peilin Huang", zh: "黄佩林" }, role: { en: "Agent engineer", zh: "智能体工程师" }, tag: { en: "Ch.5", zh: "第5章" } },
  { name: { en: "Xinmin Zeng", zh: "曾鑫民" }, role: { en: "Agent engineer", zh: "智能体工程师" }, tag: { en: "Ch.14", zh: "第14章" } },
  { name: { en: "Hao Hu", zh: "胡昊" }, role: { en: "Operations", zh: "运营组织者" }, tag: { en: "Community", zh: "社区" } },
  { name: { en: "Xinzhong Zhu", zh: "朱信忠" }, role: { en: "Advisor", zh: "指导专家" }, tag: { en: "Chief scientist", zh: "首席科学家" } },
];

export const FOOTER = {
  title: { en: "Start building today.", zh: "今天就开始动手构建。" },
  subtitle: {
    en: "Join a growing community of agent builders. The best way to learn is to build.",
    zh: "加入不断壮大的智能体构建者社区。最好的学习方式，就是亲手去构建。",
  },
  readOnline: { en: "Read online", zh: "在线阅读" },
  downloadPdf: { en: "Download PDF", zh: "下载 PDF" },
  follow: { en: "Follow us", zh: "关注我们" },
  madeWith: { en: "An open-source course by the Datawhale community.", zh: "由 Datawhale 社区打造的开源课程。" },
  rights: { en: "Licensed under CC BY-NC-SA 4.0.", zh: "遵循 CC BY-NC-SA 4.0 许可协议。" },
  navLabel: { en: "Explore", zh: "探索" },
  resourcesLabel: { en: "Resources", zh: "资源" },
  feedbackLabel: { en: "Get updates", zh: "获取更新" },
  feedbackPlaceholder: { en: "your@email.com", zh: "your@email.com" },
  feedbackBtn: { en: "Subscribe", zh: "订阅" },
  feedbackSuccess: { en: "You're on the list, welcome aboard!", zh: "订阅成功，欢迎加入！" },
  legalLabel: { en: "Legal", zh: "法律信息" },
  cookies: { en: "Cookies", zh: "Cookie" },
  privacy: { en: "Privacy", zh: "隐私" },
  terms: { en: "Terms", zh: "条款" },
};

export const CITATION = {
  bibtex: `@misc{hello_agents2025,
  title  = {Hello-Agents: Building an AI Agent from Scratch},
  author = {Sizhou Chen and Tao Sun and Shufan Jiang and Peilin Huang and Xinmin Zeng and Hao Hu and Xinzhong Zhu},
  year   = {2025},
  note   = {Systematic open-source agent learning course}
}`,
};

export const LINKS = {
  readOnline: "https://datawhalechina.github.io/hello-agents/",
  readOnlineCN: "https://hello-agents.datawhale.cc",
  downloadPdf: "https://github.com/datawhalechina/hello-agents/releases/latest",
  x: "https://x.com/HelloAgents_",
};
