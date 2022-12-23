<template>
	<view class="index container">

		<nav-header>个人信息</nav-header>

		<view class="content">

			<view class="row" v-for="(item,index) in list" :key="index" @click="clickitem(item.e)">
				<view class="">
					{{item.name}}
				</view>
				<view class="" v-if="item.showimg">
					<image :src="item.img || '../../../static/index/headimg.png'" mode=""
						style="width: 88rpx;height: 88rpx;border-radius: 50%;"></image>
				</view>
				<view class="" v-else>
					{{item.right}}
				</view>
				<view class="">
					<image src="../../../static/my/arrow_right.png" mode="widthFix" style="width: 48rpx;"></image>
				</view>
			</view>


		</view>

		<!-- 修改名称弹出框 -->
		<view class="pop_ocy" v-if="show_set_name">
			<view class="pop_content">
				<u--input placeholder="请输入要修改的昵称" border="surround" v-model="value" :color="'#fff'" :maxlength="'12'">
				</u--input>
				<view class="btn">
					<view class="systemBcg" @click="setname">
						修改
					</view>
					<view class="systemBcg" @click="show_set_name=false">
						取消
					</view>
				</view>
			</view>
		</view>
		<!-- 修改名称弹出框 结束-->



	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		onShow() {
			this.get_user_info()
		},
		data() {
			return {
				userinfo: {},
				list: [{
						name: "头像",
						showimg: true,
						right: "",
						img: "",
						e: "1"
					},
					{
						name: "昵称",
						showimg: false,
						right: "",
						img: "",
						e: "2"
					},
					// {name:"钱包地址",showimg:false,right:"",img:"",e:"3"},
					{
						name: "手机号",
						showimg: false,
						right: "",
						img: "",
						e: "4"
					}
				],
				value: "",
				show_set_name: false
			}
		},
		methods: {
			//当前行数点击事件
			clickitem(e) {
				if (e == 1) {
					this.choosePhoto()
				} else if (e == 2) {
					this.show_set_name = true
				}else if(e == 4){
					this.$api.to("/pages/my/userinfo/bindphone/bindphone")
				}
			},
			//获取用户信息
			get_user_info() {
				this.api.get_user_info()
				this.user_info = uni.getStorageSync("user_info")
				this.list[0].img = this.user_info.headimg
				this.list[1].right = this.user_info.nickname
				this.list[2].right = this.user_info.phone
				// console.log(this.list)
			},
			//选择图片当头像
			choosePhoto() {
				var that = this
				uni.chooseImage({
					count: 1, //最多可以选择的图片张数，默认9
					sourceType: ['album'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					sizeType: ['original'], //original 原图，compressed 压缩图，默认二者都有
					success(res) {
						console.log('选择图片完成', res)
						// 调用上传图片的接口
						// this.uploadPhoto(res.tempFilePaths);
						// that.list[0].img=res.tempFilePaths[0]
						//上传图片
						that.$api.upload(res.tempFilePaths[0]).then(res => {
							// console.log(res)
							//请求设置个人信息借口
							that.api.set_user_info("", res).then(res1 => {
								if (res1.code == 1) {

									uni.showToast({
										title: "更换头像成功"
									})
									that.get_user_info()
								}
							})
						})
					},
					fail() {
						console.log('失败', err);
					},
					complete() {
						console.log('结束');
					},
				})
			},
			setname() {
				//修改个人名称
				this.api.set_user_info(this.value, "").then(res1 => {
					if (res1.code == 1) {
						uni.showToast({
							title: "修改名称成功"
						})
						this.get_user_info()
						//关闭弹出层
						this.show_set_name = false
						//渲染当前名称
						this.list[1].right = res1.data.nickname
					}
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

	image {
		display: block;
	}

	.content {
		margin: 20rpx auto;
	}

	.row {
		display: flex;
		background: #fff;
		width: 710rpx;
		height: 120rpx;
		margin: 0 auto;
		border-radius: 24rpx;
		margin-bottom: 24rpx;
	}

	.row>view {

		align-self: center;
		box-sizing: border-box;
		padding: 0 14rpx 0 30rpx;

	}

	.row>view:nth-child(2) {
		margin-left: auto;
	}

	.row>view:nth-child(3) {
		/* margin-left: auto; */
	}

	.btn {
		/* width: 710rpx; */
		display: flex;
		justify-content: space-between;
	}

	.btn>view {
		width: 170rpx;
		height: 58rpx;
		border-radius: 32rpx;
		margin-top: 50rpx;
		text-align: center;
		line-height: 58rpx;
		font-size: 26rpx;
		color: #fff;
	}

	.btn>view:last-child {
		width: 170rpx;
		height: 58rpx;
		border-radius: 32rpx;
		margin-top: 50rpx;
		text-align: center;
		line-height: 58rpx;
		font-size: 26rpx;
		color: #000;
	}

	.pop_content {
		width: 450rpx;
	}
</style>
