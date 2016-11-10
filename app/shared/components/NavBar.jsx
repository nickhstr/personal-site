var React = require('react');
var LogoLink = require('LogoLink');
var MenuButton = require('MenuButton');
var Drawer = require('Drawer');

var NavBar = React.createClass({
	previousScroll: 0,
	scrollHide() {
		var self = this;
		window.addEventListener('scroll', (e) => {
			var currentScroll = window.pageYOffset;
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
	toggleDrawer() {
		var drawer = document.getElementById('drawer');
		
		if (drawer.hasAttribute('opened')) {
			drawer.removeAttribute('opened');
		}
		else {
			drawer.setAttribute('opened', '');
		}
	},
	componentDidMount() {
		this.setLinkClass();
		this.scrollHide();
	},
	setLinkClass() {
		for (var ref in this.refs) {
			if (window.location.pathname.indexOf(this.refs[ref].pathname) > -1) {
				this.refs[ref].className = 'active-link';
			}
		}
	},
	render() {
		return (
			<div>
				<nav className="flex-between-center" ref="nav">
					<LogoLink imgUrl="/icons/icon-svg.svg" imgAlt="Nick's Logo"></LogoLink>
					<ul>
						<li><a ref="projects" href="/projects">Projects</a></li>
						<li><a ref="blog" href="/blog">Blog</a></li>
						<li><a ref="about" href="/about">About</a></li>
					</ul>
					<MenuButton onToggle={this.toggleDrawer}></MenuButton>
				</nav>
				<Drawer onToggle={this.toggleDrawer}></Drawer>
			</div>
		);
	}
});

module.exports = NavBar;