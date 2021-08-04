import React from 'react';
import { toast } from 'react-toastify';

export function toastifyProblems(
	problems: string[],
	toastMethod: 'error' | 'info' | 'warning' = 'error',
) {
	toast[toastMethod](
		<>
			{problems.map(problem => (
				<React.Fragment key={problem}>
					{problem}
					<br />
				</React.Fragment>
			))}
		</>,
	);
}
