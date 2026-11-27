/* ═══════════════════════════════════════════════════════════════
   WARPATH CODEX — Движок разворота, навигации, скраббера, HQ и TTS
   ═══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const bookId = window.BOOK_ID || 'manual';
  const STORAGE_KEYS = {
    page: `wp_guide_page_${bookId}`,
    done: `wp_guide_done_chapters_${bookId}`,
    skip: 'wp_guide_skip_subpages',
    spread: 'wp_guide_spread',
    theme: 'wp_guide_theme',
    tickets: 'wp_guide_tickets',
    ttsRate: 'wp_guide_tts_rate',
    sfx: 'wp_guide_sfx',
    usedCodes: 'wp_guide_used_codes',
    lang: 'wp_guide_lang'
  };

  const RU_VOL = {
    pages: window.BOOK_PAGES || [],
    tocSections: window.BOOK_TOC_SECTIONS || [],
    videos: window.YOUTUBE_BY_TOPIC || {},
    calc: window.CALC_DATA || null,
    community: window.COMMUNITY_LINKS || [],
    promoCodes: window.PROMO_CODES || []
  };

  let currentLang = 'ru';
  let pages = RU_VOL.pages;
  let tocSections = RU_VOL.tocSections;
  let activeVideos = RU_VOL.videos;
  let activeCalc = RU_VOL.calc;
  let activeCommunity = RU_VOL.community;
  let activePromoCodes = RU_VOL.promoCodes;
  const totalPages = pages.length;

  const codexWrapper = document.getElementById('codex-wrapper');
  const codexCover = document.getElementById('codex-cover');
  const elBookmark = document.getElementById('chapter-bookmark');
  const elChapterProgress = document.getElementById('codex-chapter-progress');

  const elContentLeft = document.getElementById('page-content-left');
  const elPageNumLeft = document.getElementById('page-num-left');
  const elDocCodeLeft = document.getElementById('page-doc-code-left');
  const elSecLeft = document.getElementById('page-sec-left');

  const elContentRight = document.getElementById('page-content-right');
  const elPageNumRight = document.getElementById('page-num-right');
  const elDocCodeRight = document.getElementById('page-doc-code-right');
  const elSecRight = document.getElementById('page-sec-right');

  const elCounterCurrent = document.getElementById('counter-current');
  const elCounterTotal = document.getElementById('counter-total');
  const pageScrubber = document.getElementById('page-scrubber');
  const scrubberChapter = document.getElementById('scrubber-chapter');

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const sidePrev = document.getElementById('side-prev');
  const sideNext = document.getElementById('side-next');
  const btnTocJump = document.getElementById('btn-toc-jump');

  /* Шапка и отдельное меню инструментов */
  const btnTocOpen = document.getElementById('btn-toc-open');
  const btnSearch = document.getElementById('btn-search');
  const btnHq = document.getElementById('btn-hq');
  const btnLangToggle = document.getElementById('btn-lang-toggle');
  const langActiveCode = document.getElementById('lang-active-code');
  const langAltCode = document.getElementById('lang-alt-code');
  const btnToolsTrigger = document.getElementById('btn-tools-trigger');
  const toolsMenu = document.getElementById('tools-menu');

  const toggleSpread = document.getElementById('toggle-spread');
  const chkSkip = document.getElementById('skip-subpages');
  const btnTts = document.getElementById('btn-tts');
  const btnSfx = document.getElementById('btn-sfx');
  const btnTheme = document.getElementById('btn-theme');
  const btnFullscreen = document.getElementById('btn-fullscreen');

  const ttsBadgeState = document.getElementById('tts-badge-state');
  const sfxBadgeState = document.getElementById('sfx-badge-state');
  const themeBadgeState = document.getElementById('theme-badge-state');
  const fsBadgeState = document.getElementById('fs-badge-state');

  /* Левое меню YouTube */
  const ytDrawer = document.getElementById('yt-drawer');
  const btnYtToggle = document.getElementById('btn-yt-toggle');
  const btnYtMobile = document.getElementById('btn-yt-mobile');
  const btnYtClose = document.getElementById('btn-yt-close');
  const ytTopicTitle = document.getElementById('yt-topic-title');
  const ytDrawerList = document.getElementById('yt-drawer-list');
  const ytSearchMore = document.getElementById('yt-search-more');

  /* Правая Книжная полка */
  const shelfDrawer = document.getElementById('shelf-drawer');
  const btnShelfToggle = document.getElementById('btn-shelf-toggle');
  const btnShelfMobile = document.getElementById('btn-shelf-mobile');
  const btnShelfClose = document.getElementById('btn-shelf-close');
  const btnShelfExt = document.getElementById('btn-shelf-ext');
  const shelfExtMenu = document.getElementById('shelf-ext-menu');

  /* TTS бар */
  const ttsBar = document.getElementById('tts-bar');
  const ttsStatusText = document.getElementById('tts-status-text');
  const ttsPauseBtn = document.getElementById('tts-pause');
  const ttsSpeedBtn = document.getElementById('tts-speed');
  const ttsStopBtn = document.getElementById('tts-stop');

  /* Диалоги */
  const searchDialog = document.getElementById('search-dialog');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  const menuDialog = document.getElementById('menu-dialog');
  const drawerToc = document.getElementById('drawer-toc');
  const progressLabel = document.getElementById('progress-label');
  const progressFill = document.getElementById('progress-fill');
  const btnResetProgress = document.getElementById('btn-reset-progress');

  const hqDialog = document.getElementById('hq-dialog');
  const btnReportError = document.getElementById('btn-report-error');
  const ticketForm = document.getElementById('ticket-form');
  const ticketContextBadge = document.getElementById('ticket-context-badge');
  const ticketType = document.getElementById('ticket-type');
  const ticketNick = document.getElementById('ticket-nick');
  const ticketText = document.getElementById('ticket-text');
  const btnGithubIssue = document.getElementById('btn-github-issue');
  const ticketFeedback = document.getElementById('ticket-feedback');
  const ticketHistoryEl = document.getElementById('ticket-history');

  const calcUnit = document.getElementById('calc-unit');
  const calcLevel = document.getElementById('calc-level');
  const calcLevelVal = document.getElementById('calc-level-val');
  const calcOfficer = document.getElementById('calc-officer');
  const calcEquip = document.getElementById('calc-equip');
  const calcResults = document.getElementById('calc-results');
  const communityList = document.getElementById('community-list');
  const promoList = document.getElementById('promo-list');
  const btnCopyAllCodes = document.getElementById('btn-copy-all-codes');

  /* Игровые термины-тултипы (как <wiki> в Warpath) */
  const WP_GLOSSARY = {
    awakening: {
      title: 'Пробуждение офицера',
      body: 'Открывается, когда все 4 базовых навыка офицера подняты до 5 уровня (нужно 720 универсальных статуй офицера). Открывает 5-й ультимативный навык — даёт самый сильный скачок боевой мощи.'
    },
    arms_race: {
      title: 'Arms Race (Гонка вооружений)',
      body: 'Ежедневное событие с заданиями по дням недели (сбор, стройка, наука, купоны, ускорения). Трать запасы именно в нужный день, чтобы забирать золото и ускорения бесплатно.'
    },
    intensity: {
      title: 'Интенсивность урона («Интенса»)',
      body: 'Главный умножающий множитель всего урона (обычных атак и навыков). Нейтрализуется «Сопротивлением урону» цели. Критически важно собирать её через навыки, оперсети и Бонус лагеря.'
    },
    firepower: {
      title: 'Огневая мощь',
      body: 'Общий базовый урон в минуту из всего оружия юнита (зависит от урона пушки, скорострельности, точности и радиуса ударной волны). Сильна в начале, но без Интенсивности упирается в броню и сопротивление врага.'
    },
    resist: {
      title: 'Сопротивление урону',
      body: 'Умножающий защитный показатель, снижающий весь входящий урон (и от атак, и от навыков). Нейтрализует вражескую Интенсивность урона.'
    },
    skill_boost: {
      title: 'Усиление навыков офицера',
      body: 'Увеличивает урон от тактических/активных навыков и ульт. Главный стат в доп-навыках и снаряге для Арты (Гаубиц) и РСЗО («Катюши»).'
    },
    normal_boost: {
      title: 'Усиление обычной атаки',
      body: 'Увеличивает постоянный урон автоатак (выстрелов между навыками). Ставится скорострельным юнитам: Флаку (VADS), ПТО и пулемётным ОБТ.'
    },
    gold_pp: {
      title: 'Чертежи Золото+ и Золото++',
      body: 'Золото+ ещё можно улучшить крафтом до Золото++. Чертежи Золото++ — высший эндгейм-уровень: их НИКОГДА нельзя разбирать, а покупать обычные чертежи в магазинах Альянса и Кампании невыгодно.'
    },
    camp_bonus: {
      title: 'Бонус лагеря',
      body: 'Суммарный бонус от коллекции и уровня прокачки юнитов выбранного лагеря. Даёт постоянную Интенсивность урона — её важно собирать по максимуму.'
    },
    cat_bonus: {
      title: 'Бонусы категории (напр. V кат. = 60 ур.)',
      body: 'Пассивные баффы аккаунта за повышение уровня открытых юнитов. Даже не выпуская юнит и без тренировки в арсенале, доведите нужную категорию до порога (для V категории хватит 60 ур.) — это даёт скорость исследований!'
    },
    tac_card: {
      title: 'Тактическая карточка',
      body: 'Боевые карты Командной академии (Дымовая завеса, Тяжёлый удар, Усиление брони). Прожимай их вручную в нужный момент — например, чтобы сбрить вражескую арту или танк у твоей базы.'
    },
    atg: {
      title: 'АТГ (ПТО Авангарда)',
      body: 'Немецкая противотанковая пушка лагеря Авангард. Огромное бронепробитие по наземной броне и умение переключаться в режим ПВО против самолётов.'
    },
    ops_net: {
      title: 'Оперсети (Операционные сети)',
      body: 'Система из 6 сетей в Центре оперативной информации (со 120-го дня сервера). По прибавке Интенсивности и Огневой мощи превосходит Коллекционер.'
    },
    city_honors: {
      title: 'Городские почести и Значки («головы»)',
      body: 'Специальная ветвь технологий, открывающаяся в городах ур. 2+ (включая ветвь «Железная армия» перед Городской обороной). Качается за Значки городского вклада («головы»/медали) из городских ивентов и кампаний.'
    },
    hegemon_cup: {
      title: 'Гегемон и Главный кубок',
      body: 'Операция «Гегемон» — крупный морской/совмещённый сезон с 16 командными навыками и поддержкой ВВС. «Главный кубок» — главный турнир топ-16 альянсов (этап Гонки за очками и 5 фаз Финала).'
    }
  };

  let activeGlossary = WP_GLOSSARY;
  let tooltipEl = null;
  let activeTermEl = null;
  let hoverOpenedAt = 0;

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'wp-tooltip';
    tooltipEl.className = 'wp-tooltip';
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.hidden = true;
    tooltipEl.innerHTML = '<div class="wp-tooltip-title"></div><div class="wp-tooltip-body"></div>';
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function showTermTooltip(target) {
    const key = target?.dataset?.term;
    const item = key && (activeGlossary[key] || WP_GLOSSARY[key]);
    if (!item) return;
    const box = ensureTooltip();
    box.querySelector('.wp-tooltip-title').textContent = item.title;
    box.querySelector('.wp-tooltip-body').textContent = item.body;
    box.hidden = false;
    if (activeTermEl && activeTermEl !== target) activeTermEl.classList.remove('is-active');
    activeTermEl = target;
    activeTermEl.classList.add('is-active');
    hoverOpenedAt = Date.now();

    const rect = target.getBoundingClientRect();
    const bw = box.offsetWidth || 280;
    const bh = box.offsetHeight || 90;
    let left = rect.left + rect.width / 2 - bw / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - bw - 10));
    let top = rect.top - bh - 8;
    if (top < 10) top = Math.min(rect.bottom + 8, window.innerHeight - bh - 10);
    box.style.left = `${Math.round(left)}px`;
    box.style.top = `${Math.round(top)}px`;
    requestAnimationFrame(() => box.classList.add('is-visible'));
  }

  function hideTermTooltip() {
    if (activeTermEl) {
      activeTermEl.classList.remove('is-active');
      activeTermEl = null;
    }
    if (!tooltipEl) return;
    tooltipEl.classList.remove('is-visible');
    tooltipEl.hidden = true;
  }

  let currentPage = 2;
  let doneChapters = new Set();
  let skipSubpages = false;
  let spreadPref = true;
  let sfxEnabled = true;
  let audioCtx = null;
  let tickets = [];
  let ttsRate = 1.0;
  let isSpeaking = false;
  let isPaused = false;

  /* ── SFX ──────────────────────────────────────────────────── */
  function playFlipSound() {
    if (!sfxEnabled) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const dur = 0.05;
      const buf = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * dur), audioCtx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.32));
      }
      const src = audioCtx.createBufferSource();
      src.buffer = buf;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      const gain = audioCtx.createGain();
      gain.gain.value = 0.07;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      src.start();
    } catch (_) {}
  }

  /* ── STATE ────────────────────────────────────────────────── */
  const RU_JS = {
    studiedPrefix: 'ИЗУЧЕНО',
    bookmarkDefaultManual: 'WARPATH УСТАВ',
    bookmarkDefaultUpdates: 'WARPATH УСТАВ • ТОМ II',
    tocTitle: 'СОДЕРЖАНИЕ',
    tocKicker: 'НАВИГАЦИЯ ПО УСТАВУ',
    markDone: '✓ Изучено',
    markBtn: 'Отметить',
    endKicker: 'КОНЕЦ УСТАВА',
    endText: 'Вы дошли до последней страницы. Вернитесь к содержанию или задайте вопрос в Штабе WarpathHub.',
    endBtn: 'К содержанию',
    badgeDark: 'Тёмная',
    badgeLight: 'Светлая',
    badgeOn: 'Вкл',
    badgeOff: 'Выкл',
    badgePlaying: 'Играет',
    badgeFull: 'Полный',
    badgeWindow: 'Окно',
    pause: 'Пауза',
    resume: 'Продолжить',
    radioStatus: 'Радиосвязь',
    pageShort: 'стр.',
    searchEmpty: 'Введите термин, имя офицера, юнит или @shevchenko01_bot для поиска по уставу.',
    searchNoHits: 'Ничего не найдено. Попробуйте другой запрос.',
    pageWord: 'Стр.',
    ticketHistoryTitle: 'Последние сформированные тикеты',
    ticketVol1: 'Том I (Полевой устав)',
    ticketVol2: 'Том II (Хроника патчей)',
    ticketContextPrefix: 'Привязка',
    ticketDefaultMsg: '(укажите, что нужно поправить или обновить на этой странице)',
    ticketDefaultNick: 'Читатель',
    ticketCopied: (id) => `Тикет ${id} скопирован! Вставь в @shevchenko01_bot или нажми «Отправить в GitHub ↗».`,
    ticketFallback: (id) => `Тикет ${id} готов — нажми «Отправить в GitHub ↗» или отправь в @shevchenko01_bot.`,
    calcPower: 'Боевая мощь',
    calcAtk: 'Атака',
    calcDef: 'Защита',
    calcHp: 'Здоровье (HP)',
    calcSpeed: 'Скорость',
    calcAtkBonus: 'Бонус АТК',
    copyBtn: 'Копировать',
    copiedBtn: 'Скопировано ✓',
    usedDoneBtn: 'Использован ✓',
    usedMarkBtn: 'Отметить',
    copiedAll: (n) => `Скопировано (${n}) ✓`,
    copyErr: 'Ошибка буфера',
    githubTitlePrefix: 'Ошибка в гайде'
  };

  function uiStr() {
    return currentLang === 'en' && window.WP_EN?.ui?.js ? window.WP_EN.ui.js : RU_JS;
  }

  let ruDomSnapshot = null;
  function getStaticUiTargets() {
    const isUpd = bookId === 'updates';
    return [
      { sel: '.brand-accent', key: 'brandAccent' },
      { sel: '.brand-sub', key: isUpd ? 'brandSubUpdates' : 'brandSubManual' },
      { sel: '#btn-toc-open .nav-label', key: 'navToc' },
      { sel: '#btn-search .nav-label', key: 'navSearch' },
      { sel: '#btn-hq .nav-label', key: 'navHq' },
      { sel: '#btn-tools-trigger .nav-label', key: 'navMenu' },
      { sel: '#tools-menu .tools-group:nth-of-type(1) .tools-group-title', key: 'toolsTitleBook' },
      { sel: 'label[for="toggle-spread"] span', key: 'toolsSpread' },
      { sel: 'label[for="skip-subpages"] span', key: 'toolsSkipSub' },
      { sel: '#tools-menu .tools-group:nth-of-type(2) .tools-group-title', key: 'toolsTitleAudio' },
      { sel: '#btn-tts .tool-row-left span', key: 'toolsTts' },
      { sel: '#btn-sfx .tool-row-left span', key: 'toolsSfx' },
      { sel: '#tools-menu .tools-group:nth-of-type(3) .tools-group-title', key: 'toolsTitleUi' },
      { sel: '#btn-theme .tool-row-left span', key: 'toolsTheme' },
      { sel: '#btn-fullscreen .tool-row-left span', key: 'toolsFullscreen' },
      { sel: '.tools-links-foot a:first-child', key: 'toolsFootChat' },
      { sel: '.yt-drawer-kicker', key: 'ytKicker' },
      { sel: '.yt-tab-text', key: 'ytTabText' },
      { sel: '#yt-search-more', key: 'ytMore' },
      { sel: '#btn-report-error span', key: 'reportError' },
      { sel: '#btn-yt-mobile span', key: 'mobileVideo' },
      { sel: '#btn-shelf-mobile span', key: 'mobileShelf' },
      { sel: '.shelf-tab-text', key: isUpd ? 'shelfTabUpdates' : 'shelfTabManual' },
      { sel: '.shelf-kicker', key: 'shelfKicker' },
      { sel: '.shelf-title', key: 'shelfTitle' },
      { sel: '.spine-vol1 .spine-vol-num', key: 'shelfVol1Tag' },
      { sel: '.spine-vol1 .spine-name', key: 'shelfVol1Name' },
      { sel: '.spine-vol1 .spine-meta', key: 'shelfVol1Meta' },
      { sel: '.spine-vol1 .spine-status', key: isUpd ? 'shelfStatusOpen' : 'shelfStatusReading' },
      { sel: '.spine-vol2 .spine-vol-num', key: 'shelfVol2Tag' },
      { sel: '.spine-vol2 .spine-name', key: 'shelfVol2Name' },
      { sel: '.spine-vol2 .spine-meta', key: 'shelfVol2Meta' },
      { sel: '.spine-vol2 .spine-status', key: isUpd ? 'shelfStatusReading' : 'shelfStatusOpen' },
      { sel: '.spine-wiki .spine-vol-num', key: 'shelfExtTag' },
      { sel: '.spine-wiki .spine-name', key: 'shelfExtName' },
      { sel: '.spine-wiki .spine-meta', key: 'shelfExtMeta' },
      { sel: '.spine-wiki .spine-status', key: 'shelfExtStatus' },
      { sel: '#shelf-ext-menu a:nth-child(1) strong', key: 'shelfExtWpcTitle' },
      { sel: '#shelf-ext-menu a:nth-child(1) span', key: 'shelfExtWpcDesc' },
      { sel: '#shelf-ext-menu a:nth-child(2) strong', key: 'shelfExtSpTitle' },
      { sel: '#shelf-ext-menu a:nth-child(2) span', key: 'shelfExtSpDesc' },
      { sel: '#shelf-ext-menu a:nth-child(3) strong', key: 'shelfExtOldTitle' },
      { sel: '#shelf-ext-menu a:nth-child(3) span', key: 'shelfExtOldDesc' },
      { sel: '.desk-credits > span', key: 'creditsLabel' },
      { sel: '.desk-credits a:last-child', key: 'creditsSocrat' },
      { sel: '#search-dialog-title', key: isUpd ? 'searchTitleUpdates' : 'searchTitleManual' },
      { sel: '#search-input', key: isUpd ? 'searchPlaceholderUpdates' : 'searchPlaceholderManual', attr: 'placeholder' },
      { sel: '#menu-dialog-title', key: isUpd ? 'menuTitleUpdates' : 'menuTitleManual' },
      { sel: '.progress-head > span', key: isUpd ? 'progressHeadUpdates' : 'progressHeadManual' },
      { sel: '.author-credit-badge', key: 'authorBadge' },
      { sel: '.author-credit-desc', key: 'authorDesc', html: true },
      { sel: '#btn-reset-progress', key: 'btnResetProgress' },
      { sel: '#hq-dialog-title', key: 'hqTitle' },
      { sel: '[data-hq-tab="tickets"]', key: 'tabTickets' },
      { sel: '[data-hq-tab="codes"]', key: 'tabCodes' },
      { sel: '[data-hq-tab="calc"]', key: 'tabCalc' },
      { sel: '[data-hq-tab="community"]', key: 'tabCommunity' },
      { sel: '#hq-panel-tickets .hq-action-card.highlight .hq-action-badge', key: 'hqCardBotBadge' },
      { sel: '#hq-panel-tickets .hq-action-card.highlight .hq-action-desc', key: 'hqCardBotDesc' },
      { sel: '#hq-panel-tickets .hq-action-card:not(.highlight) .hq-action-title', key: 'hqCardChatTitle' },
      { sel: '#hq-panel-tickets .hq-action-card:not(.highlight) .hq-action-desc', key: 'hqCardChatDesc' },
      { sel: '.ticket-form-title', key: 'ticketFormTitle' },
      { sel: 'label[for="ticket-type"]', key: 'ticketTypeLabel' },
      { sel: '#ticket-type option[value="Вопрос по тактике"]', key: 'ticketOptTactic' },
      { sel: '#ticket-type option[value="Ошибка в гайде"]', key: 'ticketOptBug' },
      { sel: '#ticket-type option[value="Добавить в гайд"]', key: 'ticketOptSuggest' },
      { sel: '#ticket-type option[value="Модерация / Жалоба"]', key: 'ticketOptMod' },
      { sel: 'label[for="ticket-nick"]', key: 'ticketNickLabel' },
      { sel: '#ticket-nick', key: 'ticketNickPlaceholder', attr: 'placeholder' },
      { sel: 'label[for="ticket-text"]', key: 'ticketTextLabel' },
      { sel: '#ticket-text', key: 'ticketTextPlaceholder', attr: 'placeholder' },
      { sel: '#ticket-form button[type="submit"]', key: 'ticketBtnCopy' },
      { sel: '#btn-github-issue', key: 'ticketBtnGithub' },
      { sel: '.ticket-actions a:last-child', key: 'ticketBtnBot' },
      { sel: 'label[for="calc-unit"]', key: 'calcUnitLabel' },
      { sel: 'label[for="calc-officer"]', key: 'calcOfficerLabel' },
      { sel: 'label[for="calc-equip"]', key: 'calcEquipLabel' },
      { sel: '.calc-footer-note > span', key: 'calcFooterNote' },
      { sel: '.promo-guide-text', key: 'promoGuideHtml', html: true },
      { sel: '#btn-copy-all-codes', key: 'promoCopyAll' },
      { sel: '.promo-toolbar a', key: 'promoPortal' }
    ];
  }

  function applyStaticUi(lang) {
    const targets = getStaticUiTargets();
    if (!ruDomSnapshot) {
      ruDomSnapshot = { title: document.title, vals: {} };
      for (const item of targets) {
        const el = document.querySelector(item.sel);
        if (!el) continue;
        ruDomSnapshot.vals[item.key] = item.attr ? el.getAttribute(item.attr) : (item.html ? el.innerHTML : el.textContent);
      }
      const lvlLbl = document.querySelector('label[for="calc-level"]');
      ruDomSnapshot.calcLvlNode = lvlLbl?.firstChild?.textContent || 'Ранг / Уровень (';
    }

    const isEn = lang === 'en' && Boolean(window.WP_EN);
    const enUi = isEn ? window.WP_EN.ui : null;
    document.title = isEn ? enUi[bookId === 'updates' ? 'pageTitleUpdates' : 'pageTitleManual'] : ruDomSnapshot.title;

    for (const item of targets) {
      const el = document.querySelector(item.sel);
      if (!el) continue;
      const val = isEn ? enUi[item.key] : ruDomSnapshot.vals[item.key];
      if (val === undefined) continue;
      if (item.attr) el.setAttribute(item.attr, val);
      else if (item.html) el.innerHTML = val;
      else el.textContent = val;
    }

    const lvlLbl = document.querySelector('label[for="calc-level"]');
    if (lvlLbl?.firstChild) {
      lvlLbl.firstChild.textContent = isEn ? `${enUi.calcLevelLabel} (` : ruDomSnapshot.calcLvlNode;
    }
    if (langActiveCode && langAltCode) {
      langActiveCode.textContent = isEn ? 'EN' : 'RU';
      langAltCode.textContent = isEn ? 'RU' : 'EN';
    }
  }

  function isSpreadActive() {
    return spreadPref && window.innerWidth >= 960;
  }

  function updateToolBadges() {
    const u = uiStr();
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeBadgeState.textContent = theme === 'dark' ? u.badgeDark : u.badgeLight;
    sfxBadgeState.textContent = sfxEnabled ? u.badgeOn : u.badgeOff;
    sfxBadgeState.classList.toggle('on', sfxEnabled);
    ttsBadgeState.textContent = isSpeaking ? u.badgePlaying : u.badgeOff;
    ttsBadgeState.classList.toggle('on', isSpeaking);
    fsBadgeState.textContent = document.fullscreenElement ? u.badgeFull : u.badgeWindow;
    fsBadgeState.classList.toggle('on', Boolean(document.fullscreenElement));
  }

  function loadState() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }

      const savedDone = JSON.parse(localStorage.getItem(STORAGE_KEYS.done) || '[]');
      if (Array.isArray(savedDone)) doneChapters = new Set(savedDone.map(Number));

      const savedTickets = JSON.parse(localStorage.getItem(STORAGE_KEYS.tickets) || '[]');
      if (Array.isArray(savedTickets)) tickets = savedTickets;

      const savedRate = parseFloat(localStorage.getItem(STORAGE_KEYS.ttsRate) || '1');
      if ([1, 1.25, 1.5].includes(savedRate)) ttsRate = savedRate;
      ttsSpeedBtn.textContent = `${ttsRate}×`;

      skipSubpages = localStorage.getItem(STORAGE_KEYS.skip) === '1';
      chkSkip.checked = skipSubpages;

      const savedSpread = localStorage.getItem(STORAGE_KEYS.spread);
      spreadPref = savedSpread !== '0';
      toggleSpread.checked = spreadPref;

      const savedSfx = localStorage.getItem(STORAGE_KEYS.sfx);
      sfxEnabled = savedSfx !== '0';

      const hashMatch = window.location.hash.match(/page=(\d+)/);
      const savedPage = parseInt(localStorage.getItem(STORAGE_KEYS.page) || '2', 10);
      const initial = hashMatch ? parseInt(hashMatch[1], 10) : savedPage;
      currentPage = clampPage(isNaN(initial) ? 2 : initial);
    } catch (_) {
      currentPage = 2;
    }
    updateToolBadges();
  }

  function saveDone() {
    try { localStorage.setItem(STORAGE_KEYS.done, JSON.stringify([...doneChapters])); } catch (_) {}
  }

  function saveTickets() {
    try { localStorage.setItem(STORAGE_KEYS.tickets, JSON.stringify(tickets.slice(0, 5))); } catch (_) {}
  }

  function clampPage(n) {
    return Math.max(1, Math.min(totalPages, n));
  }

  function toggleChapterDone(chId) {
    if (!chId) return;
    if (doneChapters.has(chId)) doneChapters.delete(chId);
    else doneChapters.add(chId);
    saveDone();
    renderPage(currentPage, null);
    updateProgressUI();
  }

  /* ── TTS ENGINE ───────────────────────────────────────────── */
  function normalizeSpeechText(raw) {
    return raw
      .replace(/[•→↗✓]/g, ', ')
      .replace(/★/g, ' звёзд ')
      .replace(/\bSH\b/gi, 'сверхтяжёлый танк')
      .replace(/\bF2P\b/gi, 'игра без доната')
      .replace(/\bP2W\b/gi, 'донат')
      .replace(/\bHP\b/gi, 'здоровье')
      .replace(/\bDPS\b/gi, 'урон в секунду')
      .replace(/\bPvP\b/gi, 'пэ-вэ-пэ')
      .replace(/\bPvE\b/gi, 'пэ-вэ-е')
      .replace(/\bТВД\b/g, 'театр военных действий')
      .replace(/\bПТ\b/g, 'истребитель танков')
      .replace(/\bРСЗО\b/g, 'ракетная установка')
      .replace(/\bКНБ\b/g, 'камень ножницы бумага')
      .replace(/\bДД\b/g, 'дамагер')
      .replace(/@shevchenko01_bot/g, 'бот Шевченко ноль один')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getVoiceForLang(lang) {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const prefix = lang === 'en' ? 'en' : 'ru';
    return (
      voices.find(v => v.lang.toLowerCase().startsWith(prefix) && /pavel|dmitry|google|irina|daniel|samantha|aria/i.test(v.name)) ||
      voices.find(v => v.lang.toLowerCase().startsWith(prefix)) ||
      null
    );
  }

  function stopTts() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    isSpeaking = false;
    isPaused = false;
    ttsBar.hidden = true;
    ttsPauseBtn.textContent = uiStr().pause;
    updateToolBadges();
  }

  function startTts() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const leftTxt = stripHtml(elContentLeft.innerHTML);
    const rightTxt = isSpreadActive() ? stripHtml(elContentRight.innerHTML) : '';
    const text = normalizeSpeechText(`${leftTxt}. ${rightTxt}`);
    if (!text) return;

    const u = uiStr();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = currentLang === 'en' ? 'en-US' : 'ru-RU';
    utter.rate = ttsRate;
    const voice = getVoiceForLang(currentLang);
    if (voice) utter.voice = voice;

    utter.onstart = () => {
      ttsStatusText.textContent = `${u.radioStatus}: ${u.pageShort} ${currentPage} (${ttsRate}×)`;
    };
    utter.onend = () => stopTts();
    utter.onerror = () => stopTts();

    isSpeaking = true;
    isPaused = false;
    ttsBar.hidden = false;
    ttsPauseBtn.textContent = u.pause;
    ttsStatusText.textContent = `${u.radioStatus}: ${u.pageShort} ${currentPage} (${ttsRate}×)`;
    updateToolBadges();
    window.speechSynthesis.speak(utter);
  }

  /* ── RENDER HELPERS ───────────────────────────────────────── */
  function buildTocHtml() {
    const u = uiStr();
    return `
      <div class="page-head">
        <div>
          <div class="page-kicker">${u.tocKicker}</div>
          <h1 class="page-title">${u.tocTitle}</h1>
        </div>
      </div>
      ${tocSections.map(sec => `
        <section class="toc-section">
          <h2 class="toc-section-title">${sec.title}</h2>
          <ul class="toc-list">
            ${sec.chapters.map(ch => {
              const isDone = doneChapters.has(ch.id);
              return `
                <li class="toc-item">
                  <button type="button" class="toc-check ${isDone ? 'checked' : ''}" data-toggle-ch="${ch.id}" aria-label="${ch.id}" aria-pressed="${isDone}">
                    ${isDone ? '✓' : ''}
                  </button>
                  <button type="button" class="toc-link" data-goto="${ch.page}">
                    <span class="toc-num">${String(ch.id).padStart(2, '0')}</span>
                    <span class="toc-name">${ch.title}</span>
                    <span class="toc-dots" aria-hidden="true"></span>
                    <span class="toc-page">${ch.page}</span>
                  </button>
                </li>
              `;
            }).join('')}
          </ul>
        </section>
      `).join('')}
    `;
  }

  function renderSinglePageInto(data, containerEl, numEl, codeEl, secEl) {
    const u = uiStr();
    const defMark = bookId === 'updates' ? u.bookmarkDefaultUpdates : u.bookmarkDefaultManual;
    if (!data) {
      containerEl.innerHTML = `<div class="cover-page"><div class="page-kicker">${u.endKicker}</div><p class="cover-subtitle">${u.endText}</p><button type="button" class="btn-cover-primary" data-goto="2">${u.endBtn}</button></div>`;
      numEl.textContent = '—';
      codeEl.textContent = 'WP-FM // END';
      secEl.textContent = defMark;
      return;
    }

    numEl.textContent = String(data.page);
    codeEl.textContent = data.docCode || `WP-FM // ${String(data.page).padStart(2, '0')}`;
    secEl.textContent = data.bookmark || defMark;

    if (data.type === 'cover') {
      containerEl.innerHTML = data.html;
    } else if (data.type === 'toc') {
      containerEl.innerHTML = buildTocHtml();
    } else {
      const isDone = data.chapterId ? doneChapters.has(data.chapterId) : false;
      const doneBtnHtml = data.chapterId ? `
        <button type="button" class="btn-mark-done ${isDone ? 'done' : ''}" data-toggle-ch="${data.chapterId}">
          ${isDone ? u.markDone : u.markBtn}
        </button>
      ` : '';

      containerEl.innerHTML = `
        <div class="page-head">
          <div>
            <div class="page-kicker">${data.kicker || ''}</div>
            <h1 class="page-title">${data.title || ''}</h1>
          </div>
          ${doneBtnHtml}
        </div>
        ${data.html}
      `;
    }
    containerEl.scrollTop = 0;
  }

  /* ── RENDER PAGE / SPREAD ─────────────────────────────────── */
  function renderPage(pageNum, direction) {
    hideTermTooltip();
    let target = clampPage(pageNum);
    currentPage = target;

    const spread = isSpreadActive();
    if (spread && target % 2 === 0) {
      // Левая страница разворота — нечётная: 1-2 (Обложка + Содержание), 3-4 (Глава 1), 5-6 (Глава 2)...
      target = clampPage(target - 1);
      currentPage = target;
    }

    codexWrapper.classList.toggle('is-spread', spread);
    stopTts();

    try {
      localStorage.setItem(STORAGE_KEYS.page, String(currentPage));
      if (window.location.hash !== `#page=${currentPage}`) {
        history.replaceState(null, '', `#page=${currentPage}`);
      }
    } catch (_) {}

    if (direction) {
      codexCover.classList.remove('flip-next', 'flip-prev');
      void codexCover.offsetWidth;
      codexCover.classList.add(direction === 'next' ? 'flip-next' : 'flip-prev');
      playFlipSound();
    }

    const leftData = pages[currentPage - 1];
    renderSinglePageInto(leftData, elContentLeft, elPageNumLeft, elDocCodeLeft, elSecLeft);

    let rightData = null;
    if (spread) {
      rightData = pages[currentPage] || null;
      renderSinglePageInto(rightData, elContentRight, elPageNumRight, elDocCodeRight, elSecRight);
      elCounterCurrent.textContent = rightData ? `${currentPage}–${rightData.page}` : String(currentPage);
    } else {
      elCounterCurrent.textContent = String(currentPage);
    }

    const u = uiStr();
    const activeData = (leftData?.type === 'cover' && rightData) ? rightData : leftData;
    elBookmark.textContent = activeData?.bookmark || (bookId === 'updates' ? u.bookmarkDefaultUpdates : u.bookmarkDefaultManual);
    if (scrubberChapter) {
      scrubberChapter.textContent = activeData?.title || activeData?.bookmark || '';
    }
    elCounterTotal.textContent = String(totalPages);
    pageScrubber.max = String(totalPages);
    pageScrubber.value = String(currentPage);

    updateYoutubeDrawer(rightData?.chapterId || leftData?.chapterId);

    const totalCh = tocSections.reduce((acc, s) => acc + s.chapters.length, 0);
    elChapterProgress.textContent = `${u.studiedPrefix} ${doneChapters.size} / ${totalCh}`;

    const atStart = currentPage <= 1;
    const atEnd = spread ? currentPage >= totalPages - 1 : currentPage >= totalPages;
    btnPrev.disabled = atStart;
    sidePrev.disabled = atStart;
    btnNext.disabled = atEnd;
    sideNext.disabled = atEnd;
  }

  function updateYoutubeDrawer(chapterId) {
    const db = activeVideos || {};
    const entry = db[chapterId] || db.default;
    if (!entry) return;

    ytTopicTitle.textContent = entry.topic;
    ytDrawerList.innerHTML = entry.videos.map(v => `
      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="yt-video-card">
        <span class="yt-play-badge" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 9,5 2,9"/></svg>
        </span>
        <div>
          <div class="yt-video-title">${v.title}</div>
          <div class="yt-video-author">${v.author}</div>
        </div>
      </a>
    `).join('');
    ytSearchMore.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(entry.query || 'Warpath гайд')}`;
  }

  /* ── NAVIGATION ───────────────────────────────────────────── */
  function goNext() {
    const spread = isSpreadActive();
    if (spread ? currentPage >= totalPages - 1 : currentPage >= totalPages) return;

    let next = currentPage + (spread ? 2 : 1);
    if (skipSubpages) {
      while (next < totalPages && !pages[next - 1].isChapterStart) next++;
    }
    renderPage(next, 'next');
  }

  function goPrev() {
    if (currentPage <= 1) return;
    const spread = isSpreadActive();

    let prev = currentPage - (spread ? 2 : 1);
    if (skipSubpages) {
      while (prev > 1 && !pages[prev - 1].isChapterStart) prev--;
    }
    renderPage(prev, 'prev');
  }

  /* ── SEARCH ───────────────────────────────────────────────── */
  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function runSearch(query) {
    const u = uiStr();
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = `<p style="font-size:13px;color:var(--text-secondary);">${u.searchEmpty}</p>`;
      return;
    }

    const hits = [];
    for (const p of pages) {
      if (p.type === 'toc') continue;
      const text = `${p.title} ${p.kicker} ${stripHtml(p.html)}`;
      const idx = text.toLowerCase().indexOf(q);
      if (idx !== -1) {
        const start = Math.max(0, idx - 40);
        const end = Math.min(text.length, idx + 90);
        const snippet = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');
        hits.push({ page: p.page, title: p.title, snippet });
      }
    }

    if (hits.length === 0) {
      searchResults.innerHTML = `<p style="font-size:13px;color:var(--text-secondary);">${u.searchNoHits}</p>`;
      return;
    }

    searchResults.innerHTML = hits.map(h => `
      <button type="button" class="search-hit" data-goto="${h.page}">
        <div class="search-hit-title">${u.pageWord} ${h.page} — ${h.title}</div>
        <div class="search-hit-snippet">${h.snippet}</div>
      </button>
    `).join('');
  }

  /* ── PROGRESS & DRAWER TOC ────────────────────────────────── */
  function updateProgressUI() {
    const u = uiStr();
    const totalChapters = tocSections.reduce((acc, s) => acc + s.chapters.length, 0);
    const doneCount = doneChapters.size;
    const pct = totalChapters ? Math.round((doneCount / totalChapters) * 100) : 0;

    progressLabel.textContent = `${doneCount} / ${totalChapters} (${pct}%)`;
    progressFill.style.width = `${pct}%`;

    drawerToc.innerHTML = tocSections.flatMap(s => s.chapters).map(ch => {
      const isDone = doneChapters.has(ch.id);
      return `
        <button type="button" class="drawer-toc-btn" data-goto="${ch.page}">
          <span>${isDone ? '[✓]' : '[ ]'} ${ch.id}. ${ch.title}</span>
          <span style="color:var(--accent-amber);font-weight:700;font-family:'JetBrains Mono',monospace;">${u.pageShort} ${ch.page}</span>
        </button>
      `;
    }).join('');
  }

  /* ── HQ: TABS, TICKETS, CALCULATOR & COMMUNITY ────────────── */
  function getTicketContext() {
    const u = uiStr();
    const vol = bookId === 'updates' ? u.ticketVol2 : u.ticketVol1;
    const cur = pages.find(p => p.page === currentPage) || pages[0];
    const chap = cur?.bookmark || cur?.title || `${u.pageWord} ${currentPage}`;
    return { vol, page: currentPage, chap };
  }

  function updateGithubIssueLink() {
    if (!btnGithubIssue) return;
    const u = uiStr();
    const ctx = getTicketContext();
    const cat = ticketType?.value || u.githubTitlePrefix;
    const nick = ticketNick?.value.trim() || u.ticketDefaultNick;
    const msg = ticketText?.value.trim() || u.ticketDefaultMsg;
    const title = `[${cat}] ${ctx.vol}, ${u.pageShort} ${ctx.page} (${ctx.chap})`;
    const body = `Volume: ${ctx.vol}\nPage: ${ctx.page} (${ctx.chap})\nCategory: ${cat}\nFrom: ${nick}\n\nDetails:\n${msg}`;
    btnGithubIssue.href = `https://github.com/228burger228/warpathGideVibe/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }

  function updateTicketContext() {
    const u = uiStr();
    const ctx = getTicketContext();
    if (ticketContextBadge) {
      ticketContextBadge.textContent = `${u.ticketContextPrefix}: ${ctx.vol} • ${u.pageWord} ${ctx.page} • ${ctx.chap}`;
    }
    updateGithubIssueLink();
  }

  function openHq(tabName = 'tickets') {
    document.querySelectorAll('[data-hq-tab]').forEach(btn => {
      const active = btn.dataset.hqTab === tabName;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.hq-panel').forEach(panel => {
      const active = panel.id === `hq-panel-${tabName}`;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
    updateTicketContext();
    renderTickets();
    if (!hqDialog.open) hqDialog.showModal();
  }

  function renderTickets() {
    const u = uiStr();
    if (!tickets.length) {
      ticketHistoryEl.innerHTML = '';
      return;
    }
    ticketHistoryEl.innerHTML = `
      <div class="field-label" style="margin-top:4px;">${u.ticketHistoryTitle}</div>
      ${tickets.map(t => `
        <div class="ticket-item">
          <div class="ticket-item-head">
            <span>${t.id} • ${t.type}</span>
            <span>${u.pageShort} ${t.page}</span>
          </div>
          <div style="color:var(--text-secondary);">${t.text}</div>
        </div>
      `).join('')}
    `;
  }

  let calcBound = false;
  let calcRecalc = null;
  function initCalculator() {
    const data = activeCalc;
    if (!data) return;

    const prevUnit = calcUnit.value;
    const prevOff = calcOfficer.value;
    const prevEq = calcEquip.value;

    calcUnit.innerHTML = data.units.map(u => `<option value="${u.id}">${u.label}</option>`).join('');
    calcOfficer.innerHTML = data.officers.map(o => `<option value="${o.id}">${o.name}</option>`).join('');
    calcEquip.innerHTML = data.equipment.map(e => `<option value="${e.id}">${e.name}</option>`).join('');

    if (prevUnit && data.units.some(x => x.id === prevUnit)) calcUnit.value = prevUnit;
    if (prevOff && data.officers.some(x => x.id === prevOff)) calcOfficer.value = prevOff;
    if (prevEq && data.equipment.some(x => x.id === prevEq)) calcEquip.value = prevEq;

    calcRecalc = () => {
      const curData = activeCalc;
      const st = uiStr();
      const u = curData.units.find(x => x.id === calcUnit.value) || curData.units[0];
      const lvl = parseInt(calcLevel.value, 10) || 10;
      const m = curData.levelMult[lvl] || 1;
      const o = curData.officers.find(x => x.id === calcOfficer.value) || curData.officers[0];
      const eq = curData.equipment.find(x => x.id === calcEquip.value) || curData.equipment[0];

      calcLevelVal.textContent = String(lvl);

      const am = 1 + (o.atkB + eq.atkB) / 100;
      const dm = 1 + (o.defB + eq.defB) / 100;
      const hm = 1 + (o.hpB + eq.hpB) / 100;

      const atk = Math.round(u.baseAtk * m * am);
      const def = Math.round(u.baseDef * m * dm);
      const hp = Math.round(u.baseHP * m * hm);
      const power = Math.round((u.baseAtk + u.baseDef + u.baseHP * 0.05) * m * ((am + dm + hm) / 3));

      const fmt = n => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n);

      calcResults.innerHTML = `
        <div class="calc-stat"><div class="calc-stat-label">${st.calcPower}</div><div class="calc-stat-val">${fmt(power)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">${st.calcAtk}</div><div class="calc-stat-val">${fmt(atk)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">${st.calcDef}</div><div class="calc-stat-val">${fmt(def)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">${st.calcHp}</div><div class="calc-stat-val">${fmt(hp)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">${st.calcSpeed}</div><div class="calc-stat-val">${u.baseMov}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">${st.calcAtkBonus}</div><div class="calc-stat-val">+${o.atkB + eq.atkB}%</div></div>
      `;
    };

    if (!calcBound) {
      [calcUnit, calcLevel, calcOfficer, calcEquip].forEach(el => el.addEventListener('input', () => calcRecalc?.()));
      calcBound = true;
    }
    calcRecalc();
  }

  function initCommunity() {
    const items = activeCommunity || [];
    communityList.innerHTML = items.map(item => `
      <div class="comm-card">
        <div>
          <div class="comm-name">${item.name}</div>
          <div class="comm-desc">${item.desc}</div>
        </div>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="comm-link">${item.cta}</a>
      </div>
    `).join('');
  }

  async function copyTextSafe(txt) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(txt);
        return true;
      }
    } catch (_) {}
    try {
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (_) {
      return false;
    }
  }

  let promoBound = false;
  function initPromoCodes() {
    if (!promoList) return;
    let usedSet = new Set();
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.usedCodes) || '[]');
      if (Array.isArray(raw)) usedSet = new Set(raw);
    } catch (_) {}

    const saveUsed = () => {
      try { localStorage.setItem(STORAGE_KEYS.usedCodes, JSON.stringify([...usedSet])); } catch (_) {}
    };

    const renderCodes = () => {
      const st = uiStr();
      const codes = activePromoCodes || [];
      promoList.innerHTML = codes.map(c => {
        const isUsed = usedSet.has(c.code);
        return `
          <div class="promo-card ${isUsed ? 'is-used' : ''}">
            <div class="promo-left">
              <div class="promo-top-row">
                <code class="promo-code-chip notranslate" translate="no">${c.code}</code>
                <span class="ed-tag">${c.tag}</span>
              </div>
              <div class="promo-note">${c.note}</div>
            </div>
            <div class="promo-actions">
              <button type="button" class="promo-copy-btn" data-copy-code="${c.code}">${st.copyBtn}</button>
              <button type="button" class="promo-used-btn" data-toggle-code="${c.code}">${isUsed ? st.usedDoneBtn : st.usedMarkBtn}</button>
            </div>
          </div>
        `;
      }).join('');
    };

    if (!promoBound) {
      promoList.addEventListener('click', async (e) => {
        const st = uiStr();
        const copyBtn = e.target.closest('[data-copy-code]');
        if (copyBtn) {
          const code = copyBtn.dataset.copyCode;
          const ok = await copyTextSafe(code);
          copyBtn.textContent = ok ? st.copiedBtn : code;
          copyBtn.classList.add('is-copied');
          setTimeout(() => {
            copyBtn.textContent = uiStr().copyBtn;
            copyBtn.classList.remove('is-copied');
          }, 1600);
          return;
        }
        const toggleBtn = e.target.closest('[data-toggle-code]');
        if (toggleBtn) {
          const code = toggleBtn.dataset.toggleCode;
          if (usedSet.has(code)) usedSet.delete(code);
          else usedSet.add(code);
          saveUsed();
          renderCodes();
        }
      });

      btnCopyAllCodes?.addEventListener('click', async () => {
        const st = uiStr();
        const codes = activePromoCodes || [];
        const activeList = codes.filter(c => !usedSet.has(c.code)).map(c => c.code);
        const payload = (activeList.length ? activeList : codes.map(c => c.code)).join('\n');
        const ok = await copyTextSafe(payload);
        const orig = btnCopyAllCodes.textContent;
        btnCopyAllCodes.textContent = ok ? st.copiedAll(payload.split('\n').length) : st.copyErr;
        setTimeout(() => { btnCopyAllCodes.textContent = orig; }, 1800);
      });
      promoBound = true;
    }

    renderCodes();
  }

  /* ── EVENTS ───────────────────────────────────────────────── */
  codexCover.addEventListener('mouseover', (e) => {
    const term = e.target.closest('.wp-term');
    if (term) showTermTooltip(term);
  });

  codexCover.addEventListener('mouseout', (e) => {
    const term = e.target.closest('.wp-term');
    if (term && !term.contains(e.relatedTarget)) hideTermTooltip();
  });

  codexCover.addEventListener('focusin', (e) => {
    const term = e.target.closest('.wp-term');
    if (term) showTermTooltip(term);
  });

  codexCover.addEventListener('focusout', (e) => {
    const term = e.target.closest('.wp-term');
    if (term) hideTermTooltip();
  });

  codexCover.addEventListener('click', (e) => {
    const term = e.target.closest('.wp-term');
    if (term) {
      e.preventDefault();
      e.stopPropagation();
      const justOpened = Date.now() - hoverOpenedAt < 450;
      if (activeTermEl === term && tooltipEl && !tooltipEl.hidden && !justOpened) hideTermTooltip();
      else showTermTooltip(term);
      return;
    }
    hideTermTooltip();
    const gotoBtn = e.target.closest('[data-goto]');
    if (gotoBtn) {
      const target = parseInt(gotoBtn.dataset.goto, 10);
      renderPage(target, target >= currentPage ? 'next' : 'prev');
      return;
    }
    const chBtn = e.target.closest('[data-toggle-ch]');
    if (chBtn) {
      toggleChapterDone(parseInt(chBtn.dataset.toggleCh, 10));
      return;
    }
    const hqBtn = e.target.closest('[data-open-hq]');
    if (hqBtn) {
      openHq(hqBtn.dataset.openHq);
    }
  });

  btnPrev.addEventListener('click', goPrev);
  sidePrev.addEventListener('click', goPrev);
  btnNext.addEventListener('click', goNext);
  sideNext.addEventListener('click', goNext);

  const toggleShelfDrawer = (force) => {
    if (!shelfDrawer) return;
    const open = typeof force === 'boolean' ? force : !shelfDrawer.classList.contains('is-open');
    shelfDrawer.classList.toggle('is-open', open);
    btnShelfToggle?.setAttribute('aria-expanded', String(open));
    if (open && window.innerWidth < 1100) toggleYtDrawer(false);
  };

  const toggleYtDrawer = (force) => {
    const open = typeof force === 'boolean' ? force : !ytDrawer.classList.contains('is-open');
    ytDrawer.classList.toggle('is-open', open);
    btnYtToggle.setAttribute('aria-expanded', String(open));
    if (open && window.innerWidth < 1100) toggleShelfDrawer(false);
  };
  btnYtToggle.addEventListener('click', () => toggleYtDrawer());
  btnYtMobile?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleYtDrawer();
  });
  btnYtClose.addEventListener('click', () => toggleYtDrawer(false));
  btnShelfToggle?.addEventListener('click', () => toggleShelfDrawer());
  btnShelfMobile?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleShelfDrawer();
  });
  btnShelfClose?.addEventListener('click', () => toggleShelfDrawer(false));
  btnShelfExt?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!shelfExtMenu) return;
    const willOpen = shelfExtMenu.hidden;
    shelfExtMenu.hidden = !willOpen;
    btnShelfExt.setAttribute('aria-expanded', String(willOpen));
  });

  pageScrubber.addEventListener('input', () => {
    const target = parseInt(pageScrubber.value, 10);
    renderPage(target, null);
  });

  elBookmark.addEventListener('click', () => renderPage(2, currentPage > 2 ? 'prev' : 'next'));
  btnTocJump.addEventListener('click', () => renderPage(2, currentPage > 2 ? 'prev' : 'next'));
  document.getElementById('brand-home').addEventListener('click', (e) => {
    e.preventDefault();
    renderPage(2, currentPage > 2 ? 'prev' : 'next');
  });

  /* Меню инструментов */
  toolsMenu.addEventListener('toggle', (e) => {
    btnToolsTrigger.setAttribute('aria-expanded', String(e.newState === 'open'));
  });

  toggleSpread.addEventListener('change', () => {
    spreadPref = toggleSpread.checked;
    try { localStorage.setItem(STORAGE_KEYS.spread, spreadPref ? '1' : '0'); } catch (_) {}
    renderPage(currentPage, null);
  });

  chkSkip.addEventListener('change', () => {
    skipSubpages = chkSkip.checked;
    try { localStorage.setItem(STORAGE_KEYS.skip, skipSubpages ? '1' : '0'); } catch (_) {}
  });

  btnTheme.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try { localStorage.setItem(STORAGE_KEYS.theme, nextTheme); } catch (_) {}
    updateToolBadges();
  });

  btnTts.addEventListener('click', () => {
    if (isSpeaking) stopTts();
    else startTts();
    try { toolsMenu.hidePopover?.(); } catch (_) {}
  });

  ttsPauseBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window) || !isSpeaking) return;
    const u = uiStr();
    if (isPaused) {
      window.speechSynthesis.resume();
      isPaused = false;
      ttsPauseBtn.textContent = u.pause;
    } else {
      window.speechSynthesis.pause();
      isPaused = true;
      ttsPauseBtn.textContent = u.resume;
    }
  });

  ttsSpeedBtn.addEventListener('click', () => {
    const speeds = [1.0, 1.25, 1.5];
    ttsRate = speeds[(speeds.indexOf(ttsRate) + 1) % speeds.length];
    ttsSpeedBtn.textContent = `${ttsRate}×`;
    try { localStorage.setItem(STORAGE_KEYS.ttsRate, String(ttsRate)); } catch (_) {}
    if (isSpeaking) startTts();
  });

  ttsStopBtn.addEventListener('click', stopTts);

  btnSfx.addEventListener('click', () => {
    sfxEnabled = !sfxEnabled;
    try { localStorage.setItem(STORAGE_KEYS.sfx, sfxEnabled ? '1' : '0'); } catch (_) {}
    updateToolBadges();
    if (sfxEnabled) playFlipSound();
  });

  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
    setTimeout(updateToolBadges, 120);
  });

  document.addEventListener('fullscreenchange', updateToolBadges);

  btnSearch.addEventListener('click', () => {
    searchDialog.showModal();
    runSearch(searchInput.value);
    searchInput.focus();
  });

  searchInput.addEventListener('input', () => runSearch(searchInput.value));
  searchResults.addEventListener('click', (e) => {
    const hit = e.target.closest('[data-goto]');
    if (!hit) return;
    const target = parseInt(hit.dataset.goto, 10);
    searchDialog.close();
    renderPage(target, target >= currentPage ? 'next' : 'prev');
  });

  btnTocOpen.addEventListener('click', () => {
    updateProgressUI();
    menuDialog.showModal();
  });

  drawerToc.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-goto]');
    if (!btn) return;
    const target = parseInt(btn.dataset.goto, 10);
    menuDialog.close();
    renderPage(target, target >= currentPage ? 'next' : 'prev');
  });

  btnResetProgress.addEventListener('click', () => {
    doneChapters.clear();
    saveDone();
    updateProgressUI();
    renderPage(currentPage, null);
  });

  btnHq.addEventListener('click', () => openHq('tickets'));

  document.querySelectorAll('[data-hq-tab]').forEach(btn => {
    btn.addEventListener('click', () => openHq(btn.dataset.hqTab));
  });

  btnReportError?.addEventListener('click', () => {
    if (ticketType) ticketType.value = 'Ошибка в гайде';
    openHq('tickets');
    requestAnimationFrame(() => ticketText?.focus());
  });
  ticketType?.addEventListener('change', updateGithubIssueLink);
  ticketNick?.addEventListener('input', updateGithubIssueLink);
  ticketText?.addEventListener('input', updateGithubIssueLink);

  ticketForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = ticketText.value.trim();
    if (!msg) return;

    const id = `#WP-${Math.floor(1000 + Math.random() * 9000)}`;
    const nick = ticketNick.value.trim() || 'Командир';
    const type = ticketType.value;
    const ctx = getTicketContext();

    const formatted = `[ТИКЕТ ${id}]\nКатегория: ${type}\nОт: ${nick}\nРаздел: ${ctx.vol}, стр. ${ctx.page} (${ctx.chap})\nСуть: ${msg}`;

    updateGithubIssueLink();
    tickets.unshift({ id, type, page: `${ctx.page} (${ctx.chap})`, text: msg });
    saveTickets();
    renderTickets();

    let copied = false;
    try {
      await navigator.clipboard.writeText(formatted);
      copied = true;
    } catch (_) {}

    ticketFeedback.textContent = copied
      ? uiStr().ticketCopied(id)
      : uiStr().ticketFallback(id);

    ticketText.value = '';
  });

  function applyLanguage(lang, rerender = true) {
    const en = window.WP_EN;
    const targetLang = (lang === 'en' && en) ? 'en' : 'ru';
    currentLang = targetLang;
    document.documentElement.setAttribute('lang', targetLang);
    try { localStorage.setItem(STORAGE_KEYS.lang, targetLang); } catch (_) {}

    if (targetLang === 'en') {
      const volEn = bookId === 'updates' ? en.vol2 : en.vol1;
      pages = volEn.pages;
      tocSections = volEn.tocSections;
      activeVideos = Object.assign({}, RU_VOL.videos, volEn.videos);
      activeCalc = Object.assign({}, RU_VOL.calc, en.calc);
      activeCommunity = en.community;
      activePromoCodes = RU_VOL.promoCodes.map(c => ({
        code: c.code,
        tag: en.promoNotes[c.code]?.tag || c.tag,
        note: en.promoNotes[c.code]?.note || c.note
      }));
      activeGlossary = Object.assign({}, WP_GLOSSARY, en.glossary);
    } else {
      pages = RU_VOL.pages;
      tocSections = RU_VOL.tocSections;
      activeVideos = RU_VOL.videos;
      activeCalc = RU_VOL.calc;
      activeCommunity = RU_VOL.community;
      activePromoCodes = RU_VOL.promoCodes;
      activeGlossary = WP_GLOSSARY;
    }

    applyStaticUi(targetLang);
    updateToolBadges();
    initCalculator();
    initCommunity();
    initPromoCodes();
    updateProgressUI();
    updateTicketContext();
    renderTickets();
    if (rerender) renderPage(currentPage, null);
  }

  btnLangToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    applyLanguage(currentLang === 'ru' ? 'en' : 'ru', true);
  });

  /* Клавиатура, клик вне полок и свайпы */
  document.addEventListener('click', (e) => {
    if (activeTermEl && !e.target.closest('.wp-term')) hideTermTooltip();
    const isReadingNav = !document.contains(e.target) || Boolean(e.target.closest('.reader-dock, .side-arrow, .codex-wrapper, [data-goto]'));
    if (ytDrawer.classList.contains('is-open') && !ytDrawer.contains(e.target) && !btnYtMobile?.contains(e.target) && !isReadingNav) {
      toggleYtDrawer(false);
    }
    if (shelfDrawer && shelfDrawer.classList.contains('is-open') && !shelfDrawer.contains(e.target) && !btnShelfMobile?.contains(e.target)) {
      toggleShelfDrawer(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (searchDialog.open || menuDialog.open || hqDialog.open) return;
    if (e.key === 'Escape') {
      hideTermTooltip();
      toggleYtDrawer(false);
      toggleShelfDrawer(false);
    } else if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
    else if (e.key === '/') {
      e.preventDefault();
      btnSearch.click();
    }
  });

  let lastSpreadActive = isSpreadActive();
  window.addEventListener('resize', () => {
    const nextSpreadActive = isSpreadActive();
    if (nextSpreadActive !== lastSpreadActive) {
      lastSpreadActive = nextSpreadActive;
      renderPage(currentPage, null);
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;
  codexCover.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  codexCover.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) goNext();
      else goPrev();
    }
  }, { passive: true });

  /* ── INIT ─────────────────────────────────────────────────── */
  loadState();
  let initialLang = 'ru';
  try {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
    if (urlLang === 'en' || urlLang === 'ru') initialLang = urlLang;
    else if (savedLang === 'en' || savedLang === 'ru') initialLang = savedLang;
  } catch (_) {}
  applyLanguage(initialLang, false);
  renderPage(currentPage, null);
})();
