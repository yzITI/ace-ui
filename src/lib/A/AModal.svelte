<!-- AModal
  className: a-absolute a-left a-right a-top a-bottom
  slot: default
-->
<script>
  export let show = false // binding
  export let className = ''
  export let style = ''
  export let disable = false
  export let background = 'rgba(0, 0, 0, 0.6)'
  export let duration = 300

  import { cubicOut } from 'svelte/easing'
  import { fade, fly } from 'svelte/transition'
  let flyConfig = {}
  $: { // fly transition direction
    if (className.match('a-left')) flyConfig = { x: '-100%' }
    if (className.match('a-right')) flyConfig = { x: '100%' }
    if (className.match('a-top')) flyConfig = { y: '-100%' }
    if (className.match('a-bottom')) flyConfig = { y: '100%' }
  }
  function close () {
    if (!disable) show = false
  }
</script>

{#if show}
  <div class={'a-modal-outer ' + className} {style}>
    <div transition:fade={{ duration, easing: cubicOut }} class="a-modal-bg" style:background on:click={close} on:keyup={() => {}} />
    <div transition:fly={{ duration, ...flyConfig }} class="a-modal-inner">
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  div.a-modal-outer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  div.a-modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  div.a-modal-inner {
    position: relative;
    overflow: auto;
  }
  /* features */
  div.a-modal-outer.a-absolute {
    position: absolute;
  }
  div.a-modal-outer.a-left {
    justify-content: start;
  }
  div.a-modal-outer.a-right {
    justify-content: end;
  }
  div.a-modal-outer.a-top {
    align-items: start;
  }
  div.a-modal-outer.a-bottom {
    align-items: end;
  }
  div.a-modal-outer.a-left > div.a-modal-inner, div.a-modal-outer.a-right > div.a-modal-inner {
    height: 100%;
    max-width: 90%;
  }
  div.a-modal-outer.a-bottom > div.a-modal-inner, div.a-modal-outer.a-top > div.a-modal-inner {
    width: 100%;
    max-height: 90%;
  }
</style>
