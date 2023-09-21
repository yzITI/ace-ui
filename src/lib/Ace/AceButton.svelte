<script>
  import AButton from '../A/AButton.svelte'
  import theme from '../utils/theme.js'
  export let text = 'AceButton'
  export let title = ''
  export let color = 'default'
  export let weight = 'bold'
  export let size = 'medium'

  let _background = '', _color = 'white'
  $: _background = ($theme[color] || color)

  let _fontSize = '', _margin = ''
  $: _fontSize = { small: '0.75rem', medium: '1rem', large: '1.25rem' }[size]
  $: _margin = { small: '0.075rem 0.1rem', medium: '0.1rem 0.15rem', large: '0.125rem 0.25rem' }[size]
</script>

<AButton on:* {title} background={_background} color={_color}>
  <div style:font-weight={weight} style:font-size={_fontSize} style:margin={_margin}>{text}</div>
</AButton>
