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


## Button 按钮

定义了平时常用的按钮主题类型。

## Button 支持5种主题类型

:::demo 通过设置 `type` 属性来改变按钮主题；type可选值：`info`，`primary`，`warning`，`danger`，`success`。

```html
<m-button>Default</m-button>
<m-button type="info">Info</m-button>
<m-button type="primary">Primary</m-button>
<m-button type="warning">Warning</m-button>
<m-button type="danger">Danger</m-button>
<m-button type="success">Success</m-button>
```

:::

## Plain 朴素按钮

:::demo 添加 `plain` 属性。

```html
<m-button plain>Default</m-button>
<m-button type="info" plain>Info</m-button>
<m-button type="primary" plain>Primary</m-button>
<m-button type="warning" plain>Warning</m-button>
<m-button type="danger" plain>Danger</m-button>
<m-button type="success" plain>Success</m-button>
```
:::

## Round 椭圆椭圆

:::demo 添加 `round` 属性

```html
<m-button round>Default</m-button>
<m-button type="info" round>Info</m-button>
<m-button type="primary" round>Primary</m-button>
<m-button type="warning" round>Warning</m-button>
<m-button type="danger" round>Danger</m-button>
<m-button type="success" round>Success</m-button>
```

:::

## Disabled 效果

:::demo 添加 `disabled` 属性

```html
<m-button disabled>Default</m-button>
<m-button type="info" disabled>Info</m-button>
<m-button type="primary" disabled>Primary</m-button>
<m-button type="warning" disabled>Warning</m-button>
<m-button type="danger" disabled>Danger</m-button>
<m-button type="success" disabled>Success</m-button>
```

:::

## Active 效果

:::demo 添加 `active` 属性

```html
<m-button active>Default</m-button>
<m-button type="info" active>Info</m-button>
<m-button type="primary" active>Primary</m-button>
<m-button type="warning" active>Warning</m-button>
<m-button type="danger" active>Danger</m-button>
<m-button type="success" active>Success</m-button>
```

:::


## Size 按钮尺寸

:::demo 添加 `size` 属性，可选值：`max`，`large`，`默认`，`small`，`mini`。

```html
<p>
  <m-button size="max">max</m-button>
  <m-button type="info" size="max">max</m-button>
  <m-button type="info" size="max" plain>max</m-button>
  <m-button type="info" size="max" round>max</m-button>
  <m-button type="info" size="max" round plain>Max按钮</m-button> 
</p>


<p>
<m-button size="large">large</m-button>
<m-button size="large" type="success">large</m-button>
<m-button size="large" type="success" plain>large</m-button>
<m-button size="large" type="success" round>large</m-button>
<m-button size="large" type="success" round plain>large</m-button>
</p>

<p>
<m-button size="mini">mini</m-button>
<m-button size="mini" type="info">信息</m-button>
<m-button size="mini" type="success">更新</m-button>
<m-button size="mini" type="warning">禁用</m-button>
<m-button size="mini" type="danger">删除</m-button>
</p>

```

:::
 
## Group 按钮组

:::demo 通过 `m-button-group` 组件包裹 `m-button` 组件即可放在一个组里。

```html
<p>
<m-button-group>
  <m-button type="info">首页</m-button>
  <m-button type="info">热门</m-button>
  <m-button type="info">专栏</m-button>
</m-button-group> 
</p>

<p>
<m-button-group>
  <m-button>首页</m-button>
  <m-button>热门</m-button>
  <m-button>专栏</m-button>
</m-button-group>  
</p>

<p>
<m-button-group>
  <m-button type="info">Info</m-button>
  <m-button type="primary">Primary</m-button>
  <m-button type="warning">Warning</m-button>
  <m-button type="danger">Danger</m-button>
</m-button-group>  
</p>

```
:::

## Block 块类型按钮

:::demo 设置 `block` 属性。

```html
<m-button block>Default</m-button>
<m-button type="info" block>Info</m-button>
```
::: 