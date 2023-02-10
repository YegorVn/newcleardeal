// COOKIE
document.querySelector('.cookie__btn').addEventListener('click', () => {
  document.querySelector('.cookie').remove()
})


const handleInView = (el) => {
  const clientRect = el.getBoundingClientRect();
  if (
    (-clientRect.y < clientRect.height && clientRect.y < 0) ||
    (clientRect.y < window.innerHeight && clientRect.y > 0)
  ) {
    return true;
  } else return false;
};

// handleInView
const inlineUls = document.querySelectorAll(".ul_in_stream");
window.addEventListener("scroll", () => {
  //inline
  inlineUls.forEach((ul) => {
    if (handleInView(ul)) ul.classList.add("ul_draw");
    if (!handleInView(ul)) ul.classList.remove("ul_draw");
  });

  //tickets
  const tickets = document.querySelector(".tickets");
  tickets.querySelectorAll(".ticket").forEach((ticket, index) => {
    if (handleInView(ticket)) {
      ticket.classList.remove("ticket_out_view");
      ticket.classList.add("ticket_in_view");
    }
    if (!handleInView(ticket)) {
      ticket.classList.remove("ticket_in_view");
      ticket.classList.add("ticket_out_view");
    }
    ticket.style.animationDelay = index * 0.5 + "s";
  });

  //points
  const points = document.querySelector(".points");
  points.querySelectorAll(".num").forEach((num) => {
    if (handleInView(num)) num.classList.add("num_in_view");
    if (!handleInView(num)) num.classList.remove("num_in_view");
  });

  //bubs
  const dialog = document.querySelector(".dialog");
  const bubsLeft = dialog.querySelectorAll(".bub_left");
  const bubsRight = dialog.querySelectorAll(".bub_right");
  bubsLeft.forEach((bub) => {
    if (handleInView(bub)) bub.classList.add("bub_left_active");
    if (!handleInView(bub)) bub.classList.remove("bub_left_active");
  });
  bubsRight.forEach((bub) => {
    if (handleInView(bub)) bub.classList.add("bub_right_active");
    if (!handleInView(bub)) bub.classList.remove("bub_right_active");
  });
});

// CARDS
const cards = document.querySelector(".cards");
cards.querySelectorAll(".card").forEach((card) => {
  const pat = card.querySelector(".card-open");
  const text = card.querySelector(".card__text");
  let opened = false;
  pat.addEventListener("click", () => {
    console.log(opened);
    if (opened) {
      card.classList.add("card_closed");
      card.classList.remove("card_opened");
    }
    if (!opened) {
      card.classList.add("card_opened");
      card.classList.remove("card_closed");
    }
    opened = !opened;
  });
});

// HEADER
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

// PAT
document.querySelectorAll(".pat").forEach((pat) => {
  let opened = false;
  const border = pat.querySelector(".pat__border");
  const icon = pat.querySelector(".pat__icon");
  pat.addEventListener("click", (e) => {
    if (opened) {
      border.classList.remove("pat__border_active");
      border.classList.add("pat__border_inactive");

      icon.classList.remove("pat__icon_open_active");
      icon.classList.add("pat__icon_open_inactive");
    }
    if (!opened) {
      border.classList.remove("pat__border_inactive");
      border.classList.add("pat__border_active");

      icon.classList.remove("pat__icon_open_inactive");
      icon.classList.add("pat__icon_open_active");
    }
    opened = !opened;
  });
});

const phoneForm = document.querySelectorAll(".phone-form");

phoneForm.forEach((form) => {
  const madeHovered = form.querySelector(".btn_made_hover");
  const makeHover = form.querySelector(".btn_make_hover")
  makeHover.addEventListener("mouseover", () => {
    madeHovered.classList.remove("btn_blue");
    madeHovered.classList.add("btn_white");
  });
});

phoneForm.forEach((form) => {
  const madeHovered = form.querySelector(".btn_made_hover");
  const makeHover = form.querySelector(".btn_make_hover")
  makeHover.addEventListener("mouseout", () => {
    madeHovered.classList.remove("btn_white");
    madeHovered.classList.add("btn_blue");
  });
});


//TABS
document.querySelectorAll(".tab").forEach((tab) => {
  let opened = false;
  const pat = tab.querySelector(".pat");
  pat.addEventListener("click", () => {
    if (!opened) {
      tab.classList.remove("tab_closed");
      tab.classList.add("tab_opened");
    }
    if (opened) {
      tab.classList.remove("tab_opened");
      tab.classList.add("tab_closed");
    }
    opened = !opened;
  });
});
