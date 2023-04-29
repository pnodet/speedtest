export const measureConnectionSpeed = async () => {
	const imageAddr =
		'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg';
	const downloadSize = 2_707_459;

	const startTime = Date.now();
	const cacheBuster = `?nnn=${startTime}`;
	const download = new Image();
	download.src = imageAddr + cacheBuster;

	await download.decode();

	const endTime = Date.now();

	const duration = (endTime - startTime) / 1000;
	const bitsLoaded = downloadSize * 8;

	const speedBps = bitsLoaded / duration;
	const speedKbps = speedBps / 1024;
	return speedKbps / 1024; // speed in Mbps
};
