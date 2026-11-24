/* ═══════════════════════════════════════════════════════════════
   WARPATH: ACE SHOOTER — Полевой устав командира (30 страниц, 14 глав)
   База: WarpathYTwiki (data.js, faq-data.js) + WarpathHub + гайды 2025-2026
   ═══════════════════════════════════════════════════════════════ */

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
      { id: 9, title: 'Офицеры, навыки и Пробуждение', page: 19 },
      { id: 10, title: 'Сборка идеальной армии (5 слотов)', page: 21 }
    ]
  },
  {
    title: 'IV. СРАЖЕНИЯ И ТВД',
    chapters: [
      { id: 11, title: 'Подготовка к сражениям и PvP', page: 23 },
      { id: 12, title: 'Экспедиции и FAQ командира', page: 25 }
    ]
  },
  {
    title: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    chapters: [
      { id: 13, title: 'WarpathHub и Бот @shevchenko01_bot', page: 27 },
      { id: 14, title: 'Тикеты, Вопросы и Словарь сленга', page: 29 }
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
        <span class="war-stamp">УТВЕРЖДЕНО ШТАБОМ WARPATHHUB</span>
        <div class="cover-logo-box">
          <img src="assets/warpath-logo.png" alt="Warpath: Ace Shooter" class="cover-logo-img" width="290" height="92" fetchpriority="high">
        </div>
        <h1 class="page-title" style="font-size: 20px;">ТАКТИЧЕСКИЙ УСТАВ КОМАНДИРА</h1>
        <div class="page-divider"><span class="page-diamond"></span></div>
        <p class="cover-subtitle">
          Боевое руководство по Warpath: от первого дня на сервере и траты золота до пробуждения офицеров, контров техники, калькулятора и тикетов WarpathHub.
        </p>
        <div class="cover-meta">
          <span class="cover-pill">14 глав</span>
          <span class="cover-pill">30 страниц</span>
          <span class="cover-pill">Патч 14.5+</span>
          <span class="cover-pill">@shevchenko01_bot</span>
        </div>
        <div class="cover-actions">
          <button type="button" class="btn-start-reading" data-goto="2">Открыть содержание →</button>
          <button type="button" class="btn-cover-sec" data-open-hq="tickets">Задать вопрос / Тикет</button>
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

  /* ── ГЛАВА 1: ОСНОВЫ WARPATH (СТР. 3–4) ── */
  {
    page: 3,
    type: 'content',
    chapterId: 1,
    isChapterStart: true,
    docCode: 'WP-FM // CH-01',
    bookmark: 'ГЛАВА 1 • ОСНОВЫ',
    kicker: 'I. НАЧАЛО ИГРЫ',
    title: '1. Основы Warpath',
    html: `
      <p class="page-lead"><strong>Warpath: Ace Shooter</strong> — военно-стратегическая RTS в реальном времени от Lilith Games. Здесь побеждает не сумма доната в лоб, а понимание синергии юнитов, офицеров и контров.</p>

      <h3 class="section-h3">Базовый игровой цикл</h3>
      <ul class="bullet-list">
        <li><strong>База:</strong> улучшаешь командный центр, казармы, инженерный и исследовательский центры.</li>
        <li><strong>Ресурсы:</strong> добываешь сталь, нефть, военные фонды и золото.</li>
        <li><strong>Юниты:</strong> собираешь дубликаты и повышаешь звёздность (до 7.2 звёзд и 9.2 звёзд).</li>
        <li><strong>Офицеры:</strong> качаешь 4 навыка до 5 уровня и открываешь Пробуждение.</li>
        <li><strong>Карта:</strong> воюешь в составе альянса за города, ТВД и лагеря Ворон.</li>
      </ul>

      <div class="info-card">
        <div class="info-card-title">Четыре главных ресурса</div>
        <ul>
          <li><strong>Военные фонды:</strong> строительство, исследования и базовый наём.</li>
          <li><strong>Сталь:</strong> производство и апгрейд техники (вечный дефицит).</li>
          <li><strong>Нефть:</strong> движение армий и пополнение тяжёлой техники.</li>
          <li><strong>Золото:</strong> премиум-валюта для VIP, баннеров офицеров и редких покупок.</li>
        </ul>
      </div>
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
    title: '6 золотых принципов меты',
    html: `
      <p class="page-lead">Запомни эти шесть правил до того, как потратишь первые ресурсы и статуэтки офицеров:</p>
      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">1. Офицер важнее юнита</span><span class="tier-badge">60% СИЛЫ</span></div>
          <p class="mini-card-body">Слабый юнит с топ-офицером сильнее сильного юнита без офицера. Пример: Средний танк + Джексон Хейз сильнее Тяжёлого танка + Такеда.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">2. Нет «лучшего» юнита</span><span class="tier-badge">РОЛЬ</span></div>
          <p class="mini-card-body">SH-танк идеален в обороне, но бесполезен в быстром рейде. Лёгкий танк — король разведки, но тает в лобовом бою.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">3. Синергия решает</span><span class="tier-badge">5 СЛОТОВ</span></div>
          <p class="mini-card-body">Сбалансированная армия (фронтлайн + ДД + арта + утилити) всегда бьёт 5 одинаковых танков без прикрытия.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">4. Контры важнее мощи</span><span class="tier-badge">КНБ</span></div>
          <p class="mini-card-body">Дешёвые истребители танков уничтожают дорогие SH-танки, если работают из-за спины союзника.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">5. Первый удар критичен</span><span class="tier-badge">ИНИЦИАТИВА</span></div>
          <p class="mini-card-body">При равных армиях побеждает тот, кто ударил первым и зашёл с фланга.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">6. Качай одного до конца</span><span class="tier-badge">ФОКУС</span></div>
          <p class="mini-card-body">Один пробуждённый Джексон Хейз сильнее трёх офицеров, прокачанных наполовину.</p>
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

      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Советы (Martyrs / Красные)</span><span class="tier-badge">НОВИЧКАМ</span></div>
          <p class="mini-card-body"><strong>Стиль:</strong> тяжёлая броня и мощная артиллерия.<br><strong>Плюсы:</strong> лучшие тяжёлые танки, ракетная установка (РСЗО), простая и понятная мета.<br><strong>Минусы:</strong> нет сверхтяжёлого танка (SH), слабее в авиации.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Либерти (Liberty / Синие)</span><span class="tier-badge">МАНЁВР</span></div>
          <p class="mini-card-body"><strong>Стиль:</strong> скорость, рейды и осада баз.<br><strong>Плюсы:</strong> быстрые лёгкие танки, сильный флот (авианосцы, эсминцы), противотанковые пушки.<br><strong>Минусы:</strong> слабее в лобовых столкновениях, нет SH-танка.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Авангард (Vanguard / Серые)</span><span class="tier-badge">ЭНДГЕЙМ</span></div>
          <p class="mini-card-body"><strong>Стиль:</strong> непробиваемая оборона.<br><strong>Плюсы:</strong> эксклюзивный Сверхтяжёлый танк (SH / Маус), сильное ПВО.<br><strong>Минусы:</strong> самые медленные и дорогие в прокачке юниты.</p>
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
      <div class="info-card">
        <div class="info-card-title">Совет ветеранов</div>
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
      <ul class="bullet-list">
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
      <div class="info-card">
        <div class="info-card-title">Ошибка #1: Оставлять армию вне базы</div>
        <p>Перед выходом из игры всегда прячь отряды внутрь базы (или переноси базу на территорию альянса). В открытом поле твою армию разобьют за секунды, а ремонт съест нефть и сталь.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Ошибка #2: Сливать купоны и ускорения сразу</div>
        <p>Не открывай все универсальные купоны и не жги ускорения в первый попавшийся момент. Держи их под ежедневные этапы <strong>Arms Race</strong> и крупные ивенты (Jurisdiction / Grand Showdown).</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Ошибка #3: Игнорировать промышленную ветку</div>
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
      <ul class="bullet-list">
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
      <div class="grid-cards cols-2">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Офицеры</span></div>
          <p class="mini-card-body">• Фокус на одном до Пробуждения.<br>• Бесплатного офицера 5-го поколения забирай через события.<br>• Выполняй задания офицеров на 100% успеха.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Юниты</span></div>
          <p class="mini-card-body">• Выбери 2–3 типа техники.<br>• Исследования важнее количества казарм.<br>• Тяжёлый танк + Кёртис/Джексон — база без доната.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Ресурсы</span></div>
          <p class="mini-card-body">• Всегда держи запас стали.<br>• Не трать ускорения вне Arms Race.<br>• Постоянно гоняй сборщиков на карту.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Альянс</span></div>
          <p class="mini-card-body">• Помогай союзникам кнопкой «Помощь».<br>• Покупай в магазине альянса только нужное.<br>• Бей Raven-лагеря группой.</p>
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

      <div class="info-card">
        <div class="info-card-title">Приоритет №1: Прокачка VIP-уровня</div>
        <p>Первым делом вкладывай золото в очки VIP (особенно во время ивентов на трату золота):</p>
        <ul class="bullet-list" style="margin-top:6px; margin-bottom:0;">
          <li><strong>VIP 4:</strong> открывает <strong>1 бесплатный Универсальный купон</strong> каждый день.</li>
          <li><strong>VIP 9:</strong> открывает <strong>1 бесплатный Лагерный купон</strong> каждый день + огромные бонусы к скорости стройки и исследований.</li>
        </ul>
      </div>

      <h3 class="section-h3">Где брать золото каждый день</h3>
      <ul class="bullet-list">
        <li><strong>Ежедневные задания:</strong> до 600 золота в сутки за полное закрытие.</li>
        <li><strong>Первые убийства отрядов Raven</strong> и зачистка новых лагерей.</li>
        <li><strong>Исследование карты</strong> (сундуки в тумане), достижения и повышение уровня командира.</li>
      </ul>
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
      <ul class="bullet-list">
        <li><strong>Мгновенное завершение стройки/исследований:</strong> самая дорогая и бессмысленная трата. Используй обычные ускорения.</li>
        <li><strong>Покупка стали, нефти и фондов за золото:</strong> курс грабительский, ресурсы легко добываются на карте и в событиях.</li>
        <li><strong>Случайные сундуки в обычном магазине:</strong> без гаранта ты просто сожжёшь валюту. Копи золото на ивентные баннеры 5-го поколения и VIP.</li>
        <li><strong>Чёрный рынок без скидки:</strong> бери товары на Чёрном рынке только если там глубокая скидка (от 50–70%) на критически нужные ускорения или детали.</li>
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
      <div class="info-card">
        <div class="info-card-title">Золотая середина науки</div>
        <p>Качай параллельно две ветки. Без экономики армия встанет, без армии экономику разграбят.</p>
      </div>
      <ul class="bullet-list">
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
      <p class="page-lead">В игре 9 основных классов техники: Пехота, Лёгкий/Средний/Тяжёлый/SH танк, Истребитель танков (ПТ), Гаубица/РСЗО, Истребитель, Бомбардировщик и Вертолёт.</p>

      <h3 class="section-h3">Как работает звёздность</h3>
      <ul class="bullet-list">
        <li><strong>Объединение:</strong> два одинаковых юнита сливаются для повышения звезды (процесс необратим, но есть разборка деталей).</li>
        <li><strong>Жёлтые звёзды (до 7.2):</strong> классический потолок для базовых и старых линеек техники.</li>
        <li><strong>Синие звёзды (до 9.2):</strong> современная техника (например, Пехота, Тяжёлый танк, современная авиация и флот).</li>
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
    title: 'Роли наземной техники в бою',
    html: `
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Юнит</th><th>Тир</th><th>Роль</th><th>Главная задача</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>SH-танк (Авангард)</strong></td><td><span class="tier-badge">S</span></td><td>Ultra Tank</td><td>Стена в лоб. Максимум брони и здоровья, но очень медленный.</td></tr>
            <tr><td><strong>Тяжёлый танк</strong></td><td><span class="tier-badge">A</span></td><td>Frontline</td><td>Основа ударного кулака, принимает первый урон.</td></tr>
            <tr><td><strong>Истребитель танков</strong></td><td><span class="tier-badge">A</span></td><td>Anti-Armor</td><td>Пробивает тяжёлые и SH-танки из-за спины.</td></tr>
            <tr><td><strong>Гаубица / РСЗО</strong></td><td><span class="tier-badge">A/S</span></td><td>AoE ДД</td><td>Сносит базы, скопления пехоты и медленные SH-танки.</td></tr>
            <tr><td><strong>Средний танк</strong></td><td><span class="tier-badge">B</span></td><td>Universal</td><td>Рабочая лошадка мидгейма с хорошим балансом.</td></tr>
            <tr><td><strong>Лёгкий танк</strong></td><td><span class="tier-badge">C</span></td><td>Harass</td><td>Разведка, быстрые рейды на сборщиков и арту.</td></tr>
            <tr><td><strong>Пехота</strong></td><td><span class="tier-badge">C</span></td><td>Utility</td><td>Захват точек, бункеры, дешёвый гарнизон.</td></tr>
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
      <div class="info-card">
        <div class="info-card-title">Правило разведки</div>
        <p>Никогда не вступай в слепой бой. Перед атакой посмотри состав армии врага. Видишь 3 тяжёлых танка — выводи ПТ и Гаубицу. Видишь голую артиллерию без прикрытия — заходи быстрым танком с фланга.</p>
      </div>
      <ul class="bullet-list">
        <li><strong>Защита своей арты:</strong> никогда не ставь гаубицы в первую линию. Держи их за танками на максимальной дистанции выстрела.</li>
        <li><strong>Атака баз:</strong> для сноса укрепрайонов и баз обязательна дальнобойная артиллерия (Гаубицы / САУ) под прикрытием танкового щита.</li>
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
      <ul class="bullet-list">
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
      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Джексон Хейз (5 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Атака (Танки и Вертолёты). +30% Атаки/Защиты. Навык «Пространственный удар» (коэф. 1800, +15% урона на 8 сек). Лучший универсальный дамагер.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Хеймекер (5 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Охотник на тяжёлую броню. +35% Атаки. Массовый урон с бонусом против SH и тяжёлых танков.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Кёртис (4 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Защита наземных войск (+22% защиты, +15% здоровья). Лучший танк-офицер для фронтлайна и обороны.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Иссабель / Слейтер / Такеда</span><span class="tier-badge">S / A</span></div>
          <p class="mini-card-body"><strong>Иссабель:</strong> +25% атаки при здоровье ниже 50%. <strong>Слейтер:</strong> топ для авиации. <strong>Такеда и Мартин:</strong> отличные переходные варианты до 5-го поколения.</p>
        </div>
      </div>
    `
  },

  /* ── ГЛАВА 10: СБОРКА ИДЕАЛЬНОЙ АРМИИ (СТР. 21–22) ── */
  {
    page: 21,
    type: 'content',
    chapterId: 10,
    isChapterStart: true,
    docCode: 'WP-FM // CH-10',
    bookmark: 'ГЛАВА 10 • АРМИЯ',
    kicker: 'III. АРМИЯ И ОФИЦЕРЫ',
    title: '10. Сборка идеальной армии',
    html: `
      <p class="page-lead">Полная армия состоит из <strong>5 слотов</strong>. Побеждает не сумма звёзд, а правильное распределение ролей и позиций на поле боя.</p>

      <h3 class="section-h3">Классический мета-сетап (5 слотов)</h3>
      <ul class="bullet-list">
        <li><strong>Слот 1 (Фронтлайн):</strong> Тяжёлый танк или SH-танк + защитный офицер (Кёртис / Виктор). Принимает весь первый удар.</li>
        <li><strong>Слоты 2–3 (Основной ДД):</strong> 2 ударных юнита (Истребитель танков, Средний/Тяжёлый танк с Джексоном Хейзом). Наносят главный урон.</li>
        <li><strong>Слот 4 (Артиллерия):</strong> Гаубица или РСЗО на задней линии. Чистит пехоту и ломает броню SH-танков по площади.</li>
        <li><strong>Слот 5 (Ситуативный):</strong> Лёгкий танк для флангов/разведки, Пехота для захвата точек или Вертолёт поддержки.</li>
      </ul>
    `
  },
  {
    page: 22,
    type: 'content',
    chapterId: 10,
    isChapterStart: false,
    docCode: 'WP-FM // CH-10B',
    bookmark: 'ГЛАВА 10 • ОШИБКИ',
    kicker: 'ГЛАВА 10 (ДОП. СТРАНИЦА)',
    title: 'Фатальные ошибки компоновки',
    html: `
      <div class="info-card">
        <div class="info-card-title">1. Армия из 5 одинаковых танков</div>
        <p>Без ПТ и артиллерии тебя легко разберут контр-юнитами, а без быстрого юнита ты не догонишь вражескую гаубицу.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">2. Только дамагеры без фронтлайна</div>
        <p>Стеклянные пушки (арта и ПТ) без танкового щита впереди умирают за 3 секунды до того, как успеют разрядить навыки.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">3. Непрофильный офицер</div>
        <p>Постановка артиллерийского или авиационного офицера на танк обнуляет половину его пассивных бонусов. Всегда проверяй теги юнитов в описании навыков!</p>
      </div>
    `
  },

  /* ── ГЛАВА 11: ПОДГОТОВКА К СРАЖЕНИЯМ И PVP (СТР. 23–24) ── */
  {
    page: 23,
    type: 'content',
    chapterId: 11,
    isChapterStart: true,
    docCode: 'WP-FM // CH-11',
    bookmark: 'ГЛАВА 11 • СРАЖЕНИЯ',
    kicker: 'IV. СРАЖЕНИЯ И ТВД',
    title: '11. Подготовка к сражениям и PvP',
    html: `
      <p class="page-lead">Крупные войны альянсов, битвы за города и ТВД требуют не только прокачанных танков, но и грамотного микроконтроля.</p>

      <ul class="bullet-list">
        <li><strong>Инициатива первого удара:</strong> в автоматическом бою тот, кто выстрелил первым, получает преимущество по темпу перезарядки навыков.</li>
        <li><strong>Фланговые манёвры:</strong> не бей в лоб укреплённую линию. Обходи с фланга, чтобы вырезать артиллерию врага, пока танки отвлечены.</li>
        <li><strong>Командная академия (Тактические карты):</strong> вовремя прожимай карты командира (Дымовая завеса против щитов, Усиление брони, Тяжёлый удар). Не трать карты впустую в мелких стычках — копи на ключевые замесы и ивенты <em>Top Tactics</em>.</li>
      </ul>
    `
  },
  {
    page: 24,
    type: 'content',
    chapterId: 11,
    isChapterStart: false,
    docCode: 'WP-FM // CH-11B',
    bookmark: 'ГЛАВА 11 • БАЗА',
    kicker: 'ГЛАВА 11 (ДОП. СТРАНИЦА)',
    title: 'Оборона базы и территории',
    html: `
      <div class="info-card">
        <div class="info-card-title">Как не потерять базу ночью</div>
        <p>Всегда держи базу внутри территории альянса (под щитом башен). При угрозе массового рейда используй <strong>Щит мира</strong> заранее — чинить выжженную базу и восстанавливать гарнизон в разы дороже.</p>
      </div>
      <ul class="bullet-list">
        <li><strong>Гарнизон базы:</strong> ставь в оборону базы самые живучие юниты (SH-танк, Тяжёлый танк, Пехота) с защитными офицерами (Кёртис, Виктор).</li>
        <li><strong>Командная игра:</strong> в PvP 1 на 1 решает мощь, в войне альянсов решает фокус-огонь по одной цели и синхронный выход на позицию.</li>
      </ul>
    `
  },

  /* ── ГЛАВА 12: ЭКСПЕДИЦИИ И FAQ КОМАНДИРА (СТР. 25–26) ── */
  {
    page: 25,
    type: 'content',
    chapterId: 12,
    isChapterStart: true,
    docCode: 'WP-FM // CH-12',
    bookmark: 'ГЛАВА 12 • ЭКСПЕДИЦИИ',
    kicker: 'IV. СРАЖЕНИЯ И ТВД',
    title: '12. Экспедиции и пассивный фарм',
    html: `
      <p class="page-lead"><strong>Экспедиции</strong> — главный PvE-режим для стабильного фарма фрагментов офицеров, деталей снаряжения и ресурсов без риска потерять армию в PvP.</p>
      <ul class="bullet-list">
        <li><strong>Постоянная загрузка:</strong> отправляй отряды в экспедиции каждый раз, когда уходишь в оффлайн или на работу/учёбу.</li>
        <li><strong>Выбор наград:</strong> ставь в приоритет те маршруты, где падают фрагменты твоих основных офицеров (или универсальные ресурсы для экипировки).</li>
        <li><strong>Снаряжение:</strong> не забывай крафтить и улучшать модули экипировки на танки и артиллерию — на высоких уровнях они дают огромный прирост пробития и здоровья.</li>
      </ul>
    `
  },
  {
    page: 26,
    type: 'content',
    chapterId: 12,
    isChapterStart: false,
    docCode: 'WP-FM // CH-12B',
    bookmark: 'ГЛАВА 12 • FAQ',
    kicker: 'ГЛАВА 12 (ДОП. СТРАНИЦА)',
    title: 'Частые вопросы (FAQ)',
    html: `
      <div class="info-card">
        <div class="info-card-title">Можно ли переназначить офицера на другой юнит?</div>
        <p>Да, абсолютно бесплатно и без штрафов. Экспериментируй со связками, чтобы найти максимальный урон.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Что делать, если вкачал не тот юнит?</div>
        <p>Убери юнит из активного строя армии и разбери его в <strong>Инженерном центре</strong> за небольшое количество золота — все ресурсы и опыт вернутся.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Где задать вопрос по своей сборке?</div>
        <p>Перейди в чат <a href="https://t.me/WarpathHub/1" target="_blank" rel="noopener noreferrer">WarpathHub</a> или открой вкладку «Штаб и Тикеты» в шапке сайта.</p>
      </div>
    `
  },

  /* ── ГЛАВА 13: WARPATHHUB И БОТ @SHEVCHENKO01_BOT (СТР. 27–28) ── */
  {
    page: 27,
    type: 'content',
    chapterId: 13,
    isChapterStart: true,
    docCode: 'WP-FM // CH-13',
    bookmark: 'ГЛАВА 13 • WARPATHHUB',
    kicker: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    title: '13. WarpathHub и Бот @shevchenko01_bot',
    html: `
      <p class="page-lead"><strong>WarpathHub</strong> — главное русскоязычное комьюнити игроков Warpath в Telegram. Всё общение, помощь новичкам, калькулятор и модерация работают в единой связке.</p>

      <div class="info-card">
        <div class="info-card-title">Бот Паши — @shevchenko01_bot</div>
        <p>Официальный многофункциональный бот нашего сообщества. В одном месте доступны:</p>
        <ul class="bullet-list" style="margin-top:6px; margin-bottom:0;">
          <li><strong>Калькулятор:</strong> точные расчёты прокачки, ресурсов и характеристик.</li>
          <li><strong>Тикет-система:</strong> быстрая отправка вопросов, багов, жалоб и предложений.</li>
          <li><strong>Модерация чата:</strong> защита WarpathHub от спама и порядок в ветках.</li>
        </ul>
      </div>

      <div class="inline-cta-row">
        <a href="https://t.me/shevchenko01_bot" target="_blank" rel="noopener noreferrer" class="page-link-btn">Открыть @shevchenko01_bot ↗</a>
        <a href="https://t.me/WarpathHub/1" target="_blank" rel="noopener noreferrer" class="page-link-btn secondary">Чат WarpathHub ↗</a>
      </div>
    `
  },
  {
    page: 28,
    type: 'content',
    chapterId: 13,
    isChapterStart: false,
    docCode: 'WP-FM // CH-13B',
    bookmark: 'ГЛАВА 13 • АВТОРЫ',
    kicker: 'ГЛАВА 13 (ДОП. СТРАНИЦА)',
    title: 'Проверенные авторы и каналы',
    html: `
      <p class="page-lead">Подборка контент-криэйторов по Warpath, за которыми стоит следить ради тестов и разборов патчей:</p>
      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">ClanGothic</span><span class="tier-badge">ПАРТНЁР LILITH</span></div>
          <p class="mini-card-body">Крупнейший русскоязычный канал по Warpath: обзоры патчей, офицеры, экспедиции.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">Бургер (@burgerdom6)</span><span class="tier-badge">WARPATHHUB</span></div>
          <p class="mini-card-body">Честный взгляд на Warpath, нарезки эпичных боёв, разборы аккаунтов и механик.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">е6ака / Ehson / VN Warpath</span><span class="tier-badge">ТЕСТЫ И МЕТА</span></div>
          <p class="mini-card-body">Реальные тесты F2P-сборок, авиации, расчёты сноса баз и детальная аналитика.</p>
        </div>
      </div>
      <div class="inline-cta-row">
        <button type="button" class="page-link-btn" data-open-hq="community">Все ссылки в Штабе →</button>
      </div>
    `
  },

  /* ── ГЛАВА 14: ТИКЕТЫ, ВОПРОСЫ И СЛОВАРЬ СЛЕНГА (СТР. 29–30) ── */
  {
    page: 29,
    type: 'content',
    chapterId: 14,
    isChapterStart: true,
    docCode: 'WP-FM // CH-14',
    bookmark: 'ГЛАВА 14 • ТИКЕТЫ',
    kicker: 'V. ШТАБ, БОТ И КОМЬЮНИТИ',
    title: '14. Тикеты и как задать вопрос',
    html: `
      <p class="page-lead">Чтобы тебе помогли в чате или тикете максимально быстро и по делу, придерживайся короткого шаблона обращения:</p>
      <ul class="bullet-list">
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
    page: 30,
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
            <tr><td><strong>SH (ШХ / Маус)</strong></td><td>Сверхтяжёлый танк Авангарда — максимальная броня в игре.</td></tr>
            <tr><td><strong>ПТ (TH)</strong></td><td>Истребитель танков (Tank Hunter) — главный контр тяжёлой брони.</td></tr>
            <tr><td><strong>Арта / Гаубица / РСЗО</strong></td><td>Дальнобойная артиллерия и ракетные установки для осады и урона по площади.</td></tr>
            <tr><td><strong>ДД (DPS)</strong></td><td>Отряды или офицеры, наносящие основной урон (Джексон, Хеймекер).</td></tr>
            <tr><td><strong>ФД (F2P)</strong></td><td>Игра без доната (Free-to-Play) или с минимальными тратами.</td></tr>
            <tr><td><strong>Пробуждение</strong></td><td>Финальный апгрейд офицера при всех 4 навыках 5-го уровня (720 фрагментов).</td></tr>
            <tr><td><strong>ТВД / КВК</strong></td><td>Театр военных действий — масштабные межсерверные битвы альянсов.</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
];

/* ── ДАННЫЕ ДЛЯ ВСТРОЕННОГО КАЛЬКУЛЯТОРА (из WarpathYTwiki/data.js) ── */
window.CALC_DATA = {
  units: [
    { id: 'heavy', label: 'Тяжёлый танк', baseAtk: 1100, baseDef: 1050, baseHP: 28000, baseMov: 36 },
    { id: 'superheavy', label: 'Сверхтяжёлый танк (SH)', baseAtk: 1480, baseDef: 1320, baseHP: 40000, baseMov: 24 },
    { id: 'tankhunter', label: 'Истребитель танков (ПТ)', baseAtk: 1250, baseDef: 520, baseHP: 14000, baseMov: 46 },
    { id: 'howitzer', label: 'Гаубица', baseAtk: 1400, baseDef: 350, baseHP: 9000, baseMov: 22 },
    { id: 'launcher', label: 'Ракетная установка (РСЗО)', baseAtk: 1600, baseDef: 300, baseHP: 8500, baseMov: 30 },
    { id: 'medium', label: 'Средний танк', baseAtk: 860, baseDef: 760, baseHP: 18000, baseMov: 52 },
    { id: 'light', label: 'Лёгкий танк', baseAtk: 680, baseDef: 520, baseHP: 12000, baseMov: 70 },
    { id: 'antitank', label: 'Противотанковая пушка', baseAtk: 1100, baseDef: 440, baseHP: 10000, baseMov: 28 },
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
  { name: 'WarpathYTwiki', desc: 'Энциклопедия юнитов, конструктор армий и база офицеров.', url: 'https://228burger228.github.io/WarpathYTwiki/index.html', cta: 'Сайт ↗' },
  { name: 'Бургер (@burgerdom6)', desc: 'Гайды, честный взгляд на игру и нарезки эпичных боёв.', url: 'https://www.youtube.com/@burgerdom6/videos', cta: 'YouTube ↗' },
  { name: 'ClanGothic', desc: 'Официальный партнёр Lilith Games: обзоры патчей и экспедиций.', url: 'https://www.youtube.com/@ClanGothic', cta: 'YouTube ↗' },
  { name: 'е6ака (Сервер 56)', desc: 'Тесты механик, F2P-сборки на авиацию и честные цифры.', url: 'https://www.youtube.com/@e6aka56', cta: 'YouTube ↗' },
  { name: 'Ehson', desc: 'Тактика, F2P-методы и разборы сборок для сноса баз.', url: 'https://www.youtube.com/@ItsEhson', cta: 'YouTube ↗' },
  { name: 'VN Warpath (EN)', desc: 'Мета-анализ офицеров и экономики (на английском).', url: 'https://www.youtube.com/@VNwarpath1', cta: 'YouTube ↗' }
];
