var React = require('react');
var LogoLink = require('LogoLink');
var MenuButton = require('MenuButton');
var Drawer = require('Drawer');

var NavBar = React.createClass({
	previousScroll: 0,
	scrollHide: function() {
		var self = this;
		window.addEventListener('scroll', function(e) {
			var currentScroll = document.body.scrollTop;
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
		var drawer = document.getElementById('drawer');
		
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
					<LogoLink imgUrl="icons/icon-svg.svg" imgAlt="Nick's Logo"></LogoLink>
					<ul>
						<li><a href="/projects">Projects</a></li>
						<li><a href="/blog">Blog</a></li>
						<li><a href="/about">About</a></li>
					</ul>
					<MenuButton onDrawerToggle={this.toggleDrawer}></MenuButton>
				</nav>
				<Drawer onToggle={this.toggleDrawer}></Drawer>
			</div>
		);
	}
});

module.exports = NavBar;