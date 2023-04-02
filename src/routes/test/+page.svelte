<script>
  import { AButton, AModal, ATooltip, ASwitch, AceButton } from '$lib'
  let showModal = false
  let showTooltip = false
  let switchValue = false
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!" on:click={() => showModal = !showModal}>Toggle Modal</AButton>
  <ATooltip show={showTooltip} style="margin: 1rem;" className="a-below">
    <AButton slot="target" className="a-round a-shadow" on:mouseenter={() => showTooltip = true} on:mouseleave={() => showTooltip = false}>Toggle Tooltip</AButton>
    <div slot="tooltip" style="background: gray; color: white; border-radius: 5px; margin: 0.25rem; padding: 0.125rem 0.25rem; font-size: 0.8rem;">
      tooltip!
    </div>
  </ATooltip>
  <AButton style="margin: 1rem;" className="a-border" color="#00f" background="#eef">border button</AButton>
</div>

<div style="border: red 1px solid; height: 500px; width: 100%; position: relative;">
  <AModal bind:show={showModal} className="a-absolute a-left">
    <div style="background: white; width: 300px; min-height: 100%; padding: 2rem; box-sizing: border-box; overflow: auto;">
      {#each (new Array(20)) as k}
        <h1>hi!</h1>
      {/each}
      <p>hi!</p>
    </div>
  </AModal>
</div>

<ASwitch bind:value={switchValue}></ASwitch>
