var React = require('react');
var SocialLinks = require('SocialLinks');
var Icon = require('Icon');

var Footer = React.createClass({
	render() {
		var currentYear = new Date().getFullYear();
		return (
			<footer>
				<SocialLinks></SocialLinks>
				<section className="footer-copyright flex-between-center">
					<span className="copyright">&copy; {currentYear} Nick Hester</span>
					<Icon icon="LogoSecondary" width="3em"></Icon>
				</section>
			</footer>
		);
	}
});

module.exports = Footer;