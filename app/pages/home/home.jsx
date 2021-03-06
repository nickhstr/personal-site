var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

// Redux Actions and Store
var actions = require('actions');
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// App component
var HomeApp = require('HomeApp');

require('homeStyles');

// store.subscribe(() => {
// 	console.log(store.getState());
// });

MyAPI.get('/api/posts').then((response) => {
	var blogPosts = JSON.parse(response);
	store.dispatch(actions.addPosts(blogPosts));
}, (error) => {
	console.log('Failed!', error);
});

MyAPI.get('/api/projects').then((response) => {
	var projects = JSON.parse(response);
	store.dispatch(actions.showFeaturedProjects());
	store.dispatch(actions.addProjects(projects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<HomeApp></HomeApp>
	</Provider>,
	document.getElementById('app')
);