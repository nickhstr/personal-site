var React = require('react');
var Icons = require('Icons');

var Icon = React.createClass({
	render() {
		var {width, height, icon, padding, margin} = this.props;
		var iconStyle = {
			display: 'inline-block',
			padding: padding || '0 2px',
			width: width || '24px',
			height: height || width,
			margin: margin || 0
		};
		return (
			<div style={iconStyle} className="icon">
				{Icons[icon]()}
			</div>
		);
	}
});

module.exports = Icon;