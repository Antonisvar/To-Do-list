import { procedure } from '../../trpc';
import { z } from 'zod';
import prisma from '../../../prisma';

export const deleteTask = procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
        return await prisma.task.delete({
            where: { id: input.id },
        });
    });