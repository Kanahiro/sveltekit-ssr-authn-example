import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
	if (!event.url.pathname.startsWith('/admin')) {
		return resolve(event);
	}

	// check session in cookie
	const session =
		event.cookies
			.getAll()
			.find((cookie) => cookie.name === 'nice-session-token')?.value ?? '';

	const authenticated = session === 'supersecret';

	if (!authenticated) {
		redirect(303, '/');
	} else {
		return resolve(event);
	}
};
