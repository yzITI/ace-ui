<script>
  // import AButton from '../A/AButton.svelte'

  export let type = ''
  export let size = ''
</script>

<!-- <AButton on:click on:dblclick>AceButton</AButton> -->

<button class={type + ' ' + size}>
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
  button.primary {
    background-color: #428BCA;
    border-color: #428BCA;
  }
  button.primary:hover {
    background-color: #1B6AAA;
  }
  button.info {
    background-color: #6FB3E0;
    border-color: #6FB3E0;
  }
  button.info:hover {
    background-color: #4F99C6;
  }
  button.success {
    background-color: #87B87F;
    border-color: #87B87F;
  }
  button.success:hover {
    background-color: #629B58;
  }
  button.warning {
    background-color: #FFB752;
    border-color: #FFB752;
  }
  button.warning:hover {
    background-color: #E59729;
  }
  button.danger {
    background-color: #D15B47;
    border-color: #D15B47;
  }
  button.danger:hover {
    background-color: #B74635;
  }
  button.inverse {
    background-color: #555;
    border-color: #555;
  }
  button.inverse:hover {
    background-color: #303030;
  }
  button.pink {
    background-color: #D6487E;
    border-color: #D6487E;
  }
  button.pink:hover {
    background-color: #B73766;
  }
  button.purple {
    background-color: #9585BF;
    border-color: #9585BF;
  }
  button.purple:hover {
    background-color: #7461AA;
  }
  button.yellow {
    background-color: #FEE188;
    border-color: #FEE188;
    color: #963;
    text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }
  button.yellow:hover {
    background-color: #F7D05B;
  }
  button.grey {
    background-color: #A0A0A0;
    border-color: #A0A0A0;
  }
  button.grey:hover {
    background-color: #888;
  }
  button.light {
    background-color: #E7E7E7;
    border-color: #E7E7E7;
    color: #888;
    text-shadow: 0 -1px 0 rgba(250, 250, 250, 0.25);
  }
  button.light:hover {
    background-color: #D9D9D9;
  }
  button.link {
    background: 0 0;
    color: #08C;
    padding: 4px 12px;
    line-height: 20px;
    border-width: 0;
    text-shadow: none;
  }
  button.link:hover {
    text-decoration: underline;
  }
  button.link:active, button.link:focus {
    text-decoration: underline;
    color: #009ceb;
  }
  button.large {
    border-width: 5px;
    padding: 7px 16px;
    font-size: 18px;
    line-height: 1.35;
  }
  button.small {
    border-width: 4px;
    padding: 4px 9px;
    font-size: 13px;
    line-height: 1.38;
  }
  button.mini {
    border-width: 3px;
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
  }
  button.minier {
    border-width: 2px;
    padding: 0 4px;
    font-size: 12px;
    line-height: 18px;
  }
</style>
