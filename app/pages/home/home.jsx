var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

// Redux Actions and Store
import * as actions from 'actions';
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// App component
var HomeApp = require('HomeApp');

require('homeStyles');

store.subscribe(() => {
	console.log(store.getState());
});

// Fetch all data - projects and blog posts
MyAPI.get('/api/all').then((response) => {
	var {blogPosts, projects} = JSON.parse(response);
	store.dispatch(actions.getLatestPost(blogPosts));
	store.dispatch(actions.getFeaturedProjects(projects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<HomeApp></HomeApp>
	</Provider>,
	document.getElementById('app')
);