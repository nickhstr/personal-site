var React = require('react');
var Logo = require('Logo');

var Drawer = React.createClass({
	toggle: function() {
		this.props.onToggle();
	},
	render: function() {
		return (
			<div id="drawer" ref="drawer">
				<div className="drawer-overlay" onClick={this.toggle}></div>
				<section className="drawer-content">
					<div className="logo">
						<Logo imgUrl="icons/icon-svg.svg" imgAlt="Logo"></Logo>
					</div>
					<div>
						<ul className="drawer-links">
							<li><a href="/projects" onClick={this.toggle}>Projects</a></li>
							<li><a href="/blog" onClick={this.toggle}>Blog</a></li>
							<li><a href="/about" onClick={this.toggle}>About</a></li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
});

module.exports = Drawer;