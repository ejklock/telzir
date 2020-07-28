import { Router, Request, Response } from 'express'
import CreatePlanService from '../services/CreatePlanService'
import PlanRepository from '../repositories/PlanRepository'
import { getCustomRepository } from 'typeorm'

const plansRouter = Router()
const createPlanService = new CreatePlanService()

plansRouter.get('/', async (request, response) => {
  const planRepository = getCustomRepository(PlanRepository)
  const result = await planRepository.createQueryBuilder('plans').orderBy('freeUntil', 'ASC').getMany()
  return response.json(result)
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
