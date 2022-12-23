<template>
	<view class="pop_down index">
		<view class="content">
			<view class="text">
				她隐藏了社交账号，付费100云豆解锁或者成为会员，免费解锁。
			</view>
			<view class="btn_box">
				<view class="">
					支付100云豆
				</view>
				<view class="">
					成为会员
				</view>
			</view>
		</view>
		
		<view class="close" @click="close">
			<image src="../../../../static/index/anchotInfo/close_btn.png" mode="widthFix" style="width: 60rpx;"></image>
		</view>
		
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
		height: 372rpx;
		background: #fff;
		border-radius: 20rpx;
	}
	.text{
		font-size: 28rpx;
		font-weight: 600;
		margin: 36rpx auto;
		text-align: center;
		width: 520rpx;
		line-height: 48rpx;
	}
	.btn_box>view{
		width: 472rpx;
		height: 76rpx;
		text-align: center;
		line-height: 80rpx;
		font-size: 28rpx;
		font-weight: 400;
		border-radius: 64rpx;
		margin: 0 auto;
	}
	.btn_box>view:first-child{
		color: #fff;
		background: #FA4485;
		border: 1px solid #FA4485;
	}
	.btn_box>view:last-child{
		color: #FA4485;
		border: 1px solid #FA4485;
		margin-top: 12rpx;
	}
	.close{
		margin-top: 40rpx;
	}
</style>