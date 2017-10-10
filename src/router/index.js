import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../view/GoodList'
import Image from './../view/Image'
import Title from './../view/Title'

Vue.use(Router)

export default new Router({
	mode:'hash',
  routes: [
    {
      path: '/goods',
      name: 'GoodList',
      component: GoodList,
	    children:[
		    {
			    path:'title',
			    name:'title',
			    component:Title
		    },
		    {
			    path:'img',
			    name:'img',
			    component:Image
		    }
	    ]
    }
  ]
})
