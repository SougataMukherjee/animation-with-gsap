const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function circleMouseFollower() {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      "#mini_circle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  });
}
circleMouseFollower();

function firstPageAnim() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
firstPageAnim();

//want to apply animation in all elem
document.querySelectorAll(".elem").forEach((elem) => {
  let rotate = 0;
  let diff_rotation = 0;

  elem.addEventListener("mouseleave", (e) => {
    //at the time of mouse leave opacity 0
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 1,
      x: 0,
    });
  });

  elem.addEventListener("mousemove", (e) => {
    let diff = e.clientY - elem.getBoundingClientRect().top; //mouse pos-element top position
    diff_rotation = e.clientX - rotate; //mouse location -rotate
    rotate = e.clientX; //prev rotate
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff_rotation), //min rotate -20 to max 20 deg
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.4,
      x: 10,
    });
  });
});
