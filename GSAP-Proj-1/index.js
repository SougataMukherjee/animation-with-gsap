// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();
function videoContainerAnimation() {
  let videoContainer = document.querySelector("#video-container");
  let playBtn = document.querySelector("#play");
  videoContainer.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener("mousemove", (e) => {
    gsap.to(playBtn, {
      left: e.x - 50,
      top: e.y - 50,
    });
  });
}
videoContainerAnimation();

function loadingAnimation() {
  gsap.from(".page1 h1", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from(".page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.5,
    duration: 0.5,
  });
}
loadingAnimation();
document.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    left: e.x,
    top: e.y,
  });
});
document.querySelectorAll(".child").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
    });
  });
});
document.querySelectorAll(".child").forEach((e) => {
  e.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)",
    });
  });
});
