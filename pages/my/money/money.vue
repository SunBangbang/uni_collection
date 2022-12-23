<template>
	<view class="index container_h100">
		
		<view class="top">
			<nav-header :navBcg="'transparent'" :textColor="'#fff'"
				:imgUrl="require('@/static/index/search/arrow_right.png')">我的钱包</nav-header>

			<view class="content">
				<!-- 剩余云豆 -->
				<view class="">
					<view class="">
						<view class="">
							剩余云豆
						</view>
						<view class="">
							1000
						</view>
					</view>
					<view class="" @click="href('/pages/my/money/recharge/recharge')">
						充值
					</view>
				</view>
				<!-- 剩余云豆 结束 -->
				<p class="line"></p>
				<!-- 邀请剩余云豆-->
				<view class="">
					<view class="">
						<view class="">
							邀请剩余云朵
						</view>
						<view class="">
							1000
						</view>
					</view>
					<view class="" @click="href('/pages/my/money/withdrawal/withdrawal')">
						提现
					</view>
				</view>
				<!-- 邀请剩余云豆 结束-->
			</view>
			
			<view class="notice">
				<u-notice-bar :text="text1" :bgColor="'#fff'"></u-notice-bar>
			</view>
			
		</view>
		
		<view class="bottom">
			<view class="title">
				邀请详情
			</view>
			<view class="agent">
				
				<view class="item">
					<view class="">
						<view class="acthor">
							<image src="../../../static/index/headimg.png" mode="" style="border-radius: 50%;width: 88rpx;height: 88rpx;"></image>
						</view>
					</view>
					<view class="">
						<view class="name">
							昵称
						</view>
						<view class="info">
							25岁
						</view>
					</view>
					<view class="">
						<view class="num">
							-10
						</view>
						<view class="time">
							2022-04-26
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		data(){
			return{
				 text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
			}
		},
		components: {
			navHeader
		}

	}
</script>

<style scoped>
	.top {
		width: 750rpx;
		height: 622rpx;
		/* background: url(@/static/my/money/bcg.png); */
		background: url(@/static/my/mymoney/bcg.png);
		background-size: 100% 100%;
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.content {
		width: 710rpx;
		height: 324rpx;
		background: #fff;
		border-radius: 20rpx;
		margin: 24rpx auto;
		display: flex;
		flex-direction: column;
	}

	.content>view {
		flex: 1;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 60rpx;
	}

	.content>view>view {
		align-self: center;
	}

	.content>view>view:first-child {
		color: #333;
		font-size: 28rpx;
		font-weight: 400;
	}

	.content>view>view:first-child>view:last-child {
		color: #333;
		font-size: 40rpx;
		font-weight: 600;
		margin-top: 16rpx;
	}

	.content>view>view:last-child {
		color: #FF3F46;
		width: 120rpx;
		height: 60rpx;
		border-radius: 80rpx;
		border: 1px solid #FF3F46;
		font-size: 28rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.line {
		width: 670rpx;
		height: 1rpx;
		background: #E3E3E3;
		margin: 0 auto;
	}
	.notice{
		width: 710rpx;
		height: 84rpx;
		margin: 24rpx auto;
	}
	.bottom{
		width: 710rpx;
		margin: 24rpx auto;
	}
	.title{
		font-size:32rpx;
		color: #333;
		font-weight: 600;
		margin-bottom: 24rpx;
	}
	.item{
		background: #fff;
		height: 142rpx;
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.item>view{
		align-self: center;
	}
	.name{
		font-size: 30rpx;
		font-weight: 600;
		color: #333;
	}
	.info{
		font-size: 24rpx;
		color: #666666;
		font-weight: 400;
		margin-top: 16rpx;
	}
	.item>view:nth-child(2){
		margin-left: 20rpx;
	}
	.item>view:nth-child(3){
		margin-left: auto;
		text-align: right;
	}
	.item>view:nth-child(3)>view:first-child{
		color: #FE8D51;
		font-size: 24rpx;
		
font-weight: bold;
	}
	.item>view:nth-child(3)>view:last-child{
			font-size: 24rpx;
			color: #999;
			font-weight: 400;
			margin-top: 18rpx;
		}
</style>
