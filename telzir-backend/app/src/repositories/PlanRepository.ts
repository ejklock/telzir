import Plan from '../models/Plan'
import { getRepository, Repository } from 'typeorm'
import IPlanRepository from './interfaces/IPlanRepository'
import CreatePlanDTO from '../repositories/DTOS/CreatePlanDTO'

export default class PlanRepository implements IPlanRepository {
  private repository: Repository<Plan>
  constructor () {
    this.repository = getRepository(Plan)
  }

  public async create ({ name, freeUntil }: CreatePlanDTO): Promise<Plan> {
    const plan = this.repository.create({ name, freeUntil })
    await this.repository.save(plan)
    return plan
  }

  public async getAllPlansOrderedByFreeUntil (): Promise<Plan[]> {
    const plans = await this.repository.createQueryBuilder('plans').orderBy('freeUntil', 'ASC').getMany()
    return plans
  }

  public async firstOrFail (planID: string): Promise<Plan> {
    const plan = await this.repository.findOneOrFail(planID)
    return plan
  }
}
