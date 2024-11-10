import { procedure } from '../../trpc';
import prisma from '../../../prisma';

export const findAllTasks = procedure.query(async () => {
    return await prisma.task.findMany();
});