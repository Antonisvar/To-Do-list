import { initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

// Initialize the TRPC instance
const t = initTRPC.create();

// Create the context for the TRPC server
export const createContext = ({ req, res }: CreateNextContextOptions) => ({});
export type Context = ReturnType<typeof createContext>;

// Export router and procedure for usage in other files
export const router = t.router;
export const procedure = t.procedure;
