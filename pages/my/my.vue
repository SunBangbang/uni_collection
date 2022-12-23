<template>
	<view class="index container">
		<!-- 头部导航 -->
		<nav-header :showback="false">个人中心</nav-header>
		<!-- 头部导航 -->
		<!-- 用户信息 -->
		<view class="user_info bcgBlack">
			<view class="">
				<image :src="user_info.headimg || '../../static/index/testimg.png'" mode="" style="height: 140rpx;width: 140rpx;border-radius: 50%;">
				</image>
			</view>
			<!-- 未登录状态 -->
			<view class="user_info_details" v-if="false">
				<view class="colorWhite">
					立即登录
				</view>
				<view class="">
					登录后可查看您的详细信息
				</view>
			</view>
			<!-- 未登录状态 结束-->
			<!-- 已登录装填 -->
			<view class="logined" v-else>
				<view class="colorWhite">
					{{user_info.nickname || '用户8888'}}
				</view>
				<view class="code">
					<view class="">
						推荐码：{{user_info.invite_code || '暂无'}} 
					</view>
					<view class="">
						<image src="@/static/my/copy.png" mode="widthFix" style="width: 44rpx;" @click="copy(user_info.invite_code)"></image>
					</view>
					<view class="" @click="href('/pages/my/userinfo/userinfo')">
						个人信息 >
					</view>
				</view>
				<view class="code">
					<view class="text_hide">
						区块地址：{{user_info.hash || '暂无'}} 
					</view>
					<view class="">
						<image src="@/static/my/copy2.png" mode="widthFix" style="width: 44rpx;" @click="copy(user_info.hash)"></image>
					</view>
				</view>
			</view>
			<!-- 已登录装填 结束-->

		</view>
		<!-- 用户信息 结束-->

		<!-- vip banner -->
		<view class="bula">
			<view class="" @click="href('/pages/my/order/order')">
				<text>订单</text>
			</view>
			
			<view class="" @click="href('/pages/my/passonhistory/passonhistory')">
				<text>转赠记录</text>
			</view>
			<view class="" @click="href('/pages/my/market_history/market_history')">
				<text>转售记录</text>
			</view>
			<view class="" @click="href('/pages/my/news/news')">
				<text>消息</text>
			</view>
			<view class="" @click="href('/pages/my/set/set')">
				<text>设置</text>
			</view>
			<view class="" @click="href('/pages/my/box_order/box_order')">
				<text>盲盒订单</text>
			</view>
		</view>
		<!-- vip banner 结束-->

		<!-- 底部功能栏 -->
		<view class="tools">

			<view class="tools_row" v-for="(item,index) in tools_list" :key="index" @click="href(item.e)">
				<view class="">
					<image :src="item.icon" mode="widthFix" style="width: 46rpx;"></image>
				</view>
				<view class="">
					{{item.name}}
				</view>
				<view class="">
					<image src="../../static/my/arrow_right.png" mode="widthFix" style="width: 44rpx;"></image>
				</view>
			</view>

		</view>
		<!-- 底部功能栏 -->

		<!-- 区块链logo -->
		<view class="bsn">
			<view class="">
				<image src="../../static/my/bsn.png" mode="" style="width: 240rpx;height: 60rpx;"></image>
			</view>
			<view class="">
				文昌链技术支持
			</view>
		</view>
		<!-- 区块链logo 结束-->



		



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
		onLoad(e) {
			//获取当前页面的url
			
			//const code = this.getUrlParam("code");
			//console.log("CODE:",code)
		},
		data() {
			return {
				//退出弹框
				wxcode:"",
				show_exit_pop: false,
				//用户信息
				user_info:{},
				//工具栏列表
				tools_list: [{
						name: "我的钱包",
						icon: require("../../static/my/icon2-2.png"),
						e:"/pages/my/wallet/wallet"
					},
					// {
					// 	name: "区块链信息查询",
					// 	icon: require("../../static/my/icon2-1.png")
					// },
					{
						name: "权益卡包",
						icon: require("../../static/my/icon2-3.png"),
						e:"/pages/my/card/card"
					},
					{
						name: "实名认证",
						icon: require("../../static/my/icon2-4.png"),
						e:"/pages/my/authentication/authentication"
					},
					{
						name: "我的推广",
						icon: require("../../static/my/icon2-5.png"),
						e:"/pages/my/invitation/invitation"
					},
					{
						name: "意见反馈",
						icon: require("../../static/my/icon2-6.png"),
						e:"/pages/my/feedback/feedback"
					},
					{
						name: "关于我们",
						icon: require("../../static/my/icon2-7.png"),
						e:"/pages/my/about/about"
					},
					{
						name: "好友排行",
						icon: require("../../static/my/icon2-9.png"),
						e:"/pages/my/ranking/ranking"
					}
				]
			}
		},
		methods: {
			//复制
			copy(val){
			this.$api.setclip(val)
			},
			getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
				var r = window.location.search.substr(1).match(reg); //匹配目标参数
				if (r != null) return unescape(r[2]);
				return null; //返回参数值
			},
			//获取用户信息
			get_user_info(){
				this.api.get_user_info()
			    this.user_info=uni.getStorageSync("user_info")
				
				if(this.user_info.openid2 == ""){
					if (this.is_weixin()) {
					   /* const code = this.wxcode; // 截取路径中的code
						//const code = this.getUrlParam("code");
						console.log(code)
					    if (code == null || code == "") {
					        let url = "";
					        let userAgent = navigator.userAgent;
					        if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
					            url = sessionStorage.getItem("originUrl");
					        } else {
					            url = window.location.href;
					        }
							if(url == "" || url == null){
								url = window.location.href;
							}
					        window.location.href =
					            "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa32098269917cc07&redirect_uri=" +
					            encodeURIComponent(url) +
					            "&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect";
					    }
						*/
					   //获取当前页面的url
						let link =window.location.href;
						console.log('我是请求的url')
						console.log(link)
						// let link = 'http://xxxxxx.com/?code=001vGk&state=123#/';
						let code = null;
						// 判断link中有没有code=字符串，  
						if (link.indexOf('code=') == -1) {
							console.log('我是需要授权页的判断')
							//没有code= 发请求
							let appid = 'wxa32098269917cc07';// 公众号的固定appid
							let uri = encodeURIComponent(link);// 编码后的回调地址
							let authURL =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
							window.location.href = authURL;
						} else {
							console.log('我是授权成功后跳转的页面')
							let temp = decodeURIComponent((new RegExp('[?|&]' + 'code' + '=' + '([^&;]+?)(&|#|;|$)').exec(link) || [,''])[1].replace(/\+/g, '%20')) || null
							//  回调函数已经执行 返回的链接存在code= 地址解析
							this.wxcode = temp;
							this.api.setOpenId(temp)
						}
					}
				}
				console.log(this.user_info)
			},
			is_weixin(){
			   var ua = navigator.userAgent.toLowerCase();
			   if(ua.match(/MicroMessenger/i)=="micromessenger") {
			       return true;
			   } else {
			       return false;
			   }
			}
		}
	}
</script>

<style scoped>
	.index {
		box-sizing: border-box;
		padding-top: 100rpx;
	}

	.user_info {
		width: 750rpx;
		height: 202rpx;
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;

	}
.logined {
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		
	}
	.logined >view:first-child{
		font-size: 40rpx;
		font-weight: 600;

		}
		.logined >view:nth-child(2){
			font-size: 24rpx;
		color: #6B61E7;
		margin-top: 8rpx;
		letter-spacing: 0;
			}
			.logined >view:nth-child(3){
				font-size: 24rpx;
				margin-top: 8rpx;
			color: #999999;
			letter-spacing: 0;
				}
	.user_info_details {
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		background: ;
	}

	.user_info_details>view:first-child {
		font-size: 40rpx;
		font-weight: 600;
	}

	.user_info_details>view:last-child {
		display: flex;
		font-size: 24rpx;
		font-weight: 400;
		margin-top: 16rpx;
		color: #FBFBFB;
		letter-spacing: 2rpx;
	}

	.user_info>view {
		align-self: center;
	}

	.bula {
		width: 710rpx;
		height: 140rpx;
		/* background: #1c1c1e; */
		margin: 44rpx auto;
		border-radius: 20rpx;
		display: flex;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 28rpx;
	}

	.bula>view:first-child text:before {
		content: "";
		display: block;
		height: 50rpx;
		width: 46rpx;
		background: url("@/static/my/icon-1.png");
		background-size: 100% 100%;
		margin: 15rpx auto;
	}

	.bula>view:nth-child(2) text:before {
		content: "";
		display: block;
		height: 50rpx;
		width: 46rpx;
		background: url("@/static/my/icon-2.png");
		background-size: 100% 100%;
		margin: 15rpx auto;
	}

	.bula>view:nth-child(3) text:before {
		content: "";
		display: block;
		height: 50rpx;
		width: 46rpx;
		background: url("@/static/my/icon-3.png");
		background-size: 100% 100%;
		margin: 15rpx auto;
	}

	.bula>view:nth-child(4) text:before {
		content: "";
		display: block;
		height: 50rpx;
		width: 46rpx;
		background: url("@/static/my/icon-4.png");
		background-size: 100% 100%;
		margin: 15rpx auto;
	}
.bula>view:nth-child(5) text:before {
		content: "";
		display: block;
		height: 50rpx;
		width: 46rpx;
		background: url("@/static/my/icon-5.png");
		background-size: 100% 100%;
		margin: 15rpx auto;
	}
	.bula>view:nth-child(6) text:before {
			content: "";
			display: block;
			height: 50rpx;
			width: 46rpx;
			background: url("@/static/my/icon-1.png");
			background-size: 100% 100%;
			margin: 15rpx auto;
		}
	.tools {
		width: 710rpx;
		margin: 24rpx auto;
		border-radius: 20rpx;
	}

	.tools_row {
		display: flex;
		box-sizing: border-box;
		padding: 0 6rpx 0 20rpx;
		height: 100rpx;
		font-size: 32rpx;
		font-weight: 400;
		background: #fff;
		margin: 20rpx auto;
		border-radius: 24rpx;
	}

	.tools_row image {
		display: block;
		margin-right: 16rpx;
	}

	.tools_row>view {
		align-self: center;
	}

	.tools_row>view:last-child {
		margin-left: auto;
	}

	.bsn {
		text-align: center;
		margin: 60rpx auto 0 auto;
		font-size: 28rpx;
		letter-spacing: 2rpx;
	}
	.code{
		display: flex;
		min-width: 500rpx;
		max-width: 500rpx;
	}
	.code>view{
		align-self: center;
	}

	.code image{
		display: block;
	}
	.code>view:nth-child(3){
		margin-left: auto;
		color: #6B61E7;
	}
</style>
