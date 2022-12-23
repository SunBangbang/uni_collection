// uni.baseUrl = "http://moxuan.sxqichuangkeji.com/"

uni.baseUrl = "/"
// uni.baseUrl = "http://123.129.219.184/"
// uni.baseUrl = "/"
// uni.baseUrl = "http://jichu.sxqichuangkeji.com/"
// uni.baseUrl = "/apis/" 
import Md5 from 'js-md5'
import { Geetest } from "@/common/captchaObj.js"
const loginValidate = new Geetest('f4011827b4c79331cceed4618e511bfe');
const request = (url = '', data = {}, type = "POST", header = {}) => {
	return new Promise(async (resolve, reject) => {
		// uni.showLoading({
		// 	title:"加载中....",
		// 	icon:"loading"
		// })
		//从localstorage拿到token
		if(url=="data/api.send/index" || url=="data/api.login/sendsms" || url == "data/api.login/in" || url=="data/api.login/phone"){
			const _captcha =await loginValidate.validate();
			// console.log('_captcha', _captcha)
			var geetestCaptchaValidate = _captcha.getValidate()
			//config.data.supplier = 2;
			Object.assign(data, geetestCaptchaValidate);
			
			_captcha.destroy();
		}
		
		var token;
		try {
			if (uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined) {
				token = ""
			} else {
				token = uni.getStorageSync('token')
			}
			//运行代码
		} catch (err) {
			token = ""
			//处理错误

		}
		var times = Math.round(new Date().getTime()/1000).toString()
		var header = {
			"api-token": token,
			"time": times,
			'Content-Type': 'application/x-www-form-urlencoded',
			"auth":Md5("590596e4936cee323b612fe3104f4ca5"+times)
		}
		// console.log(header)
		uni.request({
			method: type,
			url: uni.baseUrl + url,
			// url: "/apis/" + url,
			data: data,
			header: header,
			dataType: 'json',

		}).then((response) => {

			// setTimeout(function() {
			//     uni.hideLoading();
			// }, 200);

			let [error, res] = response;
			if (res.data.code == 0 && res.data.info) {
				uni.showToast({
					title: res.data.info,
					icon: "none"
				})
			}
			//401时 用户登录超时
			if (res.data.code == 401) {
				uni.showToast({
					title: res.data.info,
					icon: "none"
				})
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/login/login"
					})
				}, 500)
			}
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
