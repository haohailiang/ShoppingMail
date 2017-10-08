<template>
<div>
	<button @click="increment">+</button>
	<button v-on:click="decrement">-</button>
	<p><span>child:{{num}}</span></p>
</div>
</template>

<script type="text/ecmascript-6">
export default {
	props:["num"],
	data(){
		return {};
	},
	methods: {
		increment(){
			this.$emit('listenIncre');
		},
		decrement(){
			this.$emit('listenDesc');
		},
	}
};
</script>