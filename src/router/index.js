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
      path: '/goods',
      name: 'GoodList',
      components: {
      	default:GoodList,
	      title:Title,
	      img:Image
      }
    },
	  {
		  path:'/cart/:cartId',
		  name:'cart',
		  component:Cart
	  }
  ]
})
