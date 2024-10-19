import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllJobs = async (req, res) => {
    try{
        const jobs = await prisma.job.findMany()
        res.json(jobs)

    }catch(error){
        res.status(500).json({error : 'error fetching users'})}
}

export const getJobById = async (req,res) => {
    const id = req.params.id;

    try{
        const job = await prisma.job.findUnique({
            where : { id: Number(id) },
        })

        if(!job){
            return res.status(400).json({error : 'job not found'})
        }

        res.json(job)

    }catch(error){
        res.status(500).json({error : 'error fetching jobs' + error})
    }
}

export const createJob = async(req, res) => {
    try{
        //school id must replace with token and create function from helper
        const { school_id, title, description,requirements,salary } = req.body

        // validate the req body
        if (!school_id || !title || !description || !requirements || !salary) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const job = await prisma.job.create({
            data : { school_id, title, description,requirements,salary }
        })
        res.status(201).json(job)

    }catch(error){
        res.status(500).json({error : 'error creating job' + error})
    }
}

export const updateJob = async(req, res) => {
    const id = req.params
    const { school_id, title, description,requirements,salary } = req.body

    try {
        const job = await prisma.job.update({
            where : { id : Number(id) },
            data : { school_id, title, description,requirements,salary },
        })

        res.status(201).json(job)
    }catch(error){
        res.status(500).json({error: 'Error updating job'})
    }
}

export const deleteJob = async(req,res) => {
    const id = req.params 

    try{
        await prisma.job.delete({
            where : { id : Number(id) }
        })
        res.status(201).send()
    }catch(error){
        res.status(500).json({error: 'Error deleting job'})
    }
}