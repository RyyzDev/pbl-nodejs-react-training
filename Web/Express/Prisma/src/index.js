// import express
const express = require('express')
// init express
const app = express();
// set port
const port = 8000

// import cors
const cors = require('cors')
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// json body parsing
app.use(express.json())

// import routes
const categoryRoutes = require('./routes/categoryRoutes')
const movieRoutes = require('./routes/movieRoutes')

// init routes
app.use('/api/movies', movieRoutes)
app.use('/api/category', categoryRoutes)

// run server
app.listen(port, () => {
     console.log(`Server run on http://localhost:${port}`)
})