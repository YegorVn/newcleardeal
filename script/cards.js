const cards = document.querySelector(".cards");

let cardsIdx = 0;

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
