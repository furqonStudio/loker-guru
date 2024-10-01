const express = require('express')
const {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} = require('../controllers/userController')

const router = express.Router()

router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
