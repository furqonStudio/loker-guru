const { PrismaClient } = require('@prisma/client')
const express = require('express')

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000
app.use(express.json())

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
}) 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })