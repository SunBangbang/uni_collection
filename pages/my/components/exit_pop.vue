<template>
	<view class="exit_pop">
		<view class="content_tips">
			<view class="title">
				是否退出登录
			</view>
			<view class="content">
				退出登录不会清空您的信息记录哦!
			</view>
			<view class="btn_box">
				<view class="" @click="cancel">
					取消
				</view>
				<view class="" @click="exit()">
					确认
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			cancel(){
				this.$emit('cancelExit')
			},
			exit(){
				var that=this
				uni.removeStorage({
									key: 'user_info',
									success: function () {
								
										that.$api.rdt('/pages/login/login')
									
									}
								})
		
				
			
				
			}
		}
	}
</script>

<style scoped>
	.exit_pop {
		height: 100vh;
		width: 100%;
		background: rgba(0, 0, 0, .6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		transform: translateY(-100vh);
		animation: down 1s ;
		 animation-fill-mode: forwards;
	}

	.exit_pop view {
		align-self: center;
	}

	.content_tips {
		background: #fff;
		width: 568rpx;
		height: 410rpx;
		border-radius: 20rpx;
	}

	.title {
		color: #000;
		font-size: 34rpx;
		text-align: center;
		margin-top: 60rpx;
		font-weight: 600;
	}

	.content {
		color: #000;
		font-size: 28rpx;
		text-align: center;
		font-weight: 600;
		margin: 0rpx auto;
		margin-top: 40rpx;
		width: 300rpx;

	}

	.btn_box {
		width: 520rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		margin: 40rpx auto 0 auto;
	}

	.btn_box>view:first-child {
		width: 239rpx;
		height: 78rpx;
		background: fff;
		border: 1rpx solid #999;
		color: #999;
		text-align: center;
		line-height: 78rpx;
		border-radius: 64rpx;
	}

	.btn_box>view:last-child {
		width: 239rpx;
		height: 78rpx;
		background: #999999;
		border: 1rpx solid #999;
		color: #fff;
		text-align: center;
		line-height: 78rpx;
		border-radius: 64rpx;
	}

	@keyframes down {
		0% {}

		100% {
			transform: translateY(0);
		}

	}
</style>
