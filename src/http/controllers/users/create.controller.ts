import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, reply: FastifyReply) {
  try {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    });

    const body = bodySchema.safeParse(req.body);

    if (!body.success) {
      return reply.status(400).send({ message: "Invalid request" });
    }

    const emailAlreadyExists = await prisma.user.findUnique({
      where: {
        email: body.data.email,
      }
    })


    if(emailAlreadyExists) {
      return reply.status(400).send({ message: "Email already exists" });
    }

    await prisma.user.create({
      data: {
        ...body.data,
      }
    });
    reply.status(200).send({message: 'user created'})
  } catch (error) {
    return reply.status(500).send({ message: "Internal server error" });
  }
}
