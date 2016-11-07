var redux = require('redux');
import {latestPostReducer, projectsReducer} from 'reducers';

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