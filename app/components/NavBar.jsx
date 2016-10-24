var React = require('react');
var Logo = require('Logo');
var MenuButton = require('MenuButton');

var NavBar = React.createClass({
	previousScroll: 0,
	scrollHide: function() {
		var self = this;
		window.addEventListener('scroll', function(e) {
			var currentScroll = window.scrollY;
			var nav = self.refs.nav;
			var navClasses = nav.classList;
			var isDown = currentScroll > self.previousScroll;

			if (isDown && !navClasses.contains('scrolled') && currentScroll > 10) {
				navClasses.add('scrolled');
			}
			else if (!isDown) {
				navClasses.remove('scrolled');
			}

			self.previousScroll = currentScroll;
		});
	},
	toggleDrawer: function() {
		var drawer = this.refs.drawer;
		
		if (drawer.hasAttribute('opened')) {
			drawer.removeAttribute('opened');
		}
		else {
			drawer.setAttribute('opened', '');
		}
	},
	render: function() {
		if (this.props.reveals) {
			this.scrollHide();
		}
		return (
			<div>
				<nav className="flex-between-center" ref="nav">
					<Logo imgUrl="icons/icon-svg.svg" imgAlt="Nick's Logo"></Logo>
					<ul>
						<li><a href="/projects">Projects</a></li>
						<li><a href="/blog">Blog</a></li>
						<li><a href="/about">About</a></li>
					</ul>
					<MenuButton onDrawerToggle={this.toggleDrawer}></MenuButton>
				</nav>
				<div id="drawer" ref="drawer">
					<div className="drawer-overlay" onClick={this.toggleDrawer}></div>
					<section className="drawer-content"></section>
				</div>
			</div>
		);
	}
});

module.exports = NavBar;