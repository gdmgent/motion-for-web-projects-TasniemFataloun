gsap.registerPlugin(ScrollTrigger);
const main = document.querySelector("main");

for (let i = 1; i <= 5; i++) {
  gsap.from(`#section${i} .paragraaf${i}`, {
    scrollTrigger: {
      scroller: main,
      trigger: `#section${i}`,
      toggleActions: "restart none none pause",
    },
    x: 500,
    opacity: 0,
    duration: 1.5,
  });
}



/* gsap.fromTo('.image', {
  x: 100,
  opacity: 1,
  duration: 2
}, {
  scrollTrigger: {
    trigger: '.image',
    toggleActions: "restart none none pause"
  },
}); */

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.image', {
  opacity: 0,
  x: 100
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.image',
    toggleActions: "restart none none pause"
  }
});