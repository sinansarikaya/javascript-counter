const main = document.querySelector("main");
let counterDOM = document.getElementById("counter");
let counter = localStorage.getItem("counter");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

let number = 0;
counter != null ? (number = Number(counter)) : (number = 0);
counterDOM.innerHTML = Number(number);

increase.addEventListener("click", () => {
  clickEvent("increase");
});
decrease.addEventListener("click", () => {
  clickEvent("decrease");
});
reset.addEventListener("click", () => {
  number = 0;
  localStorage.setItem("counter", Number(number));
  counterDOM.innerHTML = Number(number);
  bgChange(number);
});

const bgChange = (n) => {
  if (n > 0) {
    main.classList.remove("negative", "none");
    main.classList.add("positive");
  } else if (n < 0) {
    main.classList.remove("positive", "none");
    main.classList.add("negative");
  } else {
    main.classList.remove("positive", "negative");
    main.classList.add("none");
  }
};

clickEvent = (e) => {
  e == "increase"
    ? (counterDOM.innerHTML = number += 1)
    : (counterDOM.innerHTML = number -= 1);

  localStorage.setItem("counter", Number(number));
  bgChange(number);
};

bgChange(number);
