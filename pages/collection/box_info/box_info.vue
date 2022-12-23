<template>
	<!-- 盲盒详情 -->
	<view class="container index">
		<!-- //开盒子动画 -->
		<view class="action" v-show="showaction">

		</view>
		<!-- //开盒子动画 -->
		<!-- //开盒动画之后的背景 -->
		<view class="action_bcg colorBlack" @click="totabar('/pages/collection/collection')" v-if="showaction_bcg">
			<view class="action_title">
				恭喜获得
			</view>
			<view class="tips_head">
				<view class="line_left"></view>
				<view class="">{{result_name}}</view>
				<view class="line_right"></view>
			</view>
			<view class="box_img">
				<image :src="result_img" mode="" style="width:445rpx;height:445rpx;"></image>
			</view>
			<view class="tips_close">
				按任意地方查看该藏品
			</view>
		</view>
		<!-- //开盒动画之后的背景 结束 -->


		<!-- 返回按钮 -->
		<view class="zindex999" @click="back">
			<image src="../../../static/index/search/arrow_right.png" mode="widthFix"
				style="width: 48rpx;margin-left: 20rpx;margin-top: 50rpx;"></image>
		</view>
		<!-- 返回按钮 -->

		<!-- 光照效果 -->
		<div class="light" style="position: absolute;top: 0;right: 0;">
			<image src="../../../static/index/details/light.png" mode=""></image>
		</div>
		<!-- 光照效果 结束-->

		<!-- 盲盒图 -->
		<view class="goods">
			<image :src="img" mode="widthFix" style="width: 600rpx;"></image>
			<!-- <image src="../../../static/index/testimg.png" mode="widthFix" style="width: 600rpx;"></image> -->
		</view>
		<!-- 盲盒图 结束-->

		<!-- 台子 -->
		<view class="Table">
			<image src="@/static/index/details/table.png" mode="widthFix" style="width: 600rpx;"></image>
		</view>
		<!-- 台子 结束-->

		<!-- 名字 -->
		<view class="name">
			<view class="">
				<image src="@/static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
			<view class="">
				{{name}}
				<!-- 名称 -->
			</view>
			<view class="">
				<image src="@/static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 名字 结束-->

		<!-- 编号 -->
		<view class="num">
			<view class="">
				<image src="@/static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>

			</view>
			<view class="">
				获取时间{{time}}
			</view>
			<view class="">
				<image src="@/static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 编号 结束-->

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

		<!-- 藏品详情 -->
		<!-- 	<view class="information">
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
			<view class="donation" v-if="$store.state.is_send==1"
				@click="href('/pages/index/Details/passon/passon?id='+openid+'&goodsname='+name+'&img='+img+'&type=2')">
				<text>转赠</text>
			</view>
			<!-- 	<view class="openbox" @click="openbox">
				<text>开启</text>
			</view> -->
			<view class="openbox" @click="openbox">
				<view class="">
					<text>开启</text>
				</view>
				
			</view>
			<!-- @click="href('/pages/index/Details/passon/passon?id='+id+'&goodsname='+collection.name+'&img='+collection.img)" -->
			<view class="resale" @click="show_resale=true" v-if="$store.state.is_mark==1">
				<text>转售</text>
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
			<my-input :reserve="false" :ph="'请输入转售金额'" :type="'number'" :label="'元'" @input_content="changeMoney" :val="resale_money"></my-input>
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

	</view>
</template>

<script>
	import myInput from "@/components/my/input_sz.vue"
	export default {
		components: {
myInput
		},
		onLoad(e) {
			this.openid = e.openid
			this.id = e.id

			this.get_box_info()
		},
		data() {
			return {
				id: "", //藏品或者盲盒id
				name: "", //藏品或者盲盒详情
				img: "", //盲盒图片
				time: "", //盲盒获取时间
				showaction: false, //动画开启状态
				showaction_bcg: false, //动画背景状态
				openid: "", //开盲盒需要的id
				result_img: "", //开盲盒之后中奖的图片
				result_name: "", //开盲盒之后的名字
				content: "" ,//内容详情
				 //藏品或者盲盒详情
				show_resale:false, //是否显示转售弹框
				resale_money:"" //转售金额
			}
		},
		methods: {
			//提交转售
			resale(){
				this.$api.pop("提交中","loading")
				// type1藏品 2盲盒
				this.api.resale(this.resale_money,2,this.openid).then(res=>{
					if(res.code==1){
						this.$api.pop("转售成功")
						setTimeout(()=>{
							this.$api.totabar("/pages/market/market")
						},500)
						
					}
					console.log(res)
				})
			},
			changeMoney(e){
				this.resale_money=e
			},
			//开盲盒子
			openbox() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				this.api.open_box(this.openid).then(res => {
					if (res.code == 1) {
						this.result_img = res.data.cover
						this.result_name = res.data.name
						uni.hideToast()
						this.showaction = true
						setTimeout(() => {
							this.showaction = false
							this.showaction_bcg = true
						}, 2000)
					}
					console.log(res)
				})
			},
			//获取盲盒详情
			get_box_info() {
				this.api.box_info(this.id).then(res => {
					this.box_info = res.data
					this.name = res.data.box_name
					this.img = res.data.box_img
					this.time = res.data.create_at
					this.id = res.data.id
					this.content = this.$api.turnhtml(res.data.desc)
					console.log(res)
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
		/* padding-top: 50rpx; */
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




	.name {
		/* background: #6B61E7; */
		min-width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 30rpx auto;
		color: #000;
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
		background: #fff;
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
		background: #F0EFFD;
		display: flex;	
		box-sizing: border-box;
		padding: 0 92rpx;
		/* justify-content: space-between; */
		justify-content: space-around;
			}

	.btn>view {
		align-self: center;
		text-align: center;
		letter-spacing: 4rpx;
	}

	.openbox {
		width: 140rpx;
		height: 140rpx;
		/* background: rgba(13, 62, 54, .6); */
		/* background: rgba(13, 62, 54, .6); */
		border-radius: 50%;
		display: flex;
		justify-content: center;
		}

	.openbox>view {
		align-self:center;
		width: 108rpx;
		height: 108rpx;
		border-radius: 50%;
		line-height:108rpx;
		ttext-align: center;
		background: #6B61E7;
		color:#fff;
	
		font-weight:bold;
			}

	.openbox text:before {
		/* 		content: "";
		display: block;
		width: 76rpx;
		height: 88rpx;
		background: url("@/static/collection/details/share.png");
		background-size: 100% 100%;
		margin: 0 auto; */
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




	.action {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: url("@/static/openbox.gif");
		background-size: 100% 100%;
		z-index: 1000;
	}

	.action_bcg {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: url("@/static/openbox_bcg.gif");
		background-size: 100% 100%;
		z-index: 1000;
		box-sizing: border-box;
		padding-top: 200rpx;
	}

	.action_title {
		text-align: center;
		font-size: 60rpx;
		font-weight: bolder;

	}

	.tips_head {
		display: flex;
		justify-content: center;
		letter-spacing: 4rpx;
		margin-bottom: 20rpx;
		margin-top: 30rpx;
		font-size: 36rpx;
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

	.box_img {
		margin-top: 80rpx;
		text-align: center;
		transform-style: preserve-3d;
		/* transform:rotateX(-5deg) rotateY(0deg); */
		animation: rotate 15s linear infinite;
	}


	.tips_close {
		text-align: center;
		color: #999;
		font-size: 26rpx;
		margin-top: 60rpx;
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
	.resale_box{
		/* width: 540rpx; */
		/* padding: 0 10rpx; */
		background: #fff;
		border-radius: 20rpx;
	}
	.resale_title{
		text-align: center;
		margin: 65rpx auto;
	}
	.resale_btnbox{
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
	.resale_btnbox>view{
		width: 290rpx;
		height: 78rpx;
		border-radius: 36rpx;
		text-align: center;
		font-size: 36rpx;
		line-height: 78rpx;
	}
	
	.resale_btnbox>view:first-child{
		background: #E8E9EA;
		color: #6B61E7;
	}
	.resale_btnbox>view:last-child{
		background: #6B61E7;
		color: #fff;
	}
</style>
