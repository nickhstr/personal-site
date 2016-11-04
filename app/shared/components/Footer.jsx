var React = require('react');

var Footer = React.createClass({
	render: function() {
		var currentYear = new Date().getFullYear();
		return (
			<footer className="flex-between-center">
				<span className="copyright">&copy; {currentYear} Nick Hester</span>
				<img className="footer-logo" src="icons/icon-svg-2.svg" alt="Nick's Logo"/>
			</footer>
		);
	}
});

module.exports = Footer;