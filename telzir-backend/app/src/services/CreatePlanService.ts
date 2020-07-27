import Plan from '../models/Plan'
import PlanRepository from '../repositories/PlanRepository'
import { getCustomRepository } from 'typeorm'

interface CreatePlanRequest {
  name: string;
  freeUntil: number

}
export default class CreatePlanService {
  public async execute ({ name, freeUntil }: CreatePlanRequest): Promise<Plan> {
    const planRepository = getCustomRepository(PlanRepository)
    const result = await planRepository.save({ name, freeUntil })
    return result
  }
}
