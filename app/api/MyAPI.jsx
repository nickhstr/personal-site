module.exports = {
	// General GET request as a promise
	get: function(url) {
		return this.request({method: 'GET', url});
	},
	// XHR request promisified
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
	// Projects Filter
	filteredProjects: function(filter) {
		var filteredProjects = filter.projects.slice();

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

		// Sort projects
		if (filter.sort) {
			switch (filter.sort.toLowerCase()) {
				case 'date':
					filteredProjects = filteredProjects.sort((a, b) => {
						var aTime = new Date(a.dateCompleted).getTime();
						var bTime = new Date(b.dateCompleted).getTime();
						return bTime - aTime;
					});
					break;
				case 'name':
					filteredProjects = filteredProjects.sort((a, b) => {
						var aName = a.name.toLowerCase();
						var bName = b.name.toLowerCase();

						if (aName < bName) {
							return -1;
						}
						if (aName > bName) {
							return 1;
						}
						return 0;
					});
				default:
					break;
			}
		}

		return filteredProjects;
	},
	// Blog Posts Filter
	filteredPosts: function(filter) {
		var filteredPosts = filter.posts.slice();

		if (filter.searchText) {
			var text = filter.searchText.toLowerCase();
			filteredPosts = filteredPosts.filter((post) => {
				var titleMatch = post.title.toLowerCase().indexOf(text) >= 0;
				var teaserMatch = post.teaser.toLowerCase().indexOf(text) >= 0;
				return titleMatch || teaserMatch;
			});
		}

		if (filter.blogPostPage) {
			filteredPosts = filteredPosts.filter((post) => {
				return post.url.indexOf(filter.blogPostPage) >= 0;
			});
		}

		if (filter.sort) {
			switch (filter.sort.toLowerCase()) {
				case 'date':
					filteredPosts = filteredPosts.sort((a, b) => {
						var aTime = new Date(a.date).getTime();
						var bTime = new Date(b.date).getTime();
						return bTime - aTime;
					});
					break;
				case 'title':
					filteredPosts = filteredPosts.sort((a, b) => {
						var aTitle = a.title.toLowerCase();
						var bTitle = b.title.toLowerCase();

						if (aTitle < bTitle) {
							return -1;
						}
						if (aTitle > bTitle) {
							return 1;
						}
						return 0;
					});
					break;
				default:
					break;
			}
		}

		return filteredPosts;
	},
	// Return latest post
	latestBlogPost: function(posts) {
		var sortedPosts = posts.slice();
		sortedPosts.sort((a, b) => {
			var aDate = new Date(a.date).getTime();
			var bDate = new Date(b.date).getTime();

			return a - b;
		});

		if (sortedPosts.length > 0) {
			return sortedPosts[sortedPosts.length - 1];
		}
		return sortedPosts;
	}
};