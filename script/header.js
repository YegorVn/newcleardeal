document.querySelectorAll(".nav").forEach((nav) => {
  const ul = nav.querySelector(".ul");
  nav.addEventListener("mouseover", () => {
    if (ul.classList.contains("ul_undraw")) {
      ul.classList.remove("ul_undraw");
    }
    ul.classList.add("ul_draw");
  });
  nav.addEventListener("mouseout", () => {
    if (ul.classList.contains("ul_draw")) {
      ul.classList.remove("ul_draw");
      ul.classList.add("ul_undraw");
    }
  });
});

const headerNavs = [
  { text: "Преимущества", val: "benefits" },
  { text: "Услуги и цены", val: "prices" },
  { text: "Отзывы", val: "reviews" },
  { text: "Вопросы", val: "faq" },
  { text: "Контакты", val: "contacts" },
];

const header = document.querySelector("header");

header.querySelectorAll(".nav").forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const text = e.target.innerHTML;
    let val = headerNavs
      .map((el) => {
        if (el.text === text) return el.val;
        else return;
      })
      .join("");
    const scrollTarget = document.querySelector("." + val);

    scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

header.querySelector(".logo").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.querySelectorAll(".burger").forEach((br) => {
  let active = false;
  br.addEventListener("click", () => {
    if (active) {
      br.classList.remove("burger_active");
      br.classList.add("burger_inactive");
    }
    if (!active) {
      br.classList.remove("burger_inactive");
      br.classList.add("burger_active");
    }
    active = !active;
  });
});

let navsShown = false;
document.querySelector(".header__burger").addEventListener("click", () => {
  const navs = document.querySelector("header").querySelector(".navs");
  if (navsShown) {
    navs.classList.remove("navs_active");
    navs.classList.add("navs_inactive");
  }
  if (!navsShown) {
    navs.classList.remove("navs_inactive");
    navs.classList.add("navs_active");
  }
  navsShown = !navsShown;
});
