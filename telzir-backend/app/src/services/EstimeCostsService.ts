import PriceRepository from '../repositories/PriceRepository'
import PlanRepository from '../repositories/PlanRepository'
import { getCustomRepository } from 'typeorm'
import Plan from '@models/Plan'
import AppError from '../errors/AppError'

interface EstimatedCost {
  from: string,
  to: string
  withPlan: number
  withoutPlan: number,
  saving: number,
  plan: Plan
}

interface EstimateCostRequest {
  planId: string,
  from: string,
  minutes: number,
  to: string
}

export default class EstimateCostsService {
  public async execute ({ planId, from, to, minutes }: EstimateCostRequest): Promise<EstimatedCost> {
    const priceRepository = getCustomRepository(PriceRepository)
    const planRepository = getCustomRepository(PlanRepository)

    const price = await priceRepository.createQueryBuilder('price')
      .where('price.from = :from', { from: from })
      .andWhere('price.to = :to', { to: to }).getOne()

    if (!price) {
      throw new AppError('Nenhum preço encontrado para a combinação de DDD informada', 404)
    }
    const plan = await planRepository.findOneOrFail(planId)
    const diff = (minutes - plan.freeUntil) > 0 ? (minutes - plan.freeUntil) : 0
    const withPlan = (diff * price.value) * 1.10
    const withoutPlan = minutes * price.value
    // calcula percentual de economia
    const saving = 100 - (withPlan * 100 / withoutPlan)

    return { from, to, withPlan, withoutPlan, saving, plan }
  }
}
