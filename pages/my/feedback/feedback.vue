<template>
	<view class="container index">
		<nav-header>意见反馈</nav-header>

		<textarea name="" v-model="content" id="textare" cols="30" rows="10" maxlength="500"
			placeholder="请输入您的意见(500字以内)"></textarea>

		<view class="contact">
			<view class="">
				联系方式
			</view>
			<view class="">
				{{phone}}
			</view>
		</view>

		<!-- 上传图片部分 -->
		<view class="pic">
			<view class="">
				上传图片(最多6张)
			</view>
			<view class="">
				<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
					:maxCount="10"></u-upload>
			</view>
		</view>
		<!-- 上传图片部分 结束-->

		<!-- 提交按钮 -->
		<view class="btn" @click="subcontent">
			提交
		</view>
		<!-- 提交按钮 结束-->


	</view>
</template>

<script>
	import navHeader from "@/components/my/nav_header.vue"
	export default {
		components: {
			navHeader
		},
		data() {
			return {
				fileList1: [],
				uploadList1: [],
				content: "",
				phone: ""
			}
		},
		onLoad() {
			this.phone = uni.getStorageSync('user_info').phone
		},
		methods: {
			subcontent() {
				// console.log(this.uploadList1)
				this.api.feedback(this.uploadList1, this.content).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: "提交成功"
						})
						setTimeout(() => {
							this.fileList1 = []
							this.uploadList1 = []
							this.content = ''
						}, 500)

					}
					console.log(res)
				})
			},


			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
				this[`uploadList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)

					let item = this[`fileList${event.name}`][fileListLen]

					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}

			},
			async uploadFilePromise(url) {
				this.$api.upload(url)
				console.log(await this.$api.upload(url))
				this.uploadList1.push(await this.$api.upload(url))

			},
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
		display: flex;
		flex-direction: column;
	}

	#textare {
		width: 710rpx;
		height: 500rpx;
		background: #fff;
		border-radius: 16rpx;
		margin: 24rpx auto;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.contact {
		width: 710rpx;
		height: 88rpx;
		border-radius: 16rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 54rpx 0 30rpx;
		background: #fff;
		margin: 24rpx auto;
		line-height: 88rpx;
		font-size: 30rpx;
	}

	.pic {
		width: 710rpx;
		/* height: 250rpx; */
		background: #fff;
		border-radius: 16rpx;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 30rpx;

		font-size: 28rpx;
		color: #999999;
	}

	.pic>view:nth-child(2) {
		margin-top: 16rpx;
		margin-right: 30rpx;
	}

	.btn {
		width: 710rpx;
		height: 88rpx;
		border-radius: 110rpx;
		text-align: center;
		line-height: 88rpx;
		background: #6B61E7;
		font-size: 32rpx;
		letter-spacing: 2rpx;
		font-weight: 400;
		color: #fff;
		margin: 60rpx auto;
	}
</style>
