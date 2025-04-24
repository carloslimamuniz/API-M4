import { FastifyInstance } from 'fastify'
import { create } from './create.controller'
import { getAll } from './get-all.controller'
import { getAllById } from './get-all-by-id.controller'

export async function adoptionsRoutes(app: FastifyInstance) {
  app.post('/adoption', create)
  app.get('/adoption', getAll)
  app.get('/adoption/:userId', getAllById)
}
