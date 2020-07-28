import Price from '@models/Price'

import FindPriceRangeDTO from '../DTOS/FindPriceRangeDTO'
import CreatePriceDTO from '../DTOS/CreatePriceDTO'

export default interface IPriceRepository {

  findPriceRange ({ from, to }: FindPriceRangeDTO): Promise<Price>
  getAll (): Promise<Price[]>
  create (data: CreatePriceDTO): Promise<Price>
}
