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
    margin: 0 auto;
    width: 600px;
  }
  blockquote {
    margin: 0;
    padding: 0.05em 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    background: #f3f3f3;
  }
  code {
    padding: 5px 15px;
    background: #F6F8FA;
    border-radius: 5px;
    color: #24292E;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
</style>
