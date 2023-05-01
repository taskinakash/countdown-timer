const countdownElement = document.getElementById("countdown");
const daysElement = countdownElement.querySelector(".days");
const hoursElement = countdownElement.querySelector(".hours");
const minutesElement = countdownElement.querySelector(".minutes");
const secondsElement = countdownElement.querySelector(".seconds");

const targetDate = new Date("2023-06-27T14:55:00");

function updateCountdown() {
    const currentTime = new Date();
    const timeRemaining = targetDate - currentTime;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
