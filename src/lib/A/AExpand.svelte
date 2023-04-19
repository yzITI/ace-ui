<!-- AExpand
  slot: default
-->
<script>
  export let show = false
  export let className = ''
  export let style = ''
  export let axis = 'y'
  export let duration = 300

  import { slide } from 'svelte/transition'
  let slideConfig = {}
  $: slideConfig = { axis }
</script>

{#if show}
  <div transition:slide={{ duration, ...slideConfig }} class={className} {style}>
    <slot></slot>
  </div>
{/if}
