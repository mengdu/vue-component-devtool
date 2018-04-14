
## Button

Button常用的操作按钮。

## use


```js
import MButton from 'm-button'
import 'm-button/dist/css/default.css'

Vue.use(MButton)
```

会全局注册 `m-button-group`，`m-button` 组件。

```html
<m-button>defaut</m-button>
```

**按钮组：**

```html
<m-button-group>
  <m-button type="info">首页</m-button>
  <m-button type="info">热门</m-button>
  <m-button type="info">专栏</m-button>
</m-button-group>
```

### Button Attributes

<!-- + **disabled** 禁用状态
+ **type** 主题；可选值：`info`，`primary`，`warning`，`danger`，`success`
+ **size** 大小；可选值：`max`, `large`, `默认`, `samll`, `mini`
+ **plain** 朴素按钮
+ **round** 圆形按钮
+ **block** 块按钮
+ **active** 焦点
+ **effect** 焦点涟漪效果，默认开启
+ **router** 路由对象会这路由 `path` ，内部执行的是 `this.$router.push` 方法 -->

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string | `max`, `large`, `默认`, `samll`, `mini` |    —     |
| type     | 类型   | string    |   `info`，`primary`，`warning`，`danger`，`success` |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| active  | 焦点状态    | boolean   | —   | false   |
| effect  | 焦点涟漪效果    | boolean   | —   | true   |
| router  | 焦点状态    | path  | —   | —  |

