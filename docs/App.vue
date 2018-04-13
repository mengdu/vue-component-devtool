<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <HelloWorld />
    </header>
    <main>
      <Doc/>
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import HelloWorld from '@/index'
import LayoutFooter from './components/footer' 
// import HelloWorld from '../dist/index'
// console.log(require('./index'))
import Doc from './doc.md'
// console.log(HelloWorld)
export default {
  name: 'App',
  components: {
    HelloWorld,
    Doc,
    LayoutFooter
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
    background: #F6F6F6;
    font-size: 14px;
  }
  header {
    font-family: 'Cabin Sketch', 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 15px;
    background: #41B883;
    color: #fff;
  }
  main {
    margin: 0 auto;
    padding: 15px;
    width: 800px;
    margin-bottom: 100px;
    background: #fff;
  }
  blockquote {
    margin: 0;
    padding: 0.05em 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    background: #f3f3f3;
  }
  a{
    color: #0366D6;
    text-decoration: none;
  }
  .hljs{
    background: #FAFAFA;
  }
  code {
    color: #ED4C6B;
    background-color: #F6F8FA;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 18px;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
</style>
