<template>
	<view class="platformbox container">
		<!-- 头部搜索款 -->
		<view class="head_search">
			<view class="search">
				<input type="text" name="" placeholder="查公司查工会">
				<image src="@/static/platform/magnifier-icon.png" mode="widthFix"
					style="width: 44rpx;position: absolute;left: 42rpx;top: 50%;transform: translateY(-50%);"></image>
			</view>
			<view class="search_text" @click="searchPlatform">
				搜索
			</view>
		</view>
		<!-- 头部搜索款 结束-->

		<view class="platform">
			<view class="platform_list" v-for="(item,index) in list" :key="index" @click="href('/pages/platform/platformDetails/platformDetails')">
				<view class="notice">
					<view class="">
						<image src="../../static/platform/notice-icon.png" mode="widthFix" style="width: 40rpx;">
						</image>
					</view>
					<view class="">
						性格开朗会聊天，无经验者有专业指导，服从公司管理即可
					</view>

				</view>
				<view class="name">
					<view class="">
						招线下抖音才艺主播
					</view>
					<view class="">
						5-12K
					</view>
				</view>
				<view class="">
					陕西省西安市未央区齐创国际
				</view>
				<view class="">
					<view class="">
						<image src="../../static/platform/company-icon.png" mode="widthFix" style="width: 52rpx;">
						</image>
					</view>
					<view class="">
						齐创科技
					</view>
					<view class="signup">
						立即报名
					</view>

				</view>

			</view>
		</view>



	</view>
</template>

<script>
	export default {

		data() {
			return {
				keyword: "查工会查公司",
				list: [{
					notice: "性格开朗会聊天，无经验者有专业指导，服从公司管理即可",
					name: "招线下抖音才艺主播 ",
					company: "齐创科技",
					company_icon: "",
					address: "陕西省西安市未央区齐创国际"
				},{
					notice: "性格开朗会聊天，无经验者有专业指导，服从公司管理即可",
					name: "招线下抖音才艺主播 ",
					company: "齐创科技",
					company_icon: "",
					address: "陕西省西安市未央区齐创国际"
				},{
					notice: "性格开朗会聊天，无经验者有专业指导，服从公司管理即可",
					name: "招线下抖音才艺主播 ",
					company: "齐创科技",
					company_icon: "",
					address: "陕西省西安市未央区齐创国际"
				},{
					notice: "性格开朗会聊天，无经验者有专业指导，服从公司管理即可",
					name: "招线下抖音才艺主播 ",
					company: "齐创科技",
					company_icon: "",
					address: "陕西省西安市未央区齐创国际"
				}]
			}
		},
		methods: {
			searchPlatform() {
				this.$api.to('/pages/platform/search/search_result')
			
			}
		}
	}
</script>

<style scoped>
	.head_search {
		width: 750rpx;
		height: 120rpx;
		background: #fff;
		display: flex;
	}

	.head_search>view {
		align-self: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 10rpx 0 20rpx;
	}

	.search {
		position: relative;
	}

	.search input {
		background: #F8F7F9;
		border-radius: 72rpx;
		width: 620rpx;
		height: 76rpx;
		text-indent: 76rpx;
		font-size: 28rpx;
	}

	.search_text {
		width: 100rpx;
		font-size: 28rpx;
		color: #333;
	}

	.platform {
		margin: 24rpx auto;
		width: 710rpx;
		/* padding-bottom: 120rpx; */
	}

	.platform_list {
		width: 710rpx;
		height: 316rpx;
		background: #fff;
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		margin: 24rpx auto;
	}

	.platform_list>view:first-child {
		font-size: 24rpx;
		font-weight: 400;
		color: #000;
	}

	.notice {
		display: flex;
		margin: 0 auto;
		margin-top: 30rpx;
		justify-content: space-around;
	}

	.platform_list>view:nth-child(2) {
		color: #000;
		font-size: 40rpx;
		text-align: left;

		margin-top: 13rpx;


	}

	.name {
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 40rpx;
		font-weight: 400;
	}

	.name view:last-child {
		color: #FB3449;

		font-weight: 600;
	}

	.platform_list>view:nth-child(3) {
		margin: 40rpx auto 0 20rpx;
		font-size: 26rpx;
		font-weight: 400;

		color: #666666;
	}

	.platform_list>view:nth-child(4) {
		margin: 20rpx 0 0 20rpx;
		font-size: 26rpx;
		color: #000;
		font-weight: 600;
		line-height: 80rpx;
		display: flex;
	}

	.platform_list>view:nth-child(4) image {
		display: block;
		margin-right: 8rpx;
	}

	.platform_list>view:nth-child(4) view {
		align-self: center;
	}
	.signup{
		width: 180rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
background: #E4FFFE;
margin-left: auto;
font-size: 28rpx;
color: #38C1BA;
border-radius: 40rpx 0 0 40rpx;
	}
</style>
