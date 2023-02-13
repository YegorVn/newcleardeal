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
