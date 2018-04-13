<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <slot name="highlight"></slot>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock',
  props: {
    jsfiddle: Object
  },
  created () {
    console.log(this.jsfiddle)
  }
}
</script>
<style>
  .demo-block{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 15px;
  }
</style>
