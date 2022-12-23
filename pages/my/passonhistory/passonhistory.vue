<template>
	<view class="container index">
		<nav-header>转赠记录</nav-header>

		<view class="">

			<u-sticky :customNavHeight="'0'">
				<u-tabs :activeStyle="{color:'#6B61E7'}" :lineColor="'#6B61E7'" :inactiveStyle="{color:'#999'}" :list="list1"
					@click="click" :scrollable="false"></u-tabs>
			</u-sticky>
			<!-- 列表内容 -->
			<view class="content">
				<view class="item shadow" v-for="(item,index) in list" :key="index">

					<view class="">
						{{item.uuid== uuid?'转出':'转入'}}"{{item.goods_name}}"
					</view>

					<view class="">
						<view class="">
							{{item.uuid== uuid?'接受':'转出'}}者
						</view>
						<view class="">
							{{item.user_name}}
						</view>
					</view>

					<view class="">
						<view class="">
							交易时间
						</view>
						<view class="">
							{{item.time}}
						</view>
					</view>

					<view class="">
						<view class="">
							交易HASH
						</view>
						<view class="text_hide">
							{{item.hash || "暂无"}}
						</view>
						<view class="">
							<image src="../../../static/my/copy.png" mode="widthFix" style="width: 52rpx;"
								@click="$api.setclip(item.hash)"></image>
						</view>
					</view>

					<view class="">
						<view class="">
							藏品编号
						</view>
						<view class="">
							{{item.no || "暂无"}}
						</view>
						<view class="">
							<image src="../../../static/my/copy.png" mode="widthFix" style="width: 52rpx;"
								@click="$api.setclip(item.no)"></image>
						</view>
					</view>

					<image :src="item.img" mode=""
						style="width: 140rpx;height:140rpx;position: absolute;right: 0;z-index: 99;"></image>

				</view>

			</view>
			<!-- 列表内容 结束-->
		</view>

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
				list1: [{
					name: '全部',
				}, {
					name: '转出',
				}, {
					name: '转入'
				}],
				uuid: '',
				list: [], //数据列表
				page: 0,
				i:0
			}
		},
		onLoad() {
			//获取个人id 判断转出还是转入
			this.uuid = uni.getStorageSync("user_info").id;
			this.init()
			this.get_increase_all()
		},
		onReachBottom() {
			if (this.i == 0) {
				this.get_increase_all()
			} else if (this.i == 1) {
				this.get_out()
			} else if (this.i == 2) {
				this.get_receive()
			}
		},
		methods: {
			click(e) {
				this.i=e.index
				this.init()
				if (e.index == 0) {
					this.get_increase_all()
				} else if (e.index == 1) {
					this.get_out()
				} else if (e.index == 2) {
					this.get_receive()
				}
			},
			init() {
				this.list = []
				this.page = 0
			},
			get_increase_all() {
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				//type1 转入  type2转出
				this.api.get_increase_all(30, ++this.page).then(res => {
					uni.hideToast()
					res.data.data.forEach(ele => {
						var hash = ele.hash
						if(ele.hash == "" || ele.hash=="null" || ele.hash=="Null"){
							hash = "确权中"
						}
						this.list.push({
							goods_name: ele.name,
							user_name: ele.nickname,
							time: ele.create_at,
							hash: hash,
							type: ele.status,
							uuid: ele.uuid,
							img: ele.img,
							no: ele.order_no
						})
					})
					console.log(this.list)
				})
			},
			get_out() { //转出
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				//type1 转入  type2转出
				this.api.get_increase_all(30, ++this.page, 2).then(res => {
					uni.hideToast()
					res.data.data.forEach(ele => {
						this.list.push({
							goods_name: ele.name,
							user_name: ele.nickname,
							time: ele.create_at,
							hash: ele.hash,
							type: ele.status,
							uuid: ele.uuid,
							img: ele.img,
							no: ele.order_no
						})
					})
					console.log(this.list)
				})
			},
			get_receive() { //转入
				uni.showToast({
					title: "加载中",
					icon: "loading"
				})
				//type1 转入  type2转出
				this.api.get_increase_all(30, ++this.page, 1).then(res => {
					uni.hideToast()
					res.data.data.forEach(ele => {
						this.list.push({
							goods_name: ele.name,
							user_name: ele.nickname,
							time: ele.create_at,
							hash: ele.hash,
							type: ele.status,
							uuid: ele.uuid,
							img: ele.img,
							no: ele.order_no
						})
					})
					console.log(this.list)
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
		height: 310rpx;
		margin: 24rpx auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding-top: 24rpx;
		/* padding-bottom: 32rpx; */
		padding-left: 30rpx;
		padding-right: 20rpx;
		font-size: 28rpx;
		color: #999;
		position: relative;
	}

	.item view {
		display: flex;
	}

	.item>view>view:first-child {
		width: 170rpx;
	}

	.item>view>view:nth-child(3) {
		margin-left: auto;
	}

	.item>view:first-child {
		font-size: 36rpx;
		color: #000;
	}
</style>
