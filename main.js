 const STORAGE_KEYS = {
  googleApiKey: "lead_hunter_google_api_key",
  googleCx: "lead_hunter_google_cx",
};

const heroMetrics = [
  { label: "每日推荐", value: "5-10", desc: "让业务员每天拿到少而精的开发对象" },
  { label: "首月买家库", value: "100-200", desc: "不是一堆原始名单，而是可持续推进的客户池" },
  { label: "老板查看频率", value: "每周 1 次", desc: "看动作、看卡点、看是否继续投入" },
];

const personas = [
  {
    title: "外贸业务员",
    desc: "得到值得联系的买家、中文也能写开发信、知道下一步该怎么跟进。",
  },
  {
    title: "工厂老板",
    desc: "每天只看几个关键数字，就知道团队有没有认真开发、卡点在哪。",
  },
];

const goals = [
  {
    title: "是否真的被用起来",
    desc: "30 天内业务员是否开始持续依赖 AI 提供推荐与回复建议。",
  },
  {
    title: "撤掉后效率会不会下降",
    desc: "如果答案是“会”，产品就开始有了持续付费的基础。",
  },
];

const modules = [
  {
    title: "获客引擎",
    desc: "从供应商画像、真实买家数据源、联系方式挖掘，到首封文案生成，形成一条四段式流水线。",
    value: "AI 每天告诉我该开发哪几个海外买家。",
  },
  {
    title: "外贸 ChatGPT",
    desc: "围绕开发信、回复价格、MOQ、交期、样品等场景，用中文直接驱动专业外语输出。",
    value: "不会外语也能跟海外客户持续沟通。",
  },
  {
    title: "客户窗口",
    desc: "每个客户都有一个持续推进的窗口，记录状态、动作、跟进建议与下一步。",
    value: "聊到哪一步、下一步做什么，业务员自己心里有数。",
  },
  {
    title: "老板监督表",
    desc: "把动作变成可被看见、可被衡量、可被比较的管理数据，不再靠感觉判断团队是否在推进。",
    value: "老板每天知道钱花出去后有没有动作发生。",
  },
];

const loopSteps = [
  {
    title: "找到买家",
    desc: "AI 先做产品与客户适配判断，再把搜索与目录数据收成候选池。",
  },
  {
    title: "开始沟通",
    desc: "业务员用场景按钮发出第一轮沟通，不需要面对空白输入框。",
  },
  {
    title: "记录进展",
    desc: "每个客户都被沉淀到客户窗口里，谁联系过、卡在哪、下一步是什么都可见。",
  },
  {
    title: "老板监督",
    desc: "老板通过数字和卡点分布理解投入产出，形成是否续费的直接依据。",
  },
];

const engineSteps = [
  {
    title: "Step 1 · 供应商画像",
    desc: "先回答“我适合卖给谁”，而不是一上来就搜一堆买家名单。",
  },
  {
    title: "Step 2 · 数据瀑布流",
    desc: "现有询盘、Google、黄页目录、展会名单、海关数据，逐层补充候选。",
  },
  {
    title: "Step 3 · 联系方式",
    desc: "优先找采购负责人，其次找业务入口，找不到邮箱也给替代动作。",
  },
  {
    title: "Step 4 · 推荐动作",
    desc: "生成 Email / WhatsApp / LinkedIn 的不同版本，不只给一段文案。",
  },
];

const copilotModes = [
  {
    key: "first-touch",
    name: "写首封开发信",
    summary: "生成正式邮件、简短版 WhatsApp、以及下一步跟进提醒。",
  },
  {
    key: "intent-read",
    name: "看懂客户回复",
    summary: "识别价格、MOQ、交期、样品、认证等真实意图，再建议如何回答。",
  },
  {
    key: "reply-plan",
    name: "生成回复策略",
    summary: "先说核心立场，再补理由、边界与建议动作，不把产品讲满。",
  },
  {
    key: "follow-up",
    name: "催进度与追问",
    summary: "围绕无回复、样品反馈、价格确认等场景生成自然跟进文案。",
  },
];

const skillDefinitions = [
  "按钮驱动而不是空白对话框，让传统业务员一眼知道自己可以做什么。",
  "所有输出都回到客户状态、买家角色和渠道，不输出与场景无关的长篇大论。",
  "先给推荐动作，再给具体文案，最后补风险提醒，避免业务员误以为可以直接全自动群发。",
];

const promptTemplates = {
  "first-touch": "我们是做床品面料的中国工厂，想联系德国进口商，帮我写一封首封开发信，同时给一版 WhatsApp 简短版。",
  "intent-read": "客户刚回复说价格有点高，而且 MOQ 偏高。请帮我判断他的真实意图，并给业务员下一步建议。",
  "reply-plan": "客户问我们能不能更低 MOQ、能不能更快交货。请给我一版既不失去机会、又不过度承诺的回复。",
  "follow-up": "客户 5 天没回，我想发一个不打扰但能推动反馈的跟进消息。",
};

const managementCards = [
  { label: "新增推荐买家", value: "12", note: "今天 AI 推荐进入工作台的买家数" },
  { label: "已联系", value: "7", note: "业务员已经发出首轮开发动作" },
  { label: "有回复", value: "3", note: "客户产生了明确反馈，可继续推进" },
  { label: "超时未跟进", value: "2", note: "需要老板或主管关注是否拖延" },
];

const seedLeads = [
  {
    id: "lead-1",
    name: "Nordic Textile Importers AS",
    country: "丹麦",
    industry: "家纺进口 / 批发",
    buyerType: "进口商",
    status: "待联系",
    region: "欧洲",
    channel: "Email",
    source: "Google + 展会目录",
    score: 91,
    website: "nordic-textile.dk",
    contact: "purchasing@nordic-textile.dk",
    products: ["床品面料", "酒店布草", "家居纺织"],
    reason: "该客户主营进口与区域分销，产品线与中国纺织工厂的供给结构匹配，适合从新品类与稳定交期切入。",
    painPoints: [
      "公开信息已证明其做进口分销，但采购负责人层级仍需确认",
      "适合从打样速度与交付稳定性切入，而不是先谈价格",
      "需要补齐近期展会、目录与官网信息之间的一致性",
    ],
    confirms: [
      "是否有明确的 Fabric Buyer 或 Sourcing Manager",
      "其主要销售渠道是线下批发还是直营网店",
      "现阶段更关注新品类还是供应商替换",
      "是否已有明确 MOQ、样品或认证要求",
    ],
    outline: [
      "先确认买家类型与采购角色，不急着直接报价",
      "围绕主力产品线判断是否值得做样品切入",
      "输出 Email + WhatsApp 双版本首触达文案",
      "3 天后若无回复，转入轻量跟进流程",
    ],
    profile: {
      买家类型: "欧洲家纺进口商",
      主要市场: "北欧区域分销",
      适配产品: "床品与酒店布草",
      推荐渠道: "Email 首触达 + WhatsApp 备用",
      当前判断: "值得进入首批重点开发名单",
    },
  },
  {
    id: "lead-2",
    name: "Verde Home Fabrics",
    country: "西班牙",
    industry: "品牌零售 / 批发",
    buyerType: "品牌方",
    status: "已联系",
    region: "南欧",
    channel: "LinkedIn",
    source: "官网 + LinkedIn",
    score: 82,
    website: "verdehomefabrics.es",
    contact: "hello@verdehomefabrics.es",
    products: ["环保家纺", "有机棉", "定制包装"],
    reason: "品牌属性明显，适合从可持续材料和定制打样能力切入，避免把沟通做成标准批发话术。",
    painPoints: [
      "品牌方更在意风格与材料证明，而不是最低价格",
      "当前联系人是否具备决策权尚未确认",
      "需要给业务员一个更偏品牌合作的说法",
    ],
    confirms: [
      "是否看重可持续认证或环保面料",
      "是否能接受试单与季度上新合作",
      "现阶段主要缺货还是在找替代供应商",
      "是否更习惯 Email 还是 LinkedIn 沟通",
    ],
    outline: [
      "回看第一轮触达内容，确认是否过于销售化",
      "补一版更品牌合作导向的跟进文案",
      "如 2 天无回复，可转样品建议或产品册简介",
    ],
    profile: {
      买家类型: "欧洲品牌方",
      主要市场: "西班牙与葡语区",
      适配产品: "环保家纺与定制合作",
      推荐渠道: "LinkedIn + Email",
      当前判断: "可继续观察，但需要更品牌化表达",
    },
  },
  {
    id: "lead-3",
    name: "Desert Linen Trading",
    country: "阿联酋",
    industry: "酒店供应 / 批发",
    buyerType: "批发商",
    status: "待跟进",
    region: "中东",
    channel: "WhatsApp",
    source: "行业目录 + 展会名单",
    score: 76,
    website: "desertlinen.ae",
    contact: "sales@desertlinen.ae",
    products: ["酒店布草", "毛巾", "床单套件"],
    reason: "酒店供应型买家通常对稳定交付、打样速度和定制规格更敏感，适合走快速样品和交期承诺边界清晰的路线。",
    painPoints: [
      "客户曾询问过 MOQ，但没有继续回复",
      "需要判断其是批发转售还是项目制采购",
      "如果没有下一步，业务员容易把它挂起不管",
    ],
    confirms: [
      "是否采购酒店项目大单还是长期补货",
      "当前 MOQ、交期和样品哪个更关键",
      "对方是否接受 WhatsApp 作为主要沟通渠道",
    ],
    outline: [
      "先发一条轻量跟进消息，确认对方当前最关心的变量",
      "如果仍无回复，再补充酒店类成功案例或产品图册",
      "超过 7 天未回则降级到低优先级池",
    ],
    profile: {
      买家类型: "酒店供应型批发商",
      主要市场: "海湾区域酒店与批发渠道",
      适配产品: "酒店布草、毛巾套件",
      推荐渠道: "WhatsApp 轻跟进",
      当前判断: "存在机会，但需要更清晰的下一步动作",
    },
  },
];

const viewMeta = {
  overview: {
    eyebrow: "MVP 产品方案",
    title: "AI 外贸业务员",
    description: "第一版不做重平台，只把获客、沟通、推进与监督四件事做成一个闭环。",
  },
  engine: {
    eyebrow: "模块一",
    title: "获客引擎",
    description: "从供应商画像开始，逐层进入真实买家数据源，再把联系人与首轮动作收敛到业务员可执行的结果。",
  },
  copilot: {
    eyebrow: "模块二",
    title: "外贸 ChatGPT",
    description: "中文输入，专业外语输出；重点不是聊天，而是把写信、回复、跟进变成可点击的动作。",
  },
  pipeline: {
    eyebrow: "模块三",
    title: "客户沟通窗口",
    description: "每个买家都要有一个可持续推进的窗口，让业务员知道聊到哪一步、下一步做什么。",
  },
  dashboard: {
    eyebrow: "模块四",
    title: "老板监督表",
    description: "老板不需要懂细节，只需要看动作有没有发生、卡点分布在哪、是否值得继续投入。",
  },
  settings: {
    eyebrow: "设置与部署",
    title: "搜索配置",
    description: "搜索配置和部署状态都收口在这里，不占用业务员的主操作界面。",
  },
};

const state = {
  leads: JSON.parse(JSON.stringify(seedLeads)),
  activeLeadId: seedLeads[0].id,
  activeSkill: copilotModes[0].key,
  activeView: "overview",
  activeDetailTab: "overview",
  googleApiKey: localStorage.getItem(STORAGE_KEYS.googleApiKey) || "",
  googleCx: localStorage.getItem(STORAGE_KEYS.googleCx) || "",
  discoveryResults: [],
  discoveryLoading: false,
  globalLeadFilter: "",
};

const els = {
  heroMetrics: document.querySelector("#heroMetrics"),
  personaStack: document.querySelector("#personaStack"),
  goalStack: document.querySelector("#goalStack"),
  moduleGrid: document.querySelector("#moduleGrid"),
  loopList: document.querySelector("#loopList"),
  overviewLeadList: document.querySelector("#overviewLeadList"),
  weeklyActions: document.querySelector("#weeklyActions"),
  googleStatusBadge: document.querySelector("#googleStatusBadge"),
  engineSteps: document.querySelector("#engineSteps"),
  searchResults: document.querySelector("#searchResults"),
  discoverySummary: document.querySelector("#discoverySummary"),
  skillToolbar: document.querySelector("#skillToolbar"),
  scenarioSwitcher: document.querySelector("#scenarioSwitcher"),
  assistantOutput: document.querySelector("#assistantOutput"),
  promptInput: document.querySelector("#promptInput"),
  activeSkillLabel: document.querySelector("#activeSkillLabel"),
  activeScenarioLabel: document.querySelector("#activeScenarioLabel"),
  skillDefinitions: document.querySelector("#skillDefinitions"),
  workspaceLeadList: document.querySelector("#workspaceLeadList"),
  leadPoolCount: document.querySelector("#leadPoolCount"),
  detailName: document.querySelector("#detailName"),
  detailSubtitle: document.querySelector("#detailSubtitle"),
  detailSummary: document.querySelector("#detailSummary"),
  profileInfo: document.querySelector("#profileInfo"),
  painPoints: document.querySelector("#painPoints"),
  productTags: document.querySelector("#productTags"),
  productReason: document.querySelector("#productReason"),
  confirmList: document.querySelector("#confirmList"),
  visitOutline: document.querySelector("#visitOutline"),
  followUpActions: document.querySelector("#followUpActions"),
  metricsGrid: document.querySelector("#metricsGrid"),
  bossBoard: document.querySelector("#bossBoard"),
  bottleneckStack: document.querySelector("#bottleneckStack"),
  funnelStack: document.querySelector("#funnelStack"),
  managerActions: document.querySelector("#managerActions"),
  googleApiKeyInput: document.querySelector("#googleApiKeyInput"),
  googleCxInput: document.querySelector("#googleCxInput"),
  configStatusBoard: document.querySelector("#configStatusBoard"),
  sidebarStatus: document.querySelector("#sidebarStatus"),
  viewTitle: document.querySelector("#viewTitle"),
  viewEyebrow: document.querySelector("#viewEyebrow"),
  viewDescription: document.querySelector("#viewDescription"),
  globalLeadSearch: document.querySelector("#globalLeadSearch"),
  companyInput: document.querySelector("#companyInput"),
  countryInput: document.querySelector("#countryInput"),
  industryInput: document.querySelector("#industryInput"),
  siteInput: document.querySelector("#siteInput"),
};

function getVisibleLeads() {
  const keyword = state.globalLeadFilter.trim().toLowerCase();
  if (!keyword) return state.leads;
  return state.leads.filter((lead) =>
    [
      lead.name,
      lead.country,
      lead.industry,
      lead.buyerType,
      lead.status,
      lead.website,
      ...(lead.products || []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(keyword)
  );
}

function getActiveLead() {
  return state.leads.find((lead) => lead.id === state.activeLeadId) ?? state.leads[0];
}

function getSkillName(key) {
  return copilotModes.find((item) => item.key === key)?.name || key;
}

function leadCardTemplate(lead) {
  return `
    <button class="lead-card ${lead.id === state.activeLeadId ? "active" : ""}" data-lead-id="${lead.id}">
      <div class="lead-topline">${lead.region} · ${lead.status}</div>
      <div class="lead-name">${lead.name}</div>
      <div class="lead-meta">${lead.country} · ${lead.buyerType} · ${lead.channel}</div>
      <div class="lead-tags">
        <span class="pill">匹配分 ${lead.score}</span>
        <span class="pill">${lead.products?.[0] || "待判断"}</span>
      </div>
    </button>
  `;
}

function renderOverview() {
  els.heroMetrics.innerHTML = heroMetrics
    .map(
      (item) => `
        <div class="goal-card">
          <strong>${item.value}</strong>
          <p>${item.label}</p>
          <p>${item.desc}</p>
        </div>
      `
    )
    .join("");

  els.personaStack.innerHTML = personas
    .map(
      (item) => `
        <div class="persona-card">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
        </div>
      `
    )
    .join("");

  els.goalStack.innerHTML = goals
    .map(
      (item) => `
        <div class="goal-card">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
        </div>
      `
    )
    .join("");

  els.moduleGrid.innerHTML = modules
    .map(
      (item) => `
        <article class="module-card">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
          <div class="meta-row">
            <span class="pill">${item.value}</span>
          </div>
        </article>
      `
    )
    .join("");

  els.loopList.innerHTML = loopSteps
    .map(
      (item, index) => `
        <div class="loop-card">
          <div class="loop-index">0${index + 1}</div>
          <div>
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderLeadLists() {
  const visibleLeads = getVisibleLeads();
  const content = visibleLeads.length
    ? visibleLeads.map(leadCardTemplate).join("")
    : `<div class="empty-state">没有匹配结果。可以到“获客引擎”里搜索或导入新的买家。</div>`;

  els.overviewLeadList.innerHTML = content;
  els.workspaceLeadList.innerHTML = content;
  els.leadPoolCount.textContent = `${state.leads.length} 个买家`;
}

function renderWeeklyActions() {
  const lead = getActiveLead();
  const actions = [
    {
      title: `先推进 ${lead.name}`,
      desc: `把“${lead.painPoints[0]}”先变成可被验证的事实，不急着直接报价。`,
    },
    {
      title: "把推荐动作做成模板",
      desc: "围绕首封开发信、价格回复、跟进消息，先跑通 3 个最常用场景按钮。",
    },
    {
      title: "让老板看得到卡点",
      desc: "不要只展示总线索数，要明确区分已联系、有回复、超时未跟进和卡点类型。",
    },
  ];

  els.weeklyActions.innerHTML = actions
    .map(
      (item, index) => `
        <div class="loop-card">
          <div class="loop-index">P${index}</div>
          <div>
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderEngine() {
  const configured = Boolean(state.googleApiKey && state.googleCx);
  els.googleStatusBadge.textContent = configured ? "已配置" : "未配置";
  els.googleStatusBadge.classList.toggle("active", configured);

  els.engineSteps.innerHTML = engineSteps
    .map(
      (item) => `
        <div class="engine-step">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
        </div>
      `
    )
    .join("");

  if (state.discoveryLoading) {
    els.discoverySummary.textContent = "正在通过 Google Custom Search 查询候选买家...";
    els.searchResults.innerHTML = `<div class="empty-state">正在搜索，请稍候。</div>`;
    return;
  }

  if (!state.discoveryResults.length) {
    els.searchResults.innerHTML = `<div class="empty-state">还没有候选买家。先输入产品关键词、目标市场和买家类型，再开始搜索。</div>`;
    els.discoverySummary.textContent = configured
      ? "建议优先使用产品词 + 国家 + buyer type 的组合，不要只搜一个过宽的行业词。"
      : "搜索配置未完成时，你仍可以先加载演示结果联调页面与流程。";
    return;
  }

  els.searchResults.innerHTML = state.discoveryResults
    .map(
      (result, index) => `
        <div class="result-card">
          <div class="result-meta">候选 ${index + 1} · ${result.displayLink || "公开网页"} · ${result.buyerType || "待判断类型"}</div>
          <h4>${result.title}</h4>
          <a href="${result.link}" target="_blank" rel="noreferrer">${result.link}</a>
          <p>${result.snippet}</p>
          <div class="result-actions">
            <button class="primary-btn small" data-import-result="${result.id}">导入客户窗口</button>
            <button class="ghost-btn small" data-open-link="${result.id}">打开来源</button>
          </div>
        </div>
      `
    )
    .join("");
}

function renderSkills() {
  const activeLead = getActiveLead();

  els.skillToolbar.innerHTML = copilotModes
    .map(
      (item) => `
        <button class="skill-card ${item.key === state.activeSkill ? "active" : ""}" data-skill-key="${item.key}">
          <strong>${item.name}</strong>
          <small>${item.summary}</small>
        </button>
      `
    )
    .join("");

  els.scenarioSwitcher.innerHTML = [
    "首轮开发",
    "回复问题",
    "催客户反馈",
    "老板要看进展",
  ]
    .map(
      (item) => `
        <div class="scenario-chip ${item === "首轮开发" ? "active" : ""}">
          <strong>${item}</strong>
          <small>围绕当前客户自动收敛表达</small>
        </div>
      `
    )
    .join("");

  els.skillDefinitions.innerHTML = skillDefinitions
    .map(
      (text) => `
        <div class="definition-card">
          <strong>设计原则</strong>
          <p>${text}</p>
        </div>
      `
    )
    .join("");

  els.activeSkillLabel.textContent = getSkillName(state.activeSkill);
  els.activeScenarioLabel.textContent = activeLead.name;
}

function buildAssistantContent(lead, skillKey, prompt) {
  const evidence = `
    <div class="meta-row">
      <span class="pill">${lead.country}</span>
      <span class="pill">${lead.buyerType}</span>
      <span class="pill">${lead.channel}</span>
    </div>
  `;

  if (skillKey === "first-touch") {
    return `
      <section>
        <h4>首轮开发策略</h4>
        <p>${lead.name} 更适合从“${lead.products[0]}”切入，而不是直接泛泛介绍工厂实力。首轮目标是让对方愿意继续对话，而不是一次性把所有产品都讲完。</p>
        ${evidence}
      </section>
      <section>
        <h5>Email 版</h5>
        <p>Hi ${lead.name}, we focus on ${lead.products[0]} and related textile categories for importers and distributors. I noticed your business is active in ${lead.country}, so I wanted to share a few styles that may fit your current sourcing range. If relevant, I can send a short product sheet and sample suggestion for review.</p>
      </section>
      <section>
        <h5>WhatsApp 简版</h5>
        <p>Hello, we are a China-based textile factory working on ${lead.products[0]}. Not sure if this fits your current sourcing plan, but if useful I can send a short product sheet and a few sample options.</p>
      </section>
      <section>
        <h5>业务员提醒</h5>
        <ul>
          <li>第一封信不谈复杂价格体系，只给对话理由</li>
          <li>如果 3 天未回，转为轻量跟进而不是重复贴长邮件</li>
          <li>优先确认对方是否真是采购角色</li>
        </ul>
      </section>
      <section>
        <h5>你的输入</h5>
        <p>${prompt}</p>
      </section>
    `;
  }

  if (skillKey === "intent-read") {
    return `
      <section>
        <h4>客户回复判断</h4>
        <p>如果客户重点提价格或 MOQ，往往不只是“压价”，而是在试探你们是否适合成为长期供应商。先判断真实意图，再决定是否继续给出条件。</p>
        ${evidence}
      </section>
      <section>
        <h5>建议拆解</h5>
        <ul>
          <li>价格问题：说明对方在做初筛，尚未进入高意向深聊</li>
          <li>MOQ 问题：可能在测试试单空间，适合给区间而不是死答案</li>
          <li>交期问题：通常意味着已有项目节奏，值得继续推进</li>
        </ul>
      </section>
      <section>
        <h5>业务员下一步</h5>
        <p>先回一个“可谈但有边界”的版本，保持对话继续，而不是为了留住客户立刻过度承诺。</p>
      </section>
    `;
  }

  if (skillKey === "reply-plan") {
    return `
      <section>
        <h4>回复策略</h4>
        <p>这类回复应该先给立场，再给条件和边界。不要把 MOQ、交期、价格都一次性讲死，否则后面没有回旋空间。</p>
        ${evidence}
      </section>
      <section>
        <h5>建议回复结构</h5>
        <ol>
          <li>先确认客户需求已收到</li>
          <li>说明哪些条件可以谈、哪些需要进一步确认</li>
          <li>把沟通引回样品、规格或目标量级</li>
        </ol>
      </section>
      <section>
        <h5>示例回复</h5>
        <p>We can review MOQ and delivery timing based on your target quantity and fabric specification. To avoid giving you an inaccurate promise too early, could you share the approximate volume and preferred timeline first? Then I can suggest the most realistic option for both sample and bulk order.</p>
      </section>
    `;
  }

  return `
    <section>
      <h4>跟进建议</h4>
      <p>对 ${lead.name} 这类客户，跟进要自然、短、带明确目的，避免像群发提醒。重点是让对方只需要回复一个最小问题。</p>
      ${evidence}
    </section>
    <section>
      <h5>建议消息</h5>
      <p>Hello, just wanted to follow up on the previous message in case the timing was busy. Would it be more helpful if I send a short product sheet or sample suggestion first?</p>
    </section>
    <section>
      <h5>继续推进条件</h5>
      <ul>
        <li>若对方已看过但未回，可转“样品建议”而不是继续重复自我介绍</li>
        <li>若 7 天仍无回复，降低优先级，避免业务员无限消耗时间</li>
      </ul>
    </section>
  `;
}

function renderAssistant() {
  const lead = getActiveLead();
  const prompt = els.promptInput.value.trim() || promptTemplates[state.activeSkill];
  els.assistantOutput.innerHTML = buildAssistantContent(lead, state.activeSkill, prompt);
}

function renderDetail() {
  const lead = getActiveLead();

  els.detailName.textContent = lead.name;
  els.detailSubtitle.textContent = `${lead.country} · ${lead.industry} · 来源 ${lead.source}`;
  els.detailSummary.innerHTML = `
    <div class="metric-card soft"><span>买家类型</span><strong>${lead.buyerType}</strong></div>
    <div class="metric-card soft"><span>推荐渠道</span><strong>${lead.channel}</strong></div>
    <div class="metric-card soft"><span>匹配评分</span><strong>${lead.score}</strong></div>
    <div class="metric-card soft"><span>当前状态</span><strong>${lead.status}</strong></div>
  `;

  els.profileInfo.innerHTML = Object.entries(lead.profile)
    .map(
      ([key, value]) => `
        <dt>${key}</dt>
        <dd>${value}</dd>
      `
    )
    .join("");

  els.painPoints.innerHTML = lead.painPoints.map((item) => `<li>${item}</li>`).join("");
  els.productTags.innerHTML = lead.products.map((item) => `<span class="tag">${item}</span>`).join("");
  els.productReason.textContent = lead.reason;
  els.confirmList.innerHTML = lead.confirms.map((item) => `<span class="pill">${item}</span>`).join("");
  els.visitOutline.innerHTML = lead.outline.map((item) => `<li>${item}</li>`).join("");
  els.followUpActions.innerHTML = `
    <div class="loop-card">
      <div class="loop-index">01</div>
      <div>
        <strong>先确认买家角色</strong>
        <p>如果对方不是采购或业务决策角色，再好的文案也很难推进。</p>
      </div>
    </div>
    <div class="loop-card">
      <div class="loop-index">02</div>
      <div>
        <strong>给最小下一步</strong>
        <p>优先引导对方回复一个简单问题，例如是否愿意看产品册、样品或报价区间。</p>
      </div>
    </div>
    <div class="loop-card">
      <div class="loop-index">03</div>
      <div>
        <strong>沉淀到老板监督表</strong>
        <p>每个客户都要留下“当前状态 + 卡点 + 下一步”，避免业务员私域化管理。</p>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const statusMap = {
    待联系: state.leads.filter((item) => item.status === "待联系").length,
    已联系: state.leads.filter((item) => item.status === "已联系").length,
    待跟进: state.leads.filter((item) => item.status === "待跟进").length,
    重点跟进: state.leads.filter((item) => item.status === "重点跟进").length,
  };

  els.metricsGrid.innerHTML = managementCards
    .map(
      (item) => `
        <div class="metric-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.note}</p>
        </div>
      `
    )
    .join("");

  els.bossBoard.innerHTML = Object.entries(statusMap)
    .map(
      ([key, value]) => `
        <div class="status-cell">
          <strong>${key}</strong>
          <p>${value} 个买家正在这个阶段</p>
        </div>
      `
    )
    .join("");

  const bottlenecks = [
    { title: "价格", count: 3, note: "不要立即降价，先确认量级与规格" },
    { title: "MOQ", count: 2, note: "适合先给试单或区间方案" },
    { title: "无回复", count: 4, note: "先发短跟进，不重复贴长邮件" },
    { title: "样品", count: 1, note: "这是值得优先推进的高意向信号" },
  ];

  els.bottleneckStack.innerHTML = bottlenecks
    .map(
      (item) => `
        <div class="bottleneck-card">
          <div>
            <strong>${item.title}</strong>
            <span>${item.note}</span>
          </div>
          <div class="bottleneck-value">
            <strong>${item.count}</strong>
            <span>个客户</span>
          </div>
        </div>
      `
    )
    .join("");

  const funnel = [
    { title: "原始候选", value: 100 },
    { title: "产品匹配过滤", value: 30 },
    { title: "真实性验证", value: 15 },
    { title: "联系方式补全", value: 8 },
    { title: "业务员执行", value: 5 },
  ];

  els.funnelStack.innerHTML = funnel
    .map(
      (item, index) => `
        <div class="funnel-card">
          <div class="meta-row">
            <div class="funnel-index">0${index + 1}</div>
            <div>
              <strong>${item.title}</strong>
              <span>让业务员看到的是筛完之后的结果，而不是原始数据。</span>
            </div>
          </div>
          <div class="funnel-value">
            <strong>${item.value}</strong>
            <span>个</span>
          </div>
        </div>
      `
    )
    .join("");

  const managerActions = [
    "如果无回复客户持续堆积，先检查业务员是否真的发出了第一轮动作。",
    "如果价格问题过多，说明当前首轮筛选还不够精准，推荐理由需要更聚焦。",
    "如果样品请求开始增加，说明产品开始形成真实吸引力，老板应该关注供应链承接能力。",
  ];

  els.managerActions.innerHTML = managerActions
    .map(
      (item, index) => `
        <div class="loop-card">
          <div class="loop-index">M${index + 1}</div>
          <div>
            <strong>管理提醒</strong>
            <p>${item}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderSettings() {
  els.googleApiKeyInput.value = state.googleApiKey;
  els.googleCxInput.value = state.googleCx;
  els.sidebarStatus.textContent = state.googleCx
    ? "搜索配置已接入，可继续优化结果质量"
    : "页面骨架已重构，等待补齐搜索配置";

  const statusItems = [
    {
      title: "搜索专用 API Key",
      value: state.googleApiKey ? "已保存到当前浏览器" : "未配置",
    },
    {
      title: "Search Engine ID（cx）",
      value: state.googleCx || "未配置",
    },
    {
      title: "GitHub Pages",
      value: "当前站点已发布，可继续覆盖更新",
    },
    {
      title: "下一步建议",
      value: "正式版建议把 Google 搜索迁到后端代理，避免前端暴露 key",
    },
  ];

  els.configStatusBoard.innerHTML = statusItems
    .map(
      (item) => `
        <div class="status-cell">
          <strong>${item.title}</strong>
          <p>${item.value}</p>
        </div>
      `
    )
    .join("");
}

function renderActiveView() {
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === state.activeView);
  });

  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === state.activeView);
  });

  const meta = viewMeta[state.activeView];
  els.viewEyebrow.textContent = meta.eyebrow;
  els.viewTitle.textContent = meta.title;
  els.viewDescription.textContent = meta.description;
}

function renderDetailTabs() {
  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.detailTab === state.activeDetailTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.detailPanel === state.activeDetailTab);
  });
}

function getSearchQuery() {
  const product = els.companyInput.value.trim();
  const market = els.countryInput.value.trim();
  const buyerType = els.industryInput.value.trim();
  const site = els.siteInput.value.trim();

  return [
    product,
    buyerType,
    market,
    "importer wholesaler buyer sourcing",
    site ? `site:${site}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

async function searchGoogleLeads() {
  const query = getSearchQuery();
  if (!query) {
    els.discoverySummary.textContent = "先补齐产品关键词、目标市场和买家类型，再开始搜索。";
    return;
  }

  if (!(state.googleApiKey && state.googleCx)) {
    els.discoverySummary.textContent = "搜索配置未完成，当前只能先使用演示结果。";
    loadDemoResults();
    return;
  }

  state.discoveryLoading = true;
  renderEngine();

  try {
    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.set("key", state.googleApiKey);
    url.searchParams.set("cx", state.googleCx);
    url.searchParams.set("q", query);
    url.searchParams.set("num", "10");

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      const message = data?.error?.message || `Google API 请求失败：${response.status}`;
      throw new Error(message);
    }

    state.discoveryResults = (data.items || []).map((item, index) => ({
      id: `google-${Date.now()}-${index}`,
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      displayLink: item.displayLink,
      buyerType: els.industryInput.value.trim() || "待判断",
      country: els.countryInput.value.trim() || "待识别",
      industry: els.companyInput.value.trim() || "待识别",
    }));

    els.discoverySummary.textContent = state.discoveryResults.length
      ? `已拿到 ${state.discoveryResults.length} 个候选买家。下一步不是全部导入，而是优先挑最有理由联系的对象。`
      : "没有拿到结果，建议缩小产品词或换一个更具体的买家类型。";
  } catch (error) {
    state.discoveryResults = [];
    els.discoverySummary.textContent = `搜索失败：${error.message}`;
  } finally {
    state.discoveryLoading = false;
    renderEngine();
  }
}

function loadDemoResults() {
  const product = els.companyInput.value.trim() || "bedding";
  const market = els.countryInput.value.trim() || "Germany";
  const buyerType = els.industryInput.value.trim() || "importer";

  state.discoveryResults = [
    {
      id: `demo-${Date.now()}-1`,
      title: `${market} ${product} importer profile`,
      link: "https://example.com/importer-profile",
      snippet: "公开网页显示该企业主营进口和区域分销，适合继续确认采购角色与联系方式路径。",
      displayLink: "example.com",
      buyerType,
      country: market,
      industry: product,
    },
    {
      id: `demo-${Date.now()}-2`,
      title: `${market} wholesale home textile buyer list`,
      link: "https://example.com/wholesale-buyer",
      snippet: "目录型网页适合拿来做第二层候选池，再补充官网与 LinkedIn 交叉验证。",
      displayLink: "example.com",
      buyerType,
      country: market,
      industry: product,
    },
  ];

  els.discoverySummary.textContent = "当前是演示模式。你可以先验证页面流程，等真实搜索返回后再替换成线上结果。";
  renderEngine();
}

function inferDomain(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "unknown-domain";
  }
}

function importSearchResultToLead(resultId) {
  const result = state.discoveryResults.find((item) => item.id === resultId);
  if (!result) return;

  const newLead = {
    id: `lead-${Date.now()}`,
    name: result.title,
    country: result.country || "待识别",
    industry: result.industry || "待识别",
    buyerType: result.buyerType || "待判断",
    status: "待联系",
    region: result.country || "全球",
    channel: "Email",
    source: `Google 搜索 · ${result.displayLink || "公开网页"}`,
    score: 68,
    website: inferDomain(result.link),
    contact: "待补齐",
    products: ["待补产品判断", "待补买家意图", "待补渠道建议"],
    reason: "当前只完成了第一轮发现，具备被推进的理由，但还没有形成完整的联系人与交易链路证据。",
    painPoints: [
      "只知道公司层级信息，还不知道具体采购角色",
      "需要交叉验证官网、LinkedIn 与目录页信息是否一致",
      "还没有明确推荐渠道与首轮沟通目标",
    ],
    confirms: [
      "这个买家是进口商、品牌方还是批发商",
      "是否能找到采购经理或产品开发角色",
      "首轮触达更适合 Email、LinkedIn 还是 Contact Form",
      "是否有值得引用的公开业务线索",
    ],
    outline: [
      "用最小时间确认这个线索值不值得继续投放精力",
      "补联系人与渠道路径",
      "生成首轮开发文案",
      "把它推入客户窗口，避免散落在搜索结果里",
    ],
    profile: {
      买家类型: "待进一步确认",
      主要市场: result.country || "待确认",
      适配产品: result.industry || "待确认",
      推荐渠道: "待确认",
      当前判断: "可进入待联系池，但还不够成熟",
    },
  };

  state.leads.unshift(newLead);
  state.activeLeadId = newLead.id;
  state.activeView = "pipeline";
  state.activeDetailTab = "overview";
  renderAll();
}

function openGoogleSearchInNewTab() {
  const query = getSearchQuery();
  if (!query) return;
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
}

function saveSettings() {
  state.googleApiKey = els.googleApiKeyInput.value.trim();
  state.googleCx = els.googleCxInput.value.trim();
  localStorage.setItem(STORAGE_KEYS.googleApiKey, state.googleApiKey);
  localStorage.setItem(STORAGE_KEYS.googleCx, state.googleCx);
  renderSettings();
  renderEngine();
}

function clearSettings() {
  state.googleApiKey = "";
  state.googleCx = "";
  localStorage.removeItem(STORAGE_KEYS.googleApiKey);
  localStorage.removeItem(STORAGE_KEYS.googleCx);
  renderSettings();
  renderEngine();
}

function addSampleLead() {
  const sample = JSON.parse(JSON.stringify(seedLeads[0]));
  sample.id = `lead-${Date.now()}`;
  sample.name = `${sample.name} · Sample`;
  sample.status = "重点跟进";
  sample.score = 95;
  state.leads.unshift(sample);
  state.activeLeadId = sample.id;
  renderAll();
}

function renderAll() {
  renderActiveView();
  renderOverview();
  renderLeadLists();
  renderWeeklyActions();
  renderEngine();
  renderSkills();
  renderAssistant();
  renderDetail();
  renderDashboard();
  renderSettings();
  renderDetailTabs();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) {
    state.activeView = nav.dataset.view;
    renderAll();
    return;
  }

  const leadButton = event.target.closest("[data-lead-id]");
  if (leadButton) {
    state.activeLeadId = leadButton.dataset.leadId;
    renderAll();
    return;
  }

  const skillButton = event.target.closest("[data-skill-key]");
  if (skillButton) {
    state.activeSkill = skillButton.dataset.skillKey;
    els.promptInput.value = promptTemplates[state.activeSkill];
    renderAll();
    return;
  }

  const tabButton = event.target.closest("[data-detail-tab]");
  if (tabButton) {
    state.activeDetailTab = tabButton.dataset.detailTab;
    renderDetailTabs();
    return;
  }

  const importButton = event.target.closest("[data-import-result]");
  if (importButton) {
    importSearchResultToLead(importButton.dataset.importResult);
    return;
  }

  const openLinkButton = event.target.closest("[data-open-link]");
  if (openLinkButton) {
    const result = state.discoveryResults.find((item) => item.id === openLinkButton.dataset.openLink);
    if (result) {
      window.open(result.link, "_blank", "noopener,noreferrer");
    }
  }
});

document.querySelector("#fillPromptBtn").addEventListener("click", () => {
  els.promptInput.value = promptTemplates[state.activeSkill];
  renderAssistant();
});

document.querySelector("#generateBtn").addEventListener("click", renderAssistant);

document.querySelector("#markContactedBtn").addEventListener("click", () => {
  const lead = getActiveLead();
  lead.status = "已联系";
  renderAll();
});

document.querySelector("#followBtn").addEventListener("click", () => {
  const lead = getActiveLead();
  lead.status = "重点跟进";
  lead.score = Math.min(99, lead.score + 4);
  renderAll();
});

document.querySelector("#discoveryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  await searchGoogleLeads();
});

document.querySelector("#fillSearchExampleBtn").addEventListener("click", () => {
  els.companyInput.value = "bedding fabric";
  els.countryInput.value = "Germany";
  els.industryInput.value = "importer";
  els.siteInput.value = "linkedin.com/company";
});

document.querySelector("#useDemoResultsBtn").addEventListener("click", loadDemoResults);
document.querySelector("#openGoogleBtn").addEventListener("click", openGoogleSearchInNewTab);

document.querySelector("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveSettings();
});

document.querySelector("#clearSettingsBtn").addEventListener("click", clearSettings);
document.querySelector("#openSettingsBtn").addEventListener("click", () => {
  state.activeView = "settings";
  renderAll();
});
document.querySelector("#addSampleLeadBtn").addEventListener("click", addSampleLead);

els.globalLeadSearch.addEventListener("input", (event) => {
  state.globalLeadFilter = event.target.value;
  renderLeadLists();
});

els.promptInput.value = promptTemplates[state.activeSkill];
renderAll();
const STORAGE_KEYS = {
  googleApiKey: "lead_hunter_google_api_key",
  googleCx: "lead_hunter_google_cx",
};

const workflowSteps = [
  { title: "客户线索输入", desc: "录入公司、地区、行业与目标关键词" },
  { title: "Google 搜索发现", desc: "在公开网页中捕获潜在线索" },
  { title: "线索导入加工", desc: "进入工作台补齐画像和判断" },
  { title: "Agent 输出建议", desc: "切换技能生成销售建议" },
  { title: "会后沉淀复用", desc: "沉淀智库、案例和话术模板" },
];

const seedLeads = [
  {
    id: "lead-1",
    name: "Nordic Textile Importers AS",
    country: "丹麦",
    industry: "纺织品进口 / 批发",
    size: "200-500 人",
    status: "待准备拜访",
    website: "nordic-textile.dk",
    contact: "purchasing@nordic-textile.dk",
    phone: "+45 33 12 34 56",
    source: "DuckDuckGo / 展会名单",
    score: 86,
    region: "欧洲",
    products: ["跨境收款", "多币种结算", "订单分账"],
    reason:
      "该客户存在跨境采购与欧洲区域分销链路，适合从多币种收款、结算效率与账务透明度切入，再补充订单分账能力。",
    painPoints: [
      "跨境采购货款与销售回款币种不统一",
      "多门店 / 多渠道账期与对账成本偏高",
      "欧洲经销商返佣与分账链路可能复杂",
    ],
    outline: [
      "确认其采购链路中欧元、美元、人民币的使用比例",
      "询问现有收款入口、ERP 或财务系统的对接现状",
      "切入账务合并、清分效率与对账准确性",
      "补问经销商返佣、供应商付款与账期管理规则",
    ],
    confirms: [
      "当前线上收款渠道是否分散在多个 PSP",
      "是否已有统一财务对账中台",
      "返佣规则是按订单、区域还是季度结算",
      "是否存在本地 VAT 或合规侧要求",
    ],
    scenario: "客户拜访前客户分析",
    profile: {
      客户定位: "北欧纺织品进口商，面向区域批发商与家居渠道",
      商业模式: "B2B 批发 + 部分直营网店",
      采购链路: "亚洲供应商采购，欧洲本地分销",
      决策角色: "采购负责人 + 财务经理",
      机会判断: "适合作为多币种收付与分账场景切入样板",
    },
  },
  {
    id: "lead-2",
    name: "Skyline Auto Parts LLC",
    country: "阿联酋",
    industry: "汽配贸易",
    size: "100-200 人",
    status: "方案判断中",
    website: "skyline-autoparts.ae",
    contact: "sales@skyline-autoparts.ae",
    phone: "+971 4 555 9087",
    source: "Google Maps / LinkedIn",
    score: 78,
    region: "中东",
    products: ["聚合收款", "经销商分账", "账务对账"],
    reason:
      "该客户可能同时经营批发和维修网络，产品切入点应围绕多支付方式并存、门店执行不统一和后续对账管理问题。",
    painPoints: [
      "线下门店与线上分销收款路径不一致",
      "代理商返点与维修服务费拆分繁琐",
      "财务对账与门店执行口径可能不统一",
    ],
    outline: [
      "确认直营网点与代理商体系的比例",
      "区分配件销售、维修服务、会员服务等不同收款场景",
      "补问门店执行与财务对账之间的主要卡点",
      "用账务统一与清分规则解释方案价值",
    ],
    confirms: [
      "直营网点是否独立结算",
      "售后维修服务是否需要二次分账",
      "是否已有 CRM 或 DMS 可对接",
      "当前对账靠人工 Excel 还是系统化处理",
    ],
    scenario: "客户场景到产品组合",
    profile: {
      客户定位: "区域汽配贸易商，覆盖批发与售后服务网络",
      商业模式: "门店零售 + 渠道分销 + 维修服务",
      采购链路: "本地仓配 + 海外补货",
      决策角色: "渠道负责人 + 财务负责人",
      机会判断: "适合从聚合收款与分账规则切入",
    },
  },
  {
    id: "lead-3",
    name: "Verde Wellness Supply",
    country: "西班牙",
    industry: "健康消费品",
    size: "50-100 人",
    status: "待模拟演练",
    website: "verdewellness.es",
    contact: "hello@verdewellness.es",
    phone: "+34 91 322 4491",
    source: "行业展会 / 官网",
    score: 74,
    region: "南欧",
    products: ["订阅收款", "渠道返佣分账", "会后跟进材料"],
    reason:
      "该客户兼具品牌直营和分销增长诉求，适合从订阅收款、返佣分账和后续营销跟进效率展开对话。",
    painPoints: [
      "直营电商与线下经销返佣并行",
      "会员订阅、复购与退款场景复杂",
      "内部销售对产品边界表述可能不稳定",
    ],
    outline: [
      "确认订阅制产品占比与退款规则",
      "问清直营网店和经销商的收入拆分方式",
      "演示高压问答中如何处理夸大承诺",
      "把后续跟进材料模板提前准备好",
    ],
    confirms: [
      "是否支持月度订阅或自动续费",
      "渠道返佣规则是否固定",
      "退款或拒付处理由谁承担",
      "销售团队是否已有统一话术模板",
    ],
    scenario: "模拟问答与认知纠偏",
    profile: {
      客户定位: "健康消费品品牌方，线上线下同步增长",
      商业模式: "品牌直营 + 经销商网络 + 会员订阅",
      采购链路: "品牌仓 + 本地渠道履约",
      决策角色: "增长负责人 + 商务负责人",
      机会判断: "适合做演练场景与跟进脚本模板示范",
    },
  },
];

const skills = [
  {
    key: "customer-analysis",
    name: "客户分析",
    summary: "客户与市场分析、会前提纲、开场话术、重点问题清单",
  },
  {
    key: "hf-product-match",
    name: "产品匹配",
    summary: "客户场景 → 业务痛点 → 产品组合 → 切入顺序 → 待确认项",
  },
  {
    key: "hf-product-coach",
    name: "模拟问答教练",
    summary: "客户模式 / 产品模式问答演练，支持宽松、标准、高压三档",
  },
  {
    key: "payment-sales-intel",
    name: "销售智库",
    summary: "沉淀行业支付场景、监管关注点、经营痛点和切入话术",
  },
  {
    key: "ppt-master-calw",
    name: "PPT 编排",
    summary: "客户方案大纲、每页表达重点、口播备注和会后文案",
  },
];

const scenarios = [
  "客户拜访前客户分析",
  "客户场景到产品组合",
  "模拟问答与认知纠偏",
];

const promptTemplates = {
  "customer-analysis": "下周要拜访这家客户，帮我准备会前资料包、开场话术和重点问题清单。",
  "hf-product-match": "请输出客户场景、业务痛点、推荐产品组合、切入顺序和待确认项。",
  "hf-product-coach": "请按高压模式模拟客户追问，帮我做问答演练并指出容易讲偏的地方。",
  "payment-sales-intel": "请把这个客户所在行业的支付需求、监管关注点和典型切入话术沉淀成销售智库卡片。",
  "ppt-master-calw": "请生成一版面向客户管理层的方案汇报结构，包含每页核心表达与会后跟进文案。",
};

const viewMeta = {
  overview: {
    eyebrow: "销售工作台",
    title: "AI 外贸拓客助手",
    description: "从客户线索、Google 搜索到会前准备与方案跟进，形成一条可执行链路。",
  },
  discovery: {
    eyebrow: "线索发现",
    title: "Google 客户线索搜索",
    description: "用公开搜索结果发现潜在客户，并一键导入到线索池。",
  },
  workspace: {
    eyebrow: "客户工作台",
    title: "线索加工与推进",
    description: "把搜索结果加工成客户画像、痛点、方案建议和跟进动作。",
  },
  agent: {
    eyebrow: "Agent 工坊",
    title: "销售技能编排台",
    description: "让客户分析、产品匹配、模拟问答、销售智库和 PPT 编排成为可切换模块。",
  },
  settings: {
    eyebrow: "配置中心",
    title: "Google 与 GitHub 发布配置",
    description: "这里管理 Google 搜索参数，以及 GitHub Pages 的部署准备。",
  },
};

const state = {
  leads: JSON.parse(JSON.stringify(seedLeads)),
  activeLeadId: seedLeads[0].id,
  activeSkill: skills[0].key,
  activeScenario: scenarios[0],
  activeView: "overview",
  activeDetailTab: "overview",
  googleApiKey: localStorage.getItem(STORAGE_KEYS.googleApiKey) || "",
  googleCx: localStorage.getItem(STORAGE_KEYS.googleCx) || "",
  discoveryResults: [],
  discoveryLoading: false,
  globalLeadFilter: "",
};

const els = {
  workflowStrip: document.querySelector("#workflowStrip"),
  metricsGrid: document.querySelector("#metricsGrid"),
  overviewLeadList: document.querySelector("#overviewLeadList"),
  weeklyActions: document.querySelector("#weeklyActions"),
  workspaceLeadList: document.querySelector("#workspaceLeadList"),
  detailName: document.querySelector("#detailName"),
  detailSubtitle: document.querySelector("#detailSubtitle"),
  detailSummary: document.querySelector("#detailSummary"),
  profileInfo: document.querySelector("#profileInfo"),
  painPoints: document.querySelector("#painPoints"),
  productTags: document.querySelector("#productTags"),
  productReason: document.querySelector("#productReason"),
  confirmList: document.querySelector("#confirmList"),
  visitOutline: document.querySelector("#visitOutline"),
  followUpActions: document.querySelector("#followUpActions"),
  skillToolbar: document.querySelector("#skillToolbar"),
  scenarioSwitcher: document.querySelector("#scenarioSwitcher"),
  assistantOutput: document.querySelector("#assistantOutput"),
  promptInput: document.querySelector("#promptInput"),
  activeSkillLabel: document.querySelector("#activeSkillLabel"),
  activeScenarioLabel: document.querySelector("#activeScenarioLabel"),
  skillDefinitions: document.querySelector("#skillDefinitions"),
  searchResults: document.querySelector("#searchResults"),
  discoverySummary: document.querySelector("#discoverySummary"),
  googleStatusBadge: document.querySelector("#googleStatusBadge"),
  googleApiKeyInput: document.querySelector("#googleApiKeyInput"),
  googleCxInput: document.querySelector("#googleCxInput"),
  configStatusBoard: document.querySelector("#configStatusBoard"),
  sidebarStatus: document.querySelector("#sidebarStatus"),
  leadPoolCount: document.querySelector("#leadPoolCount"),
  viewTitle: document.querySelector("#viewTitle"),
  viewEyebrow: document.querySelector("#viewEyebrow"),
  viewDescription: document.querySelector("#viewDescription"),
  globalLeadSearch: document.querySelector("#globalLeadSearch"),
  companyInput: document.querySelector("#companyInput"),
  countryInput: document.querySelector("#countryInput"),
  industryInput: document.querySelector("#industryInput"),
  siteInput: document.querySelector("#siteInput"),
};

function getVisibleLeads() {
  const keyword = state.globalLeadFilter.trim().toLowerCase();
  if (!keyword) return state.leads;
  return state.leads.filter((lead) =>
    [
      lead.name,
      lead.country,
      lead.industry,
      lead.status,
      lead.website,
      ...(lead.products || []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(keyword)
  );
}

function getActiveLead() {
  return state.leads.find((lead) => lead.id === state.activeLeadId) ?? state.leads[0];
}

function getScenarioHint(scenario) {
  if (scenario.includes("拜访前")) return "轻输入拿资料包";
  if (scenario.includes("产品组合")) return "按场景组合能力";
  return "高压追问纠偏";
}

function syncScenarioWithLead() {
  const lead = getActiveLead();
  state.activeScenario = lead.scenario;
}

function leadCardTemplate(lead) {
  return `
    <button class="lead-card ${lead.id === state.activeLeadId ? "active" : ""}" data-lead-id="${lead.id}">
      <div class="lead-topline">${lead.region} · ${lead.status}</div>
      <div class="lead-name">${lead.name}</div>
      <div class="lead-meta">${lead.country} · ${lead.industry}</div>
      <div class="lead-tags">
        <span class="pill">机会分 ${lead.score}</span>
        <span class="pill">${lead.products?.[0] || "待补充方案"}</span>
      </div>
    </button>
  `;
}

function renderWorkflow() {
  els.workflowStrip.innerHTML = workflowSteps
    .map(
      (step) => `
        <div class="workflow-step">
          <strong>${step.title}</strong>
          <span>${step.desc}</span>
        </div>
      `
    )
    .join("");
}

function renderMetrics() {
  const metrics = [
    { label: "总线索", value: state.leads.length },
    { label: "重点跟进", value: state.leads.filter((lead) => lead.status.includes("重点")).length },
    { label: "已联系", value: state.leads.filter((lead) => lead.status.includes("已联系")).length },
    { label: "待推进", value: state.leads.filter((lead) => !lead.status.includes("已联系")).length },
  ];

  els.metricsGrid.innerHTML = metrics
    .map(
      (metric) => `
        <div class="metric-card">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join("");
}

function renderLeadLists() {
  const filtered = getVisibleLeads();
  const content = filtered.length
    ? filtered.map(leadCardTemplate).join("")
    : `<div class="empty-state">没有匹配到线索，可以去“线索发现”里搜索并导入。</div>`;

  els.overviewLeadList.innerHTML = content;
  els.workspaceLeadList.innerHTML = content;
  els.leadPoolCount.textContent = `${state.leads.length} 条`;
}

function renderWeeklyActions() {
  const lead = getActiveLead();
  const actions = [
    {
      level: "P0",
      title: `先推进 ${lead.name}`,
      desc: `围绕“${lead.painPoints[0]}”先做事实确认，把可能痛点变成可验证结论。`,
    },
    {
      level: "P1",
      title: "补齐公开网页证据",
      desc: "从 Google 搜索结果补充官网、公司介绍、联系人角色和渠道信号。",
    },
    {
      level: "P2",
      title: "触发高压模拟问答",
      desc: "在真正拜访前先做一轮高压追问，把容易讲满、讲偏的地方收回来。",
    },
  ];

  els.weeklyActions.innerHTML = actions
    .map(
      (action) => `
        <div class="action-card">
          <h4>${action.level} · ${action.title}</h4>
          <p>${action.desc}</p>
        </div>
      `
    )
    .join("");
}

function renderSkills() {
  els.skillToolbar.innerHTML = skills
    .map(
      (skill) => `
        <button class="skill-card ${skill.key === state.activeSkill ? "active" : ""}" data-skill-key="${skill.key}">
          <strong>${skill.key}</strong>
          <small>${skill.name}</small>
        </button>
      `
    )
    .join("");

  els.skillDefinitions.innerHTML = skills
    .map(
      (skill) => `
        <div class="definition-card">
          <strong>${skill.key}</strong>
          <p>${skill.summary}</p>
        </div>
      `
    )
    .join("");
}

function renderScenarios() {
  els.scenarioSwitcher.innerHTML = scenarios
    .map(
      (scenario) => `
        <button class="scenario-chip ${scenario === state.activeScenario ? "active" : ""}" data-scenario="${scenario}">
          <strong>${scenario}</strong>
          <small>${getScenarioHint(scenario)}</small>
        </button>
      `
    )
    .join("");
}

function renderDetail() {
  const lead = getActiveLead();
  els.detailName.textContent = lead.name;
  els.detailSubtitle.textContent = `${lead.country} · ${lead.industry} · 来源 ${lead.source}`;
  els.detailSummary.innerHTML = `
    <div class="metric-card soft"><span>国家 / 地区</span><strong>${lead.country}</strong></div>
    <div class="metric-card soft"><span>目标行业</span><strong>${lead.industry}</strong></div>
    <div class="metric-card soft"><span>机会评分</span><strong>${lead.score} / 100</strong></div>
    <div class="metric-card soft"><span>当前状态</span><strong>${lead.status}</strong></div>
  `;

  els.profileInfo.innerHTML = Object.entries(lead.profile)
    .map(
      ([key, value]) => `
        <dt>${key}</dt>
        <dd>${value}</dd>
      `
    )
    .join("");

  els.painPoints.innerHTML = lead.painPoints.map((item) => `<li>${item}</li>`).join("");
  els.productTags.innerHTML = lead.products.map((product) => `<span class="tag">${product}</span>`).join("");
  els.productReason.textContent = lead.reason;
  els.confirmList.innerHTML = lead.confirms.map((item) => `<div class="check-item">${item}</div>`).join("");
  els.visitOutline.innerHTML = lead.outline.map((item) => `<li>${item}</li>`).join("");
  els.followUpActions.innerHTML = `
    <div class="action-card">
      <h4>动作 1：确认基础事实</h4>
      <p>围绕官网、交易链路、收款方式和系统对接现状做最小闭环核验。</p>
    </div>
    <div class="action-card">
      <h4>动作 2：构造场景化方案</h4>
      <p>不要直接卖产品，先把客户场景、业务痛点和导入顺序讲明白。</p>
    </div>
    <div class="action-card">
      <h4>动作 3：会后形成复盘卡片</h4>
      <p>把待确认项、异议点和下一步动作沉淀进销售智库。</p>
    </div>
  `;
}

function buildAssistantContent(lead, skillKey, scenario, prompt) {
  const evidence = `
    <div class="evidence">
      <span>知识库阶段：${scenario}</span>
      <span>客户：${lead.name}</span>
      <span>待确认项优先输出</span>
      <span>避免过度承诺</span>
    </div>
  `;

  if (skillKey === "customer-analysis") {
    return `
      <section>
        <h4>客户与市场分析</h4>
        <p>${lead.name} 当前更像是一个 ${lead.industry} 客户，决策链条预计落在 ${lead.profile.决策角色}。当前最值得先验证的是“${lead.painPoints[0]}”是否真实存在，以及它对财务、运营、销售哪一侧影响最大。</p>
        ${evidence}
      </section>
      <section>
        <h5>会前提纲</h5>
        <ol>${lead.outline.map((item) => `<li>${item}</li>`).join("")}</ol>
      </section>
      <section>
        <h5>开场话术</h5>
        <p>今天我不急着推荐产品，先想了解贵司在交易链路、对账协同和结算规则上的真实现状，看我们有没有可能在效率和透明度上帮到你们。</p>
      </section>
      <section>
        <h5>销售输入摘要</h5>
        <p>${prompt}</p>
      </section>
    `;
  }

  if (skillKey === "hf-product-match") {
    return `
      <section>
        <h4>客户场景 → 产品组合</h4>
        <p>当前建议先围绕 ${lead.products[0]} 切入，再补充 ${lead.products[1]} 与 ${lead.products[2]}。表达顺序应该是“场景 → 痛点 → 方案 → 待确认项”，不是直接列产品名。</p>
        ${evidence}
      </section>
      <section>
        <h5>推荐顺序</h5>
        <ol>
          <li>先确认客户当前资金流断点和执行摩擦</li>
          <li>再讲统一收款、清分或对账能力如何减少协同成本</li>
          <li>最后补充边界条件、实施前提和待确认项</li>
        </ol>
      </section>
      <section>
        <h5>适配理由</h5>
        <p>${lead.reason}</p>
      </section>
    `;
  }

  if (skillKey === "hf-product-coach") {
    return `
      <section>
        <h4>高压模拟问答</h4>
        <p>本轮演练重点不是让销售“说得更漂亮”，而是“说得更稳”，避免把产品讲满、讲偏。</p>
        ${evidence}
      </section>
      <section>
        <h5>客户追问</h5>
        <p>“我们现在已经能收款了，为什么还要换？”</p>
        <p>建议回答：不是替换已有能力，而是看有没有机会把多渠道收款、门店执行和后续对账统一起来，减少运营和财务之间的摩擦。</p>
      </section>
      <section>
        <h5>认知纠偏</h5>
        <ul>
          <li>不要把“聚合收款”讲成“所有支付问题都能解决”</li>
          <li>不要把“分账”讲成“替客户做业务判断”</li>
          <li>每次回答都回到客户真实场景与边界条件</li>
        </ul>
      </section>
    `;
  }

  if (skillKey === "payment-sales-intel") {
    return `
      <section>
        <h4>行业销售智库卡片</h4>
        <p>把这次客户研究沉淀成后续可复用的 target account 和 insight brief，而不是一次性资料。</p>
        ${evidence}
      </section>
      <section>
        <h5>沉淀建议</h5>
        <ul>
          <li>记录行业常见交易链路和支付协同问题</li>
          <li>记录首次接触时最有效的切入口</li>
          <li>记录客户对“边界”和“风险”的高频追问</li>
        </ul>
      </section>
      <section>
        <h5>复用建议</h5>
        <p>把 ${lead.name} 标记为 ${lead.region} 区域样板客户，并沉淀为 ${lead.industry} 场景卡片。</p>
      </section>
    `;
  }

  return `
    <section>
      <h4>销售方案 PPT 编排</h4>
      <p>当前应该先做结构化确认稿，再进入正式 PPT 页面或对外材料。</p>
      ${evidence}
    </section>
    <section>
      <h5>推荐目录</h5>
      <ol>
        <li>客户现状与交易链路</li>
        <li>主要业务痛点与风险点</li>
        <li>建议产品组合与适配理由</li>
        <li>实施边界、待确认项与下一步</li>
      </ol>
    </section>
    <section>
      <h5>会后跟进文案</h5>
      <p>感谢今天的沟通。基于贵司当前 ${lead.industry} 业务链路，我们初步整理了几个值得继续核验的方向。等关键待确认项补齐后，我会整理成一版更贴近你们现状的建议稿。</p>
    </section>
  `;
}

function renderAssistant() {
  const lead = getActiveLead();
  els.activeSkillLabel.textContent = state.activeSkill;
  els.activeScenarioLabel.textContent = state.activeScenario;
  const prompt = els.promptInput.value.trim() || promptTemplates[state.activeSkill];
  els.assistantOutput.innerHTML = buildAssistantContent(lead, state.activeSkill, state.activeScenario, prompt);
}

function renderDiscovery() {
  const configured = Boolean(state.googleApiKey && state.googleCx);
  els.googleStatusBadge.textContent = configured ? "已配置" : "未配置";
  els.googleStatusBadge.classList.toggle("active", configured);

  els.discoverySummary.textContent = state.discoveryLoading
    ? "正在查询 Google 搜索结果..."
    : configured
      ? "已接入 Google Custom Search JSON API，可直接搜索并导入线索。"
      : "尚未配置 Google API Key 与 cx，当前可先使用演示结果联调。";

  if (state.discoveryLoading) {
    els.searchResults.innerHTML = `<div class="empty-state">正在搜索公开网页，请稍候...</div>`;
    return;
  }

  if (!state.discoveryResults.length) {
    els.searchResults.innerHTML = `<div class="empty-state">还没有搜索结果。先填写搜索条件，再点“搜索线索”。</div>`;
    return;
  }

  els.searchResults.innerHTML = state.discoveryResults
    .map(
      (result, index) => `
        <div class="result-card">
          <div class="result-meta">结果 ${index + 1} · ${result.displayLink || "公开网页"}</div>
          <h4>${result.title}</h4>
          <a href="${result.link}" target="_blank" rel="noreferrer">${result.link}</a>
          <p>${result.snippet}</p>
          <div class="result-actions">
            <button class="primary-btn small" data-import-result="${result.id}">导入为线索</button>
            <button class="ghost-btn small" data-open-link="${result.id}">打开来源</button>
          </div>
        </div>
      `
    )
    .join("");
}

function renderSettings() {
  els.googleApiKeyInput.value = state.googleApiKey;
  els.googleCxInput.value = state.googleCx;
  els.sidebarStatus.textContent = state.googleCx ? "知识库与 Google 搜索已接入" : "知识库已接入，等待配置 Google 搜索";
  els.configStatusBoard.innerHTML = `
    <div class="status-cell">
      <strong>Google API Key</strong>
      <p>${state.googleApiKey ? "已保存到当前浏览器" : "未配置"}</p>
    </div>
    <div class="status-cell">
      <strong>Search Engine ID（cx）</strong>
      <p>${state.googleCx || "未配置"}</p>
    </div>
    <div class="status-cell">
      <strong>GitHub 发布状态</strong>
      <p>当前目录尚未绑定远端仓库，待提供 GitHub 仓库 URL 后可继续 push。</p>
    </div>
  `;
}

function renderActiveView() {
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === state.activeView);
  });

  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === state.activeView);
  });

  const meta = viewMeta[state.activeView];
  els.viewEyebrow.textContent = meta.eyebrow;
  els.viewTitle.textContent = meta.title;
  els.viewDescription.textContent = meta.description;
}

function renderDetailTabs() {
  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.detailTab === state.activeDetailTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.detailPanel === state.activeDetailTab);
  });
}

function getSearchQuery() {
  const company = els.companyInput.value.trim();
  const country = els.countryInput.value.trim();
  const industry = els.industryInput.value.trim();
  const site = els.siteInput.value.trim();
  return [
    company,
    industry,
    country,
    "importer distributor wholesaler contact email",
    site ? `site:${site}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

async function searchGoogleLeads() {
  const query = getSearchQuery();
  if (!query) {
    els.discoverySummary.textContent = "请先填写公司 / 关键词。";
    return;
  }

  if (!(state.googleApiKey && state.googleCx)) {
    els.discoverySummary.textContent = "缺少 Google API Key 或 cx，已切换为演示模式。";
    loadDemoResults();
    return;
  }

  state.discoveryLoading = true;
  renderDiscovery();

  try {
    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.set("key", state.googleApiKey);
    url.searchParams.set("cx", state.googleCx);
    url.searchParams.set("q", query);
    url.searchParams.set("num", "10");

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Google API 请求失败：${response.status}`);
    }

    const data = await response.json();
    state.discoveryResults = (data.items || []).map((item, index) => ({
      id: `google-${Date.now()}-${index}`,
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      displayLink: item.displayLink,
      country: els.countryInput.value.trim() || "待识别",
      industry: els.industryInput.value.trim() || "待识别",
    }));

    els.discoverySummary.textContent = state.discoveryResults.length
      ? `已获取 ${state.discoveryResults.length} 条 Google 结果，可一键导入为线索。`
      : "Google 返回了空结果，请调整关键词再试。";
  } catch (error) {
    state.discoveryResults = [];
    els.discoverySummary.textContent = `Google 搜索失败：${error.message}`;
  } finally {
    state.discoveryLoading = false;
    renderDiscovery();
  }
}

function loadDemoResults() {
  const industry = els.industryInput.value.trim() || "textile";
  const country = els.countryInput.value.trim() || "Germany";
  state.discoveryResults = [
    {
      id: `demo-${Date.now()}-1`,
      title: `${country} ${industry} importer company profile`,
      link: "https://example.com/importer-profile",
      snippet: "公开网页展示了该企业主营品类、采购区域、联系人职位以及近期展会活动，适合导入为首轮拜访线索。",
      displayLink: "example.com",
      country,
      industry,
    },
    {
      id: `demo-${Date.now()}-2`,
      title: `${country} wholesale distributor contact list`,
      link: "https://example.com/distributor-list",
      snippet: "网页包含分销商目录、业务覆盖国家和邮箱入口，适合继续做联系人和渠道画像。",
      displayLink: "example.com",
      country,
      industry,
    },
  ];
  renderDiscovery();
}

function inferDomain(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "unknown-domain";
  }
}

function importSearchResultToLead(resultId) {
  const result = state.discoveryResults.find((item) => item.id === resultId);
  if (!result) return;

  const newLead = {
    id: `lead-${Date.now()}`,
    name: result.title,
    country: result.country || "待识别",
    industry: result.industry || "待识别",
    size: "待补充",
    status: "新导入线索",
    website: inferDomain(result.link),
    contact: "待补充",
    phone: "待补充",
    source: `Google 搜索 · ${result.displayLink || "公开网页"}`,
    score: 68,
    region: result.country || "全球",
    products: ["待判断方案", "待补充场景", "待确认路径"],
    reason: "该线索来自公开搜索结果，当前只完成了第一轮发现，还需要补齐经营模式、联系人和交易链路信息。",
    painPoints: [
      "仅有公开网页信息，缺少真实交易链路判断",
      "联系人角色和决策链仍需确认",
      "产品切入点还没有形成完整证据链",
    ],
    outline: [
      "先确认公司主营业务和目标市场",
      "确认官网、LinkedIn、展会资料中的一致性",
      "判断是进口商、批发商还是渠道分销商",
      "补齐联系人角色和可能的采购链路",
    ],
    confirms: [
      "是否有明确采购或商务负责人",
      "是否涉及跨境收付款或多主体分账",
      "是否已有官网、店铺、B2B 平台多渠道经营",
      "是否具备近期扩张或数字化升级信号",
    ],
    scenario: "客户拜访前客户分析",
    profile: {
      客户定位: "来自 Google 搜索结果的潜在线索",
      商业模式: "待识别",
      采购链路: "待识别",
      决策角色: "待识别",
      机会判断: "已进入线索池，等待二次研究",
    },
  };

  state.leads.unshift(newLead);
  state.activeLeadId = newLead.id;
  state.activeView = "workspace";
  state.activeDetailTab = "overview";
  syncScenarioWithLead();
  renderAll();
}

function openGoogleSearchInNewTab() {
  const query = getSearchQuery();
  if (!query) return;
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
}

function saveSettings() {
  state.googleApiKey = els.googleApiKeyInput.value.trim();
  state.googleCx = els.googleCxInput.value.trim();
  localStorage.setItem(STORAGE_KEYS.googleApiKey, state.googleApiKey);
  localStorage.setItem(STORAGE_KEYS.googleCx, state.googleCx);
  renderSettings();
  renderDiscovery();
}

function clearSettings() {
  state.googleApiKey = "";
  state.googleCx = "";
  localStorage.removeItem(STORAGE_KEYS.googleApiKey);
  localStorage.removeItem(STORAGE_KEYS.googleCx);
  renderSettings();
  renderDiscovery();
}

function addSampleLead() {
  const sample = JSON.parse(JSON.stringify(seedLeads[0]));
  sample.id = `lead-${Date.now()}`;
  sample.name = `${sample.name} Copy`;
  sample.status = "新示例线索";
  state.leads.unshift(sample);
  state.activeLeadId = sample.id;
  renderAll();
}

function renderAll() {
  renderActiveView();
  renderWorkflow();
  renderMetrics();
  renderLeadLists();
  renderWeeklyActions();
  renderDetail();
  renderSkills();
  renderScenarios();
  renderAssistant();
  renderDiscovery();
  renderSettings();
  renderDetailTabs();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) {
    state.activeView = nav.dataset.view;
    renderAll();
    return;
  }

  const leadButton = event.target.closest("[data-lead-id]");
  if (leadButton) {
    state.activeLeadId = leadButton.dataset.leadId;
    syncScenarioWithLead();
    renderAll();
    return;
  }

  const skillButton = event.target.closest("[data-skill-key]");
  if (skillButton) {
    state.activeSkill = skillButton.dataset.skillKey;
    els.promptInput.value = promptTemplates[state.activeSkill];
    renderAll();
    return;
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    state.activeScenario = scenarioButton.dataset.scenario;
    renderAll();
    return;
  }

  const detailTab = event.target.closest("[data-detail-tab]");
  if (detailTab) {
    state.activeDetailTab = detailTab.dataset.detailTab;
    renderDetailTabs();
    return;
  }

  const importButton = event.target.closest("[data-import-result]");
  if (importButton) {
    importSearchResultToLead(importButton.dataset.importResult);
    return;
  }

  const openLinkButton = event.target.closest("[data-open-link]");
  if (openLinkButton) {
    const result = state.discoveryResults.find((item) => item.id === openLinkButton.dataset.openLink);
    if (result) {
      window.open(result.link, "_blank", "noopener,noreferrer");
    }
  }
});

document.querySelector("#fillPromptBtn").addEventListener("click", () => {
  els.promptInput.value = promptTemplates[state.activeSkill];
  renderAssistant();
});

document.querySelector("#generateBtn").addEventListener("click", renderAssistant);

document.querySelector("#markContactedBtn").addEventListener("click", () => {
  const lead = getActiveLead();
  lead.status = "已联系";
  renderAll();
});

document.querySelector("#followBtn").addEventListener("click", () => {
  const lead = getActiveLead();
  lead.status = "重点跟进";
  lead.score = Math.min(99, lead.score + 3);
  renderAll();
});

document.querySelector("#discoveryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  await searchGoogleLeads();
});

document.querySelector("#fillSearchExampleBtn").addEventListener("click", () => {
  els.companyInput.value = "textile importer";
  els.countryInput.value = "Germany";
  els.industryInput.value = "textile";
  els.siteInput.value = "linkedin.com/company";
});

document.querySelector("#useDemoResultsBtn").addEventListener("click", loadDemoResults);
document.querySelector("#openGoogleBtn").addEventListener("click", openGoogleSearchInNewTab);

document.querySelector("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveSettings();
});

document.querySelector("#clearSettingsBtn").addEventListener("click", clearSettings);
document.querySelector("#openSettingsBtn").addEventListener("click", () => {
  state.activeView = "settings";
  renderAll();
});
document.querySelector("#addSampleLeadBtn").addEventListener("click", addSampleLead);

els.globalLeadSearch.addEventListener("input", (event) => {
  state.globalLeadFilter = event.target.value;
  renderLeadLists();
});

syncScenarioWithLead();
els.promptInput.value = promptTemplates[state.activeSkill];
renderAll();
