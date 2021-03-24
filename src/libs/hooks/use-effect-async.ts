import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEffectAsync(effect: () => any, deps: unknown[]) {
	React.useEffect(() => {
		const ret = effect();
		if (!(ret instanceof Promise)) return ret;
	}, deps);
}
