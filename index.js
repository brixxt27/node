const express = require('express')
const app = express()
const port = 3000
const MONGODB_URI = 'mongodb+srv://jayoon:jayoon1234@boiler-plate.7nn0qqd.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require('mongoose')
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})