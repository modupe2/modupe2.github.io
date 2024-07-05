function updateUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = utcTime;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);



const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const now = new Date();
const dayOfWeekUTC = daysOfWeek[now.getUTCDay()];

const dayElement = document.querySelector('[data-testid="currentDay"]');
dayElement.textContent = `Today is ${dayOfWeekUTC}`;
