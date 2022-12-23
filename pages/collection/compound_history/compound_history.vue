<template>
	<view class="container index">
		<nav-header>合成记录</nav-header>
		<!-- //数据列表 -->
		<view class="content">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="">
						<image :src="item.img" mode="" style="width: 140rpx;height: 140rpx;border-radius: 24rpx;"></image>
					</view>
					<view class="">
						<view class="">
							合成-{{item.name}}
						</view>
						<view class="">
							合成时间：{{item.time}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- //数据列表 结束-->
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			navHeader
		},
		data(){
			return{
				list:[
				],
				page:0
			}
		},
		onLoad() {
			this.get_compound_history()
		},
		methods:{
			get_compound_history(){
				this.api.compound_history(30,++this.page).then(res=>{
					res.data.data.forEach(ele=>{
						this.list.push({
							img:ele.cover,
							name:ele.name,
							time:ele.create_at
						})
					})
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.index{
		box-sizing: border-box;
		padding-top: 100rpx;
	}
	.content{
		margin: 0 auto;
		width: 710rpx;
	}
	.item{
		width: 710rpx;
		height: 148rpx;
		background: fff;
		border-radius: 24rpx;
		display: flex;
		justify-content: flex-end;
		margin-top: 30rpx;
	}
	.item>view{
		align-self: center;
		width: 702rpx;
		height: 140rpx;
		background: #fff;
		border-radius: 24rpx;
		display: flex;
	}
	.item>view>view:last-child{
		box-sizing: border-box;
		padding-top: 18rpx;
		padding-bottom: 16rpx;
		padding-left: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.item>view>view:last-child>view:last-child{
		font-size: 24rpx;
		letter-spacing: 2rpx;
	}
	.item>view>view:last-child>view:first-child{
		font-size: 32rpx;
		font-weight: bold;
	}
</style>