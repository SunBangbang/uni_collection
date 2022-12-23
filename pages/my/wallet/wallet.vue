<template>
	<view class="container index">
		<nav-header>我的钱包</nav-header>
		<!-- 我的余额 -->
		<view class="mymoney">
			<view class="">
				总金额
			</view>
			<view class="systemColor">
				{{money}}
			</view>
			<view class="btn_box">
				<view class="" @click="href('/pages/my/wallet/recharge')">
					<view class="">
						充值
					</view>
				</view>
				<view class="" @click="href('/pages/my/wallet/whit')">
					<view class="">
						提现
					</view>
				</view>
			</view>
		</view>
		<!-- 我的余额 结束-->

		<!-- 明细列表 -->
		<view class="content">

			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="">
						{{item.name}}
					</view>
					<view class="">
						{{item.create_at}}
					</view>
				</view>
				<view class="orange" v-if="item.amount>0">
					{{item.amount}}
				</view>
				<view class="fff" v-else>
					{{item.amount}}
				</view>
			</view>

		</view>
		<!-- 明细列表 结束-->
		

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
				money: "",
				
				page: 0,
				list: []
			}
		},
	onReachBottom() {
		this.get_mx()
		console.log(1)
	},
		onShow() {
			this.api.get_user_info()
			this.money = uni.getStorageSync("user_info").balance
			this.get_mx()
		},
		methods: {
			get_mx() {
				this.api.mx(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						this.list.push(ele)
					})
				})
			}
		}

	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.mymoney {
		width: 710rpx;
		height: 264rpx;
		background: #fff;
		border-radius: 16rpx;
		margin: 24rpx auto;
		letter-spacing: 2rpx;
		box-sizing: border-box;
		padding-top: 32rpx;
	}

	.mymoney>view:first-child {
		font-size: 28rpx;
		font-weight: 400;
		text-align: center;
	}

	.mymoney>view:nth-child(2) {
		margin-top: 20rpx;
		text-align: center;
		/* color: #6B61E7; */
		font-weight: bold;
		font-size: 40rpx;
	}

	.btn_box {
		display: flex;
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 140rpx;
		margin-top: 36rpx;
	}

	.btn_box>view {
		width: 180rpx;
		height: 48rpx;
		/* background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%); */
		background: #6B61E7;
		border-radius: 172rpx;
		text-align: center;
		display: flex;
		justify-content: flex-end;
	}

	.btn_box>view>view {
		align-self: center;
		width: 176rpx;
		height: 44rpx;
		background: #6B61E7;
		border-radius: 172rpx;
		text-align: center;
		line-height: 44rpx;
		color: #fff;
	}

	.content {
		width: 710rpx;
		box-sizing: border-box;
		padding: 0 32rpx;
		background: #fff;
		margin: 0 auto;
	}

	.item {
		display: flex;
		justify-content: space-between;
		background: #fff;
		border-bottom: 1px solid #CCCCCC;
		box-sizing: border-box;
		padding-top: 20rpx;
		padding-bottom: 24rpx;
	}

	.item:last-of-type {
		border: none;
	}

	.item>view:first-child>view:last-child {
		margin-top: 22rpx;
		color: #999;
		font-size: 24rpx;
	}

	.item>view:first-child>view:first-child {}

	.item>view:last-child {
		align-self: center;
	}

	.orange {
		color: #FF8000;
		font-weight: bold;
	}

	.fff {
		color: #000;
		font-weight: bold;
	}
</style>
