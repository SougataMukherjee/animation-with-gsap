document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from("nav", {
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  tl.to(".hero .part2 img", {
    clipPath: " polygon(100% 0%,100% 57%,100% 100%,0% 100%,0 59%,0 0,47% 0)",
    duration: 1,
    delay: 0,
  });
  tl.from(".hero .part1 h1", {
    y: 100,
    opacity: 0,
    duration: 2,
  });
  tl.from(
    ".hero .part1 p",
    {
      y: 100,
      opacity: 0,
      duration: 3,
    },
    "-=0.3" // Starts 0.3s before previous animation ends
  );
});
