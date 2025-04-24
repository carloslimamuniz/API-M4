import { adoptionsRoutes } from './http/controllers/adoption-post/routes';
import { usersRoutes } from './http/controllers/users/routes';
import fastify from 'fastify';
export const app = fastify(); 


app.register(usersRoutes)
app.register(adoptionsRoutes)
