import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { ErrorDetails, useRequest } from './use-request';

export function useRequestWithToastError<T>(...args: Parameters<typeof useRequest>) {
	const [rawMakeRequest, state] = useRequest<T>(...args);

	const makeRequest = useCallback(async () => {
		try {
			await rawMakeRequest();
		} catch (untypedError: unknown) {
			console.log(untypedError);
			const error = untypedError as ErrorDetails<unknown>;
			switch (error.errorType) {
				case 'NO_RESPONSE':
					toast.error(
						'There was a problem connecting to the server. Please, check your internet connection',
					);
					break;

				case 'RESPONSE_UNPARSEABLE':
				case 'INVALID_JSON':
					toast.error("There was with the server's response. Please, try again later");
					break;
				case 'APPLICATION':
					toast.error('Unknown error. Please, try again later');
					throw error;
			}
		}
	}, [rawMakeRequest]);

	return [makeRequest, state] as const;
}
