window.addEventListener("DOMContentLoaded", () => {
  var elem = document.querySelector(".section-1>img");
  var div = document.querySelector(".section-3");
  if (window.innerWidth > 400) div.style.width = elem.width + "px";
  if (window.innerWidth > 768) {
    div.style.height = elem.height + "px";
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 400) {
      div.style.width = elem.width + "px";
    }
    if (window.innerWidth > 768) {
      console.log(window.innerHeight);
      div.style.height = elem.height + "px";
    }
  });
});
