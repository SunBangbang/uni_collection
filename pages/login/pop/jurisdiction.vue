<template>
	<!-- 权限弹框 -->
	<view class="jurisdiction">
		
		<view class="content">
			<view class="top">
				<view class="title">
					用户协议与隐私政策
				</view>
				<view class="Subtitle">
					感谢您的信任并使用直播直聘!
				</view>
			</view>
			
			<view class="bottom">
				<view class="content_detail">
					欢迎使用直播直聘，我们非常重视保护您的个人信息和隐私，请您认真阅读并理解《用户协议》和《隐私政策》。<br/>
					点击同意即表示您已阅读并同意签署协议及以下约定。<br/>
					1.这是一段条款信息<br/>
					2.这是一段条款信息<br/>
					3.这是一段条款信息
				</view>
				
				<view class="btn_box">
					<view class="" @click="closeSystem">
						拒绝
					</view>
					<view class="" @click="closeJur">
						同意
					</view>
				</view>
				
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	export default{
		methods:{
			closeJur(){
				this.$emit("closeJur")
			},
			closeSystem(){
				console.log("关闭系统")
			}
		}
	}
</script>

<style scoped>
	.jurisdiction{
		height: 100vh;
		width: 100%;
		background: rgba(0, 0,0, .6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: center;
	}
	.jurisdiction>view{
		align-self: center;
	}
	.content{
		width: 584rpx;
		height: 634rpx;
		background: #fff;
		border-radius: 20rpx;
	}
	.top{
		width: 100%;
		height: 120rpx;
		background: #FA4485;
		border-radius: 20rpx 20rpx 0 0;
		color: #fff;
		box-sizing: border-box;
		padding: 16rpx 0 0 32rpx;
	}
	.title{
		font-size: 36rpx;
		font-weight: 600;
		/* margin: 16rpx 0 0 32rpx; */
	}
	.Subtitle{
		font-size: 24rpx;
		font-weight: 400;
		margin-top: 10rpx;
	}
	.content_detail{
		width: 510rpx;
		height: 372rpx;
		margin: 34rpx auto 0 auto;
		/* background: #000; */
		background: #fff;
		font-size: 28rpx;
		font-weight: 400;
	}
	.btn_box{
		width: 515rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		margin: 14rpx auto;
	}
	.btn_box>view:first-child{
		width: 236rpx;
		height: 76rpx;
		text-align: center;
		line-height: 80rpx;
		background: #fff;
		border: 1rpx solid #FA4485;
		border-radius: 64rpx;
		color: #FA4485;
	}
	.btn_box>view:last-child{
	width: 236rpx;
	height: 76rpx;
		text-align: center;
		line-height: 80rpx;
		background: #FA4485;
		color: #fff;
		border-radius: 64rpx;
	}
</style>