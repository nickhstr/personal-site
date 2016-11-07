var React = require('react');
var SocialLinks = require('SocialLinks');

var Footer = React.createClass({
	render() {
		var currentYear = new Date().getFullYear();
		return (
			<footer>
				<SocialLinks></SocialLinks>
				<section className="footer-copyright flex-between-center">
					<span className="copyright">&copy; {currentYear} Nick Hester</span>
					<img className="footer-logo" src="icons/icon-svg-2.svg" alt="Nick's Logo"/>
				</section>
			</footer>
		);
	}
});

module.exports = Footer;