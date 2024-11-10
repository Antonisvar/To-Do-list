import { procedure } from '../../trpc';
import { z } from 'zod';
import prisma from '../../../prisma';

export const createTask = procedure
    .input(z.object({
        title: z.string(),
        description: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
        return await prisma.task.create({ data: input });
    });