export var startButton = document.querySelector('#startButton')
export var display = document.querySelector('.time')
export var stopButton = document.querySelector('#stopButton')

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)

export var hh = 0;
export var mm = 0;
export var ss = 0;
export var active = false
export var interval;

export function start() {
    if (!active) {
        active = true
        interval = setInterval(timer, 1000)
    }
}

export function stop() {
    clearInterval(interval)
    hh = mm = ss = 0
    // display.innerHTML = `<p> 00:00:00 </p>`
    active = false
}

export function timer() {
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

