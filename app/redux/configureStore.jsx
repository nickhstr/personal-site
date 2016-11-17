var redux = require('redux');
import {
	blogPostsReducer,
	projectsReducer,
	featuredProjectsReducer,
	programFilterReducer,
	searchTextReducer,
	sortReducer
} from 'reducers';

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		blogPosts: blogPostsReducer,
		projects: projectsReducer,
		showFeaturedProjects: featuredProjectsReducer,
		programFilter: programFilterReducer,
		searchText: searchTextReducer,
		sort: sortReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};