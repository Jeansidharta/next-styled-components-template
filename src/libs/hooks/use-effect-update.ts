import React from 'react';
import { useEffectAsync } from './use-effect-async';

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
