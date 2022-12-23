<template>
	<view class="container index">


		<!-- 返回按钮  -->
		<view class="zindex999" @click="back">
			<image src="@/static/index/search/arrow_right.png" mode="widthFix"
				style="width: 48rpx;margin-left: 20rpx;"></image>
		</view>
		<!-- 返回按钮 -->

		<!-- 光照效果 -->
		<div class="light" style="position: absolute;top: 0;right: 0;">
			<image src="../../../static/index/details/light.png" mode=""></image>
		</div>
		<!-- 光照效果 结束-->

		<!-- 忙盒图 -->
		<view class="goods">
			<image :src="box_info.box_img || '../../../static/index/box/boximg.png'" mode="widthFix"
				style="width: 432rpx;"></image>
		</view>
		<!-- 忙盒图 结束-->


		<!-- 台子 -->
		<view class="Table">
			<image src="../../../static/index/details/table.png" mode="widthFix" style="width: 600rpx;"></image>
		</view>
		<!-- 台子 结束-->
		<!-- 限量 -->

		<view class="goods_num systemBcg colorBlack">剩余{{box_info.sellNum}}份</view>
		<!-- 限量 结束-->
		<!-- 名字 -->
		<view class="name">
			<view class="">
				<image src="../../../static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
			<view class="">
				{{box_info.box_name}}
			</view>
			<view class="">
				<image src="../../../static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 名字 结束-->





		<!-- 藏品详情 -->
		<!--view class="information">
			<view class="">
				{{box_info.date_start}} - {{box_info.date_end}}
			</view>
			<view class="">
				每天{{box_info.time_start}}-{{box_info.time_end}}开放领取
			</view>
			<view class="">
				邀请{{box_info.invitation || 0}}位好友，即可获取抢购次数
			</view>
		</view-->
		<!-- 藏品详情 结束-->

		<!-- 后买剩余次数 -->
		<view class="frequency" v-if="box_info.invitation>0">
			<view class="">
				次数剩余{{box_info.open_num}}次
			</view>

		</view>
		<!-- 后买剩余次数 结束-->

		<!-- 盲盒详情 -->
		<view class="information_bottom">
			<view class="title colorWhite">
				盲盒详情
			</view>
			<view class="img" v-html="content">
				<!-- <image src="../../../static/index/testimg.png" mode="" style="width: 670rpx;height: 680rpx;"></image> -->
			</view>
		</view>
		<!-- 盲盒详情 结束-->

		<!-- 底部按钮 -->

		<!-- 抢购按钮 -->
		<view class="btn" @click="purchase">
			<view class="">
				<view class="systemColor">
					立即抢购
				</view>
			</view>
		</view>
		<!-- 抢购按钮 结束-->
		<!-- 底部按钮 结束-->



	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				id: "",
				box_info: "",
				content: ""

			}
		},
		onLoad(e) {
			this.id = e.id
			// this.id=1
			this.get_box_info()
			// console.log(th)
		},
		methods: {
			get_box_info() {
				this.api.box_info(this.id).then(res => {
					this.box_info = res.data
					this.content = this.$api.turnhtml(res.data.desc)
					console.log(res)
				})
			},
			purchase() {
				uni.showToast({
					title: "提交订单中",
					icon: "loading"
				})
				this.api.createboxorder(this.id).then(res => {

					if (res.code == 1) {
						this.$api.to("/pages/index/Details/paytype/paytype?money=" + this.box_info.price +
							"&orderid=" + res.data + "&type=2")
					}
				})
			}
		}
	}
</script>

<style scoped>
	.index {
		/* height: 950rpx; */
		width: 750rpx;
		box-sizing: border-box;
		padding-top: 50rpx;
		/* padding-left: 20rpx; */
		display: flex;
		flex-direction: column;
		padding-bottom: 200rpx;
	}

	.goods {
		text-align: center;
		margin-top: 50rpx;
		/* transform: translateY(60rpx); */
		-webkit-animation: ud 2s linear infinite;
		animation: ud 2s linear infinite;
	}


	.Table {
		text-align: center;
	}

	.goods_num {
		margin-top: 20rpx;
		/* width: 160rpx; */
		padding: 0 16rpx;
		height: 40rpx;
		font-size: 26rpx;
		text-align: center;
		line-height: 46rpx;
		margin: 0 auto;
		/* display: flex; */
		/* background: #000000; */
		border-radius: 4rpx;
		border: 1px solid #FFFFFF;
		letter-spacing: 2rpx;
	}



	.name {
		/* background: #6B61E7; */
		width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 60rpx auto;
		/* color: #fff; */
		font-size: 40rpx;
		/* line-height: 40rpx; */
	}

	.name>view {
		align-self: center;
	}

	.information {
		width: 710rpx;
		height: auto;
		box-sizing: border-box;
		padding-top: 40rpx;
		background: #fff;
		text-align: center;
		padding-bottom: 100rpx;
		border-radius: 40rpx;
		margin: 50rpx auto;
		font-size: 32rpx;
	}

	.information>view:first-child {

		font-weight: 400;
	}

	.information>view:nth-child(2) {
		margin-top: 8rpx;
	}

	.information>view:nth-child(3) {
		margin-top: 80rpx;
	}



	.btn {
		width: 750rpx;
		height: 128rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
	}

	.btn>view {
		align-self: center;
		width: 710rpx;
		height: 84rpx;
		border-radius: 164rpx;
		/* background: linear-gradient(135deg, #FFFFFF 0%, #343434 100%); */
		background: #F3F6FA;
		margin: 0 auto;
		display: flex;
	}

	.btn>view>view {
		margin-left: auto;
		align-self: center;
		width: 706rpx;
		height: 80rpx;
		border-radius: 164rpx;
		/* background: #1c1c1e; */
		margin: 0 auto;
		text-align: center;
		line-height: 80rpx;
	}


	.frequency {
		display: flex;
	}

	.frequency>view {
		width: 252rpx;
		height: 58rpx;
		line-height: 58rpx;
		text-align: center;
		background: #fff;
		border-radius: 20rpx 20rpx 20rpx 0px;
		align-self: center;
		margin-left: auto;
		box-shadow: inset 0px 1px 6px 1px #FFFFFF;
		margin-right: 20rpx;
	}


	@-webkit-keyframes ud {
		25% {
			-webkit-transform: translateY(-10rpx);
		}

		50%,
		100% {
			-webkit-transform: translateY(0);
		}

		75% {
			-webkit-transform: translateY(10rpx);
		}
	}

	@keyframes ud {
		25% {
			transform: translateY(-10rpx);
		}

		50%,
		100% {
			transform: translateY(0);
		}

		75% {
			transform: translateY(10rpx);
		}
	}
.information_bottom {
		width: 710rpx;
		height: auto;
		box-sizing: border-box;
		padding-top: 40rpx;
		background: #fff;
		text-align: center;
		padding-bottom: 100rpx;
		border-radius: 40rpx;
		margin: 60rpx auto;

	}

	.title {
		font-size: 40rpx;
		margin-bottom: 40rpx;
		letter-spacing: 4rpx;
	}
</style>
