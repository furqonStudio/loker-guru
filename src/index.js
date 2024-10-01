import { PrismaClient } from '@prisma/client'
import express, { json } from 'express'

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000
app.use(json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
