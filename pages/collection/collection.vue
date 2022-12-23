<template>
	<view class="container index">
		<nav-header :showback='false' :rightIcon="false" :rightText="'合成记录'" :showright="true" @rightClick="rightClick">藏馆</nav-header>
		<!-- 顶部切换 -->
		<view class="head_bar">
			<view class="" v-for="(item,index) in bar_list" :key="index" :class="index==i?'systemColor':''"
				@click="i=index">
				{{item.name}}
			</view>
		</view>
		<!-- 顶部切换 结束-->

		<!-- 盲盒和藏品 -->
		<view class="content">
			<!-- 数据列表-->
			<view class="item" v-for="(item,index) in collection_list" :key="index" @click="goinfo(item)">
				<view class="">
					<image :src="item.img" mode="" style="width: 345rpx;height: 345rpx;"></image>
				</view>
				<view class="">
					{{item.title}}
				</view>
				<!-- 因为盲盒和合成没有编号 所以用type判断 -->
				<view class="no" v-if="item.type==1">
					<view class="">
						<image src="@/static/collection/icon_no.png" mode="" style="width: 64rpx;height: 64rpx;">
						</image>
					</view>
					<view class="">
						{{item.no}}
					</view>
				</view>
				<!-- 因为盲盒和合成没有编号 所以用type判断 -->
				<!-- 以下全是合成需要展示的数据 -->
				<view class="" v-if="item.type==3">
					<view class="num_box">
						<view class="">
							<view class="">
								限量
							</view>
							<view class="">
								{{item.num1}}
							</view>
						</view>
						<view class="">
							<view class="">
								剩余
							</view>
							<view class="">
								{{item.num2}}
							</view>
						</view>
					</view>
					<view class="time">
						{{item.time1}}
					</view>
					<view class="time">
						{{item.time2}}
					</view>
				</view>
				<!-- 以下全是合成需要展示的数据 结束-->



			</view>
		</view>
		<!-- 数据列表 结束-->


	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		data() {
			return {
				page: 0, //页数
				collection_list: [], //列表
				bar_list: [{
						name: "我的藏品"
					},
					{
						name: "我的盲盒"
					},
					{
						name: "我的合成"
					}
					// {
					// 	name: "藏管"
					// }
				],
				i: 0
			}
		},
		// onLoad() {
		// 	this.get_my_collection()
		// },
		onReachBottom() {
			this.getmore()
			console.log(1)
		},
		onShow() {
			this.init()
			this.i = 0
			this.get_my_collection()
		},
		onHide() {
			this.init()
			this.i = 0
		},
		// onLoad() {
		// 	this.page = 0
		// 	this.collection_list = []
		// 	this.get_my_collection()
		// 	this.i = 0
		// },
		watch: {

			//当头部导航变化时执行
			i(val) {
				this.init()
				//我的藏品
				if (val == 0) {
					this.get_my_collection()
					//我的盲盒
				} else if (val == 1) {
					this.get_my_box()
					//我的合成
				} else if (val == 2) {
					this.getcompound()
				}

			}
		},
		methods: {
			//分页
			getmore() {
				if (this.i == 0) {
					this.get_my_collection()
					//我的盲盒
				} else if (this.i == 1) {
					this.get_my_box()
				}
			},

			//判断点击的是盲盒黑还是藏品 1藏品 2盲盒
			goinfo(item) {
				if (item.type == 1) {
					this.$api.to('/pages/collection/collectionDetails/collectionDetails?pass=1&id=' + item.id)
				} else if (item.type == 2) {
					this.$api.to('/pages/collection/box_info/box_info?id=' + item.id + "&openid=" + item.openid)
				} else if(item.type==3){
					this.$api.to('/pages/collection/compound/compound?id='+item.id)
				}
			},
			init() {
				// 初始化 数据数组为空  页面0
				this.collection_list = []
				this.page = 0
			},
			rightClick(){
				this.$api.to("/pages/collection/compound_history/compound_history")
				console.log("合成记录")
			},
			//获取合成数据
			getcompound() {
				//模拟数据 防止后端挂了 前端看不到样式调试
			// this.collection_list.push({
			// 	title: "测试",
			// 	id: "测试",
			// 	img: require("@/static/test.png"),
			// 	no: "",
			// 	type:3,
			// 	time:"2020-10-10至2021-10-1",
			// 	num1:"100",  //限量数量
			// 	num2:"10"  //剩余数量
			// })
				this.api.compound_list(30, ++this.page).then(res => {
					console.log(res)
					res.data.data.forEach(ele => {
						this.collection_list.push({
							title: ele.name,
							id:ele.id,
							img:ele.cover,
							no: "",
							type:3,
							time1:ele.sell_at,
							time2:ele.collect_time,
							num1:ele.num,  //限量数量
							num2:ele.sell_num //剩余数量
						})
					})
					})
				
			},
			getmuseum() {
				//藏管
				this.api.collection(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						this.collection_list.push({
							title: ele.name,
							id: ele.id,
							img: ele.img,
							no: ele.no

						})
					})
					console.log(res)
				})
			},
			//我的藏品列表
			get_my_collection() {
				// uni.showToast({
				// 	title: "加载中",
				// 	icon: "loading"
				// })
				this.api.mycollection(30, ++this.page).then(res => {

					res.data.data.forEach(ele => {
						this.collection_list.push({
							id: ele.id,
							title: ele.coll.name,
							img: ele.coll.img,
							cover: ele.coll.cover,
							type: 1, //1藏品
							no: ele.order_no

						})

					})
					console.log(res)
				})
			},
			//盲盒列表
			get_my_box() {
				// uni.showToast({
				// 	title: "加载中",
				// 	icon: "loading"
				// })
				this.api.my_box(30, ++this.page).then(res => {
					// uni.hideToast()
					res.data.data.forEach(ele => {
						this.collection_list.push({
							id: ele.box.id,
							title: ele.box.box_name,
							img: ele.box.box_img,
							cover: ele.box.box_img,
							type: 2, //2盲盒
							openid: ele.id
						})

					})
					console.log(res)
				})
			}
		}

	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 80rpx;
		color: #999999;
	}

	.head_bar {
		display: flex;
		height: 126rpx;
		width: 100%;
		line-height: 146rpx;
		/* color: #999; */
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

	.content {
		width: 710rpx;
		margin: 24rpx auto 100rpx auto;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: space-between;
	}

	.item {
		width: 345rpx;
		/* height: 482rpx; */
		background: #fff;
		border-radius: 20rpx;
		margin-bottom: 24rpx;
		padding-bottom: 20rpx;
	}

	.item>view:nth-child(2) {
		text-align: center;
		margin-top: 22rpx;
		letter-spacing: 2rpx;
		font-size: 32rpx;
		font-weight: 600;
	}

	.no {
		box-shadow: inset 0px 3px 6px 1px #999999;
		border-radius: 200rpx;
		background: rgba(0, 0, 0, .4);
		border: 1px solid #999999;
		padding: 0 10rpx;
		height: 34rpx;
		/* width: 200rpx; */
		display: flex;
		justify-content: center;
		font-size: 24rpx;
		margin: 16rpx auto;
		width: 200rpx;
		position: relative;

	}

	.no>view {
		align-self: center;
		text-align: center;
		text-indent: 15rpx;
		color: #EAC6A3;
	}

	.no image {
		display: block;
		position: absolute;
		left: -20rpx;
		top: -14rpx;
	}

	.num_box {
		display: flex;
		font-size: 22rpx;
		justify-content: space-around;
		margin-top: 8rpx;
		margin-bottom: 8rpx;
	}

	.num_box>view {
		border-radius: 4rpx;
		border: 1px solid #FFFFFF;
		padding: 0 4rpx;
		background:#F0EFFD;
		display: flex;
		text-align: center;
	}

	.num_box>view:first-child>view:first-child {
		background: #F0EFFD;
		color: #EAC6A3;
	}
	.num_box>view:last-child>view:last-child,.num_box>view:first-child>view:last-child {
		min-width: 60rpx;
	}

	.time {
		font-size: 24rpx;
		text-align: center;
	}
</style>
