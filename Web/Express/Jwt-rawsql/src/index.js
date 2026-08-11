// import express dan init
const express = require('express')
const app = express();

// import cors dan init
const cors = require('cors')
const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions))

//import dotenv
require('dotenv').config();

// parsing json
app.use(express.json())

// import Routes
const authRoutes = require('./routes/authRoutes')
const movieRoutes = require('./routes/movieRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

// mounting routes
app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/movies', movieRoutes)

// error handler basic
app.use( (err, erq, res, next) => {
    console.error(err)
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    })
})


// init server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}` )
})