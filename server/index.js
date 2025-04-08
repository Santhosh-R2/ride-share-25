const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./dbConnection')
const cors = require('cors')
const PORT = 4040

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/uploads`))
app.use(cors())

const route = require('./routes')
app.use('/', route)

app.listen(PORT, () => {
    console.log(`Server created successfully at ${PORT}`);
})