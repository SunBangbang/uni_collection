<template>
	<view class="container index">
		<nav-header>藏品转赠</nav-header>
		<!-- 内容区 -->
		<view class="content">

			<view class="operation" v-if="status==2">
				请确认本人操作
			</view>


			<view class="img">
				<image src="@/static/index/details/passon.png" mode="" style="width: 76rpx;height: 88rpx;"
					v-if="status==1"></image>
			</view>
			<view class="img2">
				<image :src="img" mode="" style="width: 276rpx;height: 276rpx;" v-if="status==2">
				</image>
			</view>
			
			<view class="confirm" v-if="status==2">
				<view class="">
					是否确认将藏品
				</view>
				<view class="">
					{{goods_name}}
				</view>
				<view class="">
					赠送给用户"{{username}}"
				</view>
			</view>

			<view class="placeholder" v-if="status==1">
				请输入对方账号
			</view>
			<view class="input" v-if="status==1">
				<input type="text" placeholder="请输入对方钱包地址/手机号" v-model="phone">
			</view>

			<view class="btn" v-if="status==1" @click="search">
				<view class="">
					下一步
				</view>
			</view>
			<view class="btn" v-if="status==2" @click="show=true">
				<view class="">
					确认
				</view>
			</view>

		</view>
		<!-- 内容区 结束-->
		
		<!-- 弹出框 结束-->
		<!-- 输入交易密码弹出 -->
	<!-- 	<u-popup :show="show" @close="show=false" @open="open" mode="center" :closeable="true" >
		            <view class="pop_">
		                <text>出淤泥而不染，濯清涟而不妖</text>
		            </view>
				</u-popup> -->
				<view class="pop_down" v-if="show" >
					<view class="pop_content">
						<view class="">
							<image src="../../../../static/index/details/close.png" mode="widthFix" style="width: 80rpx;" @click="show=false"></image>
						</view>
						<view class="">
							验证支付密码
						</view>
						<view class="">
							请验证支付密码确认本人操作
						</view>
						<view class="">
							<u-code-input v-model="trapasswrod" :maxlength="6" :focus="true" @finish="finish"></u-code-input>
						</view>
					</view>
				</view>
		<!-- 输入交易密码弹出 结束-->
		<!-- 弹出框 -->
		

		<view class="tips">
			温馨提示
			1.数字藏品是使用区块链技术生成的唯一数字凭证，藏品转赠后无法退还，还请您谨慎操作；
			2.数字藏品是使用区块链技术生成的唯一数字凭证，藏品转赠后无法退还，还请您谨慎操作；
			3.数字藏品是使用区块链技术生成的唯一数字凭证，藏品转赠后无法退还，还请您谨慎操作；
			4.数字藏品是使用区块链技术生成的唯一数字凭证，藏品转赠后无法退还，还请您谨慎操作。
		</view>

	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onLoad(e) {
			this.id=e.id
			this.goods_name=e.goodsname
			this.id=e.id
			this.img=e.img
			this.type=e.type
		},
		data() {
			return {
				status: 1,   //1页面第一状态 未搜索状态  2搜索到用户状态
				show:false, //验证码弹窗框状态
				trapasswrod:"", //支付密码弹出框
				phone:"",   //手机号或者hash值
				id:"",	//藏品id
				username:"", //用户名称
				goods_name:"",  //藏品名称
				img:"",
				type:""  //1藏品 2盲盒
				
			}
		},
		methods:{
			// 提交密码
			finish(){
				if(this.type==1){
					this.show=false
					// id,phone,password
					this.api.givesome(this.id,this.phone,this.trapasswrod).then(res=>{
						this.trapasswrod=""
						if(res.code==1){
							uni.showToast({
								title:"赠送成功",
								icon:"success"
							})
							setTimeout(()=>{
								this.$api.rdt("/pages/my/passonhistory/passonhistory")
							},1500)
						}
					})
				}else if(this.type==2){
					this.show=false
					// id,phone,password
					this.api.givesome_box(this.id,this.phone,this.trapasswrod).then(res=>{
						this.trapasswrod=""
						if(res.code==1){
							uni.showToast({
								title:"赠送成功",
								icon:"success"
							})
							setTimeout(()=>{
								this.$api.rdt("/pages/my/passonhistory/passonhistory")
							},1500)
						}
					})
				}
				
			},
			search(){
				uni.showToast({
					title:"搜索中",
					icon:"loading"
				})
				this.api.search_user(this.phone).then(res=>{
					
					if(res.code==1){
						uni.hideToast()
						this.username=res.data.nickname
						this.status=2
					}
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.content {
		width: 710rpx;
		/* height: 832rpx; */
		background: #F0EFFD;
		border-radius: 40rpx;
		margin: 24rpx auto;
		box-sizing: border-box;
		padding-top: 120rpx;
		padding-bottom: 100rpx;
	}

	.operation {
		text-align: center;
		font-size: 40rpx;
		font-weight: 400;
		margin: 30rpx auto;
	}

	.img {
		margin: 0 auto 94rpx auto;
		text-align: center;
	}
	.img2{
		margin: 0 auto 30rpx auto;
		text-align: center;
	}
	.placeholder {
		box-sizing: border-box;
		padding: 0 30rpx;
		color: #6B61E7;
		font-size: 30rpx;
	}

	.confirm {
		font-size: 30rpx;
		text-align: center;
		margin: 0 auto;
	}
	.confirm>view:first-child{
		font-size: 30rpx;
		font-weight: 400;
	}
	.confirm>view:nth-child(2){
		
		/* width: 50rpx; */
		padding: 0 10rpx;
		height: 62rpx;
		background: #fff;
		border-radius: 8rpx;
		margin: 24rpx auto;
		line-height: 62rpx;
		
	}

	.input {
		margin: 30rpx auto 126rpx auto;
		display: flex;
		justify-content: center;
	}

	.content input {
		width: 650rpx;
		height: 104rpx;
		background: #fff;
		border-radius: 8rpx;
		text-indent: 30rpx;
	}
	.btn {
		width: 646rpx;
		height: 80rpx;
		/* background: linear-gradient(135deg, #FFFFFF 0%, #343434 100%); */
		background:#948DED;
		text-align: center;
		margin: 46rpx auto 0 auto;
		color: #fff;
		border-radius: 164rpx;
		line-height: 88rpx;
		display: flex;
		justify-content: flex-end;
	}

	.btn>view {
		align-self: center;
		/* background: #1C1C1E; */
		width: 640rpx;
		height: 76rpx;
		border-radius: 164rpx;
	}

	.tips {
		width: 710rpx;
		height: auto;
		margin: 40rpx auto 0 auto;
		font-size: 26rpx;
		color: #999999;
		font-weight: 400;

		line-height: 44rpx;
	}
	.pop_down>view{
		width: 630rpx;
		height: 516rpx;
		background: #ffffff;
		border-radius: 40rpx;
		color: #000;
		
	}
	.pop_content>view:first-child{
		margin: 16rpx 22rpx;
	}
	.pop_content>view:nth-child(2){
		text-align: center;
		font-size: 48rpx;
		font-weight: 400;
		margin-top: 24rpx auto;
	}
	.pop_content>view:nth-child(3){
		color: #999999;
		text-align: center;
		font-size: 32rpx;
		font-weight: 400;
		margin: 24rpx auto 0 auto;
	}
	.pop_content>view:nth-child(4){
		color: #000;
		text-align: center;
		font-size: 32rpx;
		font-weight: 400;
		margin: 60rpx auto 0 auto;
	}
	.pop_content>view:nth-child(4) view{
		/* margin: 0 auto; */
		display: flex;
		justify-content: center;
	}
</style>
