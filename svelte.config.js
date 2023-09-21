import adapter from '@sveltejs/adapter-auto'
import delegateEvents from 'svelte-preprocess-delegate-events/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [delegateEvents()]
}

export default config
