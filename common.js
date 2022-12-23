/**
 * 页面跳转
 p1 非tabar地址 p2动画效果 P3动画时间ms
 */

const to = (url, animationType = 'pop-in') => {

	uni.navigateTo({
		url: url,
		animationType: animationType,
		// animationDuration:'300',
		success() {

		},
		fail() {
			console.error('跳转失败：' + url)
		}
	})

}
/**
 * [redirect] 关闭当前页面，跳转到应用内的某个页面
 p1 非tabar地址 p2动画效果 P3动画时间ms
 */

const rdt = (url, animationType = 'pop-in') => {

	uni.redirectTo({
		url: url,
		animationType: animationType,
		// animationDuration:'300',
		success() {

		},
		fail() {
			console.error('跳转失败：' + url)
		}
	})

}

const back = () => {

	let canNavBack = getCurrentPages();
	if (canNavBack && canNavBack.length > 1) {
		uni.navigateBack({
			delta: 1
		});
	} else {
		history.back()
	}

}


//跳转有tabar页面
const totabar = (url, animationType = 'pop-in') => {

	uni.switchTab({
		url: url,
		animationType: animationType,
		// animationDuration:'300',
		success() {

		},
		fail() {
			console.error('跳转失败：' + url)
		}
	})

}

/**
 * 消息弹窗
 p1 标题 p2图标 P3时间ms
 */

const pop = (title, icon = 'none', time = '1500') => {
	// uni.showToast({
	// 	title:title,
	// 	icon:icon,
	// 	duration: time,

	// })
	uni.showToast({
		title: title,
		icon: icon
	})

}


//转义html
const turnhtml = (str) => {
	var arrEntities = {
		lt: "<",
		gt: ">",
		nbsp: "&nbsp;",
		amp: "&",
		quot: '"'

	};
	return str.replace(/&(lt|gt|nbsp|amp|quot|p);/gi, function(all, t) {
		return arrEntities[t];
	});
}

//判断内外链接
const link = (type, url) => {
	if (url == "" || url == "undefined" || url == null) {
		return
	}
	// console.log(url)
	if (type == 1) {

		uni.navigateTo({
			url: '/pages/common/webView?url=' + url
		})
	} else if (type == 2) {
		uni.navigateTo({
			url: url
		})
	}
}

// 上传图片
function upload(url) {
	console.log(url)
	return new Promise((resolve, reject) => {
		let a = uni.uploadFile({
			url: uni.baseUrl + 'data/api.auth.center/upload', // 仅为示例，非真实的接口地址
			filePath: url,
			name: 'file',
			header: {
				'api-token': uni.getStorageSync("token")
			},
			success: (res) => {

				// console.log(JSON.parse(res.data).data.url)
				// console.log(JSON.parse(res.data).data.url)
				// console.log(res.data)
				resolve(JSON.parse(res.data).data.url)
				// resolve(res.data.data)

			}
		});
	})
}

function setclip(val) {
	uni.setClipboardData({
		data: val,
		success() {
			uni.showToast({
				title: "复制成功"
			})
		}
	})
}


// 导出
export const api = {
	to,
	pop,
	totabar,
	turnhtml,
	link,
	rdt,
	back,
	upload,
	setclip
}
