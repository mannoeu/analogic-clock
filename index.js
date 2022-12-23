const Clock = {
  hours: document.querySelector("div.clock div.hours"),
  minutes: document.querySelector("div.clock div.minutes"),
  seconds: document.querySelector("div.clock div.seconds"),
  numbers: document.querySelector("div.clock div.numbers"),
};

const initializeClock = () => {
  const now = new Date();
  const [hours, minutes, seconds] = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];

  const intervalTime = 6;

  Clock.seconds.style.transform = `translate(0, 20%) rotate(${
    seconds * intervalTime
  }deg)`;
  Clock.minutes.style.transform = `rotate(${
    minutes * intervalTime + seconds / 10
  }deg)`;
  Clock.hours.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(initializeClock, 100);
});
