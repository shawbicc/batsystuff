const fs = require('fs')
const express = require('express')
const app = express()

const rawdata = fs.readFileSync('./data.json')

const data = JSON.parse(rawdata)

app.get('/api/random', (req, res)=>{
    res.send(data[Math.floor(Math.random()*data.length)])
})

app.get('/api/:category', (req, res)=>{
    const cat = req.params.category
    
    const obj = data.filter(o => o.category.find(c => c===cat))
    const final = obj[Math.floor(Math.random()*obj.length)]
    res.send(final)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log(`listening on port ${port}`)})