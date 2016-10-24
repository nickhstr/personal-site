var React = require('react');

var Footer = React.createClass({
	render: function() {
		var currentYear = new Date().getFullYear();
		return (
			<footer>
				Nick Hester - Copyright {currentYear}
			</footer>
		);
	}
});

module.exports = Footer;