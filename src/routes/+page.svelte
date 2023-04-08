<script>
  import logo from '$assets/logo.svg'
  import { AButton, AFlex, AIcon } from '$lib'
  import { mdiGithub } from '@mdi/js'

</script>
<AFlex className="a-items-center a-justify-center a-col" style="min-height: 90vh;">
  <img src={logo} alt="logo">
  <h1>Ace UI</h1>
  <p class="description">A Progressive UI Library for Svelte</p>
  <AFlex className="a-items-center">
    <AButton style="margin: 1rem; font-size: 1.5rem;">Get Started</AButton>
    <a target="_blank" href="https://github.com/yziti/ace-ui">
      <AButton style="font-size: 1.5rem;">
        <AFlex className="a-items-center">
          <AIcon path={mdiGithub} size="1.5rem"/>
          <div style="margin-left: 5px;" >Github</div>
        </AFlex>
      </AButton>
    </a>
  </AFlex>
</AFlex>

<style>
  * {
    color: #333;
    font-family: sans-serif;
    margin: 0; 
  }
  h1 {
    font-size: 5rem;
    font-weight: 400;
  }
  p.description {
    margin: 2rem 0;
    font-size: 2rem;
    color: #999;
  }
  img {
    max-width: 80%;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 4rem;
    }
    p.description {
      font-size: 1.25rem;
    }
  }
</style>
