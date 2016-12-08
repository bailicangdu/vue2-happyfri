export default {
	addScore({
			commit
		}) {
			if (true) {
				commit('ADD_SCORES', {
					num: 10
				})
			}
		},

		getData({
			commit
		}) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('ADD_SCORES', {
						num: 10
					})
					resolve(1234)
				}, 1000)
			})
		}
}