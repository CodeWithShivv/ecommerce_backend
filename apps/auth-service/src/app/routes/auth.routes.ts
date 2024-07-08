import { FastifyInstance } from 'fastify';
import { registerUser, loginUser, changePassword } from '../controllers/auth.controller';

const authRoutes = async (app: FastifyInstance) => {
  app.post('/register', registerUser);
  app.post('/login', loginUser);
  app.post('/change-password', changePassword);
};

export default authRoutes;
