window.addEventListener("load", () => {
  console.log("Portafolio cargado 👨🏻‍💻💼");
});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);

showBoxes();

function showBoxes() {
  const triggerBottom = (window.innerHeight / 2) * 2;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
