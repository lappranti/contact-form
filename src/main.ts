document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form") as HTMLFormElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = validateForm();
    displayErrors(errors);

    if (Object.keys(errors).length === 0) {
      showSnackbar();
      form.reset(); // Optional: Reset the form after successful submission
    }
  });

  function validateForm() {
    const errors: { [key: string]: string } = {};

    const firstName = (document.getElementById("name-1") as HTMLInputElement)
      .value;
    const lastName = (document.getElementById("name-2") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;
    const queryType = document.querySelector(
      'input[name="type"]:checked'
    ) as HTMLInputElement;
    const consent = (document.getElementById("check") as HTMLInputElement)
      .checked;

    if (!firstName) {
      errors["name-1"] = "First name is required";
    }

    if (!lastName) {
      errors["name-2"] = "Last name is required";
    }

    if (!email || !validateEmail(email)) {
      errors["email"] = "Please enter a valid email";
    }

    if (!message) {
      errors["message"] = "Message is required";
    }

    if (!queryType) {
      errors["type"] = "Please select a query type";
    }

    if (!consent) {
      errors["check"] = "You must consent to be contacted";
    }

    return errors;
  }

  function validateEmail(email: string) {
    const re =
      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  function displayErrors(errors: { [key: string]: string }) {
    const fields = ["name-1", "name-2", "email", "message", "type", "check"];

    fields.forEach((field) => {
      const el = document.getElementById(field) as HTMLElement;
      const errorElement = document.getElementById(
        `${field}-error`
      ) as HTMLElement;
      if (errors[field]) {
        errorElement.textContent = errors[field];
        errorElement.classList.remove("hidden");
        if (field != "type") el.style.border = "1px solid #D73C3C";
      } else {
        errorElement.textContent = "";
        errorElement.classList.add("hidden");
        if (field != "type") el.style.border = "1px solid #86A2A5";
      }
    });
  }

  function showSnackbar() {
    const snackbar = document.getElementById("snackbar") as HTMLDivElement;
    snackbar.classList.remove("hidden");
    snackbar.classList.add("show");

    setTimeout(() => {
      snackbar.classList.remove("show");
      snackbar.classList.add("hidden");
    }, 5000);
  }
});
