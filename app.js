setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// dark----light
const lightBtn = document.querySelector(".btn");
const bodylight = document.querySelector("body");
const clocklight = document.querySelector(".clock");
const numberlight = document.querySelector(".numbers");
const minuteHandlight = document.querySelector(".minute");
const circleMiddle = document.querySelector(".clock::after");

// light------dark
const darkBtn = document.querySelector(".btn-dark");
const bodyDark = document.querySelector("body-dark");
const clockDark = document.querySelector(".clock-dark");
const numberDark = document.querySelector(".numbers-dark");

// ---------------------

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotatio(secondHand, secondsRatio);
  setRotatio(hourHand, hoursRatio);
  setRotatio(minuteHand, minutesRatio);
}

function setRotatio(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// console.log(setClock);
setClock();

// dark---light

lightBtn.addEventListener("click", function () {
  clocklight.classList.toggle("clock-dark");
  bodylight.classList.toggle("body-dark");
  numberlight.classList.toggle("numbers-dark");
  minuteHandlight.classList.toggle("minute-dark");
  circleMiddle.classList.toggle("clock-dark::after");

  // btn-----------------------
  lightBtn.classList.toggle("btn-dark");
  lightBtn.classList.toggle("btn-dark::hover");
  if (btn.innerHTML === "Dark") {
    btn.innerHTML = "Light";
  } else {
    x.innerHTML = "Dark";
  }

  // body-----------------
  bodylight.style.background = "#000329";
});
