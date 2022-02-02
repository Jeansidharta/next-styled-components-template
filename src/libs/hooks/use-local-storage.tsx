import React from 'react';

type SetterFunction<T> = (oldValue: T) => T;

function useLocalStorageWithInitialValue<T>(key: string, initialValue: T | (() => T)) {
	function getInitialValue() {
		if (initialValue instanceof Function) return initialValue();
		else return initialValue;
	}

	const [value, rawSetValue] = React.useState<T>(() => {
		if (typeof localStorage === `undefined`) return getInitialValue();

		const value = localStorage.getItem(key);
		if (value === null) return getInitialValue();
		else return JSON.parse(value) as T;
	});

	React.useEffect(() => {
		const value = localStorage.getItem(key);
		if (value === null) {
			const initialValue = getInitialValue();
			rawSetValue(initialValue);
			localStorage.setItem(key, JSON.stringify(initialValue));
		} else rawSetValue(JSON.parse(value));
	}, [key]);

	function setValue(newValue: T | SetterFunction<T>) {
		localStorage.setItem(key, JSON.stringify(newValue));
		rawSetValue(newValue);
	}

	return [value, setValue];
}

function useLocalStorageWithoutInitialValue<T>(key: string) {
	const [value, rawSetValue] = React.useState<T | null>(() => {
		if (typeof localStorage === `undefined`) return null;

		const value = localStorage.getItem(key);
		if (value === null) return null;
		else return JSON.parse(value) as T;
	});

	React.useEffect(() => {
		const value = localStorage.getItem(key);
		if (value === null) rawSetValue(null);
		else rawSetValue(JSON.parse(value));
	}, [key]);

	function setValue(newValue: T | null | SetterFunction<T | null>) {
		if (newValue === null) localStorage.removeItem(key);
		else localStorage.setItem(key, JSON.stringify(newValue));
		rawSetValue(newValue);
	}

	return [value, setValue];
}

function useLocalStorage<T extends Object>(
	key: string,
): [T | null, (newValue: T | null | SetterFunction<T | null>) => void];
function useLocalStorage<T extends Object>(
	key: string,
	initialValue: T | (() => T),
): [T, (newValue: T | SetterFunction<T>) => void];
function useLocalStorage<T extends Object>(key: string, initialValue?: T | (() => T)) {
	if (initialValue) return useLocalStorageWithInitialValue(key, initialValue);
	else return useLocalStorageWithoutInitialValue(key);
}

export { useLocalStorage };
