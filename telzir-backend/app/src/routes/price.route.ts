import { Router, Request, Response } from 'express'
import PriceRepository from '../repositories/PriceRepository'
import { getCustomRepository } from 'typeorm'

const priceRouter = Router()

priceRouter.get('/', async (request, response) => {
  const priceRepository = getCustomRepository(PriceRepository)
  const result = await priceRepository.find()
  return response.json(result)
})

priceRouter.post('/', async (request: Request, response: Response) => {
  const priceRepository = getCustomRepository(PriceRepository)
  const { from, to, value } = request.body
  const result = await priceRepository.save({ from, to, value })
  return response.json(result)
})

export default priceRouter
