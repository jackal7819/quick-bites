/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./App.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				oswald: 'Oswald_400Regular',
				lato: 'Lato_400Regular',
			},
		},
	},
	plugins: [],
};
