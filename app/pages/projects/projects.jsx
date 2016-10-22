var React = require('react');
var ReactDOM = require('react-dom');

var ProjectsApp = require('ProjectsApp');

require('sharedStyles');

ReactDOM.render(
	<ProjectsApp></ProjectsApp>,
	document.getElementById('app')
);