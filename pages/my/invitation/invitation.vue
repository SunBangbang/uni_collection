<template>
	<view class="container index">
		<nav-Header>邀请好友</nav-Header>
		<!-- 邀请好友 头部 -->
		<view class="top" v-if="show">

			<view class="checked">
				<view class="">
					<image src="@/static/my/invitation/invitationfriend.png" mode=""
						style="width: 60rpx;height: 60rpx;"></image>
				</view>
				<view class="ifriend">
					邀请好友
				</view>
			</view>

			<view class="uncheck" @click="show=false">
				<view class="">
					<image src="@/static/my/invitation/myfriend.png" mode="" style="width: 60rpx;height: 60rpx;">
					</image>

				</view>
				<view class="myfriend">
					我的团队
				</view>
			</view>

		</view>
		<!-- 邀请好友头部 结束-->
		<!-- 我的好友 头部 -->
		<view class="top" v-else>

			<view class="uncheck" @click="show=true">
				<view class="">
					<image src="@/static/my/invitation/invitationfriend1.png" mode=""
						style="width: 60rpx;height: 60rpx;"></image>
				</view>
				<view class="ifriend">
					邀请好友
				</view>
			</view>

			<view class="checked">
				<view class="">
					<image src="@/static/my/invitation/myfriend1.png" mode="" style="width: 60rpx;height: 60rpx;">
					</image>

				</view>
				<view class="myfriend">
					我的好友
				</view>
			</view>

		</view>
		<!-- 我的好友头部 结束-->

		<!-- 邀请好友部分 -->

		<view class="" v-if="show">
			<!-- 中间 -->
			<view class="center_first">
				<view class="">
					<image :src="img ||'../../../static/index/starts.jpg'" mode="" style="width: 670rpx;height: 670rpx;">
					</image>
				</view>
				<view class="">
					Mo未来
				</view>
				<view class="">
					注册就送藏品
				</view>
				<view class="">
					来发现更多有趣好玩的数字藏品
				</view>
				<view class="code_content">
					
					<view class="">
						<view class="">
							扫码加入
						</view>
						<view class="">
							因喜欢而收藏
						</view>
					</view>
					
					<view class="" style="width: 200rpx;height: 200rpx;">
						<uqrcode ref="uQRCode" :text="link" style="transform: scale(.35);transform-origin:0rpx 250rpx;"/>
						<!-- <image src="../../../static/my/qrcode.png" mode="widthFix" style="width: 168rpx;"></image> -->
					</view>
				</view>
			</view>
			<!-- 中间 结束-->

			<!-- 底部 -->
			<view class="bottom">
				<view class="btn" @click="poster">
					生成海报
				</view>
			</view>
			<!-- 底部 结束-->
		</view>
		<!-- 邀请好友部分 结束-->

		<!-- 我的好友部分 -->

		<view class="" v-else>
			<!-- 中间 -->
			<view class="center">
				<view class="item" v-for="(item,index) in team_list" :key="index">
					<view class="">
						<image :src="item.headimg" mode=""
							style="width: 76rpx;height: 76rpx;border-radius: 50%;"></image>
					</view>
					<view class="">
						<view class="">
							{{item.nickname}}
						</view>
						<view class="">
							{{item.phone}}
						</view>
					</view>
					<view class="">
						<view class="">
							{{item.is_cert==1?'已认证':'未认证'}}
						</view>
						<view class="">
							{{item.create_at}}
						</view>
					</view>
				</view>
				<view class="" v-if="team_list<=0">
					您还没有好友哦！
				</view>
				

			</view>
			<!-- 中间 结束-->

			


		</view>
		<!-- 我的好友部分 结束-->



	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	import uqrcode from "@/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue"
	export default {
		components: {
			navHeader,
			uqrcode
		},
		data() {
			return {
				link: "https://www.baidu.com",
				show: true,  //切换页面状态
				team_list:[],
				link:"",
				img:""
			}
		},
		onLoad(e) {
			//获取其他路径过来的图片
			this.img=e.img
			//获取团队列表
			this.get_team()
			this.link='https://h5.mo.cn/white/#/pages/login/register?code='+uni.getStorageSync("user_info").invite_code
			console.log(this.link)
		},
		methods:{
			poster(){
				  let platform=uni.getSystemInfoSync().platform
				    if(platform=='ios'){
						this.$api.pop("请长按电源键 + 音量上键")
				          console.log('我是iOS')
				    }else if(platform=='android'){
						this.$api.pop("请长按电源键 + 音量下键")
				          console.log('我是安卓')
				    }
			},
			get_team(){
				this.api.team().then(res=>{
					this.team_list=res.data.data
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.index {

		box-sizing: border-box;
		padding-top: 100rpx;
		padding-bottom:300rpx;
	}

	.top {
		display: flex;
		width: 710rpx;
		justify-content: space-between;
		margin: 24rpx auto;
	}

	.checked {
		background: #6B61E7 !important;
		color: #fff !important;
	}

	.uncheck {
		background: transparent !important;
		color: #999 !important;
	}

	.top>view {

		width: 344rpx;
		height: 80rpx;
		border-radius: 16rpx;
		display: flex;
		justify-content: center;
	}

	.top>view:last-child {
		background: transparent;

	}

	.top image {
		display: block;
	}

	.top>view>view {
		align-self: center;
		margin-right: 16rpx;
	}

	.center {
		width: 710rpx;
		height: 1084rpx;
		background: #fff;
		border-radius: 20rpx;
		margin: 0 auto;
		text-align: left;
		/* background: #FA4485; */
		box-sizing: border-box;

	}

	.center_first {
		width: 710rpx;
		/* height: 1084rpx; */
		background: #fff;
		border-radius: 20rpx;
		margin: 0 auto;
		text-align: left;
		/* background: #FA4485; */
		box-sizing: border-box;
		padding-top: 50rpx;
		padding-bottom: 50rpx;

	}

	.center_first>view:first-child {
		text-align: center;
	}

	.center_first>view:nth-child(2) {
		margin-left: 20rpx;
		font-size: 54rpx;
		margin-top: 30rpx;
	}

	.center_first>view:nth-child(3) {
		margin-left: 20rpx;
		font-size: 54rpx;
		margin-top: 20rpx;
	}

	.center_first>view:nth-child(4) {
		color: #999999;
		margin-left: 20rpx;
		font-size: 36rpx;
		margin-top: 20rpx;
	}

	.btn {
		width: 550rpx;
		height: 88rpx;
		background: #6B61E7;
		border-radius: 40rpx;
		margin: 6rpx auto;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
	}

	.bottom {
		width: 750rpx;
		height: 128rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
	}

	.bottom>view {
		align-self: center;
	}

	.item {
		width: 100%;
		height: 140rpx;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		padding: 30rpx;
		
	}

	.item image {
		display: block;
	}

	.item>view {
		align-self: center;
	}

	.item>view:nth-child(2) {
		margin-left: 20rpx;
		text-align: left;
	}

	.item>view:nth-child(2)>view:first-child {
		font-size: 28rpx;
		color: #6B61E7;
	}

	.item>view:nth-child(2)>view:last-child {
		font-size: 20rpx;
		color: #D5D5D5;
		margin-top: 2rpx;
	}

	.item>view:nth-child(3) {
		margin-left: auto;
		text-align: right;
	}

	.item>view:nth-child(3)>view:first-child {
		color: #6B61E7;
		font-size: 24rpx;
	}

	.item>view:nth-child(3)>view:last-child {
		color: #999;
		font-size: 20rpx;
		margin-top: 4rpx;
	}
	.code_content{
		margin-top: 60rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		color: #6B61E7;
		justify-content: space-between;
	}
	.code_content>view{
		font-size: 42rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.code_content>view>view:last-child{
		color: #999;
		font-size: 30rpx;
		/* margin-top: 40rpx; */
	}
</style>
