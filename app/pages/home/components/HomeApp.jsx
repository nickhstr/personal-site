var React = require('react');
var NavBar = require('NavBar');
var HomeMain = require('HomeMain');
var Footer = require('Footer');

var HomeApp = React.createClass({
	componentDidMount: function() {
		var app = document.body;
		if (app.hasAttribute('unresolved')) {
			app.removeAttribute('unresolved');
		}
	},
	render: function() {
		return (
			<div className="app" ref="app">
				<NavBar reveals></NavBar>
				<HomeMain className="testing"></HomeMain>
				<Footer></Footer>
			</div>
		);
	}
});

module.exports = HomeApp;