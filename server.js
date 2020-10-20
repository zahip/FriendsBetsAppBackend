const express = require('express')
const cors = require('cors')


// app config
const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())

// db config

// api routes

app.get('/', (req, res) => {
    console.log('hello api')
  res.status(200).send("zahi")
})

//listen

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})