import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import AppError from './errors/AppError'
import routes from './routes'

const app = express()

// evita bloqueio por cors nos testes
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.json())
app.use(routes)

// definindo middleware de captura de erros da aplicação
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const server = app.listen(3334)

export default server
