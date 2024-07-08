import { Schema } from '@hapi/joi';
import { FastifyRequest, FastifyReply } from 'fastify';

export const validateMiddleWare = (schema: Schema) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
      reply.status(400).send({ errors: error.details.map((err: any) => err.message) });
    }
  };
};
