var React = require('react');
var NavBar = require('NavBar');
var Footer = require('Footer');

var ComingSoon = require('ComingSoon');

var AboutApp = React.createClass({
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
				<ComingSoon></ComingSoon>
				<Footer></Footer>
			</div>
		);
	}
});

module.exports = AboutApp;