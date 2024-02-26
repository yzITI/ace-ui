<!-- AFile
  slot: default
  events: change
-->
<script>
  let { multiple = false, accept = '', files, ...props } = $props()

  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()

  let fileInput = $state({})

  const click = () => { fileInput?.click() }
  const drop = e => {
    if (!multiple && e.dataTransfer.files.length > 1) return
    fileInput.files = e.dataTransfer.files
    change()
  }
  const change = () => {
    files = fileInput.files
    dispatch('change', files)
  }
</script>

<button {...props} on:click={click} on:drop|preventDefault={drop} on:dragenter|preventDefault={() => {}} on:dragover|preventDefault={() => {}}>
  <input type="file" bind:this={fileInput} style="display: none;" {multiple} {accept} on:change={change}>
  <slot></slot>
</button>
