import { FastifyInstance } from 'fastify';
import { registerUser, authUser } from '../controllers/auth.controller';

const authRoutes = async (app: FastifyInstance) => {
  app.post('/register', registerUser);
  app.post('/login', authUser);
};

export default authRoutes;
