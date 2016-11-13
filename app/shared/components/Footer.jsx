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
					<span>
						<span className="copyright">&copy; {currentYear} Nick Hester</span>
						<a className="footer-link" href="https://github.com/nickhstr/personal-site" target="_blank">Source Code</a>
					</span>
					<Icon icon="LogoSecondary" width="36px"></Icon>
				</section>
			</footer>
		);
	}
});

module.exports = Footer;