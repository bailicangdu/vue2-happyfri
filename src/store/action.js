let target = process.env.NODE_ENV == 'development' ? '' : ''
export default {
	addNum({
			commit
		}) {
			commit('ADD_ITEMNUM', {
				num: 1
			})
		},

		getData({
			commit
		}) {
			return new Promise((resolve, reject) => {
				// let xml = new XMLHttpRequest();
				// console.log()
				// xml.open('get', target + '/webpage?action=icard&type=subscribe&channel=wise_home', true);
				// xml.onload = resolve;
				// xml.onerror = reject;
				// xml.send();
			})
		}
}