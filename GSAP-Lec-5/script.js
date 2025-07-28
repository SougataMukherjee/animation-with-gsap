document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#page2 h3", {
    x: "-150%",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top top",
      end: "top -150%",
      scrub: 2,
      pin: false,
    },
  });
});
