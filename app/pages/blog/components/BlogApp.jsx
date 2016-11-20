var React = require('react');
var NavBar = require('NavBar');
var Footer = require('Footer');

var BlogApp = React.createClass({
	componentDidMount() {
		var app = document.body;
		if (app.hasAttribute('unresolved')) {
			app.removeAttribute('unresolved');
		}
	},
	render() {
		return (
			<div className="app">
				<NavBar></NavBar>
				<main id="main">
					{this.props.children}
				</main>
				<Footer></Footer>
			</div>
		);
	}
});

module.exports = BlogApp;