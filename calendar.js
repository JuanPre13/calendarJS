/**
 * Date about date
 */
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

/**
 * HTML Objs
 */
/* Current Date */
let days = document.getElementById('days');
let month = document.getElementById('month');
let year = document.getElementById('year');

/*Buttons*/
let btnPrevMonth = document.getElementById('prev');
let btnNextMonth = document.getElementById('next');

/**
 * Set Date
 */
month.textContent = months[currentMonthNumber];
year.textContent = currentYear.toString();
/**
 * Events
 */

//Event click button prev
btnPrevMonth.addEventListener('click', lastMonth);
btnNextMonth.addEventListener('click', nextMonth);


writeMonth(currentMonthNumber);
/**
 * Functions
 */

function writeMonth(month) {
    for (let i = startDay(); i > 0; i--) {
        days.innerHTML += `<div class="prev-month">${getTotalDays(currentMonthNumber-1)-(i-1)}</div>`;
    }
    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i === currentDay) {
            days.innerHTML += `<div class="today">${i}</div>`;
        }
        days.innerHTML += `<div>${i}</div>`;
    }
}

function getTotalDays(month) {
    if (month === -1) month = 11;

    if (month === 3 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        return 31;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    } else {
        return isLeap() ? 29 : 28;
    }

}

function isLeap(currentYear) {
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0 || (currentYear % 400 === 0)));
}


function startDay() {
    let start = new Date(currentYear, currentMonthNumber, 1);
    //if return -1 is sunday but I need sunday = 6 else returns a number - 1
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
}

function lastMonth() {
    //if is Not january
    if (currentMonthNumber !== 0) {
        currentMonthNumber--;
    } else {
        currentMonthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

function nextMonth() {
    if (currentMonthNumber !== 11) {
        currentMonthNumber++;
    } else {
        currentMonthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

function setNewDate() {
    currentDate.setFullYear(currentYear, currentMonthNumber, currentDay);
    month.textContent = months[currentMonthNumber];
    year.textContent = currentYear.toString();
    days.textContent = '';
    writeMonth(currentMonthNumber);
}