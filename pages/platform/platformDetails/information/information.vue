<template>
	<view class="information container_h100">
		<nav-header>工会信息</nav-header>
		<!-- 第一部分 -->
		<view class="company_logo">
			<view class="">
				公司名称
			</view>
			<view class="">
				<image src="../../../../static/platform/infomation/logo.png" mode="" style="width: 210rpx;height: 210rpx;"></image>
			</view>
		</view>
		<!-- 第一部分 结束-->
		<!-- 第二部分 -->
		<view class="requirements">
			<view class="">
				公司名称
			</view>
			<view class="">
				齐创科技
			</view>
		</view>
		<!-- 第二部分 结束-->
		<!-- 第三部分 -->
		<view class="requirements">
			<view class="">
				公司地址
			</view>
			<view class="">
				陕西省西安市未央区齐创国际
			</view>
		</view>
		<!-- 第三部分 结束-->
		<!-- 第四部分 -->
		<view class="introduction">
			<view class="">
				公司简介
			</view>
			<view class="">
				这是一段公司简介这是一段公司简介，这是一段公
				司简介，这是一段公司简介这是一段公司简介，这
				是一段公司简介，
				这是一段公司简介这是一段公司简介，这是一段公
				司简介，这是一段公司简介这是一段公司简介，这
				是一段公司简介，
				这是一段公司简介这是一段公司简介，这是一。
			</view>
		</view>
		<!-- 第四部分 结束-->
		
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			navHeader
		}
	}
</script>

<style scoped>
	.information{
		box-sizing: border-box;
		padding-top: 100rpx;
	}
	.company_logo {
		width: 710rpx;
		margin: 40rpx auto;
	}
	
	.company_logo>view:first-child {
		font-size: 32rpx;
		font-weight: 600;
		color: #000;
	
	}
	
	.company_logo>view:last-child {
		height: 290rpx;
		width: 710rpx;
		background: #fff;
		border-radius: 20rpx;
		line-height: 120rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		font-size: 30rpx;
	}
	
	.requirements {
		width: 710rpx;
		margin: 40rpx auto;
	}
	
	.requirements>view:first-child {
		font-size: 32rpx;
		font-weight: 600;
		color: #000;
	
	}
	
	.requirements>view:last-child {
		height: 120rpx;
		width: 710rpx;
		background: #fff;
		border-radius: 20rpx;
		line-height: 120rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 30rpx;
	}

	.introduction {
		width: 710rpx;
		margin: 40rpx auto;
	}
	
	.introduction>view:first-child {
		font-size: 32rpx;
		font-weight: 600;
		color: #000;
	
	}
	
	.introduction>view:last-child {
		/* height: 290rpx; */
		width: 710rpx;
		background: #fff;
		border-radius: 20rpx;
		line-height: 48rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		font-size: 30rpx;
	}
</style>