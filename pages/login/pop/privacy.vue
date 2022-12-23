<template>
	<view class="privacy">
		<view class="content">
			<view class="top">
				<view class="title">
					欢迎使用直播直聘
				</view>
				<view class="Subtitle">
					为更好的服务，部分功能需以下权限才能使用!
				</view>
			</view>
			
			<view class="bottom">
				<view class="content_detail">
					
					<view class="row" v-for="(item,index) in privacy_list" :key="index">
						<view class="">
							<image :src="item.icon" mode="widthFix" style="width: 76rpx;"></image>
						</view>
						<view class="">
							<view class="name">
								{{item.name}}
							</view>
							<view class="subtitle">
								{{item.content}}
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="btn_box">
					<view class="" @click="closePrivacy">
						知道了
					</view>
				</view>
				
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				privacy_list:[
					{name:"相册功能",content:"提供头像更新，相册更新功能",icon:require("@/static/login/privacy/icon-1.png")},
					{name:"相机功能",content:"向您提供图片和视频拍摄功能",icon:require("@/static/login/privacy/icon-2.png")},
					{name:"拨号功能",content:"提供快捷沟通联系功能",icon:require("@/static/login/privacy/icon-3.png")},
					{name:"系统通知权限",content:"提供消息提醒服务",icon:require("@/static/login/privacy/icon-4.png")},
					{name:"精准位置权限",content:"选择查看直播地点",icon:require("@/static/login/privacy/icon-5.png")}
				]
			}
		},
		methods:{
			closePrivacy(){
				this.$emit("closePrivacy")
			}
		}
	}
</script>

<style scoped>
	.privacy{
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
	.privacy>view{
		align-self: center;
	}
	.content{
		width: 584rpx;
		/* height: 634rpx; */
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
		/* height: 372rpx; */
		padding: 20rpx 0;
		margin: 34rpx auto 0 auto;
		/* background: #000; */
		/* background: #e9e9e9; */
		font-size: 28rpx;
		font-weight: 400;
	}
	.btn_box{
		width: 515rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		margin: 30rpx auto;
	}

	.btn_box>view{
	width: 100%;
	height: 76rpx;
		text-align: center;
		line-height: 80rpx;
		background: #FA4485;
		color: #fff;
		border-radius: 64rpx;
	}
	.row{
		height: 100rpx;
		/* background: #FA4485; */
		display: flex;
		margin: 8rpx auto;
	}
	.row image{
		display: flex;
		margin-right: 10rpx;
	}
	.row>view{
	align-self: center;
	}
	.name{
		font-size: 28rpx;
		font-weight: 400;
	}
	.subtitle{
		font-size: 24rpx;
		font-weight: 400;
		color: #333;
		margin-top: 4rpx;
	}
</style>