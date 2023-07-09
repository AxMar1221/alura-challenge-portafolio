const container = document.getElementById("container");
const color = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 512;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000000";
}

function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)];
}

document.addEventListener("DOMContentLoaded", function () {
  let paragraphs = document.getElementsByClassName("about__paragraph");
  const colors = ["#ff1900", "#b200fe", "#0498fa", "#ff7700"];

  function changeParagraphColors() {
    for (let i = 0; i < paragraphs.length; i++) {
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      paragraphs[i].style.color = randomColor;
    }
  }
  changeParagraphColors();

  setInterval(changeParagraphColors, 30000);
});
