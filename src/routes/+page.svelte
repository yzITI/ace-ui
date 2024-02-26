<script>
  import logo from '$assets/logo.svg'
  import { AButton, AFlex, AIcon } from '$lib'
  import { mdiGithub } from '@mdi/js'
</script>

<AFlex className="a-items-center a-justify-center a-col" style="min-height: 90vh;">
  <img src={logo} alt="logo" type="image/svg+xml">
  <h1>Ace UI</h1>
  <p class="description">A Progressive UI Library for Svelte 5</p>
  <AFlex className="a-items-center a-justify-center a-wrap">
    <a href="/docs">
      <AButton style="padding: 0.7rem; width: 16rem; font-size: 1.7rem; font-weight: 600;" background="#3B82F6" color="white">Get Started</AButton>
    </a>
    <a target="_blank" href="https://github.com/yziti/ace-ui">
      <AButton style="padding: 0.7rem; width: 16rem; font-weight: 600;" background="#333">
        <AFlex className="a-items-center a-justify-center">
          <AIcon path={mdiGithub} size="2rem" color="white" />
          <div style="margin-left: 0.5rem; color: white; font-size: 1.7rem;">Github</div>
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
    user-select: none;
  }
  h1 {
    font-size: 5rem;
    font-weight: 400;
  }
  p.description {
    margin: 0.5rem 0 2rem;
    font-size: 1.5rem;
    color: #999;
  }
  img {
    width: 400px;
    max-width: 70%;
    margin: -1rem 0;
  }
  a {
    margin: 1rem;
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 4rem;
    }
    p.description {
      font-size: 1.125rem;
    }
  }
</style>
