import { css } from '@emotion/react';
import { maxWidth, minWidth, mobileWidth } from './utils/mediaQueries';

const GlobalStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
		--light-bg-color: #eaeff2;
		--footer-bg-color: #69737ce6;
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
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyle;
