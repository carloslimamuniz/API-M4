import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, reply: FastifyReply) {
  try {
    const bodySchema = z.object({
      title: z.string().min(1, 'Title is required'),
      description: z.string().min(1, 'Description is required'),
      imageUrl: z.string().url().optional(),
      userId: z.string().uuid()
    })

    const body = bodySchema.safeParse(req.body)

    if (!body.success) {
      return reply.status(400).send({
        message: 'Invalid request',
        errors: body.error.flatten(),
      })
    }

    const post = await prisma.adoptionPost.create({
      data: body.data
    })

    return reply.status(201).send(post)
  } catch (error) {
    console.error(error)
    return reply.status(500).send({ message: 'Internal server error' })
  }
}
