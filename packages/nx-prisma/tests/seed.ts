// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaClient } from './artifacts/client';

const prisma = new PrismaClient();

export const run = async () => {
  await prisma.user.upsert({
    create: { email: 'Example', name: 'User' },
    update: {},
    where: { email: 'Example' },
  });

  prisma.$disconnect();
};

run();
