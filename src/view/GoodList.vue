<template>
    <div>
        <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
        </symbol>
        <nav-header></nav-header>
        <nav-bread>
            <span slot="bread">Goods</span>
            <span slot="haha">^_^</span>
        </nav-bread>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter stopPop" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}" @click="priceChecked='all'">All</a></dd>
                            <dd v-for="(item, index) in priceFilter" @click="priceChecked=index">
                                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}">{{item.startPrice}} - {{item.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <li  v-for="(item, index) in goodsList">
                                    <div class="pic">
                                        <a href="#"><img v-lazy="'static/'+item.productImage"></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.salePrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<style>

</style>

<script type="text/ecmascript-6">
  import '../assets/css/login.css'
  import '../assets/css/product.css'
  import NavHeader from '@/components/NavHeader.vue'
  import NavFooter from '@/components/NavFooter.vue'
  import NavBread from '@/components/NavBread.vue'
  import axios from 'axios'

  export default {
    data(){
      return {
       priceChecked:'',
       goodsList:[], 
       page:1,
       pageSize:8,
       sortFlag:true,
       priceFilter:[
        {
          startPrice:'0.00',
          endPrice:'100.00'
        },
        {
          startPrice:'100.00',
          endPrice:'500.00'
        },
        {
          startPrice:'500.00',
          endPrice:'1000.00'
        },
        {
          startPrice:'1000.00',
          endPrice:'2000.00'
        }
       ]
      }
    },
    mounted(){
      this.getGoodsList();
    },
    components:{
      NavHeader,
      NavFooter,
      NavBread
    },
    methods:{
      getGoodsList(){
      	var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag?1:-1
        };
        axios.get('/goods', {
          params: param
        }).then(resonse => {
          let res = resonse.data;
          if(res.status == '0'){
            this.goodsList = res.result.list;
          }else{
          	this.goodsList = [];
          }
        })
      },
      sortGoods(){
        this.sortFlag = !this.sortFlag;
        this.getGoodsList();
      }
    }
  }
</script>