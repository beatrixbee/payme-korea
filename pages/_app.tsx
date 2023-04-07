import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
	return <>
		<Head>
			<title>Quant Admin</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<SessionProvider
			session={session}
			// Re-fetch session every 5 minutes
			refetchInterval={60 * 30 + 1}
		>
			<Component {...pageProps} />
		</SessionProvider>
	</>;
}

export default App;