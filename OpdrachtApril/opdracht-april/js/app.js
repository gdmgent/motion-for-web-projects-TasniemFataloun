gsap.registerPlugin(ScrollTrigger);
const main = document.querySelector("main");

for (let i = 1; i <= 5; i++) {
  gsap.from(`#section${i} .paragraaf${i}`, {
    scrollTrigger: {
      scroller: main,
      trigger: `#section${i}`,
      toggleActions: "restart none none restart",
    },
    x: 500,
    opacity: 0,
    duration: 1.5,
  });
}

gsap.from('.image', {
  scrollTrigger: {
    scroller: main,
    trigger: '.image',
    toggleActions: "play reset play reset",
  },
  x: -500,
  opacity: 0,
  duration: 1.5,
});