<template>
	<view class="container index">
		<nav-header>选择支付方式</nav-header>
		<view class="content">
			<view class="title">
				请选择充值方式
			</view>
			<!-- 支付类型选择 -->
			<view class="type">
				<view class="item" @click="type=0">
					<view class="">
						<image src="@/static/index/details/paytype/zfb.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						支付宝(浏览器使用)
					</view>
					<view class="">
						<image src="@/static/index/details/paytype/check.png" v-if="type==0" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="@/static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>

				<!--view class="item" @click="type=1">
					<view class="">
						<image src="@/static/index/details/paytype/wx.png" mode="widthFix"
							style="width: 80rpx;"></image>
					</view>
					<view class="">
						微信(仅限微信内使用)
					</view>
					<view class="">
						<image src="@/static/index/details/paytype/check.png" v-if="type==1" mode="widthFix"
							style="width: 44rpx;"></image>
						<image src="@/static/index/details/paytype/uncheck.png" v-else mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view-->
				
			</view>
			<!-- 支付类型选择 结束-->
		
		</view>
		
		<view class="bottom">
			<view class="bottom_title">
				充值金额
			</view>
			<view class="price">
				<view class="price_icon">
					￥
				</view>
				<input type="text" src="" alt="" value="" v-model="money">
				
			</view>
			<view class="tips">
				本次最多可充值：1-5000元，仅支持1的倍数充值
			</view>
			
			<view class="btn" @click="recharge()">
				<view class="">
				充值	
				</view>
				
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
			this.orderId=e.orderid
			this.paytype=e.type   //1藏品支付  2盲盒支付
			console.log(this.orderId)
		},
		methods:{
			recharge(){
				this.api.recharge(this.money).then(res=>{
					console.log(res)
					if(res.code==1){
						//0是支付宝 1微信
						if(this.type==0){
							//获取支付宝支付参数
							this.api.wallet_payzfb(res.data.order_id).then(res=>{
								if(res.code==1){
									document.querySelector('body').innerHTML = res.data.result;
									// 调用submit方法
									document.forms[0].submit()
								}else{
									this.$api.pop(res.info);
								}
							  //const div = document.createElement('div') 
							  
							  //div.innerHTML = res.data.result
							  //document.body.appendChild(div)
							 // document.forms[0].submit() //重要，这个才是点击跳页面的核心
								
							})
						}else if(this.type==1){
							//获取微信支付参数
							this.api.wallet_paywx(res.data.order_id).then(res=>{
								if(res.code==1){
									wexinPay(res.data,'在线充值');
								}else{
									this.$api.pop(res.info);
								}
							})
						}
					}
					// href('/pages/my/wallet/sucessRecharge/sucessRecharge')
				})
			},
			
			btn(){
			
			
			}
		},
		data(){
			return{
				type:0,  //当前选择支付类型
				money:"",		//金额数
				htmlText:"",

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
		background: #fff;
		border-radius: 40rpx;
		margin: 24rpx auto;
		box-sizing: border-box;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}
	.title{
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

	.bottom{
		width: 710rpx;
		height: 474rpx;
		background: #fff;
		margin: 24rpx auto;
		border-radius: 16rpx;
		box-sizing: border-box;
		padding-top: 40rpx;
	}
	.bottom>view:first-child{
		font-size: 28rpx;
		font-weight: 400;
		color: #fff;
		/* margin: 40rpx 30rpx; */
	}
	.btn {
		width: 650rpx;
		height: 80rpx;
		/* background: linear-gradient(135deg, #FFFFFF 0%, #343434 100%); */
		background: #6B61E7;
		border-radius:110rpx ;
		margin: 60rpx auto 0 ;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		font-size: 32rpx;
		font-weight: 400;
		display: flex;
		justify-content: flex-end;
	}
	.btn>view{
		width: 646rpx;
		height: 76rpx;
		/* background: #262626; */
		background: #6B61E7;
		border-radius:110rpx ;
		text-align: center;
		line-height: 76rpx;
		color: #fff;
		font-size: 36rpx;
		font-weight: 400;
		align-self: center;
	}
	.bottom_title{
		margin-left: 30rpx;
		color: #fff;
	}
	.price{
		margin-left: 30rpx;
		margin-top: 64rpx;
		position: relative;
		height: 80rpx;
		line-height: 80rpx;
	}
	.price input{
		width: 648rpx;
		border-bottom: 1px solid #ccc;
		text-indent: 70rpx;
		font-size: 36rpx;
		font-weight: bold;
		height: 80rpx;
		line-height: 80rpx;
	}
	.tips{
		margin-top: 40rpx;
		font-size: 24rpx;
		margin-left: 30rpx;
	}
	.price_icon{
		font-size: 48rpx;
		font-weight: bolder;
		position: absolute;
		top:-5rpx;
	}


</style>
