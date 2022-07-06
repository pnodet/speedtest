const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				dracula: '#bd93f9',
			},
			fontFamily: {
				mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
