// COOKIE
document.querySelector(".cookie__btn").addEventListener("click", () => {
  document.querySelector(".cookie").remove();
});

document.querySelectorAll(".pag").forEach((pag) => {
  setTimeout(() => {
    const q = pag.previousSibling.previousSibling.children.length;
    console.log(q);
    for (let i = 0; i < q; i++) {
      console.log("sd");
      const c = document.createElement("div");
      c.classList.add("pag__c");
      pag.appendChild(c);
    }
  }, 100);
});
