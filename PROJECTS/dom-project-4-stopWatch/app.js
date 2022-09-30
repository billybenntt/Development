// Select Elements
const startStopBtn = document.getElementById("startStopBtn")
const resetBtn = document.getElementById("resetBtn")
const displayTimer = document.getElementById("timer")


// General Variables
let seconds = 0
let hours = 0
let leadingSeconds = 0
let minutes = 0
let leadingMinutes = 0
let leadingHours = 0

//  Set Interval and Time Status

let timerInterval = null;
let timerStatus = "stopped";


// Stop Watch Function

const stopWatch = () => {

    seconds++

    // Time Changing Logic
    if (seconds / 60 === 1) {
        seconds = 0
        minutes++
    }
    if (minutes / 60 === 1) {
        minutes = 0
        hours++
    }

    // Padding Logic
    if (seconds < 10) {
        leadingSeconds = `0${seconds.toString()}`
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10) {
        leadingMinutes = `0${minutes.toString()}`
    } else {
        leadingMinutes = minutes
    }

    if (hours < 10) {
        leadingHours = `0${hours.toString()}`
    } else {
        leadingHours = hours
    }


    // Text Embedding HTML
    displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`

}

// Start and Pause Timer
startStopBtn.addEventListener("click", () => {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000)

        // Conditional Rendering
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = 'started'

    } else {
        // Stop the Timer
        window.clearInterval(timerInterval)
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped'
    }

})

// Reset Timer
resetBtn.addEventListener("click", () => {

    // Stop the Timer
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer.innerText = `00:00:00`
})
