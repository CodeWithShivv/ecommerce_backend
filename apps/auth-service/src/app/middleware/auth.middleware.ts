import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

export const protect = async (req: FastifyRequest, reply: FastifyReply) => {
  let token: string | undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      console.error(error);
      reply.status(401).send('Not authorized, token failed');
    }
  }

  if (!token) {
    reply.status(401).send('Not authorized, no token');
  }
};
