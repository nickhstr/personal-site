var React = require('react');
var NavBar = require('NavBar');

var HomeApp = React.createClass({
	render: function() {
		return (
			<div className="app">
				<NavBar></NavBar>
			</div>
		);
	}
});

module.exports = HomeApp;