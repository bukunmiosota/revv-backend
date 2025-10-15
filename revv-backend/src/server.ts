import { FastifyInstance } from 'fastify';
import { authRoutes } from './modules/auth/auth.controller';
import { shopRoutes } from './modules/shops/shops.controller';
import { userRoutes } from './modules/users/users.controller';
import { jobRoutes } from './modules/jobs/jobs.controller';

export function registerRoutes(app: FastifyInstance) {
  app.register(authRoutes, { prefix: '/auth' });
  app.register(shopRoutes, { prefix: '/shops' });
  app.register(userRoutes, { prefix: '/users' });
  app.register(jobRoutes, { prefix: '/jobs' });
}
