var startButton = document.querySelector('#startButton')
var display = document.querySelector('.time')
var stopButton = document.querySelector('#stopButton')

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
window.addEventListener('keypress', checkKeyBoard)

var hh = 0;
var mm = 0;
var ss = 0;
var activeStart, activeStop = false
var interval;

function checkKeyBoard(event) {
    if (event.code == "Enter") {
        start()
    }
    else if (event.code == "Space") {
        stop()
    }
}

function start() {
    activeStop = false
    if (!activeStart) {
        activeStart = true
        interval = setInterval(timer, 1000)
    }
}

function reset() {
    activeStop = false
    hh = mm = ss = 0
    display.innerHTML = `<p> 00:00:00 </p>`
}

function stop() {
    if (!activeStop) {
        activeStop = true
        activeStart = false
        clearInterval(interval)
    }
    else reset()
}

function timer() {
    ss++

    if (ss == 60) {
        ss = 0
        mm ++

        if (mm == 60) {
            mm = 0
            hh++
        }
    }

    var format = `<p> ${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss} </p>`
    display.innerHTML = format
}

