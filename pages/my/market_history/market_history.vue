<template>
	<view class="container index">
		<nav-header>转售记录</nav-header>
		<u-sticky :customNavHeight="'0'">
			<u-tabs :activeStyle="{color:'#6B61E7'}" :lineColor="'#6B61E7'" :inactiveStyle="{color:'#999'}" :list="list1"
				@click="click" :scrollable="false"></u-tabs>
		</u-sticky>
		<!-- 列表内容 -->
		<view class="content">
			<view class="item shadow" v-for="(item,index) in list" :key="index">
				<view class="title">
					{{item.status}}
				</view>
				<view class="item_content">

					<view class="item_img">
						<image :src="item.img" mode=""
							style="width: 160rpx;height: 160rpx;border-radius: 12rpx;"></image>
					</view>
					<view class="item_info">
						<view class="">
							{{item.name}}
						</view>
						<view class="">
							{{item.no}}
						</view>
						<view class="">
							{{item.time}}
						</view>
					</view>
					<view class="price">
						<view class="item_price">
							支付金额：{{item.price}}￥
						</view>
						<view class="cancel" @click="cancel(item.id)" v-if="item.status=='藏品转售中，未结算'">
							<view class="">
								取消转售
							</view>
						</view>
					</view>


				</view>
			</view>

		</view>
		<!-- 列表内容 结束-->
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onShow() {
			this.get_resale_history()
		},
		data() {
			return {
				list1: [{
					name: '全部',
				}, {
					name: '进行中',
				}, {
					name: '已完成'
				}],
				list: [], //数据列表
				page: 0,
				index: 0
			}
		},
		onReachBottom() {
			if (this.index == 0) {
				this.get_resale_history()
			} else if (this.index == 1) {
				this.get_resale_history_in()
			} else if (this.index == 2) {
				this.get_resale_history_end()
			}
		},
		methods: {
			click(val) {
				console.log(val.index)
				this.list = []
				this.page = 0
				if (val.index == 0) {
					this.get_resale_history()
				} else if (val.index == 1) {
					this.get_resale_history_in()
				} else if (val.index == 2) {
					this.get_resale_history_end()
				}
				this.index = val.index
			},
			cancel(id) {
				this.api.cancel_resale(id).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: "撤销成功"
						})
						this.page = 0
						this.list=[]
						this.get_resale_history()
					}
				})
			},
			get_resale_history() {
				// status 12进行中   3完成
				this.api.resale_history(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						this.list.push({
							name: ele.goodsInfo.name,
							no: ele.goodsInfo.order_no,
							price: ele.price,
							time: ele.create_at,
							status: ele.status == 1 ? "藏品转售中，未结算" : ele.status == 2 ? "藏品转售中，未结算" :
								ele.status == 3 ? "藏品已售出，结算成功"  : "已撤销该转售",
							id: ele.id,
								img:ele.goodsInfo.cover
						})
					})
					console.log(res)
				})
			},
			get_resale_history_in() {
				// status 12进行中   3完成
				this.api.resale_history(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						if (ele.status == 1 || ele.status == 2) {

							this.list.push({
								name: ele.goodsInfo.name,
								no: ele.goodsInfo.order_no,
								price: ele.price,
								time: ele.create_at,
								status: ele.status == 1 ? "藏品转售中，未结算" : ele.status == 2 ?
									"藏品转售中，未结算" : ele.status == 3 ? "藏品已售出，结算成功" : "已取消",
								id: ele.id,
								img:ele.goodsInfo.cover
							})
						}

					})
					console.log(res)
				})
			},
			get_resale_history_end() {
				// status 12进行中   3完成
				this.api.resale_history(30, ++this.page).then(res => {
					res.data.data.forEach(ele => {
						if (ele.status == 3) {
							this.list.push({
								name: ele.goodsInfo.name,
								no: ele.goodsInfo.order_no,
								price: ele.price,
								time: ele.create_at,
								status: ele.status == 1 ? "藏品转售中，未结算" : ele.status == 2 ?
									"藏品转售中，未结算" : ele.status == 3 ? "藏品已售出，结算成功" : "已取消",
								id: ele.id,
								img:ele.goodsInfo.cover
							})
						}

					})
					console.log(res)
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

	.content {
		margin: 0 auto;
	}

	.item {
		width: 710rpx;
		height: 292rpx;
		border-radius: 40rpx;
		margin: 24rpx auto;
		background: #fff;
		box-sizing: border-box;
		padding: 24rpx 30rpx 30rpx 30rpx;
	}

	.title {
		font-size: 36rpx;
		font-weight: 400;
	}

	.item_content {
		margin-top: 30rpx;
		display: flex;
	}

	.item_info {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.item_info>view:first-child {
		font-size: 36rpx;
		font-weight: 600;
	}

	.item_info>view:nth-child(2) {
		font-size: 28rpx;
		font-weight: 400;
	}

	.item_info>view:nth-child(3) {
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.6);
	}

	.price {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: right;
	}

	.price>view:first-child {
		font-size: 28rpx;
		font-weight: 400;

	}

	.cancel {
		width: 140rpx;
		height: 48rpx;
		/* background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%); */
		background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%);
		border-radius: 160rpx;
		display: flex;
		justify-content: flex-end;
		align-self: flex-end;
	}

	.cancel>view {
		width: 136rpx;
		height: 44rpx;
		background: #6B61E7;
		border-radius: 160rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 44rpx;
		color: #fff;
	}
</style>
