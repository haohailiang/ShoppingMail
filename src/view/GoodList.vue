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
                                            <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="view-more-normal"
                             v-infinite-scroll="loadMore"
                             infinite-scroll-disabled="busy"
                             infinite-scroll-distance="20">
                            <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
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
       priceChecked:'all',
       goodsList:[], 
       page:1,
       pageSize:4,
       sortFlag:true,
       busy:true,
       loading:false,
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
      getGoodsList(flag){
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag?1:-1,
          priceLevel:this.priceChecked
        };
        this.loading = true;
        axios.get('/goods/list', {
          params: param
        }).then(resonse => {
          this.loading = false;
          let res = resonse.data;
          if(res.status == '0'){
          	if(flag){
              this.goodsList = this.goodsList.concat(res.result.list)
              if(res.result.count == 0){
                this.busy = true;
              }else{
                this.busy = false;
              }
            }else{
              this.goodsList = res.result.list;
              this.busy = false;
            }
          }else{
            this.goodsList = [];
          }
        });
      },
      sortGoods(){
        this.sortFlag = !this.sortFlag;
        this.page  = 1;
        this.getGoodsList();
      },
      loadMore(){
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        }, 500);
      },
      addCart(productId){
        axios.post("/goods/addCart",{productId:productId}).then(res => {
          var res = res.data;
          if(res.status == '0'){
            alert('添加成功');
          }else{
            alert(`msg:${res.msg}`);
          }
        });
      }
    }
  }
</script>