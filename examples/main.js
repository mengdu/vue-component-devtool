import Vue from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block'
import 'vue-dotmd-loader/dist/css/default.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import './assets/main.less'

Vue.use(DemoBlock)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
}).$mount('#app')

window.app = app
