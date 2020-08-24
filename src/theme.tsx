/***************************************************************************
*                         What is this file?                               *
*                                                                          *
* This file is responsible for declaring the styled-components theme       *
* variable.                                                                *
*                                                                          *
***************************************************************************/

import { ThemeProvider, DefaultTheme } from 'styled-components';

/**
* Colors with a gradient. Allows for multiple shades of the same color.
*/
type GradientColor = {
	main: string,
	light: string,
	lighter: string,
	dark: string,
	darker: string,
};

/** Used to describe media-queries related to the screen size. */
type ScreenSizeQuery = {
	/** 320px */
	mobileS: string,
	/** 375px */
	mobileM: string,
	/** 425px */
	mobileL: string,
	/** 768px */
	tablet: string,
	/** 1024px */
	laptop: string,
	/** 1440px */
	laptopL: string,
	/** 2560px, Ultra-high definition, AKA 4K screens */
	uhd: string,
};

/**
* Used to describe shadows of hoverable components, such as buttons.
*/
type HoverableShadow = {
	/** The shadow that should be applied when there is no mouse interaction */
	normal: string,
	/** The shadow that should be applied when the user is clicking the element. */
	active: string,
	/** The shadow that should be applied when the user is hovering the mouse on top
	* of the element. Should also be applied for the `focus` event to provide
	* feedback for keyboard users. */
	hover: string,
};


// This will "merge" `styled-component`'s DefaultTheme type with our custom theme type.
declare module "styled-components" {
  export interface DefaultTheme {
		/** color-related stuff, for pages with primary and secondary colors. */
		colors: {
			primary: GradientColor,
			secondary: GradientColor,

			/** Sometimes, pages will have a color dedicated to objects that should
			* attract the user's attention, like a call-to-action button on a landing page.
			* This is the Action color. */
			action: GradientColor,

			success: GradientColor,
			error: GradientColor,
			warning: GradientColor,

			/** Useful if you have lots of gray colors in your app, and want to have
			* consistency between them. */
			gray: GradientColor,
		},
		/** Font-related stuff. Things like font-family, font-weight or font-size. */
		font: {
			size: {
				large: string,
				medium: string,
				small: string,
			},
		},
		shadows: {
			/** Layout shadows are shadows related to things like cards, the navbar, etc...
			* These shadows are usually larger and more subtle*/
			layout: {
				large: {
					soft: HoverableShadow,
					strong: HoverableShadow,
				},
			},
			/** Button shadows are shadows for clickable elements. They are usually more
			* dynamic and more noticeable. */
			button: {
				small: HoverableShadow,
				medium: HoverableShadow,
				large: HoverableShadow,
			},
		},

		/** For standardizing media-queries. It will mostly be used to contain
		* screen-related media queries, but should also hold queries like `@print`
		* or `@anything-else` */
		mediaQueries: {
			/** Screen-size related queries, that uses the `min-width` filter */
			minScreen: ScreenSizeQuery,

			/** Screen-size related queries, that uses the `max-width` filter */
			maxScreen: ScreenSizeQuery,
		},
  }
}

/* TODO - replace this with an actual color. */
const EMPTY_COLOR = '';

const theme: DefaultTheme = {
	colors: {
		primary: {
			main: EMPTY_COLOR,
			dark: EMPTY_COLOR,
			darker: EMPTY_COLOR,
			light: EMPTY_COLOR,
			lighter: EMPTY_COLOR,
		},
		secondary: {
			main: EMPTY_COLOR,
			dark: EMPTY_COLOR,
			darker: EMPTY_COLOR,
			light: EMPTY_COLOR,
			lighter: EMPTY_COLOR,
		},
		action: {
			main: EMPTY_COLOR,
			dark: EMPTY_COLOR,
			darker: EMPTY_COLOR,
			light: EMPTY_COLOR,
			lighter: EMPTY_COLOR,
		},
		gray: {
			light: '#dddddd',
			lighter: '#eeeeee',
			main: EMPTY_COLOR,
			dark: EMPTY_COLOR,
			darker: EMPTY_COLOR,
		},

		// Material UI's default success colors.
		success: {
			lighter: '#a7d7a9',
			light: '#81c784',
			main: '#4caf50',
			dark: '#388e3c',
			darker: EMPTY_COLOR,
		},

		// Material UI's default error colors.
		error: {
			lighter: '#eb9393',
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			darker: EMPTY_COLOR,
		},

		// Material UI's default warning colors.
		warning: {
			lighter: EMPTY_COLOR,
			light: '#ffb74d',
			main: '#ff9800',
			dark: '#f57c00',
			darker: EMPTY_COLOR,
		},
	},
	font: {
		size: {
			large: '24px',
			medium: '16px',
			small: '14px',
		}
	},
	shadows: {
		layout: {
			large: {
				soft: {
					normal: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
					active: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
					hover: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
				},
				strong: {
					normal: '-3px 3px 12px rgba(0, 0, 0, 0.2)',
					active: '-2px 2px 6px rgba(0, 0, 0, 0.3)',
					hover: '-6px 6px 22px rgba(0, 0, 0, 0.1)',
				},
			},
		},
		button: {
			small: {
				hover: '-3px 3px 3px rgba(0, 0, 0, 0.1)',
				normal: '-2px 2px 2px rgba(0, 0, 0, 0.2)',
				active: '-1px 1px 1px rgba(0, 0, 0, 0.4)',
			},
			medium: {
				hover: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
				normal: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
				active: '-3px 3px 3px rgba(0, 0, 0, 0.3)',
			},
			large: {
				hover: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
				normal: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
				active: '-2px 2px 4px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	mediaQueries: {
		minScreen: {
			mobileS: '@media screen and (min-width: 320px)',
			mobileM: '@media screen and (min-width: 375px)',
			mobileL: '@media screen and (min-width: 425px)',
			tablet: '@media screen and (min-width: 768px)',
			laptop: '@media screen and (min-width: 1024px)',
			laptopL: '@media screen and (min-width: 1440px)',
			uhd: '@media screen and (min-width: 2560px)',
		},
		maxScreen: {
			mobileS: '@media screen and (max-width: 320px)',
			mobileM: '@media screen and (max-width: 375px)',
			mobileL: '@media screen and (max-width: 425px)',
			tablet: '@media screen and (max-width: 768px)',
			laptop: '@media screen and (max-width: 1024px)',
			laptopL: '@media screen and (max-width: 1440px)',
			uhd: '@media screen and (max-width: 2560px)',
		},
	},
};

function FilledThemeProvider ({ ...props }) {
	return <ThemeProvider theme={theme} {...props} />
}

export default FilledThemeProvider;