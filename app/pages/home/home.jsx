var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var HomeApp = require('HomeApp');

var actions = require('actions');
var store = require('configureStore').configure();
var MyAPI = require('MyAPI');

require('homeStyles');

store.subscribe(() => {
	console.log(store.getState());
});

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