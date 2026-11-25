/* ═══════════════════════════════════════════════════════════════
   WARPATH УСТАВ — ТОМ I: Полный справочник командира (48 страниц, 22 главы)
   База: клиент v14.60.10.464 + WarpathHub + WP Commander + SpeedPath + архив WarpathYTwiki
   ═══════════════════════════════════════════════════════════════ */

window.BOOK_ID = 'manual';

window.BOOK_TOC_SECTIONS = [
  {
    title: 'I. НАЧАЛО ИГРЫ',
    chapters: [
      { id: 1, title: 'Основы Warpath', page: 3 },
      { id: 2, title: 'Выбор фракции (Лагеря)', page: 5 },
      { id: 3, title: 'Правильный старт и Первый день', page: 7 }
    ]
  },
  {
    title: 'II. РАЗВИТИЕ И ЭКОНОМИКА',
    chapters: [
      { id: 4, title: 'Топ советов новичку (F2P)', page: 9 },
      { id: 5, title: 'Как тратить ЗОЛОТО (VIP 4 и 9)', page: 11 },
      { id: 6, title: 'Исследования и Arms Race', page: 13 }
    ]
  },
  {
    title: 'III. АРМИЯ И ОФИЦЕРЫ',
    chapters: [
      { id: 7, title: 'Юниты, роли и Звёздность', page: 15 },
      { id: 8, title: 'Система контров (КНБ)', page: 17 },
      { id: 9, title: 'Офицеры, навыки и Новинки 14.60', page: 19 },
      { id: 10, title: 'Сборка идеальной армии (5 слотов)', page: 22 }
    ]
  },
  {
    title: 'IV. СРАЖЕНИЯ И ТВД',
    chapters: [
      { id: 11, title: 'Подготовка к сражениям и PvP', page: 24 },
      { id: 12, title: 'Экспедиции и FAQ командира', page: 26 }
    ]
  },
  {
    title: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    chapters: [
      { id: 13, title: 'WarpathHub и Бот @shevchenko01_bot', page: 28 },
      { id: 14, title: 'Тикеты, Вопросы и Словарь сленга', page: 30 }
    ]
  },
  {
    title: 'VI. ПРОДВИНУТАЯ МЕТА 14.x',
    chapters: [
      { id: 15, title: 'Оперсети, Чипы и Снаряжение', page: 32 },
      { id: 16, title: 'Авиация, ВМС и Офицерский обмен', page: 34 }
    ]
  },
  {
    title: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    chapters: [
      { id: 17, title: 'Боевые формулы и Пробитие навылет', page: 37 },
      { id: 18, title: 'Путь юнита: 4★→9.2★, Прототипы, Лиги', page: 39 },
      { id: 19, title: 'База, Стены, VIP и Зал Кэт', page: 41 },
      { id: 20, title: 'Энциклопедия всех родов войск', page: 43 },
      { id: 21, title: 'События, Завоевание и Лимиты', page: 45 },
      { id: 22, title: 'Чеклист: Новичок / Мид / Профи', page: 47 }
    ]
  }
];

window.BOOK_PAGES = [
  /* ── СТРАНИЦА 1: ОБЛОЖКА ── */
  {
    page: 1,
    type: 'cover',
    chapterId: null,
    isChapterStart: true,
    docCode: 'WP-FM // COVER',
    bookmark: 'ПОЛЕВОЙ УСТАВ',
    kicker: 'WARPATH: ACE SHOOTER',
    title: 'ПОЛЕВОЙ УСТАВ КОМАНДИРА',
    html: `
      <div class="cover-page">
        <span class="cover-stamp">УТВЕРЖДЕНО ШТАБОМ WARPATHHUB</span>
        <div class="cover-logo-box">
          <img src="assets/warpath-logo.png" alt="Warpath: Ace Shooter" class="cover-logo-img" width="290" height="92" fetchpriority="high">
        </div>
        <h1 class="page-title" style="font-size: 20px;">ТАКТИЧЕСКИЙ УСТАВ КОМАНДИРА</h1>
        <div class="page-divider"><span class="page-diamond"></span></div>
        <p class="cover-subtitle">
          Боевое руководство по Warpath: от первого дня на сервере и траты золота до пробуждения офицеров, контров техники, калькулятора и тикетов WarpathHub.
        </p>
        <div class="page-kicker">ТОМ I • 22 ГЛАВЫ • 48 СТРАНИЦ • v14.60.10</div>
        <div class="cover-actions">
          <button type="button" class="btn-cover-primary" data-goto="2">Открыть содержание →</button>
          <a href="updates.html" class="btn-cover-sec">Том II: Хроника патчей</a>
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
    docCode: 'WP-FM // INDEX',
    bookmark: 'СОДЕРЖАНИЕ',
    kicker: 'НАВИГАЦИЯ',
    title: 'СОДЕРЖАНИЕ',
    html: ''
  },

  /* ── ГЛАВА 1: ОСНОВЫ WARPATH И РЕСУРСЫ (СТР. 3–4) ── */
  {
    page: 3,
    type: 'content',
    chapterId: 1,
    isChapterStart: true,
    docCode: 'WP-FM // CH-01',
    bookmark: 'ГЛАВА 1 • ОСНОВЫ И РЕСУРСЫ',
    kicker: 'I. НАЧАЛО ИГРЫ',
    title: '1. Основы и Ресурсы Warpath',
    html: `
      <p class="page-lead"><strong>Warpath: Ace Shooter</strong> — стратегия в реальном времени. Чтобы не застрять на старте, новичку важно сразу разделять ресурсы по их назначению: одни идут на <strong>Базу</strong>, другие — на <strong>Юниты</strong>, третьи — на <strong>Офицеров и Чипы</strong>.</p>

      <h3 class="section-h3">1. Базовая экономика (добываются на карте)</h3>
      <ul class="editorial-list">
        <li><strong>Военные фонды (Деньги):</strong> основная валюта для стройки, науки, найма войск и покупок на Чёрном рынке.</li>
        <li><strong>Сталь:</strong> апгрейд военных зданий, исследования и производство техники (самый дефицитный ресурс).</li>
        <li><strong>Нефть:</strong> исследования, содержание, движение и ремонт армии после боёв.</li>
        <li><strong>Золото:</strong> премиум-валюта — тратится в первую очередь на VIP (4 и 9 ур.), баннеры офицеров и разборку юнитов.</li>
      </ul>

      <h3 class="section-h3">2. Стройматериалы (ТОЛЬКО для прокачки Базы)</h3>
      <ul class="editorial-list">
        <li><strong>Доски, Кирпичи, Цемент, Стальные балки:</strong> требуются для постройки и повышения уровней всех зданий базы (вплоть до 32–36 ур. в Эпохе мастеров). Производятся в <strong>Инженерном центре</strong>, падают в тумане и на Чёрном рынке.</li>
      </ul>

      <h3 class="section-h3">3. Ресурсы на Юниты, Офицеров и Оперсети</h3>
      <ul class="editorial-list">
        <li><strong>Для Юнитов (Армия):</strong> <em>Боеприпасы (Патроны)</em> и <em>Боевой опыт</em> поднимают уровень отряда; <em>Детали / Чертежи (включая <code>++</code>)</em> нужны для экипировки (шанс на <code>++</code> есть и при открытии ящика, и при крафте обычной детали); <em>Купоны (Универсальные и Лагерные)</em> дают карточки техники (вплоть до 9.2★ и ранга XV).</li>
        <li><strong>Для Офицеров:</strong> <em>Книги опыта</em> качают уровень, <em>Статуэтки / Фрагменты</em> открывают навыки и Пробуждение (720 фрагментов), а <em>Золотые ключи/планшеты</em> — личное снаряжение (щит, дробовик, кастет, сапсан).</li>
        <li><strong>Инфовойна и Оперсети:</strong> <em>Вычислительные чипы, Карты</em> и <em>зелёные купоны/блоки</em> Операционных сетей усиливают весь лагерь сильнее дорогого Коллекционера.</li>
      </ul>
    `
  },
  {
    page: 4,
    type: 'content',
    chapterId: 1,
    isChapterStart: false,
    docCode: 'WP-FM // CH-01B',
    bookmark: 'ГЛАВА 1 • ПРИНЦИПЫ',
    kicker: 'ГЛАВА 1 (ДОП. СТРАНИЦА)',
    title: 'Где брать ресурсы и 6 правил меты',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Шпаргалка новичка: что откуда фармится</div>
        <ul>
          <li><strong>Сталь / Нефть / Фонды:</strong> сборщики на точках карты + Чёрный рынок (при каждом обновлении скупай ресурсы за ресурсы и ускорения за 10–20 золота).</li>
          <li><strong>Кирпичи / Цемент / Балки:</strong> заказ в Инженерном центре + разведка тумана + склады альянса.</li>
          <li><strong>Фрагменты, Чертежи и Купоны:</strong> Экспедиции, лагеря Ворон, Юрисдикции и ивент-магазины.</li>
        </ul>
      </div>

      <h3 class="section-h3">6 золотых принципов меты</h3>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">1. Офицер важнее юнита</span><span class="ed-tag">60% СИЛЫ</span></div>
          <p class="ed-row-desc">Слабый юнит с топ-офицером сильнее сильного юнита без офицера (СТ + Джексон Хейз бьёт ТТ + Такеда).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">2. Нет «лучшего» юнита</span><span class="ed-tag">РОЛЬ</span></div>
          <p class="ed-row-desc">ШХ идеален как стенка, но бесполезен в быстром рейде. ЛТ — король разведки, но тает в лобовом бою.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">3. Синергия решает</span><span class="ed-tag">5 СЛОТОВ</span></div>
          <p class="ed-row-desc">Сбалансированная армия (ТТ + 2 ПТ + Арта/RL + ЛТ) всегда бьёт 5 одинаковых танков без прикрытия.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">4. Контры важнее мощи</span><span class="ed-tag">КНБ</span></div>
          <p class="ed-row-desc">Дешёвые ПТ уничтожают дорогие ТТ и ШХ, если стреляют из-за спины союзника.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">5. Первый удар и фокус</span><span class="ed-tag">ТАКТИКА</span></div>
          <p class="ed-row-desc">Бей первым с фланга и доводи одного главного офицера до Пробуждения, а не трёх наполовину.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 2: ВЫБОР ФРАКЦИИ (СТР. 5–6) ── */
  {
    page: 5,
    type: 'content',
    chapterId: 2,
    isChapterStart: true,
    docCode: 'WP-FM // CH-02',
    bookmark: 'ГЛАВА 2 • ФРАКЦИИ',
    kicker: 'I. НАЧАЛО ИГРЫ',
    title: '2. Выбор фракции (Лагеря)',
    html: `
      <p class="page-lead">В Warpath три основных лагеря. Новички часто качают всё подряд и упираются в нехватку деталей. Выбери <strong>1 основную фракцию</strong> (максимум 2 в мидгейме).</p>

      <figure class="page-figure">
        <img src="assets/bg-parade.webp" alt="Официальный арт Warpath со знамёнами трёх фракций" class="page-art" width="1600" height="898" loading="lazy">
        <figcaption class="page-caption">Официальный арт клиента v14.60: техника и авиация лагерей</figcaption>
      </figure>

      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Советы (Martyrs / Красные)</span><span class="ed-tag">НОВИЧКАМ</span></div>
          <p class="ed-row-desc"><strong>Стиль:</strong> тяжёлая броня и мощная артиллерия.<br><strong>Плюсы:</strong> лучшие тяжёлые танки, ракетная установка (РСЗО), простая и понятная мета.<br><strong>Минусы:</strong> нет сверхтяжёлого танка (SH), слабее в авиации.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Либерти (Liberty / Синие)</span><span class="ed-tag">МАНЁВР</span></div>
          <p class="ed-row-desc"><strong>Стиль:</strong> скорость, рейды и осада баз.<br><strong>Плюсы:</strong> быстрые лёгкие танки, сильный флот (авианосцы, эсминцы), противотанковые пушки.<br><strong>Минусы:</strong> слабее в лобовых столкновениях, нет SH-танка.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Авангард (Vanguard / Серые)</span><span class="ed-tag">ЭНДГЕЙМ</span></div>
          <p class="ed-row-desc"><strong>Стиль:</strong> непробиваемая оборона.<br><strong>Плюсы:</strong> эксклюзивный Сверхтяжёлый танк (SH / Маус), сильное ПВО.<br><strong>Минусы:</strong> самые медленные и дорогие в прокачке юниты.</p>
        </div>
      </div>
    `
  },
  {
    page: 6,
    type: 'content',
    chapterId: 2,
    isChapterStart: false,
    docCode: 'WP-FM // CH-02B',
    bookmark: 'ГЛАВА 2 • СРАВНЕНИЕ',
    kicker: 'ГЛАВА 2 (ДОП. СТРАНИЦА)',
    title: 'Какую фракцию выбрать в 2026',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Фракция</th><th>Сильная сторона</th><th>Кому подходит</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Советы</strong></td><td>Тяжёлый танк, Средний танк, Гаубица / РСЗО</td><td>Идеально для старта и игры без доната. Понятная игра от брони и урона.</td></tr>
            <tr><td><strong>Либерти</strong></td><td>Лёгкий танк, Гаубица, Авиация и Флот</td><td>Любителям мобильных рейдов и морских операций.</td></tr>
            <tr><td><strong>Авангард</strong></td><td>Сверхтяжёлый танк (SH), ПВО-эсминец</td><td>Терпеливым игрокам под лейтгейм и удержание точек.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Совет ветеранов</div>
        <p>Если не знаешь, что выбрать на старте — бери <strong>Советы</strong> для основы на тяжёлых танках и артиллерии. Позже ты сможешь комбинировать лучшие юниты разных лагерей в одной армии (например, SH Авангарда + ПТ/Арта Советов).</p>
      </div>
    `
  },

  /* ── ГЛАВА 3: ПРАВИЛЬНЫЙ СТАРТ И ПЕРВЫЙ ДЕНЬ (СТР. 7–8) ── */
  {
    page: 7,
    type: 'content',
    chapterId: 3,
    isChapterStart: true,
    docCode: 'WP-FM // CH-03',
    bookmark: 'ГЛАВА 3 • СТАРТ',
    kicker: 'I. НАЧАЛО ИГРЫ',
    title: '3. Правильный старт и Первый день',
    html: `
      <p class="page-lead">Первые 24 часа на новом сервере задают темп на месяцы вперёд. Главная цель — не потерять темп и попасть в топ-альянс.</p>

      <h3 class="section-h3">Чеклист первого дня</h3>
      <ul class="editorial-list">
        <li><strong>Иди строго по сюжетным заданиям:</strong> основной журнал даёт тонну стали, фондов и купонов на старте.</li>
        <li><strong>Снимай туман войны авиацией:</strong> отправляй самолёты-разведчики открывать карту — за руины и ящики снабжения дают золото и ускорения.</li>
        <li><strong>Вступи в самый сильный альянс:</strong> ищи активный топ-1/топ-3 альянс. Когда соклановцы бьют бункеры или донатят, ты получаешь бесплатные сундуки альянса.</li>
        <li><strong>Пробивай Кампанию до упора:</strong> чем выше глава кампании, тем выше пассивный доход ресурсов в минуту.</li>
      </ul>
    `
  },
  {
    page: 8,
    type: 'content',
    chapterId: 3,
    isChapterStart: false,
    docCode: 'WP-FM // CH-03B',
    bookmark: 'ГЛАВА 3 • ОШИБКИ',
    kicker: 'ГЛАВА 3 (ДОП. СТРАНИЦА)',
    title: 'Чего НЕ делать в первые дни',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Ошибка #1: Оставлять армию вне базы</div>
        <p>Перед выходом из игры всегда прячь отряды внутрь базы (или переноси базу на территорию альянса). В открытом поле твою армию разобьют за секунды, а ремонт съест нефть и сталь.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Ошибка #2: Сливать купоны и ускорения сразу</div>
        <p>Не открывай все универсальные купоны и не жги ускорения в первый попавшийся момент. Держи их под ежедневные этапы <strong>Arms Race</strong> и крупные ивенты (Jurisdiction / Grand Showdown).</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Ошибка #3: Игнорировать промышленную ветку</div>
        <p>Новички качают только военные технологии. Без промышленных исследований (скорость добычи и лимит конвоев) ты застрянешь без стали уже к 15 уровню базы.</p>
      </div>
    `
  },

  /* ── ГЛАВА 4: ТОП СОВЕТОВ НОВИЧКУ F2P (СТР. 9–10) ── */
  {
    page: 9,
    type: 'content',
    chapterId: 4,
    isChapterStart: true,
    docCode: 'WP-FM // CH-04',
    bookmark: 'ГЛАВА 4 • F2P СОВЕТЫ',
    kicker: 'II. РАЗВИТИЕ И ЭКОНОМИКА',
    title: '4. Топ советов новичку (F2P)',
    html: `
      <p class="page-lead">Играть без доната (Free-to-Play) в Warpath абсолютно реально, если соблюдать жёсткую дисциплину ресурсов и фокусировки.</p>
      <ul class="editorial-list">
        <li><strong>Правило 1–2 юнитов:</strong> не пытайся качать все 5 слотов сразу на максимум. Сделай 1 мощный Тяжёлый/Средний танк и 1 Гаубицу — они протащат тебя везде.</li>
        <li><strong>Ошиблись с прокачкой? Есть Разборка!</strong> Зайди в <em>Инженерный центр → Разборка</em>. За символическую плату золотом ты вернёшь вложенные детали и опыт. Перед разборкой убери юнит из активной армии.</li>
        <li><strong>Фарм фрагментов через Экспедиции:</strong> отправляй армию в экспедиции перед сном — это стабильный бесплатный источник статуэток офицеров.</li>
        <li><strong>Не трать статуэтки на проходных офицеров:</strong> копи универсальные фрагменты на S-тир (5 поколение или ключевых 4-го).</li>
      </ul>
    `
  },
  {
    page: 10,
    type: 'content',
    chapterId: 4,
    isChapterStart: false,
    docCode: 'WP-FM // CH-04B',
    bookmark: 'ГЛАВА 4 • ПАМЯТКА',
    kicker: 'ГЛАВА 4 (ДОП. СТРАНИЦА)',
    title: 'Чеклист F2P дисциплины',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Офицеры</span></div>
          <p class="ed-row-desc">• Фокус на одном до Пробуждения.<br>• Бесплатного офицера 5-го поколения забирай через события.<br>• Выполняй задания офицеров на 100% успеха.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Юниты</span></div>
          <p class="ed-row-desc">• Выбери 2–3 типа техники.<br>• Исследования важнее количества казарм.<br>• Тяжёлый танк + Кёртис/Джексон — база без доната.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Ресурсы</span></div>
          <p class="ed-row-desc">• Всегда держи запас стали.<br>• Не трать ускорения вне Arms Race.<br>• Постоянно гоняй сборщиков на карту.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Альянс</span></div>
          <p class="ed-row-desc">• Помогай союзникам кнопкой «Помощь».<br>• Покупай в магазине альянса только нужное.<br>• Бей Raven-лагеря группой.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 5: КАК ТРАТИТЬ ЗОЛОТО (СТР. 11–12) ── */
  {
    page: 11,
    type: 'content',
    chapterId: 5,
    isChapterStart: true,
    docCode: 'WP-FM // CH-05',
    bookmark: 'ГЛАВА 5 • ЗОЛОТО',
    kicker: 'II. РАЗВИТИЕ И ЭКОНОМИКА',
    title: '5. Как тратить Золото (VIP 4 и 9)',
    html: `
      <p class="page-lead">Золото — самая дефицитная валюта в игре. Одна ошибка в тратах на старте откинет аккаунт на несколько недель назад.</p>

      <div class="margin-note">
        <div class="margin-note-title">Приоритет №1: Прокачка VIP-уровня</div>
        <p>Первым делом вкладывай золото в очки VIP (особенно во время ивентов на трату золота):</p>
        <ul class="editorial-list" style="margin-top:6px; margin-bottom:0;">
          <li><strong>VIP 4:</strong> открывает <strong>1 бесплатный Универсальный купон</strong> каждый день.</li>
          <li><strong>VIP 9:</strong> открывает <strong>1 бесплатный Лагерный купон</strong> каждый день + огромные бонусы к скорости стройки и исследований.</li>
        </ul>
      </div>

      <h3 class="section-h3">Где брать золото и промокоды</h3>
      <ul class="editorial-list">
        <li><strong>Ежедневные задания и Юрисдикции:</strong> до 600 золота в сутки. Внимание: по вторникам и воскресеньям усложнённые юрисдикции требуют до 80 ключей снаряжения — планируй ключи заранее.</li>
        <li><strong>Промокоды (Опции → Подарки):</strong> с 2026 года коды вводятся прямо в игре во вкладке <em>Опции → Подарки</em> или на <a href="https://cdkey.lilith.com/warpath-global" target="_blank" rel="noopener noreferrer">cdkey.lilith.com/warpath-global</a> (лимит активаций ограничен, вводи сразу).</li>
        <li><strong>Чёрный рынок и ивенты:</strong> всегда скупай ресурсы за ресурсы и ускорения со скидкой 10–20 золота, а перед крупным «Обменом офицеров» пропускай рулетку статуй, если золота впритык.</li>
      </ul>
      <div class="inline-cta-row">
        <button type="button" class="page-link-btn" data-open-hq="codes">Открыть выписку промокодов →</button>
      </div>
    `
  },
  {
    page: 12,
    type: 'content',
    chapterId: 5,
    isChapterStart: false,
    docCode: 'WP-FM // CH-05B',
    bookmark: 'ГЛАВА 5 • ЗАПРЕТЫ',
    kicker: 'ГЛАВА 5 (ДОП. СТРАНИЦА)',
    title: 'На что НЕЛЬЗЯ тратить золото',
    html: `
      <ul class="editorial-list">
        <li><strong>Мгновенное завершение стройки/исследований:</strong> самая дорогая и бессмысленная трата. Используй обычные ускорения.</li>
        <li><strong>Покупка стали, нефти и фондов за золото:</strong> курс грабительский, ресурсы легко добываются на карте и на Чёрном рынке за другие ресурсы.</li>
        <li><strong>Случайные сундуки и рулетка перед обменом:</strong> без гаранта сжигается валюта. Перед «Обменом офицеров» (14.6) золото держат под покупку слотов в магазине обмена.</li>
        <li><strong>Чёрный рынок без скидки:</strong> бери товары за золото только при глубокой скидке (10–20 золота за ускорение или редкие купоны).</li>
      </ul>
    `
  },

  /* ── ГЛАВА 6: ИССЛЕДОВАНИЯ И ARMS RACE (СТР. 13–14) ── */
  {
    page: 13,
    type: 'content',
    chapterId: 6,
    isChapterStart: true,
    docCode: 'WP-FM // CH-06',
    bookmark: 'ГЛАВА 6 • ARMS RACE',
    kicker: 'II. РАЗВИТИЕ И ЭКОНОМИКА',
    title: '6. Исследования и Arms Race',
    html: `
      <p class="page-lead"><strong>Arms Race (Ежедневная гонка вооружений)</strong> — главный источник бесплатных наград, золота и ускорений. Планируй траты строго по дням недели:</p>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>День</th><th>Тема этапа</th><th>Что делать</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Пн</strong></td><td>Сбор ресурсов</td><td>Отправляй сборщиков на карту</td></tr>
            <tr><td><strong>Вт</strong></td><td>Строительство</td><td>Завершай крупные апгрейды зданий</td></tr>
            <tr><td><strong>Ср</strong></td><td>Исследования</td><td>Закрывай дорогие технологии</td></tr>
            <tr><td><strong>Чт</strong></td><td>Рекрутинг</td><td>Крути купоны юнитов и офицеров</td></tr>
            <tr><td><strong>Пт</strong></td><td>Развитие базы</td><td>Комбинация стройки и науки</td></tr>
            <tr><td><strong>Сб</strong></td><td>Ускорения</td><td>Сливай накопленные ускорения</td></tr>
            <tr><td><strong>Вс</strong></td><td>Всё + Raven</td><td>Бей лагеря и отряды Ворон</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    page: 14,
    type: 'content',
    chapterId: 6,
    isChapterStart: false,
    docCode: 'WP-FM // CH-06B',
    bookmark: 'ГЛАВА 6 • НАУКА',
    kicker: 'ГЛАВА 6 (ДОП. СТРАНИЦА)',
    title: 'Приоритет технологий в Центре',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Золотая середина науки</div>
        <p>Качай параллельно две ветки. Без экономики армия встанет, без армии экономику разграбят.</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Промышленная ветка:</strong> скорость добычи стали/нефти, грузоподъёмность конвоев, снижение стоимости строительства и ремонта.</li>
        <li><strong>Военная ветка:</strong> открытие слотов армии (до 5 юнитов), усиление именно твоего основного типа войск (например, Тяжёлые танки + Артиллерия).</li>
        <li><strong>Совет по Arms Race:</strong> не обязательно занимать Топ-1 каждый день. Стабильный <strong>Ранг 3+</strong> даёт отличные награды без выгорания и лишнего слива запасов.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 7: ЮНИТЫ, РОЛИ И ЗВЁЗДНОСТЬ (СТР. 15–16) ── */
  {
    page: 15,
    type: 'content',
    chapterId: 7,
    isChapterStart: true,
    docCode: 'WP-FM // CH-07',
    bookmark: 'ГЛАВА 7 • ЮНИТЫ',
    kicker: 'III. АРМИЯ И ОФИЦЕРЫ',
    title: '7. Юниты, роли и Звёздность',
    html: `
      <p class="page-lead">В игре 9 основных классов техники: Пехота, ЛТ (лёгкий), СТ (средний), ТТ (тяжёлый), ШХ (сверхтяжёлый), ПТ (истребитель танков), Арта (гаубица) и RL («Катюша» / РСЗО), а также авиация (истребитель, бомбардировщик, вертолёт).</p>

      <figure class="page-figure transparent-unit">
        <img src="assets/unit-armata.webp" alt="Тяжёлый танк 9.2 звёзд — Т-14 Армата (Советы)" class="page-art" width="760" height="532" loading="lazy">
        <figcaption class="page-caption">Модель 9.2★ (синие звёзды): Советский тяжёлый танк (ТТ / МБТ)</figcaption>
      </figure>

      <h3 class="section-h3">Как работает звёздность</h3>
      <ul class="editorial-list">
        <li><strong>Объединение:</strong> два одинаковых юнита сливаются для повышения звезды (процесс необратим, но есть разборка деталей).</li>
        <li><strong>Жёлтые звёзды (до 7.2):</strong> классический потолок для базовых и старых линеек техники.</li>
        <li><strong>Синие звёзды (до 9.2):</strong> современная техника (Пехота, ТТ, современная авиация и флот).</li>
        <li><strong>Уровни:</strong> каждый юнит прокачивается по уровням (база характеристик растёт экспоненциально).</li>
      </ul>
      <div class="inline-cta-row">
        <button type="button" class="page-link-btn" data-open-hq="calc">Открыть экспресс-калькулятор →</button>
      </div>
    `
  },
  {
    page: 16,
    type: 'content',
    chapterId: 7,
    isChapterStart: false,
    docCode: 'WP-FM // CH-07B',
    bookmark: 'ГЛАВА 7 • БАЗА ЮНИТОВ',
    kicker: 'ГЛАВА 7 (ДОП. СТРАНИЦА)',
    title: 'Классы и роли техники в бою',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Юнит</th><th>Тир</th><th>Роль</th><th>Главная задача</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="8" width="18" height="6" rx="2"/><rect x="6" y="4" width="9" height="4"/><line x1="15" y1="6" x2="23" y2="6"/></svg><strong>ШХ (Маус)</strong></span></td>
              <td><span class="ed-tag">S</span></td><td>Сверхброня</td><td>Стенка в лоб (только Авангард). Максимум брони и HP, очень медленный.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="8" width="16" height="6" rx="2"/><path d="M7 8l2-4h6l1 4"/><line x1="16" y1="6" x2="23" y2="5.5"/></svg><strong>ТТ (Тяж / МБТ)</strong></span></td>
              <td><span class="ed-tag">A</span></td><td>Первая линия</td><td>Основа ударного кулака, принимает первый урон.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="9" width="15" height="5" rx="1.5"/><path d="M5 9l4-4h6v4"/><line x1="15" y1="6.5" x2="23" y2="6.5"/></svg><strong>ПТ (Истребитель)</strong></span></td>
              <td><span class="ed-tag">A</span></td><td>Анти-броня</td><td>Пробивает ТТ и ШХ из-за спины союзного танка.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="9" width="14" height="5" rx="1"/><line x1="8" y1="9" x2="20" y2="2"/><circle cx="7" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/></svg><strong>Арта (Гаубица)</strong></span></td>
              <td><span class="ed-tag">A</span></td><td>Осада и сплеш</td><td>Бьёт по площади, сносит базы, пехоту и медленные ШХ.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="10" width="14" height="4" rx="1"/><path d="M6 10l9-6 2 3-8 3"/><line x1="17" y1="3" x2="22" y2="1"/></svg><strong>RL («Катюша» / РСЗО)</strong></span></td>
              <td><span class="ed-tag">S</span></td><td>Залп по площади</td><td>Быстрый залповый урон по скоплениям и базам (фишка Советов).</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="9" width="14" height="5" rx="2"/><rect x="8" y="5.5" width="6" height="3.5"/><line x1="14" y1="7" x2="21" y2="7"/></svg><strong>СТ (Средний танк)</strong></span></td>
              <td><span class="ed-tag">B</span></td><td>Универсал</td><td>Рабочая лошадка мидгейма: баланс скорости и брони.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="10" width="12" height="4" rx="2"/><path d="M8 10l2-3h4l1 3"/><line x1="15" y1="8.5" x2="20" y2="8"/></svg><strong>ЛТ (Лёгкий танк)</strong></span></td>
              <td><span class="ed-tag">C</span></td><td>Разведка / Рейд</td><td>Самый быстрый на земле (Либерти): снос арты и сборщиков.</td>
            </tr>
            <tr>
              <td><span class="unit-cell"><svg class="unit-ico" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/><path d="M7 14v-3a5 5 0 0 1 10 0v3"/></svg><strong>Пехота</strong></span></td>
              <td><span class="ed-tag">C</span></td><td>Захват / Бункер</td><td>Захват точек, бункеры, дешёвый гарнизон.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ── ГЛАВА 8: СИСТЕМА КОНТРОВ (СТР. 17–18) ── */
  {
    page: 17,
    type: 'content',
    chapterId: 8,
    isChapterStart: true,
    docCode: 'WP-FM // CH-08',
    bookmark: 'ГЛАВА 8 • КОНТРЫ',
    kicker: 'III. АРМИЯ И ОФИЦЕРЫ',
    title: '8. Система контров (КНБ)',
    html: `
      <p class="page-lead">Warpath работает по принципу «камень-ножницы-бумага». Даже слабый по мощи отряд уничтожит дорогого противника, если является его прямым контром.</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Юнит врага</th><th>Чем контрить</th><th>Почему работает</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Тяжёлый танк</strong></td><td>Истребитель танков (ПТ)</td><td>Высокое бронепробитие режет броню.</td></tr>
            <tr><td><strong>SH-танк (Маус)</strong></td><td>Массовые гаубицы / Авиация</td><td>Урон по площади и бомбардировки обходят лобовую броню.</td></tr>
            <tr><td><strong>Лёгкий танк</strong></td><td>Тяжёлый танк</td><td>Лёгкий танк не пробивает тяжёлую броню в лоб.</td></tr>
            <tr><td><strong>Пехота</strong></td><td>Гаубица (AoE)</td><td>Урон по площади мгновенно выкашивает отряды.</td></tr>
            <tr><td><strong>Артиллерия</strong></td><td>Лёгкие танки / Вертолёты</td><td>Быстро добираются до задней линии и сносят за 2 залпа.</td></tr>
            <tr><td><strong>Авиация</strong></td><td>Истребитель / ПВО-эсминец</td><td>Прямой воздушный и зенитный перехват.</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    page: 18,
    type: 'content',
    chapterId: 8,
    isChapterStart: false,
    docCode: 'WP-FM // CH-08B',
    bookmark: 'ГЛАВА 8 • ТАКТИКА',
    kicker: 'ГЛАВА 8 (ДОП. СТРАНИЦА)',
    title: 'Как применять контры на карте',
    html: `
      <div class="tac-diagram">
        <div class="tac-diagram-title">Схема: кто кого контрит на поле</div>
        <svg viewBox="0 0 420 155" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Схема контров: ПТ бьёт ТТ, Арта и Катюша бьют ШХ и Пехоту, ЛТ и Вертолёт бьют Арту">
          <rect x="8" y="14" width="118" height="36" rx="4" fill="#e6dac0" stroke="#8f4f0e" stroke-width="1.5"/>
          <text x="67" y="36" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">ПТ (Истреб. танков)</text>
          <path d="M132 32H170" stroke="#8f4f0e" stroke-width="2" marker-end="url(#arr)"/>
          <rect x="176" y="14" width="118" height="36" rx="4" fill="#f3ebd8" stroke="#544b3c" stroke-width="1.2"/>
          <text x="235" y="36" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">ТТ (Тяж) и СТ</text>
          <text x="306" y="36" fill="#8f4f0e" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">пробитие</text>

          <rect x="8" y="62" width="118" height="36" rx="4" fill="#e6dac0" stroke="#8f4f0e" stroke-width="1.5"/>
          <text x="67" y="84" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">Арта / RL (Катюша)</text>
          <path d="M132 80H170" stroke="#8f4f0e" stroke-width="2"/>
          <rect x="176" y="62" width="118" height="36" rx="4" fill="#f3ebd8" stroke="#544b3c" stroke-width="1.2"/>
          <text x="235" y="84" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">ШХ / Пехота / Базы</text>
          <text x="306" y="84" fill="#8f4f0e" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">сплеш</text>

          <rect x="8" y="110" width="118" height="36" rx="4" fill="#e6dac0" stroke="#8f4f0e" stroke-width="1.5"/>
          <text x="67" y="132" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">ЛТ / Вертолёт</text>
          <path d="M132 128H170" stroke="#8f4f0e" stroke-width="2"/>
          <rect x="176" y="110" width="118" height="36" rx="4" fill="#f3ebd8" stroke="#544b3c" stroke-width="1.2"/>
          <text x="235" y="132" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">Голая Арта и RL</text>
          <text x="306" y="132" fill="#8f4f0e" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">фланг</text>

          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0 0L6 3L0 6Z" fill="#8f4f0e"/>
            </marker>
          </defs>
        </svg>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Правило разведки</div>
        <p>Никогда не вступай в слепой бой. Видишь 3 тяжёлых танка — выводи ПТ и Арту. Видишь голую арту или RL-Катюшу без прикрытия — заходи быстрым ЛТ или вертолётом с фланга.</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Защита своей арты:</strong> никогда не ставь гаубицы и RL в первую линию. Держи их за ТТ на максимальной дистанции выстрела.</li>
        <li><strong>Атака баз:</strong> для сноса укрепрайонов и баз обязательна Арта / RL («Катюша») под прикрытием танкового щита.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 9: ОФИЦЕРЫ, НАВЫКИ И ПРОБУЖДЕНИЕ (СТР. 19–20) ── */
  {
    page: 19,
    type: 'content',
    chapterId: 9,
    isChapterStart: true,
    docCode: 'WP-FM // CH-09',
    bookmark: 'ГЛАВА 9 • ОФИЦЕРЫ',
    kicker: 'III. АРМИЯ И ОФИЦЕРЫ',
    title: '9. Офицеры и Пробуждение',
    html: `
      <p class="page-lead">Офицеры дают до <strong>60% реальной боевой силы</strong> отряда. Главный секрет — не распылять статуэтки, а доводить одного ключевого офицера до Пробуждения.</p>

      <h3 class="section-h3">Механика прокачки</h3>
      <ul class="editorial-list">
        <li><strong>4 базовых навыка:</strong> каждый качается с 1 по 5 уровень. Не качай уровень офицера вслепую — ориентируйся на ключевые боевые навыки.</li>
        <li><strong>Пробуждение (Awakening):</strong> открывается при 5 уровне всех 4 навыков. Требует <strong>720 фрагментов</strong>, но даёт колоссальный скачок силы.</li>
        <li><strong>2 чужих навыка:</strong> в слоты поддержки можно поставить 2 навыка от <em>других</em> офицеров (например, усиление брони или урона).</li>
        <li><strong>Главный и Помощник:</strong> всегда ставь самого прокачанного офицера в главный слот, а помощника подбирай под его синергию.</li>
      </ul>
    `
  },
  {
    page: 20,
    type: 'content',
    chapterId: 9,
    isChapterStart: false,
    docCode: 'WP-FM // CH-09B',
    bookmark: 'ГЛАВА 9 • ТИР-ЛИСТ',
    kicker: 'ГЛАВА 9 (ДОП. СТРАНИЦА)',
    title: 'Ключевые офицеры текущей меты',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Джексон Хейз (5 поколение)</span><span class="ed-tag">S-ТИР</span></div>
          <p class="ed-row-desc"><strong>Роль:</strong> Атака (Танки и Вертолёты). +30% Атаки/Защиты. Навык «Пространственный удар» (коэф. 1800, +15% урона на 8 сек). Лучший универсальный дамагер.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Хеймекер (5 поколение)</span><span class="ed-tag">S-ТИР</span></div>
          <p class="ed-row-desc"><strong>Роль:</strong> Охотник на тяжёлую броню. +35% Атаки. Массовый урон с бонусом против SH и тяжёлых танков.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Кёртис (4 поколение)</span><span class="ed-tag">S-ТИР</span></div>
          <p class="ed-row-desc"><strong>Роль:</strong> Защита наземных войск (+22% защиты, +15% здоровья). Лучший танк-офицер для фронтлайна и обороны.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Иссабель / Слейтер / Такеда</span><span class="ed-tag">S / A</span></div>
          <p class="ed-row-desc"><strong>Иссабель:</strong> +25% атаки при здоровье ниже 50%. <strong>Слейтер:</strong> топ для авиации. <strong>Такеда и Мартин:</strong> отличные переходные варианты до 5-го поколения.</p>
        </div>
      </div>
    `
  },

  {
    page: 21,
    type: 'content',
    chapterId: 9,
    isChapterStart: false,
    docCode: 'WP-FM // CH-09C',
    bookmark: 'ГЛАВА 9 • СВЯЗКИ 2026',
    kicker: 'ГЛАВА 9 (ДОП. СТРАНИЦА)',
    title: 'Рабочие связки и мета 14.5–14.60',
    html: `
      <figure class="page-figure">
        <img src="assets/new-officers.webp" alt="Пять новых офицеров Warpath: Блэкджек, Мусорщик, Красный Крокодил, Главный Судья, Ржавый" class="page-art" width="800" height="800" loading="lazy">
        <figcaption class="page-caption">Кап 80% по клиенту: бонусы офицеров к устойчивости базы (к навыкам и к автоатакам) суммируются не выше 80%</figcaption>
      </figure>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Арта / RL («Катюша»)</span><span class="ed-tag">+1 ДАЛЬНОСТЬ</span></div>
          <p class="ed-row-desc"><strong>По игре:</strong> <em>Мадам Виндикта</em> и <em>Боевой сокол</em> дают <code>+1</code> к дальности! Офиц. пары: Виндикта + <em>Безмолвный гром</em> (крит навыков), Боевой сокол + <em>Красная жара</em> (горение), а также Искатель будущего + Шевченко / Глаз провидения (и F2P: Мулянь + Шевченко).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ЗСУ / Флак (VADS) и Вертолёт</span><span class="ed-tag">АВТОАТАКА / КРИТ</span></div>
          <p class="ed-row-desc"><strong>Флак:</strong> по клиенту с пробуждённым <em>Е Цимином (Рапира)</em> отлично идёт <em>Клавдия</em> (усиление автоатак), также Стальной + Либерти / Пламя; снаряга <em>Дробовик шерифа + Тигриный кастет</em>. <strong>Верт:</strong> Стальная коса + Госпожа теней (Мулянь) / Маргарита.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ШХ / ОБТ и Оборона («Черепаха»)</span><span class="ed-tag">БЕЗ ГИБРИДОВ</span></div>
          <p class="ed-row-desc"><strong>Офиц. связки:</strong> <em>Арбитр + Песнь рассвета</em> (щиты и живучесть) / Иваньков / Терновая графиня; в атаку — <em>Стальная коса / Егерь + Мулянь</em> (не смешивай деф-офицеров с атакующими в 1 юните).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Новые 14.5+: Море и Поддержка</span><span class="ed-tag">БЛЭКДЖЕК / КРОКОДИЛ</span></div>
          <p class="ed-row-desc"><strong>ВМС:</strong> <em>Красный крокодил + Волнорез</em> (горение флота), <em>Блэкджек</em> и <em>Дитя прилива</em> (подлодки). <strong>Суша:</strong> <em>Мусорщик</em> (деф), <em>Главный Судья</em> (арта), <em>Ржавый</em> (поле).</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 10: СБОРКА ИДЕАЛЬНОЙ АРМИИ (СТР. 22–23) ── */
  {
    page: 22,
    type: 'content',
    chapterId: 10,
    isChapterStart: true,
    docCode: 'WP-FM // CH-10',
    bookmark: 'ГЛАВА 10 • АРМИЯ',
    kicker: 'III. АРМИЯ И ОФИЦЕРЫ',
    title: '10. Сборка идеальной армии',
    html: `
      <p class="page-lead">Полная армия состоит из <strong>5 слотов</strong>. Побеждает не сумма звёзд, а правильное построение линий на поле боя.</p>

      <div class="tac-diagram">
        <div class="tac-diagram-title">Схема боевого построения (5 слотов)</div>
        <svg viewBox="0 0 420 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Схема построения армии: впереди ТТ или ШХ, за ним 2 ПТ или СТ, сзади Арта или RL Катюша, на фланге ЛТ или Вертолёт">
          <rect x="8" y="14" width="110" height="44" rx="4" fill="#e6dac0" stroke="#8f4f0e" stroke-width="1.5"/>
          <text x="63" y="33" text-anchor="middle" fill="#8f4f0e" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700">ТЫЛ (СЛОТ 4)</text>
          <text x="63" y="49" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">Арта / RL Катюша</text>

          <rect x="148" y="14" width="124" height="44" rx="4" fill="#f3ebd8" stroke="#544b3c" stroke-width="1.3"/>
          <text x="210" y="33" text-anchor="middle" fill="#8f4f0e" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700">ЦЕНТР ДД (2–3)</text>
          <text x="210" y="49" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">2× ПТ / СТ (урон)</text>

          <rect x="302" y="14" width="110" height="44" rx="4" fill="#8f4f0e" stroke="#8f4f0e" stroke-width="1.5"/>
          <text x="357" y="33" text-anchor="middle" fill="#f3ebd8" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700">ФРОНТ (СЛОТ 1)</text>
          <text x="357" y="49" text-anchor="middle" fill="#ffffff" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">ТТ или ШХ (щит)</text>

          <rect x="148" y="74" width="264" height="38" rx="4" fill="rgba(143,79,14,0.08)" stroke="#8f4f0e" stroke-dasharray="4 3"/>
          <text x="280" y="97" text-anchor="middle" fill="#1f1b14" font-family="Inter, sans-serif" font-size="11.5" font-weight="700">Фланг (Слот 5): ЛТ / Вертолёт / Пехота</text>
        </svg>
      </div>

      <h3 class="section-h3">Классическая мета-сборка</h3>
      <ul class="editorial-list">
        <li><strong>Слот 1 (Фронт):</strong> ТТ или ШХ + защитный офицер (Кёртис / Мусорщик / Виктор). Принимает первый удар.</li>
        <li><strong>Слоты 2–3 (Основной ДД):</strong> 2 ударных юнита (ПТ или СТ/ТТ с Джексоном Хейзом). Вырезают броню врага.</li>
        <li><strong>Слот 4 (Арта / RL):</strong> Гаубица или RL («Катюша») сзади. Чистит пехоту и ломает ШХ по площади.</li>
        <li><strong>Слот 5 (Гибкий):</strong> ЛТ для рейдов/разведки, Пехота для точек или Вертолёт поддержки.</li>
      </ul>
    `
  },
  {
    page: 23,
    type: 'content',
    chapterId: 10,
    isChapterStart: false,
    docCode: 'WP-FM // CH-10B',
    bookmark: 'ГЛАВА 10 • ОШИБКИ',
    kicker: 'ГЛАВА 10 (ДОП. СТРАНИЦА)',
    title: 'Фатальные ошибки компоновки',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">1. Армия из 5 одинаковых танков</div>
        <p>Без ПТ и артиллерии тебя легко разберут контр-юнитами, а без быстрого юнита ты не догонишь вражескую гаубицу.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">2. Только дамагеры без фронтлайна</div>
        <p>Стеклянные пушки (арта и ПТ) без танкового щита впереди умирают за 3 секунды до того, как успеют разрядить навыки.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">3. Непрофильный офицер и слепые условия</div>
        <p>Постановка неверного офицера обнуляет пассивки. По чеклисту <strong>SpeedPath</strong>: всегда проверяй 4 условия каждого навыка — <em>тип юнита, позицию, территорию и режим</em> — и не считай условный бонус, если не выполняешь его.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">4. Смешивание бюджетов апгрейда</div>
        <p>Разделяй 4 бюджета проекта на юнит: (1) звёзды и купоны, (2) детали и модификации, (3) офицеры и наука, (4) резерв на ивенты. Помни: среднее число прокруток на купоны ≠ личный гарант.</p>
      </div>
    `
  },

  /* ── ГЛАВА 11: ПОДГОТОВКА К СРАЖЕНИЯМ И PVP (СТР. 24–25) ── */
  {
    page: 24,
    type: 'content',
    chapterId: 11,
    isChapterStart: true,
    docCode: 'WP-FM // CH-11',
    bookmark: 'ГЛАВА 11 • СРАЖЕНИЯ',
    kicker: 'IV. СРАЖЕНИЯ И ТВД',
    title: '11. Подготовка к сражениям и PvP',
    html: `
      <p class="page-lead">Крупные войны альянсов, битвы за города и ТВД требуют не только прокачанных танков, но и грамотного микроконтроля.</p>

      <ul class="editorial-list">
        <li><strong>Инициатива первого удара:</strong> в автоматическом бою тот, кто выстрелил первым, получает преимущество по темпу перезарядки навыков.</li>
        <li><strong>Фланговые манёвры:</strong> не бей в лоб укреплённую линию. Обходи с фланга, чтобы вырезать артиллерию врага, пока танки отвлечены.</li>
        <li><strong>Командная академия (Тактические карты):</strong> вовремя прожимай карты командира (Дымовая завеса против щитов, Усиление брони, Тяжёлый удар). Не трать карты впустую в мелких стычках — копи на ключевые замесы и ивенты <em>Top Tactics</em>.</li>
      </ul>
    `
  },
  {
    page: 25,
    type: 'content',
    chapterId: 11,
    isChapterStart: false,
    docCode: 'WP-FM // CH-11B',
    bookmark: 'ГЛАВА 11 • БАЗА',
    kicker: 'ГЛАВА 11 (ДОП. СТРАНИЦА)',
    title: 'Оборона базы и территории',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Как не потерять базу ночью</div>
        <p>Всегда держи базу внутри территории альянса (под щитом башен). При угрозе массового рейда используй <strong>Щит мира</strong> заранее — чинить выжженную базу и восстанавливать гарнизон в разы дороже.</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Гарнизон базы:</strong> ставь в оборону базы самые живучие юниты (SH-танк, Тяжёлый танк, Пехота) с защитными офицерами (Кёртис, Виктор).</li>
        <li><strong>Командная игра:</strong> в PvP 1 на 1 решает мощь, в войне альянсов решает фокус-огонь по одной цели и синхронный выход на позицию.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 12: ЭКСПЕДИЦИИ И FAQ КОМАНДИРА (СТР. 26–27) ── */
  {
    page: 26,
    type: 'content',
    chapterId: 12,
    isChapterStart: true,
    docCode: 'WP-FM // CH-12',
    bookmark: 'ГЛАВА 12 • ЭКСПЕДИЦИИ',
    kicker: 'IV. СРАЖЕНИЯ И ТВД',
    title: '12. Экспедиции и пассивный фарм',
    html: `
      <p class="page-lead"><strong>Экспедиции</strong> — главный PvE-режим для стабильного фарма фрагментов офицеров, деталей снаряжения и ресурсов без риска потерять армию в PvP.</p>
      <ul class="editorial-list">
        <li><strong>Постоянная загрузка:</strong> отправляй отряды в экспедиции каждый раз, когда уходишь в оффлайн или на работу/учёбу.</li>
        <li><strong>Выбор наград:</strong> ставь в приоритет те маршруты, где падают фрагменты твоих основных офицеров (или универсальные ресурсы для экипировки).</li>
        <li><strong>Снаряжение:</strong> не забывай крафтить и улучшать модули экипировки на танки и артиллерию — на высоких уровнях они дают огромный прирост пробития и здоровья.</li>
      </ul>
    `
  },
  {
    page: 27,
    type: 'content',
    chapterId: 12,
    isChapterStart: false,
    docCode: 'WP-FM // CH-12B',
    bookmark: 'ГЛАВА 12 • FAQ',
    kicker: 'ГЛАВА 12 (ДОП. СТРАНИЦА)',
    title: 'Частые вопросы (FAQ)',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Можно ли переназначить офицера на другой юнит?</div>
        <p>Да, абсолютно бесплатно и без штрафов. Экспериментируй со связками, чтобы найти максимальный урон.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Что делать, если вкачал не тот юнит?</div>
        <p>Убери юнит из активного строя армии и разбери его в <strong>Инженерном центре</strong> за небольшое количество золота — все ресурсы и опыт вернутся.</p>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Где задать вопрос по своей сборке?</div>
        <p>Перейди в чат <a href="https://t.me/WarpathHub/1" target="_blank" rel="noopener noreferrer">WarpathHub</a> или открой вкладку «Штаб и Тикеты» в шапке сайта.</p>
      </div>
    `
  },

  /* ── ГЛАВА 13: WARPATHHUB И БОТ @SHEVCHENKO01_BOT (СТР. 28–29) ── */
  {
    page: 28,
    type: 'content',
    chapterId: 13,
    isChapterStart: true,
    docCode: 'WP-FM // CH-13',
    bookmark: 'ГЛАВА 13 • WARPATHHUB',
    kicker: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    title: '13. WarpathHub и Бот @shevchenko01_bot',
    html: `
      <p class="page-lead"><strong>WarpathHub</strong> — главное русскоязычное комьюнити игроков Warpath в Telegram. Всё общение, помощь новичкам, калькулятор и модерация работают в единой связке.</p>

      <div class="margin-note">
        <div class="margin-note-title">Бот Паши — @shevchenko01_bot</div>
        <p>Многофункциональный бот WarpathHub: модерация, тикеты, <a href="https://t.me/shevchenko01_bot/calc" target="_blank" rel="noopener noreferrer">Калькулятор обмена офицеров</a> и живая статистика боёв C4 прямо в чате:</p>
        <ul class="editorial-list" style="margin-top:6px; margin-bottom:0;">
          <li><code>link [ваш_ID]</code> — привязать свой игровой PID (под аватаркой в левом верхнем углу).</li>
          <li><code>stats [ID]</code> — общая сводка командира (мощь, убийства, K/D).</li>
          <li><code>c4 [ID]</code> или <code>stats c4 [ID]</code> — статистика текущего/прошлого сезона C4 и фарма.</li>
        </ul>
      </div>

      <h3 class="section-h3">Доп. инструменты сообщества</h3>
      <ul class="editorial-list">
        <li><strong><a href="https://wpcommander.netlify.app/index.html" target="_blank" rel="noopener noreferrer">WP Commander</a>:</strong> калькулятор стройки/науки, VIP и Эксклюзивного зала (напитки), симулятор Офицерского обмена и живая база промокодов.</li>
        <li><strong><a href="https://www.speedpath.org" target="_blank" rel="noopener noreferrer">SpeedPath</a>:</strong> база на 206 скинов и 668 деталей, грейды I–XV, чеклист офицеров, планировщик науки/купонов и лента минорных патч-нотов (14.31b+).</li>
        <li><strong><a href="https://warpath.afuns.cc/en/daily" target="_blank" rel="noopener noreferrer">Warpath AFuns Stats</a>:</strong> трекер статистики игроков и рейтингов альянсов C4.</li>
      </ul>

      <div class="inline-cta-row">
        <a href="https://t.me/shevchenko01_bot/calc" target="_blank" rel="noopener noreferrer" class="page-link-btn">Калькулятор обмена ↗</a>
        <button type="button" class="page-link-btn secondary" data-open-hq="codes">Промокоды →</button>
      </div>
    `
  },
  {
    page: 29,
    type: 'content',
    chapterId: 13,
    isChapterStart: false,
    docCode: 'WP-FM // CH-13B',
    bookmark: 'ГЛАВА 13 • АВТОРЫ',
    kicker: 'ГЛАВА 13 (ДОП. СТРАНИЦА)',
    title: 'Проверенные авторы и каналы',
    html: `
      <p class="page-lead">Главные авторы сообщества WarpathHub, у которых выходят свежие разборы патчей 14.5–14.6, тир-листы, тесты и калькуляторы:</p>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title"><a href="https://www.youtube.com/@burgerdom6" target="_blank" rel="noopener noreferrer">Бургер (@burgerdom6)</a></span><span class="ed-tag">ОСНОВА • WARPATHHUB</span></div>
          <p class="ed-row-desc">Тир-листы офицеров 14.6, разборы обменов, настройки аккаунтов, промокоды и эпичные бои.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title"><a href="https://www.youtube.com/@e6aka56" target="_blank" rel="noopener noreferrer">Паша е6ака (@e6aka56)</a></span><span class="ed-tag">ТЕСТЫ • КАЛЬКУЛЯТОР</span></div>
          <p class="ed-row-desc">Калькулятор обмена офицеров 14.6, таблицы стоимости построек 32→36, тесты чипов, авиации и арты.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title"><a href="https://www.youtube.com/@ItsEhson" target="_blank" rel="noopener noreferrer">Ehson</a> / <a href="https://www.youtube.com/@ClanGothic/videos" target="_blank" rel="noopener noreferrer">Сократ (ClanGothic)</a></span><span class="ed-tag">ДОП. КАНАЛЫ</span></div>
          <p class="ed-row-desc"><strong>Ehson:</strong> F2P-сборки для сноса баз. <strong>Сократ (ClanGothic):</strong> гайды по навыкам, лайфхакам и обзорам патчей.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title"><a href="https://www.youtube.com/@VNwarpath1" target="_blank" rel="noopener noreferrer">VN Warpath</a> / <a href="https://www.youtube.com/@MoreScop3s" target="_blank" rel="noopener noreferrer">MoreScop3s</a> / <a href="https://www.youtube.com/@Twon22" target="_blank" rel="noopener noreferrer">Twon22</a></span><span class="ed-tag">EN МЕТА • ТЕСТЫ</span></div>
          <p class="ed-row-desc"><strong>VN Warpath:</strong> математика F2P и снаряги. <strong>MoreScop3s:</strong> тесты офицеров 14.5–14.6. <strong>Twon22:</strong> эндгейм, ТВД и разбор связок.</p>
        </div>
      </div>
      <div class="inline-cta-row">
        <a href="https://www.youtube.com/@burgerdom6" target="_blank" rel="noopener noreferrer" class="page-link-btn">YouTube Бургера ↗</a>
        <a href="https://www.youtube.com/@e6aka56" target="_blank" rel="noopener noreferrer" class="page-link-btn secondary">YouTube Паши е6аки ↗</a>
      </div>
    `
  },

  /* ── ГЛАВА 14: ТИКЕТЫ, ВОПРОСЫ И СЛОВАРЬ СЛЕНГА (СТР. 30–31) ── */
  {
    page: 30,
    type: 'content',
    chapterId: 14,
    isChapterStart: true,
    docCode: 'WP-FM // CH-14',
    bookmark: 'ГЛАВА 14 • ТИКЕТЫ',
    kicker: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    title: '14. Тикеты и как задать вопрос',
    html: `
      <p class="page-lead">Чтобы тебе помогли в чате или тикете максимально быстро и по делу, придерживайся короткого шаблона обращения:</p>
      <ul class="editorial-list">
        <li><strong>Для совета по армии:</strong> укажи свой сервер, стиль игры (без доната / лоу-спендер), главную фракцию и скрин/список доступных офицеров.</li>
        <li><strong>Для багов и правок гайда:</strong> укажи номер страницы устава (внизу листа) и что именно нужно уточнить.</li>
        <li><strong>Для модерации:</strong> используй тикет-систему прямо в боте <strong>@shevchenko01_bot</strong> — обращение уйдёт модераторам без потери в общем чате.</li>
      </ul>
      <div class="inline-cta-row">
        <button type="button" class="page-link-btn" data-open-hq="tickets">Создать тикет прямо сейчас →</button>
      </div>
    `
  },
  {
    page: 31,
    type: 'content',
    chapterId: 14,
    isChapterStart: false,
    docCode: 'WP-FM // CH-14B',
    bookmark: 'ГЛАВА 14 • СЛОВАРЬ',
    kicker: 'ГЛАВА 14 (ДОП. СТРАНИЦА)',
    title: 'Словарь сленга Warpath',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Термин</th><th>Расшифровка</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>ШХ (SH / «Маус»)</strong></td><td>Сверхтяжёлый танк Авангарда — максимальная броня в игре.</td></tr>
            <tr><td><strong>ТТ / МБТ</strong></td><td>Тяжёлый танк (основной боевой танк) — база первой линии.</td></tr>
            <tr><td><strong>СТ / ЛТ</strong></td><td>Средний танк (универсал) и Лёгкий танк (быстрые рейды и разведка).</td></tr>
            <tr><td><strong>ПТ (TH)</strong></td><td>Истребитель танков — главный убийца ТТ и ШХ.</td></tr>
            <tr><td><strong>Арта / RL («Катюша»)</strong></td><td>Гаубица и реактивная система залпового огня (РСЗО) для сноса баз и урона по площади.</td></tr>
            <tr><td><strong>ДД (DPS)</strong></td><td>Отряды или офицеры, наносящие основной урон (Джексон, Хеймекер).</td></tr>
            <tr><td><strong>ФД (F2P)</strong></td><td>Игра без доната или с минимальными тратами.</td></tr>
            <tr><td><strong>Оперсети</strong></td><td>Операционные сети базы — самый выгодный буст интенсивности и огневой мощи (круче Коллекционера).</td></tr>
            <tr><td><strong>G3 / G2 / Эпик</strong></td><td>Лиги подбора на карте: в Gold 3 (G3) отключены оперсети и XV ранг юнитов, в Gold 2 (G2) и выше — включены.</td></tr>
            <tr><td><strong>Флак / VADS</strong></td><td>Зенитный лёгкий танк (ЗСУ), играет от автоатак и пробития с <code>Дробовиком + Кастетом</code>.</td></tr>
            <tr><td><strong>Ракушка / Черепаха</strong></td><td>Глухая оборона базы на защитных офицерах (Иваньков, Хаос, Графиня).</td></tr>
            <tr><td><strong>C4 / ТВД / Пробуждение</strong></td><td>Сезонная кампания (сводка <code>c4</code> в боте) / Пробуждение: 4 навыка 5 ур. (720 фрагментов).</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ── ГЛАВА 15: ИНФОВОЙНА, ЧИПЫ И ЭКИПИРОВКА (СТР. 32–33) ── */
  {
    page: 32,
    type: 'content',
    chapterId: 15,
    isChapterStart: true,
    docCode: 'WP-FM // CH-15',
    bookmark: 'ГЛАВА 15 • ОПЕРСЕТИ И ЧИПЫ',
    kicker: 'VI. ПРОДВИНУТАЯ МЕТА 14.x',
    title: '15. Оперсети, Чипы и Механика игры',
    html: `
      <p class="page-lead"><strong>Центр оперативной информации</strong> открывается с возраста сервера <strong>120 дней</strong> и управляет <strong>6 операционными сетями</strong> (по 2 на каждый лагерь).</p>
      <ul class="editorial-list">
        <li><strong>Реальные правила из клиента 14.60:</strong> потолок сетей автоматически поднимается каждые <strong>180 дней</strong> (не 160!), а если ты отстаёшь от макс. уровня/ранга — включается <em>«Разгон процессора»</em> с повышенным шансом доп. апгрейдов.</li>
        <li><strong>Протокол воздушного контроля:</strong> истребитель раздаёт союзным истребителям в радиусе <strong>70%</strong> своего контроля неба. На <strong>Обратную сборку</strong> доступны только юниты <code>7★–7.2★</code> (топ-техника доросла уже до категорий <code>XV–XVI</code>).</li>
        <li><strong>Практика билда и Завоевания:</strong> сети качают под усилительные блоки и 20+ уровни (3 зелёных блока выгоднее 1 синего); вне Завоевания интенсивность/сопра режутся до <strong>60%</strong>, а в Завоевании разница статов ограничена <strong>30%</strong>.</li>
      </ul>
    `
  },
  {
    page: 33,
    type: 'content',
    chapterId: 15,
    isChapterStart: false,
    docCode: 'WP-FM // CH-15B',
    bookmark: 'ГЛАВА 15 • ТЕСТЫ И СНАРЯГА',
    kicker: 'ГЛАВА 15 (ДОП. СТРАНИЦА)',
    title: 'Приоритет снаряжения и доп. навыков',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Склад снаряжения (с 90 дня) и Тест бункера 9</div>
        <p>Ключи снаряжения: до <strong>100 шт. за золото</strong> каждые 3 дня, гарант фрагмента каждые 10 ящиков; 3 просроченные юрисдикции сохраняются в <em>Очереди перемотки</em>. По тесту ульты Арты (Искатель + Глаз): <strong>Навыки +40%</strong> (2.00B) &gt; Огневая +40% (1.74B) &gt; Интенсивность +25% (1.73B).</p>
      </div>
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Арта / RL («Катюша»)</span><span class="ed-tag">ЭКЗОПЕРЧАТКИ + ДРОН</span></div>
          <p class="ed-row-desc"><em>Багровые / Экзоперчатки</em> + Дрон + Набор песочной карты и доп на <strong>усиление навыков</strong> (главный урон арты идёт от ульты).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ЗСУ / Флак (VADS) и ОБТ атаки</span><span class="ed-tag">ДРОБОВИК + КАСТЕТ</span></div>
          <p class="ed-row-desc"><em>Дробовик шерифа + Тигриный кастет</em> (или <em>Небесный взор</em>) и усиление обычных атак/критов (снижает TTK флака с 52с до 26с).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ШХ / Оборона базы и Снаряга (VN Warpath)</span><span class="ed-tag">СБРОСА НЕТ!</span></div>
          <p class="ed-row-desc">У снаряжения офицеров <strong>нет сброса уровня</strong>, а <strong>фиолетовое 40 ур. сильнее слабого золота 20 ур.</strong> Копи ключи с VIP-магазина, радара и магазина Завоевания; для истребителей — <em>«Сапсаны»</em>.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 16: АВИАЦИЯ, ВМС И МЕХАНИКИ 14.4–14.6 (СТР. 34–36) ── */
  {
    page: 34,
    type: 'content',
    chapterId: 16,
    isChapterStart: true,
    docCode: 'WP-FM // CH-16',
    bookmark: 'ГЛАВА 16 • АВИА И ВМС',
    kicker: 'VI. ПРОДВИНУТАЯ МЕТА 14.x',
    title: '16. Авиация, ВМС и Механики 14.6',
    html: `
      <p class="page-lead">После обновлений 14.3–14.6 наземные бои больше не существуют отдельно от неба и моря.</p>
      <ul class="editorial-list">
        <li><strong>Тактика «Ястреб + Бобры»:</strong> выпускай 1 защитного истребителя («Ястреб» на живучесть с Планшетом «Сапсан») <em>до</em> бомбардировщиков (<em>Мадам теней + Сокол</em>, <em>Усатый + Орёл</em>) — ястреб принимает ПВО, пока бобры безнаказанно ломают цель.</li>
        <li><strong>Лайфхак управления на ПК:</strong> если у тебя 3 истребителя, не сбивай их в 1 группу (разлетаются в бою) — привяжи 1-й на клавишу <code>1</code>, а два других на клавишу <code>2</code>.</li>
        <li><strong>ВМС и Подлодки:</strong> Блэкджек (подлодки и ПЛО), Дитя прилива (Лоик Месье) и Красный Крокодил (флот).</li>
        <li><strong>36-й уровень построек (14.4):</strong> открыл новые технологии; таблицу стоимости 32→36 смотри в ролике Паши е6аки.</li>
      </ul>
    `
  },
  {
    page: 35,
    type: 'content',
    chapterId: 16,
    isChapterStart: false,
    docCode: 'WP-FM // CH-16B',
    bookmark: 'ГЛАВА 16 • ОФИЦЕРСКИЙ ОБМЕН',
    kicker: 'ГЛАВА 16 (ДОП. СТРАНИЦА)',
    title: 'Офицерский обмен и Техас (14.60.10)',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Точные правила Офицерского обмена (сервер 105+ дней)</div>
        <p>Всего <strong>3 необратимых обмена</strong>: <strong>2</strong> для обычных и <strong>1</strong> для эксклюзивного офицера (из Эксклюзивного зала отдыха Кэт). Переносятся только уровни и навыки; повторно уже обменянного менять нельзя! В стоп-листе: <em>Перси, Марко Росси, Эри Касамото, Белая Волчица, Кровавая Мэри, Машина войны, Спанер</em>. Планируй в <a href="https://t.me/shevchenko01_bot/calc" target="_blank" rel="noopener noreferrer">Калькуляторе Шевченко</a>.</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Оптимизация навыков (MoreScop3s / VN Warpath):</strong> не сливай статуи в бесполезный 4-й пассивный навык перед обменом (держи формат <code>5-5-4-1</code> или сперва считай баланс статуй в калькуляторе).</li>
        <li><strong>Электроснабжение базы (Техас):</strong> если эффективность падает ниже <strong>90%</strong>, база и армия получают ступенчатый штраф к урону!</li>
        <li><strong>Сертификаты:</strong> статуи пробуждённых меняются в Магазине сувениров (50 сертификатов; за Машину войны — 5).</li>
      </ul>
    `
  },
  {
    page: 36,
    type: 'content',
    chapterId: 16,
    isChapterStart: false,
    docCode: 'WP-FM // CH-16C',
    bookmark: 'ГЛАВА 16 • ИТОГИ МЕТЫ',
    kicker: 'ДАЛЕЕ: ПОЛНЫЙ СПРАВОЧНИК',
    title: 'Шпаргалка по переходу к энциклопедии',
    html: `
      <p class="page-lead">С базой 14.60 разобрались. В следующих главах (<strong>Раздел VII, стр. 37–48</strong>) — развёрнутая «аптечная инструкция» по всей физике боя Warpath: от сквозного пробития и лимитов лиг до всех родов войск и чеклистов.</p>
      <div class="inline-cta-row">
        <button type="button" class="page-link-btn" data-goto="37">Открыть Раздел VII: Формулы →</button>
        <a href="updates.html" class="page-link-btn secondary">Том II: Хроника патчей</a>
      </div>
    `
  },

  /* ── ГЛАВА 17: БОЕВЫЕ ФОРМУЛЫ И ПРОБИТИЕ НАВЫЛЕТ (СТР. 37–38) ── */
  {
    page: 37,
    type: 'content',
    chapterId: 17,
    isChapterStart: true,
    docCode: 'WP-FM // CH-17',
    bookmark: 'ГЛАВА 17 • ФОРМУЛЫ',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '17. Боевые формулы и Приведённая броня',
    html: `
      <p class="page-lead">Урон в Warpath считается не одной кнопкой «Мощь», а попарным сравнением характеристик атакующего и цели (по коду клиента <code>14.60.10</code>):</p>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Атака</th><th>Защита цели</th><th>Как работает</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Глубина бронепробития</strong></td><td><strong>Приведённая броня</strong></td><td>Толщина листа + угол наклона плит. Нет пробития — урон сильно режется.</td></tr>
            <tr><td><strong>Интенсивность урона</strong></td><td><strong>Сопротивление урону</strong></td><td>Умножающий множитель всего исходящего/входящего урона.</td></tr>
            <tr><td><strong>Усиление навыков</strong></td><td><strong>Устойчивость к навыкам</strong></td><td>Определяет урон от ульт/тактических/пассивных навыков офицеров (кап базе 80%).</td></tr>
            <tr><td><strong>Усиление обычных атак</strong></td><td><strong>Устойчивость к автоатакам</strong></td><td>Решающий стат для ЗСУ/Флака, ОБТ на критах и пехоты (кап базе 80%).</td></tr>
            <tr><td><strong>Усиление ударной волны</strong></td><td><strong>Устойчивость к ударной волне</strong></td><td>Уменьшает взрывной урон (гаубицы/РСЗО) по цели и базе.</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    page: 38,
    type: 'content',
    chapterId: 17,
    isChapterStart: false,
    docCode: 'WP-FM // CH-17B',
    bookmark: 'ГЛАВА 17 • СКВОЗНОЕ ПРОБИТИЕ',
    kicker: 'ГЛАВА 17 (ДОП. СТРАНИЦА)',
    title: 'Пробитие навылет и Капы режимов',
    html: `
      <div class="margin-note">
        <div class="margin-note-title">Сквозное пробитие («пробитие навылет»)</div>
        <p><strong>Официальное правило игры:</strong> если глубина бронепробития атакующего <em>намного превышает</em> приведённую броню цели, снаряд проходит навылет и <strong>урон значительно снижается</strong>! Поэтому тяжёлые ПТ бьют ЛТ/грузовики хуже скорострельных автоатак.</p>
      </div>
      <ul class="editorial-list">
        <li><strong>Лимит 80% для базы:</strong> бонусы офицеров к устойчивости базы (отдельно для автоатак и для навыков) суммируются, но <strong>не могут превышать 80%</strong>.</li>
        <li><strong>Ограничения вне Завоевания:</strong> за пределами Завоевания/Операции интенсивность урона и сопротивление снижаются до <strong>60%</strong> от нормальных значений.</li>
        <li><strong>Потолок разницы в Завоевании:</strong> макс. разница интенсивности и сопротивления между командирами снижена с 50% до <strong>30%</strong>, чтобы бои не превращались в односторонний снос.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 18: ПУТЬ ЮНИТА 4★→9.2★, ПРОТОТИПЫ И ЛИГИ (СТР. 39–40) ── */
  {
    page: 39,
    type: 'content',
    chapterId: 18,
    isChapterStart: true,
    docCode: 'WP-FM // CH-18',
    bookmark: 'ГЛАВА 18 • ЗВЁЗДЫ И ПРОТОТИПЫ',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '18. Путь юнита: от 4★ до 9.2★ и XVI ранга',
    html: `
      <p class="page-lead">Эволюция техники делится на две эпохи: <strong>Классические юниты (4★ → 7.2★)</strong> и <strong>Современные юниты (8★ → 9.2★, категории XV–XVI)</strong>.</p>
      <ul class="editorial-list">
        <li><strong>Переход через «Прототип» (180+ дней):</strong> на серверах возрастом от <strong>180 дней</strong> любой юнит с <code>7.2★</code> можно превратить в Современный юнит <code>8★+</code> — меняется модель, потолок уровня (<code>160–200</code>) и открываются новые моды.</li>
        <li><strong>Обратная сборка:</strong> позволяет собирать напрямую за <em>Фрагменты прототипов</em> и чертежи только юниты <strong>7★, 7.1★ и 7.2★</strong> (строго того же лагеря!). Выше — только ручное слияние/апгрейд.</li>
        <li><strong>Наследование скинов:</strong> скин классического юнита работает на <code>5★–7.2★</code> и <em>автоматически открывает</em> свою современную версию для <code>8★+</code>!</li>
        <li><strong>Разборка и Слияние:</strong> пока юнит ниже <code>7.2★</code>, не трать зря «левые» карты в бесполезные звёзды, а при ошибке делай Разборку за золото (вернутся детали/опыт).</li>
      </ul>
    `
  },
  {
    page: 40,
    type: 'content',
    chapterId: 18,
    isChapterStart: false,
    docCode: 'WP-FM // CH-18B',
    bookmark: 'ГЛАВА 18 • ЛИГИ И КАПЫ',
    kicker: 'ГЛАВА 18 (ДОП. СТРАНИЦА)',
    title: 'Ограничения полей сражений по лигам',
    html: `
      <p class="page-lead">Перед перелётом или выбором лиги альянса сверяйся с потолками звёзд, оперсетей и стен на полях боя:</p>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Дивизион / Лига</th><th>Макс. звёзды</th><th>Стены / Примечание</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Серебро I–III</strong></td><td>до <code>8.1★</code></td><td>Мягкие капы; комфортно новичкам и F2P для старта без китов.</td></tr>
            <tr><td><strong>Золото III (G3)</strong></td><td><code>9★</code> (ВМС <code>8.2★</code>)</td><td>Стена макс. <strong>130</strong>; Оперсети и XV ранг ограничены.</td></tr>
            <tr><td><strong>Золото II (G2)</strong></td><td><code>9.1★</code> (ВМС <code>8.2★</code>)</td><td>Стена макс. <strong>180</strong>; Оперсети и ранг XV работают полностью.</td></tr>
            <tr><td><strong>Золото I / Легенд. I–II</strong></td><td><code>9.1★+</code> / макс.</td><td>Эндгейм-поля со стенами <strong>130–180+</strong>, полной авиацией и ВМС.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="margin-note">
        <div class="margin-note-title">Совет для F2P</div>
        <p>Не рвись в верхние лиги Золота, пока не прокачал минимум 1–2 современных юнита и базовые Операционные сети.</p>
      </div>
    `
  },

  /* ── ГЛАВА 19: БАЗА, СТЕНЫ, VIP И ЗАЛ КЭТ (СТР. 41–42) ── */
  {
    page: 41,
    type: 'content',
    chapterId: 19,
    isChapterStart: true,
    docCode: 'WP-FM // CH-19',
    bookmark: 'ГЛАВА 19 • БАЗА И СТЕНЫ',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '19. Здания базы, 4 стены и Приоритеты стройки',
    html: `
      <p class="page-lead">Секрет быстрого роста до 32–36 ур. — не качать все здания вширь, а держать фокус на ключевых узлах армии и науки.</p>
      <ul class="editorial-list">
        <li><strong>Топ-1: Командный центр (Штаб)</strong> — разблокирует лимиты всех построек, слоты и возрастные фичи сервера.</li>
        <li><strong>Топ-2: Исследовательский и Инженерный центры</strong> — ускоряют науку, производство кирпича/бетона/стальных балок и дают доступ к Разборке/Обратной сборке.</li>
        <li><strong>Топ-3: Профильные Казармы + Ангар / Верфь</strong> — качай в первую очередь казарму своего основного лагеря и ангар (истребители/бомберы).</li>
        <li><strong>4 укреплённые стены базы:</strong> по механике клиента у базы <strong>4 независимые стороны стен</strong> (каждая качается отдельно!). Высокие уровни дают прямые <code>+%</code> к ОЗ и сопротивлению базы.</li>
      </ul>
    `
  },
  {
    page: 42,
    type: 'content',
    chapterId: 19,
    isChapterStart: false,
    docCode: 'WP-FM // CH-19B',
    bookmark: 'ГЛАВА 19 • VIP И ЗАЛ КЭТ',
    kicker: 'ГЛАВА 19 (ДОП. СТРАНИЦА)',
    title: 'Пороги VIP, Чёрный рынок и Зал отдыха Кэт',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Ключевые уровни VIP (приоритет №1 для золота)</span><span class="ed-tag">VIP 4 / 9 / 12+</span></div>
          <p class="ed-row-desc"><strong>VIP 4:</strong> 1 Универсальный купон ежедневно. <strong>VIP 9:</strong> 1 Лагерный купон ежедневно + сильные бонусы к стройке/науке. В VIP-магазине выгодно добирать ускорения и ключи снаряги.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Эксклюзивный зал отдыха Кэт</span><span class="ed-tag">5 ДНЕЙ / МЕСЯЦ</span></div>
          <p class="ed-row-desc">Открывается случайно раз в месяц на <strong>5 дней</strong>. Редкие эксклюзивные офицеры (Мулянь, Безмолвный гром, Виндикта, Крокодил) нанимаются за <em>премиальные жетоны на напитки</em>.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Чёрный рынок (ежедневное правило)</span><span class="ed-tag">РЕСУРС ЗА РЕСУРС</span></div>
          <p class="ed-row-desc">При каждом обновлении выкупай лоты ресурсов за другие ресурсы (это чистая прибыль казны) и ускорения за 10–20 золота. Никогда не покупай там сырьё за полную цену золота.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 20: ЭНЦИКЛОПЕДИЯ ВСЕХ РОДОВ ВОЙСК (СТР. 43–44) ── */
  {
    page: 43,
    type: 'content',
    chapterId: 20,
    isChapterStart: true,
    docCode: 'WP-FM // CH-20',
    bookmark: 'ГЛАВА 20 • СУША И БУНКЕР',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '20. Все рода войск: Суша (9 классов)',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Класс</th><th>Особая механика из игры</th><th>Когда использовать</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Пехота</strong></td><td>При остановке входит в <strong>режим бункера</strong>: с 7★+ снижает урон союзникам в радиусе 2 квадратов на <code>3%–4%</code> (стакается до <strong>12%</strong>).</td><td>Захват точек, бункер перед пушками и дешёвый щит базы.</td></tr>
            <tr><td><strong>ЛТ / VADS</strong></td><td>Высочайшая скорость и частые автоатаки; ЗСУ (VADS) режет воздух и тонкие цели без риска «навылет».</td><td>Рейды в тыл арты, разведка, Флак-сборка.</td></tr>
            <tr><td><strong>СТ / ТТ / ШХ</strong></td><td>От универсала (СТ) до передвижной крепости («Судный день» / «Маус»): высокая приведённая броня.</td><td>Держать первую линию и танковать фокус.</td></tr>
            <tr><td><strong>ПТ / ПТО</strong></td><td>Макс. бронепробитие; <strong>ПТО переключается в режим ПВО</strong> против авиации! Риск сквозного пробития по ЛТ.</td><td>Вырезание ТТ и ШХ, засады и прикрытие от бобров.</td></tr>
            <tr><td><strong>Арта / RL (Катюша)</strong></td><td>Урон по площади и ударная волна; у RL часто бонус <em>за каждые N мм брони цели</em>.</td><td>Снос баз и скоплений врага из-за спины танков.</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    page: 44,
    type: 'content',
    chapterId: 20,
    isChapterStart: false,
    docCode: 'WP-FM // CH-20B',
    bookmark: 'ГЛАВА 20 • НЕБО И МОРЕ',
    kicker: 'ГЛАВА 20 (ДОП. СТРАНИЦА)',
    title: 'Энциклопедия ВВС и ВМС (Небо и Море)',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Истребители (Воздушный контроль)</span><span class="ed-tag">70% АУРА</span></div>
          <p class="ed-row-desc">Тот, у кого выше <em>Контроль воздушного пространства</em>, наносит больше и получает меньше урона. Плюс защитный истребитель передаёт <strong>70%</strong> своего контроля союзникам в радиусе.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Бомбардировщики (Разница лагерей)</span><span class="ed-tag">АВАНГАРД / ЛИБЕРТИ</span></div>
          <p class="ed-row-desc">Бомбардировщики <strong>Авангарда</strong> делят урон по всем видимым юнитам в квадрате (<code>+2%</code> за каждый видимый юнит); <strong>Либерти</strong> лучше бьёт точечные/бронированные цели. Выпускай бобров строго под прикрытием ястреба!</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">ВМС (Подлодки, ПВО и Ракетные эсминцы)</span><span class="ed-tag">МОРСКОЙ ГЕГЕМОН</span></div>
          <p class="ed-row-desc"><strong>Подлодки (Кит 627А):</strong> Блэкджек / Дитя прилива. <strong>Эсминцы и Крейсеры:</strong> Красный крокодил + Волнорез (горение по броне) или Сирена + Клык приливов. В пачке 14.6 авиация интегрирована в Морской кубок.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 21: СОБЫТИЯ, ЗАВОЕВАНИЕ И ЛИМИТЫ (СТР. 45–46) ── */
  {
    page: 45,
    type: 'content',
    chapterId: 21,
    isChapterStart: true,
    docCode: 'WP-FM // CH-21',
    bookmark: 'ГЛАВА 21 • КАЛЕНДАРЬ ИВЕНТОВ',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '21. Главные события и циклы сервера',
    html: `
      <ul class="editorial-list">
        <li><strong>Гонка вооружений (Arms Race) и Юрисдикции:</strong> никогда не трать крупные ускорения и купоны впустую — сливай под совпадение этапов! Просроченные юрисдикции (до <strong>3 шт.</strong>) сохраняются в <em>Очереди перемотки</em> (1 повторный шанс на каждую).</li>
        <li><strong>Склад снаряжения (сервер 90+ дн.):</strong> в вишлист добавляется 6 предметов; каждые <strong>10 ящиков</strong> — гарантированный фрагмент. До <strong>100 ключей</strong> можно докупить за золото раз в 3 дня.</li>
        <li><strong>Центр оперативной информации (120+ дн.):</strong> 6 сетей (по 2 на лагерь); глобальный апгрейд потолка раз в <strong>180 дней</strong> с автоускорением догоняющих («Разгон процессора»).</li>
        <li><strong>Защита ракеты / Сокровища / Авиарейды:</strong> ивенты каждые ~3 недели (длительность 3 дня) — стабильный источник чипов, деталей и чертежей.</li>
      </ul>
    `
  },
  {
    page: 46,
    type: 'content',
    chapterId: 21,
    isChapterStart: false,
    docCode: 'WP-FM // CH-21B',
    bookmark: 'ГЛАВА 21 • ЗАВОЕВАНИЕ',
    kicker: 'ГЛАВА 21 (ДОП. СТРАНИЦА)',
    title: 'Правила Завоевания, Техаса и Миграции',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Карта Техаса и Электроснабжение</span><span class="ed-tag">ПОРОГ 90%</span></div>
          <p class="ed-row-desc">Эффективность питания = множитель поселения × множитель электротехнологий. Упадёт ниже <strong>90%</strong> — вся база и войска получают ступенчатый штраф к урону!</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Перелёт (Миграция) и Блокировки зданий</span><span class="ed-tag">90 / 105 / 120 ДНЕЙ</span></div>
          <p class="ed-row-desc">При миграции на молодой сервер временно блокируются: до 90 дн. — <em>Склад снаряжения</em>, до 105 дн. — <em>Офицерский обмен</em>, до 120 дн. — <em>Оперсети</em>, до 180 дн. — <em>Прототипы 8★+</em>. Прогресс сохраняется.</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Отчёты и статистика C4 в WarpathHub</span><span class="ed-tag">БОТ @shevchenko01_bot</span></div>
          <p class="ed-row-desc">В чате пиши <code>link [PID]</code> (номер под авой), затем <code>stats</code> и <code>c4</code> — для контроля своего K/D, фарма и разборов.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 22: СВОДНЫЙ ЧЕКЛИСТ НОВИЧОК / МИД / ПРОФИ (СТР. 47–48) ── */
  {
    page: 47,
    type: 'content',
    chapterId: 22,
    isChapterStart: true,
    docCode: 'WP-FM // CH-22',
    bookmark: 'ГЛАВА 22 • ЧЕКЛИСТ',
    kicker: 'VII. ПОЛНЫЙ СПРАВОЧНИК (ОТ А ДО Я)',
    title: '22. Чеклист роста: Новичок / Мид / Профи',
    html: `
      <div class="editorial-rows">
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Этап 1: Новичок (1–30 дней, F2P)</span><span class="ed-tag">БАЗА</span></div>
          <p class="ed-row-desc">• 1 главный лагерь + 2 юнита (ТТ/СТ + Арта).<br>• Золото только в VIP 4 → VIP 9, не на ускорение.<br>• Активируй промокоды в «Штаб → Промокоды», гоняй сборщиков и Чёрный рынок (ресурс за ресурс).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Этап 2: Мидгейм (7.2★ → Прототип 9★)</span><span class="ed-tag">СИНЕРГИЯ</span></div>
          <p class="ed-row-desc">• Разделяй 4 бюджета апгрейда (SpeedPath).<br>• Качай 1–2 пробуждённых офицеров до упора вместо всех по чуть-чуть.<br>• Собирай фиолетовую снарягу офицеров (ур. 40 > слабое золото 20 ур.).</p>
        </div>
        <div class="ed-row">
          <div class="ed-row-head"><span class="ed-row-title">Этап 3: Профи (180+ дней, G2 / Эпик)</span><span class="ed-tag">ЭНДГЕЙМ</span></div>
          <p class="ed-row-desc">• Оперсети в упор (3 зелёных > 1 синий) + защитный ястреб (70% ауры) + 2 бобра.<br>• Жёсткое деление на деф (без гибридов, кап 80% базе) и атаку (усиление навыков арте, автоатаки флаку).<br>• Перед Офицерским обменом (3 слота: 2+1) — полный просчёт в калькуляторе Шевченко.</p>
        </div>
      </div>
    `
  },
  {
    page: 48,
    type: 'content',
    chapterId: 22,
    isChapterStart: false,
    docCode: 'WP-FM // FINISH',
    bookmark: 'ФИНАЛ • ТОМ II И ИНСТРУМЕНТЫ',
    kicker: 'ЭНЦИКЛОПЕДИЯ ЗАВЕРШЕНА',
    title: 'Навигация по инструментам и Тому II',
    html: `
      <p class="page-lead">Теперь у тебя под рукой полный справочник Тома I (48 страниц). Чтобы наверстать изменения патчей 12.0 → 14.60, скопировать промокоды или открыть актуальные калькуляторы — пользуйся быстрыми переходами ниже:</p>
      <div class="inline-cta-row">
        <a href="updates.html" class="page-link-btn">Том II: Хроника патчей →</a>
        <button type="button" class="page-link-btn secondary" data-open-hq="codes">Промокоды (копировать)</button>
        <button type="button" class="page-link-btn secondary" data-open-hq="tickets">Штаб и Тикеты</button>
      </div>
      <div class="margin-note" style="margin-top:12px;">
        <div class="margin-note-title">Внешние базы (выбор)</div>
        <p><a href="https://wpcommander.netlify.app/index.html" target="_blank" rel="noopener noreferrer">WP Commander (актуальный)</a> • <a href="https://www.speedpath.org" target="_blank" rel="noopener noreferrer">SpeedPath (EN)</a> • <a href="https://228burger228.github.io/WarpathYTwiki/index.html" target="_blank" rel="noopener noreferrer">WarpathYTwiki (архивный сайт Бургера)</a></p>
      </div>
    `
  }
];

/* ── ДАННЫЕ ДЛЯ ВСТРОЕННОГО КАЛЬКУЛЯТОРА (из WarpathYTwiki/data.js) ── */
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
  { name: 'Калькулятор Обмена (@shevchenko01_bot)', desc: 'Приложение WARHUB: расчёт 3 слотов, статуй, золота и Battle Pass для 14.6.', url: 'https://t.me/shevchenko01_bot/calc', cta: 'Расчёт ↗' },
  { name: '@shevchenko01_bot (Бот Паши)', desc: 'Тикет-система, статистика игроков (link/stats/c4) и модерация чата.', url: 'https://t.me/shevchenko01_bot', cta: 'Открыть ↗' },
  { name: 'Активация промокодов Lilith', desc: 'Официальный портал ввода подарочных кодов Warpath (или в игре: Опции → Подарки).', url: 'https://cdkey.lilith.com/warpath-global', cta: 'Ввести код ↗' },
  { name: 'WP Commander', desc: 'Калькуляторы стройки, науки, VIP, напитков, обмена, сравнение игроков и база кодов.', url: 'https://wpcommander.netlify.app/index.html', cta: 'Открыть ↗' },
  { name: 'SpeedPath (EN)', desc: 'База 206 скинов и 668 деталей (I–XV), чеклисты сборок, планировщики и минорные патч-ноты.', url: 'https://www.speedpath.org', cta: 'Открыть ↗' },
  { name: 'Warpath AFuns Stats', desc: 'База боевой статистики C4, мощи игроков и рейтингов альянсов.', url: 'https://warpath.afuns.cc/en/daily', cta: 'Статистика ↗' },
  { name: 'Бургер (@burgerdom6)', desc: 'Тир-листы офицеров 14.6, разборы обменов, настройки аккаунта и бои.', url: 'https://www.youtube.com/@burgerdom6', cta: 'YouTube ↗' },
  { name: 'Паша е6ака (@e6aka56)', desc: 'Калькулятор обмена 14.6, таблицы построек 32→36, тесты юнитов и чипов.', url: 'https://www.youtube.com/@e6aka56', cta: 'YouTube ↗' },
  { name: 'Ehson', desc: 'Тактика, F2P-методы и разборы сборок для сноса баз.', url: 'https://www.youtube.com/@ItsEhson', cta: 'YouTube ↗' },
  { name: 'Сократ — ClanGothic (доп.)', desc: 'Обзоры патчей, лайфхаки и подбор доп. навыков офицеров.', url: 'https://www.youtube.com/@ClanGothic/videos', cta: 'YouTube ↗' },
  { name: 'VN Warpath (EN)', desc: 'Математика F2P, быстрый фарм снаряжения офицеров и разбор Обмена 2026.', url: 'https://www.youtube.com/@VNwarpath1', cta: 'YouTube ↗' },
  { name: 'MoreScop3s (EN)', desc: 'Глубокие тесты новых офицеров (Мусорщик, Крокодил) и патчи 14.5–14.6.', url: 'https://www.youtube.com/@MoreScop3s', cta: 'YouTube ↗' },
  { name: 'Twon22 — Antoine Leclerc (EN)', desc: 'Эндгейм-гайды, войны серверов, карты завоеваний и мини-гайды по офицерам.', url: 'https://www.youtube.com/@Twon22', cta: 'YouTube ↗' },
  { name: 'WarpathYTwiki (Архив Бургера)', desc: 'Старый авторский справочник и конструктор (давно не обновляется; для актуальных расчётов используй WP Commander).', url: 'https://228burger228.github.io/WarpathYTwiki/index.html', cta: 'Архив ↗' },
  { name: 'Официальный Discord Warpath', desc: 'Международный сервер разработчиков Lilith Games (из клиента v14.60).', url: 'https://discord.com/invite/playwarpath', cta: 'Discord ↗' }
];

window.PROMO_CODES = [
  { code: 'PATCHPREVIEW146', note: 'Актуальный код превью патча 14.6', tag: '14.6' },
  { code: 'HALLOWEEN2026', note: 'Сезонный подарочный код 2026', tag: 'ИВЕНТ' },
  { code: '8qjhvimahr', note: 'Свежий код сообщества (база WP Commander)', tag: 'НОВЫЙ' },
  { code: '8qav8qpsrp', note: 'Свежий код сообщества (база WP Commander)', tag: 'НОВЫЙ' },
  { code: 'a4eb6wqfvd', note: 'Свежий код сообщества (база WP Commander)', tag: 'НОВЫЙ' },
  { code: '8qbj8j5iw5', note: 'Подарочный код (ограниченные активации)', tag: '2026' },
  { code: '8qkapmp54w', note: 'Подарочный код (ограниченные активации)', tag: '2026' },
  { code: '8qnj2tykei', note: 'Подарочный код (ограниченные активации)', tag: '2026' },
  { code: '8qyfvc7zp9', note: 'Подарочный код (ограниченные активации)', tag: '2026' },
  { code: 'PATCHPREVIEW145', note: 'Код превью патча 14.5', tag: '14.5' },
  { code: 'PATCHPREVIEW144', note: 'Код превью патча 14.4', tag: '14.4' },
  { code: '7t3ds9i9dr', note: 'Архив WP Commander (проверь на аккаунте)', tag: 'АРХИВ' },
  { code: '8qy2us688p', note: 'Архив WP Commander (проверь на аккаунте)', tag: 'АРХИВ' },
  { code: '8qddt8h7yw', note: 'Архив WP Commander (проверь на аккаунте)', tag: 'АРХИВ' },
  { code: '8qrnn29eca', note: 'Архив WP Commander (проверь на аккаунте)', tag: 'АРХИВ' },
  { code: 'QIXI2026', note: 'Праздничный код Циси 2026', tag: 'АРХИВ' }
];

/* ── РЕКОМЕНДУЕМЫЕ ВИДЕО YOUTUBE ПО ТЕМАМ ГЛАВ ─────────────────── */
window.YOUTUBE_BY_TOPIC = {
  default: {
    topic: 'Свежие гайды патча 14.6',
    query: 'Warpath 14.6 гайд burgerdom6 e6aka56',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6? Тир-лист кого менять', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6 — Рассчитай аккаунт за 1 минуту!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  },
  1: {
    topic: 'Основы и принципы меты',
    query: 'Warpath гайд новичку настройка аккаунта',
    videos: [
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' },
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  },
  2: {
    topic: 'Фракции, танки и авиация',
    query: 'Warpath выбор техники и фракции',
    videos: [
      { title: 'Главные новинки обновления 14.5 в Warpath Ace Shooter', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/oQx7FpiLlCc' },
      { title: 'ВОЗДУШНЫЕ ГРУППЫ / 2 новых офицера / Патч 14.3', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/hjbw1grtPv8' },
      { title: 'Какой МБТ самый лучший? | Warpath: Ace Shooter', author: 'Ehson', url: 'https://youtu.be/V6xFWFjCOrI' }
    ]
  },
  3: {
    topic: 'Правильный старт и первые дни',
    query: 'Warpath старт новичку настройка',
    videos: [
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' },
      { title: '32→36 СТОИМОСТЬ ВСЕХ ПОСТРОЕК / ТАБЛИЦА', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/mM0hYObwXQE' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  },
  4: {
    topic: 'F2P-развитие без доната',
    query: 'Warpath FD без доната гайд',
    videos: [
      { title: 'FD против Китая / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/4as-Btr7jRc' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'Лучшая F2P сборка для сноса баз!', author: 'Ehson', url: 'https://youtu.be/kCTdPzztNGI' },
      { title: 'EN: F2P GOD! Best FREE Officers You Need Before Update', author: 'VN Warpath (@VNwarpath1)', url: 'https://youtu.be/H46wQlbyOgc' }
    ]
  },
  5: {
    topic: 'Золото, VIP и выгодные траты',
    query: 'Warpath золото траты обмен 14.6',
    videos: [
      { title: 'ОБМЕН ОФИЦЕРОВ ВОЗВРАЩАЕТСЯ! Золотая арта и вкусности / 14.6', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/LrIujsuFFx0' },
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Warpath 1VS15 Gold — потужники сносят меня', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/8LEny-E0Gb8' }
    ]
  },
  6: {
    topic: 'Постройки 36 ур., наука и технологии',
    query: 'Warpath 36 уровень постройки технологии',
    videos: [
      { title: '32→36 СТОИМОСТЬ ВСЕХ ПОСТРОЕК / ТАБЛИЦА', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/mM0hYObwXQE' },
      { title: '36 УРОВЕНЬ ПОСТРОЙКИ / НОВЫЕ ТЕХНОЛОГИИ / Патч 14.4', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/pLXUnAi8ttw' },
      { title: 'Доп.: Обзор патча 14.6', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/YA7PniQREhc' }
    ]
  },
  7: {
    topic: 'Юниты: ТТ, ШХ, ПТ, Арта и RL Катюша',
    query: 'Warpath золотая арта истребитель танки',
    videos: [
      { title: 'ОБМЕН ОФИЦЕРОВ И ЗОЛОТАЯ АРТА / 14.6', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/LrIujsuFFx0' },
      { title: 'ОФИЦЕР НА АРТУ / БОЕВОЙ СОКОЛ / 14.3', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/DFdBAC2biT8' },
      { title: 'ТЕСТЫ! ОФИЦЕР НА ИСТРЕБИТЕЛЬ / ПРЕСЛЕДУЮЩАЯ ТЕНЬ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/Qdj-z8QjdCE' }
    ]
  },
  8: {
    topic: 'Система контров и тактика боя',
    query: 'Warpath тактика контры бои',
    videos: [
      { title: 'Разнос: битва против всей карты / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/ofVt4IlWPFc' },
      { title: 'НОВЫЕ КОАЛИЦИИ СЛОМАНЫ В КАРИБСКОМ МОРЕ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/gjgxvQBHeX4' },
      { title: 'Доп.: Как правильно выбирать доп. навыки офицеров', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/-ZW2_zJ0eC0' }
    ]
  },
  9: {
    topic: 'Офицеры 14.5–14.6 и связки',
    query: 'Warpath каких офицеров качать 14.6 обмен',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6? Тир-лист кого менять', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: 'Тест новых офицеров 14.3 — кто теперь мета?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/F_iWTrR3CuI' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6 — за 1 минуту!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'Разбор связок (Мадам + Сокол / Гром + Шева) 16:08–17:17', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/g4Eo78UKXiw' },
      { title: 'EN: Scavenger Testing (Мусорщик на танки и пехоту)', author: 'MoreScop3s (@MoreScop3s)', url: 'https://youtu.be/qTyj5vBNyt4' },
      { title: 'EN: Red Crocodile Breakdown (ВМС Либерти 14.6)', author: 'MoreScop3s (@MoreScop3s)', url: 'https://youtu.be/215cGNOPzMI' },
      { title: 'Доп.: Как правильно выбирать доп. навыки офицеров', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/-ZW2_zJ0eC0' }
    ]
  },
  10: {
    topic: 'Сборка армии (5 слотов) и чипы',
    query: 'Warpath сборка армии чипы арта',
    videos: [
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' },
      { title: 'Лучшая F2P сборка для сноса баз!', author: 'Ehson', url: 'https://youtu.be/kCTdPzztNGI' }
    ]
  },
  11: {
    topic: 'Гегемон, ТВД, ПвП и турниры',
    query: 'Warpath гегемон кубок бои',
    videos: [
      { title: 'Гегемон / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/V4xFkoiUWtM' },
      { title: 'Epic s132 VS 2 alliance / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/63ftPjdFac8' },
      { title: 'Турнир E&L 118 vs FOX 119', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/YhL9b3Vg0uQ' },
      { title: 'EN: Разбор завоеваний, Nighthawk / Surf Strider / Herald', author: 'Twon22 (@Twon22)', url: 'https://www.youtube.com/@Twon22/videos' },
      { title: 'Доп.: Самый тяжелый бой в гегемоне', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/nE7ge5bGTvs' }
    ]
  },
  12: {
    topic: 'Экспедиции, патчи и FAQ',
    query: 'Warpath обновление 14.6 обзор',
    videos: [
      { title: 'ОБМЕН ОФИЦЕРОВ В 14.6 И ДРУГИЕ ОБНОВЛЕНИЯ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/kZtiajsI_lg' },
      { title: 'Обзор офицера от лица девушки 14.5', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/-QDbHEC0ZNY' },
      { title: 'Доп.: Обзор патча 14.6', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/YA7PniQREhc' }
    ]
  },
  13: {
    topic: 'Каналы: Бургер, Паша е6ака и EN-авторы',
    query: 'burgerdom6 e6aka56 vnwarpath1 morescop3s twon22',
    videos: [
      { title: 'Бургер (@burgerdom6) — все свежие видео', author: 'Бургер (@burgerdom6)', url: 'https://www.youtube.com/@burgerdom6' },
      { title: 'Паша е6ака (@e6aka56) — тесты и таблицы', author: 'Паша е6ака (@e6aka56)', url: 'https://www.youtube.com/@e6aka56' },
      { title: 'EN: VN Warpath — математика F2P и снаряжения', author: 'VN Warpath (@VNwarpath1)', url: 'https://www.youtube.com/@VNwarpath1' },
      { title: 'EN: MoreScop3s — тесты офицеров и 14.5–14.6', author: 'MoreScop3s (@MoreScop3s)', url: 'https://www.youtube.com/@MoreScop3s' },
      { title: 'EN: Twon22 (Antoine Leclerc) — эндгейм и ТВД', author: 'Twon22 (@Twon22)', url: 'https://www.youtube.com/@Twon22' },
      { title: 'Доп.: Сократ (ClanGothic) — видео канала', author: 'Сократ (ClanGothic)', url: 'https://www.youtube.com/@ClanGothic/videos' }
    ]
  },
  14: {
    topic: 'Вопросы, тикеты и сленг',
    query: 'Warpath советы гайд',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: '2 НОВЫХ ОФИЦЕРА И ОБНОВЛЕНИЯ В ПАТЧЕ 14.5', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/HKUFDyEJBwg' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  },
  15: {
    topic: 'Оперсети, чипы и снаряжение офицеров',
    query: 'Warpath вычислительные чипы инфовойна gear',
    videos: [
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' },
      { title: 'EN: How to Get Officer Gear FASTEST (Фиолет 40 vs Золото 20)', author: 'VN Warpath (@VNwarpath1)', url: 'https://youtu.be/JuRjlxM-Z7A' }
    ]
  },
  16: {
    topic: 'Авиация, ВМС, 36 ур. и Офицерский обмен 14.6',
    query: 'Warpath 14.6 обмен офицеров золотая арта',
    videos: [
      { title: 'ОБМЕН ОФИЦЕРОВ В 14.6! Золотая арта и вкусности', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/LrIujsuFFx0' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6 за 1 минуту!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'EN: Dont Swap the WRONG Free Officer! Guide 2026', author: 'VN Warpath (@VNwarpath1)', url: 'https://youtu.be/iI5Znd_OB3I' },
      { title: 'EN: Update 14.6 — Officer Swap, Техас и ВМС', author: 'MoreScop3s (@MoreScop3s)', url: 'https://youtu.be/VerRbQt2Yvs' },
      { title: 'ТЕСТЫ! ОФИЦЕР НА ИСТРЕБИТЕЛЬ / ПРЕСЛЕДУЮЩАЯ ТЕНЬ', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/Qdj-z8QjdCE' }
    ]
  },
  17: {
    topic: 'Боевые формулы и пробитие брони',
    query: 'Warpath бронепробитие урон формулы',
    videos: [
      { title: 'ВЫЧИСЛИТЕЛЬНЫЕ ЧИПЫ И УРОН. КРУТИМ ПРАВИЛЬНО.', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/FgJcrLFNrJ4' },
      { title: 'Тест новых офицеров 14.3 — кто теперь мета?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/F_iWTrR3CuI' },
      { title: 'EN: How to Get Officer Gear FASTEST (математика снаряги)', author: 'VN Warpath (@VNwarpath1)', url: 'https://youtu.be/JuRjlxM-Z7A' }
    ]
  },
  18: {
    topic: 'Путь 4★→9.2★, Прототипы и Лиги',
    query: 'Warpath 9.2 современные юниты прототипы',
    videos: [
      { title: 'ОБМЕН ОФИЦЕРОВ И ЗОЛОТАЯ АРТА / 14.6', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/LrIujsuFFx0' },
      { title: 'FD против Китая / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/4as-Btr7jRc' },
      { title: 'EN: F2P GOD! Best FREE Officers & Units', author: 'VN Warpath (@VNwarpath1)', url: 'https://youtu.be/H46wQlbyOgc' }
    ]
  },
  19: {
    topic: 'База, Стены, VIP и Зал отдыха Кэт',
    query: 'Warpath постройки 36 уровень VIP черный рынок',
    videos: [
      { title: '32→36 СТОИМОСТЬ ВСЕХ ПОСТРОЕК / ТАБЛИЦА', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/mM0hYObwXQE' },
      { title: 'Настройка аккаунта и промики / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/tfMFqibCTZU' }
    ]
  },
  20: {
    topic: 'Все рода войск: Суша, Небо и Море',
    query: 'Warpath юниты авиация вмс арта',
    videos: [
      { title: 'ОФИЦЕР НА АРТУ / БОЕВОЙ СОКОЛ / 14.3', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/DFdBAC2biT8' },
      { title: 'EN: Red Crocodile Breakdown (ВМС Либерти)', author: 'MoreScop3s (@MoreScop3s)', url: 'https://youtu.be/215cGNOPzMI' },
      { title: 'Какой МБТ самый лучший? | Warpath: Ace Shooter', author: 'Ehson', url: 'https://youtu.be/V6xFWFjCOrI' }
    ]
  },
  21: {
    topic: 'События, Завоевание и Техас',
    query: 'Warpath завоевание техас гегемон',
    videos: [
      { title: 'Гегемон / Warpath v14.4', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/V4xFkoiUWtM' },
      { title: 'EN: Update 14.6 — Officer Swap, Техас и ВМС', author: 'MoreScop3s (@MoreScop3s)', url: 'https://youtu.be/VerRbQt2Yvs' },
      { title: 'EN: Завоевания и разборы ТВД', author: 'Twon22 (@Twon22)', url: 'https://www.youtube.com/@Twon22/videos' }
    ]
  },
  22: {
    topic: 'Итоговый чеклист и переход к Тому II',
    query: 'Warpath настройка аккаунта 14.6 гайд',
    videos: [
      { title: 'КАКИХ ОФИЦЕРОВ КАЧАТЬ В WARPATH 14.6?', author: 'Бургер (@burgerdom6)', url: 'https://youtu.be/Ri6kCTSDZqE' },
      { title: 'КАЛЬКУЛЯТОР ОБМЕНА ОФИЦЕРОВ 14.6 за 1 минуту!', author: 'Паша е6ака (@e6aka56)', url: 'https://youtu.be/riVeWZplo2I' },
      { title: 'Доп.: Сборник полезных лайфхаков для ВСЕХ', author: 'Сократ (ClanGothic)', url: 'https://youtu.be/KMAX3RKXHUU' }
    ]
  }
};
