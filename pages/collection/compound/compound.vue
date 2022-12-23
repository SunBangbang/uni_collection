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
		<!--藏品限量 -->
		<!-- 	<view class="goods_num">
			<view class="num_first">
				限量
			</view>
			<view class="num_last">
				10份
			</view>
		</view> -->
		<!-- 藏品限量 结束-->
		<!--合成数量限量 -->
		<view class="num_box">
			<view class="">
				<view class="">
					限量
				</view>
				<view class="">
					{{details.num}}
				</view>
			</view>
			<view class="">
				<view class="">
					剩余
				</view>
				<view class="">
					{{details.sell_num}}
				</view>
			</view>
		</view>
		<!-- 合成数量限量 结束-->




		<!-- 名字 -->
		<view class="name">
			<view class="">
				<image src="../../../static/index/details/left.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
			<view class="">
				{{details.name}}
				<!-- 名称 -->
			</view>
			<view class="">
				<image src="../../../static/index/details/right.png" mode="widthFix" style="width: 72rpx;"></image>
			</view>
		</view>
		<!-- 名字 结束-->

		<!-- 获取时间 -->
		<view class="time">
			<!-- 2022-04-02至2022-06-02 -->
			{{details.sell_at.time_}}至{{details.collect_time}}
		</view>
		<!-- 获取时间 结束-->

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

		<!-- 合成材料 -->
		<view class="information">
			<view class="title colorWhite">
				合成材料
			</view>
			<view class="compound_box">
				<!-- 合成需要的卡片 -->
				<view v-for="(item,index) in need_list" :key="index">
					<view class="img_box">
						<view class="" :class="item.bcg_black==0?'bcg_black':''">
							<image :src="item.img" mode="" style="width: 284rpx;height: 284rpx;"></image>
						</view>
						<view class="img_num">
							x{{item.num}}
						</view>
					</view>
					<view class="img_name">
						{{item.name}}
					</view>
				</view>
				<!-- 合成需要的卡片 结束-->
			</view>
		</view>
		<!-- 合成材料 结束-->

		<!-- 合成攻略 -->
		<view class="information">
			<view class="title colorWhite">
				合成攻略
			</view>
			<view class="img" v-html="details.content">
				<!-- <image src="../../../static/index/testimg.png" mode="" style="width: 670rpx;height: 680rpx;"></image> -->
			</view>
		</view>
		<!-- 合成攻略 结束-->


		<!-- 上半部分 结束-->

		<!-- 底部按钮 -->
		<view class="btn">
			<!-- 不可合成按钮 -->
			<!-- <view class="compound" v-if="details.sell_status==1"> -->
			<view class="uncompound" v-if="details.is_he!=1">
				<view class="">
					*合成材料不足，无法进行合成操作
				</view>
				<view class="">
					立即合成
				</view>
			</view>
			<!-- 不可合成按钮 -->
			<!-- 合成按钮 -->
			<!-- <view class="compound" v-if="details.sell_status==1"> -->
			<view class="compound" v-else>
				<view class="" @click="compound">
					立即合成
				</view>
			</view>
			<!-- 合成按钮 -->
		</view>
		<!-- 底部按钮 结束-->


		<!-- //合成弹框动画 -->
		<!-- //开盒子动画 -->
		<view class="action" v-show="showaction">

		</view>
		<!-- //合成动画 -->
		<!-- //合成动画之后的背景 -->
		<view class="action_bcg  colorBlack" @click="totabar('/pages/collection/collection')" v-if="showaction_bcg">
			<view class="action_title">
				恭喜获得
			</view>
			<view class="tips_head">
				<view class="line_left"></view>
				<!-- <view class="">{{result_name}}</view> -->
				<view class="">{{details.name}}</view>
				<view class="line_right"></view>
			</view>
			<view class="box_img">
				<!-- <image :src="result_img" mode="" style="width:445rpx;height:445rpx;"></image> -->
				<image :src="details.img" mode="" style="width:445rpx;height:445rpx;">
				</image>
			</view>
			<view class="tips_close">
				按任意地方查看该藏品
			</view>
		</view>
		<!-- //合成动画之后的背景 结束 -->
		<!-- //合成弹框动画 结束 -->

		<!-- 输入交易密码弹出 -->
		<!-- 	<u-popup :show="show" @close="show=false" @open="open" mode="center" :closeable="true" >
		            <view class="pop_">
		                <text>出淤泥而不染，濯清涟而不妖</text>
		            </view>
				</u-popup> -->
		<view class="pop_down" v-if="show">
			<view class="pop_content">
				<view class="">
					<image src="@/static/index/details/close.png" mode="widthFix" style="width: 80rpx;"
						@click="show=false"></image>
				</view>
				<view class="">
					验证支付密码
				</view>
				<view class="">
					请验证支付密码确认本人操作
				</view>
				<view class="">
					<u-code-input v-model="password" :maxlength="6" :focus="true" @finish="finished"></u-code-input>
				</view>
			</view>
		</view>
		<!-- 输入交易密码弹出 结束-->

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				id: "", //id
				details: {
					sell_at: {
						time_: "" //默认值
					}
				}, //详情
				showaction_bcg: false, //是否显示动画背景
				showaction: false, //是否显示动画
				need_list: [], //需要材料的列表
				// 合成需要的支付密码
				password: "",
				show: false
			}
		},
		onLoad(e) {

			this.id = e.id
			this.get_collection_info()

		},
		methods: {
			finished() {
				this.show = false
				this.api.compound(this.id, this.password).then(res => {
					this.password = ""
					if (res.code == 1) {
						this.showaction = true
						setTimeout(() => {
							this.showaction = false
							this.showaction_bcg = true
						}, 2000)
					}
				})


			},
			//倒计时事件
			finish() {
				this.get_collection_info()
			},
			get_collection_info() {
				//模拟数据 以便数据接口失效可以展示样式
				// this.details.type = 1
				// this.details.img = require("@/static/test.png")
				//模拟数据 以便数据接口失效可以展示样式
				this.api.compound_details(this.id).then(res => {
					console.log(res)
					this.details = res.data
					res.data.collect_ids.forEach(ele => {
						this.need_list.push({
							img: ele.img,
							name: ele.name,
							num: ele.num,
							bcg_black: ele.gou
						})
					})
				})
			},
			showImg() {

			},
			close() {

			},
			//合成
			compound() {
				// 打开支付密码弹出框
				this.show = true
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
		background: #6B61E7;
		flex: 1;
		color: #181532;
		float: left;
		width: 50%;
	}

	.num_last {
		min-width: 50%;
		background: rgba(48, 213, 200, 0.2);
		flex: 1;
		color: #6B61E7;
		float: right;
	}

	.name {
		/* background: #6B61E7; */
		width: 340rpx;
		display: flex;
		justify-content: space-between;
		margin: 60rpx auto 30rpx auto;
		color: #000;
		font-size: 40rpx;

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
		margin: 0 auto 26rpx auto;
	}

	.compound_box {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		text-align: center;
	}

	.compound_box>view {
		width: 282rpx;
		/* background: #007AFF; */
		margin-bottom: 60rpx;
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
		background: rgba(0, 0, 0, .6);
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;

	}

	.compound {
		width: 710rpx;
		height: 84rpx;
		/* background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%); */
		background: #6B61E7;
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		line-height: 84rpx;
		color: #fff;
		font-size: 34rpx;
		letter-spacing: 4rpx;
		text-align: center;
		display: flex;
		align-self: center;
	}

	.compound>view {
		align-self: center;
		width: 704rpx;
		height: 80rpx;
		background: #6B61E7;
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		font-size: 36rpx;
	}

	.uncompound>view:first-child {
		font-size: 28rpx;
		color: #E37656;
	}

	.uncompound>view:last-child {
		width: 710rpx;
		height: 84rpx;
		border-radius: 164rpx;
		background: #333;
		text-align: center;
		line-height: 84rpx;
		color: #999;
		font-size: 36rpx;
	}

	.soldout {
		width: 240rpx;
		height: 84rpx;
		background: #fff;
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		line-height: 84rpx;
		color: #999999;
		font-size: 36rpx;
		letter-spacing: 4rpx;
	}

	.soon {
		width: 240rpx;
		height: 84rpx;
		background: #fff;
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
		/* line-height: 84rpx; */
		color: #fff;
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

	.num_box {
		width: 100%;
		height: 200rpx;
		display: flex;
		font-size: 24rpx;
		justify-content: center;
		margin-top: 40rpx;
		margin-bottom: 70rpx;
	}

	.num_box>view:first-child {

		margin-right: 20rpx;
		display: flex;
		justify-content: space-around;
	}

	.num_box>view {
		height: 44rpx;
		line-height: 44rpx;
		border-radius: 4rpx;
		border: 1px solid #000;
		padding: 0 4rpx;
		/* background: #000; */
		
background: #F0EFFD;
		display: flex;
		text-align: center;
		min-width: 152rpx;

	}

	.num_box>view:first-child>view:first-child {
		background: #555555;
		color: #EAC6A3;
		min-width: 72rpx;
	}

	.num_box>view:first-child>view:last-child {
		min-width: 60rpx;
	}

	.num_box>view:last-child {
		display: flex;
		justify-content: center;
	}

	.time {
		font-size: 24rpx;
		text-align: center;
		margin: 20rpx auto;
	}

	.img_box {
		position: relative;
	}

	.img_num {
		position: absolute;
		/* width: 64rpx; */
		padding: 0 20rpx;
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
		background: #EAC6A3;
		border: 1px solid #FFFFFF;
		border-radius: 48rpx;
		right: 0;
		top: -18rpx;
		color: #000000;
		transform: translateX(50%);
		font-size: 24rpx;
	}

	.img_name {
		margin-top: 14rpx;
		font-size: 28rpx;
		font-weight: 400;
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

	.bcg_black {
		opacity: .5;
	}
</style>
