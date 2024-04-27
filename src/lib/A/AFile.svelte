<!-- AFile
  snippet: children
  events: change
-->
<script>
  let { multiple = false, accept = '', change, children, ...props } = $props()

  let fileInput = $state({})

  const click = () => { fileInput?.click() }
  const drop = e => {
    e.preventDefault()
    if (!multiple && e.dataTransfer.files.length > 1) return
    fileInput.files = e.dataTransfer.files
    change(fileInput.files)
  }
  const preventDefault = e => {
    e.preventDefault()
  }
</script>

<button {...props} onclick={click} ondrop={drop} ondragenter={preventDefault} ondragover={preventDefault}>
  <input type="file" bind:this={fileInput} style="display: none;" {multiple} {accept} onchange={() => { change(fileInput.files) }}>
  {@render children()}
</button>
