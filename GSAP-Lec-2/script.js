document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h3", {
    opacity: 0,
    duration: 0.5,
    y: 20,
    delay: 0.5,
  });
  gsap.from("h5", {
    opacity: 0,
    duration: 0.5,
    y: 20,
    delay: 1,
    stagger: 0.4, //stagger:1
  });
});
