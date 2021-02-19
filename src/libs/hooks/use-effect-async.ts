import React from 'react';

export function useEffectAsync (effect: Function, deps: unknown[]) {
	React.useEffect(() => {
		const ret = effect();
		if (!(ret instanceof Promise)) return ret;
	}, deps);
}
