<!-- ACheckbox -->
<script>
  let { value = false, size = '1.5rem', activeColor = 'rgb(59 130 246)', inactiveColor = '#999', ...props } = $props()

  import AIcon from './AIcon.svelte'
  import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from '@mdi/js'

  function toggle () {
    value = !value
  }
</script>

<div class:a-checkbox={true} {...props} onclick={toggle} onkeyup={toggle} role="checkbox" aria-checked={value} tabindex="0">
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
