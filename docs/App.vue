<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Test></Test>
  </div>
</template>

<script>
import HelloWorld from '@/index'
// import HelloWorld from '../dist/index'
// console.log(require('./index'))
import Test from './test.md'
console.log(HelloWorld)
export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Cabin Sketch', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
