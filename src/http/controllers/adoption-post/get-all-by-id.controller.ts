import { prisma } from '@/lib/prisma';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function getAllById(req: FastifyRequest, reply: FastifyReply) {
  try {
    const paramsSchema = z.object({
      userId: z.string().uuid()
    })

    const parsed = paramsSchema.safeParse(req.params)

    if (!parsed.success) {
      return reply.status(400).send({
        message: 'Invalid user ID',
        errors: parsed.error.errors,
      })
    }

    const { userId } = parsed.data

    const adoptionPosts = await prisma.adoptionPost.findMany({
      where: {
        userId,
      },
    })

    return reply.send(adoptionPosts)
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}