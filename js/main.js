const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
  document.getElementById("page").style.height = window.innerHeight + "px"
};

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 414px)");

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:

  window.addEventListener("resize", setHeight);

// call the function once to set initial height:

  setHeight();
}