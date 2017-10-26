import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../view/GoodList'
import Cart from './../view/Cart'
import Address from './../view/Address'

Vue.use(Router)

export default new Router({
	mode:'hash',
  routes: [
	  {
		  path:'/goods',
		  name:'GoodList',
		  component:GoodList
	  },
	  {
		  path:'/cart',
		  name:'Cart',
		  component:Cart
	  },
	  {
		  path:'/address',
		  name:'Address',
		  component:Address
	  }
  ]
})
