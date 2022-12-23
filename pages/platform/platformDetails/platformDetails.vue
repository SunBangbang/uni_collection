<template>
	<view class="container_h100 index">
		<!-- 自定义导航栏 -->
		<nav-header>职位详情</nav-header>
		<!-- 自定义导航栏 结束-->

		<!-- 第一部分 -->
		<view class="title">
			<view class="">
				<view class="">
					招线下抖音才艺主播
				</view>
				<view class="">
					5-12K
				</view>
			</view>
			<view class="">
				性格开朗会聊天，无经验者有专业指导，服从公司管理即可
			</view>
		</view>
		<!-- 第一部分 结束-->

		<!-- 第二部分 -->
		<view class="requirements">
			<view class="">
				岗位要求
			</view>
			<view class="">
				<view class="">
					主播类型： <text>娱乐 - 颜值</text>
				</view>
				<view class="">
					经验要求： <text>经验不限</text>
				</view>
				<view class="">
					直播平台： <text>抖音</text>
				</view>
				<view class="">
					直播地点： <text>不限地点</text>
				</view>
				<view class="">
					工作性质： <text>全职兼职皆可</text>
				</view>
				<view class="">
					联系方式： <text>电话约</text>
				</view>
			</view>
		</view>
		<!-- 第二部分 结束-->

		<!-- 第三部分 -->
		<view class="labour" @click="href('/pages/platform/platformDetails/information/information')">
			<view class="">
				工会信息
			</view>
			<view class="">
		<view class="">
			<image src="../../../static/platform/company-icon.png" mode="" style="width: 108rpx;height: 108rpx;"></image>
		</view>
		<view class="">
			<view class="">
				齐创科技
			</view>
			<view class="">
				陕西省西安市未央区齐创国际
			</view>
		</view>

<view class="">
	<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 44rpx;"></image>
</view>

			</view>
		</view>
		<!-- 第三部分 结束-->

		<!-- 第四部分 -->
		<view class="signup">
			<view class="">
				<view class="">
					<image src="../../../static/index/love.png" mode="widthFix" style="width: 58rpx;"></image>
				</view>
				<view class="">
					收藏
				</view>
			</view>
			<view class="" @click="signup">
				立即报名
			</view>
		</view>
		<!-- 第四部分 结束-->


	<!-- 报名弹框 -->
	<signup-pop @close="showSignUpPop=false" v-if="showSignUpPop"></signup-pop>
	<!-- 报名弹框 结束-->


	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	import signupPop from "./pop/signupPop.vue"
	export default {
		components: {
			navHeader,
			signupPop
		},
		data(){
			return{
				showSignUpPop:false
			}
		},
		methods:{
signup(){
	this.showSignUpPop=true
}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.title {
		margin: 24rpx auto;
		width: 710rpx;
		height: 224rpx;
		background: #fff;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding-top: 30rpx;
	}

	.title>view:first-child {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 20rpx;

	}

	.title>view:first-child>view:first-child {
		font-size: 40rpx;
		font-weight: 600;

	}

	.title>view:first-child>view:last-child {
		font-size: 36rpx;
		font-weight: 600;
		letter-spacing: 0;
		color: #FB3449;

	}

	.title>view:last-child {
		font-size: 24rpx;
		font-weight: 400;
		width: 670rpx;
		margin: 20rpx auto;
		letter-spacing: 1rpx;
		line-height: 48rpx;
	}

	.requirements {
		width: 710rpx;
		margin: 40rpx auto;
	}

	.requirements>view:first-child {
		font-size: 40rpx;
		font-weight: 600;
		color: #000;
	}

	.requirements>view:last-child {
		width: 710rpx;
		height: 420rpx;
		background: #fff;
		border-radius: 20rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 32rpx 20rpx 36rpx 20rpx;
		color: #666;
		font-weight: 400;

	}

	.requirements>view:last-child text {
		font-size: 32rpx;
		font-weight: 400;
		color: #000;
	}
	
	.labour {
		width: 710rpx;
		margin: 40rpx auto;
	}
	
	.labour>view:first-child {
		font-size: 40rpx;
		font-weight: 600;
		color: #000;
	}
	
	.labour>view:last-child {
		width: 710rpx;
		height: 180rpx;
		background: #fff;
		border-radius: 20rpx;
		margin-top: 20rpx;
		display: flex;
		box-sizing: border-box;
		padding: 0 6rpx 0 20rpx;
	}
	.labour>view:last-child>view{
		align-self: center;
	}
	.labour>view:last-child>view:nth-child(2){
		margin-left: 24rpx;
	}
	.labour>view:last-child>view:nth-child(2)>view:first-child{
		font-size: 32rpx;
		font-weight: 600;
		line-height: 32rpx;
	}
	.labour>view:last-child>view:nth-child(2)>view:last-child{
		font-size: 26rpx;
		font-weight: 400;
		line-height: 32rpx;
		color: #666;
		margin-top: 18rpx;
	}
	.labour>view:last-child>view:last-child{
		margin-left: auto;
	}
	.signup{
		width: 750rpx;
		height: 100rpx;
		position: fixed;bottom: 0;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding:0 20rpx ;
		letter-spacing: 4rpx;
	}
	.signup>view{
		align-self: center;
	}
	.signup>view:last-child{
		width: 626rpx;
		height: 88rpx;
		border-radius: 82rpx;
background: #38C1BA;
text-align: center;
color: #fff;
line-height: 88rpx;
font-size: 32rpx;
font-weight: 400;
	}
	.signup>view:first-child{
	display: flex;
	flex-direction: column;
	font-size: 28rpx;
	color: #000;
		}
		.signup>view:first-child image{
		display: block;
			}
</style>
