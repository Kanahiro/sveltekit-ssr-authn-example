// EVEN IF empty this is needed for ensure SSR

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	return {
		dengerouslyExposedSessionToken: cookies.get('nice-session-token'),
	};
};
