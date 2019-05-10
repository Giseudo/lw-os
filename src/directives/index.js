import Decode from './decode'

export default function install(Vue) {
	Vue.directive('decode', Decode)
}
