<!-- AButton
  class: a-shadow, a-round, a-border
  snippet: children
-->
<script>
  let { children, ...props } = $props()
</script>

<button {...props}>
  {@render children()}
</button>

<style>
  button {
    cursor: pointer;
    border-radius: 0.25rem;
    border: none;
    padding: 0.25rem 0.5rem;
    transition: box-shadow 0.3s ease;
  }
  button:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  /* features */
  button.a-round {
    outline: none;
    border-radius: 9999px;
  }
  button.a-shadow {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  button.a-shadow:hover { /* bigger shadow */
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  button.a-border {
    border: 1px solid;
  }
  button.a-border:not(.shadow):hover {
    box-shadow: none;
  }
</style>
