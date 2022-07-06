import type {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';
import {measureConnectionSpeed} from 'utils/speedtest';

const Loader = () => (
	<div className='h-5 w-5 animate-ping rounded-full bg-dracula' />
);

const Home: NextPage = () => {
	const [res, setRes] = useState<number>();
	const [isLoading, setLoading] = useState<boolean>();

	const launch = async () => {
		setLoading(() => true);
		const result = await measureConnectionSpeed();
		setRes(() => result);
		setLoading(() => false);
	};

	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-[#282a36] py-2'>
			<Head>
				<title>speedtest</title>
			</Head>

			<main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
				{(res || isLoading) && (
					<p className='mt-6 mb-12 content-center justify-center text-4xl font-bold text-dracula'>
						{isLoading ? <Loader /> : `${res} Mbps`}
					</p>
				)}

				{!isLoading && (
					<button
						className='rounded-md border-2 border-dracula p-3 text-lg text-dracula'
						onClick={launch}
					>
						LAUNCH
					</button>
				)}
			</main>

			<footer className='flex h-24 w-full items-center justify-center'>
				<a
					className='flex items-center justify-center gap-2 text-dracula'
					href='https://github.com/pnxdxt'
					target='_blank'
					rel='noopener noreferrer'
				>
					Made with 🤍 by <b>pnxdxt</b>
				</a>
			</footer>
		</div>
	);
};

export default Home;
