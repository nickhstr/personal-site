export var latestPostReducer = (state = {title: 'Title', date: 'Date', content: 'Content'}, action) => {
	switch (action.type) {
		case 'GET_LATEST_POST':
			return action.posts[action.posts.length - 1];
		default:
			return state;
	}
}

export var projectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_FEATURED_PROJECTS':
			return action.projects.filter((project) => {
				return project.featured;
			});

		case 'GET_UDACITY_PROJECTS':
			return action.projects.filter((project) => {
				return project.program.toLowerCase() === 'udacity';
			});

		case 'GET_FREE_CODE_CAMP_PROJECTS':
			return action.projects.filter((project) => {
				return project.program.toLowerCase() === 'free code camp';
			});

		case 'GET_ALL_PROJECTS':
			return action.projects;
			
		default:
			return state;
	}
};