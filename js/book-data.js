/* ═══════════════════════════════════════════════════════════════
   WARPATH GUIDE — База данных книги (26 страниц, 12 глав)
   Источники: WarpathYTwiki (data.js, faq-data.js), актуальные гайды 2025-2026
   ═══════════════════════════════════════════════════════════════ */

window.BOOK_TOC_SECTIONS = [
  {
    title: 'НАЧАЛО ИГРЫ',
    chapters: [
      { id: 1, title: 'Основы Warpath', page: 3 },
      { id: 2, title: 'Выбор фракции (Лагеря)', page: 5 },
      { id: 3, title: 'Правильный старт и Первый день', page: 7 }
    ]
  },
  {
    title: 'РАЗВИТИЕ И ЭКОНОМИКА',
    chapters: [
      { id: 4, title: 'Топ советов новичку (F2P)', page: 9 },
      { id: 5, title: 'Как тратить ЗОЛОТО (VIP 4 и 9)', page: 11 },
      { id: 6, title: 'Исследования и Arms Race', page: 13 }
    ]
  },
  {
    title: 'АРМИЯ И ОФИЦЕРЫ',
    chapters: [
      { id: 7, title: 'Юниты, роли и Звёздность', page: 15 },
      { id: 8, title: 'Система контров (КНБ)', page: 17 },
      { id: 9, title: 'Офицеры, навыки и Пробуждение', page: 19 },
      { id: 10, title: 'Сборка идеальной армии (5 слотов)', page: 21 }
    ]
  },
  {
    title: 'СРАЖЕНИЯ И ТВД',
    chapters: [
      { id: 11, title: 'Подготовка к сражениям и PvP', page: 23 },
      { id: 12, title: 'Экспедиции и FAQ командира', page: 25 }
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
    bookmark: 'ПОЛЕВОЙ УСТАВ',
    kicker: 'WARPATH: ACE SHOOTER',
    title: 'ТАКТИЧЕСКОЕ РУКОВОДСТВО КОМАНДИРА',
    html: `
      <div class="cover-page">
        <div class="cover-emblem" aria-hidden="true">W</div>
        <div class="page-kicker">LILITH GAMES • ПАТЧИ 13.4 — 14.5+</div>
        <h1 class="page-title" style="font-size: 22px;">WARPATH GUIDE</h1>
        <div class="page-divider"><span class="page-diamond"></span></div>
        <p class="cover-subtitle">
          Полная энциклопедия командира: от первого дня на сервере и правильной траты золота до сборки эндгейм-армии, контров и пробуждения офицеров.
        </p>
        <div class="cover-meta">
          <span class="cover-pill">12 глав</span>
          <span class="cover-pill">26 страниц</span>
          <span class="cover-pill">F2P &amp; Мета</span>
          <span class="cover-pill">Трекер прогресса</span>
        </div>
        <button type="button" class="btn-start-reading" data-goto="2">Открыть содержание →</button>
      </div>
    `
  },

  /* ── СТРАНИЦА 2: СОДЕРЖАНИЕ ── */
  {
    page: 2,
    type: 'toc',
    chapterId: null,
    isChapterStart: true,
    bookmark: 'СОДЕРЖАНИЕ',
    kicker: 'НАВИГАЦИЯ',
    title: 'СОДЕРЖАНИЕ',
    html: '' // Генерируется динамически с чекбоксами прогресса
  },

  /* ── ГЛАВА 1: ОСНОВЫ WARPATH (СТР. 3–4) ── */
  {
    page: 3,
    type: 'content',
    chapterId: 1,
    isChapterStart: true,
    bookmark: 'ГЛАВА 1 • ОСНОВЫ',
    kicker: 'НАЧАЛО ИГРЫ',
    title: '1. Основы Warpath',
    html: `
      <p class="page-lead"><strong>Warpath: Ace Shooter</strong> — военно-стратегическая RTS в реальном времени от Lilith Games. Здесь побеждает не тот, у кого больше доната в лоб, а тот, кто понимает синергию юнитов, офицеров и контров.</p>

      <h3 class="section-h3">Базовый игровой цикл</h3>
      <ul class="bullet-list">
        <li><strong>База:</strong> улучшаешь командный центр, казармы, инженерный и исследовательский центры.</li>
        <li><strong>Ресурсы:</strong> добываешь сталь, нефть, военные фонды и золото.</li>
        <li><strong>Юниты:</strong> собираешь дубликаты и повышаешь звёздность (до 7.2★ и 9.2★).</li>
        <li><strong>Офицеры:</strong> качаешь 4 навыка до 5 уровня и открываешь Пробуждение.</li>
        <li><strong>Карта:</strong> воюешь в составе альянса за города, ТВД и Raven-лагеря.</li>
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
    bookmark: 'ГЛАВА 1 • ПРИНЦИПЫ',
    kicker: 'ГЛАВА 1 (ДОП. СТРАНИЦА)',
    title: '6 золотых принципов меты',
    html: `
      <p class="page-lead">Запомни эти шесть правил до того, как потратишь первые ресурсы и статуэтки офицеров:</p>
      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">1. Офицер важнее юнита</span><span class="tier-badge">60% СИЛЫ</span></div>
          <p class="mini-card-body">Слабый юнит с топ-офицером сильнее сильного юнита без офицера. Пример: Средний танк + Джексон Хейз &gt; Тяжёлый танк + Такеда.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">2. Нет «лучшего» юнита</span><span class="tier-badge">РОЛЬ</span></div>
          <p class="mini-card-body">SH-танк идеален в обороне, но бесполезен в быстром рейде. Лёгкий танк — король разведки, но тает в лобовом бою.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">3. Синергия решает</span><span class="tier-badge">5 СЛОТОВ</span></div>
          <p class="mini-card-body">Сбалансированная армия (фронтлайн + DD + арта + утилити) всегда бьёт 5 одинаковых танков без прикрытия.</p>
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
    bookmark: 'ГЛАВА 2 • ФРАКЦИИ',
    kicker: 'НАЧАЛО ИГРЫ',
    title: '2. Выбор фракции (Лагеря)',
    html: `
      <p class="page-lead">В Warpath три основных лагеря. Новички часто качают всё подряд и упираются в нехватку деталей. Выбери <strong>1 основную фракцию</strong> (максимум 2 в мидгейме).</p>

      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">🔴 Советы (Vanguard/Red)</span><span class="tier-badge">НОВИЧКАМ</span></div>
          <p class="mini-card-body"><strong>Стиль:</strong> тяжёлая броня и мощная артиллерия.<br><strong>Плюсы:</strong> лучшие тяжёлые танки, ракетная установка (РСЗО), простая и понятная мета.<br><strong>Минусы:</strong> нет сверхтяжёлого танка (SH), слабее в авиации.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">🔵 Либерти (Liberty)</span><span class="tier-badge">МАНЁВР</span></div>
          <p class="mini-card-body"><strong>Стиль:</strong> скорость, рейды и осада баз.<br><strong>Плюсы:</strong> быстрые лёгкие танки, сильный флот (авианосцы, эсминцы), противотанковые пушки.<br><strong>Минусы:</strong> слабее в лобовых столкновениях, нет SH-танка.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">⚫ Авангард (Немцы)</span><span class="tier-badge">ЭНДГЕЙМ</span></div>
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
            <tr><td><strong>Советы</strong></td><td>Тяжёлый танк, Средний танк, Гаубица / РСЗО</td><td>Идеально для старта и F2P. Понятная игра от брони и урона.</td></tr>
            <tr><td><strong>Либерти</strong></td><td>Лёгкий танк, Гаубица, Авиация и Флот</td><td>Любителям мобильных рейдов и морских операций.</td></tr>
            <tr><td><strong>Авангард</strong></td><td>Сверхтяжёлый танк (SH), ПВО-эсминец</td><td>Терпеливым игрокам под лейтгейм и удержание точек.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="info-card">
        <div class="info-card-title">Совет ветеранов</div>
        <p>Если не знаешь, что выбрать на старте — бери <strong>Советы</strong> для основы на тяжёлых танках и артиллерии. На более поздних уровнях ты сможешь комбинировать лучшие юниты разных лагерей в одной армии (например, SH Авангарда + ПТ/Арта Советов).</p>
      </div>
    `
  },

  /* ── ГЛАВА 3: ПРАВИЛЬНЫЙ СТАРТ И ПЕРВЫЙ ДЕНЬ (СТР. 7–8) ── */
  {
    page: 7,
    type: 'content',
    chapterId: 3,
    isChapterStart: true,
    bookmark: 'ГЛАВА 3 • СТАРТ',
    kicker: 'НАЧАЛО ИГРЫ',
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
    bookmark: 'ГЛАВА 4 • F2P СОВЕТЫ',
    kicker: 'РАЗВИТИЕ И ЭКОНОМИКА',
    title: '4. Топ советов новичку (F2P)',
    html: `
      <p class="page-lead">Играть без доната (Free-to-Play) в Warpath абсолютно реально, если соблюдать жёсткую дисциплину ресурсов и фокусировки.</p>
      <ul class="bullet-list">
        <li><strong>Правило 1–2 юнитов:</strong> не пытайся качать все 5 слотов сразу на максимум. Сделай 1 мощный Тяжёлый/Средний танк и 1 Гаубицу — они протащат тебя везде.</li>
        <li><strong>Ошиблись с прокачкой? Есть Разборка!</strong> Зайди в <em>Инженерный центр → Разборка (Disassemble)</em>. За символическую плату золотом ты вернёшь вложенные детали и опыт. Перед разборкой убери юнит из активной армии.</li>
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
          <p class="mini-card-body">• Выбери 2–3 типа техники.<br>• Исследования важнее количества казарм.<br>• Тяжёлый танк + Кёртис/Джексон — база F2P.</p>
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
    bookmark: 'ГЛАВА 5 • ЗОЛОТО',
    kicker: 'РАЗВИТИЕ И ЭКОНОМИКА',
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
    bookmark: 'ГЛАВА 6 • ARMS RACE',
    kicker: 'РАЗВИТИЕ И ЭКОНОМИКА',
    title: '6. Исследования и Arms Race',
    html: `
      <p class="page-lead"><strong>Arms Race (Ежедневная гонка вооружений)</strong> — главный источник бесплатных наград, золота и ускорений. Планируй свои траты строго по дням недели:</p>
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
    bookmark: 'ГЛАВА 7 • ЮНИТЫ',
    kicker: 'АРМИЯ И ОФИЦЕРЫ',
    title: '7. Юниты, роли и Звёздность',
    html: `
      <p class="page-lead">В игре 9 основных классов техники: Пехота, Лёгкий/Средний/Тяжёлый/SH танк, Истребитель танков (ПТ), Гаубица/РСЗО, Истребитель, Бомбардировщик и Вертолёт.</p>

      <h3 class="section-h3">Как работает звёздность</h3>
      <ul class="bullet-list">
        <li><strong>Объединение:</strong> два одинаковых юнита сливаются для повышения звезды (процесс необратим, но есть разборка деталей).</li>
        <li><strong>Жёлтые звёзды (до 7.2★):</strong> классический потолок для базовых и старых линеек техники.</li>
        <li><strong>Синие звёзды (до 9.2★):</strong> современная техника (например, Пехота, Тяжёлый танк, современная авиация и флот).</li>
        <li><strong>Уровни:</strong> каждый юнит прокачивается от 1 до 60+ уровня (база характеристик растёт экспоненциально).</li>
      </ul>
    `
  },
  {
    page: 16,
    type: 'content',
    chapterId: 7,
    isChapterStart: false,
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
            <tr><td><strong>SH-танк (Авангард)</strong></td><td><span class="tier-badge">S</span></td><td>Ultra Tank</td><td>Стена в лоб. Максимум брони и HP, но очень медленный.</td></tr>
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
    bookmark: 'ГЛАВА 8 • КОНТРЫ',
    kicker: 'АРМИЯ И ОФИЦЕРЫ',
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
            <tr><td><strong>SH-танк (Маус)</strong></td><td>Массовые гаубицы / Авиация</td><td>AoE-урон и бомбардировки обходят лобовую броню.</td></tr>
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
    bookmark: 'ГЛАВА 9 • ОФИЦЕРЫ',
    kicker: 'АРМИЯ И ОФИЦЕРЫ',
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
    bookmark: 'ГЛАВА 9 • ТИР-ЛИСТ',
    kicker: 'ГЛАВА 9 (ДОП. СТРАНИЦА)',
    title: 'Ключевые офицеры текущей меты',
    html: `
      <div class="grid-cards">
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">⚔️ Джексон Хейз (5 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Атака (Танки и Вертолёты). +30% АТК/ЗАЩ. Навык «Пространственный удар» (коэф. 1800, +15% интенсивности урона на 8 сек). Лучший универсальный ДД.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">🥊 Хеймекер (5 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Охотник на тяжёлую броню. +35% АТК. Массовый урон с бонусом против SH и тяжёлых танков.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">🛡️ Кёртис (4 поколение)</span><span class="tier-badge">S-ТИР</span></div>
          <p class="mini-card-body"><strong>Роль:</strong> Защита наземных войск (+22% защиты, +15% HP). Лучший танк-офицер для фронтлайна и обороны.</p>
        </div>
        <div class="mini-card">
          <div class="mini-card-head"><span class="mini-card-title">⚡ Иссабель / ✈️ Слейтер / 🗡️ Такеда</span><span class="tier-badge">S / A</span></div>
          <p class="mini-card-body"><strong>Иссабель:</strong> +25% атаки при HP &lt; 50% (для затяжных боёв). <strong>Слейтер:</strong> топ для авиации. <strong>Такеда и Мартин:</strong> отличные переходные варианты до 5-го поколения.</p>
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
    bookmark: 'ГЛАВА 10 • АРМИЯ',
    kicker: 'АРМИЯ И ОФИЦЕРЫ',
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
    bookmark: 'ГЛАВА 10 • ОШИБКИ',
    kicker: 'ГЛАВА 10 (ДОП. СТРАНИЦА)',
    title: 'Фатальные ошибки компоновки',
    html: `
      <div class="info-card">
        <div class="info-card-title">1. Армия из 5 одинаковых танков</div>
        <p>Без ПТ и артиллерии тебя легко разберут контр-юнитами, а без быстрого юнита ты не догонишь вражескую гаубицу.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">2. Только ДД без фронтлайна</div>
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
    bookmark: 'ГЛАВА 11 • СРАЖЕНИЯ',
    kicker: 'СРАЖЕНИЯ И ТВД',
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
    bookmark: 'ГЛАВА 12 • ЭКСПЕДИЦИИ',
    kicker: 'СРАЖЕНИЯ И ТВД',
    title: '12. Экспедиции и пассивный фарм',
    html: `
      <p class="page-lead"><strong>Экспедиции</strong> — главный PvE-режим для стабильного фарма фрагментов офицеров, деталей снаряжения и ресурсов без риска потерять армию в PvP.</p>
      <ul class="bullet-list">
        <li><strong>Постоянная загрузка:</strong> отправляй отряды в экспедиции каждый раз, когда уходишь в оффлайн или на работу/учёбу.</li>
        <li><strong>Выбор наград:</strong> ставь в приоритет те маршруты, где падают фрагменты твоих основных офицеров (или универсальные ресурсы для экипировки).</li>
        <li><strong>Снаряжение (Equipment):</strong> не забывай крафтить и улучшать модули экипировки на танки и артиллерию — на высоких уровнях они дают огромный прирост пробития и HP.</li>
      </ul>
    `
  },
  {
    page: 26,
    type: 'content',
    chapterId: 12,
    isChapterStart: false,
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
        <div class="info-card-title">Куда идти за актуальными патчами и разборами?</div>
        <p>Следи за комьюнити <strong>WarpathHub</strong> в Telegram и гайдами русскоязычных авторов (ClanGothic, Бургер, е6ака, Ehson) в проекте WarpathYTwiki.</p>
      </div>
    `
  }
];
