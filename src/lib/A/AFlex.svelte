<!-- AFlex
  sippet: children,
  class: a-row a-col a-wrap a-justify-start a-justify-center a-justify-end a-justify-between a-justify-around a-items-start a-items-end a-items-center a-items-stretch
-->
<script>
  let { children, ...props } = $props()
</script>

<div {...props}>
  {@render children()}
</div>

<style>
  div {
    display: flex;
  }
  div.a-row {
    flex-direction: row;
  }
  div.a-col {
    flex-direction: column;
  }
  div.a-wrap {
    flex-wrap: wrap;
  }
  div.a-justify-start {
    justify-content: start;
  }
  div.a-justify-end {
    justify-content: end;
  }
  div.a-justify-center {
    justify-content: center;
  }
  div.a-justify-around {
    justify-content: space-around;
  }
  div.a-justify-between {
    justify-content: space-between;
  }
  div.a-items-start {
    align-items: start;
  }
  div.a-items-end {
    align-items: end;
  }
  div.a-items-center {
    align-items: center;
  }
  div.a-items-stretch {
    align-items: stretch;
  }
</style>
