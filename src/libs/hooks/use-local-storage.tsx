import React from 'react';

/**
 * Auxiliar function
 */
function makeInitialStateGetter<T>(key: string, initialValueGetter: () => T) {
	return () => {
		const isRenderingOnTheServer = typeof localStorage === `undefined`;
		if (isRenderingOnTheServer) return initialValueGetter();

		const value = localStorage.getItem(key);
		if (value === null) return initialValueGetter();
		else return JSON.parse(value) as T;
	};
}

function useLocalStorageWithInitialValue<T>(key: string, initialValue: T | (() => T)) {
	function getInitialValue() {
		if (initialValue instanceof Function) return initialValue();
		else return initialValue;
	}

	const [value, rawSetValue] = React.useState<T>(makeInitialStateGetter(key, getInitialValue));

	function setValue(newValue: T) {
		localStorage.setItem(key, JSON.stringify(newValue));
		rawSetValue(newValue);
	}

	React.useEffect(() => {
		const value = localStorage.getItem(key);
		if (value === null) {
			const initialValue = getInitialValue();
			rawSetValue(initialValue);
			localStorage.setItem(key, JSON.stringify(initialValue));
		} else rawSetValue(JSON.parse(value));
	}, [key]);

	return [value, setValue] as const;
}

function useLocalStorageWithoutInitialValue<T>(key: string) {
	const [value, rawSetValue] = React.useState<T | null>(makeInitialStateGetter(key, () => null));

	function setValue(newValue: T | null) {
		if (newValue === null) localStorage.removeItem(key);
		else localStorage.setItem(key, JSON.stringify(newValue));
		rawSetValue(newValue);
	}

	React.useEffect(() => {
		const value = localStorage.getItem(key);
		if (value === null) rawSetValue(null);
		else rawSetValue(JSON.parse(value));
	}, [key]);

	return [value, setValue] as const;
}

function useLocalStorage<T extends Record<string, unknown>>(
	key: string,
): [T | null, (newValue: T | null) => void];
function useLocalStorage<T extends Record<string, unknown>>(
	key: string,
	initialValue: T | (() => T),
): [T, (newValue: T) => void];
function useLocalStorage<T extends Record<string, unknown>>(
	key: string,
	initialValue?: T | (() => T),
) {
	if (initialValue) return useLocalStorageWithInitialValue(key, initialValue);
	else return useLocalStorageWithoutInitialValue(key);
}

export { useLocalStorage };
