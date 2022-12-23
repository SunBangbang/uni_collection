<template>
	<view class="new container">
		<view class="title">
			<image src="../../static/news/news.png" mode="" style="width: 72rpx;height:48rpx;"></image>
		</view>
		
		<view class="content">
			<view class="content_list" @click="href('/pages/news/details/details')">
				<view class="">
					系统升级功能优化
				</view>
				<view class="">
					尊敬的用户你好，本次升级功能如下：
				</view>
				<view class="">
					1，功能介绍；
				</view>
				<view class="">
					招聘主播有限公司
				</view>
				<view class="">
					2021-12-17  18:19
				</view>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		onLoad() {
			this.api.get_notice_list().then(res=>{
				console.log(res)
			})
		}
	}
</script>

<style scoped>
	.title{
		height:90rpx;
		width: 750rpx;
		line-height: 70rpx;
		text-align: center;
		background: #fff;
		box-sizing: border-box;
		padding-top:30rpx;
	}
	.content{
		margin: 0 auto;
	}
	.content_list{
		width: 710rpx;
		height: 400rpx;
		background: #fff;
		margin: 24rpx auto;
		border-radius: 16rpx;
		box-sizing: border-box;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
	}
	.content_list view:first-child{
		color: #666;
		font-size: 32rpx;
		font-weight: bold;
	}
	.content_list view:nth-child(2){
		color: #333;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
	}
	.content_list view:nth-child(3){
		color: #333;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
	}
	.content_list view:nth-child(4){
		color: #333;
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 40rpx;
		text-align: right;
	}
	.content_list view:nth-child(5){
		color: #666;
		font-size: 24rpx;
		font-weight: 400;
		margin-top: 40rpx;
	
	}
</style>