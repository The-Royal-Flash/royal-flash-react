import { css } from '@emotion/react';
import { maxWidth, minWidth, mobileWidth } from '../utils/mediaQueries';
import './font.css';

const GlobalStyle = css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		--primary-color: #0064ff;
		--secondary-color: #1250d8;

		--font-color: #27374d;
		--font-hover-color: #276af3;

		--btn-color: #0064ff;
		--btn-font-color: #1a57df;
		--btn-bg-hover-color: #dcecff;
		--btn-border-color: #c6c6c6;
		--btn-hover-color: #1250d8;
		--btn-hover-border-color: #3081ff;

		--box-border-color: #d8dde6;
		--box-bg-color: #eff0f2;

		--footer-bg-color: #202632;

		--light-gray: #e0e4e6;
		--gray: #8c8e9c;
		--gray-1: #e6eaee;
		--gray-2: #69737ce6;
		--gray-3: #4e5968;
		--dark-gray: #202632;

		--chip-color: #2a67e4;

		--warn-color: #c22d2a;
	}

	body {
		--min-width: ${minWidth}px;
		--mobile-max: ${mobileWidth}px;
		--desktop-min: ${mobileWidth + 1}px;
		--max-width: ${maxWidth}px;
	}

	html,
	body {
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
		font-family: 'Noto Sans KR', sans-serif;
	}

	ul,
	li {
		list-style-type: none;
		padding-left: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyle;
