import React from 'react';
import NavBar from 'NavBar';
import Footer from 'Footer';

var ComingSoon = require('ComingSoon');

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
				<ComingSoon></ComingSoon>
				<Footer></Footer>
			</div>
		);
	}
});

module.exports = BlogApp;