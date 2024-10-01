const express = require('express')
const { json } = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
