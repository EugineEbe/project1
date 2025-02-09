import express from "express";

const app = express()

const Port = 6969;

app.get('/', (req, res) =>{
    res.json({msg: "Hello All"})
}) 

app.listen(Port, () =>{
    console.log(`The server is running at http://localhost:${Port} `);
})