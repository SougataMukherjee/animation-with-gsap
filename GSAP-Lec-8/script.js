function breakText() {
  let text = document.querySelector("h3");
  let h3 = text.textContent;
  let splittext = h3.split("");
  let clutter = "";
  splittext.forEach((e) => {
    clutter += `<span>${e}</span>`;
  });
  text.innerHTML = clutter;
}
breakText();
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h3 span", {
    y: 60,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
  });
});
