export default (type, url) => {
	return new Promise((resolve, reject) => {
		let requestObj;
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
					if (typeof obj !== 'object') {
						obj = JSON.parse(obj)
					}
					resolve(obj)
				}
			}
		}
		requestObj.send()
	})
}