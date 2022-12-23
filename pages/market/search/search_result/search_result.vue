<template>
	<view class="index container">
		<nav-header>搜索结果</nav-header>
	<!-- 数据列表 -->
		<view class="content">
			<view class="item" v-for="(item,index) in list" :key="item.id" @click="href('/pages/market/market_collection_details/market_collection_details')">
				<!-- 图片部分 -->
				<view class="img_box">
					<view class="">
						<image :src="item.img" mode="" style="width:284rpx;height: 284rpx;"></image>
					</view>
					<view class="">
						编号 {{item.no}}
					</view>
				</view>
				<!-- 图片部分 结束-->
				<!-- 名称部分 -->
				<view class="goods_name text_hide">
					{{item.goods_name}}
				</view>
				<!-- 名称部分 结束-->
				<!-- 持有姓名部分 -->
				<view class="writer text_hide">
					{{item.writer}}
				</view>
				<!-- 持有姓名部分 结束-->
				<!-- 价格部分 -->
				<view class="price">
					￥{{item.price}}
				</view>
				<!-- 价格部分 结束-->
			</view>

		</view>
		<!-- 数据列表 结束-->
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			navHeader
		},
		data(){
			return{
			list:[
				{id:"0",goods_name:"测试藏品",writer:"小太阳",no:"#no315",img:require("@/static/index/test.png"),price:"1100"},
				{id:"1",goods_name:"测试藏品",writer:"小太阳",no:"#no315",img:require("@/static/index/test.png"),price:"1100"},
				{id:"2",goods_name:"测试藏品",writer:"小太阳",no:"#no315",img:require("@/static/index/test.png"),price:"1100"},
				{id:"3",goods_name:"测试藏品",writer:"小太阳",no:"#no315",img:require("@/static/index/test.png"),price:"1100"},
				{id:"4",goods_name:"测试藏品",writer:"小太阳",no:"#no315",img:require("@/static/index/test.png"),price:"1100"}
			]
			}
		}
	}
</script>

<style scoped>
	.index{
		box-sizing: border-box;
		padding-top: 100rpx;
	}
.content {
		width: 710rpx;
		margin: 24rpx auto 100rpx auto;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: space-between;
	}
	
	.item {
		width: 340rpx;
		/* height: 472rpx; */
		background: #1c1c1e;
		border-radius: 20rpx;
		margin-bottom: 24rpx;
		padding-bottom: 14rpx;
		box-sizing: border-box;
		padding-top: 30rpx;

	}
	.img_box{
		width:284rpx;
		position: relative;
		margin: 0 auto;
		text-align: center;
	}
	.img_box>view:last-child{
		width: 100%;
		height: 48rpx;
		background: #000;
		background: rgba(0,0, 0,.6);
		position: absolute;
		bottom: 0;
		font-size: 20rpx;
		color: #ccc;
		text-align: center;
		line-height: 48rpx;
	}
	.goods_name{
		margin-top: 8rpx;
		width: 284rpx;
		margin: 0 auto;
		font-size: 32rpx;
	}
	.writer{
		width: 284rpx;
		
		margin: 0 auto;
		margin-top: 12rpx;
		font-weight: 400;
		font-size: 24rpx;
		color: #999;
	}
	.price{
		font-size: 28rpx;
		color:#FFCB1E;
		font-weight: bold;
		width: 284rpx;
		
		margin: 0 auto;
		margin-top: 16rpx;
	}
</style>