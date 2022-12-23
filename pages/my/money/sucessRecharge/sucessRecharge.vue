<template>
	<view class="container_h100 index">
		<nav-header>充值成功</nav-header>
		<view class="content">
			<view class="">
				<image src="@/static/my/recharge/sucess.png" mode="widthFix" style="width: 180rpx;"></image>
			</view>
			<view class="">
				充值成功
			</view>
			<view class="">
				3秒后自动返回我的钱包
			</view>
		</view>

		<view class="btn" @click="back">
			返回
		</view>


	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		data() {
			return {

			}
		},

	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.content {
		width: 710rpx;
		height: 468rpx;
		border-radius: 40rpx;
		margin: 32rpx auto 0 auto;
		background: #fff;
		box-sizing: border-box;
		padding-top: 60rpx;
	}
	.content>view{
		margin: 0 auto;
		text-align: center;
	}
	.content>view:nth-child(2){
		margin-top: 40rpx;
		font-size: 40rpx;
		color: #000;
		font-weight: 600;
	}
	.content>view:nth-child(3){
		margin-top: 40rpx;
		color: #666;
		font-size: 28rpx;
		
		font-weight: 400;
	}
	.btn {
		width: 710rpx;
		height: 88rpx;
		font-size: 32rpx;
		color: #fff;
		font-weight: 400;
		text-align: center;
		line-height: 88rpx;
		background: #FA4485;
		border-radius: 64rpx;
		margin: 160rpx auto;
	}
</style>
