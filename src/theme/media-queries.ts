/** Used to describe media-queries related to the screen size. */
type ScreenSizeQuery = {
	/** 320px */
	mobileS: string;
	/** 375px */
	mobileM: string;
	/** 425px */
	mobileL: string;
	/** 768px */
	tablet: string;
	/** 1024px */
	laptop: string;
	/** 1440px */
	laptopL: string;
	/** 2560px, Ultra-high definition, AKA 4K screens */
	uhd: string;
	/** Creates a custom media-query */
	custom: (value: number) => string;
};

export type DefaultThemeMediaQueries = {
	/** Screen-size related queries, that uses the `min-width` filter */
	minScreen: ScreenSizeQuery;

	/** Screen-size related queries, that uses the `max-width` filter */
	maxScreen: ScreenSizeQuery;
};

export const DefaultThemeMediaQueries = {
	minScreen: {
		mobileS: `@media screen and (min-width: 320px)`,
		mobileM: `@media screen and (min-width: 375px)`,
		mobileL: `@media screen and (min-width: 425px)`,
		tablet: `@media screen and (min-width: 768px)`,
		laptop: `@media screen and (min-width: 1024px)`,
		laptopL: `@media screen and (min-width: 1440px)`,
		uhd: `@media screen and (min-width: 2560px)`,
		custom: value => `@media screen and (min-width: ${value}px)`,
	},
	maxScreen: {
		mobileS: `@media screen and (max-width: 320px)`,
		mobileM: `@media screen and (max-width: 375px)`,
		mobileL: `@media screen and (max-width: 425px)`,
		tablet: `@media screen and (max-width: 768px)`,
		laptop: `@media screen and (max-width: 1024px)`,
		laptopL: `@media screen and (max-width: 1440px)`,
		uhd: `@media screen and (max-width: 2560px)`,
		custom: value => `@media screen and (max-width: ${value}px)`,
	},
} as DefaultThemeMediaQueries;
