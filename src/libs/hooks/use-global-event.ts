import React from 'react';

export function useDocumentBodyEvent<K extends keyof HTMLElementEventMap>(
	eventName: K,
	callback: (this: HTMLElement, event: HTMLElementEventMap[K]) => unknown,
	deps: unknown[],
) {
	React.useEffect(() => {
		document.body.addEventListener(eventName, callback);
		return () => document.body.removeEventListener(eventName, callback);
	}, deps);
}
