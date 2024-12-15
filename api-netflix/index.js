const express = require("express");
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "Hello World API" })
})

app.get("/movies", (request, response) => {
    console.log("Movies API get hit!");
    response.json({ data: "Dilan 2020" })

})

app.listen(PORT, () => {
    console.log("Server API berjalan di PORT " + PORT);
})