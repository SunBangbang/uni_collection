<template>
	<view class="container index">
		<nav-header>{{title}}</nav-header>
		<!-- 验证原来手机部分 -->
		<view class="content_phone" v-if="type==1">
			<view class="">
				原手机号
			</view>
			<view class="input_box">
				<input type="number" placeholder="请输入原手机号" v-model="tel">
			</view>
			
			<view class="code_input">
				<view class="">
					<input type="number" v-model="code1">
				</view>
				<view class="sendcode" @click="sendCode(tel)" v-if="typecode">
						获取验证码
				</view>
				<view class="sendcode" v-else>
						{{count}}秒后重试
				</view>
			</view>
			
		</view>
		
		<!-- 绑定新手机号部分 -->
		<view class="content_phone" v-if="type==2">
			<view class="">
				{{title}}
			</view>
			<view class="input_box">
				<input type="number" placeholder="请输入新手机号" v-model="tel2">
			</view>
			
			<view class="code_input">
				<view class="">
					<input type="number" v-model="code2">
				</view>
				<view class="sendcode" @click="sendCode(tel2)" v-if="typecode"> 
						获取验证码
				</view>
				<view class="sendcode" v-else>
						{{count2}}秒后重试
				</view>
			</view>
			
		</view>
		
		
		<view class="btn" @click="next" v-if="type==1">
			下一步
		</view>
		<view class="btn" @click="confirm" v-if="type==2">
			完成
		</view>
		
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default{
		components:{
			navHeader
		},
		watch:{
			//当type值改变时 重置倒计时
			type(){
				this.typecode=true
				clearInterval(this.time)
			}
		},
		onHide() {
			clearInterval(this.time)
		},
		data(){
			return{
				title:"验证原手机号",  //左上角标题文字切换
				type:1,   //当前页面显示状态 1为当前原来手机页面 2绑定新手机页面
				code1:"",  //验证码1
				code2:"", //验证码2
				tel:"", //手机号1
				tel2:"", //手机号2
				count:0, //倒计时1
				typecode:true,  //显示发送验证码按钮的状态
				time:""
			}
		},
		methods:{
			sendCode(phone){
				this.api.smsCode(phone).then(res=>{
					if(res.code==1){
						//短信发送成功 开始倒计时
						this.start()
						this.$api.pop("发送成功")
					}
				})
			},
			start(){
				this.typecode=false
				this.count=5
				this.time=setInterval(()=>{
					if(this.count<=1){
						this.count=0
						this.typecode=true
						clearInterval(this.time)
					}
					--this.count
				},1000)
			},
			confirm(){
				console.log("完成")
				uni.showToast({
					title:"验证中",
					icon:"loading"
				})
				this.api.newtel(this.tel2,this.code2).then(res=>{
					uni.hideToast()
					if(res.code==1){
						uni.showToast({
							title:"修改成功"
						})
						setTimeout(()=>{
							this.$api.totabar("/pages/my/my")
						},500)
					}
				})
			},
			next(){
				uni.showToast({
					title:"验证中",
					icon:"loading"
				})
				this.api.oldtel(this.tel,this.code1).then(res=>{
					uni.hideToast()
					if(res.code==1){
						this.type=2
						this.title='验证新手机号'
					}
				})
				
				
				 
			}
		}
	}
	
</script>

<style scoped>
	.index{
		box-sizing: border-box;
		padding-top: 100rpx;
		display: flex;
		flex-direction: column;
	}
	.content_phone{
		width: 686rpx;
		margin: 30rpx auto 0 auto;
	}
	.content_phone>view:first-child{
		font-size: 36rpx;
		font-weight: 400;
	}
	input{
		width:100%;
		height: 100rpx;
		background:#FFFFFF;
		line-height: 100rpx;
		border-radius: 16rpx;
		margin-bottom: 20rpx;
		text-indent: 32rpx;
		font-weight: bold;
	}
	.input_box{
		margin-top: 42rpx;
	}
	.code_input{
		display: flex;
		justify-content: space-between;
	}
	.sendcode{
		height: 100rpx;
		width: 220rpx;
		border-radius: 16rpx;
		background: #6B61E7;
		line-height: 100rpx;
		text-align: center;
		color: #fff;
		
	}
	.btn{
		width: 686rpx;
		height: 88rpx;
		border-radius: 110rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 32rpx;
		margin-top: auto;
		font-weight: 400;
		color: #fff;
		background: #6B61E7;
		align-self: center;
		margin-bottom: 60rpx;
	}
</style>