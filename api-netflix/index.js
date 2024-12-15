const express = require("express");
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "Hello World API" })
})

app.listen(PORT, () => {
    console.log("Server API berjalan di PORT " + PORT);
})