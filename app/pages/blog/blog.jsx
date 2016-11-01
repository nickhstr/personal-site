var React = require('react');
var ReactDOM = require('react-dom');

var BlogApp = require('BlogApp');

require('blogStyles');

ReactDOM.render(
	<BlogApp></BlogApp>,
	document.getElementById('app')
);