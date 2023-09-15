<script>
  import logo from '$assets/logo.svg'
  import { AButton, AFlex, AIcon } from '$lib'
</script>

<AFlex style="height: 64px">
  <img src={logo} alt="logo" type="image/svg+xml">
</AFlex>

<slot></slot>