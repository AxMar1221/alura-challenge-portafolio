const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

function validate(input) {
  const inputType = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMessages(inputType, input);
  }
}

const typeErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const errorMessages = {
  name: {
    valueMissing:
      "Debes de proporcionar un nombre para poder personalizar la atención",
  },
  subject: {
    valueMissing:
      "Debes de proporcionar un asusto para poder dar prioridad a tu consulta o petición",
  },
  email: {
    valueMissing: "Debes de proporcionar un email de contacto",
    typeMismatch: "El correo no es valido",
  },
};

function showErrorMessages(inputType, input) {
  let message = "";
  typeErrors.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[inputType][error];
    }
  });
  return message;
}

window.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("messageError");
  const btn = document.getElementById("submitBtn");

  function validateTextarea() {
    const value = textarea.value.trim();
    const errorElement = document.getElementById("error");

    if (value.length >= 15 && value.length <= 500) {
      btn.disabled = false;
      btn.style.backgroundColor = "#167271";
      errorElement.style.display = "none";
    } else {
      btn.disabled = true;
      btn.style.backgroundColor = "red";
      errorElement.style.display = "block";
    }
  }

  textarea.addEventListener("input", validateTextarea);
  btn.addEventListener("click", function (eve) {
    eve.preventDefault();
    Swal.fire({
      title: "Mensaje enviado",
      icon: "success",
    });
  });
});
