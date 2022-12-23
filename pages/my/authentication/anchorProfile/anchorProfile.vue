<template>
	<view class="container_h100 index">
		<nav-header>主播档案</nav-header>

		<!-- 上传形象图片 -->
		<view class="photo">
			<view class="title">
				上传形象地址<text class="stitle">（至少3张照片）</text>
			</view>
			<view class="photoBox">
				<view class="">
					<image src="../../../../static/index/headimg.png" mode="" style="width: 210rpx;height: 210rpx;">
					</image>
				</view>
				<view class="">
					<image src="../../../../static/index/headimg.png" mode="" style="width: 210rpx;height: 210rpx;">
					</image>
				</view>
				<view class="">
					<image src="../../../../static/index/headimg.png" mode="" style="width: 210rpx;height: 210rpx;">
					</image>
				</view>
				<view class="">
					<image src="../../../../static/index/headimg.png" mode="" style="width: 210rpx;height: 210rpx;">
					</image>
				</view>
				<view class="camera">
					<view class="">
						<image src="@/static/my/authentication/camera.png" mode="widthFix" style="width: 48rpx;">
						</image>
					</view>
					<view class="">
						上传图片
					</view>
				</view>
			</view>
		</view>
		<!--上传形象图片 结束-->

		<!-- 昵称 -->
		<view class="name">
			<view class="">
				昵称
			</view>
			<view class="">
				<input type="text" v-model="name" placeholder="请输入昵称">
			</view>
		</view>
		<!-- 昵称 结束-->

		<!-- 手机号 -->
		<view class="name">
			<view class="">
				手机号
			</view>
			<view class="">
				<input type="text" v-model="tel" placeholder="请输入手机号">
			</view>
		</view>
		<!-- 手机号 结束-->

		<!-- 直播经验 -->
		<view class="name">
			<view class="">
				直播经验
			</view>
			<view class="">
				<input type="text" v-model="tel" placeholder="请输入直播经验">
			</view>
		</view>
		<!-- 直播经验 结束-->

		<!-- 地址 -->
		<view class="name">
			<view class="">
				直播经验
			</view>
			<view class="">
				<input type="text" v-model="tel" placeholder="请选择地址">
			</view>
		</view>
		<!-- 地址 结束-->

		<!-- 上传历史直播录屏 -->
		<view class="name">
			<view class="">
				上传历史直播录屏<text class="small">（30S以内）</text>
			</view>
			<view class="record">
			<image src="../../../../static/index/headimg.png" mode="" style="width: 210rpx;height: 210rpx;"></image>
			</view>
		</view>
		<!-- 上传历史直播录屏 结束-->

		<view class="btn">提交</view>


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
				name: "",
				tel: ""
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
		overflow-y: scroll;
	}

	.title {
		font-size: 32rpx;
		color: #000;
		font-weight: 600;
	}

	.stitle {
		font-size: 28rpx;
	}

	.photo {
		width: 710rpx;
		margin: 24rpx auto;
		border-radius: 20rpx;
	}

	.photoBox {
		width: 710rpx;
		/* height: 520rpx; */
		background: #fff;
		margin: 20rpx auto 0 auto;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 20rpx 0rpx 40rpx 20rpx;
	}

	.photoBox>view {
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.camera {
		width: 210rpx;
		height: 210rpx;
		border-radius: 4rpx;
		background: #F8F7F9;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 28rpx;
		color: #999;
	}

	.name {
		margin: 0 auto;
		width: 710rpx;
		/* margin: 24rpx auto; */
	}

	.name>view:first-child {
		margin: 24rpx auto;
		font-size: 32rpx;
		color: #3D444D;
		font-weight: 600;
	}

	input {
		background: #fff;
		border-radius: 20rpx;
		width: 710rpx;
		height: 120rpx;
		text-indent: 20rpx;
	}

	::placeholder {
		font-size: 30rpx;

	}

	.small {
		font-size: 28rpx;
	}

	.btn {
		width: 710rpx;
		height: 88rpx;
		border-radius: 174rpx;
		margin: 60rpx auto;
		background: #FA4485;
		color: #fff;
		text-align: center;
		line-height: 88rpx;

	}
	.record{
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		background: #fff;
	}
</style>
