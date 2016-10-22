var React = require('react');
var ReactDOM = require('react-dom');

var HomeApp = require('HomeApp');

require('sharedStyles');

ReactDOM.render(
	<HomeApp></HomeApp>,
	document.getElementById('app')
);