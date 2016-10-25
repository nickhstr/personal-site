var React = require('react');

var Drawer = React.createClass({
	toggle: function() {
		this.props.onToggle();
	},
	render: function() {
		return (
			<div id="drawer" ref="drawer">
				<div className="drawer-overlay" onClick={this.toggle}></div>
				<section className="drawer-content"></section>
			</div>
		);
	}
});

module.exports = Drawer;