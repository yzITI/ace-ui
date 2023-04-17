<script>
  // import AButton from '../A/AButton.svelte'
</script>

<!-- <AButton on:click on:dblclick>AceButton</AButton> -->

<button>
  <slot></slot>
</button>

<style>
  button {
    background-color: #ABBAC3;
    color: #FFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    border: 5px solid #ABBAC3;
    transition: background-color 0.15s;
    position: relative;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
  }
  button:hover {
    background-color: #8B9AA3;
  }
  button:active {
    top: 1px;
  }
  button:focus {
    outline: -webkit-focus-ring-color auto 5px;
    outline-offset: -2px;
  }
</style>
