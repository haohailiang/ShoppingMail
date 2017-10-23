import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../view/GoodList'
import Image from './../view/Image'
import Title from './../view/Title'
import Cart from './../view/Cart'

Vue.use(Router)

export default new Router({
	mode:'hash',
  routes: [
	  {
		  path:'/',
		  name:'GoodList',
		  component:GoodList
	  },
	  {
		  path:'/cart',
		  name:'Cart',
		  component:Cart
	  }
  ]
})
