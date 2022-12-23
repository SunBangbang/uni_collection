<template>
	<view class="pop_down index">
		<view class="content">
			<view class="title">
			实名认证
			</view>
			<view class="text">
				应国家网络安全要求，需实名认证才能报名哦！
			</view>
			<view class="btn_box">
				<view class="" @click="close">
					放弃报名
				</view>
				<view class="">
					去实名
				</view>
			</view>
		</view>
		
		<!-- <view class="close" @click="close">
			<image src="../../../../static/index/anchotInfo/close_btn.png" mode="widthFix" style="width: 60rpx;"></image>
		</view> -->
		
	</view>
</template>

<script>
	export default{
		methods:{
			close(){
				this.$emit("close")
			}
		}
	}
</script>

<style scoped>
	.index{
		display: flex;
		flex-direction: column;
	}
	.content{
		width: 584rpx;
		height: 410rpx;
		background: #fff;
		border-radius: 20rpx;
	}
	
	.text{
		font-size: 28rpx;
		font-weight: 600;
		margin: 40rpx auto;
		text-align: center;
		width: 520rpx;
		line-height: 48rpx;
	}
	.title{
		font-size: 28rpx;
		font-weight: 600;
		margin: 60rpx auto 0 auto;
		text-align: center;
		width: 520rpx;
		line-height: 48rpx;
	}
	.btn_box{
		display: flex;
	}
	.btn_box>view{
		width: 232rpx;
		height: 76rpx;
		text-align: center;
		line-height: 80rpx;
		font-size: 28rpx;
		font-weight: 400;
		border-radius: 64rpx;
		margin: 0 auto;
	}
	.btn_box>view:last-child{
		color: #fff;
		background: #FA4485;
		border: 1px solid #FA4485;
	}
	.btn_box>view:first-child{
		color: #FA4485;
		border: 1px solid #FA4485;
		margin-top: 12rpx;
	}
	.close{
		margin-top: 40rpx;
	}
</style>