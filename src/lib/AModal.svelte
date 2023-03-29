<!-- AModal
  className: a-absolute a-left a-right a-top a-bottom // Todo
-->
<script>
  export let show = false // binding
  export let className = ''
  export let style = ''
  import { fade } from 'svelte/transition'
</script>

{#if show}
  <div transition:fade on:click={() => show = false} on:keyup={() => {}} class={'outer' + className} style={style}>
    <div on:click|stopPropagation={() => {}} on:keyup={() => {}} class="inner">
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  div.outer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }
  div.outer.a-absolute {
    position: absolute;
  }
  div.inner {
    position: relative;
  }
</style>
