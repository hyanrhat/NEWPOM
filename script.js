let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')
let breakMin = document.getElementById('b_minutes')
let breakSec = document.getElementById('b_seconds')
let workMin = document.getElementById('w_minutes')
let workSec = document.getElementById('w_seconds')

//TIMER SET UP
let startTimer;

function timer(){
    if(workSec.innerText != 0){
        workSec.innerText--;
    }else if(workMin.innerText != 0 && workSec.innerText == 0){
        workSec.innerText = 59;
        workMin.innerText--;
    }

if(workMin.innerText == 0 && workSec.innerText == 0){
    if(breakSec.innerText != 0){
        breakSec.innerText--;
    } else if(breakMin.innerText !=0 && breakSec.innerText == 0){
        breaksec.innerText = 59;
        breakMin.innerText--;
    }
}

if(workMin.innerText == 0 && workSec.innerText == 0 && breakMin.innerText == 0 && breakSec.innerText == 0){
    workMin.innerText = 25;
    workSec.innerText = "00";

    breakMin.innerText = 5;
    breakSec.innerText = "00";

    document.getElementById('counter').innerText++;
} 

function stopInterval(){
    clearInterval(startTimer);
    }
    stop.addEventListener('click', function(){
        stopInterval();
        startTimer = undefined;
    })
}
//Buttons


start.addEventListener('click', function(){
    console.log("working")
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000);
    }
    else{
        alert('RUNNING')
    }
})



reset.addEventListener('click', function(){
    workMin.innerText=25;
    workSec.innerText="00";

    breakMin.innerText = 5;
    breakSec.innerText = "00";
    
    document.getElementById('counter').innerText = 0;
    startTimer = undefined;
})
