import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false
	},

	colors: {
		gray: {
			100: '#f7fafc',
			200: '#edf2f7',
			300: '#e2e8f0',
			400: '#cbd5e0',
			500: '#a0aec0',
			600: '#718096',
			700: '#4a5568',
			800: '#2d3748',
			900: '#1a202c',
		},

		darkGreen: {
      100: '#2E7D32', // Lighter shade of green
      500: '#004D40', // Dark green (you can adjust the color code)
    },

		darkRed: {
			100: '#D32F2F', // Lighter shade of red
			500: '#B71C1C', // Dark red (you can adjust the color code)
		},

		fonts: {
			heading: `'Roboto', sans-serif`,
			body: `'Roboto', sans-serif`,
		}
	},
})