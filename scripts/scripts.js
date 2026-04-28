document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");
  const overlay = document.querySelector(".overlay");
  const homeCore = document.querySelector(".home-core");

  if (!letters.length || !overlay || !homeCore) {
    return;
  }

  setTimeout(function () {
    document.querySelector(".l")?.classList.add("top-left");
    document.querySelector(".a")?.classList.add("top-right");
    document.querySelector(".n")?.classList.add("bottom-left");
    document.querySelector(".g")?.classList.add("bottom-right");
    overlay.style.opacity = "0";
  }, 700);

  setTimeout(function () {
    homeCore.classList.add("visible");
  }, 1700);

  overlay.addEventListener("transitionend", function () {
    overlay.style.display = "none";
  });
});
