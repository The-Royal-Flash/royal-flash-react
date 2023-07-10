export const MIN_WIDTH_PX = '370px';
export const MOBILE_MAX_PX = '640px';
export const MAX_WIDTH_PX = '1280px';

export const LAYOUT_BG_COLOR = '#f4f3f3';

// media query
export const MQ = [MIN_WIDTH_PX, MOBILE_MAX_PX].map(
	(breakPoint) => `@media(min-width: ${breakPoint})`,
);
