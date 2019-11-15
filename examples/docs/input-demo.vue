<template>
  <div>
    <m-input placeholder="输入框" v-model="value"/><span>{{value}}</span>
  </div>
</template>
<script>
import MInput from '../../src'

export default {
  components: {
    MInput
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
