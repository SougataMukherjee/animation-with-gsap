function page1Animation() {
  let tl = gsap.timeline();

  tl.from(".section1 nav h3,.section1 nav h4,.section1 nav button", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
    stagger: 0.2,
  });
  tl.from(".center-part1 h3", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.4,
      x: 200,
    },
    "-=0.8"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".section1bottom img",
    },
    scroller: "body",
  });
}

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
  tl2.from(".services", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "sam"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "sam"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
}
page1Animation();
page2Animation();
