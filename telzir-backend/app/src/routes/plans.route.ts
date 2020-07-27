import { Router, Request, Response } from 'express'
import CreatePlanService from '../services/CreatePlanService'

const plansRouter = Router()
const createPlanService = new CreatePlanService()

plansRouter.get('/', async (request, response) => {
  return response.json('plans')
})

plansRouter.post('/', async (request: Request, response: Response) => {
  const { name, freeUntil } = request.body

  const result = await createPlanService.execute({ name, freeUntil })
  return response.json(result)
})

plansRouter.delete('/:id', async (request, response) => {
  try {

  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

plansRouter.post('/import', async (request, response) => {
  try {

  } catch (err) {
    response.status(400).json({ error: err.message })
  }
})

export default plansRouter
