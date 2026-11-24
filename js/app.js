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
    sfx: 'wp_guide_sfx'
  };

  const pages = window.BOOK_PAGES || [];
  const tocSections = window.BOOK_TOC_SECTIONS || [];
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

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const sidePrev = document.getElementById('side-prev');
  const sideNext = document.getElementById('side-next');
  const btnTocJump = document.getElementById('btn-toc-jump');

  /* Шапка и отдельное меню инструментов */
  const btnTocOpen = document.getElementById('btn-toc-open');
  const btnSearch = document.getElementById('btn-search');
  const btnHq = document.getElementById('btn-hq');
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
  const btnYtClose = document.getElementById('btn-yt-close');
  const ytTopicTitle = document.getElementById('yt-topic-title');
  const ytDrawerList = document.getElementById('yt-drawer-list');
  const ytSearchMore = document.getElementById('yt-search-more');

  /* Правая Книжная полка */
  const shelfDrawer = document.getElementById('shelf-drawer');
  const btnShelfToggle = document.getElementById('btn-shelf-toggle');
  const btnShelfClose = document.getElementById('btn-shelf-close');

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
  const ticketForm = document.getElementById('ticket-form');
  const ticketType = document.getElementById('ticket-type');
  const ticketNick = document.getElementById('ticket-nick');
  const ticketText = document.getElementById('ticket-text');
  const ticketFeedback = document.getElementById('ticket-feedback');
  const ticketHistoryEl = document.getElementById('ticket-history');

  const calcUnit = document.getElementById('calc-unit');
  const calcLevel = document.getElementById('calc-level');
  const calcLevelVal = document.getElementById('calc-level-val');
  const calcOfficer = document.getElementById('calc-officer');
  const calcEquip = document.getElementById('calc-equip');
  const calcResults = document.getElementById('calc-results');
  const communityList = document.getElementById('community-list');

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
  function isSpreadActive() {
    return spreadPref && window.innerWidth >= 960 && currentPage > 1;
  }

  function updateToolBadges() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeBadgeState.textContent = theme === 'dark' ? 'Тёмная' : 'Светлая';
    sfxBadgeState.textContent = sfxEnabled ? 'Вкл' : 'Выкл';
    sfxBadgeState.classList.toggle('on', sfxEnabled);
    ttsBadgeState.textContent = isSpeaking ? 'Играет' : 'Выкл';
    ttsBadgeState.classList.toggle('on', isSpeaking);
    fsBadgeState.textContent = document.fullscreenElement ? 'Полный' : 'Окно';
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

  function getRussianVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    return (
      voices.find(v => v.lang.toLowerCase().startsWith('ru') && /pavel|dmitry|google|irina/i.test(v.name)) ||
      voices.find(v => v.lang.toLowerCase().startsWith('ru')) ||
      null
    );
  }

  function stopTts() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    isSpeaking = false;
    isPaused = false;
    ttsBar.hidden = true;
    ttsPauseBtn.textContent = 'Пауза';
    updateToolBadges();
  }

  function startTts() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const leftTxt = stripHtml(elContentLeft.innerHTML);
    const rightTxt = isSpreadActive() ? stripHtml(elContentRight.innerHTML) : '';
    const text = normalizeSpeechText(`${leftTxt}. ${rightTxt}`);
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ru-RU';
    utter.rate = ttsRate;
    const ruVoice = getRussianVoice();
    if (ruVoice) utter.voice = ruVoice;

    utter.onstart = () => {
      ttsStatusText.textContent = `Радиосвязь: стр. ${currentPage} (${ttsRate}×)`;
    };
    utter.onend = () => stopTts();
    utter.onerror = () => stopTts();

    isSpeaking = true;
    isPaused = false;
    ttsBar.hidden = false;
    ttsPauseBtn.textContent = 'Пауза';
    ttsStatusText.textContent = `Радиосвязь: стр. ${currentPage} (${ttsRate}×)`;
    updateToolBadges();
    window.speechSynthesis.speak(utter);
  }

  /* ── RENDER HELPERS ───────────────────────────────────────── */
  function buildTocHtml() {
    return `
      <div class="page-head">
        <div>
          <div class="page-kicker">НАВИГАЦИЯ ПО УСТАВУ</div>
          <h1 class="page-title">СОДЕРЖАНИЕ</h1>
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
                  <button type="button" class="toc-check ${isDone ? 'checked' : ''}" data-toggle-ch="${ch.id}" aria-label="Отметить главу ${ch.id} как изученную" aria-pressed="${isDone}">
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
    if (!data) {
      containerEl.innerHTML = '<div class="cover-page"><div class="page-kicker">КОНЕЦ УСТАВА</div><p class="cover-subtitle">Вы дошли до последней страницы. Вернитесь к содержанию или задайте вопрос в Штабе WarpathHub.</p><button type="button" class="btn-cover-primary" data-goto="2">К содержанию</button></div>';
      numEl.textContent = '—';
      codeEl.textContent = 'WP-FM // END';
      secEl.textContent = 'WARPATH УСТАВ';
      return;
    }

    numEl.textContent = String(data.page);
    codeEl.textContent = data.docCode || `WP-FM // ${String(data.page).padStart(2, '0')}`;
    secEl.textContent = data.bookmark || 'WARPATH УСТАВ';

    if (data.type === 'cover') {
      containerEl.innerHTML = data.html;
    } else if (data.type === 'toc') {
      containerEl.innerHTML = buildTocHtml();
    } else {
      const isDone = data.chapterId ? doneChapters.has(data.chapterId) : false;
      const doneBtnHtml = data.chapterId ? `
        <button type="button" class="btn-mark-done ${isDone ? 'done' : ''}" data-toggle-ch="${data.chapterId}">
          ${isDone ? '✓ Изучено' : 'Отметить'}
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
    let target = clampPage(pageNum);
    currentPage = target;

    const spread = isSpreadActive();
    if (spread && target > 1 && target % 2 === 1) {
      // В режиме разворота левая страница — чётная (2-3, 4-5, 6-7...), чтобы Содержание (2) было слева
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

    if (spread) {
      const rightData = pages[currentPage] || null;
      renderSinglePageInto(rightData, elContentRight, elPageNumRight, elDocCodeRight, elSecRight);
      elCounterCurrent.textContent = rightData ? `${currentPage}–${rightData.page}` : String(currentPage);
    } else {
      elCounterCurrent.textContent = String(currentPage);
    }

    elBookmark.textContent = leftData?.bookmark || 'WARPATH УСТАВ';
    elCounterTotal.textContent = String(totalPages);
    pageScrubber.max = String(totalPages);
    pageScrubber.value = String(currentPage);

    updateYoutubeDrawer(leftData?.chapterId);

    const totalCh = tocSections.reduce((acc, s) => acc + s.chapters.length, 0);
    elChapterProgress.textContent = `ИЗУЧЕНО ${doneChapters.size} / ${totalCh}`;

    const atStart = currentPage <= 1;
    const atEnd = spread ? currentPage >= totalPages - 1 : currentPage >= totalPages;
    btnPrev.disabled = atStart;
    sidePrev.disabled = atStart;
    btnNext.disabled = atEnd;
    sideNext.disabled = atEnd;
  }

  function updateYoutubeDrawer(chapterId) {
    const db = window.YOUTUBE_BY_TOPIC || {};
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

    if (currentPage === 1) {
      renderPage(2, 'next');
      return;
    }

    let next = currentPage + (spread ? 2 : 1);
    if (skipSubpages) {
      while (next < totalPages && !pages[next - 1].isChapterStart) next++;
    }
    renderPage(next, 'next');
  }

  function goPrev() {
    if (currentPage <= 1) return;
    const spread = isSpreadActive();

    if (currentPage === 2) {
      renderPage(1, 'prev');
      return;
    }

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
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = '<p style="font-size:13px;color:var(--text-secondary);">Введите термин, имя офицера, юнит или @shevchenko01_bot для поиска по уставу.</p>';
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
      searchResults.innerHTML = '<p style="font-size:13px;color:var(--text-secondary);">Ничего не найдено. Попробуйте другой запрос.</p>';
      return;
    }

    searchResults.innerHTML = hits.map(h => `
      <button type="button" class="search-hit" data-goto="${h.page}">
        <div class="search-hit-title">Стр. ${h.page} — ${h.title}</div>
        <div class="search-hit-snippet">${h.snippet}</div>
      </button>
    `).join('');
  }

  /* ── PROGRESS & DRAWER TOC ────────────────────────────────── */
  function updateProgressUI() {
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
          <span style="color:var(--accent-amber);font-weight:700;font-family:'JetBrains Mono',monospace;">стр. ${ch.page}</span>
        </button>
      `;
    }).join('');
  }

  /* ── HQ: TABS, TICKETS, CALCULATOR & COMMUNITY ────────────── */
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
    renderTickets();
    if (!hqDialog.open) hqDialog.showModal();
  }

  function renderTickets() {
    if (!tickets.length) {
      ticketHistoryEl.innerHTML = '';
      return;
    }
    ticketHistoryEl.innerHTML = `
      <div class="field-label" style="margin-top:4px;">Последние сформированные тикеты</div>
      ${tickets.map(t => `
        <div class="ticket-item">
          <div class="ticket-item-head">
            <span>${t.id} • ${t.type}</span>
            <span>стр. ${t.page}</span>
          </div>
          <div style="color:var(--text-secondary);">${t.text}</div>
        </div>
      `).join('')}
    `;
  }

  function initCalculator() {
    const data = window.CALC_DATA;
    if (!data) return;

    calcUnit.innerHTML = data.units.map(u => `<option value="${u.id}">${u.label}</option>`).join('');
    calcOfficer.innerHTML = data.officers.map(o => `<option value="${o.id}">${o.name}</option>`).join('');
    calcEquip.innerHTML = data.equipment.map(e => `<option value="${e.id}">${e.name}</option>`).join('');

    const recalc = () => {
      const u = data.units.find(x => x.id === calcUnit.value) || data.units[0];
      const lvl = parseInt(calcLevel.value, 10) || 10;
      const m = data.levelMult[lvl] || 1;
      const o = data.officers.find(x => x.id === calcOfficer.value) || data.officers[0];
      const eq = data.equipment.find(x => x.id === calcEquip.value) || data.equipment[0];

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
        <div class="calc-stat"><div class="calc-stat-label">Боевая мощь</div><div class="calc-stat-val">${fmt(power)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">Атака</div><div class="calc-stat-val">${fmt(atk)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">Защита</div><div class="calc-stat-val">${fmt(def)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">Здоровье (HP)</div><div class="calc-stat-val">${fmt(hp)}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">Скорость</div><div class="calc-stat-val">${u.baseMov}</div></div>
        <div class="calc-stat"><div class="calc-stat-label">Бонус АТК</div><div class="calc-stat-val">+${o.atkB + eq.atkB}%</div></div>
      `;
    };

    [calcUnit, calcLevel, calcOfficer, calcEquip].forEach(el => el.addEventListener('input', recalc));
    recalc();
  }

  function initCommunity() {
    const items = window.COMMUNITY_LINKS || [];
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

  /* ── EVENTS ───────────────────────────────────────────────── */
  codexCover.addEventListener('click', (e) => {
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
  btnYtClose.addEventListener('click', () => toggleYtDrawer(false));
  btnShelfToggle?.addEventListener('click', () => toggleShelfDrawer());
  btnShelfClose?.addEventListener('click', () => toggleShelfDrawer(false));

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
    if (isPaused) {
      window.speechSynthesis.resume();
      isPaused = false;
      ttsPauseBtn.textContent = 'Пауза';
    } else {
      window.speechSynthesis.pause();
      isPaused = true;
      ttsPauseBtn.textContent = 'Продолжить';
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

  ticketForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = ticketText.value.trim();
    if (!msg) return;

    const id = `#WP-${Math.floor(1000 + Math.random() * 9000)}`;
    const nick = ticketNick.value.trim() || 'Командир';
    const type = ticketType.value;

    const formatted = `[ТИКЕТ ${id}]\nКатегория: ${type}\nОт: ${nick}\nСтраница устава: ${currentPage}\nСуть: ${msg}`;

    tickets.unshift({ id, type, page: currentPage, text: msg });
    saveTickets();
    renderTickets();

    let copied = false;
    try {
      await navigator.clipboard.writeText(formatted);
      copied = true;
    } catch (_) {}

    ticketFeedback.textContent = copied
      ? `Тикет ${id} скопирован. Вставь его в @shevchenko01_bot или чат WarpathHub.`
      : `Тикет ${id} сохранён в историю. Открой @shevchenko01_bot для отправки.`;

    ticketText.value = '';
  });

  /* Клавиатура и свайпы */
  document.addEventListener('keydown', (e) => {
    if (searchDialog.open || menuDialog.open || hqDialog.open) return;
    if (e.key === 'ArrowRight') goNext();
    else if (e.key === 'ArrowLeft') goPrev();
    else if (e.key === '/') {
      e.preventDefault();
      btnSearch.click();
    }
  });

  window.addEventListener('resize', () => {
    renderPage(currentPage, null);
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
  initCalculator();
  initCommunity();
  renderPage(currentPage, null);
})();
