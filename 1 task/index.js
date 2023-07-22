const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  const setTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60) % 60;
    let secs = seconds % 60;
    timerEl.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  let intervalId;

  return (seconds) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    setTime(seconds);

    intervalId = setInterval(() => {
      seconds--;
      setTime(seconds);

      if(seconds === 0) {
        clearInterval(intervalId);
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});