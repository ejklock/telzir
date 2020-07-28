import Plan from '@models/Plan'

import CreatePlanDTO from '../DTOS/CreatePlanDTO'
export default interface IPlanRepository {

  getAllPlansOrderedByFreeUntil (): Promise<Plan[]>
  firstOrFail (planID: string): Promise<Plan>
  create (data: CreatePlanDTO): Promise<Plan>

}
