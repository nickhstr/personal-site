var React = require('react');

var Footer = React.createClass({
	render: function() {
		var currentYear = new Date().getFullYear();
		return (
			<footer>
				&copy; {currentYear}
			</footer>
		);
	}
});

module.exports = Footer;