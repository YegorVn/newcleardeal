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
