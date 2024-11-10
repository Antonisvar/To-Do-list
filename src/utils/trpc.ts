import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/routers/taskRouter';

export const trpc = createTRPCReact<AppRouter>();
