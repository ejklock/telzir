import { Router, Request, Response } from 'express'

import plansRouter from './plans.route'
import priceRouter from './price.route'
import estimateRouter from './estimate.route'

const routes = Router()

routes.use('/plan', plansRouter)
routes.use('/price', priceRouter)
routes.use('/estimate', estimateRouter)

export default routes
