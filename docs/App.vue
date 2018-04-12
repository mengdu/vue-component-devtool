<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <HelloWorld />
    </header>
    <main>
      <Test></Test>
    </main>
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
  body{
    padding: 0;
    margin: 0;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  header {
    font-family: 'Cabin Sketch', 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
  main {
    text-align: center;
  }
  code {
    padding: 5px 15px;
    background: #F6F8FA;
    border-radius: 5px;
    color: #24292E;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
</style>
