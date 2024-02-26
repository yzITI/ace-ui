<script>
  import { AButton, AExpand, AFlex, AIcon, AModal, AAttach, ASwitch, ACheckbox } from '$lib'
  import { mdiAbTesting } from '@mdi/js'
  let showModal = false
  let showAttach = false
  let switchValue = false
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!" onclick={() => { console.log('hi!') }}>Toggle Modal</AButton>
  <AAttach show={showAttach} style="margin: 1rem;" className="a-left-top">
    <AButton slot="target" className="a-round a-shadow" on:click={() => showAttach = !showAttach}>Toggle attach</AButton>
    <div slot="attach" style="background: gray; color: white; border-radius: 5px; margin: 0.25rem; padding: 0.125rem 0.25rem; font-size: 0.8rem;">
      attach!
    </div>
  </AAttach>
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

<AExpand show={showModal}>
  <ASwitch bind:value={switchValue}></ASwitch>
  <ACheckbox bind:value={switchValue}></ACheckbox>
</AExpand>

<AButton>
  <AFlex>
    <AIcon path={mdiAbTesting} size="1rem" color="red"></AIcon>
    <div>HAHAHAH</div>
  </AFlex>
</AButton>

