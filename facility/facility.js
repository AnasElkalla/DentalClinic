"use strict";

const panel = document.querySelectorAll(".panel");
for (let i = 0; i < panel.length; i++) {
  panel[i].addEventListener("click", function (e) {
    removeActive();
    panel[i].classList.add("active");
  });
}

function removeActive() {
  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }
}
