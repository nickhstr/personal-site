var React = require('react');
var NavBar = require('NavBar');
var Footer = require('Footer');

var AboutApp = React.createClass({
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
				<main>
					<div className="construction">Under construction</div>
				</main>
				<Footer></Footer>
			</div>
		);
	}
});

module.exports = AboutApp;