<template>
	<view class="container index">
		<nav-header>支付成功</nav-header>
		<view class="content">
			<view class="">
				<image src="@/static/index/details/paytype/sucess.png" mode="widthFix" style="width: 180rpx;"></image>
			</view>
			<view class="">
				支付成功
			</view>
			<view class="">
				{{num}}秒后自动返回我的钱包
			</view>
		</view>

		<view class="select" @click="rdt('/pages/my/order/order')">
			查看订单
		</view>
		<view class="back" @click="totabar('/pages/index/index')">
			返回首页
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
				num:0,
				time:""
			}
		},
		onLoad(e) {
			this.num=3
			var that=this
			this.time=setInterval(()=>{
				if(that.num<=0){
				clearInterval(this.time)
				that.$api.totabar("/pages/index/index")
				}
				--that.num
			},1000)
		},
		beforeDestroy() {
			clearInterval(this.time)
		}

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
background: #F0EFFD;
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
		color: #000;
		font-size: 28rpx;
		
		font-weight: 400;
	}
	.select{
		width: 710rpx;
		height: 88rpx;
		font-size: 32rpx;
		color: #000000;
		font-weight: 400;
		text-align: center;
		line-height: 88rpx;
		background: #6B61E7;
		border-radius: 64rpx;
		margin: 160rpx auto 20rpx auto;
		letter-spacing: 4rpx;
	}
	.back{
		width: 706rpx;
		height: 84rpx;
		font-size: 32rpx;
		color: #6B61E7;
		font-weight: 400;
		text-align: center;
		line-height: 84rpx;
		/* background: #6B61E7; */
		border-radius: 64rpx;
		margin: 0 auto;
		border: 1px solid #6B61E7;
		letter-spacing: 4rpx;
	}
</style>
