import fastify from 'fastify';
import * as dotenv from 'dotenv';
import connectDB from './app/config/db';
import authRoutes from './app/routes/auth.routes';
import testRoutes from './app/routes/root';

dotenv.config();
connectDB();

const app = fastify({ logger: true });


app.register(authRoutes, { prefix: '/api/v1/auth' });
app.register(testRoutes,{prefix: '/api/v1/test'})



const start = async () => {
  try {
    await app.listen({ port: parseInt(process.env.PORT || '3333', 10), host: '0.0.0.0' });
    app.log.info(`Server listening on ${process.env.PORT || 3333}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
