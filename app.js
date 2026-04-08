const demoData = {
  petProfile: {
    name: "Milo",
    breed: "英短蓝猫",
    age: "2岁4个月",
    weight: "4.8kg",
    allergies: "乳糖敏感",
    preference: "低敏高蛋白",
    owner: "林晨",
    city: "苏州",
    deviceName: "RPC Companion R1"
  },
  alerts: [
    {
      id: "alert-attention",
      type: "独处焦躁预警",
      time: "15:20",
      severity: "attention",
      summary: "在门口徘徊并伴随连续叫声 8 分钟，情绪识别为轻度焦虑。",
      suggestion: "建议远程语音安抚，并在 18:00 前安排一次互动喂食。",
      linkedEventId: "evt-3"
    },
    {
      id: "alert-warning",
      type: "饮水下降提醒",
      time: "14:10",
      severity: "warning",
      summary: "今日饮水量较近 7 日平均值下降 24%，建议观察是否伴随活动下降。",
      suggestion: "可优先补充湿粮或饮水奖励，若连续 2 日下降建议咨询兽医。",
      linkedEventId: "evt-4"
    },
    {
      id: "alert-critical",
      type: "夜间呕吐高风险",
      time: "02:18",
      severity: "critical",
      summary: "夜间检测到两次剧烈干呕动作与异常蜷缩，触发高风险健康事件。",
      suggestion: "建议立即复查监控片段并联系合作医院，暂停零食投喂。",
      linkedEventId: "evt-5"
    }
  ],
  behaviorEvents: [
    {
      id: "evt-1",
      time: "07:40",
      type: "早餐进食",
      emotion: "期待",
      severity: "normal",
      summary: "自动喂食后 3 分钟内完成进食，速度平稳。"
    },
    {
      id: "evt-2",
      time: "09:15",
      type: "窗边观察",
      emotion: "平静",
      severity: "normal",
      summary: "持续 12 分钟伏卧观察，无异常动作。"
    },
    {
      id: "evt-3",
      time: "15:20",
      type: "门口徘徊",
      emotion: "焦躁",
      severity: "attention",
      summary: "反复靠近门口并高频回头，疑似等待主人回家。"
    },
    {
      id: "evt-4",
      time: "14:10",
      type: "饮水减少",
      emotion: "低活跃",
      severity: "warning",
      summary: "近 5 小时饮水记录偏低，活动时长同步下降。"
    },
    {
      id: "evt-5",
      time: "02:18",
      type: "夜间异常蜷缩",
      emotion: "不适",
      severity: "critical",
      summary: "连续出现短时干呕与低头蜷缩，需重点关注。"
    },
    {
      id: "evt-6",
      time: "19:40",
      type: "远程互动",
      emotion: "放松",
      severity: "normal",
      summary: "完成 5 分钟语音安抚后，情绪恢复稳定。"
    }
  ],
  feedingPlan: {
    title: "本周个性化喂养方案",
    summary: "结合 Milo 的体重、乳糖敏感和近期活动变化，建议继续采用少量多餐 + 湿粮补水策略。",
    meals: [
      {
        slot: "早餐 07:30",
        item: "低敏鸡肉主粮 35g",
        note: "搭配 15ml 温水，提升晨间补水效率。"
      },
      {
        slot: "午间 12:30",
        item: "功能湿粮 28g",
        note: "在独处时段提供更强适口性，降低焦躁风险。"
      },
      {
        slot: "晚餐 18:40",
        item: "主粮 30g + 关节营养膏",
        note: "与远程互动喂食结合，强化正向反馈。"
      }
    ],
    risks: [
      "避免乳制零食和高盐冻干。",
      "若连续两日饮水下降，请提升湿粮比例。",
      "夜间异常事件再次触发时建议暂停试新粮。"
    ]
  },
  products: [
    {
      id: "prd-1",
      name: "低敏鲜肉主粮",
      fit: "AI 匹配度 96%",
      price: "¥129",
      description: "适合乳糖敏感与轻度掉毛期，蛋白来源单一。",
      reason: "基于近 7 日进食稳定性和过敏项自动推荐。"
    },
    {
      id: "prd-2",
      name: "功能湿粮补水包",
      fit: "AI 匹配度 92%",
      price: "¥58",
      description: "针对饮水偏低场景设计，适合独处白天补充水分。",
      reason: "结合饮水趋势下降与活动变化进行补水强化。"
    },
    {
      id: "prd-3",
      name: "夜间舒缓安抚喷雾",
      fit: "AI 匹配度 88%",
      price: "¥75",
      description: "适合门口徘徊和轻度焦虑时辅助使用。",
      reason: "与独处焦躁事件存在高相关性，建议在外出前使用。"
    }
  ],
  communityPosts: [
    {
      id: "post-1",
      author: "小池与橘子",
      title: "上班族如何减少猫咪独处焦虑？",
      excerpt: "我把远程语音安抚和定时互动零食结合起来，连续一周效果很明显。",
      tags: ["独处陪伴", "情绪识别"],
      stats: "128 赞 · 24 评论"
    },
    {
      id: "post-2",
      author: "太仓救助站志愿者",
      title: "救助猫从应激到稳定的饮食过渡方案",
      excerpt: "先从高适口性湿粮过渡，再逐步建立固定喂食时点，能减少应激性厌食。",
      tags: ["救助知识", "喂养方案"],
      stats: "203 赞 · 36 评论"
    },
    {
      id: "post-3",
      author: "张医生在线",
      title: "出现夜间呕吐动作时先观察哪三项指标？",
      excerpt: "优先看食欲、饮水和排泄，其次回看监控确认是否是真性呕吐。",
      tags: ["宠物健康", "医院合作"],
      stats: "319 赞 · 41 评论"
    }
  ],
  devices: [
    {
      name: "陪护机器人 R1",
      status: "已连接",
      detail: "行为识别摄像头、语音安抚、移动底盘工作正常。"
    },
    {
      name: "智能喂食器",
      status: "在线",
      detail: "剩余粮仓 62%，下次喂食时间 18:40。"
    },
    {
      name: "环境传感器",
      status: "稳定",
      detail: "温度 23.4°C，湿度 47%，空气质量良好。"
    },
    {
      name: "移动端 App",
      status: "同步中",
      detail: "最近一次云端同步 20 秒前完成。"
    }
  ],
  baseChatMessages: [
    {
      from: "assistant",
      text: "你好，我已经同步了 Milo 今天的行为数据。你可以问我情绪状态、喂养建议或异常事件处理。",
      time: "09:40"
    },
    {
      from: "user",
      text: "它下午在门口一直转，是不是想我了？",
      time: "09:41"
    },
    {
      from: "assistant",
      text: "是的，系统判断这更接近轻度分离焦虑。建议外出前提前开启语音安抚，并在午间补一份湿粮奖励。",
      time: "09:41"
    }
  ]
}

const scenarios = {
  calm: {
    id: "calm",
    label: "稳定陪伴",
    severity: "normal",
    mood: "放松",
    moodScore: 92,
    insight: "今天整体平稳，进食和休息节律良好，适合保持当前喂养方案。",
    feed: 94,
    water: 88,
    activity: 74,
    rest: 91,
    alertId: "alert-attention",
    monitor: "完成午后巡航后正在窗边休息。"
  },
  attention: {
    id: "attention",
    label: "独处焦虑",
    severity: "attention",
    mood: "微焦虑",
    moodScore: 84,
    insight: "下午独处阶段出现门口徘徊，建议安排远程语音安抚与互动喂食。",
    feed: 90,
    water: 78,
    activity: 66,
    rest: 80,
    alertId: "alert-attention",
    monitor: "已识别门口徘徊和高频回头动作，仍保持可安抚状态。"
  },
  urgent: {
    id: "urgent",
    label: "健康关注",
    severity: "critical",
    mood: "不适",
    moodScore: 63,
    insight: "夜间异常动作与饮水下降同时出现，建议优先排查健康风险并联系合作医院。",
    feed: 68,
    water: 54,
    activity: 48,
    rest: 57,
    alertId: "alert-critical",
    monitor: "系统已提升到高风险观察模式，建议查看完整事件回放。"
  }
}

const state = {
  mode: "mobile",
  mobileView: "welcome",
  tabletView: "dashboard",
  profileCompleted: false,
  petProfile: { ...demoData.petProfile },
  activeAlertId: scenarios.attention.alertId,
  selectedProductId: "prd-1",
  chatMessages: demoData.baseChatMessages.map((message) => ({ ...message })),
  chatInput: "",
  scenario: "attention",
  notice: "演示数据已加载，可直接切换手机端和平板端查看完整流程。"
}

const app = document.querySelector("#app")

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]")
  if (!target) {
    return
  }

  const action = target.dataset.action

  if (action === "set-mode") {
    state.mode = target.dataset.mode
    render()
    return
  }

  if (action === "mobile-view") {
    state.mobileView = target.dataset.view
    if (target.dataset.view !== "welcome") {
      state.profileCompleted = true
    }
    render()
    return
  }

  if (action === "tablet-view") {
    state.tabletView = target.dataset.view
    render()
    return
  }

  if (action === "complete-profile") {
    state.profileCompleted = true
    state.mobileView = "home"
    state.notice = `${state.petProfile.name} 的档案已保存，已生成今日个性化喂养摘要。`
    render()
    return
  }

  if (action === "show-alert") {
    state.activeAlertId = target.dataset.alertId
    state.mobileView = "alert"
    render()
    return
  }

  if (action === "open-log-event") {
    state.mobileView = "logs"
    state.notice = `已定位到 ${target.dataset.eventLabel} 对应的行为日志。`
    render()
    return
  }

  if (action === "link-to") {
    state.mobileView = target.dataset.view
    render()
    return
  }

  if (action === "choose-product") {
    state.selectedProductId = target.dataset.productId
    state.notice = `已将 ${target.dataset.productName} 标记为当前演示推荐商品。`
    render()
    return
  }

  if (action === "chat-prompt") {
    state.chatInput = target.dataset.prompt
    render()
    return
  }

  if (action === "send-chat") {
    sendChat()
    return
  }

  if (action === "set-scenario") {
    state.scenario = target.dataset.scenario
    state.activeAlertId = scenarios[state.scenario].alertId
    state.notice = `已切换到“${scenarios[state.scenario].label}”演示场景。`
    render()
    return
  }

  if (action === "trigger-remote") {
    state.notice = target.dataset.notice
    render()
  }
})

document.addEventListener("input", (event) => {
  const target = event.target

  if (target.dataset.profileField) {
    state.petProfile[target.dataset.profileField] = target.value
    return
  }

  if (target.dataset.chatInput) {
    state.chatInput = target.value
  }
})

function sendChat() {
  const content = state.chatInput.trim()
  if (!content) {
    state.notice = "先输入一个问题，我会用演示数据给出 AI 建议。"
    render()
    return
  }

  const time = currentTime()
  state.chatMessages.push({
    from: "user",
    text: content,
    time
  })

  state.chatMessages.push({
    from: "assistant",
    text: buildAssistantReply(content),
    time
  })

  state.chatInput = ""
  state.mobileView = "chat"
  render()
}

function buildAssistantReply(content) {
  const lower = content.toLowerCase()

  if (lower.includes("焦") || content.includes("叫") || content.includes("门口")) {
    return "从当前行为识别看，这更像轻度分离焦虑。建议优先开启语音安抚，并把午间湿粮调整到更高适口性的补水配方。"
  }

  if (content.includes("吃") || content.includes("喂") || content.includes("粮")) {
    return "今天更适合少量多餐方案：早餐主粮、午间湿粮补水、晚间结合互动奖励。这样能兼顾稳定进食和情绪安抚。"
  }

  if (content.includes("吐") || content.includes("医院") || content.includes("异常")) {
    return "如果夜间呕吐动作再次出现，请先回看异常事件，并观察食欲、饮水和排泄三项指标；连续触发建议联系合作医院。"
  }

  return "综合今日数据，我建议你先看首页的情绪摘要，再进入 AI 喂养页查看个性化方案。如果需要，我也可以继续解释推荐商品为什么匹配。"
}

function currentTime() {
  return new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })
}

function getCurrentScenario() {
  return scenarios[state.scenario]
}

function getActiveAlert() {
  return demoData.alerts.find((alert) => alert.id === state.activeAlertId) || demoData.alerts[0]
}

function getLinkedEvent(alert) {
  return demoData.behaviorEvents.find((event) => event.id === alert.linkedEventId)
}

function levelLabel(level) {
  return {
    normal: "正常",
    attention: "关注",
    warning: "异常",
    critical: "紧急"
  }[level]
}

function render() {
  const scenario = getCurrentScenario()
  const activeAlert = getActiveAlert()

  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand-cluster">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-copy">
            <h1>宠知伴 RoboPetCare</h1>
            <p>AI 驱动的宠物陪护与喂养助手初版 Demo，围绕远程监测、情绪识别、个性化喂养与社群协作做了手机端和平板端双布局演示。</p>
          </div>
        </div>
        <div class="toolbar">
          <div class="mode-toggle" aria-label="设备模式切换">
            <button class="${state.mode === "mobile" ? "active" : ""}" data-action="set-mode" data-mode="mobile">手机端</button>
            <button class="${state.mode === "tablet" ? "active" : ""}" data-action="set-mode" data-mode="tablet">平板端</button>
          </div>
          <div class="toolbar-pill">Mock API · 中文演示数据</div>
        </div>
      </header>

      <main class="experience">
        <section class="preview-card">
          <div class="preview-header">
            <div class="preview-copy">
              <p class="eyebrow">Dual Device Prototype</p>
              <h2>${state.mode === "mobile" ? "手机端主流程" : "平板端监控与展示"}</h2>
              <p>${state.mode === "mobile" ? "覆盖启动、建档、首页、远程状态、行为日志、异常提醒、AI 喂养、智能问答、商品推荐、社群和个人中心。" : "覆盖总览看板、多维监控、异常时间线、设备联动和演示模式，适合汇报与答辩场景。"}</p>
            </div>
            <div class="segmented">
              ${state.mode === "mobile" ? renderMobileSegmented() : renderTabletSegmented()}
            </div>
          </div>

          <div class="device-stage">
            ${state.mode === "mobile" ? renderMobileApp(scenario, activeAlert) : renderTabletApp(scenario, activeAlert)}
          </div>
        </section>

        <aside class="context-panel">
          <section>
            <div class="panel-head">
              <div>
                <h3 class="panel-title">当前演示场景</h3>
                <p class="panel-subtitle">一键切换不同状态，方便你汇报时展示系统如何响应。</p>
              </div>
            </div>
            <div class="context-summary">
              <div class="pill-row">
                <span class="pill" data-level="${scenario.severity}">${levelLabel(scenario.severity)} · ${scenario.label}</span>
                <span class="mini-pill">情绪得分 ${scenario.moodScore}</span>
              </div>
              <p class="muted">${scenario.insight}</p>
            </div>
            <div class="chip-row">
              ${Object.values(scenarios).map((item) => `
                <button class="nav-chip ${state.scenario === item.id ? "active" : ""}" data-action="set-scenario" data-scenario="${item.id}">
                  ${item.label}
                </button>
              `).join("")}
            </div>
          </section>

          <section>
            <div class="panel-head">
              <div>
                <h3 class="panel-title">核心模块</h3>
                <p class="panel-subtitle">与 PPT 中的功能结构保持一致。</p>
              </div>
            </div>
            <div class="context-list">
              <div class="context-item">
                <div class="status-icon">01</div>
                <div><strong>远程监测</strong><span class="muted">实时状态、行为识别、异常提醒</span></div>
              </div>
              <div class="context-item">
                <div class="status-icon">02</div>
                <div><strong>AI 喂养</strong><span class="muted">喂养计划、风险提示、方案解释</span></div>
              </div>
              <div class="context-item">
                <div class="status-icon">03</div>
                <div><strong>智能问答</strong><span class="muted">基于当天数据给出陪护建议</span></div>
              </div>
              <div class="context-item">
                <div class="status-icon">04</div>
                <div><strong>推荐与社群</strong><span class="muted">产品匹配、知识科普、救助协作</span></div>
              </div>
            </div>
          </section>

          <section>
            <div class="panel-head">
              <div>
                <h3 class="panel-title">演示说明</h3>
                <p class="panel-subtitle">${state.notice}</p>
              </div>
            </div>
            <div class="empty-note">
              首页优先回答“今天宠物怎么样”，再层层展开到异常、喂养和问答，符合你要做 UI 界面的初版展示逻辑。
            </div>
            <div class="kbd-note">提示：手机端可从欢迎页开始完整走一遍建档流程；平板端适合直接展示看板和异常时间线。</div>
          </section>
        </aside>
      </main>
    </div>
  `
}

function renderMobileSegmented() {
  const items = [
    ["welcome", "欢迎"],
    ["profile", "建档"],
    ["home", "首页"],
    ["status", "监测"],
    ["feeding", "喂养"],
    ["chat", "问答"]
  ]

  return items.map(([view, label]) => `
    <button class="${state.mobileView === view ? "active" : ""}" data-action="mobile-view" data-view="${view}">
      ${label}
    </button>
  `).join("")
}

function renderTabletSegmented() {
  const items = [
    ["dashboard", "总览"],
    ["monitoring", "监控"],
    ["timeline", "时间线"],
    ["devices", "设备"],
    ["demo", "演示"]
  ]

  return items.map(([view, label]) => `
    <button class="${state.tabletView === view ? "active" : ""}" data-action="tablet-view" data-view="${view}">
      ${label}
    </button>
  `).join("")
}

function renderMobileApp(scenario, activeAlert) {
  const showBottomNav = !["welcome", "profile"].includes(state.mobileView)

  return `
    <div class="device-frame phone">
      <div class="phone-notch" aria-hidden="true"></div>
      <div class="device-screen">
        <div class="phone-status">
          <strong>09:41</strong>
          <span>${state.petProfile.deviceName}</span>
        </div>
        <div class="mobile-app">
          <div class="mobile-content">
            <div class="mobile-scroll">
              ${renderMobileScreen(scenario, activeAlert)}
            </div>
          </div>
          ${showBottomNav ? renderBottomNav() : ""}
        </div>
      </div>
    </div>
  `
}

function renderMobileScreen(scenario, activeAlert) {
  const screens = {
    welcome: renderWelcomeScreen(scenario),
    profile: renderProfileScreen(),
    home: renderHomeScreen(scenario, activeAlert),
    status: renderStatusScreen(scenario),
    logs: renderLogsScreen(),
    alert: renderAlertScreen(activeAlert),
    feeding: renderFeedingScreen(),
    chat: renderChatScreen(),
    shop: renderShopScreen(),
    community: renderCommunityScreen(),
    profileCenter: renderProfileCenterScreen()
  }

  return screens[state.mobileView] || screens.home
}

function renderWelcomeScreen(scenario) {
  return `
    <div class="page-stack">
      <section class="hero-card">
        <p class="eyebrow">Warm Tech for Pet Care</p>
        <div class="hero-meta">
          <div>
            <h3>宠知伴，让陪伴不只停在喂食</h3>
            <p>连接宠物机器人与手机 App，把情绪识别、远程安抚和个性化喂养整合成一条清晰的用户路径。</p>
          </div>
          <div class="hero-score">
            <strong>${scenario.moodScore}</strong>
            <span>今日状态分</span>
          </div>
        </div>
        <div class="pill-row" style="margin-top:16px">
          <span class="pill" data-level="${scenario.severity}">${scenario.label}</span>
          <span class="mini-pill">AI 情绪识别已同步</span>
          <span class="mini-pill">远程陪护设备在线</span>
        </div>
        <div class="hero-actions" style="margin-top:20px">
          <button class="pill-button primary" data-action="mobile-view" data-view="profile">开始创建宠物档案</button>
          <button class="pill-button secondary" data-action="set-mode" data-mode="tablet">查看平板看板</button>
        </div>
      </section>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">初版会展示什么</h3>
            <p class="section-subtitle">让汇报时的故事线非常完整。</p>
          </div>
        </div>
        <div class="quick-grid">
          <button class="quick-action" data-action="mobile-view" data-view="home">
            <div class="icon-chip">H</div>
            <strong>首页摘要</strong>
            <span>先回答“今天宠物怎么样”。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="status">
            <div class="icon-chip">M</div>
            <strong>远程监测</strong>
            <span>行为识别、实时卡片、异常入口。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="feeding">
            <div class="icon-chip">F</div>
            <strong>AI 喂养</strong>
            <span>方案、风险与商品推荐一起解释。</span>
          </button>
        </div>
      </section>

      <section class="status-banner" data-level="${scenario.severity}">
        <div class="section-head">
          <div>
            <h3 class="section-title">当前状态提示</h3>
            <p class="section-subtitle">${scenario.insight}</p>
          </div>
          <span class="level-tag" data-level="${scenario.severity}">${levelLabel(scenario.severity)}</span>
        </div>
      </section>
    </div>
  `
}

function renderProfileScreen() {
  return `
    <div class="page-stack">
      <section class="hero-card">
        <p class="eyebrow">Profile Setup</p>
        <div class="hero-meta">
          <div>
            <h3>先建立宠物档案</h3>
            <p>初版里这一步会决定首页状态摘要、AI 喂养和商品推荐的展示内容。</p>
          </div>
          <div class="hero-score">
            <strong>01</strong>
            <span>创建步骤</span>
          </div>
        </div>
      </section>

      <section class="soft-card">
        <div class="form-grid two">
          ${renderField("宠物昵称", "name", state.petProfile.name)}
          ${renderField("品种", "breed", state.petProfile.breed)}
          ${renderField("年龄", "age", state.petProfile.age)}
          ${renderField("体重", "weight", state.petProfile.weight)}
          ${renderField("过敏项", "allergies", state.petProfile.allergies)}
          ${renderField("喂养偏好", "preference", state.petProfile.preference)}
          ${renderField("主人昵称", "owner", state.petProfile.owner)}
          ${renderField("所在城市", "city", state.petProfile.city)}
        </div>
        <div class="profile-actions" style="margin-top:18px">
          <button class="pill-button primary" data-action="complete-profile">保存并进入首页</button>
          <button class="pill-button secondary" data-action="mobile-view" data-view="welcome">返回欢迎页</button>
        </div>
      </section>
    </div>
  `
}

function renderField(label, field, value) {
  return `
    <div class="field">
      <label>${label}</label>
      <input data-profile-field="${field}" value="${value}">
    </div>
  `
}

function renderHomeScreen(scenario, activeAlert) {
  return `
    <div class="page-stack">
      <section class="hero-card">
        <div class="hero-meta">
          <div>
            <p class="eyebrow">Today Snapshot</p>
            <h3>${state.petProfile.name} 今天整体${scenario.mood}</h3>
            <p>${scenario.insight}</p>
          </div>
          <div class="hero-score">
            <strong>${scenario.moodScore}</strong>
            <span>情绪综合分</span>
          </div>
        </div>
        <div class="pill-row" style="margin-top:14px">
          <span class="pill" data-level="${scenario.severity}">${scenario.label}</span>
          <span class="mini-pill">${state.petProfile.breed}</span>
          <span class="mini-pill">${state.petProfile.weight}</span>
        </div>
      </section>

      <section class="status-row">
        ${renderMetric("进食", `${scenario.feed}%`, "今日摄入")}
        ${renderMetric("饮水", `${scenario.water}%`, "补水完成")}
        ${renderMetric("活动", `${scenario.activity}%`, "活跃程度")}
        ${renderMetric("休息", `${scenario.rest}%`, "睡眠恢复")}
      </section>

      <button class="status-banner" data-level="${activeAlert.severity}" data-action="show-alert" data-alert-id="${activeAlert.id}">
        <div class="section-head">
          <div>
            <h3 class="section-title">${activeAlert.type}</h3>
            <p class="section-subtitle">${activeAlert.summary}</p>
          </div>
          <span class="level-tag" data-level="${activeAlert.severity}">${activeAlert.time}</span>
        </div>
      </button>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">核心功能入口</h3>
            <p class="section-subtitle">围绕监测、喂养、问答、推荐与社群展开。</p>
          </div>
        </div>
        <div class="quick-grid">
          <button class="quick-action" data-action="mobile-view" data-view="status">
            <div class="icon-chip">监</div>
            <strong>实时状态</strong>
            <span>查看行为识别和远程互动。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="logs">
            <div class="icon-chip">志</div>
            <strong>行为日志</strong>
            <span>定位一天内所有关键事件。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="feeding">
            <div class="icon-chip">喂</div>
            <strong>AI 喂养</strong>
            <span>打开个性化方案与风险提醒。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="chat">
            <div class="icon-chip">问</div>
            <strong>智能问答</strong>
            <span>基于当天数据解释为什么这样建议。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="shop">
            <div class="icon-chip">购</div>
            <strong>商品推荐</strong>
            <span>看适合 ${state.petProfile.name} 的组合商品。</span>
          </button>
          <button class="quick-action" data-action="mobile-view" data-view="community">
            <div class="icon-chip">社</div>
            <strong>社群知识</strong>
            <span>连接救助站、医院和养宠讨论。</span>
          </button>
        </div>
      </section>
    </div>
  `
}

function renderMetric(label, value, caption) {
  return `
    <div class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <span>${caption}</span>
    </div>
  `
}
function renderStatusScreen(scenario) {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">宠物实时状态</h3>
          <p class="section-subtitle">行为识别、远程连接和异常预警一屏查看。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="live-panel">
        <span class="live-badge">实时监测中</span>
        <div class="monitor-pet" aria-hidden="true"></div>
        <div class="overlay-tag top">${scenario.mood}</div>
        <div class="overlay-tag mid">门口区域 82%</div>
        <div class="overlay-tag bottom">安抚成功率 74%</div>
      </section>

      <section class="stats-grid">
        <div class="metric-card">
          <span>当前判断</span>
          <strong>${scenario.label}</strong>
          <span>${scenario.monitor}</span>
        </div>
        <div class="metric-card">
          <span>远程连接</span>
          <strong>稳定</strong>
          <span>机器人、喂食器和传感器均在线。</span>
        </div>
      </section>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">远程交互</h3>
            <p class="section-subtitle">用于演示主人不在家时的安抚方式。</p>
          </div>
        </div>
        <div class="chip-row">
          <button class="pill-button secondary" data-action="trigger-remote" data-notice="已触发远程语音安抚，演示中情绪将逐步回稳。">语音安抚</button>
          <button class="pill-button secondary" data-action="trigger-remote" data-notice="已模拟午间零食奖励，后续会联动喂养建议。">互动零食</button>
          <button class="pill-button secondary" data-action="mobile-view" data-view="logs">查看行为日志</button>
        </div>
      </section>

      <section class="list-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">最近识别事件</h3>
            <p class="section-subtitle">以便快速解释 AI 如何得出结论。</p>
          </div>
        </div>
        <div class="line-list">
          ${demoData.behaviorEvents.slice(0, 4).map((event) => `
            <div class="line-item">
              <div class="timeline-row">
                <strong>${event.time} · ${event.type}</strong>
                <span class="level-tag" data-level="${event.severity}">${levelLabel(event.severity)}</span>
              </div>
              <p>${event.summary}</p>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `
}

function renderLogsScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">行为日志</h3>
          <p class="section-subtitle">按时间线记录行为、情绪判断和风险等级。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>
      <section class="list-card">
        <div class="line-list">
          ${demoData.behaviorEvents.map((event) => `
            <div class="line-item">
              <div class="timeline-row">
                <strong>${event.time} · ${event.type}</strong>
                <span class="level-tag" data-level="${event.severity}">${levelLabel(event.severity)}</span>
              </div>
              <div class="pill-row">
                <span class="mini-pill">情绪：${event.emotion}</span>
              </div>
              <p>${event.summary}</p>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `
}

function renderAlertScreen(activeAlert) {
  const linkedEvent = getLinkedEvent(activeAlert)

  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">异常提醒详情</h3>
          <p class="section-subtitle">把异常事件、原因解释和处理建议串成一个决策页面。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="hero-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">${activeAlert.time}</p>
            <h3>${activeAlert.type}</h3>
            <p>${activeAlert.summary}</p>
          </div>
          <span class="level-tag" data-level="${activeAlert.severity}">${levelLabel(activeAlert.severity)}</span>
        </div>
      </section>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">AI 处理建议</h3>
            <p class="section-subtitle">${activeAlert.suggestion}</p>
          </div>
        </div>
        <div class="action-row">
          <button class="pill-button primary" data-action="trigger-remote" data-notice="已模拟触发远程安抚流程，异常页会在演示中继续保留建议说明。">立刻远程安抚</button>
          <button class="pill-button secondary" data-action="link-to" data-view="feeding">查看喂养调整</button>
          <button class="pill-button secondary" data-action="open-log-event" data-event-label="${linkedEvent ? linkedEvent.type : "相关事件"}">定位行为日志</button>
        </div>
      </section>

      ${linkedEvent ? `
        <section class="pill-card">
          <div class="timeline-row">
            <strong>关联行为：${linkedEvent.type}</strong>
            <span class="mini-pill">${linkedEvent.time}</span>
          </div>
          <p class="muted">${linkedEvent.summary}</p>
        </section>
      ` : ""}
    </div>
  `
}

function renderFeedingScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">AI 喂养方案</h3>
          <p class="section-subtitle">从用户角度看，是“建议 + 理由 + 可执行商品”的一体化体验。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="hero-card">
        <p class="eyebrow">Personalized Feeding</p>
        <div class="hero-meta">
          <div>
            <h3>${demoData.feedingPlan.title}</h3>
            <p>${demoData.feedingPlan.summary}</p>
          </div>
          <div class="hero-score">
            <strong>3</strong>
            <span>日内时段</span>
          </div>
        </div>
      </section>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">日内喂养安排</h3>
            <p class="section-subtitle">按时间段和目的解释为什么这样喂。</p>
          </div>
        </div>
        <div class="feed-list">
          ${demoData.feedingPlan.meals.map((meal) => `
            <div class="feed-item">
              <div>
                <strong>${meal.slot}</strong>
                <p class="muted">${meal.item}</p>
              </div>
              <span class="mini-pill">${meal.note}</span>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="soft-card">
        <div class="section-head">
          <div>
            <h3 class="section-title">风险与禁忌</h3>
            <p class="section-subtitle">帮助用户快速理解注意事项。</p>
          </div>
        </div>
        <div class="line-list">
          ${demoData.feedingPlan.risks.map((risk) => `
            <div class="line-item">
              <strong>提醒</strong>
              <p>${risk}</p>
            </div>
          `).join("")}
        </div>
        <div class="hero-actions" style="margin-top:14px">
          <button class="pill-button primary" data-action="mobile-view" data-view="shop">查看推荐商品</button>
          <button class="pill-button secondary" data-action="mobile-view" data-view="chat">问问 AI 为什么这么推荐</button>
        </div>
      </section>
    </div>
  `
}

function renderChatScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">AI 智能问答</h3>
          <p class="section-subtitle">结合当天行为数据，实时解释喂养和情绪建议。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="chat-card">
        <div class="chat-shell">
          <div class="message-list">
            ${state.chatMessages.map((message) => `
              <div class="message ${message.from}">
                <div class="sender">${message.from === "assistant" ? "AI" : "我"}</div>
                <div>
                  <div class="bubble">${message.text}</div>
                  <div class="stamp">${message.time}</div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="chat-shortcuts">
            <button data-action="chat-prompt" data-prompt="为什么今天要增加湿粮补水？">为什么今天要增加湿粮补水？</button>
            <button data-action="chat-prompt" data-prompt="门口徘徊是分离焦虑吗？">门口徘徊是分离焦虑吗？</button>
            <button data-action="chat-prompt" data-prompt="夜间异常时我要不要去医院？">夜间异常时我要不要去医院？</button>
          </div>

          <div class="chat-composer">
            <textarea data-chat-input="true" placeholder="输入你想问的问题，例如：它今天为什么喝水少了？">${state.chatInput}</textarea>
            <div class="chat-actions">
              <button class="pill-button primary" data-action="send-chat">发送问题</button>
              <button class="pill-button secondary" data-action="link-to" data-view="feeding">查看喂养方案</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}

function renderShopScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">推荐商城</h3>
          <p class="section-subtitle">推荐商品不仅展示结果，也说明匹配原因。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="product-grid">
        ${demoData.products.map((product) => `
          <article class="product-card">
            <header>
              <div>
                <strong>${product.name}</strong>
                <p>${product.description}</p>
              </div>
              <span class="level-tag" data-level="${state.selectedProductId === product.id ? "normal" : "attention"}">${product.fit}</span>
            </header>
            <div class="pill-row">
              <span class="mini-pill">${product.price}</span>
              <span class="mini-pill">${product.reason}</span>
            </div>
            <button class="pill-button ${state.selectedProductId === product.id ? "primary" : "secondary"}" data-action="choose-product" data-product-id="${product.id}" data-product-name="${product.name}">
              ${state.selectedProductId === product.id ? "当前方案已选" : "纳入演示方案"}
            </button>
          </article>
        `).join("")}
      </section>
    </div>
  `
}

function renderCommunityScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">养宠社群</h3>
          <p class="section-subtitle">让用户能看到知识、医院与救助站协作的延展空间。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="status-banner" data-level="normal">
        <div class="section-head">
          <div>
            <h3 class="section-title">合作内容精选</h3>
            <p class="section-subtitle">接入宠物医院、救助站与知识科普内容，形成长期用户留存。</p>
          </div>
        </div>
      </section>

      <section class="community-grid">
        ${demoData.communityPosts.map((post) => `
          <article class="community-card">
            <header>
              <div class="avatar-line">
                <div class="avatar-badge">${post.author.slice(0, 1)}</div>
                <div>
                  <strong>${post.author}</strong>
                  <p>${post.title}</p>
                </div>
              </div>
              <span class="mini-pill">${post.stats}</span>
            </header>
            <p>${post.excerpt}</p>
            <div class="tag-row">
              ${post.tags.map((tag) => `<span class="mini-pill">${tag}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </section>
    </div>
  `
}

function renderProfileCenterScreen() {
  return `
    <div class="page-stack">
      <section class="screen-head">
        <div>
          <h3 class="screen-title">个人中心</h3>
          <p class="section-subtitle">汇总宠物档案、设备状态与会员服务。</p>
        </div>
        <button class="pill-button ghost" data-action="mobile-view" data-view="home">返回首页</button>
      </section>

      <section class="soft-card">
        <div class="profile-grid">
          <div class="line-item">
            <strong>${state.petProfile.name}</strong>
            <p>${state.petProfile.breed} · ${state.petProfile.age} · ${state.petProfile.weight}</p>
          </div>
          <div class="line-item">
            <strong>主人</strong>
            <p>${state.petProfile.owner} · ${state.petProfile.city}</p>
          </div>
          <div class="line-item">
            <strong>喂养偏好</strong>
            <p>${state.petProfile.preference}</p>
          </div>
          <div class="line-item">
            <strong>设备状态</strong>
            <p>${state.petProfile.deviceName} 已与陪护机器人联动。</p>
          </div>
        </div>
      </section>

      <section class="pill-card">
        <strong>VIP 会员能力</strong>
        <p class="muted">兽医咨询、定制服务与更细粒度的健康报告可以在后续版本扩展。</p>
      </section>
    </div>
  `
}

function renderBottomNav() {
  const items = [
    ["home", "首页", "H"],
    ["feeding", "喂养", "F"],
    ["chat", "问答", "Q"],
    ["community", "社群", "C"],
    ["profileCenter", "我的", "M"]
  ]

  return `
    <nav class="mobile-bottom-nav">
      ${items.map(([view, label, icon]) => `
        <button class="bottom-item ${state.mobileView === view ? "active" : ""}" data-action="mobile-view" data-view="${view}">
          <strong>${icon}</strong>
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `
}

function renderTabletApp(scenario, activeAlert) {
  return `
    <div class="device-frame tablet">
      <div class="device-screen">
        <div class="tablet-shell">
          <aside class="tablet-sidebar">
            <div class="tablet-brand">
              <p class="eyebrow">Control Center</p>
              <h3>宠知伴双端看板</h3>
              <p>展示设备联动、状态总览和答辩演示场景。</p>
            </div>
            <nav class="sidebar-nav">
              ${[
                ["dashboard", "总览看板"],
                ["monitoring", "多维监控"],
                ["timeline", "异常时间线"],
                ["devices", "设备联动"],
                ["demo", "演示模式"]
              ].map(([view, label]) => `
                <button class="${state.tabletView === view ? "active" : ""}" data-action="tablet-view" data-view="${view}">
                  <span>${label}</span>
                </button>
              `).join("")}
            </nav>
            <div class="sidebar-foot">
              <strong>${state.petProfile.name}</strong>
              <p class="muted">${state.petProfile.breed} · ${scenario.label} · 设备在线</p>
            </div>
          </aside>
          <section class="tablet-main">
            ${renderTabletView(scenario, activeAlert)}
          </section>
        </div>
      </div>
    </div>
  `
}

function renderTabletView(scenario, activeAlert) {
  const views = {
    dashboard: renderTabletDashboard(scenario, activeAlert),
    monitoring: renderTabletMonitoring(scenario),
    timeline: renderTabletTimeline(),
    devices: renderTabletDevices(),
    demo: renderTabletDemo(scenario)
  }

  return views[state.tabletView] || views.dashboard
}

function renderTabletDashboard(scenario, activeAlert) {
  return `
    <header class="tablet-topbar">
      <div>
        <p class="eyebrow">Overview Dashboard</p>
        <h2>总览看板</h2>
        <p>给评审看到“设备、情绪、喂养和异常”之间的联动关系。</p>
      </div>
      <div class="pill-row">
        <span class="pill" data-level="${scenario.severity}">${scenario.label}</span>
        <span class="mini-pill">设备在线 4/4</span>
      </div>
    </header>

    <section class="tablet-stats">
      ${renderLargeStat("情绪得分", scenario.moodScore, "今日综合")}
      ${renderLargeStat("活跃度", `${scenario.activity}%`, "行为识别")}
      ${renderLargeStat("补水完成", `${scenario.water}%`, "饮水趋势")}
      ${renderLargeStat("异常事件", "3", "今日需关注")}
    </section>

    <section class="tablet-grid">
      <div class="panel-grid">
        <article class="tablet-panel">
          <div class="panel-head">
            <div>
              <h3 class="panel-title">宠物实时概况</h3>
              <p class="panel-subtitle">${scenario.monitor}</p>
            </div>
            <button class="pill-button secondary" data-action="tablet-view" data-view="monitoring">进入监控</button>
          </div>
          <div class="insight-grid">
            <div class="progress-block">
              <div class="progress-meta"><span>进食</span><strong>${scenario.feed}%</strong></div>
              <div class="progress"><span style="width:${scenario.feed}%"></span></div>
            </div>
            <div class="progress-block">
              <div class="progress-meta"><span>饮水</span><strong>${scenario.water}%</strong></div>
              <div class="progress"><span style="width:${scenario.water}%"></span></div>
            </div>
            <div class="progress-block">
              <div class="progress-meta"><span>休息</span><strong>${scenario.rest}%</strong></div>
              <div class="progress"><span style="width:${scenario.rest}%"></span></div>
            </div>
          </div>
        </article>

        <article class="tablet-panel">
          <div class="panel-head">
            <div>
              <h3 class="panel-title">今日行为趋势</h3>
              <p class="panel-subtitle">用简化图表表达状态变化，利于答辩展示。</p>
            </div>
          </div>
          <div class="mini-chart">
            ${[
              ["早", 72],
              ["午", 58],
              ["下", 82],
              ["晚", 67]
            ].map(([label, value]) => `
              <div class="bar" style="height:${value}%"><span>${label}</span></div>
            `).join("")}
          </div>
        </article>
      </div>

      <article class="tablet-panel">
        <div class="panel-head">
          <div>
            <h3 class="panel-title">重点提醒</h3>
            <p class="panel-subtitle">把最需要解释的异常放在右侧显著区。</p>
          </div>
          <button class="pill-button secondary" data-action="tablet-view" data-view="timeline">查看时间线</button>
        </div>
        <div class="focus-list">
          <div class="timeline-item" data-level="${activeAlert.severity}">
            <div class="timeline-row">
              <strong>${activeAlert.type}</strong>
              <span class="level-tag" data-level="${activeAlert.severity}">${activeAlert.time}</span>
            </div>
            <p>${activeAlert.summary}</p>
          </div>
          ${demoData.alerts.filter((alert) => alert.id !== activeAlert.id).map((alert) => `
            <div class="timeline-item" data-level="${alert.severity}">
              <div class="timeline-row">
                <strong>${alert.type}</strong>
                <span class="level-tag" data-level="${alert.severity}">${levelLabel(alert.severity)}</span>
              </div>
              <p>${alert.summary}</p>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `
}

function renderLargeStat(label, value, caption) {
  return `
    <article class="large-stat">
      <span>${label}</span>
      <strong>${value}</strong>
      <span>${caption}</span>
    </article>
  `
}

function renderTabletMonitoring(scenario) {
  return `
    <header class="tablet-topbar">
      <div>
        <p class="eyebrow">Remote Monitoring</p>
        <h2>多维状态监控</h2>
        <p>突出“实时行为 + 情绪判断 + 可远程干预”的系统价值。</p>
      </div>
      <div class="pill-row">
        <button class="pill-button secondary" data-action="trigger-remote" data-notice="已从平板端触发远程语音陪伴演示。">一键安抚</button>
        <button class="pill-button secondary" data-action="trigger-remote" data-notice="已从平板端触发互动喂食演示。">互动喂食</button>
      </div>
    </header>

    <section class="monitor-grid">
      <article class="tablet-panel">
        <div class="live-panel" style="min-height:340px">
          <span class="live-badge">设备联动在线</span>
          <div class="monitor-pet" style="width:220px;height:220px"></div>
          <div class="overlay-tag top">${scenario.label}</div>
          <div class="overlay-tag mid">识别可信度 89%</div>
          <div class="overlay-tag bottom">远程连接延迟 0.3s</div>
        </div>
      </article>

      <div class="panel-grid">
        <article class="tablet-panel">
          <div class="panel-head">
            <div>
              <h3 class="panel-title">识别摘要</h3>
              <p class="panel-subtitle">${scenario.monitor}</p>
            </div>
          </div>
          <div class="radar-grid">
            <div class="metric-card">
              <span>当前情绪</span>
              <strong>${scenario.mood}</strong>
              <span>AI 多模态判断</span>
            </div>
            <div class="metric-card">
              <span>风险等级</span>
              <strong>${levelLabel(scenario.severity)}</strong>
              <span>结合事件频次与姿态变化</span>
            </div>
          </div>
        </article>

        <article class="tablet-panel">
          <div class="panel-head">
            <div>
              <h3 class="panel-title">关键指标</h3>
              <p class="panel-subtitle">展示系统如何把传感器和行为结果汇总成可读信息。</p>
            </div>
          </div>
          <div class="insight-list">
            <div class="progress-block">
              <div class="progress-meta"><span>门口徘徊频次</span><strong>4 次</strong></div>
              <div class="progress"><span style="width:72%"></span></div>
            </div>
            <div class="progress-block">
              <div class="progress-meta"><span>安抚响应度</span><strong>74%</strong></div>
              <div class="progress"><span style="width:74%"></span></div>
            </div>
            <div class="progress-block">
              <div class="progress-meta"><span>饮水趋势</span><strong>${scenario.water}%</strong></div>
              <div class="progress"><span style="width:${scenario.water}%"></span></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  `
}

function renderTabletTimeline() {
  const items = [...demoData.alerts, ...demoData.behaviorEvents]
    .map((item) => {
      const isAlert = "suggestion" in item
      return {
        time: item.time,
        title: item.type,
        description: isAlert ? item.summary : `${item.summary} · 情绪判断：${item.emotion}`,
        severity: item.severity
      }
    })
    .sort((left, right) => right.time.localeCompare(left.time))

  return `
    <header class="tablet-topbar">
      <div>
        <p class="eyebrow">Event Timeline</p>
        <h2>异常事件时间线</h2>
        <p>方便展示“识别结果如何一步步触发异常提醒与后续建议”。</p>
      </div>
      <div class="pill-row">
        <span class="mini-pill">共 ${items.length} 条事件</span>
      </div>
    </header>

    <section class="tablet-grid">
      <article class="tablet-panel">
        <div class="focus-list">
          ${items.map((item) => `
            <div class="timeline-item" data-level="${item.severity}">
              <div class="timeline-row">
                <strong>${item.time} · ${item.title}</strong>
                <span class="level-tag" data-level="${item.severity}">${levelLabel(item.severity)}</span>
              </div>
              <p>${item.description}</p>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="tablet-panel">
        <div class="panel-head">
          <div>
            <h3 class="panel-title">今日总结</h3>
            <p class="panel-subtitle">适合答辩时用一句话快速概括业务价值。</p>
          </div>
        </div>
        <div class="line-list">
          <div class="line-item">
            <strong>情绪面</strong>
            <p>系统识别到主人离家后的独处焦虑，并给出可执行的安抚策略。</p>
          </div>
          <div class="line-item">
            <strong>喂养面</strong>
            <p>基于饮水下降趋势自动调整湿粮补水比例。</p>
          </div>
          <div class="line-item">
            <strong>健康面</strong>
            <p>夜间高风险事件可快速升级到医院或合作方处理。</p>
          </div>
        </div>
      </article>
    </section>
  `
}

function renderTabletDevices() {
  return `
    <header class="tablet-topbar">
      <div>
        <p class="eyebrow">Device Linkage</p>
        <h2>设备连接与联动状态</h2>
        <p>突出软硬件一体化，而不是只做一个纯信息类 App。</p>
      </div>
      <div class="pill-row">
        <span class="mini-pill">主设备 4 台</span>
        <span class="mini-pill">联动正常</span>
      </div>
    </header>

    <section class="device-grid">
      ${demoData.devices.map((device) => `
        <article class="device-card">
          <div class="device-row">
            <div>
              <strong>${device.name}</strong>
              <p>${device.detail}</p>
            </div>
            <span class="level-tag" data-level="normal">${device.status}</span>
          </div>
        </article>
      `).join("")}
    </section>

    <section class="tablet-panel">
      <div class="panel-head">
        <div>
          <h3 class="panel-title">联动能力说明</h3>
          <p class="panel-subtitle">初版里先把核心可视化关系交代清楚，后续再接真硬件。</p>
        </div>
      </div>
      <div class="line-list">
        <div class="line-item">
          <strong>行为识别摄像头</strong>
          <p>为实时状态页、异常时间线和情绪判断提供核心输入。</p>
        </div>
        <div class="line-item">
          <strong>智能喂食器</strong>
          <p>与 AI 喂养方案和远程互动奖励串联，形成闭环。</p>
        </div>
        <div class="line-item">
          <strong>环境与健康传感器</strong>
          <p>为饮水、活动、夜间异常等高风险场景提供辅助判断。</p>
        </div>
      </div>
    </section>
  `
}

function renderTabletDemo(scenario) {
  return `
    <header class="tablet-topbar">
      <div>
        <p class="eyebrow">Pitch Mode</p>
        <h2>演示模式</h2>
        <p>适合比赛、汇报和路演时快速切换故事场景。</p>
      </div>
      <div class="pill-row">
        <span class="pill" data-level="${scenario.severity}">${scenario.label}</span>
      </div>
    </header>

    <section class="tablet-grid">
      <article class="tablet-panel">
        <div class="panel-head">
          <div>
            <h3 class="panel-title">场景切换</h3>
            <p class="panel-subtitle">不同场景会同步影响首页摘要、异常卡和监控解释。</p>
          </div>
        </div>
        <div class="scenario-list">
          ${Object.values(scenarios).map((item) => `
            <button class="scenario-card ${state.scenario === item.id ? "active" : ""}" data-action="set-scenario" data-scenario="${item.id}">
              <div class="timeline-row">
                <strong>${item.label}</strong>
                <span class="level-tag" data-level="${item.severity}">${levelLabel(item.severity)}</span>
              </div>
              <p>${item.insight}</p>
            </button>
          `).join("")}
        </div>
      </article>

      <article class="tablet-panel">
        <div class="panel-head">
          <div>
            <h3 class="panel-title">本场景推荐讲法</h3>
            <p class="panel-subtitle">帮助你在做 UI 演示时更自然地串起价值点。</p>
          </div>
        </div>
        <div class="line-list">
          <div class="line-item">
            <strong>用户痛点</strong>
            <p>忙碌上班族无法实时了解宠物独处状态，也缺少专业护理判断。</p>
          </div>
          <div class="line-item">
            <strong>产品动作</strong>
            <p>系统通过行为识别发现问题，再联动提醒、问答、喂养和商品建议。</p>
          </div>
          <div class="line-item">
            <strong>商业延展</strong>
            <p>社群、医院合作与个性化推荐可以自然演进到会员和企业合作模式。</p>
          </div>
        </div>
      </article>
    </section>
  `
}

render()
