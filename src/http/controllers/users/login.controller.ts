import { prisma } from '@/lib/prisma';
import { z } from "zod";
import { FastifyRequest, FastifyReply } from 'fastify';

export async function login(req: FastifyRequest, reply: FastifyReply) {
  try {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const body = loginSchema.safeParse(req.body)

    if (!body.success) {
      return reply.status(400).send({ message: 'Invalid request' })
    }

    const user = await prisma.user.findUnique({
      where: { email: body.data.email },
    })

    if (!user || user.password !== body.data.password) {
      return reply.status(401).send({ message: 'Invalid credentials' })
    }

    return reply.status(200).send({ message: 'Login successful' })
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}