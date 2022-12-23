<template>
	<view class="container index">
		<my-header>排行榜</my-header>
		
		<view class="content">
			<view class="item" v-for="(item,index) in rank_lint" :key="index">
				<view class="author">
					<image :src="item.img" mode="" style="width: 88rpx;height: 88rpx;"></image>
				</view>
				<view class="name_phone">
					<view class="">
						{{item.name}}
					</view>
					<view class="">
						{{item.tel}}
					</view>
				</view>
				<view class="num">
					<view class="">
						X{{item.num}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import myHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			myHeader
		},
		data(){
			return{
				rank_lint:[]
			}
		},
		onReachBottom() {
		},
		onLoad() {
			this.get_rank_lint()
		},
		methods:{
			get_rank_lint(){
				this.api.rank().then(res=>{
					console.log(res)
					res.data.list.forEach(ele=>{
						this.rank_lint.push({
							name:"用户",
							tel:ele.phone,
							num:ele.child,
							img:ele.headimg
						})
					})
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
		/* margin: 24rpx auto; */
	}
	.item{
		width: 686rpx;
		height: 128rpx;
		background: #fff;
		display: flex;
		margin: 24rpx auto;
		justify-content: flex-start;
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-right: 22rpx;
	}
	.item>view{
		align-self: center;
	}
	.item>view:last-child{
		margin-left: auto;
	}
	.name_phone{
		margin-left: 20rpx;
	}
	.name_phone>view:first-child{
		font-size:32rpx;
		color: #8A69E7;
		font-weight: 600;
	}
	.name_phone>view:last-child{
		font-size:24rpx;
		color: #999999;
		font-weight: 400;
		margin-top: 14rpx;
	}
	.num{
		font-size: 32rpx;
		font-weight: 600;
	}
</style>