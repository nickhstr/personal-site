var React = require('react');
var NavBar = require('NavBar');

var AboutApp = React.createClass({
	componentDidMount: function() {
		var app = document.getElementsByTagName('body')[0];
		app.removeAttribute('unresolved');
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