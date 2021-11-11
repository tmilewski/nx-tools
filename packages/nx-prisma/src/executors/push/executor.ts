import { createPrismaBuilder } from '../core/prisma-builder';
import { PrismaPushSchema } from './schema';

const runExecutor = createPrismaBuilder<PrismaPushSchema>({
  description: 'Pushing Database...',
  command: 'npx prisma db push',
  flags: ['acceptDataLoss', 'forceReset', 'skipGenerate'],
});

export default runExecutor;
