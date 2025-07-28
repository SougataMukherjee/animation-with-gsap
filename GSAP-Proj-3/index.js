let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two", //from where its start
    start: "0% 95%", //target div  and screen
    end: "70% 50%",
    scrub: true, //helps for reverse animation
    // markers: true,
  },
});
tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange" //make all id transition in same time so give common name
);
tl.to(
  "#orange-slice",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf-2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three", //from where its start
    start: "0% 95%", //target div  and screen
    end: "70% 50%",
    scrub: true, //helps for reverse animation
    // markers: true,
  },
});

tl2.to(
  "#orange-slice",
  {
    width: "18%",
    left: "42%",
    top: "204%",
  },
  "fanta"
);
tl2.to(
  "#fanta",
  {
    width: "35%",
    top: "210%",
    left: "33%",
  },
  "fanta"
);
