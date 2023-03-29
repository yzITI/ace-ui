<script>
  // export let class = '' // $$props.class
  export let style = ''
  export let title = ''
  export let color = 'black'
  export let background = '#eee'
</script>

<button style:color style:background style:border-color={color} class={$$props.class} style={style}>
  <slot></slot>
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-items: center;
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
  button.round {
    outline: none;
    border-radius: 9999px;
  }
  button.shadow {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  button.shadow:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  button.border {
    border: 1px solid;
  }
  button.border:not(.shadow):hover {
    box-shadow: none;
  }
</style>
