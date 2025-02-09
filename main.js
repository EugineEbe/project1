import express from "express";

const app = express()

const Port = 6969;

app.get('/', (req, res) =>{
    res.json({msg: "Hello All"})
}) 


app.get('/movies', ()=>{

})

app.post('/movies', ()=>{

})

app.put('/movies/:id', ()=>{

})

app.delete('/movies/:id', ()=>{

})


app.listen(Port, () =>{
    console.log(`The server is running at http://localhost:${Port} `);
})