module.exports = {
	// General GET request as a promise
	get: function(url) {
		return this.request({method: 'GET', url});
	},
	request: function(options) {
		return new Promise((resolve, reject) => {
			var req = new XMLHttpRequest();
			req.open(options.method, options.url);

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
	},
	filteredProjects: function(filter) {
		var filteredProjects = filter.projects;

		// Filter for featured, if specified
		if (filter.featuredOnly) {
			filteredProjects = filteredProjects.filter((project) => {
				return project.featured;
			});
		}

		// Filter by program, if specified
		if (filter.program) {
			filteredProjects = filteredProjects.filter((project) => {
				return project.program === program;
			});
		}

		// Filter by requested project's page url
		if (filter.projectPage) {
			filteredProjects = filteredProjects.filter((project) => {
				return project.projectPage.indexOf(filter.projectPage) >= 0;
			});
		}

		// Filter by search text
		if (filter.searchText) {
			var text = filter.searchText.toLowerCase();
			filteredProjects = filteredProjects.filter((project) => {
				var nameMatch = project.name.toLowerCase().indexOf(text) >= 0;
				var programMatch = project.program.toLowerCase().indexOf(text) >= 0;
				var summaryMatch = project.summary.toLowerCase().indexOf(text) >= 0;
				return nameMatch || programMatch || summaryMatch;
			});
		}

		return filteredProjects;
	},
	latestBlogPost: function(posts) {
		if (posts.length > 0) {
			return posts[posts.length - 1];
		}
		return posts;
	}
};