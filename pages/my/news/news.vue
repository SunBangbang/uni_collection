<template>
	<view class="index container">
		<nav-header>我的消息</nav-header>
		
		<view class="content">
			<view class="content_list" @click="href('/pages/news/details/details?id='+item.id)" v-for="(item,index) in list" :key="index">
		<!-- 		<view class="">
					系统升级功能优化
				</view>
				<view class="">
					尊敬的用户你好，本次升级功能如下：
				</view>
				<view class="">
					1，功能介绍；
				</view> -->
				<view class="">
					{{item.name}}
				</view>
				<view class="">
					{{item.create_at}}
				</view>
			</view>
		
		</view>
		
		
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
				list:[]
			}
		},
		onLoad() {
			this.api.get_notice_list().then(res=>{
				this.list=res.data.data
				console.log(res)
			})
		}
	}
</script>

<style scoped>
	.index{
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.content{
		margin: 0 auto;
	}
	.content_list{
		width: 710rpx;
		/* height: 400rpx; */
		background: #fff;
		margin: 24rpx auto;
		border-radius: 16rpx;
		box-sizing: border-box;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
	}
	.content_list view:first-child{
		color: #000;
		font-size: 32rpx;
		font-weight: bold;
	}
	.content_list view:nth-child(2){
		color: #999;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
	}
	.content_list view:nth-child(3){
		color: #fff;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
	}
	.content_list view:nth-child(4){
		color: #fff;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
		text-align: right;
	}
	.content_list view:nth-child(5){
		color: #f3f3f3;
		font-size: 24rpx;
		font-weight: 400;
		margin-top: 40rpx;
	
	}
</style>