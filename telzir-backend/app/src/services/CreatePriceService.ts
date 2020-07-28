import PriceRepository from '../repositories/PriceRepository'
import Price from '@models/Price'
import CreatePriceDTO from '../repositories/DTOS/CreatePriceDTO'

export default class CreatePriceService {
  private priceRepository: PriceRepository

  public async execute ({ from, to, value }: CreatePriceDTO): Promise<Price> {
    this.priceRepository = new PriceRepository()
    const result = await this.priceRepository.create({ from, to, value })
    return result
  }
}
