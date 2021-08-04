import { toast } from 'react-toastify';
import { ErrorDetails, useRequest } from '../libs/hooks/use-request';

type Post = {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
};

export function useFetchTodos() {
	const [makeRequest, state] = useRequest<Post[]>(
		'https://jsonplaceholder.typicode.com/todos',
		'GET',
	);

	async function fetchTodos() {
		try {
			await makeRequest();
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
					break;
			}
			throw error;
		}
	}

	return [fetchTodos, state] as const;
}
