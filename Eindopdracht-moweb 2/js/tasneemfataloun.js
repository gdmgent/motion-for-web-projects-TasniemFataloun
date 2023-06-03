
const moveCursor = (e)=> {
    const cursor = document.querySelector('.cursor');
    const mouseY = e.clientY;
    const mouseX = e.clientX - 24;

    const cursorX = cursor.offsetLeft;
    const cursorY = cursor.offsetTop;

    const dist = Math.abs(mouseX - cursorX +mouseY - cursorY);

    let deg = Math.atan2(mouseY - cursorY, mouseX - cursorX) * 180 / Math.PI;

    if(mouseX < cursorX) {
        deg = deg-180; 
    } 
    scale = Math.floor(1 + dist/200);
    
    gsap.to(cursor, {
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        rotation: deg,
        duration: 0.1,
        scale: scale,
    });
}

gsap.registerPlugin(ScrollTrigger);
  
const textElements = document.querySelectorAll(".textP");

textElements.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 20%", 
      end: "bottom 50%", 
      toggleActions: "restart none none restart",
    },
    opacity: 0,
    y: 50,
    duration: 0.2,
  });
});




function tasneemfataloun(action) {
    let section = document.getElementById("tasneemfataloun");
    const cursor = document.querySelector('.cursor');

    if(action == "enter" || action == "enterBack") {
        cursor.style.display = "block";
        section.addEventListener('mousemove', moveCursor);
    } else {
        cursor.style.display = "none";
        window.removeEventListener('mousemove', moveCursor);
    }

    if (!section.init) {
        section.init = true;
        section.tl
          .add("makeGlobe")
            .to("#tasneemfataloun .redSun span.redPlanet", {
                opacity: 1,
                borderRadius: "50%", 
            }, "makeGlobe")
            .to("#tasneemfataloun .redSun", {
                borderRadius: "50%", 
            }, "makeGlobe")        
            .to("#tasneemfataloun .redSun span.homePlanet", {
                borderRadius: "50%",
                opacity: 0,
            }, "makeGlobe") 

        .add("bigSun")
            .to("#tasneemfataloun .redSun", {
                width: "30rem", 
                height: "30rem",
                top: "30rem",
                left: "5rem",
                zIndex: -10, 
            }, "bigSun")

        .add("SizeSun2")
            .to("#tasneemfataloun .redSun", {
                borderRadius: "0",
                top: 0,
                width: "100%",
                height: "100%",
                left: 0,
                borderRadius: "0",
            }, "SizeSun2")
            .to("#tasneemfataloun .redSun span.redPlanet", {
                opacity: 0,
                borderRadius: "0", 
            }, "SizeSun2")
            .to("#tasneemfataloun .redSun span.homePlanet", {
                borderRadius: "0",
                opacity: 1,
            }, "SizeSun2") 
        

            .add("dalik1")
                .to("#tasneemfataloun .dalik1", { 
                    opacity: 1, 
                    left: "10rem", 
                }, "dalik1") 

            .add("dalik2")
                .to("#tasneemfataloun .dalik2", { 
                    opacity: 1, 
                    right: "10rem", 
                }, "dalik2") 

            .add("moveDalik")
                .to("#tasneemfataloun .dalik1", { 
                    opacity: 1, 
                    left: "100rem", 
                }, "moveDalik") 
                .to("#tasneemfataloun .dalik2", { 
                    opacity: 1, 
                    right: "100rem", 
                }, "moveDalik") 

            .add("police")
                .to("#tasneemfataloun .policeBox", { 
                    opacity: 1, 
                    left: "110vw",   
                    rotation: 360,
                    opacity: 1, 
                    top: "5vh",
                    left: "45vw",
                }, "police") 

            .add("landing")
                .to("#tasneemfataloun .policeBox", { 
                    top: "35vh",
                }, "landing") 

            .add("changeBackground")
                .to("#tasneemfataloun .homePlanet", { 
                backgroundImage: "url(tasneemfataloun/Orphan.webp)", 
                }, "changeBackground") 

            .add("changeBackground2")
                .to("#tasneemfataloun .homePlanet", { 
                backgroundImage: "url(tasneemfataloun/tardis.webp)", 
                }, "changeBackground2") 

            .add("reset")
                .to("#tasneemfataloun .policeBox", { 
                    opacity: 0, 
                }, "reset")
                .to("#tasneemfataloun .homePlanet", { 
                    opacity: 0, 
                }, "reset") 
                .to("#tasneemfataloun .redSun", { 
                    width: "20vw", 
                    height: "20vw", 
                    left: "40vw", 
                    top: "calc(50vh - 10vw)", 
                    borderRadius: "0", 
                    //duration:30, 
                    rotation: 360,
                }, "reset")
        
    }
}