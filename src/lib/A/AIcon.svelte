<!-- AIcon
  events: ALL
-->
<script>
  export let path = ''
  export let size = '1rem'
  export let color = 'black'
</script>

<svg on:* xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style:width={size} style:height={size}>
  <path d={path} fill={color} />
</svg>