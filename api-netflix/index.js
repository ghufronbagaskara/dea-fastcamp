const express = require("express");
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.status(200).json({ message: "Hello World API" })
})

// Melihat list favorite movie
app.get("/my-movies", (request, response) => {
    console.log("Movies API get hit!");
    response.json({ data: "Dilan 2020" })

})

// Menambah favorite movie
app.post("/my-movies", (request, response) => {
    console.log("insert new favorite movie..");
    const data = request.body
    console.log({ data });
    response.status(201).json({ message: "success" })

})

// Menghapus favorite movie
app.delete("/my-movies/:id/:token", (request, response) => {
    console.log("delete favorite movie..");
    const { id, token } = request.params
    console.log({ id, token });
    response.status(204).json({ message: "success" })

})

// Menambah data user untuk verifikasi sistem auth
app.post("/token", (request, response) => {
    console.log("creating user token..");
    const data = response.body
    console.log({ data });
    response.status(201).json({ message: "token created.." })

})

app.listen(PORT, () => {
    console.log("Server API berjalan di PORT " + PORT);
})