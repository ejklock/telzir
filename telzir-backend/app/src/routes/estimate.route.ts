import { Router, Request, Response } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import EstimateCostsService from '../services/EstimeCostsService'

const estimateCostsService = new EstimateCostsService()

const estimateRouter = Router()

estimateRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    from: Joi.string().required(),
    to: Joi.string().disallow(Joi.ref('from')).required().error(() => {
      return new Error('Os DDDs de Origem e Destino devem ser diferentes')
    }),
    minutes: Joi.number().integer(),
    planId: Joi.string().uuid().required()
  })
}), async (request: Request, response: Response) => {
  const { planId, from, to, minutes } = request.body
  const result = await estimateCostsService.execute({ planId, from, to, minutes })
  return response.json(result)
})

export default estimateRouter
