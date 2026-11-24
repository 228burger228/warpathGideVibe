/* ═══════════════════════════════════════════════════════════════
   WARPATH УСТАВ — ТОМ II: Хроника обновлений (v12.0 → v14.60)
   Архив патчей, чтобы быстро наверстать все изменения игры
   ═══════════════════════════════════════════════════════════════ */

window.BOOK_ID = 'updates';

window.BOOK_TOC_SECTIONS = [
  {
    title: 'ЭКСПРЕСС-ВВОДНАЯ',
    chapters: [
      { id: 1, title: 'Что изменилось: главное за год', page: 3 },
      { id: 2, title: 'Эра 12.x–13.x: 9.2★ и Чипы', page: 5 }
    ]
  },
  {
    title: 'ПАТЧИ 14.0 — 14.3',
    chapters: [
      { id: 3, title: '14.0–14.2: Шоурум и Коалиции', page: 7 },
      { id: 4, title: '14.3: Воздушные группы и Офицеры', page: 9 }
    ]
  },
  {
    title: 'ПАТЧИ 14.4 — 14.60 (АКТУАЛ)',
    chapters: [
      { id: 5, title: '14.4: 36 уровень и Эпоха мастеров', page: 11 },
      { id: 6, title: '14.5: Пять офицеров и ПВО города', page: 13 },
      { id: 7, title: '14.6: Обмен офицеров, Техас, Арта', page: 15 },
      { id: 8, title: 'Чеклист возвращения в строй', page: 17 }
    ]
  }
];

window.BOOK_PAGES = [
  /* ── СТРАНИЦА 1: ОБЛОЖКА ТОМА II ── */
  {
    page: 1,
    type: 'cover',
    chapterId: null,
    isChapterStart: true,
    docCode: 'WP-UPD // VOL-02',
    bookmark: 'ТОМ II • ХРОНИКА',
    kicker: 'WARPATH: ACE SHOOTER',
    title: 'ХРОНИКА ПАТЧЕЙ (12.0 — 14.6)',
    html: `
      <div class="cover-page">
        <span class="cover-stamp">ТОМ II • АРХИВ ОБНОВЛЕНИЙ</span>
        <div class="cover-logo-box">
          <img src="assets/bg-tank.webp" alt="Warpath — Архив обновлений" class="cover-logo-img" width="1400" height="789" fetchpriority="high">
        </div>
        <h1 class="page-title" style="font-size: 20px;">ХРОНИКА ОБНОВЛЕНИЙ WARPATH</h1>
        <div class="page-divider"><span class="page-diamond"></span></div>
        <p class="cover-subtitle">
          Вернулся после перерыва или пропустил пару сезонов? Здесь собраны все ключевые обновления от 12.0 до актуального 14.60 — чтобы за 5 минут наверстать все механики.
        </p>
        <div class="page-kicker">8 ГЛАВ • 18 СТРАНИЦ • v12.0 → v14.60</div>
        <div class="cover-actions">
          <button type="button" class="btn-cover-primary" data-goto="2">Открыть хронику →</button>
          <a href="index.html" class="btn-cover-sec">К Тома I (Устав)</a>
        </div>
      </div>
    `
  },

  /* ── СТРАНИЦА 2: СОДЕРЖАНИЕ ── */
  {
    page: 2,
    type: 'toc',
    chapterId: null,
    isChapterStart: true,
    docCode: 'WP-UPD // INDEX',
    bookmark: 'СОДЕРЖАНИЕ • ТОМ II',
    kicker: 'НАВИГАЦИЯ',
    title: 'СОДЕРЖАНИЕ',
    html: ''
  },

  /* ── ГЛАВА 1 (СТР. 3–4) ── */
  {
    page: 3,
    type: 'content',
    chapterId: 1,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-01',
    bookmark: 'ГЛАВА 1 • СВОДКА',
    kicker: 'ЭКСПРЕСС-ВВОДНАЯ',
    title: '1. Что изменилось: главное за год',
    html: `
      <p class="page-lead">Если ты давно не заходил в игру, Warpath сильно вырос вширь: появились новые уровни базы, чипы, воздушные группы, морской Гегемон и свежие офицеры.</p>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Потолок построек — 36 уровень</span><span class="ed-tag">ПАТЧ 14.4</span></div>
          <p class="ed-row-desc">Появились новые материалы и технологии в ветке «Эпоха мастеров» (Age of Artisans).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Обмен офицеров и Золотая арта</span><span class="ed-tag">ПАТЧ 14.6</span></div>
          <p class="ed-row-desc">Вернулся долгожданный обмен старых офицеров на актуальных, вышла золотая арта и карта Техаса.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Вычислительные чипы и Инфовойна</span><span class="ed-tag">12.3 → 14.x</span></div>
          <p class="ed-row-desc">Новая система усиления огневой мощи и живучести лагерей через центр инфовойны.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Воздушные группы и ВМС</span><span class="ed-tag">14.3 → 14.6</span></div>
          <p class="ed-row-desc">Отдельные воздушные формации и связка авиации с морскими боями в Гегемоне.</p>
        </div>
      </div>
    `
  },
  {
    page: 4,
    type: 'content',
    chapterId: 1,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-01B',
    bookmark: 'ГЛАВА 1 • ТАБЛИЦА',
    kicker: 'ГЛАВА 1 (ДОП. СТРАНИЦА)',
    title: 'Карта версий клиента (11.0 → 14.6)',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Версия</th><th>Ключевая фишка</th><th>Влияние на аккаунт</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>12.3–13.0</strong></td><td>Центр инфовойны, чипы</td><td>Новый обязательный источник статов лагеря.</td></tr>
            <tr><td><strong>13.4–13.6</strong></td><td>9.2★, Экспедиции, 5 поколение</td><td>Джексон Хейз и Хеймекер стали основой урона.</td></tr>
            <tr><td><strong>14.0–14.2</strong></td><td>Легендарный шоурум, Карибы</td><td>Скины на базу/юниты, коалиции в морских зонах.</td></tr>
            <tr><td><strong>14.3</strong></td><td>Воздушные группы, 2 офицера</td><td>Преследующая тень (истребитель) и Боевой сокол (арта).</td></tr>
            <tr><td><strong>14.4</strong></td><td>36 уровень построек, Лига армий</td><td>Сдвинулся эндгейм базы и экипировка авиации.</td></tr>
            <tr><td><strong>14.5</strong></td><td>5 новых офицеров, ПВО города</td><td>Усиление гарнизона, ВМС и новые ящики снабжения.</td></tr>
            <tr><td><strong>14.6</strong></td><td>Обмен офицеров, Техас, Зол. арта</td><td>Главный шанс перелить старых офицеров в мету.</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ── ГЛАВА 2 (СТР. 5–6) ── */
  {
    page: 5,
    type: 'content',
    chapterId: 2,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-02',
    bookmark: 'ГЛАВА 2 • 12.x–13.x',
    kicker: 'ОСНОВА СОВРЕМЕННОЙ ИГРЫ',
    title: '2. Эра 12.x–13.x: 9.2★ и Чипы',
    html: `
      <p class="page-lead">Именно в версиях 12.3–13.6 сформировался современный облик игры: синие звёзды, вычислительные чипы и переработанные экспедиции.</p>
      <ul class="editorial-list">
        <li><strong>Синие звёзды 9.2★:</strong> современные танки (Т-14 Армата и др.), пехота и авиация получили апгрейд сверх старых жёлтых 7.2★.</li>
        <li><strong>Центр инфовойны (12.3+):</strong> за Вычислительные чипы и карты вычислений прокачивается контроль неба, огневая мощь и живучесть лагерей.</li>
        <li><strong>Офицеры 5-го поколения:</strong> Джексон Хейз (+15% интенсивности урона на 8 сек) и Хеймекер (разрушитель тяжёлой брони) задали стандарт ДД.</li>
        <li><strong>Новые Экспедиции (13.4):</strong> больше уровней и стабильный пассивный фарм фрагментов.</li>
      </ul>
    `
  },
  {
    page: 6,
    type: 'content',
    chapterId: 2,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-02B',
    bookmark: 'ГЛАВА 2 • ЧИПЫ',
    kicker: 'ГЛАВА 2 (ДОП. СТРАНИЦА)',
    title: 'Как не слить Вычислительные чипы',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Совет Паши е6аки (@e6aka56)</div>
        <p>Чипы — такой же жёсткий ресурс, как золото. Не крути их хаотично во все ветки подряд: выбирай узлы строго под свой основной лагерь и тип техники (наземка или воздух).</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Копи под ивенты:</strong> трать чипы и карты вычислений на этапах событий, чтобы забирать доп. сундуки наград.</li>
        <li><strong>Синергия с 5 поколением:</strong> бонусы чипов на огневую мощь умножаются на проценты от пробуждённого Джексона или Хеймекера.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 3 (СТР. 7–8) ── */
  {
    page: 7,
    type: 'content',
    chapterId: 3,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-03',
    bookmark: 'ГЛАВА 3 • 14.0–14.2',
    kicker: 'ПАТЧИ 14.0 — 14.3',
    title: '3. 14.0–14.2: Шоурум и Коалиции',
    html: `
      <p class="page-lead">Линейка патчей 14.0–14.2 принесла юбилейные события, переработку кастомизации и морские коалиции.</p>
      <ul class="editorial-list">
        <li><strong>Легендарный шоурум (14.0):</strong> магазин уникальных скинов для баз, эффектов атак и раскрасок юнитов (например, Титановое ядро, Морозный край).</li>
        <li><strong>Офицеры 14.0–14.1:</strong> пополнение ростера танковых и боевых командиров, обновление промокодов.</li>
        <li><strong>Коалиции в Карибском море (14.2):</strong> изменения механики союзов на морских картах, перебалансировка точек и снабжения.</li>
      </ul>
    `
  },
  {
    page: 8,
    type: 'content',
    chapterId: 3,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-03B',
    bookmark: 'ГЛАВА 3 • СКИНЫ',
    kicker: 'ГЛАВА 3 (ДОП. СТРАНИЦА)',
    title: 'Зачем нужны скины и коллекция',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Уровень коллекционера</div>
        <p>Скины в Warpath — это не только визуал. Они поднимают <strong>Уровень коллекционера</strong>, который даёт постоянные пассивные проценты к характеристикам всех войск (в патче 14.5 потолок подняли до 170 уровня).</p>
      </div>
      <p class="page-lead">Для игроков без доната (ФД) выгодно забирать бесплатные рамки и скины с крупных юбилейных и сезонных событий.</p>
    `
  },

  /* ── ГЛАВА 4 (СТР. 9–10) ── */
  {
    page: 9,
    type: 'content',
    chapterId: 4,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-04',
    bookmark: 'ГЛАВА 4 • 14.3',
    kicker: 'ПАТЧИ 14.0 — 14.3',
    title: '4. 14.3: Воздушные группы и Офицеры',
    html: `
      <p class="page-lead">Патч 14.3 сделал серьёзный упор на воздух и дальнобойную арту, запустив тестирование <strong>Воздушных групп (Air Fleet)</strong>.</p>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Воздушные группы (Air Fleet)</span><span class="ed-tag">МЕХАНИКА</span></div>
          <p class="ed-row-desc">Новый интерфейс и боевые формации для авиации (обкатывалось на сезонных картах завоеваний вроде Александрии).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Преследующая тень (Валентина Круз)</span><span class="ed-tag">ИСТРЕБИТЕЛЬ</span></div>
          <p class="ed-row-desc">Специализированный офицер на истребитель — резко усилила воздушный перехват и дуэли в небе.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Боевой сокол</span><span class="ed-tag">АРТА</span></div>
          <p class="ed-row-desc">Новый офицер для артиллерии, усиливший осадный потенциал и сплеш-урон.</p>
        </div>
      </div>
    `
  },
  {
    page: 10,
    type: 'content',
    chapterId: 4,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-04B',
    bookmark: 'ГЛАВА 4 • ВОЗДУХ',
    kicker: 'ГЛАВА 4 (ДОП. СТРАНИЦА)',
    title: 'Итоги тестов авиации в 14.3',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Роль воздуха в современной мете</div>
        <p>После патча 14.3 игнорировать авиацию нельзя: даже 1 хорошо собранный истребитель или бомбардировщик с профильным офицером прикрывает наземку от вражеских гаубиц и RL.</p>
      </div>
      <ul class="editorial-list">
        <li>Если играешь без доната — качай один универсальный истребитель (см. разборы Паши е6аки).</li>
        <li>В левом меню «Видео» открывай тесты офицеров «Преследующая тень» и «Боевой сокол».</li>
      </ul>
    `
  },

  /* ── ГЛАВА 5 (СТР. 11–12) ── */
  {
    page: 11,
    type: 'content',
    chapterId: 5,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-05',
    bookmark: 'ГЛАВА 5 • 14.4',
    kicker: 'ПАТЧИ 14.4 — 14.60',
    title: '5. 14.4: 36 уровень и Эпоха мастеров',
    html: `
      <p class="page-lead">Крупнейшее экономическое обновление <strong>«Эпоха мастеров» (Age of Artisans)</strong> сдвинуло потолок развития базы.</p>
      <ul class="editorial-list">
        <li><strong>36-й уровень построек:</strong> здания получили уровни с 32 по 36 с новыми материалами и требованиями.</li>
        <li><strong>Новые ветки технологий:</strong> расширены военные и промышленные исследования под эндгейм.</li>
        <li><strong>Снаряжение авиации (Toy Joy Night):</strong> добавлен наколенный планшет «Сапсан» (Peregrine — крит-урон навыков и огневая мощь истребителя) и тактика «Тёмное крыло».</li>
        <li><strong>2-й Завоевательный поход: Лига армий:</strong> обновлённый турнирный формат со свободными агентами и топ-8.</li>
      </ul>
    `
  },
  {
    page: 12,
    type: 'content',
    chapterId: 5,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-05B',
    bookmark: 'ГЛАВА 5 • 32→36',
    kicker: 'ГЛАВА 5 (ДОП. СТРАНИЦА)',
    title: 'Как подходить к 36 уровню базы',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Таблица стоимости 32→36</div>
        <p>Апгрейд зданий с 32 до 36 уровня требует колоссальных запасов ресурсов и ускорений. Перед началом стройки обязательно посмотри таблицу стоимости в ролике Паши е6аки (в левом меню «Видео»).</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Не качай всё подряд до 36:</strong> в первую очередь поднимай Командный центр, Исследовательский центр и ключевые казармы своего лагеря.</li>
        <li><strong>Трать ускорения только в этапы Arms Race / крупных ивентов:</strong> отдача в золоте и деталях окупит половину стройки.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 6 (СТР. 13–14) ── */
  {
    page: 13,
    type: 'content',
    chapterId: 6,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-06',
    bookmark: 'ГЛАВА 6 • 14.5',
    kicker: 'ПАТЧИ 14.4 — 14.60',
    title: '6. 14.5: Пять офицеров и ПВО города',
    html: `
      <p class="page-lead">Патч 14.5 добавил сразу пятёрку разноплановых офицеров и сильно переработал защиту баз и альянсовые задачи.</p>
      <figure class="page-figure">
        <img src="assets/new-officers.webp" alt="Пять новых офицеров патча 14.5" class="page-art" width="800" height="800" loading="lazy">
        <figcaption class="page-caption">Пятёрка офицеров патча 14.5: ВМС, защита, арта и поле</figcaption>
      </figure>
      <ul class="editorial-list">
        <li><strong>Новые офицеры:</strong> Блэкджек (подлодки), Мусорщик (защита пехоты и танков), Красный Крокодил (наступ. ВМС), Главный Судья (арта / гарнизон), Ржавый (танки в поле).</li>
      </ul>
    `
  },
  {
    page: 14,
    type: 'content',
    chapterId: 6,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-06B',
    bookmark: 'ГЛАВА 6 • ЗАЩИТА',
    kicker: 'ГЛАВА 6 (ДОП. СТРАНИЦА)',
    title: 'Технологии обороны и Ящики 14.5',
    html: `
      <ul class="editorial-list">
        <li><strong>Динамическая оборона города:</strong> новые технологии «Динамическое ПВО города», «Плотная оборона» и «Усиленная броня», а также защита от бомбардировки при возведении стен.</li>
        <li><strong>Серия «Ящики снабжения» (Munitions Crate):</strong> ивент-пропуск с рикошетными снарядами и редкими предметами.</li>
        <li><strong>Кап коллекционера 170:</strong> увеличена максимальная планка коллекции.</li>
        <li><strong>Улучшения удобства (QoL):</strong> доработаны миссии снабжения альянса, точки сбора и поиск/фильтр в чате.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 7 (СТР. 15–16) ── */
  {
    page: 15,
    type: 'content',
    chapterId: 7,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-07',
    bookmark: 'ГЛАВА 7 • 14.6',
    kicker: 'ПАТЧИ 14.4 — 14.60',
    title: '7. 14.6: Обмен офицеров, Техас, Арта',
    html: `
      <p class="page-lead">Актуальная версия <strong>14.60.453</strong> — одно из самых ожидаемых обновлений для перестройки старых аккаунтов.</p>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Возвращение Обмена офицеров</span><span class="ed-tag">ГЛАВНОЕ</span></div>
          <p class="ed-row-desc">Позволяет перенести вложения из устаревших командиров в актуальную мету. Обязательно используй калькулятор обмена перед стартом!</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Золотая арта и новые скины</span><span class="ed-tag">ТЕХНИКА</span></div>
          <p class="ed-row-desc">Свежие усиления артиллерии и новые образы в Легендарном шоуруме («Морозный край», «Золотой скарабей»).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Карта Техаса и Электросети</span><span class="ed-tag">ТВД</span></div>
          <p class="ed-row-desc">Новая тактическая механика контроля энергосетей / электричества на карте Техаса.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ВВС в Морском Гегемоне</span><span class="ed-tag">ТУРНИР</span></div>
          <p class="ed-row-desc">Воздушные силы теперь полноценно интегрированы в структуру Морского кубка гегемона.</p>
        </div>
      </div>
    `
  },
  {
    page: 16,
    type: 'content',
    chapterId: 7,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-07B',
    bookmark: 'ГЛАВА 7 • ОБМЕН 14.6',
    kicker: 'ГЛАВА 7 (ДОП. СТРАНИЦА)',
    title: 'Кого менять в Обмене 14.6',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Сверься перед обменом!</div>
        <p>Прежде чем нажимать кнопку обмена, открой слева вкладку <strong>«Видео»</strong>: там есть свежий тир-лист Бургера <em>«Каких офицеров качать в 14.6»</em> и <em>«Калькулятор обмена офицеров за 1 минуту»</em> от Паши е6аки.</p>
      </div>
      <ul class="editorial-list">
        <li>Сливай устаревших офицеров 2–3 поколений, которыми не пользуешься ни в поле, ни в гарнизоне.</li>
        <li>Приоритет — довести до Пробуждения ключевых ДД/танков (Джексон, Хеймекер, Кёртис или новинки под твой род войск).</li>
      </ul>
    `
  },

  /* ── ГЛАВА 8 (СТР. 17–18) ── */
  {
    page: 17,
    type: 'content',
    chapterId: 8,
    isChapterStart: true,
    docCode: 'WP-UPD // CH-08',
    bookmark: 'ГЛАВА 8 • ЧЕКЛИСТ',
    kicker: 'ПАТЧИ 14.4 — 14.60',
    title: '8. Чеклист возвращения в строй',
    html: `
      <p class="page-lead">Пошаговый план действий, если ты вернулся в Warpath в патче 14.60 после долгого перерыва:</p>
      <ul class="editorial-list">
        <li><strong>Шаг 1:</strong> Проверь, доступен ли на аккаунте ивент <strong>Обмена офицеров</strong> — это самый быстрый способ догнать мету.</li>
        <li><strong>Шаг 2:</strong> Разбери неактуальные дубли юнитов в Инженерном центре (или слей их в звёзды 9.2★ основной технике).</li>
        <li><strong>Шаг 3:</strong> Вступи в живой альянс (или спроси в чате <a href="https://t.me/WarpathHub/1" target="_blank" rel="noopener noreferrer">WarpathHub</a>) — без баффов альянса и сундуков до 36 уровня дойти тяжело.</li>
        <li><strong>Шаг 4:</strong> Открой <strong>Том I (Полевой устав)</strong> справа на Книжной полке, чтобы освежить контры и сборку 5 слотов.</li>
      </ul>
    `
  },
  {
    page: 18,
    type: 'content',
    chapterId: 8,
    isChapterStart: false,
    docCode: 'WP-UPD // CH-08B',
    bookmark: 'ГЛАВА 8 • СВЯЗЬ',
    kicker: 'ГЛАВА 8 (ДОП. СТРАНИЦА)',
    title: 'Разборы аккаунта и помощь',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Нужен разбор именно твоего аккаунта?</div>
        <p>Залетай в наш чат <strong>WarpathHub</strong> или отправляй вопрос через тикет-систему в боте Паши <strong>@shevchenko01_bot</strong> — подскажем, кого обменять и что качать в 14.6.</p>
      </div>
      <div class="inline-cta-row">
        <a href="index.html" class="page-link-btn">Перейти к Тома I (Устав)</a>
        <button type="button" class="page-link-btn secondary" data-open-hq="tickets">Открыть Штаб и Тикеты</button>
      </div>
    `
  }
];

/* Общие данные для Штаба (Калькулятор и Комьюнити) */
window.CALC_DATA = {
  units: [
    { id: 'heavy', label: 'ТТ (Тяжёлый танк)', baseAtk: 1100, baseDef: 1050, baseHP: 28000, baseMov: 36 },
    { id: 'superheavy', label: 'ШХ (Сверхтяжёлый / Маус)', baseAtk: 1480, baseDef: 1320, baseHP: 40000, baseMov: 24 },
    { id: 'tankhunter', label: 'ПТ (Истребитель танков)', baseAtk: 1250, baseDef: 520, baseHP: 14000, baseMov: 46 },
    { id: 'howitzer', label: 'Арта (Гаубица)', baseAtk: 1400, baseDef: 350, baseHP: 9000, baseMov: 22 },
    { id: 'launcher', label: 'RL («Катюша» / РСЗО)', baseAtk: 1600, baseDef: 300, baseHP: 8500, baseMov: 30 },
    { id: 'medium', label: 'СТ (Средний танк)', baseAtk: 860, baseDef: 760, baseHP: 18000, baseMov: 52 },
    { id: 'light', label: 'ЛТ (Лёгкий танк)', baseAtk: 680, baseDef: 520, baseHP: 12000, baseMov: 70 },
    { id: 'antitank', label: 'ПТО (Противотанк. пушка)', baseAtk: 1100, baseDef: 440, baseHP: 10000, baseMov: 28 },
    { id: 'infantry', label: 'Пехота', baseAtk: 420, baseDef: 380, baseHP: 8000, baseMov: 55 }
  ],
  levelMult: { 1: 1.0, 2: 1.1, 3: 1.22, 4: 1.36, 5: 1.52, 6: 1.7, 7: 1.9, 8: 2.12, 9: 2.38, 10: 2.68 },
  officers: [
    { id: 'none', name: '— Без офицера —', atkB: 0, defB: 0, hpB: 0 },
    { id: 'jackson', name: 'Джексон Хейз (S, 5 пок.)', atkB: 30, defB: 10, hpB: 5 },
    { id: 'haymeker', name: 'Хеймекер (S, 5 пок.)', atkB: 35, defB: 5, hpB: 0 },
    { id: 'curtis', name: 'Кёртис (S, 4 пок.)', atkB: 10, defB: 22, hpB: 15 },
    { id: 'isabel', name: 'Иссабель (S, 4 пок.)', atkB: 25, defB: 5, hpB: 5 },
    { id: 'takeda', name: 'Такеда (A, 4 пок.)', atkB: 20, defB: 12, hpB: 8 },
    { id: 'slater', name: 'Слейтер (A, Авиация)', atkB: 22, defB: 6, hpB: 6 },
    { id: 'martin', name: 'Мартин (A, 3 пок.)', atkB: 18, defB: 8, hpB: 10 },
    { id: 'victor', name: 'Виктор (B, 3 пок.)', atkB: 8, defB: 20, hpB: 18 },
    { id: 'houghton', name: 'Хоутон (B, 3 пок.)', atkB: 12, defB: 10, hpB: 20 }
  ],
  equipment: [
    { id: 'none', name: '— Без снаряжения —', atkB: 0, defB: 0, hpB: 0 },
    { id: 'railgun', name: 'Рейлган (+18% АТК)', atkB: 18, defB: 0, hpB: 0 },
    { id: 'shield', name: 'Реактивная броня (+18% ЗАЩ, +12% HP)', atkB: 0, defB: 18, hpB: 12 },
    { id: 'mkII', name: 'Броня Mk.II (+12% ЗАЩ, +8% HP)', atkB: 0, defB: 12, hpB: 8 },
    { id: 'ammo', name: 'Бронебойные снаряды (+14% АТК, -5% ЗАЩ)', atkB: 14, defB: -5, hpB: 0 },
    { id: 'engine', name: 'Форсированный двигатель (+5% АТК)', atkB: 5, defB: 0, hpB: 0 }
  ]
};

window.COMMUNITY_LINKS = [
  { name: 'WarpathHub (Чат Telegram)', desc: 'Главный чат русскоязычного комьюнити: помощь, сборки, новости.', url: 'https://t.me/WarpathHub/1', cta: 'В чат ↗' },
  { name: '@shevchenko01_bot (Бот Паши)', desc: 'Калькулятор, тикет-система и модерация чата WarpathHub.', url: 'https://t.me/shevchenko01_bot', cta: 'Открыть ↗' },
  { name: 'Бургер (@burgerdom6)', desc: 'Тир-листы офицеров 14.6, разборы обменов, настройки аккаунта и бои.', url: 'https://www.youtube.com/@burgerdom6', cta: 'YouTube ↗' },
  { name: 'Паша е6ака (@e6aka56)', desc: 'Калькулятор обмена 14.6, таблицы построек 32→36, тесты юнитов и чипов.', url: 'https://www.youtube.com/@e6aka56', cta: 'YouTube ↗' },
  { name: 'Ehson', desc: 'Тактика, F2P-методы и разборы сборок для сноса баз.', url: 'https://www.youtube.com/@ItsEhson', cta: 'YouTube ↗' },
  { name: 'Сократ — ClanGothic (доп.)', desc: 'Обзоры патчей, лайфхаки и подбор доп. навыков офицеров.', url: 'https://www.youtube.com/@ClanGothic/videos', cta: 'YouTube ↗' },
  { name: 'WarpathYTwiki', desc: 'Энциклопедия юнитов, конструктор армий и база офицеров.', url: 'https://228burger228.github.io/WarpathYTwiki/index.html', cta: 'Сайт ↗' },
  { name: 'Официальный Discord Warpath', desc: 'Международный сервер разработчиков Lilith Games.', url: 'https://discord.com/invite/playwarpath', cta: 'Discord ↗' }
];

window.YOUTUBE_BY_TOPIC = {
  default: {
    topic: 'Обзоры патчей 14.4–14.6',
    query: 'Warpath 14.6 14.5 обзор патча',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: 'ОБМЕН ОФИЦЕРОВ В 14.6 И ДРУГИЕ ОБНОВЛЕНИЯ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/kZtiajsI_lg' },
      { title: 'Доп.: Обзор патча 14.6', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/YA7PniQREhc' }
    ]
  },
  1: {
    topic: 'Сводка обновлений 14.5–14.6',
    query: 'Warpath 14.5 14.6 новинки',
    videos: [
      { title: 'Главные новинки обновления 14.5 в Warpath Ace Shooter', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/oQx7FpiLlCc' },
      { title: 'ОБМЕН ОФИЦЕРОВ ВОЗВРАЩАЕТСЯ В ПАТЧЕ 14.6', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/kZtiajsI_lg' },
      { title: 'Доп.: Обзор патча 14.6', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/YA7PniQREhc' }
    ]
  },
  2: {
    topic: 'Чипы и Инфовойна',
    query: 'Warpath вычислительные чипы инфовойна',
    videos: [
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' }
    ]
  },
  3: {
    topic: 'Патчи 14.0–14.2: Коалиции и Шоурум',
    query: 'Warpath 14.0 14.1 14.2',
    videos: [
      { title: 'НОВЫЕ КОАЛИЦИИ СЛОМАНЫ В КАРИБСКОМ МОРЕ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/gjgxvQBHeX4' },
      { title: 'НОВЫЕ ОФИЦЕРЫ В ПАТЧЕ 14.1 ИМБА И МУСОР?!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/wP0dUT3-gG0' }
    ]
  },
  4: {
    topic: 'Патч 14.3: Воздух и Офицеры',
    query: 'Warpath 14.3 воздушные группы преследующая тень',
    videos: [
      { title: 'ВОЗДУШНЫЕ ГРУППЫ / 2 ОФИЦЕРА НОВЫХ / 14.3', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/hjbw1grtPv8' },
      { title: 'ТЕСТЫ! ОФИЦЕР НА ИСТРЕБИТЕЛЬ / ПРЕСЛЕДУЮЩАЯ ТЕНЬ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/Qdj-z8QjdCE' },
      { title: 'ОФИЦЕР НА АРТУ / БОЕВОЙ СОКОЛ / 14.3', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/DFdBAC2biT8' }
    ]
  },
  5: {
    topic: 'Патч 14.4: 36 уровень и технологии',
    query: 'Warpath 14.4 36 уровень построек',
    videos: [
      { title: '32→36 СТОИМОСТЬ ВСЕХ ПОСТРОЕК / ТАБЛИЦА', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/mM0hYObwXQE' },
      { title: '36 УРОВЕНЬ ПОСТРОЙКИ / НОВЫЕ ТЕХНОЛОГИИ / 14.4', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/pLXUnAi8ttw' },
      { title: 'Доп.: Я ошибся в обзоре патча 14.4', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/HDEnEOdZbbc' }
    ]
  },
  6: {
    topic: 'Патч 14.5: Пять новых офицеров',
    query: 'Warpath 14.5 новые офицеры обзор',
    videos: [
      { title: 'НОВЫЕ ОФИЦЕРЫ И ТАКТИКИ! СЕКРЕТНЫЙ ГОСТЬ / 14.5', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/MZJxppq8ByI' },
      { title: '2 НОВЫХ ОФИЦЕРА И ДРУГИЕ ОБНОВЛЕНИЯ В 14.5', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/HKUFDyEJBwg' },
      { title: 'Доп.: Обзор патча 14.5', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KBdEzmtui9Y' }
    ]
  },
  7: {
    topic: 'Патч 14.6: Обмен, Золотая арта, Техас',
    query: 'Warpath 14.6 обмен офицеров золотая арта',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: 'ОБМЕН ОФИЦЕРОВ ВОЗВРАЩАЕТСЯ! Золотая арта / 14.6', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/LrIujsuFFx0' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6 за 1 минуту!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' }
    ]
  },
  8: {
    topic: 'Возвращение в строй и разбор аккаунта',
    query: 'Warpath разбор аккаунта советы 2026',
    videos: [
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  }
};
