<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>一个用于 Vue 组件开发，打包的脚手架模板。</p>
  </div>
</template>

<script>
export default {
  name: 'Helloworld',
  data () {
    return {
      msg: 'Vue component devtool'
    }
  }
}
</script>
<style>
  h1{
    font-weight: 100;
  }
</style>
