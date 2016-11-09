var React = require('react');
var Icon = require('Icon');

var MenuButton = React.createClass({
	toggle() {
		this.props.onToggle();
	},
	render() {
		return (
			<button className="menu-button" onClick={this.toggle}>
				<Icon icon="MenuIcon" padding="0"></Icon>
			</button>
		);
	}
});

module.exports = MenuButton;