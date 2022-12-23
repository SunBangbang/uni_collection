<template>
	<view class="login">

		<!-- 获取隐私权限弹框 -->
		<!-- <pop-jurisdiction v-if="Jur" @closeJur="Jur=false;Privacy=true;setInSystem()"></pop-jurisdiction> -->
		<!-- 获取隐私权限弹框 结束-->

		<!-- 获取权限弹框 -->
		<!-- <pop-privacy v-if="Privacy" @closePrivacy="Privacy=false"></pop-privacy> -->
		<!-- 获取权限弹框 结束-->


		<view class="logincontent">
			<!-- logo部分 -->
			<view class="title">
				<view class="">
					登录
				</view>
				<view class="">
					Mo未来 <!--view class="login_view"></view-->
				</view>
			</view>
			<!-- logo部分 结束-->

			<!-- 手机号登录 -->
			<view class="login_content" v-if="loginType==1">
				<!-- 输入框部分 -->
				<!-- 手机号 -->
				<view class="input_item">
					<view class="">
						手机号
					</view>
					<view class="">
						<input type="number" v-model="tel">
					</view>
				</view>
				<!-- 手机号 结束-->
				<!-- 密码 -->
				<view class="input_item">
					<view class="">
						密&nbsp;&nbsp;&nbsp;&nbsp;码
					</view>
					<view class="">
						<input type="password" v-model="pwd">
					</view>
				</view>
				<!-- 密码 结束-->
			</view>
			<!-- 输入框部分结束 -->
			<view class="tools" v-if="loginType==1">
				<view class="" @click="rdt('/pages/login/forgetpassword')">
					忘记密码
				</view>
				<view class="" @click="rdt('/pages/login/register')">
					立即注册
				</view>
			</view>
			<!-- 手机号登录 结束-->

			<!-- 验证码登录-->
			<view class="login_content" v-if="loginType==2">
				<!-- 输入框部分 -->
				<!-- 手机号 -->
				<view class="input_item">
					<view class="">
						手机号
					</view>
					<view class="">
						<input type="number" v-model="tel">
					</view>
				</view>
				<!-- 手机号 结束-->

				<!-- 密码 -->
				<view class="input_item">
					<view class="">验证码</view>
					<view class="">
						<input type="number" v-model="code">
					</view>
					<view class="sendcode" @click="sendCode" v-if="count<=0">
						获取验证码
					</view>
					<view class="sendcode_count" v-else>
						{{count}}秒后重新发送
					</view>
				</view>
				<!-- 密码 结束-->
			</view>
			<!-- 输入框部分结束 -->
			<view class="tools" v-if="loginType==2">
				<view>
					未注册的手机号验证后自动创建羲州账号
				</view>
				<view>
					<!-- 未注册的手机号验证后自动创建羲州账号 -->
				</view>
			</view>
			<!-- 验证码登录 结束-->

			<!-- 登录按钮 -->
			<view class="login_btn" @click="login">
				登录
			</view>
			<!-- 登录按钮 结束-->
			<!-- 用户协议 -->
			<view class="agreement">
				<!-- 是否选中样式 -->
				<view class="">
					<view class="circle_checked" v-if="confim" @click="confim=false"></view>
					<view class="circle" v-else @click="confim=true"></view>
				</view>
				<view class="">
					注册/登陆即视为同意<text class="blue" @click="href('/pages/my/set/relevant?type=1')">《用户协议》</text>与<text
						class="blue" @click="href('/pages/my/set/relevant?type=2')">《隐私政策》</text>
				</view>
				<!-- 是否选中样式 结束-->
			</view>
			<!-- 用户协议 结束-->
		</view>


		<!-- 切换验证码或者密码登录 -->
		<!--view class="changeType">
			<view @click="loginType=2" :class="loginType==2?'colorWhite':'colorGray'">
				验证码登录
			</view>
			<view class="line">
				|
			</view>
			<view @click="loginType=1" :class="loginType==1?'colorWhite':'colorGray'">
				密码登录
			</view>
		</view-->
		<!-- 切换验证码或者密码登录 结束-->

	</view>



	</view>
</template>

<script>
	//隐私政策弹框
	import popJurisdiction from "../login/pop/jurisdiction.vue"
	import popPrivacy from "../login/pop/privacy.vue"
	export default {
		components: {
			popJurisdiction,
			popPrivacy
		},
		data() {
			return {
				//是否同意授权登录
				confim: false,
				//动画类名
				add_class: "",
				//是否显示隐私弹框
				Jur: false,
				//是否显示权限谈款
				Privacy: false,
				// 账号
				// tel: "",
				tel: "xiaoma",
				// 密码
				// pwd: "",
				pwd: "XIAOma123456.",
				// 验证码还是密码登录 2 验证码登录 1 密码登录
				loginType: 1,
				// 手机验证码
				code: "",
				// 验证码倒计数
				count: 0,
				time:""
			}
		},
		onLoad() {

			//判断是否是第一次打开系统
			// #ifdef APP
			if (!uni.getStorageSync("isInSystem")) {
				this.Jur = true
			}
			// #endif

			// #ifdef H5
			if (uni.getStorageSync("isInSystemH5") == "" || uni.getStorageSync("isInSystemH5") == null) {
				this.Jur = true
			}
			// #endif

		},
		watch: {

		},
		onHide() {
			clearInterval(this.time)
		},
		methods: {
			setInSystem() {
				// #ifdef APP
				uni.setStorageSync("isInSystem", "true")
				// #endif
				// #ifdef H5
				uni.setStorageSync("isInSystemH5", "true")
				// #endif
			},
			login() {
				if (!this.confim) {
					this.$api.pop("请选勾选用户协议及隐私政策")
					return;
				} else {
					//判断密码登录 还是 验证码登录
					if(this.loginType==2){
						this.api.loginVer(this.tel, this.code).then(res => {
							console.log(res)
							if (res.code == 1) {
								uni.setStorageSync("user_info", res.data)
								uni.setStorageSync("token", res.data.token.token)
								this.$api.pop("登录成功")
								this.tel = ""
								this.code = ""
								setTimeout(() => {
									this.$api.totabar("/pages/index/index")
								}, 500)
							}
						})
					}else if(this.loginType==1){
						var pwd= this.$md5(this.pwd)
						this.api.login(this.tel, pwd).then(res => {
							console.log(res)
							if (res.code == 1) {
								uni.setStorageSync("user_info", res.data)
								uni.setStorageSync("token", res.data.token.token)
								this.$api.pop("登录成功")
								this.tel = ""
								this.pwd = ""
								setTimeout(() => {
									this.$api.totabar("/pages/index/index")
								}, 500)
							}
						})
					}
					
			



				}

			},
			// 发送验证码
			sendCode() {
				this.count = 5
				this.time=setInterval(() => {
					if (this.count <= 0) {
						clearInterval(this.time)
						this.count = 0
						return
					}
					--this.count
				}, 1000)
				// this.api.smsCode(this.tel).then(res=>{
				// 	if(res.code==1){
				// 	this.$api.pop(res.info)
				// 	this.count=60
				// 	setInterval(()=>{
				// 		if(this.count<=0){
				// 			this.count=0
				// 			return
				// 		}
				// 		--this.count
				// 	},1000)
				// 	}
				// })
			},

		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100vh;
		background: #fff;
		overflow-x: hidden;
		color: #000;
	}

	.title {
		font-size: 46rpx;
		text-align: left;
		/* margin-top: 242rpx; */
		margin-top: 142rpx;
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

	.login_content {
		margin-top: 140rpx;
		margin-left: 100rpx;
	}

	.input_item {
		display: flex;
		border-bottom: 1px solid #666666;
		width: 550rpx;
		height: 70rpx;
		/* background: #FA4485; */
		font-size: 32rpx;
		position: relative;
	}

	.input_item>view:first-child {
		width: 140rpx;
		/* background: #6B61E7; */
		line-height: 70rpx;
	}



	.input_item:last-of-type {

		margin-top: 80rpx;
	}

	input {
		height: 70rpx;
		line-height: 70rpx;
		margin-left: 30rpx;
	}

	.tools {
		width: 550rpx;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin: 40rpx auto;
	}

	.tools>view:first-child {

		color: #999999;
	}

	.tools>view:last-child {

		color: #6B61E7;
	}

	.blue {
		color: #6B61E7;
	}

	.login_btn {
		width: 550rpx;
		height: 100rpx;
		color: #fff;
		background: #6B61E7;
		font-size: 32rpx;
		line-height: 100rpx;
		margin: 0 auto;
		margin-top: 110rpx;
		text-align: center;
		border-radius: 138rpx;
	}

	.agreement {
		width: 550rpx;
		margin: 24rpx auto;
		font-size: 28rpx;
		display: flex;
		/* justify-content: space-around; */
		color: #999999;
		text-align: left;
		text-indent: 14rpx;
	}

	.circle {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		border: 1px solid #999999;
	}

	.circle_checked {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		background: #6B61E7;
		border: 1px solid #6B61E7;
	}

	.changeType {
		margin: 0 auto;
		/* margin-top: 346rpx; */
		margin-top: 146rpx;
		width: 432rpx;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
	}

	.colorWhite {
		color: #000;
	}

	.colorGray {
		color: #999999;
	}

	.sendcode {
		color: #6B61E7;
		font-size: 24rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: right;
		width: 200rpx;
		position: absolute;
		right: 0;
	}

	.sendcode_count {
		color: #6B61E7;
		font-size: 24rpx;
		height: 70rpx;
		line-height: 70rpx;
		width: 200rpx;
		position: absolute;
		right: 0;
	}
</style>
