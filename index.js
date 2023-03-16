const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')

app.use(cors())
app.use(express.json())

// database connection
const connectDb = require('./connect')
connectDb()

// routes
const router = require('./routes/router')
app.use('/api',router) 

// Statis files
app.use(express.static(path.join(__dirname, './frontend/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

const port = 4000

app.listen(port, () => {
    console.log(`Server is running  on port http://localhost:${port}`)
})
