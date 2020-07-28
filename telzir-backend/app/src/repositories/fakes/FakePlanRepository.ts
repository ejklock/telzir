import Plan from '../models/Plan'

export default class PlanRepository {
  private plans: Plan[] = []

  public async getAllOrderedByFreeUntil (): Promise<Plan[]> {
    return this.plans
  }

  public async create({}):Promise<Plan[]>{

  }
}
