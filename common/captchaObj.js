import "../common/geetest/gt.js";
let captchaObj;

export class Geetest {
	captchaId;
	  constructor(id) {
		this.captchaId = id;
	  }
	  validate(){
		return new Promise((resolve, reject) => {
		  console.log('start init')
		  window.initGeetest4({
			captchaId: this.captchaId,
			product: 'bind'
		  },  (_captchaObj) => {
			_captchaObj.showCaptcha();
			_captchaObj.onSuccess(() => {
			  resolve(_captchaObj)
			});
			_captchaObj.onError((error) => {
			  reject(error)
			});
			_captchaObj.onClose((error) => {
			  reject(error)
			});
		  });
		}
		);
	}
}