<template>
    <div>
        <p>这是商品列表页面</p>
        <span>{{$route.params.goodsId}}</span>
        <span>{{$route.params.name}}</span>
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/img">显示商品图片</router-link>
        <div>
            <router-view></router-view>
        </div>
        <router-link to="/cart">跳转到购物车页面</router-link>
        <button @click="jump">button - 跳转到购物车页面</button>
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
    },
    methods:{
		jump(){
			this.$router.push({
                path:'/cart?goodsId=123'
            });
        }
    }
}
</script>