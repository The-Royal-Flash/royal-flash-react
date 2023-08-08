import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0064ff',
		},
		secondary: {
			main: '#1250d8',
		},
	},
	typography: {
		fontFamily: `'Noto Sans KR', sans-serif`,
	},
});

export default theme;
