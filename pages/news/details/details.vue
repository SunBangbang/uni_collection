<template>
	<view class="index container">
		<nav-header>详情</nav-header>
		<view class="content" v-html="content">
		
			
		</view>
		<view class="time">
			{{time}}
		</view>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onLoad(e) {
			this.api.get_notice_info(e.id).then(res=>{
				this.content=this.$api.turnhtml(res.data.content)
				this.time=res.data.create_at
				console.log(res)
			})
		},
		data(){
			return{
				content:"",
				time:""
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
		box-sizing: border-box;
		padding: 20rpx;
	}
	.time{
		margin-top: 30rpx;
		color: #999;
		text-align: right;
		margin-right: 20rpx;
	}
</style>