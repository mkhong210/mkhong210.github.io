const clockTitle = document.querySelector(".js-clock");

function Clock() {
    const today = new Date();

    const dHour = String(today.getHours()).padStart(2,"0");
    const dMin = String(today.getMinutes()).padStart(2,"0");
    const dSec = String(today.getSeconds()).padStart(2,"0");
    clockTitle.innerText =`${dHour} : ${dMin} : ${dSec}`;
}

Clock();
setInterval(Clock, 1000);