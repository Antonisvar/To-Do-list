import { procedure } from '../../trpc';
import { z } from 'zod';
import prisma from '../../../prisma';

export const searchTasks = procedure
    .input(z.object({ searchTerm: z.string().optional() }))
    .query(async ({ input }) => {
        const { searchTerm } = input;

        return await prisma.task.findMany({
            where: {
                OR: [
                    { title: { contains: searchTerm, mode: 'insensitive' } },
                    { description: { contains: searchTerm, mode: 'insensitive' } },
                ],
            },
        });
    });