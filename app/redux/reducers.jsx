export var latestPostReducer = (state = {title: 'Title', date: 'Date', content: 'Content'}, action) => {
	switch (action.type) {
		case 'GET_LATEST_POST':
			return action.post;
		default:
			return state;
	}
}

export var projectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_FEATURED_PROJECTS':
			return action.projects;

		case 'GET_ALL_PROJECTS':
			return action.projects;
			
		default:
			return state;
	}
};