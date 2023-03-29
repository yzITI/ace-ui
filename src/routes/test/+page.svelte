<script>
  import AButton from '$lib/AButton.svelte'
  import AceButton from '$lib/AceButton.svelte'
  import AModal from '$lib/AModal.svelte'
  let show = false
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!" on:click={() => show = true}>test</AButton>
  <AButton style="margin: 1rem;" className="a-round a-shadow">round button</AButton>
  <AButton style="margin: 1rem;" className="a-border" color="#00f" background="#eef">border button</AButton>
</div>

<AModal bind:show={show}></AModal>
<AceButton></AceButton>
