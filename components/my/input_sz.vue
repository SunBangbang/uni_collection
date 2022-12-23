<template>
	<view class="index_sz">
		
		<view class="input_list" v-if="reserve">
			<view class="">
				{{label}}
			</view>
			<view class="">
				<input :type="type" name="" @input="onInput" :value="val" :placeholder="ph">
			</view>
		</view>
		<view class="input_list_reserve" v-else>
			<view class="">
				<input :type="type" name="" @input="onInput" :value="val" :placeholder="ph">
			</view>
			<view class="">
				{{label}}
			</view>
		
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			type:{
				type:String,
				default:"text"
			},
			ph:{
				type:String,
				default:"ph"
			},
			label:{
				type:String,
				default:"labe"
			},
			val:{
				typeof:String,
				default:""
			},
			reserve:{
				typeof:Boolean,
				default:true
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			onInput(e){
				this.val=e.target.value 
				// console.log(this.val)
				this.$emit("input_content",this.val)
			}
		}
	}
</script>

<style scoped>
	 .input_list input{
		width: 300rpx;
		height: 100rpx;
		/* background: #000; */
		width: 500rpx;
		height: 80rpx;
		text-align: right;
	}
	.input_list{
		width: 710rpx;
		height: 120rpx;
		background: #fff;
		margin: 0 auto;
		border-radius: 12rpx;
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.input_list>view:first-child{
		width: 300rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: 3d4440;
	}
	.input_list>view{
		align-self: center;
	}
	
	.input_list_reserve{
		width: 90%;
		height: 120rpx;
		background: #fff;
		margin: 0 auto;
		border-radius: 12rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.input_list_reserve>view:last-child{
		width: 100rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: 3d4440;
		align-items: flex-end;
	}
	.input_list_reserve>view{
		align-self: center;
	}
	.input_list_reserve input{
		width: 300rpx;
		height: 100rpx;
		/* background: #000; */
		width: 500rpx;
		height: 80rpx;
		text-align: left;
		text-indent: 50rpx;
	}
	
	::placeholder{
		color: #999;
		font-size: 28rpx;
		font-weight: 400;
	}
</style>