<template>
	<view class="search container">

		<view class="head_search bcgBlack">
			<view class="" @click="back">
				<image src="@/static/index/search/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
			</view>
			<view class="input_box">
				<image src="../../../static/index/search/magnifier.png" mode="widthFix" style="width: 44rpx;"></image>
				<input type="text" placeholder="搜索名称">
			</view>
			<view class="colorWhite" @click="search">
				搜索
			</view>
		</view>

		<view class="search_history">
			<view class="">
				搜索历史
			</view>
			<view class="">
				<image src="../../../static/index/search/trash.png" mode="widthFix" style="width: 48rpx;"></image>
			</view>
		</view>


		<view class="history_list">
			<view class="item" v-for="(item,index) in search_history" :key="index">
				{{item.name}}
			</view>
		</view>





	</view>
</template>

<script>
	export default {
		data() {
			return {
			
				search_history: [{
						name: "鑫宝儿"
					},
					{
						name: "小可爱"
					},
					{
						name: "小田羊"
					},
					{
						name: "欣欣小可爱"
					},
					{
						name: "小太阳"
					},
				]
			}
		},
		methods: {
			search() {
				this.$api.to('/pages/market/search/search_result/search_result')
			}
		}
	}
</script>

<style scoped>
	.magnifier {}

	.head_search {
		height: 120rpx;
		width: 750rpx;
		display: flex;
		box-sizing: border-box;
		padding: 20rpx 20rpx 0 12rpx;
	}

	.head_search>view {
		align-self: center;
	}

	.head_search input {
		height: 76rpx;
		width: 568rpx;
		border-radius: 72rpx;
		background: #f3f3f3;
		margin-left: 22rpx;
		color: #999;
		font-size: 28rpx;
		text-indent: 76rpx;
	}

	.head_search>view:last-child {
		margin-left: 20rpx;
		font-size: 30rpx;
	}

	.input_box {
		position: relative;
	}

	.input_box image {
		position: absolute;
		left: 45rpx;
		top: 16rpx;

	}

	.search_history {
		width: 750rpx;
		height: ;
		box-sizing: border-box;
		padding: 0 14rpx 0 20rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 24rpx;
		font-size: 32rpx;
		color: #fff;
		font-weight: 600;
	}

	.history_list {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;

	}

	.item {
		/* width: 208rpx; */
		padding: 2rpx 62rpx;
		/* height: 72rpx; */
		background: #1c1c1e;
		border-radius: 50rpx;
		text-align: center;
		line-height: 72rpx;
		color: #fff;
		font-size: 28rpx;
		margin: 0 18rpx 28rpx 18rpx;
	}
</style>
