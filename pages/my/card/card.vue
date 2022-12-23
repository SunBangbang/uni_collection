<template>
	<view class="container index">
		<nav-header>权益卡包</nav-header>
		<view class="content">

			<div class="item" v-for="(item,index) in list" :key="index">
				<view class="item_child">
					<view class="">
						<view class="">
							<view class="">
								<image :src="item.icon" mode="widthFix" style="width: 56rpx;"></image>
							</view>
							<view class="">
								{{item.name}}
							</view>
						 </view>
						<view class="title">
							{{item.title}}
						</view>
					</view>
					<view class="">
						<text>{{item.num}}</text>张
					</view>
				</view>
			</div>


		</view>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onShow() {
			this.api.get_user_info()
			
			this.list[0].num=uni.getStorageSync("user_info").accept.drop_num
			this.list[0].title="尊敬的收藏家，您本月可免费获得"+uni.getStorageSync("user_info").accept.drop_num+"次空投。"
			this.list[1].num=uni.getStorageSync("user_info").accept.buy_num
			this.list[1].title="尊敬的收藏家，您本月已获得"+uni.getStorageSync("user_info").accept.buy_num+"张优先购次卡。优先购次卡可在藏品开启预售通道后即可购买。订单生效，即视为使用"   
			this.list[2].num=uni.getStorageSync("user_info").accept.white_num
			this.list[2].title="尊敬的收藏家，您本月已获得"+uni.getStorageSync("user_info").accept.white_num+"张白名单次卡。白名单次卡可在藏品开启发售后即可购买。订单生效，即视为使用。"
			this.list[3].num=uni.getStorageSync("user_info").accept.zhe_num
			this.list[3].title="您本月可使用"+uni.getStorageSync("user_info").accept.zhe_num+"次"+uni.getStorageSync("user_info").zhe+"折购买权限。"
		},
		onLoad() {
			
		},
		data() {
			return {
				list:[
					{name:"我的空投权益",icon:require("../../../static/my/card/icon-1.png"),num:0,title:"尊敬的收藏家，您本月可免费获得0次空投。"},
					{name:"优先购次卡",icon:require("../../../static/my/card/icon-2.png"),num:0,title:"尊敬的收藏家，您本月已获得36张优先购次卡。优先购次卡可在藏品开启预售通道后即可购买。订单生效即视为使用"},
					{name:"白名单次卡",icon:require("../../../static/my/card/icon-3.png"),num:0,title:"尊敬的收藏家，您本月可获得0张白名单次卡。白名单次卡可在藏品开启发售后即可购买。订单生效即视为使用。"},
					{name:"折扣卡",icon:require("../../../static/my/card/icon-4.png"),num:0,title:"尊敬的收藏家，您本月可使用11次5折购买权限。"},
				]
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.content {
		margin-top: 24rpx;
	}

	.item {
		width: 710rpx;
		height: 220rpx;
		/* background: linear-gradient(133deg, #FFFFFF 0%, #343434 100%); */
		background:#fff;
		border-radius: 16rpx;
		margin: 0 auto 26rpx auto;
		display: flex;
		justify-content: flex-end;
	}

	.item>view {
		width: 706rpx;
		height: 216rpx;
		background: #fff;
		align-self: center;
		border-radius: 16rpx;
	}

	.item_child {
		display: flex;
	}

	.item_child>view:first-child {
		display: flex;
		flex-direction: column;

	}
	.item_child>view:first-child>view:first-child {
		display: flex;
		margin-top: 24rpx;
		margin-left: 18rpx;
		font-size: 40rpx;
		letter-spacing: 2rpx;
		/* background: #6B61E7; */
	}
	.item_child>view:first-child>view:last-child {
		font-size: 24rpx;
		color: #999;
		margin-top: 24rpx;
		margin-left: 18rpx;
		font-weight: 400;
		letter-spacing: 2rpx;
	}
	image{
		display: block;
		margin-right: 2rpx;
	}

	.item_child>view:last-child {
		align-self: center;
		margin-left: auto;
		font-size: 40rpx;
		letter-spacing: 4rpx;
		/* color: #6B61E7; */
		color: #6B61E7;
		margin-right: 28rpx;
		font-weight: 400;
	}

	.item_child>view:last-child text {

		font-size: 68rpx;
	}
	.title{
		max-width: 480rpx;
	}
</style>
