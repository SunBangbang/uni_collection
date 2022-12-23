<template>
	<view class="container_h100 index">
		<nav-header>充值</nav-header>

		<view class="content">
			<view class="title">
				充值金额
			</view>
			<view class="price">
				<view class="price_icon">
					￥
				</view>
				<input type="text" src="" alt="" value="">
				
			</view>
			<view class="tips">
				本次最多可充值：10-5000元，仅支持10的倍数充值
			</view>
			<view class="btn" @click="href('/pages/my/money/sucessRecharge/sucessRecharge')">
				提现
			</view>
		</view>

	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		}
	}
</script>

<style scoped>
	.index {
		
		box-sizing: border-box;
		padding-top: 100rpx;
	}
	.content{
		width: 710rpx;
		height: 424rpx;
		background: #fff;
		margin: 24rpx auto;
		border-radius: 16rpx;
		box-sizing: border-box;
		padding-top: 40rpx;
	}
	.content>view:first-child{
		font-size: 28rpx;
		font-weight: 400;
		color: #000;
		/* margin: 40rpx 30rpx; */
	}
	.btn {
		width: 650rpx;
		height: 80rpx;
		background: #D0D3D5;
		border-radius:110rpx ;
		margin: 60rpx auto 0 ;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		font-size: 32rpx;
		font-weight: 400;
		
	}
	.title{
		margin-left: 30rpx;
	}
	.price{
		margin-left: 30rpx;
		margin-top: 64rpx;
		position: relative;
	}
	.price input{
		width: 648rpx;
		border-bottom: 1px solid #ccc;
		text-indent: 70rpx;
		font-size: 36rpx;
		line-height: 40rpx;
		font-weight: bold;
	}
	.tips{
		margin-top: 40rpx;
		font-size: 24rpx;
		margin-left: 30rpx;
	}
	.price_icon{
		font-size: 48rpx;
		font-weight: bolder;
		position: absolute;
		top:-5rpx;
	}
</style>
