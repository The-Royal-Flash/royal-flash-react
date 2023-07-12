import { css } from '@emotion/react';
import { BREAK_POINTS } from './constants';

const GlobalStyle = css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		--font-color: #27374d;
		--primary-color: #22577e;
		--secondary-color: #1b6b93;
		--light-yellow-color: #fbfddd;
		--yellow-color: #f3e996;
		--dark-yellow-color: #e5bb3c;
		--border-color: #6686a0;
		--button-color: #7297ae;
		--bg-color: #98b4c5;
		--footer-bg-color: #69737ce6;
		--warn-color: #8b1916;
	}

	body {
		--min-width: ${BREAK_POINTS.min};
		--mobile-max: ${BREAK_POINTS.mobile_max};
		--desktop-min: ${BREAK_POINTS.desktop_min};
		--max-width: ${BREAK_POINTS.max};
	}

	html,
	body {
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
		font-family: 'Noto Sans KR', sans-serif;
		/* background-color: var(--body-bg-color); */
	}

	ul,
	li {
		list-style-type: none;
		padding-left: 0;
	}

	a {
		text-decoration: none;
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyle;
