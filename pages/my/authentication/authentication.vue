<template>
	<view class="authentication container">
		<nav-header>实名认证</nav-header>
		
		<!-- 未认证样式 -->		
			<input-sz :ph="'请输入真实姓名'" :label="'真实姓名'" @input_content="nameMethods" :val="v1"></input-sz>
			<view class="" style="margin-top: 24rpx;"></view>
			<input-sz :ph="'请输入身份证号'" :label="'身份证号'" @input_content="idMethods" :val="v2"></input-sz>

		<view class="tips">
			<view class="">
				<image src="../../../static/my/authentication/safe.png" mode="widthFix" style="width: 52rpx;"></image>
			</view>
			<view class="" v-if="showbtn">
				信息安全保障中，信息仅用于身份确认
			</view>
			<view class="" v-else>
				您已经认证了哦！
			</view>
		</view>
		
		<!-- 身份证上传 -->
	<!-- 	<view class="identity">
			<view class="title">
				请上传身份证
			</view>
			<view class="stitle">
				确保证件清晰完整
			</view>
			<view class="idcard" @click="upPositive">
				<image :src="positive?positive:'../../../static/my/authentication/positive.png'" mode="widthFix"></image>
			</view>
			<view class="idcard" @click="upUnPositive">
				<image :src="unpositive?unpositive:'../../../static/my/authentication/unpositive.png'" mode="widthFix"></image>
			</view>
		</view> -->
		<!-- 身份证上传 结束-->
		
		<view class="btn systemBcg colorBlack" @click="authentication" v-if="showbtn">
			确定
		</view>

		<view class="tips_bottom" v-if="showbtn">
			注：一张身份证只能认证一个手机账号，无法认证多个账号，且无法修改认证，请谨慎操作。<br/>为防止机器刷注册需支付一元实名验证费，请确保您的余额上有一元
		</view>
		<!-- 未认证样式 结束-->
		<u-modal :show="errshow" title="认证失败" @confirm="errconfirm" :content='errmsg'></u-modal>
	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	import inputSz from "@/components/my/input_sz.vue"
	export default{
		components:{
			navHeader,
			inputSz
		},
		onShow() {
			this.get_userinfo()
		},
		
		data(){
			return{
				// 名称
				name:"",
				//身份证号
				errshow:false,
				errmsg:"",
				id:"",
				//身份证正面图
				positive:"",
				//身份证背面图
				unpositive:"",
				// 是否认证
				isauthentication:false,
				// 用户信息
				userinfo:"",
				v1:"",
				v2:"",
				showbtn:true
			}
		},
		methods:{
			get_userinfo(){
				
				this.api.get_user_info()
				this.userinfo=uni.getStorageSync("user_info")
				if(this.userinfo.is_cert==1){
					this.v1=this.userinfo.username
					this.v2=this.userinfo.card
					this.showbtn=false
				}else{
					//this.errshow = true
					//this.errmsg = "注意:实名验证的身份证信息需要与手机号的实名信息一致，否则认证失败，为防止机器刷注册需支付一元实名验证费，请确保您的余额上有一元"
					this.$api.pop("注意:实名验证的身份证信息需要与手机号的实名信息一致，否则认证失败");
				}
			},
			//表单组件传回来的值 复制到当前data
			nameMethods(e){
				this.name=e
				console.log(this.name)
			},
			//表单组件传回来的值 复制到当前data
			idMethods(e){
				this.id=e
			},
			errconfirm(){
				this.errshow=false
			},
			//上传获取身份证正面图
			upPositive(){
				var that=this
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: function (res) {
						that.positive=res.tempFilePaths[0]
						// console.log(res)
					
					}
				})
			},
			//上传身份证背面图
			upUnPositive(){
				var that=this
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: function (res) {
						that.unpositive=res.tempFilePaths[0]
						// console.log(res)
					
					}
				})
			},
			//提交认证
			authentication(){
				uni.showToast({
					title:"提交中"
				})
				
				this.api.authentication(this.name,this.id).then(res=>{
					uni.hideToast()
					if(res.code==1){
						uni.showToast({
							title:"认证成功"
						})
						setTimeout(()=>{
							this.$api.totabar("/pages/my/my")
						},500)
					}else{
						
						this.errshow = true
						this.errmsg = res.info
					}
				})
			}
		}
	
	}
</script>

<style scoped>
	.authentication{
		box-sizing: border-box;
		padding-top: 124rpx;
		display: flex;
		flex-direction: column;
	}
	.line{
		width: 670rpx;
		height: 1rpx;
		background: #ccc;
		margin: 0 auto;
	}
	.input_box{
		background: #fff;
		
	}
	.btn{
		width: 683rpx;
		height: 88rpx;
border-radius: 174rpx;
/* background: #FA4485; */
text-align: center;
line-height: 88rpx;
/* color: #fff; */
margin: 0 auto;
font-size: 32rpx;
letter-spacing: 2rpx;
/* position: fixed;
bottom: 100rpx;
left: 50%;
transform: translateX(-50%); */
margin-top: auto;
	}
	.identity{
		margin: 60rpx auto;
		text-align: center;
	}
	.title{
		font-size: 40rpx;
		color: #333;
		font-weight: 600;
		letter-spacing: 24rpx;
	}
	.stitle{
		font-weight: 400;
		font-size: 26rpx;
		margin-top: 12rpx;
	}
	.idcard{
		margin: 60rpx auto;
	}
	.tips{
		display: flex;
		color: #999999;
		font-size: 32rpx;
		margin-top: 30rpx;
	}
	.tips>view{
		align-self: center;
		
	}
	.tips image{
		display: block;
	}
	.tips_bottom{
		/* margin-top: auto; */
		box-sizing: border-box;
		padding: 16rpx;
		font-size: 28rpx;
		color: #999;
	}
</style>