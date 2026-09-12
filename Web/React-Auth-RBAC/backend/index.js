// import express
import express from 'express'
// import cors
import cors from 'cors'

// import routes
import categoryRoutes from './routes/categoryRoutes.js'
import movieRoutes from './routes/movieRoutes.js'

// init express
const app = express();
// set port
const port = 8000

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// json body parsing
app.use(express.json())

// init routes
app.use('/api/movies', movieRoutes)
app.use('/api/categories', categoryRoutes)

// run server
app.listen(port, () => {
     console.log(`Server run on http://localhost:${port}`)
})