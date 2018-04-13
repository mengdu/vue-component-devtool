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

# vue-component-devtool

> 基于 webpack 打造的 Vue 组件开发工具。可以编写例子，文档。

目录：

```html

+ src 组件，以index.js导出组件
+ docs 文档及在线demo

```


可以在 `docs` 的文件里 `import MyComponent from '@/index'` 载入你的组件。



**开发模式**（支持热更新）

```ls
npm run dev
```

打开 `http://localhost:8080` 查看效果。



**打包组件**

```ls
npm run build
```

打包后组件被打包成js和css在 `dist` 文件夹中。

**生成文档**

```ls
npm run docs
```

生成文档在 `example` 文件夹，打开 `index.html` 可可以浏览。上传Github后可以在Github 开启项目Page访问。


:::demo 在线 `demo`。

```html
<m-button @click="handleClick" >button</m-button>
```

:::

