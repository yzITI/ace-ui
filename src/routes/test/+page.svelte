<script>
  import { AButton, AExpand, AFlex, AIcon, AModal, AAttach, ASwitch, ACheckbox } from '$lib'
  import { mdiAbTesting } from '@mdi/js'
  let showModal = $state(false)
  let showAttach = $state(false)
  let switchValue = $state(false)
  let iconColor = $state('red')
</script>

<div style="display: flex; align-items: center; padding: 2rem; background: #fff;">
  <AButton style="margin: 1rem;" title="hi!" onclick={() => { showModal = !showModal }}>Toggle Modal</AButton>
  <AAttach show={showAttach} style="margin: 1rem;" class="a-left-top">
    <AButton slot="target" class="a-round a-shadow" onclick={() => showAttach = !showAttach}>Toggle attach</AButton>
    <div slot="attach" style="background: gray; color: white; border-radius: 5px; margin: 0.25rem; padding: 0.125rem 0.25rem; font-size: 0.8rem;">
      attach!
    </div>
  </AAttach>
  <AButton class="a-border" style="color: blue; background: #eef; margin: 1rem;">border button</AButton>
</div>

<div style="border: red 1px solid; height: 500px; width: 100%; position: relative;">
  <AModal bind:show={showModal} class="a-absolute a-left">
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

<AButton onclick={() => { iconColor = 'blue' }}>
  <AFlex>
    <AIcon path={mdiAbTesting} color={iconColor}></AIcon>
    <div>HAHAHAH</div>
  </AFlex>
</AButton>
