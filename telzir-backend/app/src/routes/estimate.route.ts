import { Router, Request, Response } from 'express'
import EstimateCostsService from '../services/EstimeCostsService'

const estimateCostsService = new EstimateCostsService()

const estimateRouter = Router()

estimateRouter.post('/', async (request: Request, response: Response) => {
  const { planId, from, to, minutes } = request.body
  const result = await estimateCostsService.execute({ planId, from, to, minutes })
  return response.json(result)
})

export default estimateRouter
