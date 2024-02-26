<!-- AExpand
  slot: default
-->
<script>
  let { show = false, axis = 'y', duration = 300, ...props } = $props()

  import { slide } from 'svelte/transition'
  let slideConfig = $state({})
  $effect(() => {
    slideConfig = { axis }
  })
</script>

{#if show}
  <div transition:slide={{ duration, ...slideConfig }} {...props}>
    <slot></slot>
  </div>
{/if}
