import MInput from './input'
import './input.less'

MInput.install = function (Vue) {
  Vue.component(MInput.name, MInput)
}

export {
  MInput as default,
  MInput
}
