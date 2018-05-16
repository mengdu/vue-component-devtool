<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>基于 webpack 打造的 Vue 组件开发工具。</p>
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
<style lang="less">
  @btn-name: m-button;
  .@{btn-name}{
    color: #fff;
  }
  h1{
    font-weight: 200;
  }
</style>
