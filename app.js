const express = require('express')
const cors = require('cors')
const fs = require("fs")
const app = express()
const port = 3000

const corsOptions = {
  origin: 'http://localhost:3006',
  optionsSuccessStatus: 200
}

app.get('/users', cors(corsOptions), (req, res) => {
    const file = fs.readFileSync( __dirname + '/src/data/users.json', 'utf8');
    const json= JSON.parse(file);
    res.json(json)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})