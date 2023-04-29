'use client';

import {useEffect, useMemo, useState} from 'react';
import {Loader} from '@/app/components/loader';
import {measureConnectionSpeed} from '@/utils/speedtest';

const debounce = (
	callback: (...args: any[]) => any,
	delay: number,
	...args: any[]
) => {
	let interval: NodeJS.Timeout | undefined;
	return () => {
		clearTimeout(interval);
		interval = setTimeout(() => {
			interval = undefined;
			callback(args);
		}, delay);
	};
};

const Home = () => {
	const [delay, setDelay] = useState<number>(25);
	const [res, setRes] = useState<number>();
	const [arr, setArr] = useState<number[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const measure = async () => {
		const result = await measureConnectionSpeed();
		setArr(arr => [...arr, result]);
		setIsLoading(() => false);
	};

	const measureWithDebounce = useMemo(() => debounce(measure, delay), [delay]);

	useEffect(() => {
		measureWithDebounce();
		setDelay(prev => Math.floor(prev * 1.2));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [arr]);

	useEffect(() => {
		setRes(() =>
			Number(
				(arr.reduce((alpha, beta) => alpha + beta, 0) / arr.length).toFixed(2),
			),
		);
	}, [arr]);

	return (
		<div className='flex h-full w-full items-center justify-center'>
			{isLoading ? (
				<Loader />
			) : (
				<p className='text-4xl font-bold text-dracula'>&darr; {res} Mbps</p>
			)}
		</div>
	);
};

export default Home;
