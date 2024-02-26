<!-- AIcon -->
<script>
  let { path = '', size = '1.5rem', ...props } = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style:width={size} style:height={size} {...props}>
  <path d={path} />
</svg>

<style>
  svg {
    fill: currentcolor;
  }
</style>
