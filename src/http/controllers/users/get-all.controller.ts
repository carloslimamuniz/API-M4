import { prisma } from '@/lib/prisma';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getAll(req: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await prisma.user.findMany()
    return reply.send(users)
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}