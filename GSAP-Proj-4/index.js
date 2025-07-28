const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
//gsap for hold the screen and scrolling
let cursor = document.querySelector(".cursor");
let elements = document.querySelectorAll("img, h1");

function cursorControl(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
}

document.addEventListener("mousemove", cursorControl);

elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("cursorGrow");
    let textElement = document.createElement("p");
    if (element.innerText) {
      textElement.innerText = element.innerText;
    } else {
      textElement.innerText = "image";
    }
    textElement.style.fontSize = "3px";
    cursor.appendChild(textElement);
    console.log(cursor, "ff", element.innerText);
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursorGrow");
    cursor.innerHTML = "";
  });
});
