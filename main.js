import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express()

const Port = 6969;

app.use(express.json())
app.use(express.urlencoded())

connectDB();

app.get('/', (req, res) =>{
    res.json({msg: "Hello All"})
}) 

app.use('/movies', movieRoutes);


app.listen(Port, () =>{
    console.log(`The server is running at http://localhost:${Port} `);
})