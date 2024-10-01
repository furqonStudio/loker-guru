import { Router } from 'express'
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../controllers/userController'

const router = Router()

router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
