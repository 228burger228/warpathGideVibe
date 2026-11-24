/* ═══════════════════════════════════════════════════════════════
   WARPATH GUIDE — Движок интерактивной книги
   ═══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const STORAGE_KEYS = {
    page: 'wp_guide_page',
    done: 'wp_guide_done_chapters',
    skip: 'wp_guide_skip_subpages',
    theme: 'wp_guide_theme'
  };

  const pages = window.BOOK_PAGES || [];
  const tocSections = window.BOOK_TOC_SECTIONS || [];
  const totalPages = pages.length;

  const elPage = document.getElementById('book-page');
  const elContent = document.getElementById('page-content');
  const elPageNum = document.getElementById('page-num');
  const elBookmark = document.getElementById('chapter-bookmark');
  const elCounterCurrent = document.getElementById('counter-current');
  const elCounterTotal = document.getElementById('counter-total');

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnTocJump = document.getElementById('btn-toc-jump');
  const btnTts = document.getElementById('btn-tts');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnSearch = document.getElementById('btn-search');
  const btnTheme = document.getElementById('btn-theme');
  const btnMenu = document.getElementById('btn-menu');
  const chkSkip = document.getElementById('skip-subpages');

  const searchDialog = document.getElementById('search-dialog');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  const menuDialog = document.getElementById('menu-dialog');
  const drawerToc = document.getElementById('drawer-toc');
  const progressLabel = document.getElementById('progress-label');
  const progressFill = document.getElementById('progress-fill');
  const btnResetProgress = document.getElementById('btn-reset-progress');

  let currentPage = 2;
  let doneChapters = new Set();
  let skipSubpages = false;
  let isSpeaking = false;

  /* ── HELPERS ──────────────────────────────────────────────── */
  function loadState() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      const savedDone = JSON.parse(localStorage.getItem(STORAGE_KEYS.done) || '[]');
      if (Array.isArray(savedDone)) {
        doneChapters = new Set(savedDone.map(Number));
      }
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
    try {
      localStorage.setItem(STORAGE_KEYS.done, JSON.stringify([...doneChapters]));
    } catch (_) {}
  }

  function clampPage(n) {
    return Math.max(1, Math.min(totalPages, n));
  }

  function toggleChapterDone(chId) {
    if (!chId) return;
    if (doneChapters.has(chId)) {
      doneChapters.delete(chId);
    } else {
      doneChapters.add(chId);
    }
    saveDone();
    renderPage(currentPage, null);
    updateProgressUI();
  }

  function stopTts() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    btnTts.setAttribute('aria-pressed', 'false');
  }

  /* ── RENDER TOC ───────────────────────────────────────────── */
  function buildTocHtml() {
    return `
      <div class="page-header-block">
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
    }

    elBookmark.textContent = data.bookmark || 'WARPATH GUIDE';
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

  /* ── NAVIGATION WITH SKIP SUBPAGES ────────────────────────── */
  function goNext() {
    if (currentPage >= totalPages) return;
    let next = currentPage + 1;
    if (skipSubpages) {
      while (next < totalPages && !pages[next - 1].isChapterStart) {
        next++;
      }
    }
    renderPage(next, 'next');
  }

  function goPrev() {
    if (currentPage <= 1) return;
    let prev = currentPage - 1;
    if (skipSubpages) {
      while (prev > 1 && !pages[prev - 1].isChapterStart) {
        prev--;
      }
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
      searchResults.innerHTML = '<p style="font-size:13px;color:var(--text-ui-muted);">Введите слово, имя офицера или механику для поиска по всем страницам.</p>';
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
          <span style="color:var(--gold-main);font-weight:700;">стр. ${ch.page}</span>
        </button>
      `;
    }).join('');
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
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      stopTts();
      return;
    }
    const text = stripHtml(elContent.innerHTML);
    if (!text) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ru-RU';
    utter.rate = 1.05;
    utter.onend = () => stopTts();
    utter.onerror = () => stopTts();
    isSpeaking = true;
    btnTts.setAttribute('aria-pressed', 'true');
    window.speechSynthesis.speak(utter);
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

  /* Клавиатура и свайпы */
  document.addEventListener('keydown', (e) => {
    if (searchDialog.open || menuDialog.open) return;
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
  renderPage(currentPage, null);
})();
