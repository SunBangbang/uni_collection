<template>
	<view class="container index">
		<nav-header>选择支付方式</nav-header>
		<view class="content">
			<view class="systemColor">
				￥{{money}}
			</view>
			<!-- 支付类型选择 -->
			<view class="type">
				
				<!--view class="item" @click="type=0">
					<view class="">
						<image src="../../../../static/index/details/paytype/zfb.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						支付宝(浏览器使用)
					</view>
					<view class="">
						<image src="../../../../static/index/details/paytype/check.png" v-if="type==0" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="../../../../static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>

				<view class="item" @click="type=1">
					<view class="">
						<image src="../../../../static/index/details/paytype/wx.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						微信(仅限微信内使用)
					</view>
					<view class="">
						<image src="../../../../static/index/details/paytype/check.png" v-if="type==1" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="../../../../static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view-->
				<view class="item" @click="type=3">
					<view class="">
						<image src="../../../../static/index/details/paytype/blance.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						杉德快捷支付
					</view>
					<view class="">
						<image src="../../../../static/index/details/paytype/check.png" v-if="type==3" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="../../../../static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>
				<view class="item" @click="type=4">
					<view class="">
						<image src="../../../../static/index/details/paytype/blance.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						杉德收银台支付
					</view>
					<view class="">
						<image src="../../../../static/index/details/paytype/check.png" v-if="type==4" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="../../../../static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>
				<view class="item" @click="type=2">
					<view class="">
						<image src="../../../../static/index/details/paytype/blance.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						余额
					</view>
					<view class="">
						<image src="../../../../static/index/details/paytype/check.png" v-if="type==2" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="../../../../static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>
			</view>
			<!-- 支付类型选择 结束-->
			<view class="tips" style="color: red;">

			</view>
			
			<view class="btn" @click="btn">
				立即支付
			</view>

		</view>
		<div ref="reportHTML" v-html="htmlText" class="web-con"></div>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	import wexinPay from '@/common/pay/pay.js';
	export default {
		onLoad(e) {
		this.money=e.money
			this.orderId=e.orderid
			this.paytype=e.type   //1藏品支付  2盲盒支付
			console.log(this.orderId)
		},
		methods:{
			btn(){
				//藏品支付  下面是微信 支付宝 余额支付
				if(this.paytype==1){
					//支付宝支付
				
					if(this.type==0){
					this.api.zfbpay(this.orderId).then(res=>{
						//调用支付宝支付
						if(res.code==1){
							document.querySelector('body').innerHTML = res.data.result;
							// 调用submit方法
							document.forms[0].submit()
						}else{
							
						}
					})
						//微信支付
					}else if(this.type==1){
						this.api.wxpay(this.orderId).then(res=>{
							//调用支付宝支付
							wexinPay(res.data,'在线支付');
						})
						//余额支付
					}else if(this.type==2){
						this.$api.pop("支付中",'loading')
						// setTimeout(()=>{
						this.api.balancepay(this.orderId).then(res=>{
							if(res.code==1){
								this.$api.rdt('/pages/index/Details/paytype/sucessRecharge/sucessRecharge')
							}
						})
						// },1000)
					}else if(this.type==3){
						this.api.sandequickpay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}else if(this.type==4){
						this.api.sandepay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}
					//盲盒支付  下面是微信 支付宝 余额支付
				}else if(this.paytype==2){
					//支付宝支付
					if(this.type==0){
						this.api.box_zfbpay(this.orderId).then(res=>{
							document.querySelector('body').innerHTML = res.data.result;
							// 调用submit方法
							document.forms[0].submit()
						})
						//微信支付
					}else if(this.type==1){
						this.api.box_wxpay(this.orderId).then(res=>{
								//调用微信支付
								wexinPay(res.data,'在线支付');
						})
						//余额支付
					}else if(this.type==2){
						this.$api.pop("支付中",'loading')
						setTimeout(()=>{
							this.api.box_balancepay(this.orderId).then(res=>{
								if(res.code==1){
									this.$api.rdt('/pages/index/Details/paytype/sucessRecharge/sucessRecharge')
								}
							})
						},1000)
					}else if(this.type==3){
						this.api.box_sandequickpay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}else if(this.type==4){
						this.api.box_sandepay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}
					//市场支付
				}else if(this.paytype==3){
					//支付宝支付
					if(this.type==0){
						this.api.market_payzfb(this.orderId).then(res=>{
							document.querySelector('body').innerHTML = res.data.result;
							// 调用submit方法
							document.forms[0].submit()
						})
						//微信支付
					}else if(this.type==1){
						this.api.market_paywx(this.orderId).then(res=>{
								//调用微信支付
								wexinPay(res.data,'在线支付');
						})
						//余额支付
					}else if(this.type==2){
						this.$api.pop("支付中",'loading')
						setTimeout(()=>{
							this.api.market_paybalance(this.orderId).then(res=>{
								if(res.code==1){
									this.$api.rdt('/pages/index/Details/paytype/sucessRecharge/sucessRecharge')
								}
							})
						},1000)
					}else if(this.type==3){
						this.api.market_sandequickpay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}else if(this.type==4){
						this.api.market_sandepay(this.orderId).then(res=>{
							if(res.code==1){
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit()
							}else{
								
							}
						})
					}
				}
				
			
			}
		},
		data(){
			return{
				type:0,  //当前选择支付类型
				money:"",		//金额数
				orderId:"",  //订单id
				htmlText:"",
				// 支付类型  1藏品
				paytype:""
			}
		},
		components: {
			navHeader
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
		/* background: #1c1c1e; */
		background: #E8E9EA;
		border-radius: 40rpx;
		margin: 24rpx auto;
		box-sizing: border-box;
		padding-top: 70rpx;
		padding-bottom: 70rpx;
	}
.tips{
		margin-top: 40rpx;
		font-size: 24rpx;
		margin-left: 30rpx;
	}
	.content>view:first-child {
		font-size: 72rpx;
		/* color: #fff; */
		margin: 0 auto;
		text-align: center;
	}

	.type {
		margin: 134rpx auto 0 auto;
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
	.btn{
		width: 650rpx;
		height: 88rpx;
		border-radius: 60rpx;
		background: #948DED;
		text-align: center;
		line-height: 88rpx;
		font-size: 36rpx;
		font-weight: 400;
		color: #fff;
		margin: 60rpx auto 0 auto;
	}
</style>
