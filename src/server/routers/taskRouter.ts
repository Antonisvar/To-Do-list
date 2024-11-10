import { router } from '../trpc';
import { findAllTasks } from './task/findAllTasks';
import { createTask } from './task/createTask';
import { searchTasks } from './task/searchTasks';
import { updateTask } from './task/updateTask';
import { deleteTask } from './task/deleteTask';

export const taskRouter = router({
    getAll: findAllTasks,
    // Create: Add a new task
    create: createTask,
    // Search: Find tasks by title or description
    search: searchTasks,
    // Update: Update an existing task by ID
    update: updateTask,
    // Delete: Delete a task by ID
    delete: deleteTask,
});

export const appRouter = router({
    task: taskRouter,
});

export type AppRouter = typeof appRouter;
