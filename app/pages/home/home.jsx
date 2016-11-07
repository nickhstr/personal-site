import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as actions from 'actions';
var store = require('configureStore').configure();

import * as MyAPI from 'MyAPI';
import HomeApp from 'HomeApp';

require('homeStyles');

// store.subscribe(() => {
// 	console.log(store.getState());
// });

MyAPI.get('/api/all').then((response) => {
	var {blogPosts, projects} = JSON.parse(response);
	store.dispatch(actions.getLatestPost(blogPosts[blogPosts.length - 1]));
	var featuredProjects = projects.filter((project) => {
		return project.featured;
	});
	store.dispatch(actions.getFeaturedProjects(featuredProjects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<HomeApp></HomeApp>
	</Provider>,
	document.getElementById('app')
);