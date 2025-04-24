import { prisma } from '@/lib/prisma';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from "zod";

export async function update(req: FastifyRequest, reply: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const bodySchema = z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().optional(),
    })

    const params = paramsSchema.safeParse(req.params)
    const body = bodySchema.safeParse(req.body)

    if (!params.success || !body.success) {
      return reply.status(400).send({ message: 'Invalid request' })
    }

    const updatedUser = await prisma.user.update({
      where: { id: params.data.id },
      data: body.data,
    })

    return reply.send(updatedUser)
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}