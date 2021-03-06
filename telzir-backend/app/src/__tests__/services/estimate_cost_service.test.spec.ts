import connection from '../../database'
import EstimateCostsService from '@services/EstimeCostsService'

// Cria conexão com o banco de dados antes de iniciar os testes
beforeAll(async () => {
  await connection.create()
})

// Finaliza a conexão com o banco de dados ao terminar os testes
afterAll(async () => {
  console.log('END OF TEST')
  await connection.close()
})

describe('Test Cost Estimation Service for Plan Fale Mais 60', () => {
  it('Tests whether the service calculates correctly for 80 Minutes', async () => {
    const estimateCostsService = new EstimateCostsService()
    const result = await estimateCostsService.execute({
      planId: '78bdbd83-77bd-4de6-98dd-c3fe5002b93b',
      from: '011',
      to: '017',
      minutes: 80
    })
    expect(result.withPlan.toPrecision(3)).toEqual('37.4')
  })
})
