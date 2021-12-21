import { projectResolvers } from '../models/resolvers/projects-resolvers.js';
import { userResolvers } from '../models/resolvers/users-resolvers.js';

export const resolvers = [
  userResolvers,
  projectResolvers
];
