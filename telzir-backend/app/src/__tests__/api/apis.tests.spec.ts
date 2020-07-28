/** Testes para as principais chamadas que o front-end faz a API */

import request from 'supertest'
import server from '../../serverTests'
import connection from '../../database'

type PlanResponse = {
  name: string,
  freeUntil: number
  id: string
}

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  console.log('END OF TEST')
  await connection.close()
})

describe('GET /plan', () => {
  it('return JSON of Plan', async () => {
    const result = await request(server).get('/plan')
    expect(result.type).toEqual('application/json')
    expect(result.status).toEqual(200)
  })
})

describe('GET /price', () => {
  it('return JSON of Price', async () => {
    await expect(request(server)
      .get('/price')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)).resolves
  })
})

describe('POST /estimate', () => {
  it('CHECK IF COST IS CALCULATED ', () => {
    return request(server)
      .post('/estimate')
      .send({ from: '011', to: '016', minutes: 35, planId: '6efc04d1-b86c-4a59-be62-2f1a768c5b4c' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, {
        from: '011',
        to: '016',
        withPlan: 10.450000000000001,
        withoutPlan: 66.5,
        saving: 84.28571428571429,
        plan: {
          id: '6efc04d1-b86c-4a59-be62-2f1a768c5b4c',
          name: 'Fale 30',
          freeUntil: 30
        }
      })
  })
})
