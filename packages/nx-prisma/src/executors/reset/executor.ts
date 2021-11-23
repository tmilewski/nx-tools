import { createPrismaBuilder } from '../core/prisma-builder';
import { PrismaResetSchema } from './schema';

const runExecutor = createPrismaBuilder<PrismaResetSchema>({
  description: 'Resetting Database...',
  command: 'npx prisma migrate reset',
  flags: ['force', 'skipGenerate', 'skipSeed'],
});

export default runExecutor;
