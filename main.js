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
