/**
 * Used to describe shadows of hoverable components, such as buttons.
 */
type HoverableShadow = {
	/** The shadow that should be applied when there is no mouse interaction */
	normal: string;
	/** The shadow that should be applied when the user is clicking the element. */
	active: string;
	/** The shadow that should be applied when the user is hovering the mouse on top
	 * of the element. Should also be applied for the `focus` event to provide
	 * feedback for keyboard users. */
	hover: string;
};

export type DefaultThemeShadows = {
	/** Layout shadows are shadows related to things like cards, the navbar, etc...
	 * These shadows are usually larger and more subtle */
	layout: {
		large: {
			soft: HoverableShadow;
			strong: HoverableShadow;
		};
	};
	/** Button shadows are shadows for clickable elements. They are usually
	 * sharper and more dynamic. */
	button: {
		small: HoverableShadow;
		medium: HoverableShadow;
		large: HoverableShadow;
	};
};

export const DefaultThemeShadows = {
	layout: {
		large: {
			soft: {
				normal: `-4px 4px 12px rgba(0, 0, 0, 0.1)`,
				active: `-4px 4px 12px rgba(0, 0, 0, 0.1)`,
				hover: `-4px 4px 12px rgba(0, 0, 0, 0.1)`,
			},
			strong: {
				normal: `-3px 3px 12px rgba(0, 0, 0, 0.2)`,
				active: `-2px 2px 6px rgba(0, 0, 0, 0.3)`,
				hover: `-6px 6px 22px rgba(0, 0, 0, 0.1)`,
			},
		},
	},
	button: {
		small: {
			hover: `-3px 3px 3px rgba(0, 0, 0, 0.1)`,
			normal: `-2px 2px 2px rgba(0, 0, 0, 0.2)`,
			active: `-1px 1px 1px rgba(0, 0, 0, 0.4)`,
		},
		medium: {
			hover: `-3px 3px 3px rgba(0, 0, 0, 0.3)`,
			normal: `-3px 3px 3px rgba(0, 0, 0, 0.3)`,
			active: `-3px 3px 3px rgba(0, 0, 0, 0.3)`,
		},
		large: {
			hover: `-2px 2px 4px rgba(0, 0, 0, 0.2)`,
			normal: `-2px 2px 4px rgba(0, 0, 0, 0.2)`,
			active: `-2px 2px 4px rgba(0, 0, 0, 0.2)`,
		},
	},
} as DefaultThemeShadows;
