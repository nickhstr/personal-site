export var addPosts = (posts) => {
	return {
		type: 'ADD_POSTS',
		posts
	};
};

export var addProjects = (projects) => {
	return {
		type: 'ADD_PROJECTS',
		projects
	};
};

export var showFeaturedProjects = () => {
	return {
		type: 'SHOW_FEATURED_PROJECTS'
	};
}

export var setProgramFilter = (program) => {
	return {
		type: 'SET_PROGRAM_FILTER',
		program
	};
}

export var setSearchText = (text) => {
	return {
		type: 'SET_SEARCH_TEXT',
		text
	};
}