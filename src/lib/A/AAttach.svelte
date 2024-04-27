<!-- AAttach
  class: a-left-top a-left-center a-left-bottom a-right-top a-right-center a-right-bottom a-top-left a-top-center a-top-right a-bottom-left a-bottom-center a-bottom-right
  snippet: target, attach
-->
<script>
  let { show = $bindable(false), axis = '', duration = 300, target, attach, ...props } = $props()

  import { slide } from 'svelte/transition'
  let slideConfig = $state({})
  $effect(() => {
    if (axis) slideConfig = { axis }
    else { // auto direction
      if (props.class?.match('a-left') || props.class?.match('a-right')) slideConfig = { axis: 'x' }
      if (props.class?.match('a-top') || props.class?.match('a-bottom')) slideConfig = { axis: 'y' }
    }
  })
</script>

<div class:a-attach-outer={true} {...props}>
  {#if show}
    <div transition:slide={{ duration, ...slideConfig }} class="a-attach-attach">
      {@render attach()}
    </div>
  {/if}
  <div class="a-attach-target">
    {@render target()}
  </div>
</div>

<style>
  div.a-attach-outer {
    position: relative;
    display: inline-block;
  }
  div.a-attach-attach {
    position: absolute;
  }
  div.a-attach-target {
    position: relative;
  }
  /* features */
  div.a-attach-outer.a-left-top > div.a-attach-attach {
    right: 100%;
    top: 0;
  }
  div.a-attach-outer.a-left-center > div.a-attach-attach {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  div.a-attach-outer.a-left-bottom > div.a-attach-attach {
    right: 100%;
    bottom: 0;
  }
  div.a-attach-outer.a-right-top > div.a-attach-attach {
    left: 100%;
    top: 0;
  }
  div.a-attach-outer.a-right-center > div.a-attach-attach {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  div.a-attach-outer.a-right-bottom > div.a-attach-attach {
    left: 100%;
    bottom: 0;
  }
  div.a-attach-outer.a-top-left > div.a-attach-attach {
    left: 0;
    bottom: 100%;
  }
  div.a-attach-outer.a-top-center > div.a-attach-attach {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
  div.a-attach-outer.a-top-right > div.a-attach-attach {
    right: 0;
    bottom: 100%;
  }
  div.a-attach-outer.a-bottom-left > div.a-attach-attach {
    left: 0;
    top: 100%;
  }
  div.a-attach-outer.a-bottom-center > div.a-attach-attach {
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
  }
  div.a-attach-outer.a-bottom-right > div.a-attach-attach {
    right: 0;
    top: 100%;
  }
</style>
