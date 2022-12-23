<template>
	<view class="container index">
		<nav-header>我的订单</nav-header>
		<view class="">

			<u-sticky :customNavHeight="'0'">
				<u-tabs :activeStyle="{color:'#6B61E7'}" :lineColor="'#6B61E7'" :inactiveStyle="{color:'#999'}" :list="list1"
					@click="click" :scrollable="false"></u-tabs>
			</u-sticky>

			<view class="content">
				<!-- //全部 -->
				<view class="item shadow" v-for="(item,index) in all" :key="index">
					<view class="first_row">
						<view class="">
							{{item.create_time}}
						</view>
						<!-- //2待付款 -->
						<view class="" style="color: #E37656;" v-if="item.status==2">
							{{item.statusName}}
						</view>
						<!-- //1已完成 -->
						<view class="systemColor" v-if="item.status==1">
							{{item.statusName}}
						</view>
						<!--  //4已取消-->
						<view class="" style="color: #999999;" v-if="item.status==4">
							{{item.statusName}}
						</view>
					</view>
					<view class="second_row">
						<!-- 藏品图片 -->
						<view class="">
							<image :src="item.img" mode=""></image>
						</view>
						<!-- 藏品图片 结束-->
						<!-- 藏品信息 -->
						<view class="">
							<view class="">
								{{item.name}}
							</view>
							<view class="">
								订单编号：{{item.oderno}}
							</view>
							<view class="">
								￥ {{item.price}}
							</view>
						</view>
						<!-- 藏品信息 结束-->
					</view>
					<view class="third_row" v-if="item.status==2">
						<view class="">
							30分钟未支付订单将自动关闭
						</view>
						<view class="" @click="pay(index)">
							<view class="">
								立即付款
							</view>
						</view>
					</view>
				</view>
				<!-- //全部 结束-->
			</view>

		</view>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onShow() {
			this.init()
			this.get_order()
		},
		data() {
			return {
				list1: [{
					name: '全部',
				}, {
					name: '待付款',
				}, {
					name: '已完成'
				}, {
					name: '已取消'
				}],
				all: [],
				i: 0,
				page: 0
			}
		},

		watch: {
			i(val) {
				this.init()
				if (val == 0) {

					//全部订单
					this.get_order()
				} else if (val == 1) {
					//全部待付款订单
					this.get_unpaid_order()
				} else if (val == 2) {
					//全部已完成订单
					this.get_ok_order()
				} else if (val == 3) {
					//全部已取消订单
					this.get_cancel_order()
				}
			}
		},
		onReachBottom() {
			this.onbottomRech()
			console.log(1)
		},
		onHide() {
			this.init()
		},
		methods: {

			onbottomRech() {
				if (this.i == 0) {
					//全部订单
					this.get_order()
				} else if (this.i == 1) {
					//全部待付款订单
					this.get_unpaid_order()
				} else if (this.i == 2) {
					//全部已完成订单
					this.get_ok_order()
				} else if (this.i == 3) {
					//全部已取消订单
					this.get_cancel_order()
				}

			},
			init() {
				this.all = []
				this.page = 0
			},
			click(val) {

				this.i = val.index
				console.log(val.index)
			},
			get_order() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				//获取全部
				this.api.order_list(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						if(ele.collection==null){
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img:"",
								name:"",
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}else{
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img: ele.collection.img,
								name: ele.collection.name,
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}
					
					})
					console.log(res.data.data)
					uni.hideToast()
				})
			},
			pay(index) {
				this.$api.to("/pages/index/Details/paytype/paytype?money=" + this.all[index].price + "&orderid=" + this
					.all[index].oderno + "&type=3")

			},
			//获取待付款 
			get_unpaid_order() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				this.api.order_list(30, ++this.page, 2).then(res => {
					res.data.data.forEach(ele => {
						if(ele.collection==null){
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img:"",
								name:"",
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}else{
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img: ele.collection.img,
								name: ele.collection.name,
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}
					})
					console.log(res.data.data)
					uni.hideToast()
				})
			},
			//获取已完成
			get_ok_order() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				this.api.order_list(30, ++this.page, 1).then(res => {
					res.data.data.forEach(ele => {
						if(ele.collection==null){
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img:"",
								name:"",
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}else{
							this.all.push({
								create_time: ele.create_at,
								status: ele.status,
								statusName: ele.statusName,
								img: ele.collection.img,
								name: ele.collection.name,
								oderno: ele.order_no,
								price: ele.price,
								id: ele.id
							})
						}
					})
					console.log(res.data.data)
					uni.hideToast()
				})
			}, //获取已取消
			get_cancel_order() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				this.api.order_list(30, ++this.page, 4).then(res => {
					res.data.data.forEach(ele => {
					if(ele.collection==null){
						this.all.push({
							create_time: ele.create_at,
							status: ele.status,
							statusName: ele.statusName,
							img:"",
							name:"",
							oderno: ele.order_no,
							price: ele.price,
							id: ele.id
						})
					}else{
						this.all.push({
							create_time: ele.create_at,
							status: ele.status,
							statusName: ele.statusName,
							img: ele.collection.img,
							name: ele.collection.name,
							oderno: ele.order_no,
							price: ele.price,
							id: ele.id
						})
					}
					})
					console.log(res.data.data)
					uni.hideToast()
				})
			},
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;

	}

	.item {
		width: 710rpx;
		/* height: 394rpx; */
		background: #fff;
		border-radius: 40rpx;
		margin: 24rpx auto;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 24rpx 30rpx 34rpx 30rpx;
	}

	.first_row {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
	}

	.second_row {
		display: flex;
		font-size: 28rpx;
		margin-top: 28rpx;
	}

	.second_row>view:last-child {
		display: flex;
		font-size: 28rpx;
		flex-direction: column;
	}

	.second_row>view:last-child>view:nth-child(2) {
		margin-top: 26rpx;
		font-size: 24rpx;
		color: #999;
	}

	.second_row>view:last-child>view:last-child {
		margin-top: auto;
		font-size: 48rpx;
	}

	.third_row {
		display: flex;
		justify-content: space-between;
		margin-top: 38rpx;
		font-size: 24rpx;
		color: #6B61E7;
		height: 44rpx;
		line-height: 44rpx;
	}

	.third_row>view:last-child {
		background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%);
		width: 140rpx;
		height: 48rpx;
		line-height: 48rpx;
		text-align: center;
		display: flex;
		justify-content: flex-end;
		color: #fff;
		font-size: 24rpx;
		border-radius: 160rpx;
	}

	.third_row>view:last-child>view {
		background: #1c1c1e;
		width: 136rpx;
		height: 44rpx;
		align-self: center;
		border-radius: 160rpx;
	}

	image {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx;
	}
</style>
