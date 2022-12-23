<template>
	<view class="pop_ocy" @click="close()">
		
			<image :src="img" mode="widthFix" style="width: 100%;"></image>
		
		
	</view>
</template>

<script>
	export default{
		props:['img'],
		methods:{
			close(){
				this.$emit("close_img")
			}
		}
	}
</script>

<style scoped>
	image{
		display: block;
		width: 100%;
		height: 100%;
		align-self: center;
	}
</style>