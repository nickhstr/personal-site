var React = require('react');
var {GitHubIcon, LinkedinIcon} = require('Icons');

var Icon = React.createClass({
	setIcon: function(icon) {
		switch (icon) {
			case 'github':
				return (<GitHubIcon></GitHubIcon>);
			case 'linkedin':
				return (<LinkedinIcon></LinkedinIcon>);
			default:
				// statements_def
				break;
		}
	},
	render: function() {
		var {width, height, icon} = this.props;
		var iconStyle = {
			display: 'inline-block',
			padding: '0 2px',
			width,
			height
		};
		var renderedIcon = this.setIcon(icon);
		return (
			<div style={iconStyle} className="icon">
				{renderedIcon}
			</div>
		);
	}
});

module.exports = Icon;