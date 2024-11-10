import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '../utils/trpc';
import React, { useState } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    // Initialize the QueryClient
    const [queryClient] = useState(() => new QueryClient());

    // Initialize the TRPC Client
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000/api/trpc',
                    async headers() {
                        return {
                            // You can add any headers here if needed
                        };
                    },
                }),
            ],
        })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                    <Component {...pageProps} /> {/* Render the current page component */}
                </trpc.Provider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
