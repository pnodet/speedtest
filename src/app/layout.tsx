import './globals.css';
import {IBM_Plex_Mono as IBMPlexMono} from 'next/font/google';
import {Footer} from '@/app/components/footer';

const fontIBM = IBMPlexMono({
	subsets: ['latin'],
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-ibm-plex-mono',
});

export const metadata = {
	title: 'speedtest',
	description: 'Connectivity speed test',
};

const RootLayout = ({children}: {children: React.ReactNode}) => (
	<html
		lang='en'
		className={`h-full min-w-[360px] scroll-smooth bg-[#282a36] ${fontIBM.variable}`}
	>
		<body className='min-h-screen antialiased'>
			<main className='flex h-full min-h-screen w-full flex-1 flex-col items-center justify-center bg-[#282a36] text-center text-white'>
				{children}
				<Footer />
			</main>
		</body>
	</html>
);

export default RootLayout;
