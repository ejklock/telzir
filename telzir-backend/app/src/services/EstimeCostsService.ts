import PriceRepository from '../repositories/PriceRepository'
import PlanRepository from '../repositories/PlanRepository'
import Plan from '@models/Plan'
import AppError from '../errors/AppError'
import EstimateCostRequestDTO from '../repositories/DTOS/EstimateCostRequestDTO'
import EstimatedCostRespondeDTO from '../repositories/DTOS/EstimatedCostResponseDTO'

export default class EstimateCostsService {
  public async execute ({ planId, from, to, minutes }: EstimateCostRequestDTO): Promise<EstimatedCostRespondeDTO> {
    const planRepository = new PlanRepository()
    const priceRepository = new PriceRepository()
    const plan = await planRepository.firstOrFail(planId)
    const price = await priceRepository.findPriceRange({ from, to })

    if (!price || !plan) {
      throw new AppError('Nenhum Preço ou Plan encontrado para a combinação de DDD informada', 404)
    }

    const diff = (minutes - plan.freeUntil) > 0 ? (minutes - plan.freeUntil) : 0
    const withPlan = (diff * price.value) * 1.10
    const withoutPlan = minutes * price.value
    // calcula percentual de economia
    const saving = 100 - (withPlan * 100 / withoutPlan)

    return { from, to, withPlan, withoutPlan, saving, plan }
  }
}
