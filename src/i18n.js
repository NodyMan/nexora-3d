/* --------------------------------------------------------------------------
   Nexora Studio — EN / RU / UZ
   Dictionary keyed by the English text itself. Text nodes keep their original
   English so switching languages is non-destructive.
   -------------------------------------------------------------------------- */

const STORAGE_KEY = 'nexora.lang';
const SUPPORTED = ['en', 'ru', 'uz'];

const META = {
  en: {
    index: {
      title: 'Nexora Studio — Engineering Digital Summits',
      desc: 'Nexora Studio is a founder-led digital engineering studio in Fergana, Uzbekistan. We build mobile products, high-performance web platforms and applied AI — makers of Arise and DigitalLib.',
    },
    studio: {
      title: 'Studio — Nexora Studio',
      desc: 'A founder-led digital engineering studio in Fergana, Uzbekistan. Three partners, two shipped platforms and a deliberately small client roster.',
    },
    work: {
      title: 'Work — Nexora Studio',
      desc: 'Arise and DigitalLib: two platforms designed, engineered and operated by the Nexora Studio founding team.',
    },
    team: {
      title: 'Team — Nexora Studio',
      desc: 'Three founders across systems, machine learning and design. No account layer, no hand-offs.',
    },
    journal: {
      title: 'Journal — Nexora Studio',
      desc: 'Engineering notes from the Nexora Studio founders: performance, applied AI and how the studio operates.',
    },
    contact: {
      title: 'Contact — Nexora Studio',
      desc: "Start a project with Nexora Studio. Tell us what you're building, who it's for and when it needs to exist. A founder replies personally.",
    },
    portal: {
      title: 'Client Portal — Nexora Studio',
      desc: 'Sign in to follow your project: status, updates, files and invoices from Nexora Studio.',
    },
    admin: {
      title: 'Studio Console — Nexora Studio',
      desc: 'Private studio console for client access, project updates, files and invoices.',
    },
  },
  ru: {
    index: {
      title: 'Nexora Studio — цифровые вершины',
      desc: 'Nexora Studio — студия цифровой инженерии в Фергане, Узбекистан. Мобильные продукты, высокопроизводительные веб-платформы и прикладной AI. Создатели Arise и DigitalLib.',
    },
    studio: {
      title: 'Студия — Nexora Studio',
      desc: 'Студия цифровой инженерии под руководством основателей в Фергане, Узбекистан. Три партнёра, две запущенные платформы и намеренно небольшой список клиентов.',
    },
    work: {
      title: 'Работы — Nexora Studio',
      desc: 'Arise и DigitalLib: две платформы, спроектированные, созданные и поддерживаемые командой основателей Nexora Studio.',
    },
    team: {
      title: 'Команда — Nexora Studio',
      desc: 'Три основателя: системная архитектура, машинное обучение и дизайн. Без аккаунт-менеджеров и передач.',
    },
    journal: {
      title: 'Журнал — Nexora Studio',
      desc: 'Инженерные заметки основателей Nexora Studio: производительность, прикладной AI и то, как устроена студия.',
    },
    contact: {
      title: 'Контакты — Nexora Studio',
      desc: 'Начните проект с Nexora Studio. Расскажите, что создаёте, для кого и к какому сроку. Ответит лично один из основателей.',
    },
    portal: {
      title: 'Клиентский портал — Nexora Studio',
      desc: 'Войдите, чтобы следить за проектом: статус, обновления, файлы и счета от Nexora Studio.',
    },
    admin: {
      title: 'Консоль студии — Nexora Studio',
      desc: 'Закрытая консоль студии: доступы клиентов, обновления проектов, файлы и счета.',
    },
  },
  uz: {
    index: {
      title: 'Nexora Studio — raqamli cho‘qqilar',
      desc: 'Nexora Studio — Farg‘ona, O‘zbekistondagi raqamli injiniring studiyasi. Mobil mahsulotlar, yuqori unumdorlikdagi veb-platformalar va amaliy AI. Arise va DigitalLib mualliflari.',
    },
    studio: {
      title: 'Studiya — Nexora Studio',
      desc: 'Farg‘ona, O‘zbekistondagi asoschilar boshchiligidagi raqamli injiniring studiyasi. Uch hamkor, ikkita ishga tushirilgan platforma va ataylab kichik mijozlar ro‘yxati.',
    },
    work: {
      title: 'Ishlar — Nexora Studio',
      desc: 'Arise va DigitalLib: Nexora Studio asoschilari jamoasi tomonidan loyihalangan, qurilgan va boshqariladigan ikkita platforma.',
    },
    team: {
      title: 'Jamoa — Nexora Studio',
      desc: 'Tizimlar, mashina o‘rganish va dizayn bo‘yicha uch asoschi. Akkaunt qatlamisiz, topshirishsiz.',
    },
    journal: {
      title: 'Jurnal — Nexora Studio',
      desc: 'Nexora Studio asoschilaridan injiniring yozuvlari: unumdorlik, amaliy AI va studiya qanday ishlaydi.',
    },
    contact: {
      title: 'Aloqa — Nexora Studio',
      desc: 'Nexora Studio bilan loyiha boshlang. Nima qurayotganingizni, kim uchun ekanini va qachon kerakligini ayting. Asoschilardan biri shaxsan javob beradi.',
    },
    portal: {
      title: 'Mijoz portali — Nexora Studio',
      desc: 'Loyihangizni kuzatish uchun kiring: holat, yangilanishlar, fayllar va hisob-fakturalar.',
    },
    admin: {
      title: 'Studiya konsoli — Nexora Studio',
      desc: 'Mijozlar dostupi, loyiha yangilanishlari, fayllar va hisob-fakturalar uchun yopiq studiya konsoli.',
    },
  },
};

const RU = {
  /* Common */
  'Skip to content': 'Перейти к содержимому',
  'Home': 'Главная',
  'Studio': 'Студия',
  'Work': 'Работы',
  'Team': 'Команда',
  'Contact': 'Контакты',
  'Journal': 'Журнал',
  'Portal': 'Портал',
  'Start a project': 'Начать проект',
  'Menu': 'Меню',
  'Digital engineering studio': 'Студия цифровой инженерии',
  'Fergana, Uzbekistan': 'Фергана, Узбекистан',
  'We engineer': 'Мы проектируем',
  'summits.': 'вершины.',
  '01 — Mobile': '01 — Мобильные',
  '02 — Web': '02 — Веб',
  '03 — Applied AI': '03 — Прикладной AI',
  'Founder-led engineering': 'Инженерия под руководством основателей',
  'Applied AI': 'Прикладной AI',
  'Built to hold': 'Создано, чтобы выдержать',
  'Founder-led mobile, web and applied AI for products that cannot fail. Three partners. Zero intermediaries. Every line of code accountable.': 'Мобильные, веб- и AI-продукты под руководством основателей — для продуктов, которые не имеют права на ошибку. Три партнёра. Ноль посредников. Ответственность за каждую строку кода.',
  'See the work': 'Смотреть работы',
  'disciplines': 'дисциплины',
  'products shipped': 'запущенных продукта',
  'languages': 'языка',
  'Scroll to explore': 'Листайте вниз',
  'EST. 2026 / MMXXVI': 'ОСН. 2026 / MMXXVI',
  'The studio': 'Студия',
  'A founder-led studio': 'Студия под руководством основателей',
  'for products that cannot fail.': 'для продуктов, которые не имеют права на ошибку.',
  'Nexora Studio is a digital engineering studio in Fergana, Uzbekistan. We design and build mobile applications, high-performance web platforms and applied AI systems — for companies and for products of our own.': 'Nexora Studio — студия цифровой инженерии в Фергане, Узбекистан. Мы проектируем и создаём мобильные приложения, высокопроизводительные веб-платформы и прикладные AI-системы — для компаний и для собственных продуктов.',
  'Three founders. Zero intermediaries. The people who scope your product are the people who architect, build and ship it.': 'Три основателя. Ноль посредников. Те, кто обсуждает ваш продукт, — те же люди, которые проектируют, создают и запускают его.',
  'Founded': 'Основана',
  'Basecamp': 'База',
  'Fergana, UZ': 'Фергана, UZ',
  'Engagements': 'Проекты',
  '02 / quarter': '02 / квартал',
  'Languages': 'Языки',
  'Read the studio story': 'История студии',
  'Meet the founders': 'Познакомиться с основателями',
  'What we do': 'Что мы делаем',
  'Small by design.': 'Маленькие по замыслу.',
  'Accountable by default.': 'Ответственные по умолчанию.',
  'We keep the studio deliberately small, so the scope, the architecture and the shipped product are owned by the same people.': 'Мы намеренно держим студию небольшой, чтобы рамки проекта, архитектура и выпущенный продукт принадлежали одним и тем же людям.',
  'Mobile ecosystems': 'Мобильные экосистемы',
  'Native-feeling iOS and Android products on React Native and Expo. Fluid gestures, offline resilience and release discipline that survives the store.': 'iOS- и Android-продукты с нативным ощущением на React Native и Expo. Плавные жесты, устойчивость офлайн и дисциплина релизов, которая проходит модерацию стора.',
  'Capability detail': 'Подробнее о компетенции',
  'High-performance web': 'Высокопроизводительный веб',
  'Corporate platforms, SaaS dashboards and customer portals built on React 19 and edge infrastructure. Fast at the first paint and coherent at the hundredth screen.': 'Корпоративные платформы, SaaS-дашборды и клиентские порталы на React 19 и edge-инфраструктуре. Быстрые на первом экране и цельные на сотом.',
  'Applied AI systems': 'Прикладные AI-системы',
  'LLM mentors, RAG pipelines and real-time agents with guardrails, structured outputs and genuine product value — not an API wrapper in a new coat.': 'LLM-наставники, RAG-конвейеры и real-time агенты с ограничителями, структурированными ответами и реальной ценностью для продукта — не обёртка над API в новом пальто.',
  'Selected work': 'Избранные работы',
  'Our own products.': 'Наши собственные продукты.',
  'Then yours.': 'Потом ваши.',
  'Two platforms, designed, engineered and operated by the founding team. Each one is live in production.': 'Две платформы, спроектированные, созданные и поддерживаемые командой основателей. Каждая работает в продакшене.',
  '01 / In-house product': '01 / Собственный продукт',
  '02 / In-house product': '02 / Собственный продукт',
  'An AI-guided ascent from school to university.': 'Восхождение от школы к университету с AI-наставником.',
  'A national reading platform, light enough for any phone.': 'Национальная платформа для чтения — лёгкая, работает на любом телефоне.',
  'Open the work archive': 'Открыть архив работ',
  '02 platforms live · Fergana, UZ': '02 работающих платформы · Фергана, UZ',
  "Let's build something": 'Создадим то,',
  'that holds.': 'что выдержит.',
  'Tell us what you\'re building, who it\'s for and when it needs to exist. A founder replies personally.': 'Расскажите, что вы создаёте, для кого и к какому сроку. Ответит лично один из основателей.',
  'Digital summits, built to hold.': 'Цифровые вершины, которые выдержат.',
  'Navigate': 'Навигация',
  'Email': 'Почта',
  'Careers': 'Карьера',
  'Status': 'Статус',
  'Studio open — building': 'Студия открыта — создаём',
  'Back to top ↑': 'Наверх ↑',
  '© 2026 Nexora Studio. All rights reserved.': '© 2026 Nexora Studio. Все права защищены.',
  'Engineered in Fergana · EN / RU / UZ': 'Создано в Фергане · EN / RU / UZ',
  'Founder-led': 'Под руководством основателей',

  /* Studio page */
  'No account managers.': 'Без аккаунт-менеджеров.',
  'No outsourced juniors.': 'Без аутсорсных джунов.',
  'Three founders, on every line. Nexora is a digital engineering studio in Fergana, Uzbekistan — deliberately small, and accountable from the first sketch to production.': 'Три основателя в каждой строке. Nexora — студия цифровой инженерии в Фергане, Узбекистан: намеренно небольшая и ответственная от первого эскиза до продакшена.',
  'Fergana': 'Фергана',
  'Uzbekistan': 'Узбекистан',
  'Start a conversation': 'Начать разговор',
  'On this page': 'На этой странице',
  'About': 'О студии',
  'History': 'История',
  'Capabilities': 'Компетенции',
  'Record': 'Показатели',
  'Process': 'Процесс',
  'A studio built around': 'Студия, построенная вокруг',
  'accountability.': 'ответственности.',
  'Nexora Studio designs and builds mobile applications, high-performance web platforms and applied AI systems — for companies and for products of our own.': 'Nexora Studio проектирует и создаёт мобильные приложения, высокопроизводительные веб-платформы и прикладные AI-системы — для компаний и для собственных продуктов.',
  'Our benchmark is not the local market. It is the finest digital work produced anywhere. That standard shows up in architecture, performance and the small details users feel before they can name them.': 'Наш ориентир — не местный рынок, а лучшая цифровая работа, созданная где угодно в мире. Этот стандарт виден в архитектуре, производительности и мелочах, которые пользователи чувствуют раньше, чем могут назвать.',
  'Zermatt, Switzerland': 'Церматт, Швейцария',
  'Alpine standard.': 'Альпийский стандарт.',
  'Central Asian basecamp.': 'База в Центральной Азии.',
  'REF. 01 / PRECISION': 'РЕФ. 01 / ТОЧНОСТЬ',
  'Two products first.': 'Сначала два продукта.',
  'Then a studio.': 'Потом студия.',
  'Nexora did not begin as an agency. It began with products the founders had to design, ship and run themselves.': 'Nexora начиналась не как агентство. Она началась с продуктов, которые основателям пришлось самим спроектировать, выпустить и вести.',
  'Origin': 'Начало',
  'The first product': 'Первый продукт',
  'The three founders built Arise, an AI-guided admissions platform for students in Uzbekistan. A multilingual mentor, a personal roadmap and a mobile product measured in production — not in a pitch deck.': 'Три основателя создали Arise — платформу поступления с AI-наставником для студентов Узбекистана. Многоязычный наставник, личный маршрут и мобильный продукт, проверенный продакшеном, а не презентацией.',
  'Then': 'Затем',
  'The second platform': 'Вторая платформа',
  'DigitalLib followed: a national reading platform with 713 books, a private academic vault and a lightweight Android app that runs on any phone.': 'Затем появилась DigitalLib: национальная платформа для чтения с 713 книгами, личным академическим хранилищем и лёгким Android-приложением, которое работает на любом телефоне.',
  'The collaboration became a studio. Nexora now applies the same standard — strategy, design, engineering and operations under one roof — to a deliberately small number of client projects at a time.': 'Совместная работа превратилась в студию. Теперь Nexora применяет тот же стандарт — стратегия, дизайн, разработка и сопровождение под одной крышей — к небольшому числу клиентских проектов одновременно.',
  'Today': 'Сегодня',
  'Two tracks, one team': 'Два направления, одна команда',
  'Products and client platforms': 'Продукты и клиентские платформы',
  'In-house products and client work share the same founders, the same architecture reviews and the same launch discipline. Nothing is handed to a team you have never met.': 'Собственные продукты и клиентские проекты делят одних основателей, одни архитектурные ревью и одну дисциплину запуска. Ничто не передаётся команде, которую вы никогда не видели.',
  'Three disciplines.': 'Три дисциплины.',
  'One accountable team.': 'Одна ответственная команда.',
  'We keep the studio deliberately small. The people who scope your product are the people who architect, build and ship it.': 'Мы намеренно держим студию небольшой. Те, кто обсуждает ваш продукт, — те же люди, которые проектируют, создают и запускают его.',
  'Android apps shipped': 'Android-приложения запущены',
  'Discuss': 'Обсудить',
  'target LCP': 'целевой LCP',
  'languages, natively': 'языка нативно',
  'Cross-cutting practice': 'Сквозная практика',
  'Design systems · Motion · Art direction · Brand engineering': 'Дизайн-системы · Моушн · Арт-дирекшн · Бренд-инженерия',
  'Applied to every engagement': 'В каждом проекте',
  'The record': 'Показатели',
  'Measured in production.': 'Измерено в продакшене.',
  'Not in a deck.': 'А не в презентации.',
  'Figures from our shipped products. No projections, no laboratory conditions — the numbers our users actually experience.': 'Цифры из наших выпущенных продуктов. Без прогнозов и лабораторных условий — то, что пользователи действительно чувствуют.',
  'Books in the DigitalLib catalogue': 'Книг в каталоге DigitalLib',
  '686 in Uzbek': '686 на узбекском',
  'Verified questions in the knowledge arena': 'Проверенных вопросов в арене знаний',
  'Chapter by chapter': 'Глава за главой',
  'Lightweight Android APK': 'Лёгкий Android APK',
  'Offline-ready': 'Готов офлайн',
  'Languages Ari speaks': 'Языка, на которых говорит Ari',
  'EN · RU · UZ': 'EN · RU · UZ',
  'Fleet': 'Парк',
  '02 products live': '02 продукта в продакшене',
  'Response': 'Ответ',
  '< 24 hours': '< 24 часов',
  '02 per quarter': '02 в квартал',
  'A short route': 'Короткий маршрут',
  'from brief to production.': 'от брифа до продакшена.',
  'Four stages, no relay race. The founders stay on the project from the first sketch to the release and beyond.': 'Четыре этапа, без эстафеты. Основатели остаются на проекте от первого эскиза до релиза и дальше.',
  'Deep strategy': 'Глубокая стратегия',
  'We dissect the product, the audience and the constraint that matters. The output is a route, not a wish list.': 'Мы разбираем продукт, аудиторию и ограничение, которое действительно важно. На выходе — маршрут, а не список пожеланий.',
  '1–2 weeks': '1–2 недели',
  'Blueprint & architecture': 'Блюпринт и архитектура',
  'Clickable screens, a design system and a system architecture you can interrogate before a line of code is written.': 'Кликабельные экраны, дизайн-система и архитектура, которые можно проверить до первой строки кода.',
  '2–3 weeks': '2–3 недели',
  'Engineering sprints': 'Инженерные спринты',
  'Two-week cycles with working builds on your phone and a live staging environment. You review the product, not a status deck.': 'Двухнедельные циклы с рабочими сборками на вашем телефоне и живым стейджингом. Вы смотрите продукт, а не статусный дек.',
  'Continuous': 'Непрерывно',
  'Launch & altitude': 'Запуск и высота',
  'Store deployment, monitoring and measured iteration. We stay responsible after the invoice — as we do on our own products.': 'Публикация в сторах, мониторинг и итерации по метрикам. Мы остаёмся ответственными и после счёта — как и в собственных продуктах.',
  'Beyond launch': 'После запуска',
  'Next': 'Далее',
  'Bring us the product': 'Принесите продукт,',
  'that has to hold.': 'который должен выдержать.',
  'Every project is scoped directly with the founders. Tell us what needs to exist and when.': 'Каждый проект обсуждается напрямую с основателями. Расскажите, что нужно создать и к какому сроку.',

  /* Work page */
  'Products we built,': 'Продукты, которые мы создали,',
  'shipped and still run.': 'выпустили и до сих пор ведём.',
  'Two platforms of our own, designed, engineered and operated by the founding team. The imagery below is from the live products.': 'Две собственные платформы, спроектированные, созданные и поддерживаемые командой основателей. Изображения ниже — из живых продуктов.',
  'Platforms live': 'Платформы в продакшене',
  'Shipped': 'Запущено',
  'In-house': 'Собственные',
  'Products': 'Продукты',
  'Open the case studies': 'Открыть кейсы',
  'A study and career-guidance ecosystem for students. Arise pairs university matching with Ari, a multilingual AI mentor that turns an ambition into a weekly route.': 'Экосистема учёбы и профориентации для студентов. Arise сочетает подбор университетов с Ari — многоязычным AI-наставником, который превращает цель в недельный маршрут.',
  "A personal admissions roadmap, built around the student's target university": 'Личный маршрут поступления, построенный вокруг целевого университета',
  'Ari — a mentor fluent in English, Russian and Uzbek': 'Ari — наставник, свободно говорящий на английском, русском и узбекском',
  'Skill trees, streak rituals and milestone tracking that make progress visible': 'Деревья навыков, ритуалы серий и отслеживание этапов, которые делают прогресс видимым',
  'Platform': 'Платформа',
  'Open case study': 'Открыть кейс',
  'A digital reading hub for Uzbek literature and academic material. A private vault, an adaptive reader with TTS, and a gamified knowledge arena — fast on the connections people actually have.': 'Цифровой центр чтения узбекской литературы и академических материалов. Личное хранилище, адаптивная читалка с TTS и геймифицированная арена знаний — быстро на тех соединениях, которые есть у людей.',
  '713-book catalogue with instant in-browser reading': 'Каталог из 713 книг с мгновенным чтением в браузере',
  'Personal private vault for syllabi, notes and PDFs': 'Личное хранилище для программ, заметок и PDF',
  'Alif AI librarian for recommendations, summaries and study plans': 'AI-библиотекарь Alif: рекомендации, конспекты и учебные планы',
  'Books': 'Книги',
  'Quiz questions': 'Вопросы квиза',
  'Both platforms are live and operated by Nexora Studio.': 'Обе платформы работают, и ими управляет Nexora Studio.',
  'See how we work': 'Как мы работаем',
  'Your product': 'Ваш продукт',
  'could be next.': 'может стать следующим.',
  'We take on a small number of client projects at a time. If the standard fits, tell us what you are building.': 'Одновременно мы берём лишь несколько клиентских проектов. Если наш стандарт вам подходит, расскажите, что вы создаёте.',
  'Year': 'Год',
  'Role': 'Роль',
  'Design, engineering, AI': 'Дизайн, инженерия, AI',
  "Arise is a study and career-guidance ecosystem for students in Uzbekistan. It connects a student's ambition to a concrete route: university matching, skill-building and an AI mentor who knows the path.": 'Arise — экосистема учёбы и профориентации для студентов Узбекистана. Она связывает амбицию студента с конкретным маршрутом: подбор университетов, развитие навыков и AI-наставник, который знает путь.',
  "Ari, the platform's multilingual mentor, constructs milestones around each goal and stays inside the product's guardrails. The result is guidance that feels personal without inventing facts.": 'Ari, многоязычный наставник платформы, строит этапы вокруг каждой цели и остаётся в рамках ограничителей. В результате — рекомендации, которые ощущаются личными, но не выдумывают факты.',
  'Personal admissions roadmap, matched to dream universities': 'Личный маршрут поступления под целевые университеты',
  'Gamified skill trees, streak rituals and milestone tracking': 'Геймифицированные деревья навыков, серии и отслеживание этапов',
  'Native mobile performance with offline resilience': 'Нативная мобильная производительность с устойчивостью офлайн',
  'First run — meet Ari': 'Первый запуск — знакомство с Ari',
  'Skill tree and milestones': 'Дерево навыков и этапы',
  'Ari — conversational mentor': 'Ari — диалоговый наставник',
  'Planning an education, health or AI product?': 'Планируете продукт в образовании, здоровье или AI?',
  'Talk to the founders': 'Поговорить с основателями',
  'Catalogue': 'Каталог',
  '713 books': '713 книг',
  'Digital reading in Central Asia was split between disordered Telegram channels and archaic portals that were never built for a phone. DigitalLib replaces both with one coherent reading space.': 'Цифровое чтение в Центральной Азии делилось между хаотичными Telegram-каналами и архаичными порталами, которые никогда не строились под телефон. DigitalLib заменяет и то и другое единым пространством для чтения.',
  'The platform combines a verified national catalogue, a private academic vault, an adaptive reader with text-to-speech, and an arena of chapter-level quizzes. It is fast enough to work where the network is not.': 'Платформа объединяет проверенный национальный каталог, личное академическое хранилище, адаптивную читалку с озвучиванием и арену квизов по главам. Она достаточно быстра, чтобы работать там, где сети нет.',
  'Instant in-browser reading without filling device storage': 'Мгновенное чтение в браузере без заполнения памяти устройства',
  'Private vault for syllabi, notes and PDFs': 'Личное хранилище для программ, заметок и PDF',
  'Alif AI librarian — recommendations, summaries and study plans': 'AI-библиотекарь Alif — рекомендации, конспекты и учебные планы',
  '1,256 verified quiz questions with XP and reader ranks': '1 256 проверенных вопросов квиза с XP и рангами читателей',
  '7.05 MB Android APK, built for low-bandwidth regions': 'Android APK на 7,05 МБ для регионов с низкой пропускной способностью',
  'Library & private vault': 'Библиотека и личное хранилище',
  'Adaptive reader and TTS': 'Адаптивная читалка и озвучивание',
  'Alif AI librarian': 'AI-библиотекарь Alif',
  'Building a platform for a market that has been underserved?': 'Строите платформу для рынка, который оставался без внимания?',

  /* Team page */
  'Founders': 'Основатели',
  'The people': 'Люди',
  'on every line of code.': 'в каждой строке кода.',
  'Three partners across systems, machine learning and design. No account layer, no hand-offs to a team you have never met.': 'Три партнёра: системы, машинное обучение и дизайн. Без аккаунт-слоя и передач команде, которую вы никогда не видели.',
  'Partners': 'Партнёры',
  'Open seat': 'Открытая позиция',
  'Apply to the studio': 'Откликнуться в студию',
  'Co-founder · CTO': 'Соучредитель · CTO',
  'Makhmud': 'Махмуд',
  'Nasriddinov': 'Насриддинов',
  'Systems architecture, mobile engineering and cloud operations. Architect of the Arise platforms.': 'Системная архитектура, мобильная инженерия и облачные операции. Архитектор платформ Arise.',
  'Co-founder · CAIO': 'Соучредитель · CAIO',
  'Nurahmadov': 'Нурахмадов',
  'Xayrullo': 'Хайрулло',
  'Applied machine learning, LLM mentors and retrieval systems. Architect of Ari, the mentor inside Arise.': 'Прикладное машинное обучение, LLM-наставники и retrieval-системы. Архитектор Ari — наставника внутри Arise.',
  'Co-founder · Design': 'Соучредитель · Дизайн',
  'Abduraximov': 'Абдурахимов',
  'Nizomiddin': 'Низомиддин',
  'Product design, art direction and design systems. Directs the tactile feel and visual identity of every product.': 'Продуктовый дизайн, арт-дирекшн и дизайн-системы. Отвечает за тактильность и визуальную идентичность каждого продукта.',
  'Selective hiring': 'Точечный найм',
  'Exceptional': 'Исключительные',
  'builders.': 'инженеры.',
  'We hire masters of their craft, not seats to fill. If your work is undeniable, show us.': 'Мы берём мастеров своего дела, а не закрываем вакансии. Если ваша работа бесспорна — покажите её.',
  '“We don\'t ship demos. We ship products we are willing to put': '«Мы не выпускаем демо. Мы выпускаем продукты, за которые готовы поставить',
  'our names': 'свои имена',
  'on.”': '».',
  'Nexora Studio — founding principle': 'Nexora Studio — принцип основания',
  'Work with us': 'Работайте с нами',
  'Talk to the people': 'Поговорите с людьми,',
  'who will build it.': 'которые это построят.',
  'Every conversation starts with a founder. Tell us what you are building and who it has to serve.': 'Каждый разговор начинается с основателя. Расскажите, что вы создаёте и кому это служит.',

  /* Contact page */
  '< 24h': '< 24 ч',
  'Reply time': 'Время ответа',
  'Capacity': 'Загрузка',
  'Fergana local time —': 'Местное время Ферганы —',
  'Copy': 'Копировать',
  'Copied': 'Скопировано',
  'Email address copied to clipboard.': 'Адрес почты скопирован.',
  'Could not copy the email address.': 'Не удалось скопировать адрес почты.',
  'Fast and personal': 'Быстро и лично',
  'Directly from the founders': 'Напрямую от основателей',
  'A few projects at a time': 'Несколько проектов одновременно',
  'Booked selectively': 'Берём выборочно',
  'Send us': 'Пишите нам',
  'Scope · Timeline · Goals': 'Объём · Сроки · Цели',
  'A short brief is enough': 'Достаточно короткого брифа',
  'What happens next': 'Что дальше',
  'How a project': 'Как начинается',
  'starts here.': 'проект.',
  'No sales layer and no discovery theatre. Three steps to know whether we are the right studio for the work.': 'Без отдела продаж и театрального дискавери. Три шага, чтобы понять, подходим ли мы для этой работы.',
  'You write': 'Вы пишете',
  'A short brief is enough: what you are building, who it serves and when it needs to exist.': 'Короткого брифа достаточно: что вы создаёте, для кого и к какому сроку.',
  'We reply': 'Мы отвечаем',
  'Directly from a founder. We will tell you what we understood, what is unclear, and whether the fit is right.': 'Лично от основателя. Расскажем, что мы поняли, что неясно и подходим ли мы друг другу.',
  'A route': 'Маршрут',
  'A 30-minute call and a scoped plan: architecture, stages, timeline and cost — before any engagement begins.': '30-минутный звонок и проработанный план: архитектура, этапы, сроки и стоимость — до начала работы.',
  'See what we have shipped': 'Смотреть, что мы выпустили',
  'Founder-led · Fergana, Uzbekistan': 'Под руководством основателей · Фергана, Узбекистан',
  'In-house product / 01': 'Собственный продукт / 01',
  'In-house product / 02': 'Собственный продукт / 02',

  /* Journal */
  'Notes from': 'Заметки',
  'the ascent.': 'с восхождения.',
  'Field notes from the founders on performance, applied AI and keeping a studio small enough to stay accountable. No growth hacks, no predictions — only what we measured.': 'Заметки основателей о производительности, прикладном AI и о том, как держать студию достаточно маленькой, чтобы оставаться ответственной. Без growth-хаков и прогнозов — только то, что мы измерили.',
  'Entries': 'Материала',
  'Oct 2026': 'Окт. 2026',
  'Last update': 'Обновлено',
  'Written by the founders': 'Написано основателями',
  'Engineering': 'Инженерия',
  'The 7 MB constraint': 'Ограничение в 7 МБ',
  'Guardrails before magic': 'Ограничители раньше магии',
  'Two engagements per quarter': 'Два проекта в квартал',
  '01 · Engineering · October 2026 · 6 min read': '01 · Инженерия · Октябрь 2026 · 6 мин чтения',
  '02 · Applied AI · October 2026 · 5 min read': '02 · Прикладной AI · Октябрь 2026 · 5 мин чтения',
  '03 · Studio · September 2026 · 4 min read': '03 · Студия · Сентябрь 2026 · 4 мин чтения',
  'DigitalLib ships as a 7.05 MB Android build. That number was not a compression pass at the end; it was a budget we defended from the first commit.': 'DigitalLib выходит Android-сборкой на 7,05 МБ. Это число не результат финального сжатия; это бюджет, который мы защищали с первого коммита.',
  'The easy version of a reading platform is a browser wrapped around a CDN. It looks finished on a fast connection and falls apart on the connection most students actually have. We started from the opposite direction: a device from 2019, a metered data plan and a campus where the Wi-Fi drops between buildings.': 'Простая версия платформы для чтения — браузер, обёрнутый вокруг CDN. Она выглядит готовой на быстром соединении и разваливается на том, которое есть у большинства студентов. Мы начали с обратного: устройство 2019 года, тариф с лимитом и кампус, где Wi-Fi пропадает между корпусами.',
  'Every dependency had to justify its kilobytes. We kept the reader in the platform WebView, streamed chapters instead of preloading the catalogue, and cached only the pages a reader had actually opened. Analytics, crash reporting and A/B tooling — the default cargo of a modern app — were replaced with a single lightweight event pipe we could reason about.': 'Каждая зависимость должна была оправдать свои килобайты. Читалка осталась в WebView платформы, главы стримятся вместо предзагрузки каталога, а кэшируются только те страницы, которые читатель действительно открыл. Аналитика, crash-reporting и A/B-инструменты — стандартный груз современного приложения — заменены одним лёгким потоком событий, который мы понимаем целиком.',
  'Performance is a product decision,': 'Производительность — это продуктовое решение,',
  'not a cleanup task.': 'а не уборка в конце.',
  'The result is a build a student can download on mobile data without thinking about it. The lesson is not that small is always better. It is that the constraint belongs in the architecture, not in the release checklist.': 'В результате сборку студент скачивает на мобильном интернете, не задумываясь. Урок не в том, что маленькое всегда лучше. А в том, что ограничение должно жить в архитектуре, а не в чек-листе релиза.',
  'The reader stays in the platform WebView; the catalogue streams on demand.': 'Читалка остаётся в WebView платформы; каталог подгружается по запросу.',
  'Covers are generated as responsive AVIF and WebP at build time.': 'Обложки генерируются в адаптивных AVIF и WebP на этапе сборки.',
  'No third-party SDK sits in the critical path.': 'В критическом пути нет сторонних SDK.',
  '— Makhmud Nasriddinov, systems': '— Махмуд Насриддинов, системы',
  'Ari is the mentor inside Arise. The hardest part was not making it sound intelligent — it was keeping it honest about what it knows.': 'Ari — наставник внутри Arise. Самое сложное было не заставить его звучать умно, а удержать честным относительно того, что он знает.',
  'Students ask direct questions: which university, which subject, which deadline. A fluent answer that invents a scholarship is worse than no answer at all. So Ari is built around retrieval first and generation second. University facts, deadlines and requirements come from a verified catalogue; the model composes the route, not the facts.': 'Студенты задают прямые вопросы: какой университет, какой предмет, какой дедлайн. Беглая формулировка с выдуманной стипендией хуже, чем отсутствие ответа. Поэтому Ari построен вокруг retrieval, а генерация идёт второй. Факты об университетах, сроках и требованиях берутся из проверенного каталога; модель составляет маршрут, а не факты.',
  'Every response is constrained to a structured shape — a next step, a reason, a source. When the catalogue has no answer, Ari says so and offers the closest verified path. That refusal style was designed before the first prompt was written.': 'Каждый ответ ограничен структурой — следующий шаг, причина, источник. Если в каталоге нет ответа, Ari говорит об этом и предлагает ближайший проверенный путь. Стиль отказов был спроектирован до первого промпта.',
  'A mentor that admits the gap is more useful than one that': 'Наставник, признающий пробел, полезнее того, который',
  'fills it with noise.': 'заполняет его шумом.',
  'Multilingual support is not a translation layer on top. English, Russian and Uzbek prompts share the same structured contract, and the mentor answers in the language the student used — including the mixed language students actually type.': 'Многоязычность — не слой перевода сверху. Английский, русский и узбекский промпты делят один структурный контракт, и наставник отвечает на языке студента — включая смешанный язык, на котором студенты действительно пишут.',
  '— Nurahmadov Xayrullo, machine learning': '— Нурахмадов Хайрулло, машинное обучение',
  'Capacity is not a sales constraint. It is the mechanism that keeps the people who scope your product on the line that ships it.': 'Загрузка — не ограничение продаж. Это механизм, который держит людей, обсуждавших ваш продукт, на той же линии, которая его выпускает.',
  'Nexora is three founders and no account layer. That sentence is easy to print and hard to operate. The only way to keep it true is to bound the number of things happening at once.': 'Nexora — три основателя и никакого аккаунт-слоя. Это предложение легко напечатать и трудно выдерживать. Единственный способ сохранить его правдивым — ограничить число одновременных дел.',
  'Two client engagements per quarter is a deliberate ceiling. It leaves room for architecture reviews, for the unglamorous week where a release is stabilised, and for our own platforms — Arise and DigitalLib — which we still run ourselves.': 'Два клиентских проекта в квартал — осознанный потолок. Он оставляет время на архитектурные ревью, на негламурную неделю стабилизации релиза и на собственные платформы — Arise и DigitalLib, которыми мы до сих пор управляем сами.',
  'A small studio is not a boutique aesthetic. It is an': 'Небольшая студия — не бутиковая эстетика. Это',
  'operating constraint.': 'операционное ограничение.',
  'It also makes the first conversation honest. If the timing does not fit, we say so instead of hiring a team you have never met to carry the work. The studio stays small because the alternative is a promise we cannot keep.': 'Он же делает первый разговор честным. Если сроки не складываются, мы говорим об этом, а не нанимаем команду, которую вы никогда не видели, чтобы она понесла работу. Студия остаётся маленькой, потому что альтернатива — обещание, которое мы не сможем сдержать.',
  '— Abduraximov Nizomiddin, design': '— Абдурахимов Низомиддин, дизайн',
  'Bring us the next one': 'Принесите следующий',
  'built to hold.': 'созданный, чтобы выдержать.',
  'Every project is scoped directly with the founders. Tell us what you\'re building and when it needs to exist.': 'Каждый проект обсуждается напрямую с основателями. Расскажите, что вы создаёте и к какому сроку.',

  /* Contact form */
  'Start a brief': 'Расскажите о проекте',
  'Fields marked * are required': 'Поля со * обязательны',
  'Name *': 'Имя *',
  'Email *': 'Email *',
  'Company': 'Компания',
  'Project type': 'Тип проекта',
  'Budget': 'Бюджет',
  'Project *': 'Проект *',
  'Your name': 'Ваше имя',
  'Where you work': 'Где вы работаете',
  'What are we building? Scope, users, timeline.': 'Что мы создаём? Задачи, пользователи, сроки.',
  'Select one': 'Выберите',
  'Web platform': 'Веб-платформа',
  'Mobile app': 'Мобильное приложение',
  'AI product': 'AI-продукт',
  'Brand & site': 'Бренд и сайт',
  'Something else': 'Другое',
  'Not sure yet': 'Пока не знаю',
  'Under $5k': 'До $5k',
  'Send brief': 'Отправить бриф',
  'A founder replies personally. No newsletter, ever.': 'Отвечает лично основатель. Никаких рассылок.',
  'Sending your brief…': 'Отправляем бриф…',
  'Sending…': 'Отправка…',
  'Please check the highlighted fields.': 'Проверьте отмеченные поля.',
  'Your brief is with us. A founder will reply personally.': 'Бриф у нас. Основатель ответит вам лично.',
  'Too many briefs from this address. Try again in a few minutes.': 'Слишком много брифов с этого адреса. Попробуйте через несколько минут.',
  'Something went wrong. Write to support@nexorastudio.world instead.': 'Что-то пошло не так. Напишите на support@nexorastudio.world.',
  'Already a client? Open the client portal': 'Уже клиент? Откройте клиентский портал',

  /* Client portal */
  'Client portal': 'Клиентский портал',
  'Welcome back,': 'С возвращением,',
  'Enter your email and access code.': 'Введите email и код доступа.',
  'Try again': 'Попробовать снова',
  'Your project,': 'Ваш проект,',
  'in one place.': 'в одном месте.',
  'Sign in with the email and one-time code your studio contact sent you.': 'Войдите по email и одноразовому коду, который прислал ваш контакт в студии.',
  'Access code': 'Код доступа',
  'Open portal': 'Открыть портал',
  'Need access? Ask your studio contact at Nexora for a new code.': 'Нужен доступ? Попросите новый код у вашего контакта в Nexora.',
  'Private area for Nexora clients.': 'Закрытая зона для клиентов Nexora.',
  'Signing in…': 'Входим…',
  'That email and code do not match. Check the code or ask for a new one.': 'Email и код не совпадают. Проверьте код или запросите новый.',
  'Sign out': 'Выйти',
  'Back to site': 'На сайт',
  'Projects': 'Проекты',
  'Updates': 'Обновления',
  'Files': 'Файлы',
  'Invoices': 'Счета',
  'No projects yet.': 'Проектов пока нет.',
  'No updates yet.': 'Обновлений пока нет.',
  'No files yet.': 'Файлов пока нет.',
  'No invoices yet.': 'Счетов пока нет.',
  'Download': 'Скачать',
  'Due': 'Срок оплаты',
  'Issued': 'Выставлен',
  'Invoice': 'Счёт',
  'Amount': 'Сумма',
  'Progress': 'Готовность',
  'Target': 'Цель',
  'Started': 'Старт',
  'Discovery': 'Аналитика',
  'In build': 'В разработке',
  'In review': 'На проверке',
  'Live': 'Запущен',
  'Paused': 'Пауза',
  'Draft': 'Черновик',
  'Sent': 'Отправлен',
  'Paid': 'Оплачен',
  'Overdue': 'Просрочен',
  'Session expired. Sign in again.': 'Сессия истекла. Войдите снова.',
  'Could not load your workspace. Try again.': 'Не удалось загрузить рабочую область. Попробуйте ещё раз.',
  'Downloading…': 'Скачиваем…',
  'This file is not ready yet.': 'Файл ещё не готов.',
  'Download failed. Try again.': 'Не удалось скачать. Попробуйте ещё раз.',
  'Your studio contact': 'Ваш контакт в студии',
  'Signed in as': 'Вы вошли как',
  'No updates yet — the first one lands after kick-off.': 'Обновлений пока нет — первое появится после старта.',
  'Files shared by the studio will appear here.': 'Файлы от студии появятся здесь.',
  'Invoices will appear here once issued.': 'Счета появятся здесь после выставления.',
};

const UZ = {
  /* Common */
  'Skip to content': 'Kontentga o‘tish',
  'Home': 'Bosh sahifa',
  'Studio': 'Studiya',
  'Work': 'Ishlar',
  'Team': 'Jamoa',
  'Contact': 'Aloqa',
  'Journal': 'Jurnal',
  'Portal': 'Portal',
  'Start a project': 'Loyihani boshlash',
  'Menu': 'Menyu',
  'Digital engineering studio': 'Raqamli injiniring studiyasi',
  'Fergana, Uzbekistan': 'Farg‘ona, O‘zbekiston',
  'We engineer': 'Biz quramiz',
  'summits.': 'cho‘qqilarni.',
  '01 — Mobile': '01 — Mobil',
  '02 — Web': '02 — Veb',
  '03 — Applied AI': '03 — Amaliy AI',
  'Founder-led engineering': 'Asoschilar boshchiligidagi injiniring',
  'Applied AI': 'Amaliy AI',
  'Built to hold': 'Bardosh berishga qurilgan',
  'Founder-led mobile, web and applied AI for products that cannot fail. Three partners. Zero intermediaries. Every line of code accountable.': 'Asoschilar boshchiligidagi mobil, veb va amaliy AI — xato qilishga haqqi bo‘lmagan mahsulotlar uchun. Uch hamkor. Nol vositachi. Har bir kod satri uchun javobgarlik.',
  'See the work': 'Ishlarni ko‘rish',
  'disciplines': 'yo‘nalish',
  'products shipped': 'mahsulot ishga tushirilgan',
  'languages': 'til',
  'Scroll to explore': 'Pastga suring',
  'EST. 2026 / MMXXVI': 'TASH. 2026 / MMXXVI',
  'The studio': 'Studiya',
  'A founder-led studio': 'Asoschilar boshchiligidagi studiya',
  'for products that cannot fail.': 'xato qilishga haqqi bo‘lmagan mahsulotlar uchun.',
  'Nexora Studio is a digital engineering studio in Fergana, Uzbekistan. We design and build mobile applications, high-performance web platforms and applied AI systems — for companies and for products of our own.': 'Nexora Studio — Farg‘ona, O‘zbekistondagi raqamli injiniring studiyasi. Biz kompaniyalar va o‘z mahsulotlarimiz uchun mobil ilovalar, yuqori unumdorlikdagi veb-platformalar va amaliy AI tizimlarini loyihalaymiz va quramiz.',
  'Three founders. Zero intermediaries. The people who scope your product are the people who architect, build and ship it.': 'Uch asoschi. Nol vositachi. Mahsulotingizni muhokama qiladigan odamlar — uni loyihalaydigan, quradigan va ishga tushiradigan odamlardir.',
  'Founded': 'Tashkil etilgan',
  'Basecamp': 'Baza',
  'Fergana, UZ': 'Farg‘ona, UZ',
  'Engagements': 'Loyihalar',
  '02 / quarter': '02 / chorak',
  'Languages': 'Tillar',
  'Read the studio story': 'Studiya tarixi',
  'Meet the founders': 'Asoschilar bilan tanishing',
  'What we do': 'Nima qilamiz',
  'Small by design.': 'Ataylab kichik.',
  'Accountable by default.': 'Sukut bo‘yicha javobgar.',
  'We keep the studio deliberately small, so the scope, the architecture and the shipped product are owned by the same people.': 'Studiyani ataylab kichik tutamiz — shunda loyiha hajmi, arxitektura va chiqarilgan mahsulot bir xil odamlarga tegishli bo‘ladi.',
  'Mobile ecosystems': 'Mobil ekotizimlar',
  'Native-feeling iOS and Android products on React Native and Expo. Fluid gestures, offline resilience and release discipline that survives the store.': 'React Native va Expo’da native tuyg‘uli iOS va Android mahsulotlari. Silliq jestlar, oflayn bardoshlilik va do‘kon moderatsiyasidan o‘tadigan reliz intizomi.',
  'Capability detail': 'Yo‘nalish tafsiloti',
  'High-performance web': 'Yuqori unumdorlikdagi veb',
  'Corporate platforms, SaaS dashboards and customer portals built on React 19 and edge infrastructure. Fast at the first paint and coherent at the hundredth screen.': 'React 19 va edge infratuzilmasida qurilgan korporativ platformalar, SaaS boshqaruv panellari va mijoz portallari. Birinchi ekranda tez, yuzinchi ekranda ham yaxlit.',
  'Applied AI systems': 'Amaliy AI tizimlari',
  'LLM mentors, RAG pipelines and real-time agents with guardrails, structured outputs and genuine product value — not an API wrapper in a new coat.': 'LLM ustozlar, RAG quvurlari va cheklovlar, tuzilgan javoblar hamda haqiqiy mahsulot qiymatiga ega real vaqt agentlari — yangi qobiqdagi API o‘rami emas.',
  'Selected work': 'Tanlangan ishlar',
  'Our own products.': 'O‘z mahsulotlarimiz.',
  'Then yours.': 'Keyin sizniki.',
  'Two platforms, designed, engineered and operated by the founding team. Each one is live in production.': 'Asoschilar jamoasi tomonidan loyihalangan, qurilgan va boshqariladigan ikkita platforma. Har biri ishlab chiqarishda ishlaydi.',
  '01 / In-house product': '01 / O‘z mahsuloti',
  '02 / In-house product': '02 / O‘z mahsuloti',
  'An AI-guided ascent from school to university.': 'Maktabdan universitetga AI yo‘l ko‘rsatgan sayohat.',
  'A national reading platform, light enough for any phone.': 'Har qanday telefonda ishlaydigan yengil milliy o‘qish platformasi.',
  'Open the work archive': 'Ishlar arxivini ochish',
  '02 platforms live · Fergana, UZ': '02 platforma ishlamoqda · Farg‘ona, UZ',
  "Let's build something": 'Bardosh beradigan',
  'that holds.': 'narsani quramiz.',
  'Tell us what you\'re building, who it\'s for and when it needs to exist. A founder replies personally.': 'Nima qurayotganingizni, kim uchun ekanini va qachon kerakligini ayting. Asoschilardan biri shaxsan javob beradi.',
  'Digital summits, built to hold.': 'Bardosh berishga qurilgan raqamli cho‘qqilar.',
  'Navigate': 'Navigatsiya',
  'Email': 'Email',
  'Careers': 'Karyera',
  'Status': 'Holat',
  'Studio open — building': 'Studiya ochiq — quramiz',
  'Back to top ↑': 'Yuqoriga ↑',
  '© 2026 Nexora Studio. All rights reserved.': '© 2026 Nexora Studio. Barcha huquqlar himoyalangan.',
  'Engineered in Fergana · EN / RU / UZ': 'Farg‘onada ishlab chiqilgan · EN / RU / UZ',
  'Founder-led': 'Asoschilar boshchiligida',

  /* Studio page */
  'No account managers.': 'Akkaunt-menejerlar yo‘q.',
  'No outsourced juniors.': 'Autsors juniorlar yo‘q.',
  'Three founders, on every line. Nexora is a digital engineering studio in Fergana, Uzbekistan — deliberately small, and accountable from the first sketch to production.': 'Har bir satrda uch asoschi. Nexora — Farg‘ona, O‘zbekistondagi raqamli injiniring studiyasi: ataylab kichik va birinchi eskizdan ishlab chiqarishgacha javobgar.',
  'Fergana': 'Farg‘ona',
  'Uzbekistan': 'O‘zbekiston',
  'Start a conversation': 'Suhbatni boshlash',
  'On this page': 'Bu sahifada',
  'About': 'Studiya',
  'History': 'Tarix',
  'Capabilities': 'Imkoniyatlar',
  'Record': 'Ko‘rsatkichlar',
  'Process': 'Jarayon',
  'A studio built around': 'Atrofida qurilgan studiya',
  'accountability.': 'javobgarlik.',
  'Nexora Studio designs and builds mobile applications, high-performance web platforms and applied AI systems — for companies and for products of our own.': 'Nexora Studio kompaniyalar va o‘z mahsulotlarimiz uchun mobil ilovalar, yuqori unumdorlikdagi veb-platformalar va amaliy AI tizimlarini loyihalaydi va quradi.',
  'Our benchmark is not the local market. It is the finest digital work produced anywhere. That standard shows up in architecture, performance and the small details users feel before they can name them.': 'Bizning mezomiz — mahalliy bozor emas. Dunyoning istalgan nuqtasida yaratilgan eng yaxshi raqamli ishlar. Bu standart arxitekturada, unumdorlikda va foydalanuvchilar nomlay olmaydigan mayda detallarda ko‘rinadi.',
  'Zermatt, Switzerland': 'Sermat, Shveytsariya',
  'Alpine standard.': 'Alp standarti.',
  'Central Asian basecamp.': 'Markaziy Osiyodagi baza.',
  'REF. 01 / PRECISION': 'REF. 01 / ANIQLIK',
  'Two products first.': 'Avval ikkita mahsulot.',
  'Then a studio.': 'Keyin studiya.',
  'Nexora did not begin as an agency. It began with products the founders had to design, ship and run themselves.': 'Nexora agentlik sifatida boshlanmagan. U asoschilar o‘zlari loyihalashi, chiqarishi va boshqarishi kerak bo‘lgan mahsulotlar bilan boshlangan.',
  'Origin': 'Boshlanish',
  'The first product': 'Birinchi mahsulot',
  'The three founders built Arise, an AI-guided admissions platform for students in Uzbekistan. A multilingual mentor, a personal roadmap and a mobile product measured in production — not in a pitch deck.': 'Uch asoschi O‘zbekistondagi talabalar uchun AI yo‘l ko‘rsatadigan Arise qabul platformasini qurdi. Ko‘p tilli ustoz, shaxsiy yo‘l xaritasi va taqdimotda emas, ishlab chiqarishda o‘lchangan mobil mahsulot.',
  'Then': 'Keyin',
  'The second platform': 'Ikkinchi platforma',
  'DigitalLib followed: a national reading platform with 713 books, a private academic vault and a lightweight Android app that runs on any phone.': 'Keyin DigitalLib keldi: 713 kitobli milliy o‘qish platformasi, shaxsiy akademik ombor va har qanday telefonda ishlaydigan yengil Android ilovasi.',
  'The collaboration became a studio. Nexora now applies the same standard — strategy, design, engineering and operations under one roof — to a deliberately small number of client projects at a time.': 'Hamkorlik studiyaga aylandi. Endi Nexora xuddi shu standartni — strategiya, dizayn, muhandislik va qo‘llab-quvvatlashni bir joyda — bir vaqtning o‘zida oz sonli mijoz loyihalariga qo‘llaydi.',
  'Today': 'Bugun',
  'Two tracks, one team': 'Ikki yo‘nalish, bitta jamoa',
  'Products and client platforms': 'Mahsulotlar va mijoz platformalari',
  'In-house products and client work share the same founders, the same architecture reviews and the same launch discipline. Nothing is handed to a team you have never met.': 'O‘z mahsulotlarimiz va mijoz ishlari bir xil asoschilarni, bir xil arxitektura ko‘rikdan o‘tkazishlarini va bir xil ishga tushirish intizomini baham ko‘radi. Hech narsa siz ko‘rmagan jamoaga topshirilmaydi.',
  'Three disciplines.': 'Uch yo‘nalish.',
  'One accountable team.': 'Bitta javobgar jamoa.',
  'We keep the studio deliberately small. The people who scope your product are the people who architect, build and ship it.': 'Studiyani ataylab kichik tutamiz. Mahsulotingizni muhokama qiladigan odamlar — uni loyihalaydigan, quradigan va ishga tushiradigan odamlardir.',
  'Android apps shipped': 'Android ilova chiqarildi',
  'Discuss': 'Muhokama',
  'target LCP': 'maqsadli LCP',
  'languages, natively': 'tilda, nativ',
  'Cross-cutting practice': 'Umumiy amaliyot',
  'Design systems · Motion · Art direction · Brand engineering': 'Dizayn tizimlari · Motion · Art-direkshn · Brend injiniringi',
  'Applied to every engagement': 'Har bir loyihada',
  'The record': 'Ko‘rsatkichlar',
  'Measured in production.': 'Ishlab chiqarishda o‘lchangan.',
  'Not in a deck.': 'Taqdimotda emas.',
  'Figures from our shipped products. No projections, no laboratory conditions — the numbers our users actually experience.': 'Chiqarilgan mahsulotlarimizdan olingan raqamlar. Prognozlar va laboratoriya sharoitlari yo‘q — foydalanuvchilar haqiqatda his qiladigan ko‘rsatkichlar.',
  'Books in the DigitalLib catalogue': 'DigitalLib katalogidagi kitoblar',
  '686 in Uzbek': '686 tasi o‘zbek tilida',
  'Verified questions in the knowledge arena': 'Bilim maydonidagi tasdiqlangan savollar',
  'Chapter by chapter': 'Bobma-bob',
  'Lightweight Android APK': 'Yengil Android APK',
  'Offline-ready': 'Oflayn tayyor',
  'Languages Ari speaks': 'Ari gaplashadigan tillar',
  'EN · RU · UZ': 'EN · RU · UZ',
  'Fleet': 'Park',
  '02 products live': '02 mahsulot ishlamoqda',
  'Response': 'Javob',
  '< 24 hours': '< 24 soat',
  '02 per quarter': '02 / chorak',
  'A short route': 'Qisqa yo‘l',
  'from brief to production.': 'briefdan ishlab chiqarishgacha.',
  'Four stages, no relay race. The founders stay on the project from the first sketch to the release and beyond.': 'To‘rt bosqich, estafetasiz. Asoschilar birinchi eskizdan relizgacha va undan keyin ham loyihada qoladi.',
  'Deep strategy': 'Chuqur strategiya',
  'We dissect the product, the audience and the constraint that matters. The output is a route, not a wish list.': 'Mahsulotni, auditoriyani va muhim cheklovni tahlil qilamiz. Natija — istaklar ro‘yxati emas, yo‘l xaritasi.',
  '1–2 weeks': '1–2 hafta',
  'Blueprint & architecture': 'Blyuprint va arxitektura',
  'Clickable screens, a design system and a system architecture you can interrogate before a line of code is written.': 'Kod yozilishidan oldin tekshirish mumkin bo‘lgan kliklanadigan ekranlar, dizayn tizimi va tizim arxitekturasi.',
  '2–3 weeks': '2–3 hafta',
  'Engineering sprints': 'Injiniring sprintlari',
  'Two-week cycles with working builds on your phone and a live staging environment. You review the product, not a status deck.': 'Telefoningizdagi ishlaydigan buildlar va jonli staging bilan ikki haftalik sikllar. Siz mahsulotni ko‘rasiz, status-deck emas.',
  'Continuous': 'Uzluksiz',
  'Launch & altitude': 'Ishga tushirish va balandlik',
  'Store deployment, monitoring and measured iteration. We stay responsible after the invoice — as we do on our own products.': 'Do‘konga joylash, monitoring va o‘lchangan iteratsiyalar. Hisob-fakturadan keyin ham mas’ul bo‘lib qolamiz — o‘z mahsulotlarimizdagidek.',
  'Beyond launch': 'Ishga tushirishdan keyin',
  'Next': 'Keyingi',
  'Bring us the product': 'Bardosh berishi shart bo‘lgan',
  'that has to hold.': 'mahsulotni keltiring.',
  'Every project is scoped directly with the founders. Tell us what needs to exist and when.': 'Har bir loyiha to‘g‘ridan-to‘g‘ri asoschilar bilan kelishiladi. Nima va qachon kerakligini ayting.',

  /* Work page */
  'Products we built,': 'Biz qurgan mahsulotlar,',
  'shipped and still run.': 'ishga tushirilgan va hanuz boshqariladi.',
  'Two platforms of our own, designed, engineered and operated by the founding team. The imagery below is from the live products.': 'Asoschilar jamoasi tomonidan loyihalangan, qurilgan va boshqariladigan ikkita o‘z platformamiz. Quyidagi tasvirlar jonli mahsulotlardan olingan.',
  'Platforms live': 'Platformalar ishlamoqda',
  'Shipped': 'Ishga tushirilgan',
  'In-house': 'O‘zimizniki',
  'Products': 'Mahsulotlar',
  'Open the case studies': 'Keyslarni ochish',
  'A study and career-guidance ecosystem for students. Arise pairs university matching with Ari, a multilingual AI mentor that turns an ambition into a weekly route.': 'Talabalar uchun o‘qish va karyera yo‘naltirish ekotizimi. Arise universitet tanlashni Ari — ambitsiyani haftalik yo‘lga aylantiruvchi ko‘p tilli AI ustoz bilan birlashtiradi.',
  "A personal admissions roadmap, built around the student's target university": 'Talabaning maqsadli universiteti atrofida qurilgan shaxsiy qabul yo‘l xaritasi',
  'Ari — a mentor fluent in English, Russian and Uzbek': 'Ari — ingliz, rus va o‘zbek tillarida erkin gapiradigan ustoz',
  'Skill trees, streak rituals and milestone tracking that make progress visible': 'Taraqqiyotni ko‘rinadigan qiladigan ko‘nikma daraxtlari, seriya ritualari va bosqich kuzatuvi',
  'Platform': 'Platforma',
  'Open case study': 'Keysni ochish',
  'A digital reading hub for Uzbek literature and academic material. A private vault, an adaptive reader with TTS, and a gamified knowledge arena — fast on the connections people actually have.': 'O‘zbek adabiyoti va akademik materiallar uchun raqamli o‘qish markazi. Shaxsiy ombor, TTS bilan moslashuvchan o‘quvchi va o‘yinlashtirilgan bilim maydoni — odamlarda mavjud aloqalarda tez.',
  '713-book catalogue with instant in-browser reading': '713 kitobli katalog, brauzerda bir zumda o‘qish',
  'Personal private vault for syllabi, notes and PDFs': 'Sillabus, eslatma va PDF uchun shaxsiy ombor',
  'Alif AI librarian for recommendations, summaries and study plans': 'Tavsiyalar, konspektlar va o‘quv rejalari uchun Alif AI kutubxonachisi',
  'Books': 'Kitoblar',
  'Quiz questions': 'Viktorina savollari',
  'Both platforms are live and operated by Nexora Studio.': 'Ikkala platforma ham ishlaydi va Nexora Studio tomonidan boshqariladi.',
  'See how we work': 'Qanday ishlashimizni ko‘ring',
  'Your product': 'Sizning mahsulotingiz',
  'could be next.': 'keyingisi bo‘lishi mumkin.',
  'We take on a small number of client projects at a time. If the standard fits, tell us what you are building.': 'Bir vaqtda faqat bir nechta mijoz loyihasini olamiz. Agar standart mos kelsa, nima qurayotganingizni ayting.',
  'Year': 'Yil',
  'Role': 'Rol',
  'Design, engineering, AI': 'Dizayn, injiniring, AI',
  "Arise is a study and career-guidance ecosystem for students in Uzbekistan. It connects a student's ambition to a concrete route: university matching, skill-building and an AI mentor who knows the path.": 'Arise — O‘zbekistondagi talabalar uchun o‘qish va karyera yo‘naltirish ekotizimi. U talabaning ambitsiyasini aniq yo‘lga bog‘laydi: universitet tanlash, ko‘nikma oshirish va yo‘lni biladigan AI ustoz.',
  "Ari, the platform's multilingual mentor, constructs milestones around each goal and stays inside the product's guardrails. The result is guidance that feels personal without inventing facts.": 'Platformaning ko‘p tilli ustoz Ari har bir maqsad atrofida bosqichlar quradi va mahsulot cheklovlari doirasida qoladi. Natija — faktlarni o‘ylab topmasdan, shaxsiy tuyuladigan yo‘l-yo‘riq.',
  'Personal admissions roadmap, matched to dream universities': 'Orzudagi universitetlarga moslangan shaxsiy qabul yo‘l xaritasi',
  'Gamified skill trees, streak rituals and milestone tracking': 'O‘yinlashtirilgan ko‘nikma daraxtlari, seriya ritualari va bosqich kuzatuvi',
  'Native mobile performance with offline resilience': 'Oflayn bardoshlilikka ega nativ mobil unumdorlik',
  'First run — meet Ari': 'Birinchi ishga tushirish — Ari bilan tanishing',
  'Skill tree and milestones': 'Ko‘nikma daraxti va bosqichlar',
  'Ari — conversational mentor': 'Ari — suhbatdosh ustoz',
  'Planning an education, health or AI product?': 'Ta’lim, sog‘liq yoki AI mahsulotini rejalashtiryapsizmi?',
  'Talk to the founders': 'Asoschilar bilan gaplashing',
  'Catalogue': 'Katalog',
  '713 books': '713 kitob',
  'Digital reading in Central Asia was split between disordered Telegram channels and archaic portals that were never built for a phone. DigitalLib replaces both with one coherent reading space.': 'Markaziy Osiyoda raqamli o‘qish tartibsiz Telegram kanallari va hech qachon telefon uchun qurilmagan arxaik portallar o‘rtasida bo‘lingan edi. DigitalLib ikkalasini ham bitta yaxlit o‘qish maydoni bilan almashtiradi.',
  'The platform combines a verified national catalogue, a private academic vault, an adaptive reader with text-to-speech, and an arena of chapter-level quizzes. It is fast enough to work where the network is not.': 'Platforma tasdiqlangan milliy katalogni, shaxsiy akademik omborni, matnni ovozga aylantiruvchi moslashuvchan o‘quvchini va boblar bo‘yicha viktorina maydonini birlashtiradi. Tarmoq yo‘q joyda ishlay oladigan darajada tez.',
  'Instant in-browser reading without filling device storage': 'Qurilma xotirasini to‘ldirmasdan brauzerda bir zumda o‘qish',
  'Private vault for syllabi, notes and PDFs': 'Sillabus, eslatma va PDF uchun shaxsiy ombor',
  'Alif AI librarian — recommendations, summaries and study plans': 'Alif AI kutubxonachisi — tavsiyalar, konspektlar va o‘quv rejalari',
  '1,256 verified quiz questions with XP and reader ranks': 'XP va o‘quvchi darajalari bilan 1 256 tasdiqlangan viktorina savoli',
  '7.05 MB Android APK, built for low-bandwidth regions': 'Kam tarmoqli hududlar uchun qurilgan 7,05 MB Android APK',
  'Library & private vault': 'Kutubxona va shaxsiy ombor',
  'Adaptive reader and TTS': 'Moslashuvchan o‘quvchi va TTS',
  'Alif AI librarian': 'Alif AI kutubxonachisi',
  'Building a platform for a market that has been underserved?': 'E’tibordan chetda qolgan bozor uchun platforma qurayapsizmi?',

  /* Team page */
  'Founders': 'Asoschilar',
  'The people': 'Har bir kod satrida',
  'on every line of code.': 'turgan odamlar.',
  'Three partners across systems, machine learning and design. No account layer, no hand-offs to a team you have never met.': 'Tizimlar, mashina o‘rganish va dizayn bo‘yicha uch hamkor. Akkaunt qatlamisiz va hech qachon ko‘rmagan jamoaga topshirishsiz.',
  'Partners': 'Hamkorlar',
  'Open seat': 'Ochiq o‘rin',
  'Apply to the studio': 'Studiyaga ariza topshirish',
  'Co-founder · CTO': 'Hamkor · CTO',
  'Co-founder · CAIO': 'Hamkor · CAIO',
  'Systems architecture, mobile engineering and cloud operations. Architect of the Arise platforms.': 'Tizim arxitekturasi, mobil injiniring va bulut operatsiyalari. Arise platformalarining arxitektori.',
  'Applied machine learning, LLM mentors and retrieval systems. Architect of Ari, the mentor inside Arise.': 'Amaliy mashina o‘rganish, LLM ustozlar va retrieval tizimlari. Arise ichidagi Ari ustozining arxitektori.',
  'Co-founder · Design': 'Hamkor · Dizayn',
  'Product design, art direction and design systems. Directs the tactile feel and visual identity of every product.': 'Mahsulot dizayni, art-direkshn va dizayn tizimlari. Har bir mahsulotning taktil hissi va vizual identifikatsiyasini boshqaradi.',
  'Selective hiring': 'Tanlab yollash',
  'Exceptional': 'Ajoyib',
  'builders.': 'quruvchilar.',
  'We hire masters of their craft, not seats to fill. If your work is undeniable, show us.': 'Biz o‘z ishining ustalarini yollaymiz, bo‘sh o‘rinlarni to‘ldirmaymiz. Ishingiz inkor etib bo‘lmaydigan bo‘lsa — ko‘rsating.',
  '“We don\'t ship demos. We ship products we are willing to put': '«Biz demo chiqarmaymiz. Biz shunday mahsulotlarni chiqaramizki, ularga',
  'our names': 'o‘z ismimizni',
  'on.”': 'qo‘yishga tayyormiz».',
  'Nexora Studio — founding principle': 'Nexora Studio — asosiy tamoyil',
  'Work with us': 'Biz bilan ishlang',
  'Talk to the people': 'Uni quradigan',
  'who will build it.': 'odamlar bilan gaplashing.',
  'Every conversation starts with a founder. Tell us what you are building and who it has to serve.': 'Har bir suhbat asoschi bilan boshlanadi. Nima qurayotganingizni va kimga xizmat qilishini ayting.',

  /* Contact page */
  '< 24h': '< 24 soat',
  'Reply time': 'Javob vaqti',
  'Capacity': 'Quvvat',
  'Fergana local time —': 'Farg‘ona mahalliy vaqti —',
  'Copy': 'Nusxalash',
  'Copied': 'Nusxalandi',
  'Email address copied to clipboard.': 'Email manzil nusxalandi.',
  'Could not copy the email address.': 'Email manzilni nusxalab bo‘lmadi.',
  'Fast and personal': 'Tez va shaxsan',
  'Directly from the founders': 'To‘g‘ridan-to‘g‘ri asoschilardan',
  'A few projects at a time': 'Bir vaqtda bir nechta loyiha',
  'Booked selectively': 'Tanlab band qilinadi',
  'Send us': 'Bizga yuboring',
  'Scope · Timeline · Goals': 'Hajm · Muddat · Maqsadlar',
  'A short brief is enough': 'Qisqa brif yetarli',
  'What happens next': 'Keyin nima bo‘ladi',
  'How a project': 'Loyiha qanday',
  'starts here.': 'boshlanadi.',
  'No sales layer and no discovery theatre. Three steps to know whether we are the right studio for the work.': 'Sotuv bo‘limi va diskaveri teatri yo‘q. Bu ish uchun mos studiyamisiz — bilish uchun uch qadam.',
  'You write': 'Siz yozasiz',
  'A short brief is enough: what you are building, who it serves and when it needs to exist.': 'Qisqa brif yetarli: nima qurayotganingiz, kimga xizmat qilishi va qachon kerakligi.',
  'We reply': 'Biz javob beramiz',
  'Directly from a founder. We will tell you what we understood, what is unclear, and whether the fit is right.': 'Bevosita asoschidan. Nimani tushunganimizni, nima noaniqligini va bir-birimizga mos kelishimizni aytamiz.',
  'A route': 'Yo‘l xaritasi',
  'A 30-minute call and a scoped plan: architecture, stages, timeline and cost — before any engagement begins.': '30 daqiqalik qo‘ng‘iroq va aniq reja: arxitektura, bosqichlar, muddat va narx — ish boshlanishidan oldin.',
  'See what we have shipped': 'Nima ishga tushirganimizni ko‘ring',
  'Founder-led · Fergana, Uzbekistan': 'Asoschilar boshchiligida · Farg‘ona, O‘zbekiston',
  'In-house product / 01': 'O‘z mahsuloti / 01',
  'In-house product / 02': 'O‘z mahsuloti / 02',

  /* Journal */
  'Notes from': 'Yozuvlar',
  'the ascent.': 'cho‘qqidan.',
  'Field notes from the founders on performance, applied AI and keeping a studio small enough to stay accountable. No growth hacks, no predictions — only what we measured.': 'Asoschilarning unumdorlik, amaliy AI va studiyani javobgar qolish uchun yetarlicha kichik tutish haqidagi yozuvlari. Growth-hacklar va prognozlar yo‘q — faqat o‘lchagan narsalarimiz.',
  'Entries': 'Yozuv',
  'Oct 2026': 'Okt. 2026',
  'Last update': 'Oxirgi yangilanish',
  'Written by the founders': 'Asoschilar tomonidan yozilgan',
  'Engineering': 'Injiniring',
  'The 7 MB constraint': '7 MB cheklovi',
  'Guardrails before magic': 'Cheklovlar sehrdan oldin',
  'Two engagements per quarter': 'Har chorakda ikki loyiha',
  '01 · Engineering · October 2026 · 6 min read': '01 · Injiniring · Oktyabr 2026 · 6 daqiqa o‘qish',
  '02 · Applied AI · October 2026 · 5 min read': '02 · Amaliy AI · Oktyabr 2026 · 5 daqiqa o‘qish',
  '03 · Studio · September 2026 · 4 min read': '03 · Studiya · Sentabr 2026 · 4 daqiqa o‘qish',
  'DigitalLib ships as a 7.05 MB Android build. That number was not a compression pass at the end; it was a budget we defended from the first commit.': 'DigitalLib 7,05 MB Android build sifatida chiqadi. Bu raqam oxiridagi siqish emas; birinchi commitdan himoya qilgan byudjetimiz.',
  'The easy version of a reading platform is a browser wrapped around a CDN. It looks finished on a fast connection and falls apart on the connection most students actually have. We started from the opposite direction: a device from 2019, a metered data plan and a campus where the Wi-Fi drops between buildings.': 'O‘qish platformasining oson varianti — CDN atrofidagi brauzer. Tez aloqada tugallangan ko‘rinadi va ko‘pchilik talabalarda mavjud aloqada buziladi. Biz qarama-qarshi tomondan boshladik: 2019-yilgi qurilma, limitli tarif va binolar orasida Wi-Fi yo‘qoladigan kampus.',
  'Every dependency had to justify its kilobytes. We kept the reader in the platform WebView, streamed chapters instead of preloading the catalogue, and cached only the pages a reader had actually opened. Analytics, crash reporting and A/B tooling — the default cargo of a modern app — were replaced with a single lightweight event pipe we could reason about.': 'Har bir bog‘liqlik o‘z kilobaytlarini oqlashi kerak edi. O‘quvchini platforma WebView’ida qoldirdik, katalogni oldindan yuklash o‘rniga boblarni stream qildik va faqat o‘quvchi haqiqatan ochgan sahifalarni keshladik. Analitika, crash-reporting va A/B vositalari — zamonaviy ilovaning standart yuki — biz to‘liq tushunadigan bitta yengil event oqimi bilan almashtirildi.',
  'Performance is a product decision,': 'Unumdorlik — bu mahsulot qarori,',
  'not a cleanup task.': 'oxiridagi tozalash emas.',
  'The result is a build a student can download on mobile data without thinking about it. The lesson is not that small is always better. It is that the constraint belongs in the architecture, not in the release checklist.': 'Natijada talaba mobil internetda o‘ylamasdan yuklab oladigan build. Saboq kichik har doim yaxshiroq degani emas. Cheklov reliz cheklistida emas, arxitekturada yashashi kerak.',
  'The reader stays in the platform WebView; the catalogue streams on demand.': 'O‘quvchi platforma WebView’ida qoladi; katalog talab bo‘yicha yuklanadi.',
  'Covers are generated as responsive AVIF and WebP at build time.': 'Muqovalar build vaqtida moslashuvchan AVIF va WebP sifatida yaratiladi.',
  'No third-party SDK sits in the critical path.': 'Kritik yo‘lda uchinchi tomon SDK yo‘q.',
  '— Makhmud Nasriddinov, systems': '— Makhmud Nasriddinov, tizimlar',
  'Ari is the mentor inside Arise. The hardest part was not making it sound intelligent — it was keeping it honest about what it knows.': 'Ari — Arise ichidagi ustoz. Eng qiyini uni aqlli ko‘rsatish emas, bilganlari haqida halol qolish edi.',
  'Students ask direct questions: which university, which subject, which deadline. A fluent answer that invents a scholarship is worse than no answer at all. So Ari is built around retrieval first and generation second. University facts, deadlines and requirements come from a verified catalogue; the model composes the route, not the facts.': 'Talabalar aniq savollar beradi: qaysi universitet, qaysi fan, qaysi muddat. To‘qib yasalgan stipendiya haqidagi ravon javob umuman javob bermaslikdan yomonroq. Shuning uchun Ari avval retrieval, keyin generatsiya atrofida qurilgan. Universitet faktlari, muddatlar va talablar tasdiqlangan katalogdan olinadi; model faktlarni emas, yo‘lni tuzadi.',
  'Every response is constrained to a structured shape — a next step, a reason, a source. When the catalogue has no answer, Ari says so and offers the closest verified path. That refusal style was designed before the first prompt was written.': 'Har bir javob tuzilgan shaklga bog‘langan — keyingi qadam, sabab, manba. Katalogda javob bo‘lmasa, Ari shuni aytadi va eng yaqin tasdiqlangan yo‘lni taklif qiladi. Rad etish uslubi birinchi promptdan oldin loyihalangan.',
  'A mentor that admits the gap is more useful than one that': 'Bo‘shliqni tan olgan ustoz, uni',
  'fills it with noise.': 'shovqin bilan to‘ldirganidan foydaliroq.',
  'Multilingual support is not a translation layer on top. English, Russian and Uzbek prompts share the same structured contract, and the mentor answers in the language the student used — including the mixed language students actually type.': 'Ko‘p tillilik — ustiga qo‘yilgan tarjima qatlami emas. Ingliz, rus va o‘zbek promptlari bir xil tuzilgan kontraktni baham ko‘radi va ustoz talaba ishlatgan tilda javob beradi — talabalar haqiqatda yozadigan aralash tilni ham.',
  '— Nurahmadov Xayrullo, machine learning': '— Nurahmadov Xayrullo, mashina o‘rganish',
  'Capacity is not a sales constraint. It is the mechanism that keeps the people who scope your product on the line that ships it.': 'Quvvat — sotuv cheklovi emas. Bu mahsulotingizni muhokama qilgan odamlarni uni chiqaradigan liniyada ushlab turadigan mexanizm.',
  'Nexora is three founders and no account layer. That sentence is easy to print and hard to operate. The only way to keep it true is to bound the number of things happening at once.': 'Nexora — uch asoschi va akkaunt qatlamisiz. Bu gapni chop etish oson, amalda ushlab turish qiyin. Uni haqiqiy saqlashning yagona yo‘li — bir vaqtda bo‘layotgan ishlar sonini cheklash.',
  'Two client engagements per quarter is a deliberate ceiling. It leaves room for architecture reviews, for the unglamorous week where a release is stabilised, and for our own platforms — Arise and DigitalLib — which we still run ourselves.': 'Har chorakda ikkita mijoz loyihasi — ataylab qo‘yilgan shift. U arxitektura ko‘riklari, relizni barqarorlashtirishning ko‘rimsiz haftasi va hanuz o‘zimiz boshqaradigan platformalarimiz — Arise va DigitalLib — uchun joy qoldiradi.',
  'A small studio is not a boutique aesthetic. It is an': 'Kichik studiya — butik estetikasi emas. Bu',
  'operating constraint.': 'operatsion cheklov.',
  'It also makes the first conversation honest. If the timing does not fit, we say so instead of hiring a team you have never met to carry the work. The studio stays small because the alternative is a promise we cannot keep.': 'Bu birinchi suhbatni ham halol qiladi. Vaqt mos kelmasa, shuni aytamiz — ishni ko‘tarish uchun siz hech qachon ko‘rmagan jamoa yollamaymiz. Studiya kichik qoladi, chunki alternativa — bajara olmaydigan va’damiz.',
  '— Abduraximov Nizomiddin, design': '— Abduraximov Nizomiddin, dizayn',
  'Bring us the next one': 'Keyingisini keltiring',
  'built to hold.': 'bardosh berishga qurilgan.',
  'Every project is scoped directly with the founders. Tell us what you\'re building and when it needs to exist.': 'Har bir loyiha to‘g‘ridan-to‘g‘ri asoschilar bilan kelishiladi. Nima qurayotganingizni va qachon kerakligini ayting.',

  /* Contact form */
  'Start a brief': 'Loyihani boshlang',
  'Fields marked * are required': '* bilan belgilangan maydonlar majburiy',
  'Name *': 'Ism *',
  'Email *': 'Email *',
  'Company': 'Kompaniya',
  'Project type': 'Loyiha turi',
  'Budget': 'Byudjet',
  'Project *': 'Loyiha *',
  'Your name': 'Ismingiz',
  'Where you work': 'Qayerda ishlaysiz',
  'What are we building? Scope, users, timeline.': 'Nima quryapmiz? Ko‘lam, foydalanuvchilar, muddat.',
  'Select one': 'Tanlang',
  'Web platform': 'Veb-platforma',
  'Mobile app': 'Mobil ilova',
  'AI product': 'AI mahsulot',
  'Brand & site': 'Brend va sayt',
  'Something else': 'Boshqa',
  'Not sure yet': 'Hali aniq emas',
  'Under $5k': '$5k gacha',
  'Send brief': 'Brif yuborish',
  'A founder replies personally. No newsletter, ever.': 'Asoschi shaxsan javob beradi. Hech qanday xatlar yo‘q.',
  'Sending your brief…': 'Brif yuborilmoqda…',
  'Sending…': 'Yuborilmoqda…',
  'Please check the highlighted fields.': 'Belgilangan maydonlarni tekshiring.',
  'Your brief is with us. A founder will reply personally.': 'Brifingiz bizda. Asoschi sizga shaxsan javob beradi.',
  'Too many briefs from this address. Try again in a few minutes.': 'Bu manzildan juda ko‘p brif yuborildi. Bir necha daqiqadan so‘ng urinib ko‘ring.',
  'Something went wrong. Write to support@nexorastudio.world instead.': 'Xatolik yuz berdi. support@nexorastudio.world manziliga yozing.',
  'Already a client? Open the client portal': 'Allaqachon mijozmisiz? Mijoz portalini oching',

  /* Client portal */
  'Client portal': 'Mijoz portali',
  'Welcome back,': 'Xush kelibsiz,',
  'Enter your email and access code.': 'Email va kirish kodini kiriting.',
  'Try again': 'Qayta urinib ko‘ring',
  'Your project,': 'Loyihangiz,',
  'in one place.': 'bir joyda.',
  'Sign in with the email and one-time code your studio contact sent you.': 'Studiyadagi kontaktingiz yuborgan email va bir martalik kod bilan kiring.',
  'Access code': 'Kirish kodi',
  'Open portal': 'Portalni ochish',
  'Need access? Ask your studio contact at Nexora for a new code.': 'Kirish kerakmi? Nexoradagi kontaktingizdan yangi kod so‘rang.',
  'Private area for Nexora clients.': 'Nexora mijozlari uchun yopiq hudud.',
  'Signing in…': 'Kirilmoqda…',
  'That email and code do not match. Check the code or ask for a new one.': 'Email va kod mos kelmadi. Kodni tekshiring yoki yangisini so‘rang.',
  'Sign out': 'Chiqish',
  'Back to site': 'Saytga qaytish',
  'Projects': 'Loyihalar',
  'Updates': 'Yangilanishlar',
  'Files': 'Fayllar',
  'Invoices': 'Hisob-fakturalar',
  'No projects yet.': 'Hozircha loyiha yo‘q.',
  'No updates yet.': 'Hozircha yangilanish yo‘q.',
  'No files yet.': 'Hozircha fayl yo‘q.',
  'No invoices yet.': 'Hozircha hisob-faktura yo‘q.',
  'Download': 'Yuklab olish',
  'Due': 'To‘lov muddati',
  'Issued': 'Berilgan',
  'Invoice': 'Hisob-faktura',
  'Amount': 'Summa',
  'Progress': 'Tayyorlik',
  'Target': 'Maqsad',
  'Started': 'Boshlangan',
  'Discovery': 'Tadqiqot',
  'In build': 'Qurilmoqda',
  'In review': 'Tekshiruvda',
  'Live': 'Ishga tushgan',
  'Paused': 'To‘xtatilgan',
  'Draft': 'Qoralama',
  'Sent': 'Yuborilgan',
  'Paid': 'To‘langan',
  'Overdue': 'Muddati o‘tgan',
  'Session expired. Sign in again.': 'Sessiya tugadi. Qaytadan kiring.',
  'Could not load your workspace. Try again.': 'Ish maydoni yuklanmadi. Qaytadan urinib ko‘ring.',
  'Downloading…': 'Yuklanmoqda…',
  'This file is not ready yet.': 'Fayl hali tayyor emas.',
  'Download failed. Try again.': 'Yuklab bo‘lmadi. Qaytadan urinib ko‘ring.',
  'Your studio contact': 'Studiyadagi kontaktingiz',
  'Signed in as': 'Kirgan foydalanuvchi',
  'No updates yet — the first one lands after kick-off.': 'Hozircha yangilanish yo‘q — birinchisi startdan keyin paydo bo‘ladi.',
  'Files shared by the studio will appear here.': 'Studiya ulashgan fayllar shu yerda paydo bo‘ladi.',
  'Invoices will appear here once issued.': 'Hisob-fakturalar berilgach shu yerda paydo bo‘ladi.',
};

const DICT = { ru: RU, uz: UZ };

/* --------------------------------------------------------------------------
   State
   -------------------------------------------------------------------------- */

const SKIP = [
  '.sr-only',
  '.loader',
  '.cursor',
  '.scroll-progress',
  '.site-footer__word',
  '.grid-frame',
  '[data-clock]',
  '[data-no-i18n]',
  '.lang-switch',
  'script',
  'style',
  'canvas',
  'svg',
  'noscript',
].join(',');

let current = 'en';
const originals = new WeakMap();

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function readLang() {
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.includes(param)) return param;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch (error) { /* private mode */ }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : 'en';
}

function preserveWhitespace(raw, translation) {
  const lead = raw.match(/^\s*/)[0];
  const trail = raw.match(/\s*$/)[0];
  return lead + translation + trail;
}

function translateTree(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest(SKIP)) return NodeFilter.FILTER_REJECT;
      return /\p{L}/u.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    let original = originals.get(node);
    if (original === undefined) {
      original = node.nodeValue;
      originals.set(node, original);
    }
    const key = normalize(original);
    if (!key) return;
    const table = DICT[current];
    const translated = table && table[key];
    node.nodeValue = translated ? preserveWhitespace(original, translated) : original;
  });
}

function translateAttributes(root) {
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const pairs = el.getAttribute('data-i18n-attr').split(';');
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part && part.trim());
      if (!attr || !key) return;
      if (!el.dataset[`i18nOrig${attr}`]) el.dataset[`i18nOrig${attr}`] = el.getAttribute(attr) || '';
      const table = DICT[current];
      const value = table && table[key];
      el.setAttribute(attr, value || el.dataset[`i18nOrig${attr}`]);
    });
  });
}

function pageName() {
  const file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (file === '' || file === 'index.html') return 'index';
  return file.replace(/\.html$/, '');
}

function applyMeta() {
  const table = META[current] || META.en;
  const meta = table[pageName()] || META.en[pageName()];
  if (!meta) return;
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.desc);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', meta.title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', meta.desc);
}

function syncSwitchers() {
  document.querySelectorAll('button[data-lang]').forEach((button) => {
    const active = button.getAttribute('data-lang') === current;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
  });
  document.querySelectorAll('[data-lang-group]').forEach((group) => {
    group.setAttribute('aria-label', current === 'ru' ? 'Язык' : current === 'uz' ? 'Til' : 'Language');
  });
}

export function t(key) {
  const table = DICT[current];
  return (table && table[key]) || key;
}

export function getLang() {
  return current;
}

/* Set a data-i18n key on an element so later language switches stay correct. */
export function setText(el, key) {
  if (!el) return;
  el.dataset.i18n = key;
  el.textContent = t(key);
}

export function setLang(next, options = {}) {
  if (!SUPPORTED.includes(next) || next === current && !options.force) {
    if (next === current) return;
    return;
  }
  current = next;
  document.documentElement.lang = next;
  document.documentElement.dataset.lang = next;
  try { window.localStorage.setItem(STORAGE_KEY, next); } catch (error) { /* noop */ }
  translateTree(document.body);
  translateAttributes(document);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.textContent;
    el.textContent = t(el.dataset.i18n);
  });
  applyMeta();
  syncSwitchers();
  window.dispatchEvent(new CustomEvent('nexora:lang', { detail: { lang: next } }));
}

function bindSwitchers() {
  document.addEventListener('click', (event) => {
    // Only real switcher buttons: <html> also carries data-lang, and matching it
    // would cancel every click on the page (links, submit buttons).
    const button = event.target.closest('button[data-lang]');
    if (!button) return;
    const next = button.getAttribute('data-lang');
    if (!SUPPORTED.includes(next)) return;
    event.preventDefault();
    setLang(next);
  });
}

/* Re-translate content injected after load (dialogs, forms, portal views). */
export function translateDynamic(root = document.body) {
  translateTree(root);
  translateAttributes(root);
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.textContent;
    el.textContent = t(el.dataset.i18n);
  });
}

current = readLang();
document.documentElement.lang = current;
document.documentElement.dataset.lang = current;
translateTree(document.body);
translateAttributes(document);
document.querySelectorAll('[data-i18n]').forEach((el) => {
  if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.textContent;
  el.textContent = t(el.dataset.i18n);
});
applyMeta();
syncSwitchers();
bindSwitchers();
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY && SUPPORTED.includes(event.newValue)) setLang(event.newValue, { force: true });
});
