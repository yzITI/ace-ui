<script>
  let { value, type, size, ...props } = $props()

  import ASwitch from '$lib/A/ASwitch.svelte'
  import theme from '$lib/utils/theme.svelte'

  const sizes = { xs: '0.75rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2.5rem' }
</script>

<ASwitch bind:value={value} size={sizes[size]} activeColor={theme[type] || theme.primary} {...props}></ASwitch>

