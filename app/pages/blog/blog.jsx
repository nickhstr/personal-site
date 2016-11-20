var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

// Redux Actions and Store
var actions = require('actions');
var store = require('configureStore').configure();

// Import API helpers
var MyAPI = require('MyAPI');

// Import app components
var BlogApp = require('BlogApp');
var BlogMain = require('BlogMain');
var BlogPostPage = require('BlogPostPage');

require('blogStyles');

// Fetch All Blog Posts
MyAPI.get('/api/posts').then((response) => {
	var posts = JSON.parse(response);
	store.dispatch(actions.setSort('date'));
	store.dispatch(actions.addPosts(posts));
}, (error) => {
	console.log('Failed!', error);
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} onUpdate={() => {window.scroll(0, 0)}}>
			<Route path="/blog" component={BlogApp}>
				<Route path=":post" component={BlogPostPage}></Route>
				<IndexRoute component={BlogMain}></IndexRoute>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);