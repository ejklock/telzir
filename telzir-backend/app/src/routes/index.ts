import { Router, response } from 'express'

import plansRouter from './plans.route'
import priceRouter from './price.route'
import estimateRouter from './estimate.route'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json('Telzir API')
})

routes.use('/plan', plansRouter)
routes.use('/price', priceRouter)
routes.use('/estimate', estimateRouter)

export default routes
