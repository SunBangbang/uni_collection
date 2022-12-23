<template>
	<view class="container_h100 anchorDetails">
		<!-- 上半部分 -->
		<view class="top">

			<!-- 返回按钮 -->
			<view class="" @click="back">
				<image src="../../../static/index/anchotInfo/arrow_back.png" mode="widthFix" style="width: 48rpx;">
				</image>
			</view>
			<!-- 返回按钮 -->
			<!-- 头像部分 -->
			<view class="headimg_box">
				<view class="headimg">
					<image src="../../../static/index/anchotInfo/online.png" mode="widthFix" style="width: 28rpx;"
						class="online"></image>
					<image src="../../../static/index/headimg.png" mode="widthFix"
						style="width: 200rpx;border-radius: 50%;"></image>
				</view>
				<view class="">
					<image src="../../../static/index/love.png" mode="widthFix" style="width: 64rpx;"></image>
				</view>
			</view>
			<!-- 头像部分 结束-->
			<!-- 主播信息 -->
			<view class="anchorDetails_info ">
				<view class="">
					小太阳
				</view>
				<view class="">
					TA很懒什么都没有留下
				</view>
				<view class="">
					<text>23岁</text>
					<text>2岁</text>
					<text>郑州市</text>
				</view>
			</view>
			<!-- 主播信息 结束-->


		</view>
		<!-- 上半部分 结束-->

		<!-- 下半部分 -->
		<view class="bottom">
			<!-- ta的相册 -->
			<view class="album">
				<view class="album_head">
					<view class="">
						TA的相册
					</view>
					<view class="">
						查看全部 <image src="../../../static/index/anchotInfo/arrow_right.png" mode="widthFix"
							style="width: 44rpx;"></image>
					</view>
				</view>
				<view class="myalbum" @click="showImg">
					<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view>
					<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view>
					<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view>
				</view>
			</view>
			<!-- ta的相册 结束-->
			
			<!-- ta的相册 -->
			<view class="album">
				<view class="album_head">
					<view class="">
						TA的视频
					</view>
					<view class="">
						<!-- 查看全部 <image src="../../../static/index/anchotInfo/arrow_right.png" mode="widthFix"
							style="width: 44rpx;"></image> -->
					</view>
				</view>
				<view class="myalbum">
					<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view>
				<!-- 	<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view>
					<view class="">
						<image src="../../../static/index/headimg.png" mode="widthFix" style="width: 210rpx;"></image>
					</view> -->
				</view>
			</view>
			<!-- ta的相册 结束-->
			
			<!-- 联系方式 -->
			<view class="btn" @click="showRecharge=true">
				联系方式
			</view>
			<!-- 联系方式 结束-->
			
			
		</view>
		<!-- 下半部分 结束-->

		<!-- 弹框 -->
		<pop-contact v-if="showRecharge" @close="showRecharge=false"></pop-contact>
		<!-- 弹框 结束-->
		<!-- 图片弹框 -->
		<pop-img :img="current_img" v-if="current_img!=''" @close_img="close()"></pop-img>
		<!-- 图片弹框 结束-->



	</view>
</template>

<script>
	import popContact from "./pop/contactPop.vue"
	import popImg from "@/components/my/img_pop.vue"
	export default {
		components:{
			popContact,popImg
		},
		data() {
			return {
				anchorInfo: {},
				showRecharge:false,
				current_img:""
			}
		},
		methods:{
			showImg(){
				this.current_img="../../../static/index/headimg.png"
			},
			close() {
				this.current_img=""
			}
		}
	}
</script>

<style scoped>
	.top {
		height: 950rpx;
		width: 750rpx;
		background: url(@/static/index/anchotInfo/headBcg.png);
		background-size: 100% 100%;
		box-sizing: border-box;
		padding-top: 50rpx;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.headimg_box {
		margin-top: 320rpx;
		display: flex;
		box-sizing: border-box;
		padding-right: 20rpx;
		justify-content: space-between;
	}

	.headimg_box>view:last-child {
		align-self: flex-end;
	}

	.headimg {
		position: relative;
	}

	.online {
		position: absolute;
		bottom: 2rpx;
		right: 32rpx;
		z-index: 1;
	}

	.anchorDetails_info {
		width: 710rpx;
		height: 244rpx;
		background: rgba(0, 0, 0, .4);
		margin-top: auto;
		color: #fff;
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-top: 30rpx;
	}

	.anchorDetails_info>view:first-child {
		font-size: 36rpx;
		font-weight: 400;
	}

	.anchorDetails_info>view:nth-child(2) {
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 30rpx;
	}

	.anchorDetails_info>view:nth-child(3) {
		font-size: 28rpx;
		font-weight: 400;
		margin-top: 26rpx;
	}

	.anchorDetails_info>view:nth-child(3)>text {
		padding: 2rpx 14rpx;
		border: 1px solid #f5f5f5;
		margin-right: 12rpx;
	}

	.bottom {
		width: 710rpx;
		margin: 24rpx auto;
	}

	.album {
		width: 100%;
		height: 332rpx;
		background: #fff;
		border-radius: 20rpx;
	}
.album:last-of-type{
		margin-top: 24rpx;
	}
	.album_head {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 24rpx 26rpx 24rpx 20rpx;
	}

	.album_head>view:first-child {
		font-size: 32rpx;
		font-weight: 600;
	}

	.album_head>view:last-child {
		font-size: 24rpx;
		font-weight: 400;
		color: #666666;
		line-height: 45rpx;
		display: flex;
	}

	.album_head image {
		display: block;
	}
	.myalbum{
		display: flex;
		justify-content: space-around;
	}
	.btn{
		width: 100%;
		height: 88rpx;
		background: #FFB837;
		border-radius: 82rpx;
		text-align: center;
		line-height: 88rpx;
		color: #000;
		font-size: 32rpx;
		font-weight: 400;
		margin-bottom: 100rpx;
	}
</style>
