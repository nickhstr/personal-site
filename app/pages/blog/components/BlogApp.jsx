var React = require('react');
var NavBar = require('NavBar');

var BlogApp = React.createClass({
	render: () => {
		return (
			<div>
				<NavBar></NavBar>
			</div>
		);
	}
});

module.exports = BlogApp;