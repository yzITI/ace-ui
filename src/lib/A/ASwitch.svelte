<!-- ASwitch
  events: ALL
-->
<script>
  export let value = false // binding
  export let size = '1.5rem'
  export let className = '' // button class
  export let style = '' // button style
  export let activeColor = 'rgb(59 130 246)'
  export let inactiveColor = '#999'

  function toggle () {
    value = !value
  }

  // forward all events
  import { get_current_component } from 'svelte/internal'
  import forwardBuilder from '../utils/forwardBuilder.js'
  const forward = forwardBuilder(get_current_component())
</script>

<div use:forward class="a-switch-outer" style:width={`calc(2 * ${size})`} on:click={toggle} on:keyup={toggle} style:padding={`calc(${size} / 10)`} style:background={value ? activeColor : inactiveColor} role="checkbox" tabindex="0" aria-checked={value}>
  <div style:left={value ? '50%' : '0%'} style:width={size} style:height={size} {style} class={'a-switch-inner ' + className}></div>
</div>

<style>
  div.a-switch-outer {
    display: inline-block;
    outline: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s ease;
    user-select: none;
  }
  div.a-switch-inner {
    outline: none;
    position: relative;
    border-radius: 9999px;
    transition: left 0.3s ease;
    background: white;
    box-sizing: border-box;
  }
</style>
