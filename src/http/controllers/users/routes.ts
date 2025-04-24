import { create } from './create.controller'
import { login } from './login.controller'
import { update } from './update.controller'
import { getAll } from './get-all.controller'
import { remove } from './delete.controller'
import { FastifyInstance } from 'fastify'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', create)
  app.get('/users', getAll)
  app.put('/users/:id', update)
  app.delete('/users/:id', remove)

  app.post('/users/auth/login', login)
}
