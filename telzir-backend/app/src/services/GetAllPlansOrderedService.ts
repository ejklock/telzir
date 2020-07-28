import Plan from '../models/Plan'
import PlanRepository from '../repositories/PlanRepository'

export default class GetAllPlansOrderedService {
  private planRepository: PlanRepository

  public async execute (): Promise<Plan[]> {
    this.planRepository = new PlanRepository()
    const result = await this.planRepository.getAllPlansOrderedByFreeUntil()
    return result
  }
}
