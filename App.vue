<script>
	import api from "@/ajax/api.js"
	import store from "@/store/index.js"
	export default {
		onInit: function() {
		
		},
		onLaunch: function() {
			
			// console.log('App Launch')
			//console.log(this.$u.config.v);
		},
		onShow: function() {
			//隐私协议 获取是否隐藏和开启市场和转赠
			//console.log(api)
			api.aboutall().then(res=>{
				if(res.data.is_mark==1){
					
				
				}else{
					uni.setTabBarItem({
						index:2,
						visible:false
					})
					store.commit("change_market",res.data.is_mark)  //判断是否开启转售
					store.commit("change_send",res.data.zeng)  //判断是否开启转赠
				}
			})
			
			
		}

	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>

<style>
	@font-face {
		font-family: webfont;
		src: url('~@/static/webfont.ttf');
		// src: "";
	}

	page {
		font-family: webfont;
	}
	/*每个页面公共css */
	/* #ifdef H5 */
	/* .container {
		height: calc(100vh - 100rpx);
		width: 750rpx;
		background: #111111;
		color: #fff;
		overflow-y: scroll;
	} */

	/* #endif */

	/* #ifndef APP-PLUS */
	.container {
		height: 100vh;
		width: 750rpx;
		overflow-y: scroll;
		background: #F5F5F5;
		overflow-y: scroll;
		color: #000;
	}

	/* #endif */

	.zindex999 {
		position: relative;
		z-index: 999;
	}

	.shadow {
		box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1607843137254902);
	}

	.text_hide {
		overflow-x: hidden;
		text-overflow: ellipsis;
		/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
		word-break: keep-all;
		/* 不换行 */
		white-space: nowrap;
		/* 不换行 */
	}

	/* 从下弹出样式 */
	.pop_down {
		height: 100vh;
		width: 100%;
		background: rgba(0, 0, 0, .6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		transform: translateY(-100vh);
		animation: down 1s;
		animation-fill-mode: forwards;
	}

	.pop_down>view {
		align-self: center;
	}

	/* //若影若现弹出样式 */
	.pop_ocy {
		height: 100vh;
		width: 100%;

		background: rgba(0, 0, 0, .6);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		animation: ocy .5s;
		animation-fill-mode: forwards;
		opacity: 0
	}

	.pop_ocy>view {
		align-self: center;
	}

	@keyframes down {
		0% {}

		100% {
			transform: translateY(0);
		}
	}

	@keyframes ocy {
		0% {}

		100% {
			opacity: 1;
		}
	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg);
			/*从0度开始*/
		}

		100% {
			transform: rotateY(360deg);
			/*360度结束*/
		}
	}

	.systemColor {
		color: #6B61E7;
	}

	.systemBcg {
		background: #6B61E7;

	}

	.bcgBlack {
		background: #fff;
	}

	.colorBlack {
		color: #fff;
	}

	.bcgWhite {
		background: #000;
	}

	.colorWhite {
		color: #000;
	}
</style>
