<script>
  import logo from '$assets/logo.svg'
  import { AButton, AIcon } from '$lib'
  import { mdiGithub } from '@mdi/js'

</script>
<div>
  <img src={logo} alt="logo" height="400px">
  <h1>Ace UI</h1>
  <p>A UI Library for Svelte</p>
</div>
<div>
  <AButton>Get Started</AButton>
  <AButton>
    <AIcon path={mdiGithub} size="0.5rem"/>
    Github
  </AButton>
</div>
