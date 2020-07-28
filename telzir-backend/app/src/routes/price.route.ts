import { Router, Request, Response } from 'express'
import GetAllPricesService from '@services/GetAllPricesService'
import CreatePriceService from '@services/CreatePriceService'

const getAllPricesService = new GetAllPricesService()
const createPriceService = new CreatePriceService()

const priceRouter = Router()

priceRouter.get('/', async (request, response) => {
  const result = await getAllPricesService.execute()
  return response.json(result)
})

priceRouter.post('/', async (request: Request, response: Response) => {
  const { from, to, value } = request.body
  const result = await createPriceService.execute({ from, to, value })
  return response.json(result)
})

export default priceRouter
