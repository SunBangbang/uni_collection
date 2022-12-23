<template>
	<view class="container index">


		<!-- 返回按钮 -->
		<view class="zindex999" @click="back" v-if="details.type==2">
			<image src="../../../static/index/details/arrow_back.png" mode="widthFix"
				style="width: 48rpx;margin-left: 20rpx;margin-top: 50rpx;"></image>
		</view>
		<!-- 返回按钮 -->

		<!-- 光照效果 -->
		<div class="light" style="position: absolute;top: 0;right: 0;" v-if="details.type==2">
			<image src="../../../static/index/details/light.png" mode=""></image>
		</div>
		<!-- 光照效果 结束-->

		<!-- 藏品图 -->
		<!--type==1 大图模式 type==2 为小图模式 type==3视频-->
		<!-- 大图样式 -->
		<view class="goods_full" v-if="details.type==1">
			<!-- <image :src="../../../static/index/details/goods.png" mode="widthFix" style="width: 600rpx;"></image> -->
			<image :src="details.img" mode="widthFix" style="width: 100%;"></image>
		</view>
		<!-- 大图样式 结束-->

		<!-- 小图样式 -->
		<view class="">
			<view class="goods" v-if="details.type==2">
				<!-- <image :src="../../../static/index/details/goods.png" mode="widthFix" style="width: 600rpx;"></image> -->
				<!-- <image :src="details.img" mode="" style="height: 400rpx;width: 400rpx;position: absolute;left: 50%;top: 100rpx;transform: translateX(-50%);"></image>
				<image :src="details.back_img" mode="" style="height: 400rpx;width: 400rpx;transform: rotateY(180deg) translateX(50%);position: absolute;top: 100rpx;"></image>
 -->
				<image :src="details.img||'../../static/images/info_img.png'" mode="aspectFill" lazy-load="true">
				</image>
				<!-- <image src="@/static/index/details/bk1.png"></image> -->
				<image :src="details.max_img"></image>
				<image :src="details.back_img" mode="aspectFill" lazy-load="true"></image>
				<!-- <image src="@/static/index/details/bk1.png"></image> -->
				<image :src="details.max_img"></image>
				<view></view>
			</view>
		</view>

		<!-- 小图样式 结束-->
		<!-- 视频样式-->
		<view class="" v-if="details.type==3">
			<video :src="details.img" :show-play-btn="false" :show-fullscreen-btn="false"
				style="width: 750rpx;height: 750rpx;" autoplay="true" loop="true" :controls="false"></video>
		</view>
		<!-- 视频样式 结束-->
		<!-- 藏品图 结束-->

		<!-- 转赠按钮 -->
		<!-- <view class="passon" @click="href('/pages/index/Details/passon/passon')">
			<image src="../../../static/index/details/passon.png" mode="" style="width: 76rpx;height: 88rpx;"></image>
			<view class="">
			转赠	
			</view>
		</view> -->
		<!-- 转赠按钮 结束-->


		<!-- 台子 -->
		<view class="Table" v-if="details.type==2">
			<image src="../../../static/index/details/table.png" mode="widthFix" style="width: 600rpx;"></image>
		</view>
		<!-- 台子 结束-->
		<!-- 限量 -->

		<view class="goods_num">
			<view class="num_first systemBcg colorBlack">
				限量
			</view>
			<view class="num_last systemColor">
				{{details.num}}份
			</view>
		</view>
		<!-- 限量 结束-->
		<!-- 名字 -->
		<view class="name">
			<view class="">
				<image src="../../../static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
			<view class="">
				{{details.name}}
			</view>
			<view class="">
				<image src="../../../static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 名字 结束-->



		<!-- 数字藏品小贴士 -->
		<view class="collection_tips">
			<view class="tips_head">
				<view class="line_left"></view>
				<view class="systemColor">数字藏品小贴士</view>
				<view class="line_right"></view>
			</view>
			<view class="tips_row">
				<view class="">
					<text>唯一编号</text>
				</view>
				<view class="">
					<text>可信纪录</text>
				</view>
				<view class="">
					<text>永久存证</text>
				</view>
				<view class="">
					<text>不可篡改</text>
				</view>
			</view>

		</view>
		<!-- 数字藏品小贴士 结束-->

		<!-- 藏品详情 -->
		<view class="information">
			<view class="title systemColor">
				藏品详情
			</view>
			<view class="img" v-html="details.content">
				<!-- <image src="../../../static/index/testimg.png" mode="" style="width: 670rpx;height: 680rpx;"></image> -->
			</view>
		</view>
		<!-- 藏品详情 结束-->
		
		<view class="information" style="margin-top: 10px;">
			<view class="title systemColor">
				购买须知
			</view>
			<view style="padding: 15px;">
				<uni-rich-text>
						数字藏品为虚拟数字藏品，而非实物，仅限实名认证为年满18周岁的中国大陆用户购买。数字藏品的版权由发行方或原创者拥有，除另行取得版权拥有者书面同意外，用户不得将数字藏品用于任何商业用途。本商品一经售出，不支持退换。本商品源文件不支持本地下载。请勿对数字藏品进行炒作、场外交易、欺诈，或以任何其他非法方式进行使用。
				</uni-rich-text>
			<!-- <image src="../../../static/index/testimg.png" mode="" style="width: 670rpx;height: 680rpx;"></image> -->
			</view>
		</view>

		<!-- 上半部分 结束-->

		<!-- 底部按钮 -->
		<view class="btn" @click="showRecharge=true">
			<!-- 价格 -->
			<view class=" systemColor">
				￥{{details.price}}
			</view>
			<!-- 价格 结束-->
			<view class="soldout systemBcg colorBlack" v-if="details.sell_status==3 || details.sell_num<=0">
				已售馨
			</view>
			<view class="soon colorWhite" v-if="details.sell_status==2">
				<view class="">
					即将开售
				</view>
				<!-- 倒计时插件 传入毫秒数-->
				<view class="">
					<u-count-down :time="ms*1000" format="HH:mm:ss" @finish="finish"></u-count-down>
				</view>
			</view>
			<!-- 可以购买状态 -->
			<view class="buy systemBcg colorBlack" v-if="details.sell_status==1 && details.sell_num>0">
				<view class="" @click="buy">
					立即购买
				</view>
			</view>
			<!-- 可以购买状态 -->
		</view>
		<!-- 底部按钮 结束-->



	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				//弹框
				showRecharge: false,
				//购买按钮状态
				status: 3,
				id: "",
				details: "",
				ms: 0
			}
		},
		onLoad(e) {

			this.id = e.id
			this.get_collection_info()

		},
		methods: {
			//倒计时事件
			finish() {
				this.get_collection_info()
			},
			get_collection_info() {
				this.api.collection_info(this.id).then(res => {
					console.log(res)
					this.details = res.data
					console.log(this.details.sell_at)
					console.log(parseInt(new Date().getTime() / 1000))
					console.log(parseInt(this.details.sell_at - new Date().getTime() / 1000))
					this.ms = parseInt(this.details.sell_at - new Date().getTime() / 1000)
				})
			},
			showImg() {

			},
			close() {

			},
			buy() {
				uni.showToast({
					title: "",
					icon: "loading",
					duration: 100000
				})
				if(this.id == 35 || this.id=="35"){
					//window.location.href = "https://shop250036365.v.weidian.com/?userid=250036365&spider_token=d796"
					//return
				}
				this.api.create_order(this.id).then(res => {
					// uni.hideToast()
					if (res.code == 1) {
						// 寻查是否排队
						this.api.get_islineup(res.data.order_no).then(res1 => {
							if (res1.code == 1) {
								this.$api.to("/pages/index/Details/paytype/paytype?money=" + this.details
									.price +
									"&orderid=" + res.data.order_no + "&type=1")
							} else {
								// uni.showToast({
								// 	title: "",
								// 	icon: "loading"
								// })
								setTimeout(() => {
									this.api.get_islineup(res.data.order_no).then(res2 => {
										if (res2.code == 1) {
											this.$api.to(
												"/pages/index/Details/paytype/paytype?money=" +
												this.details.price +
												"&orderid=" + res.data.order_no +
												"&type=1")
										}
										uni.hideToast()
									});
								}, 3000)
							}
						})

					}
				})

				console.log("立即开售")
			}
		}
	}
</script>

<style scoped>
	.index {
		/* height: 950rpx; */
		width: 750rpx;
		box-sizing: border-box;
		/* padding-top: 50rpx; */
		/* padding-left: 20rpx; */
		display: flex;
		flex-direction: column;
		padding-bottom: 200rpx;
	}

	.goods {
		width: 432rpx;
		height: 432rpx;
		margin: 0 auto 50rpx;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateX(-5deg) rotateY(0deg);
		animation: rotate 15s linear infinite;
	}

	.goods image {
		position: absolute;
		left: 0;
		top: 0;
	}

	.goods image:nth-child(1) {
		width: 428rpx;
		height: 428rpx;
		border: 2rpx solid #0C0E0D;
		transform: rotateY(0deg) translateZ(10rpx);
	}

	.goods image:nth-child(2) {
		width: 16rpx;
		height: 432rpx;
		border-left: 2rpx solid #0C0E0D;
		border-right: 2rpx solid #0C0E0D;
		transform: rotateY(90deg) translateZ(422rpx);
	}

	.goods image:nth-child(3) {
		width: 428rpx;
		height: 428rpx;
		border: 2rpx solid #0C0E0D;
		transform: rotateY(180deg) translateZ(10rpx);
	}

	.goods image:nth-child(4) {
		width: 16rpx;
		height: 432rpx;
		border-left: 2rpx solid #0C0E0D;
		border-right: 2rpx solid #0C0E0D;
		transform: rotateY(270deg) translateZ(10rpx);
	}

	.goods view {
		position: absolute;
		left: -20rpx;
		top: -20rpx;
		width: 382rpx;
		height: 382rpx;
		padding: 20px;
		border: 6rpx solid white;
		border-radius: 16rpx;
	}

	.goods_full {}


	.Table {
		text-align: center;
	}

	.goods_num {
		margin-top: 20rpx;
		width: 260rpx;
		height: 40rpx;
		font-size: 26rpx;
		text-align: center;
		line-height: 46rpx;
		margin: 0 auto;
		/* display: flex; */
	}

	.num_first {
		/* background: #6B61E7; */
		flex: 1;
		/* color: #181532; */
		float: left;
		width: 50%;
	}

	.num_last {
		min-width: 50%;
		background:#F0EFFD;
		flex: 1;
		/* color: #6B61E7; */
		float: right;
	}

	.name {
		/* background: #6B61E7; */
		min-width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 60rpx auto;
		color: #000;
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
background: #F0EFFD;
		text-align: center;
		padding-bottom: 100rpx;
		border-radius: 40rpx;
		margin: 0 auto;

	}

	.title {
		font-size: 40rpx;
		margin-bottom: 40rpx;
		letter-spacing: 4rpx;
	}

	.btn {
		position: fixed;
		bottom: 0;
		height: 128rpx;
		width: 100%;
		/* background: rgba(0, 0, 0, .6); */
		
background: #F0EFFD;
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;

	}

	.btn>view {
		align-self: center;
	}

	.btn>view:first-child {
		
		font-size: 48rpx;

	}

	.buy {
		width: 240rpx;
		height: 84rpx;
		/* background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%); */
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		line-height: 84rpx;
		color: #fff;
		font-size: 34rpx;
		letter-spacing: 4rpx;
		text-align: center;
		display: flex;
	}

	.buy>view {
		align-self: center;
		width: 236rpx;
		height: 80rpx;
		/* background: #1C1C1E; */
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
	}

	.soldout {
		width: 240rpx;
		height: 84rpx;
		/* background: #1C1C1E; */
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		line-height: 84rpx;
		/* color: #999999; */
		font-size: 36rpx;
		letter-spacing: 4rpx;
	}

	.soon {
		width: 240rpx;
		height: 84rpx;
		/* background: #1C1C1E; */
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		/* color: #fff; */
		font-size: 34rpx;
		letter-spacing: 4rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.soon>view:last-child {
		font-size: 24rpx;
		letter-spacing: 2rpx;
	}

	.passon {
		text-align: center;
		/* display: flex; */
		color: #fff;
		font-size: 30rpx;
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



	.tips_head {
		display: flex;
		justify-content: center;
		letter-spacing: 4rpx;
		margin-bottom: 20rpx;
	}

	.line_left {
		align-self: center;
		width: 120rpx;
		height: 2rpx;
		background: linear-gradient(90deg, #181818 0%, #948DED 100%);
		margin-right: 20rpx;
	}

	.line_right {
		align-self: center;
		width: 120rpx;
		height: 2rpx;
		background: linear-gradient(270deg, #181818 0%, #948DED 100%);
		margin-left: 20rpx;
	}

.collection_tips {
		width: 710rpx;
		/* height: 226rpx; */
		background: #999999;
		border-radius: 20rpx;
		margin: 24rpx auto;
		justify-content: center;
		box-sizing: border-box;
		padding-top: 32rpx;
		padding-bottom: 40rpx;
	}

	.tips_row {
		display: flex;
		margin-top: 28rpx;
	}

	.tips_row view {
		flex: 1;
		text-align: center;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.6);
	}

	.tips_row>view:first-child>text:before {
		content: "";
		display: block;
		height: 48rpx;
		width: 48rpx;
		margin: 8rpx auto;
		background: url("@/static/index/details/icon1.png");
		background-size: 100% 100%;
	}

	.tips_row>view:nth-child(2)>text:before {
		content: "";
		display: block;
		height: 48rpx;
		width: 48rpx;
		margin: 8rpx auto;
		background: url("@/static/index/details/icon2.png");
		background-size: 100% 100%;
	}

	.tips_row>view:nth-child(3)>text:before {
		content: "";
		display: block;
		height: 48rpx;
		width: 48rpx;
		margin: 8rpx auto;
		background: url("@/static/index/details/icon3.png");
		background-size: 100% 100%;
	}

	.tips_row>view:nth-child(4)>text:before {
		content: "";
		display: block;
		height: 48rpx;
		width: 48rpx;
		margin: 8rpx auto;
		background: url("@/static/index/details/icon4.png");
		background-size: 100% 100%;
	}

	.collection_info {
		width: 710rpx;
		height: 416rpx;
		background: #181818;
		border-radius: 20rpx;
		margin: 30rpx auto;
		box-sizing: border-box;
		padding-top: 30rpx;
	}

	.collection_info_row {
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-bottom: 40rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: 32rpx;
	}

	.collection_info_row>view:nth-child(2) {
		margin-left: auto;
	}
</style>
