<!-- <m-button @click="handleClick" >button</m-button> -->
<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>

## Online demo

:::demo 在线 `demo`。

```html
<m-button @click="handleClick" type="info">info</m-button>
<m-button @click="handleClick" type="danger">danger</m-button>
```

:::

