import { create } from 'zustand';

export interface Task {
    id: number;
    title: string;
    description: string | null; // Allow null type
    completed: boolean;
    createdAt: string; // ISO string from Prisma
    updatedAt: string; // ISO string from Prisma
}

interface TaskStore {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    addTask: (task: Task) => void;
    deleteTask: (id: number) => void;
    updateTask: (task: Task) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    updateTask: (updatedTask) => set((state) => ({
        tasks: state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task),
    })),
}));
