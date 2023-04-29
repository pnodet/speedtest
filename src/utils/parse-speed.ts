export const convertToMpbs = (value?: number, unit?: string) => {
	// Before the webpage loads, value and unit are empty.
	if (!unit || !value) {
		return 0;
	}

	switch (unit.toLowerCase()) {
		case 'gbps': {
			return value * 1000;
		}

		case 'mbps': {
			return value;
		}

		case 'kbps': {
			return value / 1000;
		}

		case 'bps': {
			return value / 1_000_000;
		}

		default: {
			throw new Error(`Unknown speed unit: ${unit}`);
		}
	}
};
