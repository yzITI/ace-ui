<!-- ASwitch -->
<script>
  export let value = false // binding
  export let size = '1.5rem'
  export let className = '' // button class
  export let style = '' // button style
  export let activeColor = 'rgb(59 130 246)'
  export let inactiveColor = '#999'
</script>

<div class="a-switch-outer" style:width={`calc(2 * ${size})`} on:click={() => value = !value} style:padding={`calc(${size} / 10)`} style:background={value ? activeColor : inactiveColor}>
  <div style:border-width={`calc(${size} / 12)`} style:left={value ? '50%' : '0%'} style:width={size} style:height={size} class={'a-switch-inner ' + className} style={style}></div>
</div>

<style>
  div.a-switch-outer {
    outline: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  div.a-switch-inner {
    outline: none;
    position: relative;
    border-radius: 9999px;
    transition: left 0.3s ease;
    background: white;
    border: #ddd solid;
    box-sizing: border-box;
  }
</style>
