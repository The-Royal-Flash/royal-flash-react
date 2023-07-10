import { css } from '@emotion/react';

const GlobalStyle = css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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
`;

export default GlobalStyle;
