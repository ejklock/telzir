import express, { Request, Response, NextFunction } from 'express'
import { errors } from 'celebrate'
import 'express-async-errors'
import AppError from './errors/AppError'
import routes from './routes'
import connection from './database'

// Primeiro cria conexão com banco de dados antes de iniciar a API
connection.create().then(() => {
  console.log('database connection created')
  const app = express()
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(express.json())
  app.use(routes)

  // definindo middleware de errod do Celebrate (captura erro de validação das rotas)
  app.use(errors())

  // definindo middleware de captura de erros da aplicação
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message
      })
    }

    console.log(err)
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  })

  app.listen(3333, () => {
    console.log('Server started on http://localhost:3333')
  })
})
