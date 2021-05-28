import React from 'react';
import { useLayoutEffectAsync } from './use-layout-effect-async';

export function useLayoutEffectUpdate(effect: Function, deps: unknown[]) {
	const isFirstRender = React.useRef(true);
	useLayoutEffectAsync(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		return effect();
	}, deps);
}
