<template>
	<view class="container index">
		<nav-header>设置</nav-header>
		<view class="content">

			<view class="item" @click="href('/pages/login/forgetpassword')">
				<view class="">
					修改登录密码
				</view>
				<view class="">
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
			<view class="item" @click="href('/pages/my/set/updatepaypass')">
				<view class="">
					修改支付密码
				</view>
				<view class="">
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
		</view>

		<view class="content">

			<view class="item">
				<view class="">
					清除缓存
				</view>
				<view class="">
						<view>10MB</view>
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
			<view class="item">
				<view class="">
					检查更新
				</view>
				<view class="">
				
					<view>当前版本：V1.0.0</view>
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
		</view>
		
		<!-- 抢购按钮 -->
		<view class="btn" @click="show_exit_pop=true">
			<view class="">
				<view class="">
					退出账户
				</view>
			</view>
		</view>
		<!-- 抢购按钮 结束-->
		<!-- 隐私政策 -->
		<view class="content">
		
			<view class="item" @click="href('/pages/my/set/relevant?type=2')">
				<view class="">
					隐私政策
				</view>
				<view class="">
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
			<view class="item" @click="href('/pages/my/set/relevant?type=1')">
				<view class="">
					用户协议
				</view>
				<view class="">
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>
		</view>
		<!-- 隐私政策 结束-->

<!-- 退出弹出框 -->
		<exit-pop v-if="show_exit_pop" @cancelExit="show_exit_pop=false"></exit-pop>
		<!-- 退出弹出框 结束-->

	</view>
</template>

<script>
		import ExitPop from "../components/exit_pop.vue"
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader,ExitPop
		},
		data(){
			return{
				show_exit_pop:false,
				user_info:""
			}
		},
		onShow() {
		
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;

	}

	.item {
		display: flex;
		width: 750rpx;
		height: 120rpx;
		background: #fff;
		display: flex;
		font-weight: bold;
		letter-spacing: 2rpx;
		box-sizing: border-box;
		padding: 0 16rpx 0 32rpx;
		justify-content: space-between;
	}

	.item>view {
		align-self: center;
	}

	.item>view:last-child {
		display: flex;
		font-size: 32rpx;
		font-weight: 600;
		color: #999999;
	}

	.item image {
		display: block;
	}

	.content {
		margin-top: 24rpx;
	}
	.btn {
		width: 750rpx;
		height: 128rpx;
		/* background: #000; */
		position: fixed;
		bottom: 0;
		display: flex;
		}
	
	.btn>view{
		align-self: center;
		width: 710rpx;
		height: 84rpx;
		border-radius: 164rpx;
		background: linear-gradient(135deg, #FFFFFF 0%, #343434 100%);
		margin: 0 auto;
		display: flex;
		}
		.btn>view>view{
			margin-left: auto;
			align-self: center;
			width: 706rpx;
			height: 80rpx;
			border-radius: 164rpx;
			background:#6B61E7;
			margin: 0 auto;
			text-align: center;
			line-height: 80rpx;
			color: #000;
			}
	
	
</style>
