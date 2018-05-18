import Component from './HelloWorld'

Component.install = function (Vue) {
  Vue.component(Component.name, Component)
}

export default Component
