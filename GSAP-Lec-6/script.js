let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");
main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "power2",
  });
});
image.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 3,
    backgroundColor: "#ffffff8a",
  });
});
image.addEventListener("mouseleave", (e) => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
