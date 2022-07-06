import '@/styles/globals.css';
import Head from 'next/head';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const customApp = ({
	Component,
	pageProps: {session, ...pageProps},
}: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

	return getLayout(
		<>
			<Head>
				{/* Meta properties */}
				<meta property='og:title' content='title' />
				<meta name='description' content='description' />
				<meta name='robots' content='index, no-follow' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</>,
	);
};

export default customApp;
