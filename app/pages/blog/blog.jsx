var React = require('react');
var ReactDOM = require('react-dom');

var BlogApp = require('BlogApp');

require('sharedStyles');

ReactDOM.render(
	<BlogApp></BlogApp>,
	document.getElementById('app')
);