const handleInView = (el, offset) => {
  const clientRect = el.getBoundingClientRect();
  //offset set in percentage
  const o = offset ? (window.innerHeight * offset) / 100 : 0;
  if (
    (-clientRect.y < clientRect.height + o && clientRect.y < 0) ||
    (clientRect.y < window.innerHeight - o && clientRect.y > 0)
  ) {
    return true;
  } else return false;
};

// handleInView
const inlineUls = document.querySelectorAll(".ul_in_stream");
window.addEventListener("scroll", () => {
  //inline
  inlineUls.forEach((ul) => {
    const inView = handleInView(ul, 20);
    if (inView) ul.classList.add("ul_draw");
    if (!inView) ul.classList.remove("ul_draw");
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
    const inView = handleInView(num, 50);
    if (inView) num.classList.add("num_in_view");
    if (!inView) num.classList.remove("num_in_view");
  });

  //bubs
  const dialog = document.querySelector(".dialog");
  const bubsLeft = dialog.querySelectorAll(".bub_left");
  const bubsRight = dialog.querySelectorAll(".bub_right");
  bubsLeft.forEach((bub) => {
    const inView = handleInView(bub, 20);
    if (inView) bub.classList.add("bub_left_active");
    if (!inView) bub.classList.remove("bub_left_active");
  });
  bubsRight.forEach((bub) => {
    const inView = handleInView(bub, 20);
    if (inView) bub.classList.add("bub_right_active");
    if (!inView) bub.classList.remove("bub_right_active");
  });
});
