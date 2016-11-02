export var getLatestPost = (post) => {
	return {
		type: 'GET_LATEST_POST',
		post
	};
};

export var getFeaturedProjects = (projects) => {
	return {
		type: 'GET_FEATURED_PROJECTS',
		projects
	};
};

export var getAllProjects = (projects) => {
	return {
		type: 'GET_ALL_PROJECTS',
		projects
	};
};