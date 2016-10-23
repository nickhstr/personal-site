var React = require('react');
var Logo = require('Logo');

var NavBar = React.createClass({
	render: function() {
		return (
			<div>
				<nav className="flex-between-center">
					<Logo imgUrl="icons/icon-svg.svg" imgAlt="Nick's Logo"></Logo>
					<ul>
						<li><a href="/projects">Projects</a></li>
						<li><a href="/blog">Blog</a></li>
						<li><a href="/about">About</a></li>
					</ul>
				</nav>
			</div>
		);
	}
});

module.exports = NavBar;