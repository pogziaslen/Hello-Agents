import type { L } from "./data";

/* ----------------------------- Builder's notes ---------------------------- */

export type BuilderNote = { icon: string; title: L; body: L };

export const BUILDER_NOTES: BuilderNote[] = [
  {
    icon: "keyboard",
    title: { en: "Read, then type it out", zh: "先读，再亲手敲一遍" },
    body: {
      en: "Copy-pasting the code teaches you nothing. Type it out, break it on purpose, and read the traceback. That is where the real lesson lives.",
      zh: "复制粘贴代码什么也学不到。亲手敲一遍，故意把它弄坏，再读一遍报错信息。真正的收获就藏在那里。",
    },
  },
  {
    icon: "sprout",
    title: { en: "Start with the smallest thing that runs", zh: "从最小能跑的开始" },
    body: {
      en: "A three-line ReAct loop beats a shiny framework you do not understand. Add complexity only when you can explain why you need it.",
      zh: "三行的 ReAct 循环，胜过你根本看不懂的华丽框架。只有当你解释得清为什么需要时，才去增加复杂度。",
    },
  },
  {
    icon: "receipt",
    title: { en: "Log everything, seriously", zh: "认真记录一切" },
    body: {
      en: "Agents fail silently. Give yours a paper trail of every thought, tool call and response. You will thank yourself at two in the morning.",
      zh: "智能体会悄无声息地失败。给每一次思考、每一次工具调用、每一次响应都留下足迹。凌晨两点的你会感谢现在的自己。",
    },
  },
  {
    icon: "pencil",
    title: { en: "Your prompts are not sacred", zh: "提示词不是圣物" },
    body: {
      en: "A prompt is a draft. Benchmark it, tweak one variable at a time, and keep the winner. Treat prompting like engineering, not prayer.",
      zh: "提示词只是草稿。给它打基准、一次只改一个变量、保留胜出的版本。把提示工程当工程来做，而不是当祈祷来做。",
    },
  },
  {
    icon: "ship",
    title: { en: "Ship something small this week", zh: "本周就发布点小东西" },
    body: {
      en: "A travel assistant that books one route beats a ten-agent mega-architecture that never runs. Momentum compounds.",
      zh: "一个能订一条路线的旅行助手，胜过十个永远跑不起来的超大架构。势头是会复利的。",
    },
  },
];

/* -------------------------------- Roadmap --------------------------------- */

export type RoadmapPhase = {
  phase: string;
  title: L;
  weeks: L;
  desc: L;
  points: L[];
};

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "01",
    title: { en: "Understand what you are building", zh: "搞清楚你在构建什么" },
    weeks: { en: "Weeks 1 to 2", zh: "第 1~2 周" },
    desc: {
      en: "Before you write a line of agent code, you need a mental model. We build it the slow way, so it does not collapse later.",
      zh: "在写下第一行智能体代码之前，你需要一个心智模型。我们慢慢地把它搭起来，这样它之后才不会塌。",
    },
    points: [
      { en: "What an agent is, and just as importantly, what it is not", zh: "智能体是什么，同样重要的是，它不是什么" },
      { en: "The path from rule systems to LLM agents", zh: "从规则系统到 LLM 智能体的演进之路" },
      { en: "How the language model underneath actually works", zh: "底层的语言模型到底是怎么工作的" },
    ],
  },
  {
    phase: "02",
    title: { en: "Make something think", zh: "让某个东西学会思考" },
    weeks: { en: "Weeks 3 to 5", zh: "第 3~5 周" },
    desc: {
      en: "Time to type. You will hand-build the classic patterns before touching a single tool, because the tools are just sugar on top.",
      zh: "是时候动手敲代码了。在碰任何工具之前，先亲手实现经典范式，因为工具不过是上面的糖衣。",
    },
    points: [
      { en: "ReAct, Plan-and-Solve and Reflection, written from scratch", zh: "从零实现 ReAct、Plan-and-Solve 与 Reflection" },
      { en: "Low-code tools like Coze, Dify and n8n, used with intent", zh: "带着目的去使用 Coze、Dify、n8n 这类低代码工具" },
      { en: "Where prompting ends and an agent begins", zh: "提示工程在哪里结束，智能体从哪里开始" },
    ],
  },
  {
    phase: "03",
    title: { en: "Learn the tools, then build your own", zh: "学会工具，再造自己的" },
    weeks: { en: "Weeks 6 to 8", zh: "第 6~8 周" },
    desc: {
      en: "Survey what the ecosystem offers, then stop borrowing. You will write a minimal framework so you know exactly where the magic is and is not.",
      zh: "先摸清生态提供了什么，然后停止借用。你会亲手写一个极简框架，从而真正知道魔法在哪里、又不在哪里。",
    },
    points: [
      { en: "AutoGen, AgentScope and LangGraph, and how they differ", zh: "AutoGen、AgentScope、LangGraph 的差异" },
      { en: "A minimal agent framework, built from zero", zh: "从零搭建一个极简智能体框架" },
      { en: "The honest tradeoff between flexibility and convenience", zh: "灵活与便利之间诚实的取舍" },
    ],
  },
  {
    phase: "04",
    title: { en: "Give your agent a brain and a memory", zh: "给智能体装上大脑和记忆" },
    weeks: { en: "Weeks 9 to 11", zh: "第 9~11 周" },
    desc: {
      en: "A one-shot agent forgets everything. A good one remembers, reasons over context, and talks to other agents. This is where demos become products.",
      zh: "一次性智能体会忘掉一切。好的智能体会记忆、会在上下文之上推理、会和其他智能体对话。演示变成产品的分水岭就在这里。",
    },
    points: [
      { en: "Memory systems, retrieval and RAG", zh: "记忆系统、检索与 RAG" },
      { en: "Context engineering for long conversations", zh: "长对话的上下文工程" },
      { en: "MCP, A2A and ANP, the protocols that connect agents", zh: "MCP、A2A、ANP，连接智能体的协议" },
    ],
  },
  {
    phase: "05",
    title: { en: "Stop guessing, start measuring", zh: "停止猜测，开始衡量" },
    weeks: { en: "Weeks 12 to 13", zh: "第 12~13 周" },
    desc: {
      en: "Prompting gets you far, training gets you further, but nothing works without a number you trust. Learn to train and to evaluate.",
      zh: "提示工程能带你走很远，训练能带你走更远，但缺了一个可信的数字，什么都跑不通。学会训练，也学会评估。",
    },
    points: [
      { en: "Agentic RL, the full path from SFT to GRPO", zh: "Agentic RL，从 SFT 到 GRPO 的完整路径" },
      { en: "Metrics, benchmarks and evaluation frameworks", zh: "指标、基准测试与评估框架" },
      { en: "How to know, honestly, if your agent is any good", zh: "如何诚实地判断你的智能体到底好不好" },
    ],
  },
  {
    phase: "06",
    title: { en: "Ship something real", zh: "发布点真东西" },
    weeks: { en: "Week 14 and beyond", zh: "第 14 周起" },
    desc: {
      en: "Everything converges on projects you can run and show. Then you graduate with a capstone that is entirely yours.",
      zh: "一切都汇聚到你能跑起来、能展示出来的项目上。最后，用一份完全属于你的毕业设计为这段旅程画上句号。",
    },
    points: [
      { en: "A smart travel assistant that works end to end", zh: "端到端可用的智能旅行助手" },
      { en: "An automated deep-research agent", zh: "自动化的深度研究智能体" },
      { en: "A living cyber town, then your own capstone", zh: "活起来的赛博小镇，然后是属于你的毕业设计" },
    ],
  },
];

/* ------------------------------- About page ------------------------------- */

export const ABOUT_PAGE = {
  kicker: { en: "The full story", zh: "完整的故事" },
  title: { en: "A course for people who build.", zh: "一门给动手者的课程。" },
  lede: {
    en: "Hello Agents is Datawhale's free, systematic course on building AI-native agents. It started with a simple frustration: the hype was everywhere, but a clear, hands-on path was not.",
    zh: "Hello Agents 是 Datawhale 免费、系统的 AI 原生智能体构建课程。它源于一个简单的挫败感：炒作无处不在，清晰、可上手的路径却难觅踪影。",
  },
  principles: {
    heading: { en: "What we believe", zh: "我们的信念" },
    items: [
      {
        title: { en: "Build over talk", zh: "动手高于空谈" },
        body: {
          en: "Every chapter ships with code you can run, break and fix. If you cannot type it, you have not learned it.",
          zh: "每一章都附带你真正能运行、能破坏、能修复的代码。敲不出来，就不算学会。",
        },
      },
      {
        title: { en: "Explain the why", zh: "讲清楚为什么" },
        body: {
          en: "We go under the hood of paradigms and frameworks, so you leave with understanding, not just recipes.",
          zh: "我们深入范式与框架的内部，让你带走的是理解，而不只是菜谱。",
        },
      },
      {
        title: { en: "Open and free", zh: "开放且免费" },
        body: {
          en: "The full text, code and community contributions are free, forever, under a share-alike license.",
          zh: "全文、代码与社区贡献，在相同方式共享许可下永久免费。",
        },
      },
    ],
  },
  license: {
    heading: { en: "License and reuse", zh: "许可与复用" },
    body: {
      en: "The course is released under Creative Commons BY-NC-SA 4.0. Read it, share it, build on it. Just keep it non-commercial, credit the authors, and share any adaptations under the same terms.",
      zh: "本课程以 Creative Commons BY-NC-SA 4.0 许可发布。去读、去分享、去基于它创作，但请保持非商业用途、注明作者，并以相同条款分享衍生作品。",
    },
  },
  contribute: {
    heading: { en: "Come build with us", zh: "一起共建" },
    body: {
      en: "This is a living document written by volunteers. Found a bug, a better explanation, or a project worth sharing? Open an issue or send a pull request. Your first contribution is the hardest and the most fun.",
      zh: "这是一份由志愿者共同书写的活文档。发现了一个 bug、一个更好的讲法，或是一个值得分享的项目？开一个 Issue 或发一个 PR。你的第一次贡献最难，也最有趣。",
    },
  },
};

/* ------------------------------- Legal pages ------------------------------ */

export type LegalDoc = {
  title: L;
  updated: L;
  intro: L;
  sections: { heading: L; body: L }[];
};

export const COOKIES_DOC: LegalDoc = {
  title: { en: "Cookie notice", zh: "Cookie 说明" },
  updated: { en: "Last updated: January 2026", zh: "最后更新：2026 年 1 月" },
  intro: {
    en: "Hello Agents keeps cookies to a bare minimum. This page explains, in plain words, what we store, why, and how to clear it.",
    zh: "Hello Agents 把 Cookie 的使用降到最低。本页用通俗的语言说明我们存了什么、为什么存，以及如何清除。",
  },
  sections: [
    {
      heading: { en: "What we store", zh: "我们存了什么" },
      body: {
        en: "We store your language preference and, if you sign in, a small local record of your session so the site can greet you by name. No advertising IDs, no cross-site trackers, no fingerprinting.",
        zh: "我们只保存你的语言偏好，以及在你登录时，为了用名字问候你而保存的一份本地会话记录。没有广告 ID、没有跨站追踪、没有指纹识别。",
      },
    },
    {
      heading: { en: "Third-party cookies", zh: "第三方 Cookie" },
      body: {
        en: "None from us. Outbound links to the reader, the PDF releases or our social accounts belong to their own sites, which have their own policies.",
        zh: "我们不设置任何第三方 Cookie。指向在线阅读、PDF 版本或社交账号的外链属于各自网站，适用各自的政策。",
      },
    },
    {
      heading: { en: "Your controls", zh: "你的控制权" },
      body: {
        en: "Everything is stored in your own browser. Clear your site data at any time to reset the language and sign yourself out. Nothing is lost that matters.",
        zh: "所有内容都只存在你自己的浏览器里。随时清除站点数据即可重置语言并退出登录，不会丢失任何重要的东西。",
      },
    },
  ],
};

export const PRIVACY_DOC: LegalDoc = {
  title: { en: "Privacy policy", zh: "隐私政策" },
  updated: { en: "Last updated: January 2026", zh: "最后更新：2026 年 1 月" },
  intro: {
    en: "Hello Agents is an educational resource, not a data business. We collect as little as possible and explain every bit of it here.",
    zh: "Hello Agents 是一份教育资源，而不是数据生意。我们只收集最少的信息，并在这里逐条说明。",
  },
  sections: [
    {
      heading: { en: "What we collect", zh: "我们收集什么" },
      body: {
        en: "Your email address, only if you choose to subscribe to updates. Your name and email, only if you choose to create a local account. Both are stored in your browser, not on our servers.",
        zh: "只有当你选择订阅更新时才收集你的邮箱；只有当你选择创建本地账号时才收集姓名和邮箱。两者都保存在你的浏览器里，而非我们的服务器上。",
      },
    },
    {
      heading: { en: "What we do not collect", zh: "我们不收集什么" },
      body: {
        en: "No analytics, no tracking pixels, no device fingerprints, no IP logging. We cannot sell or leak what we never had.",
        zh: "没有分析、没有追踪像素、没有设备指纹、没有 IP 日志。我们从没拥有过的东西，既卖不掉，也不会泄露。",
      },
    },
    {
      heading: { en: "How we use it", zh: "我们如何使用" },
      body: {
        en: "Your email is used only to send course updates you asked for. Your account exists only to personalise your experience on this site. That is the whole list.",
        zh: "你的邮箱只用于发送你主动订阅的课程更新；你的账号只用于个性化本站体验。清单到此为止。",
      },
    },
    {
      heading: { en: "Your rights", zh: "你的权利" },
      body: {
        en: "Because everything lives in your browser, you already control it. Sign out or clear site data to remove your account and preferences in a single step.",
        zh: "因为一切都在你的浏览器里，你本就拥有控制权。退出登录或清除站点数据，即可一步删除账号与偏好。",
      },
    },
  ],
};

export const TERMS_DOC: LegalDoc = {
  title: { en: "Terms of use", zh: "使用条款" },
  updated: { en: "Last updated: January 2026", zh: "最后更新：2026 年 1 月" },
  intro: {
    en: "A short, human version of the rules. The long version is simple: this is educational material, use it to learn, and be kind.",
    zh: "一份简短、说人话的规则。长话短说：这是教育材料，用它来学习，并对彼此友善。",
  },
  sections: [
    {
      heading: { en: "Educational use", zh: "教育用途" },
      body: {
        en: "Hello Agents is provided for learning. The code samples are starting points, not production guarantees. Run them, break them, improve them, but test before you trust.",
        zh: "Hello Agents 供学习使用。代码示例是起点，而不是生产保障。去运行它、破坏它、改进它，但在信任它之前请先测试。",
      },
    },
    {
      heading: { en: "No warranty", zh: "不提供担保" },
      body: {
        en: "Everything is offered as-is, without warranty of any kind. The field moves fast; some examples may be outpaced by new releases. If in doubt, check the source.",
        zh: "所有内容按原样提供，不作任何形式的担保。这个领域迭代极快，部分示例可能跟不上新版本。如有疑问，请核对源码。",
      },
    },
    {
      heading: { en: "Your contributions", zh: "你的贡献" },
      body: {
        en: "Anything you contribute stays under the project license and stays free. You keep credit; the community keeps the work open.",
        zh: "你贡献的任何内容都留在项目许可之下并保持免费。署名归你，开放归社区。",
      },
    },
    {
      heading: { en: "Conduct", zh: "行为准则" },
      body: {
        en: "Be generous with beginners and honest with everyone else. This is a place to learn, not a place to win arguments.",
        zh: "对新手慷慨，对其他所有人诚实。这里是用来的学习的地方，不是用来争输赢的地方。",
      },
    },
  ],
};

/* -------------------------------- Login copy ------------------------------ */

export const LOGIN = {
  kicker: { en: "Welcome back", zh: "欢迎回来" },
  title: { en: "Sign in to Hello Agents", zh: "登录 Hello Agents" },
  subtitle: {
    en: "Pick up where you left off. Your progress and notes are saved to this browser.",
    zh: "从上次停下的地方继续。你的进度与笔记保存在此浏览器中。",
  },
  tabSignin: { en: "Sign in", zh: "登录" },
  tabRegister: { en: "Create account", zh: "创建账号" },
  name: { en: "Full name", zh: "姓名" },
  namePh: { en: "Ada Lovelace", zh: "埃达·洛夫莱斯" },
  email: { en: "Email", zh: "邮箱" },
  emailPh: { en: "you@example.com", zh: "you@example.com" },
  password: { en: "Password", zh: "密码" },
  passwordPh: { en: "At least 8 characters", zh: "至少 8 个字符" },
  confirm: { en: "Confirm password", zh: "确认密码" },
  remember: { en: "Keep me signed in", zh: "保持登录" },
  forgot: { en: "Forgot password?", zh: "忘记密码？" },
  agree: { en: "I agree to the Terms of use and Privacy policy.", zh: "我同意使用条款与隐私政策。" },
  submitSignin: { en: "Sign in", zh: "登录" },
  submitRegister: { en: "Create account", zh: "创建账号" },
  or: { en: "or continue with", zh: "或使用以下方式继续" },
  google: { en: "Google", zh: "Google" },
  github: { en: "GitHub", zh: "GitHub" },
  demo: { en: "Try a demo account", zh: "试用演示账号" },
  errors: {
    email: { en: "Enter a valid email address.", zh: "请输入有效的邮箱地址。" },
    password: { en: "Password needs at least 8 characters.", zh: "密码至少需要 8 个字符。" },
    confirm: { en: "Passwords do not match.", zh: "两次输入的密码不一致。" },
    agree: { en: "Please accept the terms to continue.", zh: "请先同意条款才能继续。" },
    name: { en: "Please enter your name.", zh: "请输入你的姓名。" },
    invalid: { en: "No account matches those details. Try the demo account.", zh: "没有与这些信息匹配的账号，请试用演示账号。" },
  },
  success: { en: "Signed in as", zh: "已登录为" },
  welcome: { en: "Welcome back,", zh: "欢迎回来，" },
};
