export var blogPostsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_POSTS':
			return [
				...state,
				...action.posts
			];
		default:
			return state;
	}
}

export var projectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROJECTS':
			return [
				...state,
				...action.projects
			];
		default:
			return state;
	}
};

export var featuredProjectsReducer = (state = false, action) => {
	switch (action.type) {
		case 'SHOW_FEATURED_PROJECTS':
			return true;
		default:
			return state;
	}
}

export var programFilterReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_PROGRAM_FILTER':
			return action.program;
		default:
			return state;
	}
}