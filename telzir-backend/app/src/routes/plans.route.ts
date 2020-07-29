import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import CreatePlanService from '@services/CreatePlanService'
import GetAllPlansOrderedService from '@services/GetAllPlansOrderedService'

const createPlanService = new CreatePlanService()
const getAllPlansOrderedService = new GetAllPlansOrderedService()
const plansRouter = Router()

plansRouter.get('/', async (request, response) => {
  const result = await getAllPlansOrderedService.execute()
  return response.json(result)
})

plansRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    freeUntil: Joi.number().integer().required()
  })
}), async (request: Request, response: Response) => {
  const { name, freeUntil } = request.body
  const result = await createPlanService.execute({ name, freeUntil })
  return response.json(result)
})

export default plansRouter
