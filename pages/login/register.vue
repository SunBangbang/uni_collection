<template>
	<view class="register container">
		
		<view class="title colorWhite">
			<view class="">
				注册
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
				<view class="systemColor" @click="sendCode" v-if="count<=0">
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
		<view class="input_item">
					<view class="label">
						支付密码
					</view>
					<view class="">
						<input type="password" v-model="paypwd">
					</view>
				</view>
			<view class="input_item">
				<view class="label">
					邀请码(非必填)
				</view>
				<view class="">
					<input type="number" v-model="icode">
				</view>
			</view>

		</view>


		<view class="login_btn systemBcg colorBlack" @click="register">
			注册
		</view>

		<view class="gologin">
			已有账号，<text class="systemColor" @click="rdt('/pages/login/login')">立即登录</text>
		</view>


	</view>
</template>

<script>
	//import { Geetest } from "@/common/captchaObj.js"
	//const loginValidate = new Geetest('714ae136a3e16a0808e7d569290734d6');
	export default {
		data() {
			return {
				tel: "",
				pwd: "",
				repwd: "",
				code: "",
				icode: "",
				count: 0,
				paypwd:"",
				time:""
			}
		},
		onLoad(e) {
			if(e.code=="undefined"||e.code==null){
				this.icode=""
			}else{
				this.icode=e.code
			}
			
		},
		onHide() {
			clearInterval(this.time)
		},
		methods: {
			async sendCode() {
				
			/*	this.count = 5
				this.time=setInterval(() => {
					
					if (this.count <= 0) {
						clearInterval(this.time)
						this.count = 0
						return
					}
					--this.count
				}, 1000)*/
				 this.api.smsCode(this.tel,1).then(res => {
				 	if (res.code == 1) {
				 		this.$api.pop(res.info)
				 		this.count = 60
				 		setInterval(() => {
							if (this.count <= 0) {
				 				this.count = 0
								return
				 			}
				 			--this.count
			 		}, 1000)
				 	}
				 }).catch(e=>{
					 console.log(e)
				 })
			},
			register() {
				if(this.icode==null || this.icode==undefined){
					this.icode==""
				}
				var pwd= this.$md5(this.pwd)
				var repwd = this.$md5(this.repwd)
				var paypwd = this.paypwd
				this.api.register(this.tel, pwd, repwd, this.code, this.icode,paypwd).then(res => {
					if (res.code == 1) {
						this.$api.pop("注册成功")
						setTimeout(() => {
							this.$api.rdt("/pages/login/login")
						}, 1500)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.register {
		box-sizing: border-box;
		/* padding-top: 142rpx; */
		padding-top: 72rpx;
	}

	.title {
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

	.login_content {
		/* margin-top: 140rpx; */
		margin-top: 70rpx;
		margin-left: 100rpx;
	}

	.input_item {
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

	input {
		/* margin-left: 20rpx; */
		min-width: 200rpx;
		max-width: 360rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-indent: 30rpx;
	}

	.label {
		width: 250rpx;
	}


	.sendcode_count {
		font-size: 24rpx;
		text-align: right;
		width: 200rpx;
	}

	.login_btn {
		width: 550rpx;
		height: 100rpx;
		font-size: 32rpx;
		line-height: 100rpx;
		margin: 0 auto;
		margin-top: 80rpx;
		text-align: center;
		border-radius: 138rpx;
	}

	.gologin {
		font-size: 28rpx;
		margin: 22rpx auto;
		text-align: center;
	}

	.login_view {
		width: 52rpx;
		height: 52rpx;
		border-radius: 4rpx;
		background: #6B61E7;

	}
</style>
