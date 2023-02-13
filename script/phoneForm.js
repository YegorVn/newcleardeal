const phoneForm = document.querySelectorAll(".phone-form");

phoneForm.forEach((form) => {
  const madeHovered = form.querySelector(".btn_made_hover");
  const makeHover = form.querySelector(".btn_make_hover");
  makeHover.addEventListener("mouseover", () => {
    madeHovered.classList.remove("btn_blue");
    madeHovered.classList.add("btn_white");
  });
});

phoneForm.forEach((form) => {
  const madeHovered = form.querySelector(".btn_made_hover");
  const makeHover = form.querySelector(".btn_make_hover");
  makeHover.addEventListener("mouseout", () => {
    madeHovered.classList.remove("btn_white");
    madeHovered.classList.add("btn_blue");
  });
});
