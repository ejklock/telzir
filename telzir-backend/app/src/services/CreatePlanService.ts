import Plan from '../models/Plan'
import PlanRepository from '../repositories/PlanRepository'
import CreatePlanDTO from '../repositories/DTOS/CreatePlanDTO'

export default class CreatePlanService {
  public async execute ({ name, freeUntil }: CreatePlanDTO): Promise<Plan> {
    const planRepository = new PlanRepository()
    const result = await planRepository.create({ name, freeUntil })
    return result
  }
}
