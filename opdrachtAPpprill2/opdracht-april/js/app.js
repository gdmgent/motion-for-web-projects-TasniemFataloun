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

 gsap.to('.letter img', {
  x: 10000, 
  duration: 2,
  scrollTrigger: {
    trigger: '.letter img',
    toggleActions: 'restart none none none'
  }
}); 

