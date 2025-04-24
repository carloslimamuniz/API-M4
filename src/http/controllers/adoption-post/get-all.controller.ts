import { prisma } from '@/lib/prisma';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getAll(req: FastifyRequest, reply: FastifyReply) {
  try {
    const adoptionPost = await prisma.adoptionPost.findMany()
    return reply.send(adoptionPost)
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}