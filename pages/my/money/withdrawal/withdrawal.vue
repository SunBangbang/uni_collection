<template>
	<view class="container_h100 index">
		<nav-header>我要提现</nav-header>

		<view class="type">
			<view class="">
				提现方式
			</view>
			<view class="tips">
				请选择提现方式
			</view>
			<view class="">
				<image src="../../../../static/my/mymoney/with/arrow_down.png" mode="widthFix" style="width: 24rpx;">
				</image>
			</view>
		</view>

		<view class="content">
			<view class="title_tip">
				提现金额
			</view>
			
			<!-- 输入框 -->
			<view class="price">
				<view class="price_icon">
					￥
				</view>
				<view class="">
					<input type="text" src="" alt="" value="" placeholder="请输入提现金额">
				</view>

				<view class="all">
					全部提现
				</view>
			</view>
			<!-- 输入框 结束-->
			<view class="input_tip">
				可提现金额：<text class="pink">￥ 5000.55 </text> 元
			</view>
			
			<view class="btn">
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
		background: #F8F7F9;
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.type {
		width: 710rpx;
		height: 100rpx;
		background: #EBEDF0;
		display: flex;
		margin: 24rpx auto 0 auto;
		box-sizing: border-box;
		padding: 0 32rpx;
	}

	.type>view {
		align-self: center;
		border-radius: 16rpx;
	}

	.type>view:first-child {
		align-self: center;
		font-size: 24rpx;
		font-weight: 400;
		color: #000;
	}

	.type>view:nth-child(2) {
		margin-left: 38rpx;
		color: #999999;
		font-size: 24rpx;
		font-weight: 400;
		border-radius: 16rpx;
	}

	.type>view:nth-child(3) {
		margin-left: auto;
	}

	.content {
		height: 480rpx;
		width: 710rpx;
		background: #fff;
		border-radius: 16rpx;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 32rpx;
	}

	.price {
		/* margin-left: 30rpx; */
		margin-top: 32rpx;
		position: relative;
		display: flex;
		height: 100rpx;
		line-height: 90rpx;
		border-bottom: 1px solid #ccc;
	}

	.price>view:last-child {
		margin-left: auto;
		margin-right: 30rpx;
		font-size: 24rpx;
		color: #FA4485;
		
		font-weight: 400;
	}

	.price input {
		width: 348rpx;

		text-indent: 70rpx;
		font-size: 36rpx;
		height: 90rpx;
		line-height:90rpx;
		font-weight: bold;
	}

	.tips {
		/* margin-top: 40rpx; */
		font-size: 24rpx;
		margin-left: 30rpx;
	}

	.price_icon {
		font-size: 48rpx;
		font-weight: bolder;
		position: absolute;
		top: -5rpx;
	}
	.title_tip{
		font-size: 28rpx;
		font-weight: 400;
		color: #000;
	}
	.input_tip{
		margin-top: 18rpx;
		font-size: 24rpx;
		color: #333;
		font-weight: 400;
	}
	.pink{
		color: #FA4485;
	}
	.btn{
		margin: 60rpx auto;
		text-align: center;
		color: #fff;
		line-height: 80rpx;
		width: 646rpx;
		height: 80rpx;
		border-radius: 110rpx;
		font-size: 24rpx;
		letter-spacing: 2rpx;
background: #D0D3D5;
	}
	input::placeholder {
	            font-size: 24rpx;
	            font-family: Arial;
	            letter-spacing: 5px;
	            color: #919191 !important;
	            padding-left: 13px;
	            padding-top: 9px;
	        }
</style>
