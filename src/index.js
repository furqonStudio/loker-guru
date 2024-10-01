import express, { json } from 'express'
import userRoutes from './routes/userRoutes.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
