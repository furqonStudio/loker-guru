import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' })
  }
}

export const getUserById = async (req, res) => {
  const { id } = req.params

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' })
  }
}

export const createUser = async (req, res) => {
  const { name, password, university, major, email, contact } = req.body

  try {
    const user = await prisma.user.create({
      data: { name, password, university, major, email, contact },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' })
  }
}

export const updateUser = async (req, res) => {
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
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' })
  }
}
