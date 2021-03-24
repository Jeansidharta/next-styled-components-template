import React from 'react';
import { useEffectAsync } from './use-effect-async';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEffectUpdate(effect: () => any, deps: unknown[]) {
	const isFirstRender = React.useRef(true);
	useEffectAsync(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		return effect();
	}, deps);
}
