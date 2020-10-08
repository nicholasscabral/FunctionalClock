const express = require('express')
const server = express()

server
.use(express.static("public"))
.use(express.urlencoded({ extended: true }))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/pages/index.html")
})

.get("/timer.html", (req, res) => {
    return res.sendFile(__dirname + "/pages/timer.html")
})

.get("/countdown.html", (req, res) => {
    return res.sendFile(__dirname + "/pages/countdown.html")
})

.get("/currentTime.html", (req, res) => {
    return res.sendFile(__dirname + "/pages/currentTime.html")
})

.listen(3400, () => {
    console.log("servidor iniciado/reiniciado...")
})