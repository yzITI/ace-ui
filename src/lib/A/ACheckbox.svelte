<!-- ACheckbox
  events: ALL
-->
<script>
  export let value = false // binding
  export let size = '1.5rem'
  export let className = ''
  export let activeColor = 'rgb(59 130 246)'
  export let inactiveColor = '#999'

  import AIcon from './AIcon.svelte'
  import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from '@mdi/js'

  function toggle () {
    value = !value
  }

  // forward all events
  import { get_current_component } from 'svelte/internal'
  import forwardBuilder from '../utils/forwardBuilder.js'
  const forward = forwardBuilder(get_current_component())
</script>

<div use:forward class={'a-checkbox ' + className} on:click={toggle} on:keyup={toggle} role="checkbox" aria-checked={value} tabindex="0">
  <div class="check" style:opacity={value ? 100 : 0}>
    <AIcon path={mdiCheckboxMarked} color={activeColor} {size} />
  </div>
  <AIcon path={mdiCheckboxBlankOutline} color={inactiveColor} {size} />
</div>

<style>
  div.a-checkbox {
    display: inline-block;
    position: relative;
    outline: none;
    cursor: pointer;
    user-select: none;
  }
  div.a-checkbox div.check {
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.3s ease;
  }
</style>
