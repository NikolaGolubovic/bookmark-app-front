const tabs = document.querySelectorAll(".tab-name");
const panoes = document.querySelectorAll("div[class^='pano-']");
const accQuestions = document.querySelectorAll(".question");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    panoes.forEach((pano) => {
      if (pano.classList.contains(this.dataset.order)) {
        tabs.forEach((tab) => tab.classList.remove("active"));
        pano.style.zIndex = 5;
        this.classList.add("active");
      } else {
        pano.style.zIndex = 1;
      }
    });
  });
});

const buttons = document.querySelectorAll(".question");
const accordions = document.querySelectorAll(".accordion-item");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.parentElement.classList.contains("open")) {
      this.parentElement.classList.remove("open");
      return;
    }
    accordions.forEach((accord) => accord.classList.remove("open"));
    this.parentElement.classList.add("open");
  });
});

const btn = document.querySelector(".contact-controller button");
const inputEmail = document.querySelector("input");
const errorMsg = document.querySelector(".validation-msg p.error-msg");
const successMsg = document.querySelector(".validation-msg p.success-msg");
const errorIcon = document.querySelector("img.input-error-icon");

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", function () {
  if (!inputEmail.value) {
    errorMsg.textContent = "Ombre! Where is your email?";
    errorMsg.parentElement.parentElement.classList.add("error");
    errorIcon.style.display = "block";
    setTimeout(function () {
      errorMsg.parentElement.parentElement.classList.remove("error");
      errorMsg.textContent = "";
      errorIcon.style.display = "none";
    }, 2000);
  } else if (!validateEmail(inputEmail.value)) {
    errorMsg.textContent = "Oooops! Please check your email!";
    errorMsg.parentElement.parentElement.classList.add("error");
    errorIcon.style.display = "block";
    setTimeout(function () {
      errorMsg.parentElement.parentElement.classList.remove("error");
      errorMsg.textContent = "";
      errorIcon.style.display = "none";
    }, 2000);
  } else {
    errorMsg.textContent = "";
    inputEmail.value = "";
    successMsg.textContent = "Thank you, we will contact you soon";
    successMsg.parentElement.parentElement.classList.add("success");
    setTimeout(function () {
      successMsg.textContent = "";
      successMsg.parentElement.parentElement.classList.remove("success");
    }, 2000);
  }
});

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector("footer");

hamburger.addEventListener("click", function () {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});
