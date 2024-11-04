import { app } from '@/app'
import { register } from './controllers/register'
import type { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}