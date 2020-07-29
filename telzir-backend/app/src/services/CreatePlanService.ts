import Plan from '../models/Plan'
import PlanRepository from '../repositories/PlanRepository'
import CreatePlanDTO from '../repositories/DTOS/CreatePlanDTO'

export default class CreatePlanService {
  private planRepository: PlanRepository
  public async execute ({ name, freeUntil }: CreatePlanDTO): Promise<Plan> {
    this.planRepository = new PlanRepository()
    const result = await this.planRepository.create({ name, freeUntil })
    return result
  }
}
