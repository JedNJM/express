const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/users',(req,res)=>{
    res.send('users')
})
app.listen(3000)