export const measureConnectionSpeed = async () => {
	const imageAddr =
		'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg';
	const downloadSize = 2707459;

	const startTime = new Date().getTime();
	const cacheBuster = '?nnn=' + startTime;
	const download = new Image();
	download.src = imageAddr + cacheBuster;

	await download.decode();

	const endTime = new Date().getTime();

	const duration = (endTime - startTime) / 1000;
	const bitsLoaded = downloadSize * 8;

	const speedBps = bitsLoaded / duration;
	const speedKbps = speedBps / 1024;
	const speedMbps = speedKbps / 1024;
	return Number(speedMbps.toFixed(3));
};
