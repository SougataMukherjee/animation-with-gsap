document.addEventListener("DOMContentLoaded", () => {
  gsap.to("#box1", {
    x: 300,
    y: 100,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    scale: 1.5,
    repeat: -1,
    yoyo: true,
  });
  gsap.from("#box2", {
    x: 500,
    y: 200,
    duration: 2,
    delay: 1,
    backgroundColor: "green",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
  });
});
