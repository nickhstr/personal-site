var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

// Redux Actions and Store
var actions = require('actions');
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// Import app component
var ProjectsApp = require('ProjectsApp');
var ProjectsMain = require('ProjectsMain');
var ProjectPage = require('ProjectPage');

require('projectsStyles');

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// Fetch all projects
MyAPI.get('/api/projects').then((response) => {
	var projects = JSON.parse(response);
	store.dispatch(actions.setSort('date'));
	store.dispatch(actions.addProjects(projects));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} onUpdate={() => {window.scroll(0, 0)}}>
			<Route path="/projects" component={ProjectsApp}>
				<Route path=":project" component={ProjectPage}></Route>
				<IndexRoute component={ProjectsMain}></IndexRoute>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);