import Price from '../models/Price'

import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Price)

export default class PriceRepository extends Repository<Price> {

}
