/* ═══════════════════════════════════════════════════════════════
   WARPATH: ACE SHOOTER — Движок Полевого устава, Тикетов, Калькулятора и TTS
   ═══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const STORAGE_KEYS = {
    page: 'wp_guide_page',
    done: 'wp_guide_done_chapters',
    skip: 'wp_guide_skip_subpages',
    theme: 'wp_guide_theme',
    tickets: 'wp_guide_tickets',
    ttsRate: 'wp_guide_tts_rate',
    sfx: 'wp_guide_sfx'
  };

  const pages = window.BOOK_PAGES || [];
  const tocSections = window.BOOK_TOC_SECTIONS || [];
  const totalPages = pages.length;

  const elPage = document.getElementById('book-page');
  const elContent = document.getElementById('page-content');
  const elPageNum = document.getElementById('page-num');
  const elDocCode = document.getElementById('page-doc-code');
  const elBookmark = document.getElementById('chapter-bookmark');
  const elCounterCurrent = document.getElementById('counter-current');
  const elCounterTotal = document.getElementById('counter-total');

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnTocJump = document.getElementById('btn-toc-jump');
  const btnTts = document.getElementById('btn-tts');
  const btnSfx = document.getElementById('btn-sfx');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnSearch = document.getElementById('btn-search');
  const btnTheme = document.getElementById('btn-theme');
  const btnMenu = document.getElementById('btn-menu');
  const btnHq = document.getElementById('btn-hq');
  const chkSkip = document.getElementById('skip-subpages');

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
  let sfxEnabled = true;
  let audioCtx = null;
  let tickets = [];
  let ttsRate = 1.0;
  let isSpeaking = false;
  let isPaused = false;

  function playFlipSound() {
    if (!sfxEnabled) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const dur = 0.055;
      const buf = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * dur), audioCtx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.35));
      }
      const src = audioCtx.createBufferSource();
      src.buffer = buf;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      const gain = audioCtx.createGain();
      gain.gain.value = 0.08;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      src.start();
    } catch (_) {}
  }

  /* ── STATE ────────────────────────────────────────────────── */
  function loadState() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      const savedSfx = localStorage.getItem(STORAGE_KEYS.sfx);
      if (savedSfx === '0') sfxEnabled = false;
      btnSfx.setAttribute('aria-pressed', String(sfxEnabled));
      const savedDone = JSON.parse(localStorage.getItem(STORAGE_KEYS.done) || '[]');
      if (Array.isArray(savedDone)) doneChapters = new Set(savedDone.map(Number));

      const savedTickets = JSON.parse(localStorage.getItem(STORAGE_KEYS.tickets) || '[]');
      if (Array.isArray(savedTickets)) tickets = savedTickets;

      const savedRate = parseFloat(localStorage.getItem(STORAGE_KEYS.ttsRate) || '1');
      if ([1, 1.25, 1.5].includes(savedRate)) ttsRate = savedRate;
      ttsSpeedBtn.textContent = `${ttsRate}×`;

      skipSubpages = localStorage.getItem(STORAGE_KEYS.skip) === '1';
      chkSkip.checked = skipSubpages;

      const hashMatch = window.location.hash.match(/page=(\d+)/);
      const savedPage = parseInt(localStorage.getItem(STORAGE_KEYS.page) || '2', 10);
      const initial = hashMatch ? parseInt(hashMatch[1], 10) : savedPage;
      currentPage = clampPage(isNaN(initial) ? 2 : initial);
    } catch (_) {
      currentPage = 2;
    }
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
    btnTts.setAttribute('aria-pressed', 'false');
    ttsBar.hidden = true;
    ttsPauseBtn.textContent = 'Пауза';
  }

  function startTts() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const text = normalizeSpeechText(stripHtml(elContent.innerHTML));
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
    btnTts.setAttribute('aria-pressed', 'true');
    ttsBar.hidden = false;
    ttsPauseBtn.textContent = 'Пауза';
    ttsStatusText.textContent = `Радиосвязь: стр. ${currentPage} (${ttsRate}×)`;
    window.speechSynthesis.speak(utter);
  }

  /* ── RENDER TOC ───────────────────────────────────────────── */
  function buildTocHtml() {
    return `
      <div class="page-header-block">
        <div class="page-kicker">ПОЛЕВОЙ УСТАВ КОМАНДИРА</div>
        <h1 class="page-title">СОДЕРЖАНИЕ</h1>
        <div class="page-divider"><span class="page-diamond"></span></div>
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
                    <span class="toc-num">${ch.id}</span>
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

  /* ── RENDER PAGE ──────────────────────────────────────────── */
  function renderPage(pageNum, direction) {
    const target = clampPage(pageNum);
    const data = pages[target - 1];
    if (!data) return;

    currentPage = target;
    stopTts();

    try {
      localStorage.setItem(STORAGE_KEYS.page, String(currentPage));
      if (window.location.hash !== `#page=${currentPage}`) {
        history.replaceState(null, '', `#page=${currentPage}`);
      }
    } catch (_) {}

    if (direction) {
      elPage.classList.remove('flip-next', 'flip-prev');
      void elPage.offsetWidth;
      elPage.classList.add(direction === 'next' ? 'flip-next' : 'flip-prev');
      playFlipSound();
    }

    elBookmark.textContent = data.bookmark || 'WARPATH УСТАВ';
    elDocCode.textContent = data.docCode || `WP-FM // P-${currentPage}`;
    elPageNum.textContent = String(currentPage);
    elCounterCurrent.textContent = String(currentPage);
    elCounterTotal.textContent = String(totalPages);

    if (data.type === 'cover') {
      elContent.innerHTML = data.html;
    } else if (data.type === 'toc') {
      elContent.innerHTML = buildTocHtml();
    } else {
      const isDone = data.chapterId ? doneChapters.has(data.chapterId) : false;
      const doneBtnHtml = data.chapterId ? `
        <div class="chapter-top-bar">
          <button type="button" class="btn-mark-done ${isDone ? 'done' : ''}" data-toggle-ch="${data.chapterId}">
            ${isDone ? '✓ Изучено' : 'Отметить главу'}
          </button>
        </div>
      ` : '';

      elContent.innerHTML = `
        ${doneBtnHtml}
        <div class="page-header-block">
          <div class="page-kicker">${data.kicker || ''}</div>
          <h1 class="page-title">${data.title || ''}</h1>
          <div class="page-divider"><span class="page-diamond"></span></div>
        </div>
        ${data.html}
      `;
    }

    elContent.scrollTop = 0;
    btnPrev.disabled = currentPage <= 1;
    btnNext.disabled = currentPage >= totalPages;
  }

  /* ── NAVIGATION ───────────────────────────────────────────── */
  function goNext() {
    if (currentPage >= totalPages) return;
    let next = currentPage + 1;
    if (skipSubpages) {
      while (next < totalPages && !pages[next - 1].isChapterStart) next++;
    }
    renderPage(next, 'next');
  }

  function goPrev() {
    if (currentPage <= 1) return;
    let prev = currentPage - 1;
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
      searchResults.innerHTML = '<p style="font-size:13px;color:var(--text-ui-muted);">Введите термин, имя офицера, юнит или @shevchenko01_bot для поиска по уставу.</p>';
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
      searchResults.innerHTML = '<p style="font-size:13px;color:var(--text-ui-muted);">Ничего не найдено. Попробуйте другой запрос.</p>';
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
          <span>${isDone ? '✅' : '📖'} ${ch.id}. ${ch.title}</span>
          <span style="color:var(--wp-gold);font-weight:700;">стр. ${ch.page}</span>
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
          <div style="color:var(--text-ui-muted);">${t.text}</div>
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
  elContent.addEventListener('click', (e) => {
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
  btnNext.addEventListener('click', goNext);

  elBookmark.addEventListener('click', () => renderPage(2, currentPage > 2 ? 'prev' : 'next'));
  btnTocJump.addEventListener('click', () => renderPage(2, currentPage > 2 ? 'prev' : 'next'));
  document.getElementById('brand-home').addEventListener('click', (e) => {
    e.preventDefault();
    renderPage(2, currentPage > 2 ? 'prev' : 'next');
  });

  chkSkip.addEventListener('change', () => {
    skipSubpages = chkSkip.checked;
    try { localStorage.setItem(STORAGE_KEYS.skip, skipSubpages ? '1' : '0'); } catch (_) {}
  });

  btnTheme.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try { localStorage.setItem(STORAGE_KEYS.theme, nextTheme); } catch (_) {}
  });

  btnTts.addEventListener('click', () => {
    if (isSpeaking) stopTts();
    else startTts();
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
    btnSfx.setAttribute('aria-pressed', String(sfxEnabled));
    try { localStorage.setItem(STORAGE_KEYS.sfx, sfxEnabled ? '1' : '0'); } catch (_) {}
    if (sfxEnabled) playFlipSound();
  });

  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      btnFullscreen.setAttribute('aria-pressed', 'true');
    } else {
      document.exitFullscreen?.().catch(() => {});
      btnFullscreen.setAttribute('aria-pressed', 'false');
    }
  });

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

  btnMenu.addEventListener('click', () => {
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
      ? `Тикет ${id} скопирован! Вставь его в @shevchenko01_bot или чат WarpathHub.`
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

  let touchStartX = 0;
  let touchStartY = 0;
  elPage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  elPage.addEventListener('touchend', (e) => {
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
