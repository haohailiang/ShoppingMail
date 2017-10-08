<template>
<div class="hello">
	<h1>{{msg}}</h1>
	<Counter :num="num" @listenIncre="increment" @listenDesc="decrement"></Counter>
    <p>parent:{{num}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import Counter from './Counter.vue';
export default {
	name: 'hello',
	data() {
		return {
			num:100,
			msg: 'Welcome to Your Vue.js App , test it .'
		}
	},
	components:{
		Counter
	},
	methods:{
		increment(){
			this.num++;
		},
		decrement(){
			this.num--;
		}
	}
}

</script>