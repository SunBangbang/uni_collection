<template>
	<view class="container index">
		<nav-header>提现</nav-header>

		<view class="content">
			<view class="title">
				请选择充值方式
			</view>
			<!-- 支付类型选择 -->
			<view class="type">
				<view class="item" @click="type=0">
					<view class="">
						<image src="@/static/index/details/paytype/zfb.png" mode="widthFix" style="width: 80rpx;">
						</image>
					</view>
					<view class="">
						支付宝
					</view>
					<view class="">
						<image src="@/static/index/details/paytype/check.png" v-if="type==0" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="@/static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>

				<view class="item" @click="type=1">
					<view class="">
						<image src="@/static/index/details/paytype/wx.png" mode="widthFix" style="width: 80rpx;">
						</image>
					</view>
					<view class="">
						微信
					</view>
					<view class="">
						<image src="@/static/index/details/paytype/check.png" v-if="type==1" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="@/static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>

			</view>
			<!-- 支付类型选择 结束-->
		</view>

		<view class="" v-if="type==0">
			<my-input :ph="'请输入支付宝账号'" :label="'支付宝账号'" @input_content="zfb_content"></my-input>
			<my-input :ph="'请输入支付宝名称'" :label="'支付宝名称'" @input_content="zfbname_content"></my-input>
			<my-input :ph="'请输入提现金额'" :label="'提现金额'" @input_content="whitacount"></my-input>
		</view>
		<view class="" v-if="type==1">
			<my-input :ph="'请输入微信账号'" :label="'微信账号'" @input_content="wx_content"></my-input>
			<my-input :ph="'请输入提现金额'" :label="'提现金额'" @input_content="whitacount"></my-input>
		</view>


		<view class="btn" @click="whit">
			<view class="">
				提现
			</view>
		</view>

	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	import myInput from "@/components/my/input_sz.vue"
	export default {
		components: {
			navHeader,
			myInput
		},
		data() {
			return {
				type: 0, //当前选择支付类型
				money: "", //金额数
				acount: "", //数量
				wx: "", //微信账号
				zfb: "", //支付宝张哈奥
				zfbname: "" //支付宝名称
			}
		},
		methods: {
			whit() {
				if (this.type == 0) {
					this.api.wallet_with("alipay_account", this.acount, this.zfbname, this.zfb).then(res => {
						if (res.code == 1) {
							uni.showToast({
								title: "申请成功"
							})
							setTimeout(()=>{
								this.$api.totabar("/pages/my/my")
							},500)
							
						}
					})
				} else if (this.type == 1) {
					this.api.wallet_with("wechat_wallet", this.acount, null, this.wx).then(res => {
						if (res.code == 1) {
							uni.showToast({
								title: "申请成功"
							})
							setTimeout(()=>{
								this.$api.totabar("/pages/my/my")
							},500)
						}
					})
				}

			},
			zfb_content(e) {
				console.log(e)
				this.zfb = e
			},
			zfbname_content(e) {
				this.zfbname = e
			},
			whitacount(e) {
				this.acount = e
			},
			wx_content(e) {
				this.wx = e
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
		width: 710rpx;
		/* height: 682rpx; */
		background: #fff;
		border-radius: 40rpx;
		margin: 24rpx auto;
		box-sizing: border-box;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}

	.title {
		text-indent: 30rpx;
	}

	.type {
		margin: 30rpx auto 0 auto;
	}

	.type image {
		display: block;
	}

	.type>.item {
		margin: 0 auto;
		width: 660rpx;
		height: 80rpx;
		/* background: #888; */
		display: flex;
		margin-bottom: 13rpx;
	}


	.item>view {
		align-self: center;
	}

	.item>view:last-child {
		margin-left: auto;
	}

	.btn {
		width: 650rpx;
		height: 84rpx;
		background: linear-gradient(135deg, #FFFFFF 0%, #343434 100%);
		border-radius: 164rpx;
		display: flex;
		justify-content: flex-end;
		margin: 50rpx auto;
	}

	.btn>view {
		width: 646rpx;
		height: 80rpx;
		/* background: #262626; */
		background: #6B61E7;
		border-radius: 164rpx;
		align-self: center;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
	}
</style>
