import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express()

const Port = 6969;

app.get('/', (req, res) =>{
    res.json({msg: "Hello All"})
}) 

app.use('/movies', movieRoutes);


app.listen(Port, () =>{
    console.log(`The server is running at http://localhost:${Port} `);
})