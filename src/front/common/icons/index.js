import Vue from 'vue'
import IconSvg from '../components/icon-svg.vue'

Vue.component('icon', IconSvg)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)