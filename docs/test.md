<m-button @click="handleClick" >button</m-button>
<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
# vue-component-devtool

> A Vue.js component devtool

开发

```bat
npm run dev
```

打包

```bat
npm run build
```

生成文档

```bat
npm run docs
```


:::demo 
```html
    <h1>xxx</h1>
    <m-button @click="handleClick" >button</m-button>
```
:::