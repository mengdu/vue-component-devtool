<template>
  <div>
    <m-input placeholder="输入框" v-model="value"/><span>{{value}}</span>
  </div>
</template>
<script>


export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
