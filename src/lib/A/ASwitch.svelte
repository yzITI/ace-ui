<!-- ASwitch -->
<script>
  let { value = $bindable(false), size = '1.5rem', activeColor = 'rgb(59 130 246)', inactiveColor = '#999', ...props } = $props()

  function toggle () {
    value = !value
  }
</script>

<div class:a-switch-outer={true} style:width={`calc(2 * ${size})`} onclick={toggle} onkeyup={toggle} style:padding={`calc(${size} / 10)`} style:background={value ? activeColor : inactiveColor} role="checkbox" tabindex="0" aria-checked={value}>
  <div style:left={value ? '50%' : '0%'} style:width={size} style:height={size} class:a-switch-inner={true} {...props}></div>
</div>

<style>
  div.a-switch-outer {
    display: inline-block;
    outline: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s ease;
    user-select: none;
    box-sizing: content-box;
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
