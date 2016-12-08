let target = process.env.NODE_ENV == 'development' ? '' : ''
export default {
	addNum({
			commit,
			state
		}, id) {
			commit('REMBER_ANSWER', {
				id
			})
			if (state.itemNum < state.itemDetail.length) {
				commit('ADD_ITEMNUM', {
					num: 1
				})
			}

		},

		getData({
			commit
		}) {
			return new Promise((resolve, reject) => {
				const ajax = (type, url) => { //定义ajax
					let requestObj;
					url = target + url;
					if (window.XMLHttpRequest) {
						requestObj = new XMLHttpRequest();
					} else {
						requestObj = new ActiveXObject;
					}
					requestObj.open(type, url, true);
					requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					requestObj.onreadystatechange = () => {
						if (requestObj.readyState == 4) {
							if (requestObj.status == 200) {
								let obj = requestObj.response
									// if (typeof obj !== 'object') {
									// 	obj = JSON.parse(obj)
									// }
								resolve(obj)
							}
						}
					}
					requestObj.send()
				}

				ajax('GET', '/ptweidu')

			})
		}
}