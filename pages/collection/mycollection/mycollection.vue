<template>
	<view class="container index">
		<nav-header>我的藏品</nav-header>
		<view class="content">
			
			<view class="item" v-for="(item,index) in collection_list" :key="index">
				<view class="">
					<image :src="item.cover" mode="" style="width: 345rpx;height: 345rpx;"  @click="href('/pages/collection/collectionDetails/collectionDetails?pass=1&id='+item.id)"></image>
				</view>
				<view class="">
					{{item.title}}
				</view>
			</view>
		</view>
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
				collection_list:[],
				page:0
			}
		},
		onLoad(){
			this.get_mycollection()
		},
		methods:{
			get_mycollection(){
				this.api.mycollection(30,++this.page).then(res=>{
					res.data.data.forEach(ele=>{
						this.collection_list.push({
							id:ele.id,
							title:ele.coll.name,
							img:ele.coll.img,
							cover:ele.coll.cover
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
		width: 710rpx;
		margin: 24rpx auto 100rpx auto;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: space-between;
	}
		.item{
			width: 345rpx;
			height: 432rpx;
			background: #1c1c1e;
			border-radius: 20rpx;
			margin-bottom: 24rpx;
			
		}
		.item>view:last-child{
		text-align: center;
		margin-top: 22rpx;
		letter-spacing: 2rpx;
		font-size: 32rpx;
		font-weight: 600;
			
		}
</style>