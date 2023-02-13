const sliderContent = [
  {
    name: "Любовь",
    img: "../assets/images/avLubov.png",
    city: "Кемерово",
    text: "Продали мою квартиру быстро, грамотно, да ещё и покупателю помогли оформить ипотеку. Лёгкий, понятный и приятный процесс. Если буду ещё связываться с недвижимостью, то только в сопровождении Ясной сделки",
  },
  {
    name: "Надежда",
    img: "../assets/images/avNadezda.png",
    city: "Москва",
    text: "Ипотека для нас тёмный лес, думали не разберёмся. В итоге быстро и понятно получили ответы на все вопросы и одобренную ставку! ",
  },
  {
    name: "Анастасия",
    img: "../assets/images/avAnastasia.png",
    city: "Кемерово",
    text: "С Ясной сделкой продали квартиру чётко, быстро и по хорошей цене. Спокойствие команды передавалось и нам, мы точно знали, что проблем не будет. Всем рекомендую!",
  },
  {
    name: "Оксана",
    img: "../assets/images/avOxana.png",
    city: "Мытищи",
    text: "Я человек старой закалки и была против всяких сделок онлайн. Благодаря агентству рефинансирование нашей ипотеки прошло просто супер!",
  },
];

const slideHtml = `
<div class="slides__header">
  <img src="" alt="" class="slides__av" />
  <div class="slides__title">
    <div class="slides__name"></div>
    <div class="slides__city"></div>
  </div>
</div>
<div class="slides__body">
  <div class="slides__text"></div>
</div>`;

const slider = document.querySelector(".slider");

let currentIdx = 0;
const maxIdx = sliderContent.length - 1;

let mid = slider.querySelector(".slides__mid");
let left = slider.querySelector(".slides__left");
let right = slider.querySelector(".slides__right");
let slides = slider.querySelector(".slider__vidget");
let sliderTexts = slider.querySelectorAll(".slider__text");

const handleIdx = (idx, dir, maxIdx) => {
  const res = idx + dir;
  if (res > maxIdx) return 0;
  else if (res < 0) return maxIdx;
  else return res;
};

const handleIdxOnScroll = (el, idx) => {
  const numOfEls = el.children.length;
  const containerWidth = el.scrollWidth - el.clientWidth;
  const elWidth = containerWidth / numOfEls;
  const offset = el.scrollLeft;
  const res = Math.floor(offset / elWidth);
  if (res !== idx && res < numOfEls) return res;
  else return idx;
};

const handleText = (idx, sliderTexts) => {
  sliderTexts.forEach((text) => {
    text.classList.remove("slider__text_active");
  });
  sliderTexts[idx].classList.add("slider__text_active");
};

const slideDataToHtml = (ref, data) => {
  ref.querySelector(".slides__name").innerHTML = data.name;
  ref.querySelector(".slides__city").innerHTML = data.city;
  ref.querySelector(".slides__text").innerHTML = data.text;
  ref.querySelector(".slides__av").src = data.img;
};

const handleContent = () => {
  let mid = slider.querySelector(".slides__mid");
  let left = slider.querySelector(".slides__left");
  let right = slider.querySelector(".slides__right");

  let leftData;
  let midData;
  let rightData;

  switch (currentIdx) {
    case 0: {
      leftData = sliderContent[maxIdx];
      midData = sliderContent[0];
      rightData = sliderContent[currentIdx + 1];
      break;
    }
    case maxIdx: {
      leftData = sliderContent[currentIdx - 1];
      midData = sliderContent[maxIdx];
      rightData = sliderContent[0];
      break;
    }
    default: {
      leftData = sliderContent[currentIdx - 1];
      midData = sliderContent[currentIdx];
      rightData = sliderContent[currentIdx + 1];
      break;
    }
  }
  slideDataToHtml(left, leftData);
  slideDataToHtml(mid, midData);
  slideDataToHtml(right, rightData);
};

const handleRightSwipe = () => {
  let mid = slider.querySelector(".slides__mid");
  let left = slider.querySelector(".slides__left");
  let right = slider.querySelector(".slides__right");
  let slides = slider.querySelector(".slider__vidget");
  mid.style.zIndex = 3;
  left.style.zIndex = 2;
  right.style.zIndex = 1;
  mid.classList.add("slides__mid_slide_right");
  left.classList.add("slides__left_slide");

  currentIdx = handleIdx(currentIdx, -1, maxIdx);
  handleText(currentIdx, sliderTexts);

  const handleMid = () => {
    mid.removeEventListener("transitionend", handleMid);
    mid.remove();
    const newLeft = document.createElement("div");
    newLeft.classList.add("slides__left", "slides__slide");
    newLeft.innerHTML = slideHtml;
    slides.appendChild(newLeft);
    handleContent(-1);
  };

  const handleLeft = () => {
    const leftContent = left.innerHTML;
    left.removeEventListener("transitionend", handleLeft);
    left.remove();
    const newMid = document.createElement("div");
    newMid.innerHTML = leftContent;
    newMid.classList.add("slides__mid", "slides__slide");
    slides.appendChild(newMid);
  };

  mid.addEventListener("transitionend", handleMid, false);
  left.addEventListener("transitionend", handleLeft, false);
};

const handleLeftSwipe = () => {
  let mid = slider.querySelector(".slides__mid");
  let left = slider.querySelector(".slides__left");
  let right = slider.querySelector(".slides__right");
  let slides = slider.querySelector(".slider__vidget");
  mid.style.zIndex = 3;
  right.style.zIndex = 2;
  left.style.zIndex = 1;
  mid.classList.add("slides__mid_slide_left");
  right.classList.add("slides__right_slide");

  currentIdx = handleIdx(currentIdx, 1, maxIdx);
  handleText(currentIdx, sliderTexts);

  const handleMid = () => {
    mid.removeEventListener("transitionend", handleMid);
    mid.remove();
    const newRight = document.createElement("div");
    newRight.classList.add("slides__right", "slides__slide");
    newRight.innerHTML = slideHtml;
    slides.appendChild(newRight);
    handleContent(1);
  };

  const handleRight = () => {
    const rightContent = right.innerHTML;
    right.removeEventListener("transitionend", handleRight);
    right.remove();
    const newMid = document.createElement("div");
    newMid.classList.add("slides__mid", "slides__slide");
    newMid.innerHTML = rightContent;
    slides.appendChild(newMid);
  };

  mid.addEventListener("transitionend", handleMid, false);
  right.addEventListener("transitionend", handleRight, false);
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (window.innerWidth > 576) {
      handleText(currentIdx, sliderTexts);
      handleContent(currentIdx);
      slider
        .querySelector(".swipe_right")
        .addEventListener("click", handleRightSwipe);

      slider
        .querySelector(".swipe_left")
        .addEventListener("click", handleLeftSwipe);
    }
    if (window.innerWidth < 576) {
      let timeIdx = currentIdx;
      const slides = slider.querySelector(".slides");

      slides.innerHTML = "";

      sliderContent.forEach((data) => {
        let slide = document.createElement("div");
        slide.innerHTML = slideHtml;
        slide.classList.add("slides__slide");
        slideDataToHtml(slide, data);
        slides.appendChild(slide);
      });

      handleText(currentIdx, sliderTexts);

      slides.addEventListener("scroll", (e) => {
        timeIdx = handleIdxOnScroll(slides, timeIdx);
        if (timeIdx !== currentIdx) {
          currentIdx = timeIdx;
          handleText(currentIdx, sliderTexts);
          document
            .querySelector(".pag_slider")
            .querySelectorAll(".pag__c")
            .forEach((c, i) => {
              c.classList.remove("pag__c_active");
              if (i === currentIdx) c.classList.add("pag__c_active");
            });
        }
      });
    }
  },
  false
);

let swipeBtnsDisabled = false;
const swipeBtns = slider.querySelectorAll(".swipe");
swipeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("swipe_left"))
      btn.classList.add("swipe_left_active");
    if (btn.classList.contains("swipe_right"))
      btn.classList.add("swipe_right_active");
    swipeBtns.forEach((btn) => (btn.disabled = true));
    setTimeout(() => {
      swipeBtns.forEach((btn) => (btn.disabled = false));
    }, 750);
  });
  btn.addEventListener("animationend", () => {
    btn.classList.remove("swipe_left_active");
    btn.classList.remove("swipe_right_active");
  });
});

cards.addEventListener("scroll", () => {
  let timeIdx = cardsIdx;
  timeIdx = handleIdxOnScroll(cards, cardsIdx);
  if (timeIdx !== cardsIdx) {
    cardsIdx = timeIdx;
    document
      .querySelector(".pag_cards")
      .querySelectorAll(".pag__c")
      .forEach((c, i) => {
        c.classList.remove("pag__c_active");
        if (i === cardsIdx) c.classList.add("pag__c_active");
      });
  }
});
