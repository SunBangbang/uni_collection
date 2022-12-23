<template>
	<view class="container index">
		<nav-header>关于我们</nav-header>
		<view class="" style="box-sizing: border-box;padding: 20rpx;" v-html="content">
			
		</view>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			navHeader
		},
		onLoad() {
			this.get_about()
		},
		data(){
			return{
				content:""
			}
		},
		methods:{
			get_about(){
				this.api.about().then(res=>{
					console.log(res)
					this.content=this.$api.turnhtml(res.data.about)
					
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
</style>