require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hi',(req,res) => {
    res.send('welcome to hi page !!')

})

app.get('/login',(req,res) =>{
    res.send('<h1> please login at my website</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
