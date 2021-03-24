import React from 'react';

export function useEffectAsync(effect: () => any, deps: unknown[]) {
	React.useEffect(() => {
		const ret = effect();
		if (!(ret instanceof Promise)) return ret;
	}, deps);
}
