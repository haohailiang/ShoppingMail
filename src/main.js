// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import Vuex from 'vuex'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(infiniteScroll)

Vue.use(VueLazyload, {
	loading: 'static/loading-svg/loading-bars.svg',
})

const store = new Vuex.Store({//相当于全局变量
	state: {
		nickName:'',
		cartCount:0
	},
	mutations: {
		//更新用户信息
		updateUserInfo(state, nickName) {
			state.nickName = nickName;
		},
		updateCartCount(state,cartCount){
			state.cartCount += cartCount;
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
