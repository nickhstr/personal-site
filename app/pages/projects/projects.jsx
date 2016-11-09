var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

// Redux Actions and Store
import * as actions from 'actions';
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// Import app component
var ProjectsApp = require('ProjectsApp');
var ProjectsMain = require('ProjectsMain');
var TestComponent = require('TestComponent');

require('projectsStyles');

store.subscribe(() => {
	console.log(store.getState());
});

// Fetch all projects
MyAPI.get('/api/projects').then((response) => {
	var projects = JSON.parse(response);
	store.dispatch(actions.addProjects(projects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/projects" component={ProjectsApp}>
				<Route path="test" component={TestComponent}></Route>
				<IndexRoute component={ProjectsMain}></IndexRoute>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);