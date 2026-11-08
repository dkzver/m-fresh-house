import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DraftingCompass,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const projects = [
  { image: `${import.meta.env.BASE_URL}projects/project-05.jpg`, tag: "Современная классика", title: "Дом с панорамной гостиной" },
  { image: `${import.meta.env.BASE_URL}projects/project-06.jpg`, tag: "Загородный дом", title: "Проект для большой семьи" },
  { image: `${import.meta.env.BASE_URL}projects/project-09.jpg`, tag: "Минимализм", title: "Дом с плоской кровлей" },
  { image: `${import.meta.env.BASE_URL}projects/project-11.jpg`, tag: "Мансардный дом", title: "Компактный семейный дом" },
  { image: `${import.meta.env.BASE_URL}projects/project-12.jpg`, tag: "Городской дом", title: "Дом с гаражом" },
  { image: `${import.meta.env.BASE_URL}projects/project-13.jpg`, tag: "Европейский стиль", title: "Светлый дом с мансардой" },
  { image: `${import.meta.env.BASE_URL}projects/project-18.jpg`, tag: "Классика", title: "Загородная резиденция" },
];

const prices = [
  {
    eyebrow: "Готовый проект",
    price: "45 000 ₽",
    text: "Выбор из 400+ готовых решений с зеркальным вариантом.",
    items: ["Архитектурно-строительный альбом", "Изменение планировки", "Генплан участка в подарок"],
  },
  {
    eyebrow: "Доработка проекта",
    price: "60 000 ₽",
    text: "Адаптируем понравившийся дом под семью, участок и материал стен.",
    items: ["Планы и фасады утверждаем сразу", "Полный комплект чертежей", "Срок 7–15 дней"],
    featured: true,
  },
  {
    eyebrow: "Индивидуальный проект",
    price: "100 000 ₽",
    text: "Создадим дом с нуля — от первых планировок до точной визуализации.",
    items: ["Несколько вариантов планировок", "Проработка фасадов и объёма", "Срок 30–45 дней"],
  },
];

const reviews = [
  {
    text: "Абсолютно доволен процессом и результатом! Было предложено 7 вариантов планировок и 4 варианта отделки фасада. Рекомендую.",
    name: "Олег",
    meta: "Дом 290 м² · Садгород",
  },
  {
    text: "Работа выполнена вовремя, в полном объёме. Очень понравилось сотрудничество. Буду советовать партнёрам.",
    name: "Борис",
    meta: "Дом 220 м² · Радово-2",
  },
  {
    text: "Очень быстро, всё в обещанные сроки. Все пожелания учтены. Спасибо! Буду рекомендовать соседям.",
    name: "Наталья",
    meta: "Дом 270 м² · Соловей Ключ",
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="M-FRESH, на главную">
      <span className="logo-mark">M</span>
      <span className="logo-copy"><b>M—FRESH</b><small>архитектурная мастерская</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = projectIndex === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [projectIndex]);

  const closeMenu = () => setMenuOpen(false);
  const previousProject = () => setProjectIndex((projectIndex - 1 + projects.length) % projects.length);
  const nextProject = () => setProjectIndex((projectIndex + 1) % projects.length);

  return (
    <main id="top">
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Основная навигация">
            <a href="#projects" onClick={closeMenu}>Проекты</a>
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#about" onClick={closeMenu}>О нас</a>
            <a href="#reviews" onClick={closeMenu}>Отзывы</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
          </nav>
          <a className="header-phone" href="tel:+79242586058">+7 924 258-60-58</a>
          <a className="button button-small header-cta" href="#contacts">Обсудить проект</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Проектируем с 2005 года</div>
            <h1>Дом, в котором всё <em>на своём месте</em></h1>
            <p>Готовые и индивидуальные проекты современных коттеджей. Продумываем архитектуру, конструктив и посадку дома на участке.</p>
            <div className="hero-actions">
              <a className="button" href="#projects">Смотреть проекты <ArrowDownRight size={19} /></a>
              <a className="text-link" href="#contacts">Подобрать проект бесплатно <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={`${import.meta.env.BASE_URL}projects/project-09.jpg`} alt="Проект современного дома M-FRESH с плоской кровлей" />
            <div className="hero-stamp"><Sparkles size={20} /><b>Свежий взгляд</b><span>Новые решения</span></div>
            <div className="hero-note"><span>01</span><p>Доработаем готовый проект <b>за 7–15 дней</b></p></div>
          </div>
        </div>
        <div className="container trust-row">
          <div><b>400+</b><span>готовых проектов</span></div>
          <div><b>350</b><span>индивидуальных домов</span></div>
          <div><b>190</b><span>домов построено</span></div>
          <div><b>1100</b><span>визуализаций фасадов</span></div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span></span> Выбранные работы</div>
              <h2>Архитектура для <em>реальной жизни</em></h2>
            </div>
            <p>Каждый дом начинается с образа жизни семьи. Мы ищем точный баланс эстетики, удобства и бюджета.</p>
          </div>
          <div className="project-grid">
            {projects.slice(0, 6).map((project, index) => (
              <button className={`project-card project-${index + 1}`} key={project.image} onClick={() => setProjectIndex(index)}>
                <img src={project.image} alt={project.title} />
                <span className="project-shade"></span>
                <span className="project-info"><small>{project.tag}</small><b>{project.title}</b></span>
                <span className="project-arrow"><ArrowDownRight /></span>
              </button>
            ))}
          </div>
          <div className="projects-footer">
            <p>В каталоге — дома от 100 до 500+ м², одноэтажные, двухэтажные, с гаражом, мансардой и плоской кровлей.</p>
            <a className="button button-light" href="#contacts">Получить подборку <ArrowRight size={19} /></a>
          </div>
        </div>
      </section>

      <section className="section process" id="about">
        <div className="container process-grid">
          <div className="process-visual">
            <img className="process-main" src={`${import.meta.env.BASE_URL}projects/project-05.jpg`} alt="Архитектурная визуализация дома M-FRESH" />
            <img className="process-plan" src={`${import.meta.env.BASE_URL}projects/project-02.jpg`} alt="Пример генерального плана участка" />
          </div>
          <div className="process-copy">
            <div className="eyebrow"><span></span> От идеи до стройки</div>
            <h2>Не просто красиво.<br /><em>Продумано.</em></h2>
            <p className="lead">Сначала разбираемся, как вы живёте. Затем превращаем ваши пожелания в точный проект, по которому удобно считать смету и строить.</p>
            <ol className="steps">
              <li><span>01</span><div><b>Знакомимся и подбираем решение</b><p>Обсуждаем этажность, площадь, материал стен и состав семьи.</p></div></li>
              <li><span>02</span><div><b>Проектируем и визуализируем</b><p>Утверждаем планы, фасады и показываем дом со всех сторон.</p></div></li>
              <li><span>03</span><div><b>Готовим альбом и смету</b><p>Вы получаете два альбома А3 и все чертежи в электронном виде.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="benefit-intro">
            <div className="eyebrow light"><span></span> Почему M-FRESH</div>
            <h2>Спокойный процесс.<br /><em>Предсказуемый результат.</em></h2>
          </div>
          <div className="benefit-grid">
            <article><DraftingCompass /><span>01</span><h3>Всё в одном месте</h3><p>Архитектор, конструктор и визуализатор ведут проект вместе.</p></article>
            <article><Clock3 /><span>02</span><h3>Соблюдаем сроки</h3><p>Работаем по договору и фиксируем все этапы проектирования.</p></article>
            <article><Ruler /><span>03</span><h3>Учитываем участок</h3><p>Располагаем дом на участке, генплан (СПОЗУ) — в подарок.</p></article>
            <article><Building2 /><span>04</span><h3>Помогаем построить</h3><p>Готовим подробную смету и можем сопровождать строительство.</p></article>
          </div>
        </div>
      </section>

      <section className="section pricing" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span></span> Услуги и стоимость</div>
              <h2>Выберите свой <em>формат</em></h2>
            </div>
            <p>Стоимость для домов площадью 100–200 м². Электронный комплект дешевле на 10%.</p>
          </div>
          <div className="price-grid">
            {prices.map((price) => (
              <article className={price.featured ? "price-card featured" : "price-card"} key={price.eyebrow}>
                {price.featured && <span className="popular">Популярный выбор</span>}
                <small>{price.eyebrow}</small>
                <h3>{price.price}</h3>
                <p>{price.text}</p>
                <ul>{price.items.map((item) => <li key={item}><Check size={17} /> {item}</li>)}</ul>
                <a href="#contacts">Узнать подробнее <ArrowRight size={18} /></a>
              </article>
            ))}
          </div>
          <p className="price-note">Дополнительно выполним конструктивные расчёты фундамента, стен, перекрытий, балок и кровли.</p>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="container reviews-grid">
          <div className="reviews-title">
            <div className="eyebrow"><span></span> Отзывы</div>
            <h2>Нас рекомендуют <em>соседям и друзьям</em></h2>
            <div className="review-controls">
              <button onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)} aria-label="Предыдущий отзыв"><ChevronLeft /></button>
              <span>{String(reviewIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
              <button onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} aria-label="Следующий отзыв"><ChevronRight /></button>
            </div>
          </div>
          <article className="review-card">
            <Quote />
            <blockquote>“{reviews[reviewIndex].text}”</blockquote>
            <div><b>{reviews[reviewIndex].name}</b><span>{reviews[reviewIndex].meta}</span></div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow light"><span></span> Начнём с разговора</div>
            <h2>Расскажите, каким должен быть <em>ваш дом</em></h2>
            <p>Бесплатно подберём проект под вашу семью, участок и бюджет. Работаем очно и онлайн — по всей России.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href="tel:+79242586058"><Phone /><span><small>Позвонить ежедневно, 9:00–21:00</small><b>+7 924 258-60-58</b></span><ArrowRight /></a>
            <a className="contact-link" href="mailto:m-fresh@yandex.ru?subject=Запрос%20на%20подбор%20проекта"><Mail /><span><small>Написать и получить подборку</small><b>m-fresh@yandex.ru</b></span><ArrowRight /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <Logo />
          <div><small>Адрес</small><p>Владивосток, ул. Кирова, 23<br />офис 304</p></div>
          <div><small>География</small><p>Уссурийск · Находка · Хабаровск<br />Комсомольск-на-Амуре</p></div>
          <a className="footer-up" href="#top">Наверх <ArrowRight /></a>
        </div>
        <div className="container footer-bottom"><span>© 2005–2025 M-FRESH</span><span>Свежий взгляд — новые решения</span><a href="mailto:m-fresh@yandex.ru">Политика конфиденциальности</a></div>
      </footer>

      {projectIndex !== null && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={projects[projectIndex].title}>
          <button className="modal-close" onClick={() => setProjectIndex(null)} aria-label="Закрыть"><X /></button>
          <button className="modal-prev" onClick={previousProject} aria-label="Предыдущий проект"><ChevronLeft /></button>
          <div className="modal-content">
            <img src={projects[projectIndex].image} alt={projects[projectIndex].title} />
            <div><small>{projects[projectIndex].tag}</small><h3>{projects[projectIndex].title}</h3><p>Оригинальная визуализация из портфолио M-FRESH. Запросите планы и подробности проекта у архитектора.</p><a href="#contacts" onClick={() => setProjectIndex(null)}>Обсудить этот проект <ArrowRight /></a></div>
          </div>
          <button className="modal-next" onClick={nextProject} aria-label="Следующий проект"><ChevronRight /></button>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
