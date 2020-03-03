let date = new Date();
date.getDate();
let day = date.getDay();
console.log(date.getDate()) ;

let endDate = new Date(date.getFullYear(), (date.getMonth()),0).getDate();
let prevDate = new Date(date.getFullYear(), date.getMonth(),0).getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.getElementById('month').innerText = months[date.getMonth()];
document.getElementById('current-date').innerText = date.toDateString();



let cells = "";
for(let x = day; x > 0; x--){
    cells += "<div>"+(prevDate - x + 1)+"</div>";
}
for(let i = 0; i<=endDate; i++){
    cells += "<div>"+i+"</div>";
}

document.getElementsByClassName('days')[0].innerHTML = cells;