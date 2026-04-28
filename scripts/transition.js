// Анимация при переходе между страницами.
window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    const isExternal =
      href?.startsWith("http") ||
      href?.startsWith("mailto:") ||
      href?.startsWith("tel:");

    if (href && !href.startsWith("#") && !isExternal && !link.target) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    }
  });
});
