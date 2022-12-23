import request from "./index.js"
import store from "../store/index.js"

//接口管理
// 第一版接口 开始
// 登录接口
function login(tel, pwd) {
	return request('data/api.login/in', {
		phone: tel,
		password: pwd
	})
}
function cha(tel, pwd) {
	return request('data/api.login/cha', {
		phone: tel
	})
}
// 验证码登录接口
function loginVer(tel, verify) {
	return request('data/api.login/phone', {
		phone: tel,
		verify: verify
	})
}
// 注册
function register(tel, pwd, repwd, code, icode, pay_password) {
	return request('data/api.login/register', {
		phone: tel,
		password: pwd,
		true_password: repwd,
		verify: code,
		invite_code: icode,
		pay_password: pay_password
	})

}
// 发送验证码
function smsCode(tel,type) {
	return request('data/api.login/sendsms', {
		phone: tel,
		type:type
	})
}
function smsCodeWithLogin(type) {
	return request('data/api.send/index', {
		type:type
	})
}

// 忘记密码
function forget(tel, code, pwd, repwd) {
	return request('data/api.login/change', {
		phone: tel,
		verify: code,
		password: pwd,
		true_password: repwd

	})
}
// 获取用户信息
function get_user_info() {
	request('data/api.auth.center/get').then(res => {
		//console.log(res.data)
		if (res.code == 1) {
			
			uni.setStorageSync("user_info", res.data)
			uni.setStorageSync("token", res.data.token.token)
		} else {
			uni.showToast({
				title: res.info
			})
			setTimeout(() => {
				uni.reLaunch({
					url: "/pages/login/login"
				})
			}, 1500)
		}
	})
}

// 首页 热门推荐
function popular(limit, page) {
	return request('data/api.auth.collection/getHot', {
		limit,
		page
	}, "GET")
}
//首页 最新发布
function new_list(limit, page) {
	return request('data/api.auth.collection/getNew', {
		limit,
		page
	}, "GET")
}
//藏品详情
function collection_info(id) {
	return request('data/api.auth.collection/getInfo', {
		id
	}, "GET")
}
//首页 盲盒专区
function box_list(limit, page) {
	return request('data/api.auth.Bind/getBindList', {
		limit,
		page
	}, "GET")
}
//盲盒详情
function box_info(id) {
	return request("data/api.auth.Bind/getBindInfo", {
		id
	}, "GET")
}
//我的盲盒
function my_box(limit, page) {
	return request("data/api.auth.Bind/getUserBox", {
		limit,
		page
	}, "GET")
}
//开盲盒
function open_box(id) {
	return request("data/api.auth.bind/openBox", {
		id
	}, "GET")
}

// 生成订单
function create_order(id) {
	return request("data/api.auth.collection/buy", {
		id
	}, "POST")
}
//余额支付
function balancepay(order_no) {
	return request("data/api.auth.collection/payment", {
		order_no,
		payment_code: "M7531241478305643555 "
	})
}

//衫德收银台
function sandepay(order_no) {
	return request("data/api.auth.collection/payment", {
		order_no,
		type:"1",
		payment_code: "sande",
	})
}
//衫德快捷
function sandequickpay(order_no) {
	return request("data/api.auth.collection/payment", {
		order_no,
		type:"2",
		payment_code: "sande",
	})
}
//支付宝支付
function zfbpay(order_no) {
	return request("data/api.auth.collection/payment", {
		order_no,
		payment_code: "M7542258671010482640"
	})
}
//微信支付
function wxpay(order_no) {
	return request("data/api.auth.collection/payment", {
		order_no,
		payment_code: "M7542260784409442807"
	})
}
//盲盒余额支付
function box_balancepay(order_no) {
	return request("data/api.auth.bind/payment", {
		order_no,
		payment_code: "M7531241478305643555 "
	})
}
//盲盒支付宝支付
function box_zfbpay(order_no) {
	return request("data/api.auth.bind/payment", {
		order_no,
		payment_code: "M7542258671010482640"
	})
}

//盲盒支付宝支付
function box_sandequickpay(order_no) {
	return request("data/api.auth.bind/payment", {
		order_no,
		payment_code: "M7542260784409442807",
		type:"2"
	})
}

//盲盒支付宝支付
function box_sandepay(order_no) {
	return request("data/api.auth.bind/payment", {
		order_no,
		payment_code: "M7542260784409442807",
		type:"1"
	})
}
//盲盒微信支付
function box_wxpay(order_no) {
	return request("data/api.auth.bind/payment", {
		order_no,
		payment_code: "M7542260784409442807"
	})
}
//藏馆
function collection(limit, page) {
	return request("data/api.auth.collection/getList", {
		limit,
		page
	}, "GET")
}
//藏馆详情
function collection2_info(id) {
	return request("data/api.auth.collection/getCangInfo", {
		id
	}, "GET")
}
//修改个人信息
function set_user_info(nickname, headimg) {
	return request('data/api.auth.center/set', {
		nickname,
		headimg
	})
}

//我的藏品
function mycollection(limit, page) {
	return request("data/api.auth.collection/getUserCollection", {
		limit,
		page
	}, "GET")
}

// 意见反馈
function feedback(imgs, content) {
	return request('data/api.auth.center/message', {
		imgs,
		content
	})
}

//验证原手机
function oldtel(phone, verify) {
	return request('data/api.auth.center/verifyPhone', {
		phone,
		verify
	})
}
//验证新手机
function newtel(phone, verify) {
	return request('data/api.auth.center/changePhone', {
		phone,
		verify
	})
}
//购买盲盒 生成订单
function createboxorder(id) {
	return request("data/api.auth.Bind/buy", {
		id
	})
}
//实名认证
function authentication(username, card) {
	return request("data/api.auth.center/auth", {
		username,
		card
	})
}
//我的团队
function team(limit) {
	return request("data/api.auth.center/getFrom", {
		limit: 200,
		page: 1
	}, "GET")
}
//关于我们
function about() {
	return request("data/api.data/aboutUs")
}
//隐私政策 用户协议
function aboutall() {
	return request("data/api.data/getAbout")
}
//首页轮播图
function banner() {
	return request("data/api.data/getSlider")
}
//订单列表
function order_list(limit, page, status) {
	return request("data/api.auth.center/getOrderList", {
		limit,
		page,
		status
	}, "GET")
}
//搜索用户 手机或者hash值
function search_user(phone) {
	return request("data/api.auth.collection/getNews", {
		phone
	}, "GET")
}
//赠送  藏品id 手机号或者hash 支付密码
function givesome(id, phone, password) {
	return request("data/api.auth.collection/giving", {
		id,
		phone,
		password
	})
}
//赠送  盲盒id 手机号或者hash 支付密码
function givesome_box(id, phone, password) {
	return request("data/api.auth.bind/giving", {
		id,
		phone,
		password
	})
}
//获取转赠记录
function get_increase_all(limit, page, type) {
	return request("data/api.auth.center/givLog", {
		limit,
		page,
		type
	}, "GET")
}
//获取最新一条公告
function get_notice() {
	return request("data/api.news/newArticle", {}, "GET")
}
//获取公告列表
function get_notice_list() {
	return request("data/api.news/getItem", {}, "GET")
}
//获取公告详情 
function get_notice_info(id) {
	return request("data/api.news/getInfo", {
		id
	}, "GET")
}
//查询订单是否排队
function get_islineup(order_no) {
	return request("data/api.auth.collection/searchOrder", {
		order_no
	})
}
// 第一版接口 结束

// 第二版市场合成部分
//合成列表
function compound_list(limit, page) {
	return request("data/api.auth.Synthetic/getSynList", {
		limit,
		page
	}, "GET")
}

//合成点进去详情
function compound_details(id, password) {
	return request("data/api.auth.Synthetic/getInfo", {
		id
	},"GET")
}

//合成
function compound(id, password) {
	return request("data/api.auth.Synthetic/syn", {
		id,
		password
	})
}
//合成记录
function compound_history(limit, page) {
	return request("data/api.auth.Synthetic/getSynLog", {
		limit,
		page
	},"GET")
}
//市场列表 type 1藏品 2盲盒 goods_id藏品或者盲盒id
function market_list(limit, page, type, goods_id, sort) {
	return request("data/api.auth.mark/getUserMark", {
		limit,
		page,
		type,
		goods_id,
		sort
	}, "GET")
}
//市场详情
function market_details(id) {
	return request("data/api.auth.mark/getMarkInfo", {
		id
	}, "GET")
}
//获取藏品
function get_collection(limit, page) {
	return request("data/api.auth.mark/getCollect", {
		limit,
		page
	}, "GET")
}
//获取盲盒
function get_box(limit, page) {
	return request("data/api.auth.mark/getBox", {
		limit,
		page
	}, "GET")
}
//转售
function resale(price, type, id) {
	return request("data/api.auth.mark/sell", {
		price,
		type,
		id
	})
}
//市场生成订单
function create_market_order(id) {
	return request("data/api.auth.mark/addOrder", {
		id
	})
}
//市场支付 余额支付
function market_paybalance(order_no) {
	return request("data/api.auth.mark/payment", {
		order_no,
		payment_code: "M7531241478305643555"
	})
}
//市场支付 支付宝支付
function market_payzfb(order_no) {
	return request("data/api.auth.mark/payment", {
		order_no,
		payment_code: "M7542258671010482640"
	})
}
//市场支付 支付宝支付
function market_sandepay(order_no) {
	return request("data/api.auth.mark/payment", {
		order_no,
		payment_code: "M7542260784409442807",
		type: "1"
	})
}
//市场支付 支付宝支付
function market_sandequickpay(order_no) {
	return request("data/api.auth.mark/payment", {
		order_no,
		payment_code: "M7542260784409442807",
		type: "2"
	})
}
//市场支付 微信支付
function market_paywx(order_no) {
	return request("data/api.auth.mark/payment", {
		order_no,
		payment_code: "M7542260784409442807"
	})
}
//我的钱包 充值
function recharge(money) {
	return request("data/api.auth.TopUp/addOrder", {
		money
	})
}
//我的钱包 余额支付 支付
function wallet_paybalance(order_id) {
	// return request("data/api.auth.TopUp/payment", {
	// 	order_id,
	// 	payment_code: "M7531241478305643555"
	// })
}
//我的钱包 支付宝支付 支付
function wallet_payzfb(order_id) {
	return request("data/api.auth.TopUp/payment", {
		order_id,
		payment_code: "M7542258671010482640"
	})
}
//我的钱包  微信支付 支付
function wallet_paywx(order_id) {
	return request("data/api.auth.TopUp/payment", {
		order_id,
		payment_code: "M7542260784409442807"
	})
}
//我的钱包 提现 type:alipay_account支付宝 wechat_wallet微信  amount:数量  alipay_user：支付宝姓名 alipay_code：微信或者支付宝账号
function wallet_with(type, amount, alipay_user, alipay_code) {
	return request("data/api.auth.Transfer/add", {
		type,
		amount,
		alipay_user,
		alipay_code
	})
}
//余额明细
function mx(limit,page){
	return request("data/api.auth.center/msgAccount",{limit,page})
}

//转售记录
function resale_history(limit,page){
	return request("data/api.auth.mark/getSellLog",{limit,page},"GET")
}
//取消转售
function cancel_resale(id){
	return request("data/api.auth.mark/undo",{id},"GET")
}
//修改支付密码 验证码 旧支付密码 新支付密码 确认支付密码
function update_paypass(verify,oldPwd,newPwd,truePwd){
	return request("data/api.auth.center/setPayPwd",{verify,oldPwd,newPwd,truePwd})
}
function setOpenId(code){
	return request("data/api.auth.center/saveOpenid",{code},"POST")
}
//排行榜
function rank(){
	return request("data/api.auth.rank/rank",{page:1,limit:250},"GET")
}
//盲盒订单
function box_order(limit, page, status){
	return request("data/api.auth.bind/getOrder",{page:1,limit:250,status},"GET")
}

// 第二版市场合成部分

export default {
	sandequickpay,
	sandepay,
	market_sandequickpay,
	market_sandepay,
	box_sandepay,
	box_sandequickpay,
	login,
	cha,
	smsCodeWithLogin,
	setOpenId,
	register,
	smsCode,
	get_user_info,
	forget,
	feedback,
	popular,
	new_list,
	box_list,
	collection_info,
	create_order,
	balancepay,
	zfbpay,
	wxpay,
	box_balancepay,
	box_zfbpay,
	box_wxpay,
	box_info,
	collection,
	mycollection,
	collection2_info,
	set_user_info,
	oldtel,
	newtel,
	createboxorder,
	authentication,
	team,
	about,
	aboutall,
	loginVer,
	banner,
	order_list,
	search_user,
	givesome,
	my_box,
	get_increase_all,
	get_notice,
	get_notice_list,
	get_notice_info,
	open_box,
	get_islineup,
	givesome_box,
	// 第一部分结束
	compound_list,
	compound_details,
	compound,
	compound_history,
	market_list,
	market_details,
	get_collection,
	get_box,
	resale,
	create_market_order,
	market_paybalance,
	market_payzfb,
	market_paywx,
	recharge,
	wallet_paybalance,
	wallet_payzfb,
	wallet_paywx,
	wallet_with,
	mx,
	resale_history,
	cancel_resale,
	update_paypass,
	rank,box_order
}
