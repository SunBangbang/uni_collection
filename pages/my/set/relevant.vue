<template>
	<view class="container index">
		<nav-header>{{type==1?'用户协议':'隐私政策'}}</nav-header>
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
		onLoad(e) {
			this.type=e.type
			this.get_about()
		},
		data(){
			return{
				content:"",
				type:1  //1等于用户政策  2隐私协议
			}
		},
		methods:{
			get_about(){
				this.api.aboutall().then(res=>{
					if(this.type==1){
						this.content=this.$api.turnhtml(res.data.user)
					}else if(this.type==2){
						this.content=this.$api.turnhtml(res.data.privacy)
						
					}
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
</style>