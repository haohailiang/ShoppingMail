<template>
<div>
这是商品列表页面
<span>{{$route.params.goodsId}}-{{$route.params.name}}</span>
</div>
</template>

<style>

</style>

<script type="text/ecmascript-6">
export default {
	data(){
		return {
			msg:'Hello Vue!'
        }
    }
}
</script>