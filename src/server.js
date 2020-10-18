const express = require('express')
const server = express()

server
.use(express.static("public"))
.use(express.urlencoded({ extended: true }))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/pages/index.html")
})

.get("/timer", (req, res) => {
    return res.sendFile(__dirname + "/pages/timer.html")
})

.get("/countdown", (req, res) => {
    return res.sendFile(__dirname + "/pages/countdown.html")
})

.get("/currentTime", (req, res) => {
    return res.sendFile(__dirname + "/pages/currentTime.html")
})

.listen(3400, () => {
    console.log("servidor iniciado/reiniciado...")
})