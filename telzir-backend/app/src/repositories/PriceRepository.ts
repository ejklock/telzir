import Price from '../models/Price'

import { getRepository, Repository } from 'typeorm'
import IPriceRepository from './interfaces/IPriceRepository'
import CreatePriceDTO from '../repositories/DTOS/CreatePriceDTO'
import FindPriceRangeDTO from '../repositories/DTOS/FindPriceRangeDTO'

export default class PriceRepository implements IPriceRepository {
  private repository: Repository<Price>
  constructor () {
    this.repository = getRepository(Price)
  }

  public async create ({ from, to, value }: CreatePriceDTO): Promise<Price> {
    const price = this.repository.create({ from, to, value })
    await this.repository.save(price)
    return price
  }

  public async getAll (): Promise<Price[]> {
    const prices = await this.repository.find()
    return prices
  }

  public async findPriceRange ({ from, to }: FindPriceRangeDTO): Promise<Price> {
    const price = await this.repository.createQueryBuilder('price')
      .where('price.from = :from', { from: from })
      .andWhere('price.to = :to', { to: to }).getOne()

    return price
  }
}
