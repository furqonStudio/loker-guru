import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

app.use(json())

app.post('/users', async (req, res) => {
  const { name, password, university, major, email, contact } = req.body

  try {
    const user = await prisma.user.create({
      data: {
        name,
        password,
        university,
        major,
        email,
        contact,
      },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' })
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' })
  }
})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  const { name, password, university, major, email, contact } = req.body

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, password, university, major, email, contact },
    })
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' })
  }
})

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
