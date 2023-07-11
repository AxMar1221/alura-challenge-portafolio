window.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "fuchsia",
    "brown",
  ];

  const rainbowUlBorder = document.querySelectorAll("ul.lista");
  const changeLiText = document.querySelectorAll("li.hobbies__name");

  function changeUlBorderColor() {
    for (let i = 0; i < rainbowUlBorder.length; i++) {
      let randomUlBorderColor =
        colors[Math.floor(Math.random() * colors.length)];
      rainbowUlBorder[i].style.borderColor = randomUlBorderColor;
    }
  }
  changeUlBorderColor();
  setInterval(changeUlBorderColor, 15000);

  function changeLiTextColor() {
    for (let i = 0; i < changeLiText.length; i++) {
      let randomLiTextColor = colors[Math.floor(Math.random() * colors.length)];
      changeLiText[i].style.color = randomLiTextColor;
    }
  }
  changeLiTextColor();
  setInterval(changeLiTextColor, 15000);
});
