<script>
  import AButton from '../A/AButton.svelte'
  import theme from '../utils/theme.js'
  let { text = 'AceButton', color = 'default', weight = 'bold', size = 'medium', ...props } = $props()

  let _color = 'white'
  const _background = $derived(theme[color] || color)

  const _fontSize = $derived({ small: '0.75rem', medium: '1rem', large: '1.25rem' }[size])
  const _margin = $derived({ small: '0.075rem 0.1rem', medium: '0.1rem 0.15rem', large: '0.125rem 0.25rem' }[size])
</script>

<AButton {title} background={_background} color={_color} {...props}>
  <div style:font-weight={weight} style:font-size={_fontSize} style:margin={_margin}>{text}</div>
</AButton>
