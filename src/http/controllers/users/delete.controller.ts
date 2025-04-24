import { prisma } from '@/lib/prisma';
import { z } from "zod";
import { FastifyRequest, FastifyReply } from 'fastify';

export async function remove(req: FastifyRequest, reply: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const params = paramsSchema.safeParse(req.params)

    if (!params.success) {
      return reply.status(400).send({ message: 'Invalid ID' })
    }

    await prisma.user.delete({
      where: { id: params.data.id },
    })

    return reply.status(204).send()
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}