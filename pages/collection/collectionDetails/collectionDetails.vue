<template>
	<view class="container index">


		<!-- 返回按钮 -->
		<view class="zindex999" @click="back">
			<image src="../../../static/index/details/arrow_back.png" mode="widthFix"
				style="width: 48rpx;margin-left: 20rpx;margin-top: 50rpx;" v-if="collection.type==2"></image>
		</view>
		<!-- 返回按钮 -->

		<!-- 光照效果 -->
		<div class="light" style="position: absolute;top: 0;right: 0;" v-if="collection.type==2">
			<image src="../../../static/index/details/light.png" mode=""></image>
		</div>
		<!-- 光照效果 结束-->

		<!-- 藏品图 -->
		<!--type==1 大图模式 type==2 为小图模式 type==3视频-->
		<!-- 大图样式 -->
		<view class="goods_full" v-if="collection.type==1">
			<!-- <image :src="../../../static/index/details/goods.png" mode="widthFix" style="width: 600rpx;"></image> -->
			<image :src="collection.img" mode="widthFix" style="width: 100%;"></image>
		</view>
		<!-- 大图样式 结束-->
		<!-- 小图样式 -->
		<view class="">
			<view class="goods" v-if="collection.type==2">
				<!-- <image :src="../../../static/index/details/goods.png" mode="widthFix" style="width: 600rpx;"></image> -->
				<!-- <image :src="details.img" mode="" style="height: 400rpx;width: 400rpx;position: absolute;left: 50%;top: 100rpx;transform: translateX(-50%);"></image>
						<image :src="details.back_img" mode="" style="height: 400rpx;width: 400rpx;transform: rotateY(180deg) translateX(50%);position: absolute;top: 100rpx;"></image>
		-->
				<image :src="collection.img||'../../static/images/info_img.png'" mode="aspectFill" lazy-load="true">
				</image>
				<!-- <image src="@/static/index/details/bk1.png"></image> -->
				<image :src="collection.max_img"></image>
				<image :src="collection.back_img" mode="aspectFill" lazy-load="true"></image>
				<!-- <image src="@/static/index/details/bk1.png"></image> -->
				<image :src="collection.max_img"></image>
				<view></view>
			</view>
		</view>
		<!-- 小图样式 结束-->
		<!-- 视频样式-->
		<view class="" v-if="collection.type==3">
			<video :src="collection.img" :show-play-btn="false" :show-fullscreen-btn="false"
				style="width: 750rpx;height: 750rpx;" autoplay="true" loop="true" :controls="false"></video>
		</view>
		<!-- 视频样式 结束-->
		<!-- 藏品图 结束-->

		<!-- 台子 -->
		<view class="Table">
			<image src="@/static/index/details/table.png" mode="widthFix" style="width: 600rpx;"
				v-if="collection.type==2"></image>
		</view>
		<!-- 台子 结束-->

		<!-- 名字 -->
		<view class="name">
			<view class="">
				<image src="@/static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
			<view class="">
				{{collection.name}}
			</view>
			<view class="">
				<image src="@/static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 名字 结束-->

		<!-- 编号 -->
		<!-- 	<view class="num">
			<view class="">
				<image src="@/static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>

			</view>
			<view class="">
				{{collection.order_no}}
			</view>
			<view class="">
				<image src="@/static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view> -->
		<!-- 编号 结束-->

		<!-- 收藏信息 -->
		<view class="collection_info systemColor">
			<view class="tips_head">
				<view class="line_left"></view>
				<view class="systemColor">收藏信息</view>
				<view class="line_right"></view>
			</view>
			<view class="collection_info_row">
				<view class="">
					链上HASH
				</view>
				<view class="text_hide">
					{{collection.hash || '确权中'}}
				</view>
				<view class="">
					<image src="../../../static/index/details/copy.png" mode="widthFix" style="width: 36rpx;"
						@click="$api.setclip(collection.hash)"></image>
				</view>
			</view>
			<view class="collection_info_row">
				<view class="">
					合约地址
				</view>
				<view class="text_hide">
					{{collection.address}}
				</view>
				<view class="">
					<image src="../../../static/index/details/copy.png" mode="widthFix" style="width: 36rpx;"
						@click="$api.setclip(collection.address)"></image>
				</view>
			</view>
			<view class="collection_info_row">
				<view class="">
					创作者
				</view>
				<view class="">
					{{collection.author.nickname || '暂无'}}
				</view>
			</view>
			<view class="collection_info_row">
				<view class="">
					收藏者
				</view>
				<view class="">
					{{collection.user.nickname || '暂无'}}
				</view>
			</view>
		</view>
		<!-- 收藏信息 结束-->

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
		<!-- 		<view class="information">
			<view class="hash">
				哈希值
			</view>
			<view class="hashcode systemBcg colorBlack">
				{{collection.hash || "暂无"}}
			</view>
			<view class="author">
				创作者
			</view>
			<view class="authorer colorWhite">
				{{collection.author.nickname || '暂无'}}
			</view>
			<view class="collection">
				收藏者
			</view>
			<view class="collectioner colorWhite">
				{{collection.user.nickname || '暂无'}}
			</view>
		</view> -->
		<!-- 藏品详情 结束-->


		<!-- 上半部分 结束-->

		<!-- 底部按钮 -->
		<view class="btn">
			<view class="share" @click="href('/pages/my/invitation/invitation?img='+collection.img)">
				<text>分享</text>
			</view>
			<view class="donation" v-if="showpasson==1 &&  $store.state.is_send==1"
				@click="href('/pages/index/Details/passon/passon?id='+id+'&goodsname='+collection.name+'&img='+collection.img+'&type=1')">
				<text>转赠</text>
			</view>
			<view class="resale" v-if="showpasson==1 && $store.state.is_mark==1" @click="show_resale=true">
				<text>转售</text>
			</view>
			<view class="more" @click="showmore=true">
				<text>更多</text>
			</view>
		</view>
		<!-- 底部按钮 结束-->


		<!-- 转售弹框 -->
		<view class="pop_down" v-if="show_resale">
			<view class="resale_box">
				<view class="resale_title">
					请输入转售价格
				</view>
				<view class="resale_input">
					<my-input :reserve="false" :ph="'请输入转售金额'" :type="'number'" :label="'元'"
						@input_content="changeMoney" :val="resale_money"></my-input>
				</view>
				<view class="resale_btnbox">
					<view class="" @click="show_resale=false">
						取消
					</view>
					<view class="" @click="resale">
						确定
					</view>
				</view>
			</view>
		</view>
		<!-- 转售弹框 结束-->
		<!-- 更多弹框 -->
		<view class="pop_ocy" v-if="showmore" @click="showmore=false">
			<view class="pop_content">
			<view @click="setheadimg">设置为头像</view>
			<view @click="down">下载藏品图片</view>
			</view>
		</view>
		<!-- 更多弹框 结束-->



	</view>
</template>

<script>
	import myInput from "@/components/my/input_sz.vue"
	export default {
		components: {
			myInput
		},
		onLoad(e) {
			this.id = e.id
			// this.id=1
			if (e.pass == "" || e.pass == undefined || e.pass == null) {
				this.showpasson = 0
			} else {
				this.showpasson = e.pass
			}
			this.get_collection_info()
		},
		data() {
			return {
				showmore:false,
				showpasson: 1, //是否显示转赠按钮  传pass不为空则显示
				id: "", //藏品或者盲盒id
				collection: {
					author: {
						nickname: ""
					},
					user: {
						nickname: ""
					}
				}, //藏品或者盲盒详情
				show_resale: false, //是否显示转售弹框
				resale_money: "" //转售金额

			}
		},
		methods: {
			setheadimg(){
				var that=this
				//上传图片
					// console.log(res)
					//请求设置个人信息借口
					that.api.set_user_info("", this.collection.img).then(res1 => {
						if (res1.code == 1) {
				
							uni.showToast({
								title: "更换头像成功"
							})
							that.api.get_user_info()
						}
					})
				this.showmore=false
			},
			down(){
				var that=this
				// #ifdef APP-PLUS
				uni.saveImageToPhotosAlbum({
					filePath:that.collection.imgm,
					success() {
						that.$api.pop("已保存该图片")
					}
				})
				
				// #endif
				// #ifdef H5
			this.$api.pop("浏览器请长按图片进行保存")
				// #endif
			this.showmore=false
			},
			//提交转售
			resale() {
				this.$api.pop("提交中", "loading")
				// type1藏品 2盲盒
				this.api.resale(this.resale_money, 1, this.id).then(res => {
					if (res.code == 1) {
						this.$api.pop("转售成功")
						setTimeout(() => {
							this.$api.totabar("/pages/market/market")
						}, 500)

					}
					console.log(res)
				})
			},
			changeMoney(e) {
				this.resale_money = e
			},
			get_collection_info() {
				this.api.collection2_info(this.id).then(res => {
					this.collection = res.data
					if(this.collection =="" || this.collection == "null" || this.collection == "Null"){
						this.collection = "确权中"
					}

				})


			},
			more() {

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


	.Table {
		text-align: center;
	}




	.name {
		/* background: #6B61E7; */
		min-width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 30rpx auto;
		/* color: #fff; */
		font-size: 40rpx;
		/* line-height: 40rpx; */
	}

	.name>view {
		align-self: center;
	}

	.num {
		/* background: url('../../../static/collection/details/nobox.png'); */
		background-size: 100% 100%;
		min-width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 60rpx auto;
		color: #999;
		font-size: 26rpx;
	}

	.num>view {
		align-self: center;
	}

	.information {
		width: 710rpx;
		height: auto;
		box-sizing: border-box;
		padding-top: 40rpx;
		background: #1C1C1E;
		text-align: center;
		padding-bottom: 70rpx;
		border-radius: 40rpx;
		margin: 0 auto;
		color: #999999;
	}

	.hashcode {
		font-size: 26rpx;
		font-weight: 400;
		width: 400rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 8rpx;
		margin: 20rpx auto 0 auto;
	}

	.author {
		margin-top: 40rpx;
		font-size: 26rpx;
		font-weight: 400;
	}

	.authorer {
		margin-top: 20rpx;
		font-size: 36rpx;
		font-weight: 400;
	}

	.collection {
		margin-top: 40rpx;
		font-size: 26rpx;
		font-weight: 400;
	}

	.collectioner {
		margin-top: 20rpx;
		font-size: 36rpx;
		font-weight: 400;
	}

	.title {
		font-size: 40rpx;
		margin-bottom: 40rpx;
		letter-spacing: 4rpx;
	}

	.btn {
		position: fixed;
		left: 0;
		bottom: 0;
		height: 202rpx;
		width: 100%;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		padding: 0 92rpx;
		justify-content: space-between;
	}

	.btn>view {
		align-self: center;
		text-align: center;
		letter-spacing: 4rpx;
	}

	.share text:before {
		content: "";
		display: block;
		width: 76rpx;
		height: 88rpx;
		background: url("@/static/collection/details/share.png");
		background-size: 100% 100%;
		margin: 0 auto;
	}

	.donation text:before {
		content: "";
		display: block;
		width: 76rpx;
		height: 88rpx;
		background: url("@/static/collection/details/passon.png");
		background-size: 100% 100%;
		margin: 0 auto;
	}

	.resale text:before {
		content: "";
		display: block;
		width: 76rpx;
		height: 88rpx;
		background: url("@/static/collection/details/resale.png");
		background-size: 100% 100%;
		margin: 0 auto;
	}

	.more text:before {
		content: "";
		display: block;
		width: 76rpx;
		height: 88rpx;
		background: url("@/static/collection/details/more.png");
		background-size: 100% 100%;
		margin: 0 auto;
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
		background: linear-gradient(90deg, #181818 0%, #6B61E7 100%);
		margin-right: 20rpx;
	}

	.line_right {
		align-self: center;
		width: 120rpx;
		height: 2rpx;
		background: linear-gradient(270deg, #181818 0%, #6B61E7 100%);
		margin-left: 20rpx;
	}

	.collection_info {
		width: 710rpx;
		height: 416rpx;
		/* background: #181818; */
		background: #F0EFFD;
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
		/* color: rgba(255, 255, 255, 0.6); */
		font-size: 32rpx;
	}

	.collection_info_row>view:nth-child(2) {
		margin-left: auto;
		max-width: 400rpx;
	}

	.resale_box {
		/* width: 540rpx; */
		/* padding: 0 10rpx; */
		background:#F0EFFD;
		border-radius: 20rpx;
	}

	.resale_title {
		text-align: center;
		margin: 65rpx auto;
	}

	.resale_btnbox {
		width: 710rpx;
		height: 88rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 70rpx;
		margin-bottom: 70rpx;
		box-sizing: border-box;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.resale_btnbox>view {
		width: 290rpx;
		height: 78rpx;
		border-radius: 36rpx;
		text-align: center;
		font-size: 36rpx;
		line-height: 78rpx;
	}

	.resale_btnbox>view:first-child {
		background: #fff;
		color: #999;
	}

	.resale_btnbox>view:last-child {
		background: #6B61E7;
		color: #fff;
		
	}
	.pop_content>view{
		margin-top:70rpx;
		width: 320rpx;
		border-radius: 162rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		/* background: linear-gradient(#111111,#1e1e1c); */
		background: #6B61E7;
		color: #fff;
	}
</style>
