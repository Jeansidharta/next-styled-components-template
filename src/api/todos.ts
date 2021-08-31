import { useRequestWithToastError } from '../libs/hooks/use-request-with-toast-error';

type Post = {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
};

export function useFetchTodos() {
	return useRequestWithToastError<Post[]>('https://jsonplaceholder.typicode.com/todos', 'GET');
}
