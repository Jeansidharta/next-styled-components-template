import React from 'react';

export type ErrorDetails<ServerErrorRespponse> = {
	/** If no response was received, this will be null */
	statusCode: number | null;
	/**
	 * Here's a brief description of each possible value:
	 * - NO_RESPONSE: No response was received from the server. This is probably a connection error.
	 * - INVALID_JSON: The server responded with a `Content-Type: application/json`, but the response
	 * 	body was an invalid JSON object.
	 * - APPLICATION: The error could not be determined by this framework. This means it's probably an
	 * 	application error.
	 */
	errorType: 'NO_RESPONSE' | 'INVALID_JSON' | 'RESPONSE_UNPARSEABLE' | 'APPLICATION';
	/** If no response was received, this will be null */
	serverResponse: ServerErrorRespponse | null;
	errorObject: Error | null;
};

export type RequestState<Data> = {
	/**
	 * Here's a brief description of each possible value:
	 * - NOT_SENT: The request was not sent yet. You must call the makeRequest function.
	 * - LOADING: The request was sent, but a response was not received.
	 * - DONE: The request was sent, and a successful response was received.
	 * - ERROR: The request was sent, but either no response was receive, or a
	 * 	response was received, but with a non 200 status code.
	 */
	status: 'NOT_SENT' | 'LOADING' | 'DONE' | 'ERROR';
	data: Data | null;
	error: ErrorDetails<Data> | null;
};

export type FetchMethod = 'GET' | 'PATCH' | 'POST' | 'OPTIONS';

function generateRequestHeaders(
	body: Record<any, any> | undefined,
	additionalHeaders: Record<string, string>,
) {
	const headers: Record<string, string> = {
		...additionalHeaders,
	};
	const isBodyAnObject = body && typeof body === 'object';
	const wasContentTypeAlreadySpecified =
		additionalHeaders['Content-Type'] || additionalHeaders['content-type'];

	if (isBodyAnObject && !wasContentTypeAlreadySpecified) {
		headers['Content-Type'] = 'application/json';
	}

	return headers;
}

function serializeBodyForRequest(body: unknown) {
	if (!body) return;
	if (typeof body === 'object') return JSON.stringify(body);
	return (body as any).toString() as string;
}

function canFetchMethodHaveBody(method: FetchMethod) {
	switch (method) {
		case 'GET':
		case 'OPTIONS':
			return false;
		default:
			return true;
	}
}

export function useRequest<Data>(url: string, method: FetchMethod) {
	const [requestStatus, setRequestStatus] = React.useState<RequestState<Data>>({
		status: 'NOT_SENT',
		data: null,
		error: null,
	});

	const makeRequest = React.useCallback(
		async (body?: Record<any, any>, additionalHeaders: Record<string, string> = {}) => {
			if (!canFetchMethodHaveBody(method) && body) {
				throw new Error(`You cannot send a body with a request of method '${method}'`);
			}
			setRequestStatus({ data: null, error: null, status: 'LOADING' });
			let response: Response;
			try {
				response = await fetch(url, {
					method,
					headers: generateRequestHeaders(body, additionalHeaders),
					body: serializeBodyForRequest(body),
					credentials: 'include', // Allow for cookies to be sent along the request
				});
			} catch (errorObject: any) {
				const errorDetails: ErrorDetails<Data> = {
					errorType: 'NO_RESPONSE',
					serverResponse: null,
					statusCode: null,
					errorObject,
				};

				setRequestStatus({ data: null, error: errorDetails, status: 'ERROR' });

				throw errorDetails;
			}

			let serverResponse: Data;
			if (response.headers.get('content-type')?.startsWith('application/json')) {
				try {
					serverResponse = (await response.json()) as Data;
				} catch (errorObject: any) {
					const errorDetails: ErrorDetails<Data> = {
						errorType: 'INVALID_JSON',
						serverResponse: null,
						statusCode: response.status,
						errorObject,
					};
					setRequestStatus({ data: null, error: errorDetails, status: 'ERROR' });
					throw errorDetails;
				}
			} else {
				try {
					serverResponse = (await response.text()) as any as Data;
				} catch (errorObject: any) {
					const errorDetails: ErrorDetails<Data> = {
						errorType: 'RESPONSE_UNPARSEABLE',
						serverResponse: null,
						statusCode: response.status,
						errorObject,
					};
					setRequestStatus({ data: null, error: errorDetails, status: 'ERROR' });
					throw errorDetails;
				}
			}

			if (!response.ok) {
				const errorDetails: ErrorDetails<Data> = {
					errorType: 'APPLICATION',
					serverResponse,
					statusCode: null,
					errorObject: null,
				};
				setRequestStatus({ data: null, error: errorDetails, status: 'ERROR' });
				throw errorDetails;
			}

			setRequestStatus({ data: serverResponse, error: null, status: 'DONE' });
			return serverResponse;
		},
		[],
	);

	return [makeRequest, requestStatus] as const;
}
