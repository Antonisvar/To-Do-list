import { procedure } from '../../trpc';
import { z } from 'zod';
import prisma from '../../../prisma';

export const updateTask = procedure
    .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        completed: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
        return await prisma.task.update({
            where: { id: input.id },
            data: {
                title: input.title,
                description: input.description,
                completed: input.completed,
            },
        });
    });