<template>
	<view class="index container">
		<!-- 首页顶部 -->
		<!-- 顶部切换 -->
		<view class="head_bar">
			<view class="" v-for="(item,index) in bar_list" :key="index" :class="index==i?'systemColor':''"
				@click="i=index">
				{{item.name}}
			</view>
		</view>
		<!-- 顶部切换 结束-->
		<!-- 授权弹框 -->
			<!-- 		<view class="magnifierbox" @click="href('/pages/index/search/search')">
			<image src="../../static/index/magnifier.png" mode="widthFix" style="width: 48rpx;"></image>
		</view> -->
			<!-- 授权弹框 隐藏-->
		
		<!-- 首页顶部 结束-->

		<!-- 轮播图 -->
		<view class="banner" v-if="i==0">
			<u-swiper :list="banner_list" :keyName="'img'" :bgColor="'#111111'"></u-swiper>
		</view>
		<!-- 轮播图 结束-->



		<!-- 通知栏 -->
		<view class="noticebar" v-if="i==0">
			<view class="systemBcg">
				<image src="../../static/index/noticebar-icon.png" mode="heightFix"
					style="height: 28rpx;display: block;align-self: center;"></image>
			</view>

			<view class="notice_text">
				 <u-notice-bar :color="'#000'" :text="notice_new" :icon="''" @click="href('/pages/news/details/details?id='+news_id)"></u-notice-bar>
			</view>
		</view>
		<!-- 通知栏 结束-->
		<!-- 藏品列表 -->
		<view class="list_content" v-if="i==0 || i==1">

			<view class="list" v-for="(item,index) in recommend" :key="index"
				@click="href('/pages/index/Details/Details?id='+item.id)">

				<view class="img">
					<view class="status systemColor">
						<view>{{item.status}}</view>
						<u-count-down :time="item.time*1000" format="HH:mm:ss" v-if="item.status=='待发售'"></u-count-down>
					</view>
				
					<image :src="item.cover || '@/static/index/testimg.png'" mode=""
						style="width: 670rpx;height: 670rpx;"></image>
				</view>

				<view class="list_title">
					{{item.title}}
				</view>

			
				<view class="num_box">
					<view class="num">
						<view class="systemBcg colorBlack">
							限量
						</view>
						<view class="systemColor">
							{{item.num}}份
						</view>
					</view>
					
					<view class="num">
						<view class="systemBcg colorBlack">
							剩余
						</view>
						<view class="systemColor">
							{{item.sell_num}}份
						</view>
					</view>
				</view>

				<view class="price systemColor">
					<view class="">
						<image :src="item.writer_img || '../../static/index/headimg.png'" mode=""
							style="width: 44rpx;height: 44rpx;border-radius: 50%;"></image>
						<view class="">
							{{item.writer}}
						</view>
					</view>
					<view class="">
						￥{{item.price}}
					</view>
				</view>

			</view>

		</view>
		<!-- 藏品列表 结束-->
		<!-- 盲盒列表 -->
		<view class="boxList" v-if="i==2">

			<view class="boxItem" v-for="(item,index) in box_list" :key="index" @click="href('/pages/index/boxDetails/boxDetails?id='+item.id)">
				<view class="">
					<view class="">
						<image :src="item.img" mode="" style="height: 640rpx;width: 706rpx;border-radius: 20rpx;"></image>
					</view>
					<view class="">
						<view class="">
							{{item.title}}
						</view>
						<view class="num systemBcg colorBlack">
							<!-- x{{item.num}} -->
							<view class="">
								限量
							</view>
							<view class="systemColor">
								{{item.num}}份
							</view>
						</view>
						<view class="">
							抢购时间：{{item.time_start}}-{{item.time_end}}
						</view>
						<view class="box_price systemColor">
							<text style="font-size: 36rpx;">￥</text>{{item.price}}
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 盲盒列表 结束-->


	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				banner_list: [],  //banner图
				bar_list: [{
						name: "热门推荐"
					},
					{
						name: "发售日历"
					},
					{
						name: "盲盒专区"
					}
				],
				recommend: [], //推荐列表  
				new_list: [], //最新发布列表
				box_list: [], //盲盒专区
				i: 0, //头部导航索引
				pages: 0, //热门推荐数量
				ms:0,  //即将开售时间倒计时
				notice_new:"",  //滚动最新公告
				news_id:""
			}
		},
		watch: {
			i(val) {
				uni.showToast({
					title:"加载中",
					icon:"loading"
				})
				console.log(val)
			this.init()
				if (val == 0) {
					this.get_recommend_list()
				} else if (val == 1) {
					this.get_new_list()
				} else if (val == 2) {
					this.get_box_list()
				}
			}
		},
		onShow() {
			
			this.get_notcie()
			this.get_recommend_list()
			this.get_banner()
		},
		onHide() {
			this.i=0
			this.init()
		},
		onReachBottom() {
			uni.showToast({
				title:"加载中",
				icon:"loading"
			})
			if (this.i == 0) {
				this.get_recommend_list()
			} else if (this.i  == 1) {
				this.get_new_list()
			} else if (this.i  == 2) {
				this.get_box_list()
			}
			console.log(1)
		},
		// onLoad() {
		// 	//获取最新公告
		// 	this.get_notcie()
		// 	this.get_recommend_list()
		// 	this.get_banner()
		// },
		methods: {
			init(){
			//初始化
			this.recommend=[]
			this.new_list=[]
			this.box_list=[]
			this.pages = 0
			},
			get_notcie(){
				this.api.get_notice().then(res=>{
					this.notice_new=res.data.name
					this.news_id=res.data.id
					console.log(res.data.name)
				})
			},
			get_banner(){
				this.api.banner().then(res=>{
					this.banner_list=res.data
					// this.banner_list.push(ele.img)
					// console.log(res)
				})
			},
			//获取推荐列表
			get_recommend_list() {
				this.api.popular(30, ++this.pages).then(res => {
					if(res.code==1){
						res.data.data.forEach(ele => {
							this.recommend.push({
								id: ele.id,
								img: ele.img,
								status: ele.sell_status == 1 ? '售卖中' : '待发售', //1.售卖中 2.待开始
								writer: ele.user.nickname,
								writer_img: ele.user.headimg,
								price: ele.price,
								num: ele.num,
								title: ele.name,
								cover:ele.cover,
								time:parseInt(ele.sell_at - (new Date().getTime()/1000)),
								sell_num:ele.sell_num
							})
						})
						uni.hideToast()
					}
					
				})
			},
			//获取最新发布列表
			get_new_list() {
				this.api.new_list(30, ++this.pages).then(res => {
					if(res.code==1){
						res.data.data.forEach(ele => {
							this.recommend.push({
								id: ele.id,
								img: ele.img,
								status: ele.sell_status == 1 ? '售卖中' : '待发售', //1.售卖中 2.待开始
								writer: ele.user.nickname,
								writer_img: ele.user.headimg,
								price: ele.price,
								num: ele.num,
								title: ele.name,
								cover:ele.cover,
								time:parseInt(ele.sell_at - (new Date().getTime()/1000)),
								sell_num:ele.sell_num
							})
						})
						uni.hideToast()
					}
					
				})
			},
			//获取盲盒列表
			get_box_list() {
				
				this.api.box_list(30, ++this.pages).then(res => {
					if(res.code==1){
						res.data.data.forEach(ele => {
							this.box_list.push({
								id: ele.id,
								img: ele.box_img,
								price: ele.price,
								num: ele.num,
								title: ele.box_name,
								time_start:ele.time_start,
								time_end:ele.time_end
							})
						})
						uni.hideToast()
					}
					
				})
			},

		}
	}
</script>

<style scoped>
	.head_bar {
		display: flex;
		height: 126rpx;
		width: 100%;
		line-height: 146rpx;
		color: #9F9F9F;
		font-size: 36rpx;
		font-weight: 400;
		/* background: #fff; */
	}

	.head_bar>view {
		margin-left: 56rpx;
	}

	.head_bar>view:first-child {
		margin-left: 20rpx;
	}

	/* 	.head_bar>view:last-child{
		margin-left: auto;
		margin-right: 20rpx;
		align-self: center;
	} */
	.banner {
		height: 288rpx;
		width: 710rpx;
		/* background: #FFFFFF; */
		margin: 0 auto;
	}

	.checked_text {
		font-size: 52rpx;
		color: #000;
	}

	.magnifierbox {
		display: flex;
	}

	.magnifierbox>image {
		display: block;
		align-self: center;
	}

	.noticebar {
		width: 710rpx;
		height: 80rpx;
		/* background: #19191B; */
		background: #e5e5e5;
		border-radius: 4rpx;
		margin: 24rpx auto;
		font-size: 28rpx;
		display: flex;
		line-height: 80rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		text-align: center;
	}

	.noticebar>view:first-child {
		width: 80rpx;
		height: 44rpx;
		/* background: #6B61E7; */
		border-radius: 10rpx;
		display: flex;
	}

	.noticebar image {
		display: block;
		align-self: center;
		margin-left: 16rpx;
	}

	.noticebar>view {
		align-self: center;
		letter-spacing: 2rpx;
	}

	.notice_text {
		margin-left: 28rpx;
		color: #999999;
	}

	.list_content {
		width: 710rpx;
		margin: 24rpx auto;
	}

	.list {
		height: 972rpx;
		width: 710rpx;
		/* width: 100%; */
		background: #fff;
		border-radius: 10rpx;

		box-sizing: border-box;
		padding: 20rpx;
		margin: 28rpx auto;
	}

	.img {
		position: relative;
	}

	.status {
		/* width: 124rpx; */
		height: 50rpx;
		/* background: rgba(0, 0, 0, .6); */
		background:#E8E9EA;
		border-radius: 40rpx;
		position: absolute;
		left: 10rpx;
		top: 10rpx;
		z-index: 1;
		letter-spacing: 4rpx;
		font-size: 24rpx;
		line-height: 50rpx;
		text-align: center;
		display: flex;
		padding: 0 20rpx;
	}

	.list_title {
		margin-top: 52rpx;
		letter-spacing: 4rpx;
		color: #999999;
	}
.num_box{
	display: flex;
	justify-content: space-between;
}
	.num {
		margin-top: 20rpx;
		width: 200rpx;
		height: 40rpx;
		/* background: #6B61E7; */
		display: flex;
		font-size: 26rpx;
		text-align: center;
		line-height: 46rpx;
	}

	.num>view:first-child {
		/* background: #6B61E7; */
		flex: 1;
		/* color: #181532; */
	}

	.num>view:last-child {
		background:#F0EFFD;
		flex: 1;
		/* color: #F0EFFD; */
	}

	.price {
		width: 100%;
		margin-top: 44rpx;
		display: flex;
		justify-content: space-between;
	}

	.price>view {
		align-self: center;
	}

	.price>view:first-child {
		font-size: 26rpx;
		/* color: rgba(255, 255, 255, 0.6); */
		font-weight: 400;
		display: flex;
	}

	.price>view>view {
		align-self: center;
		margin-left: 10rpx;
	}

	.price>view:last-child {
		font-size: 46rpx;
		/* color: #6B61E7; */
		font-weight: 500;
	}

	.price image {
		display: block;

	}

	.boxList {
		margin: 44rpx auto;
	}

	.boxItem {
		width: 710rpx;
		height: 910rpx;
		/* background: linear-gradient(134deg, #FFFFFF 0%, #2B2B2B 100%); */
		border-radius: 24rpx;
		margin: 0 auto 28rpx auto;
		display: flex;
		justify-content: flex-end;
		background: #fff;
	}

	.boxItem>view {
		align-self: center;
		width: 706rpx;
		height: 902rpx;
		/* background: #1c1c1e; */
		border-radius: 24rpx;
	}

	.boxItem>view {
		display: flex;
		flex-direction: column;
	}

	.boxItem>view>view:last-child {
		box-sizing: border-box;
		padding-left: 30rpx;
		padding-top: 22rpx;
		width: 100%;
	}

	.boxItem>view>view>view:first-child {
		font-size: 32rpx;
		color: #6B61E7;
		font-weight: bold;
	}

/* 	.boxItem>view>view>view:nth-child(2) {
		width: 64rpx;
		height: 44rpx;
		background: #000;
		text-align: center;
		line-height: 44rpx;
		font-size: 24rpx;
		font-weight: 400;
		border: 1px solid #FFFFFF;
		margin-top: 24rpx;
	} */

	.boxItem>view>view>view:nth-child(3) {
		letter-spacing: 2rpx;
		font-size: 24rpx;
		margin-top: 22rpx;
	}
	.box_price{
		width: 100%;
		text-align: right;
		/* color: #6B61E7; */
		box-sizing: border-box;
		padding-right: 30rpx;
		font-size: 50rpx;
	}
</style>
