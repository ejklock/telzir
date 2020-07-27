import Plan from '../models/Plan'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Plan)
export default class PlanRepository extends Repository<Plan> {

}
