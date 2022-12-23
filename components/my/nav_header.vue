<template>
	<view class="nav" :style="{background:navBcg,color:textColor}">
		<image v-if="showback" :src="imgUrl" @click="back" mode="widthFix" style="width: 48rpx;position: absolute;left: 12rpx;bottom: 20rpx;"></image>
		<view class="title">
			<slot></slot>
		</view>
		<view class="right" v-if="showright && rightIcon" @click="rightClick">
			<image src="../../static/market/search.png" mode="" style="width: 48rpx;height: 48rpx;"></image>
		</view>
		<view class="right" v-if="showright && rightIcon==false " @click="rightClick">
			{{rightText}}
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			// 显示标题还是图标
			rightIcon:{
				typeof:Boolean,
				default:true
			},
			rightText:{
				typeof:String,
				default:"右侧标题"
			},
			showright:{
				typeof:Boolean,
				default:false
			},
			showback:{
				type:Boolean,
				default:true
			},
			imgUrl:{
				type:String,
				// default:require('@/static/index/details/arrow_back.png')
				default:require('@/static/index/search/arrow_right.png')
			},
			navBcg:{
				type:String,
				default:'#fff'
			},
			textColor:{
				type:String,
				default:'#000'
			}
		},
		methods:{
			rightClick(){
				this.$emit("rightClick")
			}
		}
	}
</script>

<style scoped>
	.nav{
		width: 750rpx;
		height: 100rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		background: #fff;
		
	}
	.title{
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
		line-height: 100rpx;
		letter-spacing: 4rpx;
		/* color: #000; */
	}
	.right{
		position: absolute;
		right: 20rpx;
		top: 50%;
		transform: translateY(-50%);
		font-size: 30rpx;
	}
</style>