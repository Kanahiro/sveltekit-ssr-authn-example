import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	signin: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (username !== 'admin' || password !== 'password') {
			return {
				result: null,
				error: { message: 'Invalid username or password' },
			};
		}

		// authenticated
		cookies.set('nice-session-token', 'supersecret', {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
		});
		redirect(303, '/admin');
	},
	signout: async ({ cookies }) => {
		cookies.set('nice-session-token', '', {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			expires: new Date(0),
		});
		redirect(303, '/');
	},
};
