module.exports = {
	// General GET request as a promise
	get: function(url) {
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
	},
	filteredProjects: function(projects, featuredOnly, program) {
		var filteredProjects = projects;

		// Filter for featured, if specified
		if (featuredOnly) {
			filteredProjects = filteredProjects.filter((project) => {
				return project.featured;
			});
		}

		// Filter by program, if specified
		if (program) {
			filteredProjects = filteredProjects.filter((project) => {
				return project.program === program;
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