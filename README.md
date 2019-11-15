# vue-component-devtool

> 通过 [vue-cli](https://cli.vuejs.org) 初始化；采用 [vue-dotmd-loader](https://github.com/mengdu/vue-dotmd-loader) 来加载文档。


基于 webpack 的 Vue 组件开发工具。可以编写例子，文档。


**use**

```ls
git clone https://github.com/mengdu/vue-component-devtool my-component
```

**安装依赖**

```ls
yarn
# or
npm install
```

**功能**

+ 打包vue组件，导出 `umd` 模式
+ 支持 `markdown` 解析
+ `markdwon` 可以编写编写vue例子


**目录**：

```text
├─build 开发工具
├─docs 打包后的文档
├─dist 打包后库
│  ├─index.umd.js
│  └─index.css
├─src 组件源码
├─examples 文档源码
```



**开发模式**（支持热更新）

```ls
npm run dev
```

打开 `http://localhost:8080` 查看效果。


**打包组件**

```ls
npm run build:lib
```

打包后组件被打包成js和css在 `dist` 文件夹中。

**生成文档**

```ls
npm run build:docs
```

生成文档在 `docs` 文件夹，打开 `index.html` 可以浏览。上传 Github 后可以开启项目 Page 访问。

## Other

[vue-dotmd-loader](https://github.com/mengdu/vue-dotmd-loader)

-----
