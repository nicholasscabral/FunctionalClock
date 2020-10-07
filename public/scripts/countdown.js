var inputTimeValue = document.querySelector('input[type="time"]')
var display = document.querySelector('.time')
var startButton = document.querySelector('#startButton')
var stopButton = document.querySelector('#stopButton')

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)


// let time = initalMinutes * 60
var interval;

function start() {
    var initalMinutes = inputTimeValue["value"]
    // interval = setInterval(countdown, 1000)
    console.log(inputTimeValue)
    console.log(initalMinutes)
}

// function stop() {
//     clearInterval(interval)
//     display.innerHTML = `<p>--:--</p>`
// }

// function countdown() {
//     const minutes = Math.floor(time / 60)
//     let seconds = time % 60
//     console.log("aaaa")
//     display.innerHTML = `<p>  ${minutes}:${seconds}  </p>`
//     time--
// }
