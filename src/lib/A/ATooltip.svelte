<!-- AModal
  className: a-left a-right a-above a-below
  slot: target, tooltip
-->
<script>
  export let show = false
  export let className = 'a-below'
  export let style = ''
  export let duration = 300

  import { fly } from 'svelte/transition'
  let flyConfig = {}
  $: { // fly transition direction
    if (className.match('a-left')) flyConfig = { x: '100%' }
    if (className.match('a-right')) flyConfig = { x: '-100%' }
    if (className.match('a-above')) flyConfig = { y: '100%' }
    if (className.match('a-below')) flyConfig = { y: '-100%' }
  }
</script>

<div class={'a-tooltip-outer ' + className} style={style}>
  {#if show}
    <div transition:fly={{ duration, ...flyConfig }} class="a-tooltip-tooltip">
      <slot name="tooltip"></slot>
    </div>
  {/if}
  <div class="a-tooltip-target">
    <slot name="target"></slot>
  </div>
</div>

<style>
  div.a-tooltip-outer {
    position: relative;
  }
  div.a-tooltip-tooltip {
    position: absolute;
  }
  div.a-tooltip-target {
    position: relative;
  }
  /* features */
  div.a-tooltip-outer.a-left > div.a-tooltip-tooltip {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  div.a-tooltip-outer.a-right > div.a-tooltip-tooltip {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  div.a-tooltip-outer.a-above > div.a-tooltip-tooltip {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
  div.a-tooltip-outer.a-below > div.a-tooltip-tooltip {
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
  }
</style>
