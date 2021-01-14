const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/Diya", (req, res) => {
    res.send("Hello Diya")
})

app.listen(3000)