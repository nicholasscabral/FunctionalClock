var input = document.querySelector('.cityInput');
var clockCamp = document.querySelector('.clock');
var cityCamp = document.querySelector('.cityName')
var dateCamp = document.querySelector('.date');
var button = document.querySelector('.submit');
const apikey = '70f1a01147e8401f92f8d8dc73494745'

button.addEventListener('click', getCityData)
window.addEventListener('keypress', detectEnter)

function getCityData() {
    clearInterval(setInterval(displayTime, 1000))  // TEMPORARIO TESTE
    try {
        fetch(`https://api.ipgeolocation.io/timezone?apiKey=${apikey}&location=${input.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            
            let timezone = data["timezone"]
            let date = new Date().toLocaleDateString('pt-BR', {timeZone: timezone})

            dateCamp.innerHTML = `<p> ${date} </p>`
            cityCamp.innerHTML = `<p> ${timezone} </p>`            
            setInterval(displayTime, 1000, timezone)
        })
    } catch (error) {
        console.error(error)
    }
}

function displayTime(timezone) {
    // ERRO NAO ENTER DUAS VEZES MOSTRA DOIS HORARIOS DIFERERNTES
    var cityTime = new Date().toLocaleTimeString('pt-BR', {timeZone: timezone})
    clockCamp.innerHTML = `<p> ${cityTime} </p>`

}

function detectEnter(event) {
    if (event.code == "Enter") {
        getCityData()
    }
}