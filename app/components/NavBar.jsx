var React = require('react');
var Logo = require('Logo');

var NavBar = React.createClass({
	render: () => {
		return (
			<div>
				<nav className="flex-center-center">
					<Logo></Logo>
					<ul className="navbar">
						<li className="navlink"><a href="/projects">Projects</a></li>
						<li className="navlink"><a href="/blog">Blog</a></li>
						<li className="navlink"><a href="/about">About</a></li>
					</ul>
				</nav>
			</div>
		);
	}
});

module.exports = NavBar;