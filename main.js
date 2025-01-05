/** @format */
const d = document;

const inputs = {
  emailHeader: {
    element: d.getElementById("email-header"),
    errorElement: d.getElementById("email-header-error"),
    errorMessage: "Please check your email",
    customStyles: {
      color: "hsl(0, 100%, 74%)",
      position: "absolute",
      flexDirection: "column",
      textAlign: "left",
      marginTop: "45px",
      fontSize: "0.75em",
    },
  },
  emailEarly: {
    element: d.getElementById("email-early"),
    errorElement: d.getElementById("email-early-error"),
    errorMessage: "Please check your email",
    customStyles: {
      color: "hsl(240, 75%, 98%)",
      textAlign: "left",
      margin: "5px 0 10px 0",
      fontSize: "0.75em",
    },
  },
};

d.addEventListener("click", (e) => {
  if (e.target.matches("#submit-header")) {
    handleSubmit(inputs.emailHeader, e);
  } else if (e.target.matches("#submit-early")) {
    handleSubmit(inputs.emailEarly, e);
  }
});

function handleSubmit(input, e) {
  e.preventDefault();
  validateField(input);
}

function validateField(input) {
  const {
    element,
    errorElement,
    errorMessage,
    customStyles,
    isEmail = true,
  } = input;
  const value = element.value.trim();

  if (value === "") {
    showError(element, errorElement, errorMessage, customStyles);
  } else if (isEmail && !isValidEmail(value)) {
    showError(element, errorElement, "Please check your email", customStyles);
  } else {
    hideError(element, errorElement);
  }
}

function isValidEmail(email) {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regExp.test(email);
}

function showError(element, errorElement, message, customStyles = {}) {
  element.style.border = "2px solid hsl(0, 100%, 74%)";
  errorElement.innerHTML = `<p class='error-message'>${message}</p>`;

  Object.assign(errorElement.style, customStyles);
}

function hideError(element, errorElement) {
  element.style.border = "1px solid hsl(246, 25%, 77%)";
  element.style.color = "";
  errorElement.innerHTML = "";
  errorElement.style = "";
}
