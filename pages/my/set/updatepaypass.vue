<template>
	<view class="container index">
		<nav-header>修改支付密码</nav-header>
		<!--view class="">
			<my-input :reserve="false" :ph="'请输入旧密码'" :type="'number'" :label="'旧密码'" @input_content="oldPwd_content"
></my-input>
		</view-->

		<view class="">
			<my-input :reserve="false" :ph="'请输入新密码'" :type="'number'" :label="'新密码'" @input_content="newPwd_content"
></my-input>
		</view>

		<view class="">
			<my-input :reserve="false" :ph="'请再次输入新密码'" :type="'number'" :label="'新密码'" @input_content="truePwd_content"
></my-input>
		</view>

		<view class="">
			<my-input :reserve="false" :ph="'验证码'" :type="'number'" :label="'验证码'" @input_content="verify_content"
 ></my-input>
		</view>
		
		<view class="code_input">
			<view class="sendcode" @click="sendCode" v-if="count2<=0"> 
					获取验证码
			</view>
			<view class="sendcode" v-else>
					{{count2}}秒后重试
			</view>
		</view>

		<view class="btn_box">
			<view class="" @click="confirm">
				确认修改
			</view>

		</view>


	</view>
</template>

<script>
	import myInput from "@/components/my/input_sz.vue"
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		data() {
			return {
				verify: "",  //验证码
				oldPwd: "", //新密码
				newPwd: "", //旧密码
				truePwd: "",//确认密码
				typecode:true, //验证码发送后的状态
				count2:0 ,   //倒计时
				time:""   //定时器全局控制器
			}
		},
		components: {
			myInput,
			navHeader
		},
		onHide() {
			clearInterval(this.time)
		},
		methods: {
			sendCode(){
				/*
				this.count2=5
				this.time=setInterval(()=>{
					--this.count2
					if(this.count2<=0){
						this.count2=0
						clearInterval(this.time)
					}
				},1000)*/
				this.api.smsCodeWithLogin(2).then(res => {
					if (res.code == 1) {
						this.$api.pop(res.info)
						this.count2 = 60
						setInterval(() => {
							if (this.count2 <= 0) {
								this.count2 = 0
								return
							}
							--this.count2
						}, 1000)
					}
				})
				
			},
			//验证码赋值
			verify_content(e) {
				this.verify = e
			},
			//旧密码赋值
			oldPwd_content(e) {
				this.oldPwd = e
			},
			//新密码赋值
			newPwd_content(e) {
				this.newPwd = e
			},
			//确认密码赋值
			truePwd_content(e) {
				this.truePwd = e
			},
			//提交修改
			confirm() {
				this.api.update_paypass(this.verify, this.oldPwd, this.newPwd, this.truePwd).then(res => {
					if (res.code == 1) {
						this.$api.pop("修改成功")
						setTimeout(() => {
							this.$api.totabar("/pages/my/my")
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 160rpx;
	}

	.index>view {
		margin-bottom: 50rpx;
	}

	.btn_box {
		width: 640rpx;
		height: 84rpx;
		background: linear-gradient(143deg, #FFFFFF 0%, #343434 100%);
		border-radius: 164rpx;
		text-align: center;
		line-height: 84rpx;
		color: #fff;
		font-size: 34rpx;
		letter-spacing: 4rpx;
		text-align: center;
		display: flex;
		margin:30rpx auto;
	}
	
	.btn_box>view {
		align-self: center;
		width: 636rpx;
		height: 80rpx;
		/* background: #1C1C1E; */
		background: #6B61E7;
		border-radius: 164rpx;
		margin-left: auto;
		text-align: center;
	}
	.code_input{
		display: flex;
		justify-content: center;
	}
	.sendcode{
		height: 80rpx;
		width: 420rpx;
		border-radius: 16rpx;
		background: #6B61E7;
		line-height: 80rpx;
		text-align: center;
		color: #fff;
		
	}
</style>
