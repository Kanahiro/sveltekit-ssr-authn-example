<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div>ADMIN PAGE YOU ARE AUTHENTICATED USER</div>
<div>Session Token is: {data.dengerouslyExposedSessionToken}</div>
