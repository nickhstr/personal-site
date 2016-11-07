export var get = function(url) {
	return new Promise((resolve, reject) => {
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			if (req.status >= 200 && req.status < 300) {
				resolve(req.response);
			}
			else {
				reject(Error(req.statusText));
			}
		};

		req.onerror = function() {
			reject(Error('Network Error'));
		}
		
		req.send();
	});
}