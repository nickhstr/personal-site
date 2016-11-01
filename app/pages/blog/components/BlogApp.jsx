var React = require('react');
var NavBar = require('NavBar');

var BlogApp = React.createClass({
	componentDidMount: function() {
		var app = document.body;
		if (app.hasAttribute('unresolved')) {
			app.removeAttribute('unresolved');
		}
	},
	render: function() {
		return (
			<div className="app">
				<NavBar></NavBar>
			</div>
		);
	}
});

module.exports = BlogApp;