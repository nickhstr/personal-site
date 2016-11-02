var redux = require('redux');
var {latestPostReducer, projectsReducer} = require('reducers');

export var configure = (initialState= {}) => {
	var reducer = redux.combineReducers({
		latestPost: latestPostReducer,
		projects: projectsReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};