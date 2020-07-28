import Price from '@models/Price'
import PriceRepository from '../repositories/PriceRepository'

export default class GetAllPricesService {
  public async execute (): Promise<Price[]> {
    const priceRepository = new PriceRepository()
    const result = await priceRepository.getAll()
    return result
  }
}
