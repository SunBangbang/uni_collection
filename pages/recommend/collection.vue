<template>
	<view class="recommend container">
		<view class="title">
			<image src="../../static/recommend/recommend.png" mode="" style="width: 72rpx;height:48rpx;"></image>
		</view>
		
		<view class="content">
			
			<view class="" @click="href('/pages/recommend/details/details')">
				<image src="../../static/recommend/banner.png" mode="widthFix" style="width: 710rpx;"></image>
			</view>
			
			<view class="" @click="href('/pages/recommend/details/details')">
				<image src="../../static/recommend/banner1.png" mode="widthFix" style="width: 710rpx;"></image>
			</view>
			
			<view class="" @click="href('/pages/recommend/details/details')">
				<image src="../../static/recommend/banner2.png" mode="widthFix" style="width: 710rpx;"></image>
			</view>
			
			<view class="" @click="href('/pages/recommend/details/details')">
				<image src="../../static/recommend/banner3.png" mode="widthFix" style="width: 710rpx;"></image>
			</view>
			
			<view class="">
				<image src="../../static/recommend/banner4.png" mode="widthFix" style="width: 710rpx;"></image>
			</view>
			
		</view>
		
	</view>
</template>

<script>
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
	.content view{
		margin: 24rpx auto;
		text-align: center;
	}
</style>