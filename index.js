import express from 'express'

import {authRoutes} from './src/routes/authRoutes.js'

const app = express()
app.use(express.json())

app.use(authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`App running on localhost:${PORT}`)
})