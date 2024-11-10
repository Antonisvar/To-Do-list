import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/taskRouter'; // Import your router
import { createContext } from '../../../server/trpc';

export default createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
});
