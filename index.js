const express = require('express')
const app = express()

app.listen('3000')

let author = "Paulo"

//middleware
app.use(express.json())

app.route('/').get((req,res)=>res.send(author))
app.route('/').put((req,res)=>{
    author = req.body.author
    res.send(author)
})
app.route('/:identificador').delete((req,res)=>res.send(req.params.identificador))