<template>
  <div id="app">
    <MainHeader />
    <div class="main-container"><router-view /></div>
    <MainFooter />
  </div>
</template>

<script>
import ReadmeDoc from '../README.md'
import InputDoc from './docs/input'
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
  data () {
    return {
      tab: 'readme',
      docs: [
        { name: 'readme', label: 'README', component: ReadmeDoc },
        { name: 'doc', label: 'Doc', component: InputDoc }
      ]
    }
  }
}
</script>
