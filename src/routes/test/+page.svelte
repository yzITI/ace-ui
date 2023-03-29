<script>
  import AButton from '$lib/AButton.svelte'
  import AceButton from '$lib/AceButton.svelte'
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!">test</AButton>
  <AButton style="margin: 1rem;" className="a-round a-shadow">round button</AButton>
  <AButton style="margin: 1rem;" className="a-border" color="#00f" background="#eef">border button</AButton>
</div>

<AceButton></AceButton>
