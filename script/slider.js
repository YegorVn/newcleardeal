const sliderContent = [
  {
    name: "Любовь",
    img: "",
    city: "Кемерово",
    text: "Продали мою квартиру быстро, грамотно, да ещё и покупателю помогли оформить ипотеку. Лёгкий, понятный и приятный процесс. Если буду ещё связываться с недвижимостью, то только в сопровождении Ясной сделки",
    title:
      "Узаконили перепланировку и продали квартиру на 300 000 ₽ выше, чем планировали",
    annotation:
      "Чтобы квартиру можно было купить в ипотеку, разобрались с неузаконенной перепланировкой. Это же позволило продать квартиру дороже. Клиенты оценили современный уровень сделки: без МФЦ и очередей — с электронной регистрацией и поступлением денег на следующий день",
  },
  {
    name: "Надежда",
    img: "",
    city: "Москва",
    text: "Ипотека для нас тёмный лес, думали не разберёмся. В итоге быстро и понятно получили ответы на все вопросы и одобренную ставку! ",
    title: "Одобрили ипотеку без справки от работодателя за 2 минуты",
    annotation:
      "Несмотря на то, что Надежда находится в отпуске по уходу за ребёнком, а работодатель мужа отказался подтвердить доход справками, мы смогли быстро одобрить ипотек на вторичное жильё под 9,5%",
  },
  {
    name: "Анастасия",
    img: "",
    city: "Кемерово",
    text: "С Ясной сделкой продали квартиру чётко, быстро и по хорошей цене. Спокойствие команды передавалось и нам, мы точно знали, что проблем не будет. Всем рекомендую!",
    title: "Продали наследственную квартиру без спешки по максимальной цене",
    annotation:
      "Анастасия получила в наследство квартиру в советском доме 1980 года. Старый ремонт отпугивал некоторых покупателей, но мы не торопились и через 4 месяца продали квартиру за 7 800 000 ₽",
  },
  {
    name: "Оксана",
    img: "",
    city: "Мытищи",
    text: "Я человек старой закалки и была против всяких сделок онлайн. Благодаря агентству рефинансирование нашей ипотеки прошло просто супер!",
    title: "Рефинансировали ипотеку Оксаны и сэкономили ей 1 000 000 ₽",
    annotation:
      "Смогли учесть неофициальную подработку при анализе платёжеспособности и рефинансировали ипотеку на вторичку: сократили срок выплаты, снизили ставку и переплату, сохранили комфортный ежемесячный платёж.",
  },
];

const slideHtml = `
<div class="slides__header">
  <img class="slides__av" />
  <div class="slides__title">
    <div class="slides__name"></div>
    <div class="slides__city"></div>
  </div>
</div>
<div class="slides__body">
  <div class="slides__text"></div>
</div>`

const slider = document.querySelector(".slider");

let currentIdx = 0;
const maxIdx = sliderContent.length - 1;

let mid = slider.querySelector(".slides__mid");
let left = slider.querySelector(".slides__left");
let right = slider.querySelector(".slides__right");
let slides = slider.querySelector(".slider__vidget");

const handleContent = (dir) => {
  let mid = slider.querySelector(".slides__mid");
  let left = slider.querySelector(".slides__left");
  let right = slider.querySelector(".slides__right");
  const handleIdx = (idx, dir, maxIdx) => {
    const res = idx + dir;
    if (res > maxIdx) return 0;
    else if (res < 0) return maxIdx;
    else return res;
  };

  const slideDataToHtml = (ref, data) => {
    ref.querySelector(".slides__name").innerHTML = data.name;
    ref.querySelector(".slides__city").innerHTML = data.city;
    ref.querySelector(".slides__text").innerHTML = data.text;
  };

  currentIdx = handleIdx(currentIdx, dir, maxIdx);

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
  // console.log(currentIdx, leftData, midData, rightData)
  slideDataToHtml(left, leftData);
  slideDataToHtml(mid, midData);
  slideDataToHtml(right, rightData);
};

handleContent(0);

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

  const handleMid = () => {
    mid.removeEventListener("transitionend", handleMid);
    mid.remove();
    const newRight = document.createElement("div");
    newRight.classList.add("slides__right", "slides__slide");
    newRight.innerHTML = slideHtml;
    slides.appendChild(newRight);
    handleContent(1)
  };

  const handleRight = () => {
    const rightContent = right.innerHTML
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

slider
  .querySelector(".swipe_right")
  .addEventListener("click", handleRightSwipe);

slider.querySelector(".swipe_left").addEventListener("click", handleLeftSwipe);

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
