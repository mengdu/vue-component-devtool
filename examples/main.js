import Vue from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block'
import router from './router'
import Component from '../src'
import pkg from '../package.json'
import 'vue-dotmd-loader/dist/css/default.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import './assets/main.less'

Vue.use(DemoBlock)
Vue.use(Component)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router,
  data () {
    return {
      pkg: pkg
    }
  }
}).$mount('#app')

window.app = app
