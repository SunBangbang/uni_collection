<template>
	<view class="container index">
		<!-- <nav-header :showback="false" :showright="false" @rightClick="href('/pages/market/search/search')">市场</nav-header> -->
		<!-- 头部下拉菜单 -->
		<view class="head_menu">
			<view class="" @click="click(1)">
				<view class="">
					{{name1}}
				</view>
				<view class="">
					<image src="../../static/market/arrow_down.png" mode="widthFix" style="width: 24rpx;"></image>
				</view>
			</view>
			<view class="" @click="click(2)">
				<view class="">
					{{name2}}
				</view>
				<view class="">
					<image src="../../static/market/arrow_down.png" mode="widthFix" style="width: 24rpx;"></image>
				</view>
			</view>
			<view class="" @click="click(3)">
				<view class="">
					价格排序
				</view>
				<view class="">
					<image src="../../static/market/arrow_down.png" mode="widthFix" style="width: 24rpx;"></image>
				</view>
			</view>
			<!-- 头部下拉菜单 结束-->
		</view>
		<!-- 数据列表 -->
		<view class="content">
			<view class="item" v-for="(item,index) in list" :key="item.id" @click="info(item)">
				<!-- 图片部分 -->
				<view class="img_box">
					<view class="">
						<image :src="item.img" mode="" style="width:284rpx;height: 284rpx;"></image>
					</view>
					<view class="">
						<text v-if="item.type==1">编号 {{item.no}}</text>
					</view>
				</view>
				<!-- 图片部分 结束-->
				<!-- 名称部分 -->
				<view class="goods_name text_hide">
					{{item.goods_name}}
				</view>
				<!-- 名称部分 结束-->
				<!-- 持有姓名部分 -->
				<view class="writer text_hide">
					{{item.writer}}
				</view>
				<!-- 持有姓名部分 结束-->
				<!-- 价格部分 -->
				<view class="price">
					￥{{item.price}}
				</view>
				<!-- 价格部分 结束-->
			</view>

		</view>
		<!-- 数据列表 结束-->


		<!-- 弹出下拉菜单 -->
		<u-picker :show="show" :columns="columns" @cancel="show=false" @confirm="confirm"></u-picker>
		<!-- 弹出下拉菜单 结束-->

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
				name1: "藏品",
				name2: "品牌",
				show: false, //是否显示下拉框
				columns: [
					['藏品', '盲盒']
				], //下拉框内容
				list: [], //数据列表
				page: 0,
				type: 0, //1藏品 2盲盒
				sort: true, //排序开关
				sort_type: 1, //排序编号
				top_type: 1, //判断点击的是第一个 还是第二个 还是第三个
				collection_id: [] // 顶部藏品id数组
			}
		},
		onHide() {

		},
		onShow() {

			this.init() //初始化
			this.get_collection_list() //获取数据列表

		},
		onReachBottom() {
			if(this.top_type>1){
				
			}else{
				if (this.type == 0) {
					this.get_collection_list(this.sort_type)
				} else if (this.type == 1) {
					this.get_box_list(this.sort_type)
				
				}
			}
			
		},
		methods: {
			// 藏品/盲盒详情页
			info(item) {
				if (item.type == 1) {
					this.$api.to('/pages/market/market_collection_details/market_collection_details?id=' + item.id)
				} else if (item.type == 2) {
					this.$api.to('/pages/market/market_box_details/market_box_details?id=' + item.id)
				}

			},
			init() {
				this.page = 0
				this.columns = []
				this.list = []
			},
			click(val) {
				//1表示第一个分类  2第二个分类 3第三个排序
				this.top_type = val
				this.columns = []
				if (val == 1) {
					this.columns.push(['藏品', '盲盒'])
					this.show = true
				} else if (val == 2) {
					//判断如果当前type为0点击品牌 则展示其全部藏品列表
					//type0表示当前为藏品
					if (this.type == 0) {
						this.api.get_collection(100, 1).then(res => {
							let list = []
							this.collection_id = []
							res.data.data.forEach(ele => {
								list.push(ele.name)
								this.collection_id.push(ele.id)
							})
							this.columns.push(list)
							console.log(this.columns)
						})
						//判断如果当前type为1点击品牌 则展示其全部盲盒列表
					} else if (this.type == 1) {
						this.api.get_box(100, 1).then(res => {
							let list = []
							this.collection_id = []
							res.data.data.forEach(ele => {
								list.push(ele.box_name)
								this.collection_id.push(ele.id)
							})
							this.columns.push(list)
							console.log(this.columns)
						})
					}
					this.show = true
				} else if (val == 3) {
					//此判断为排序  2是价格升序 3是价格升序
					this.init()
					this.sort = !this.sort
					if (this.type == 0) {
						if (this.sort) {
							this.sort_type = 2
							this.get_collection_list(2)
						} else {
							this.sort_type = 3
							this.get_collection_list(3)
						}
					} else {
						if (this.sort) {
							this.sort_type = 2
							this.get_box_list(2)
						} else {
							this.sort_type = 3
							this.get_box_list(3)
						}
					}
				}

			},
			//获取藏品列表
			get_collection_list(sort = "1") {
				this.api.market_list(30, ++this.page, 1, null, sort).then(res => {
					res.data.data.forEach(ele => {
						this.list.push({
							id: ele.id,
							goods_name: ele.goods.name,
							writer: ele.goods.nickname,
							no: ele.goods.order_no,
							img: ele.goods.cover,
							price: ele.price,
							type: 1

						})
					})
					console.log(res)
				})
			},
			//获取盲盒列表
			get_box_list(sort = "1") {
				this.api.market_list(30, ++this.page, 2, null, sort).then(res => {
					res.data.data.forEach(ele => {
						this.list.push({
							id: ele.id,
							goods_name: ele.goods.name,
							writer: ele.goods.nickname,
							no: ele.goods.order_no,
							img: ele.goods.cover,
							price: ele.price,
							type: 2

						})
					})
					console.log(res)
				})
			},
			// 获取指定藏品列表
			//获取藏品列表
			get_collection_list_id(id, sort = "1") {
				this.list = []
				this.page = 0
				this.api.market_list(100, 1, 1, id, sort).then(res => {
					res.data.data.forEach(ele => {
						this.list.push({
							id: ele.id,
							goods_name: ele.goods.name,
							writer: ele.goods.nickname,
							no: ele.goods.order_no,
							img: ele.goods.cover,
							price: ele.price,
							type: 1

						})
					})
					console.log(res)
				})
			},
			//获取盲盒列表
			get_box_list_id(id, sort = "1") {
				this.list = []
				this.page = 0
				this.api.market_list(100, 1, 2, id, sort).then(res => {
					res.data.data.forEach(ele => {
						this.list.push({
							id: ele.id,
							goods_name: ele.goods.name,
							writer: ele.goods.nickname,
							no: ele.goods.order_no,
							img: ele.goods.cover,
							price: ele.price,
							type: 2

						})
					})
					console.log(res)
				})
			},
			confirm(val) {
				this.show = false //
				//type=0为藏品列表  
				// if(this.type==0){

				// 	//type1为盲盒列表
				// }else if(this.type==1){

				// }


				console.log(val)
				if (this.top_type == 1) {
					this.type = val.indexs[0] //盲盒或者藏品当前索引
					this.name1 = val.value[0] //盲盒或者藏品当前名称
					this.name2='品牌'
					if (val.indexs[0] == 0) {
						this.sort_type = 1    //排序
						this.init()           //初始化
						this.get_collection_list()
					} else if (val.indexs[0] == 1) {
						this.sort_type = 1
						this.init()
						this.get_box_list()
					}
				} else if (this.top_type == 2) {
					if (this.type == 0) {
						this.name2 = val.value[0] //盲盒或者藏品当前名称
						this.get_collection_list_id(this.collection_id[val.indexs[0]])
					} else if (this.type == 1) {
						this.name2 = val.value[0] //盲盒或者藏品当前名称
						this.get_box_list_id(this.collection_id[val.indexs[0]])
					}

				}
				// console.log(val.value[0])
				// console.log()
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		/* padding-top: 100rpx; */
	}

	.head_menu {
		display: flex;
		width: 750rpx;
		height: 88rpx;
		line-height: 88rpx;
	}

	.head_menu image {
		display: block;
		margin-left: 8rpx;
	}

	.head_menu>view {
		flex: 1;
		display: flex;
		text-align: center;
		justify-content: center;
		letter-spacing: 2rpx;
	}

	.head_menu>view>view {
		align-self: center;
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
		width: 340rpx;
		/* height: 472rpx; */
		background: #fff;
		border-radius: 20rpx;
		margin-bottom: 24rpx;
		padding-bottom: 14rpx;
		box-sizing: border-box;
		padding-top: 30rpx;

	}

	.img_box {
		width: 284rpx;
		position: relative;
		margin: 0 auto;
		text-align: center;
	}

	.img_box>view:last-child {
		width: 100%;
		height: 48rpx;
		background: #000;
		background: rgba(0, 0, 0, .6);
		position: absolute;
		bottom: 0;
		font-size: 20rpx;
		color: #ccc;
		text-align: center;
		line-height: 48rpx;
	}

	.goods_name {
		margin-top: 8rpx;
		width: 284rpx;
		margin: 0 auto;
		font-size: 32rpx;
	}

	.writer {
		width: 284rpx;

		margin: 0 auto;
		margin-top: 12rpx;
		font-weight: 400;
		font-size: 24rpx;
		color: #999;
	}

	.price {
		font-size: 28rpx;
		color: #FFCB1E;
		font-weight: bold;
		width: 284rpx;

		margin: 0 auto;
		margin-top: 16rpx;
	}
</style>
