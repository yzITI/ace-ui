<!-- AFile
  slot: default
  events: change
-->
<script>
  export let className = ''
  export let style = ''
  export let multiple = false
  export let accept = ''
  export let files 

  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()

  let fileInput = null

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

<button class={className} {style} on:click={click} on:drop|preventDefault={drop} on:dragenter|preventDefault={() => {}} on:dragover|preventDefault={() => {}}>
  <input type="file" bind:this={fileInput} style="display: none;" {multiple} {accept} on:change={change}>
  <slot></slot>
</button>

