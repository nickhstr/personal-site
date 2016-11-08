export var getLatestPost = (posts) => {
	return {
		type: 'GET_LATEST_POST',
		posts
	};
};

export var getFeaturedProjects = (projects) => {
	return {
		type: 'GET_FEATURED_PROJECTS',
		projects
	};
};

export var getUdacityProjects = (projects) => {
	return {
		type: 'GET_UDACITY_PROJECTS',
		projects
	};
}

export var getFreeCodeCampProjects = (projects) => {
	return {
		type: 'GET_FREE_CODE_CAMP_PROJECTS',
		projects
	};
}

export var getAllProjects = (projects) => {
	return {
		type: 'GET_ALL_PROJECTS',
		projects
	};
};