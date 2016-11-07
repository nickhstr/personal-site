var React = require('react');
var Icons = require('Icons');

var Icon = React.createClass({
	render() {
		var {width, height, icon} = this.props;
		var iconStyle = {
			display: 'inline-block',
			padding: '0 2px',
			width,
			height
		};
		return (
			<div style={iconStyle} className="icon">
				{Icons[icon]()}
			</div>
		);
	}
});

module.exports = Icon;