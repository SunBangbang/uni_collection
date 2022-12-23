<template>
	<view class="forgetpassword container">
		<view class="title">
			<view class="">
				忘记密码
			</view>
		<view class="">
			Mo未来 <!--view class="login_view"></view-->
		</view>
		</view>
		<view class="login_content">
			
		<view class="input_item">
			<view class="">
				手机号
			</view>
			<view class="">
				<input type="number" v-model="tel">
			</view>
		</view>	
		<view class="input_item">
			<view class="">
				验证码
			</view>
			<view class="">
				<input type="number" style="width: 250rpx;" v-model="code">
			</view>
			<view class="systemColor"  v-if="count<=0" @click="sendCode">
				获取验证码
			</view>
			<view class="sendcode_count" v-else>
				{{count}}秒后重新发送
			</view>
		</view>
		<view class="input_item">
			<view class="label">
				登录密码
			</view>
			<view class="">
				<input type="password" v-model="pwd">
			</view>
		</view>
		<view class="input_item">
			<view class="label">
				确认登录密码
			</view>
			<view class="">
				<input type="password" v-model="repwd">
			</view>
		</view>

		
		</view>
		
		
		<view class="login_btn systemBcg colorBlack" @click="forget">
			确认
		</view>
		
		<view class="gologin">
			想起密码，<text class="systemColor" @click="rdt('/pages/login/login')">去登录</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				count:0,
				tel:"",
				pwd:"",
				repwd:"",
				code:"",
				time:""
			}
		},
		onHide() {
			clearInterval(this.time)
		},
		methods:{
			sendCode(){
				 this.api.smsCode(this.tel,2).then(res=>{
				 	if(res.code==1){
				 	this.$api.pop(res.info)
				 	this.count=60
				 	setInterval(()=>{
				 		if(this.count<=0){
				 			this.count=0
				 			return
				 		}
				 		--this.count
				 	},1000)
				 	}
				})
			},
			forget(){
				var pwd=this.$md5(this.pwd)
				var repwd=this.$md5(this.repwd)
				this.api.forget(this.tel,this.code,pwd,repwd).then(res=>{
					if(res.code==1){
						this.$api.pop("修改成功")
						setTimeout(()=>{
							this.$api.rdt("/pages/login/login")
						},1500)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.forgetpassword{
		box-sizing: border-box;
		/* padding-top: 142rpx; */
		padding-top: 120rpx;
	}
	.title{
		font-size: 46rpx;
		text-align: left;
		/* margin-top: 242rpx; */
		font-weight: 400;
		margin-left: 100rpx;
		letter-spacing: 6rpx;
	}

	.title>view:last-child {
		margin-top: 14rpx;
		display: flex;
	}
	
	.title>view:last-child>view {
		margin-left: 18rpx;
		margin-top: 6rpx;
	}
	
	.login_view {
		width: 52rpx;
		height: 52rpx;
		border-radius: 4rpx;
		background: #6B61E7;
	
	}
	.login_content{
		margin-top: 140rpx;
		margin-left: 100rpx;
	}
	.sendcode_count{
		font-size: 24rpx;
	}
	.input_item{
		display: flex;
		border-bottom: 1px solid #D5D5D5;
		width: 550rpx;
		height: 70rpx;
		/* background: #FA4485; */
		font-size: 32rpx;
		margin-top: 80rpx;
		line-height: 70rpx;
	}
	.input_item>view:last-child{
			margin-left: auto;
			
		}
	input{
		text-indent: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.label{
		width: 250rpx;
	}

	.login_btn{
				width: 550rpx;
				height: 100rpx;
				font-size: 32rpx;
				line-height: 100rpx;
				margin: 0 auto;
				margin-top: 80rpx;
				text-align: center;
	border-radius: 138rpx ;
			}
			.gologin{
				font-size: 28rpx;
				margin: 22rpx auto;
				text-align: center;
			}
</style>