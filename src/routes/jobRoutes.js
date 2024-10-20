import express from 'express'
import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  getJobById
} from '../controllers/jobController.js'

const router = express.Router()

router.post('/create-job', createJob)
router.get('/get-job', getAllJobs)
router.get('/get-job/:id', getJobById)
router.put('/update-job/:id', updateJob)
router.delete('/delete-job/:id', deleteJob)

export default router
