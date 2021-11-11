import { names } from '@nrwl/devkit';
import { exec, startGroup } from '@nx-tools/core';
import { info } from 'console';

export interface PrismaBuilderOptions {
  schema?: string;
  [k: string]: any;
}

export interface PrismaCommands<T extends PrismaBuilderOptions> {
  description: string;
  command: string;
  flags?: (keyof T)[];
}

const extractArgs = <T extends PrismaBuilderOptions>(options: T, flags: (keyof T)[]) => {
  const args = [];

  for (const [key, value] of Object.entries(options)) {
    if (!flags.includes(key)) {
      args.push(`--${key}=${value}`);
    }
  }

  return args;
};

const extractFlags = <T extends PrismaBuilderOptions>(options: Record<string, boolean> = {}, flags: (keyof T)[]) => {
  const parsedFlags = [];
  for (const [key, value] of Object.entries(options)) {
    if (flags.includes(key) && value) {
      parsedFlags.push(`--${names(key).fileName}`);
    }
  }

  return parsedFlags;
};

export const runCommand = async <T extends PrismaBuilderOptions>(
  { description, command, flags = [] }: PrismaCommands<T>,
  options: T,
): Promise<{ success: true }> => {
  startGroup(description, 'Nx Prisma');

  const commandArgs = extractArgs(options, flags);
  const commandFlags = extractFlags(options, flags);

  const args = [...commandArgs, ...commandFlags];

  info(`Running: ${command} ${args.join(' ')}`);

  await exec(command, args);

  return { success: true };
};
