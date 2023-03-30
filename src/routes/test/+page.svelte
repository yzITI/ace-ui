<script>
  import { AButton, AModal, AceButton } from '$lib'
  let show = false
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!" on:click={() => show = true}>test</AButton>
  <AButton style="margin: 1rem;" className="a-round a-shadow">round button</AButton>
  <AButton style="margin: 1rem;" className="a-border" color="#00f" background="#eef">border button</AButton>
</div>

<div style="border: red 1px solid; height: 500px; width: 100%; position: relative;">
  <AModal bind:show={show} className="a-left a-absolute">
    <div style="background: white; min-width: 100%; min-height: 100%; padding: 2rem; box-sizing: border-box;">
      {#each (new Array(20)) as k}
        <h1>hi!</h1>
      {/each}
      <p>hi!</p>
    </div>
  </AModal>
</div>
