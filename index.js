ScrollReveal().reveal(".onScroll", {
  delay: 100,
  distance: "100px",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "top",
  desktop: true,
  mobile: true,
  reset: false,
});
for (let x = 1; x <= 4; x++) {
  ScrollReveal().reveal(`#onScrollTitle${x}`, {
    delay: 300 + 100 * x,
    distance: "20px",
    duration: 500,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    origin: "top",
    desktop: true,
    mobile: true,
    reset: false,
  });
}
let mobileMenuAnimationDuration = 400;
let mobileMenuElement = document.querySelector(".mobileMenu");
document.querySelector("#openMobileMenu").addEventListener("click", () => {
  mobileMenuElement.style.display = "block";
  mobileMenuElement.animate(
    [
      { opacity: "0", transform: "scale(105%)" },
      { opacity: "1", transform: "scale(100%)" },
    ],
    {
      easing: "cubic-bezier(.4,0,.55,.99)",
      duration: mobileMenuAnimationDuration,
      fill: "both",
    }
  );
});
document.querySelector("#closeMobileMenu").addEventListener("click", () => {
  mobileMenuElement.animate(
    [
      { opacity: "1", transform: "scale(100%)" },
      { opacity: "0", transform: "scale(105%)" },
    ],
    {
      easing: "cubic-bezier(.4,0,.55,.99)",
      duration: mobileMenuAnimationDuration,
      fill: "both",
    }
  );
  setTimeout(() => {
    mobileMenuElement.style.display = "none";
  }, mobileMenuAnimationDuration);
});

new Marquee("marqueeHero", {
  speed: 0.7,
  direction: "rtl",
});
new Marquee("marqueeShop", {
  speed: 1.3,
});
new Marquee("marqueeEnd", {
  speed: 0.4,
});
new Marquee("marqueeCopyright", {
  speed: 0.7,
  direction: "rtl",
});
