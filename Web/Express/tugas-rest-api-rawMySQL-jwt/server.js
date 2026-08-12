// import express
const express = require('express')
const app = express();
// import dotenv
require('dotenv').config();
// set port
const port = process.env.PORT || 3000;

// json parsing
app.use(express.json())

// import cors dan init
const cors = require('cors')
const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions))

// import routes
// mounting routes



// error handler basic
app.use( (err, req, res, next) =>{ 
    console.log(err)
    res.status(err.status || 500).json({
        error: err.message || 'Internal server error'
    })
})

// init server
app.listen(port, () => {
    console.log("Server Running :) on localhost with por", port)
})