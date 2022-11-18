const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timers = setInterval(() => {
      let second = Math.floor(seconds % 60);
      let minutes = Math.floor((seconds / 60) % 60);
      let hours = Math.floor((seconds / 60 / 60) % 60);
      let strTimer;
      if (seconds <= 0) {
        clearInterval(timers);
        second = "0" + second;
        minutes = "0" + minutes;
        hours = "0" + hours;
        strTimer = `${hours}:${minutes}:${second}`;
        timerEl.innerHTML = strTimer;
        alert("Время закончилось");
      } else {
        second = ("0" + second).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        hours = ("0" + hours).slice(-2);
        strTimer = `${hours}:${minutes}:${second}`;
        timerEl.innerHTML = strTimer;
      }
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
