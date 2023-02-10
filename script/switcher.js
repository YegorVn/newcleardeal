// CHAT
const chat = () => {
  const bubs = document.querySelectorAll(".bub_s");
  bubs.forEach((bub, idx) => {
    const text = bub.querySelector(".bub__text");
    const delay = window.innerWidth < 576 ? idx * 3 : idx;
    text.style.animationDelay = delay + "s";
  });
};

// CHECK
const check = () => {
  const crossouts = Array.from(document.querySelectorAll(".crossout__svg"));
  crossouts.forEach((crossout, idx) => {
    crossout.style.animationDelay = idx + 1 + "s";
  });
};

// ROADMAP
const roadMap = () => {
  const passes = document.querySelectorAll(".pass");
  passes.forEach((pass, idx) => {
    const circle = pass.querySelector(".pass__circle");
    const text = pass.querySelector(".pass__text");
    const stick = pass.querySelector(".pass__stick");
    const arr = pass.querySelector(".pass__arr");
    stick.style.animationDelay = idx + "s";
    text.style.animationDelay = idx + "s";
    circle.style.animationDelay = idx + "s";
    arr.style.animationDelay = idx + "s";
  });
};

roadMap();
chat();
check();

const handleVidget = (switcher, vidgetName) => {
  const switcherVidgets = switcher.querySelectorAll(".switcher__vidget");
  switcherVidgets.forEach((vg) => {
    vg.classList.add("switcher__vidget_inactive");
  });
  switcher
    .querySelector("." + vidgetName)
    .classList.remove("switcher__vidget_inactive");
};

const fn = (switcher, btn, idx) => {
  const vidgetName = btn.value;
  switcher.querySelectorAll(".switch").forEach((btn, idx) => {
    btn.classList.add("switch_inactive");
    btn.classList.remove("switch_active");
  });

  switcher.querySelectorAll(".switcher__text").forEach((text) => {
    text.classList.remove("switcher__text_active");
  });

  switcher.querySelectorAll(".inline__ul").forEach((ul) => {
    ul.classList.remove("ul_draw");
  });

  handleVidget(switcher, vidgetName);
  const textId = "switcher__text_" + vidgetName;
  const text = document.getElementById(textId);
  text.classList.add("switcher__text_active");
  text.querySelectorAll(".inline__ul").forEach((ul) => {
    ul.classList.add("ul_draw");
  });

  btn.classList.remove("switch_inactive");
  btn.classList.add("switch_active");
};

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector(".switcher");
  const switcherBtns = switcher.querySelectorAll(".switch");
  switcherBtns.forEach((btn, idx) => {
    if (idx === 0) fn(switcher, btn, idx);
    btn.addEventListener("click", () => fn(switcher, btn, idx));
  });
});
