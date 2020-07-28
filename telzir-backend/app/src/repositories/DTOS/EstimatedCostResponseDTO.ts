import Plan from '@models/Plan'

export default interface EstimatedCostRespondeDTO {
  from: string,
  to: string
  withPlan: number
  withoutPlan: number,
  saving: number,
  plan: Plan
}
