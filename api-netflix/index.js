const express = require("express");
const cors = require("cors")
const { OK, ERR } = require('./utils/response')

const app = express()
const PORT = 3002

app.use(express.json())
app.use(cors())

// Main Endpoint (Good Format)
app.get("/", (request, response) => {
    // response.status(200).json({ message: "Hello World API" })
    const data = {
        isRunning: true,
        serverVersion: "1.0.0"
    }
    OK(response, 201, data, "success getting server main endpoint")
})

// Melihat list favorite movie (Good Format)
app.get("/my-movies", (request, response) => {
    console.log("Movies API get hit!");
    // response.json({ data: "Dilan 2020" })
    const data = {
        id: 1,
        title: "Iron Man",
        years: "2023"
    }
    OK(response, 200, data, "success getting my-movies endpoint")
})

// Menambah favorite movie (Still bad format)
app.post("/my-movies", (request, response) => {
    console.log("insert new favorite movie..");
    const data = request.body
    console.log({ data });
    response.status(201).json({ message: "success" })

})

// Menghapus favorite movie (Still bad format)
app.delete("/my-movies/:id/:token", (request, response) => {
    console.log("delete favorite movie..");
    const { id, token } = request.params
    console.log({ id, token });
    response.status(204).json({ message: "success" })

})

// Menambah data user untuk verifikasi sistem auth (Still bad format)
app.post("/token", (request, response) => {
    console.log("creating user token..");
    const data = response.body
    console.log({ data });
    response.status(201).json({ message: "token created.." })

})

app.listen(PORT, () => {
    console.log("Server API berjalan di PORT " + PORT);
})