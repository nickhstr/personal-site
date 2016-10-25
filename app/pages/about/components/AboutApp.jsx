var React = require('react');
var NavBar = require('NavBar');

var AboutApp = React.createClass({
	componentDidMount: function() {
		var app = document.body;
		if (app.hasAttribute('unresolved')) {
			app.removeAttribute('unresolved');
		}
	},
	render: function() {
		return (
			<div>
				<NavBar></NavBar>
			</div>
		);
	}
});

module.exports = AboutApp;