import React from 'react';

export function useLayoutEffectAsync(effect: Function, deps: unknown[]) {
	React.useLayoutEffect(() => {
		const ret = effect();
		if (!(ret instanceof Promise)) return ret;
	}, deps);
}
