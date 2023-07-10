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
      "🚫 Debes de proporcionar un nombre para poder personalizar la atención 🚫",
  },
  subject: {
    valueMissing:
      "🚫 Debes de proporcionar un asusto para poder dar prioridad a tu consulta o petición 🚫",
  },
  email: {
    valueMissing: "🚫 Debes de proporcionar un email de contacto 🚫",
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

