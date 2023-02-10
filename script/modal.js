let stage = 0;
let maxStage = 2;

const modal = document.querySelector(".modal");

const handleModal = (stage) => {
  modal.querySelectorAll(".modal__content").forEach((content) => {
    content.classList.add("modal__content_inactive");
  });
  modal
    .querySelectorAll(".modal__content")
    [stage].classList.remove("modal__content_inactive");
};

const closeModal = () => {
  modal.classList.remove("modal_active");
  modal.classList.add("modal_inactive");
};

const openModal = () => {
  console.log("kek");
  modal.classList.remove("modal_inactive");
  modal.classList.add("modal_active");
};

// nextSlide
modal.querySelectorAll(".modal__btn_next").forEach((btn) =>
  btn.addEventListener("click", () => {
    handleModal(stage);
    stage += 1;
  })
);

// close
modal
  .querySelectorAll(".modal__btn_close")
  .forEach((btn) => btn.addEventListener("click", closeModal));

// leftPhone
document.querySelectorAll(".open_modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    stage = 1;
    openModal();
    handleModal(stage);
  });
});

// yetLeftPhone
document.querySelectorAll(".call_me").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    stage = 2;
    openModal();
    handleModal(stage);
  });
});

document.querySelectorAll(".write_me").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    stage = 2;
    openModal();
    handleModal(stage);
  });
});
