var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

// Redux Actions and Store
import * as actions from 'actions';
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// Import app component
var ProjectsApp = require('ProjectsApp');

require('projectsStyles');

store.subscribe(() => {
	console.log(store.getState());
});

// Fetch all projects
MyAPI.get('/api/projects').then((response) => {
	var projects = JSON.parse(response);
	store.dispatch(actions.getAllProjects(projects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<ProjectsApp></ProjectsApp>
	</Provider>,
	document.getElementById('app')
);