const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				dracula: '#bd93f9',
			},
		},
	},
	plugins: [],
};
