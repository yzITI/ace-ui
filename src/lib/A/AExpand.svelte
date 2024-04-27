<!-- AExpand
  snippet: children
-->
<script>
  let { show = $bindable(false), axis = 'y', duration = 300, children, ...props } = $props()

  import { slide } from 'svelte/transition'
  let slideConfig = $state({})
  $effect(() => {
    slideConfig = { axis }
  })
</script>

{#if show}
  <div transition:slide={{ duration, ...slideConfig }} {...props}>
    {@render children()}
  </div>
{/if}
