import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';



const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}

export default MyApp;

