<template>
<div>
  <input type="text" class="m-form-control" :placeholder="placeholder" v-model="val">
</div>
</template>
<script>
export default {
  name: 'MInput',
  props: {
    value: String,
    placeholder: String
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value (val) {
      if (val !== this.val) {
        this.val = val
      }
    },
    val (val) {
      if (this.value !== this.val) {
        this.$emit('input', this.val)
      }
    }
  },
  created () {
    this.val = this.value
  }
}
</script>
