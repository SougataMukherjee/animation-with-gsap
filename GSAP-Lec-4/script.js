document.addEventListener("DOMContentLoaded", () => {
  gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duraion: 2,
  });
  gsap.from("#page2 #box", {
    scale: 0,
    duraion: 2,
    x: 500,
    scrollTrigger: {
      trigger: "#page2 #box",
      scroller: "body",
      markers: true,
      start: "top 70%",
      scrub: 2, //if full depend on scroll
    },
  });
  gsap.from("#page3 #box", {
    scale: 0,
    duraion: 2,
    x: -500,
    scrollTrigger: {
      trigger: "#page3 #box",
      scroller: "body",
      markers: true,
      start: "top 60%",
    },
  });
});
