import { resolversProyecto } from '../models/resolvers/projects-resolvers.js';
import { resolversUsuario } from '../models/resolvers/users-resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversProyecto
];
