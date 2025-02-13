/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Deletes and recreates the database, or performs a 'soft reset' by removing all data, tables, indexes, and other artifacts
 */
export interface PrismaResetSchema {
  /**
   * The path to the prisma schema eg. 'prisma/schema.prisma'
   */
  schema?: string;
  /**
   * Optional flags
   */
  options?: {
    /**
     * Skip the confirmation prompt.
     */
    force?: boolean;
    /**
     * Skip triggering seed.
     */
    'skip-seed'?: boolean;
    /**
     * Skip triggering generators (for example, Prisma Client).
     */
    'skip-generate'?: boolean;
  };
}
