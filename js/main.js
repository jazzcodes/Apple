const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// (function () {
//   const el = document.getElementsByClassName("page");
//   el.style.height = window.innerHeight + 'px';
// })();