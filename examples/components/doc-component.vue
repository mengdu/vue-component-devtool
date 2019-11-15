<template>
  <div>
    <ul class="doc-nav">
      <li
        v-for="(item, index) in docs" :key="index"
        @click="currentDoc = item.name"
        :class="['nav-item', { active: item.name === currentDoc }]"
        >
        <a href="#">{{ item.label || item.name }}</a>
      </li>
    </ul>
    <div>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    docs: Array,
    value: String
  },

  data () {
    return {
      currentDoc: ''
    }
  },

  computed: {
    currentComponent () {
      const doc = this.docs.filter(e => e.name === this.currentDoc)[0]
      return doc ? doc.component : null
    }
  },
  created () {
    this.currentDoc = this.value
  }
}
</script>
<style lang="less">
  .doc-nav {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;

    .nav-item {
      display: inline-block;
      padding: 10px 15px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 3px;

      a {
        text-decoration: none;
      }

      &:hover,
      &.active {
        background-color: #f8f9ff;
        color: #3B58AF;
      }
    }
  }
</style>
