gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "+=500",
    scrub: 1,
    pin: true,
  },
});
tl.to(".img-container-1", {
  width: "50%",
});
