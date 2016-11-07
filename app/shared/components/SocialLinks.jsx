var React = require('react');
var Icon = require('Icon');

var SocialLinks = (props) => {
	return (
		<div className="social-links flex-center-center">
			<a href="https://github.com/nickhstr" target="_blank">
				<Icon icon="GitHubIcon" width="1.5em" height="1.5em"></Icon>
				<span>GitHub</span>
			</a>
			<a href="https://www.linkedin.com/in/nickhstr" target="_blank">
				<Icon icon="LinkedinIcon" width="1.4em" height="1.4em"></Icon>
				<span>LinkedIn</span>
			</a>
		</div>
	);
};

module.exports = SocialLinks;