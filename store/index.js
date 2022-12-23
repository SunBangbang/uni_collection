import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		is_mark: 1,
		is_send: 1,
		user_info: {}
	},
	mutations: {
		change_send(state, val) {
			state.is_send = val
			console.log(state.is_send)
		},
		change_market(state, val) {
			state.is_mark = val
			console.log(state.is_mark)
		},
	},
	actions: {

	}
})
export default store
