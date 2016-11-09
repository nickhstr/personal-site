var React = require('react');
var Icon = require('Icon');

var LogoLink = (props) => {
	return (
		<div>
			<a className="logo-link" href="/">
				<Icon icon="LogoPrimary" width="40px" padding="0"></Icon>
				<span>Nick Hester</span>
			</a>
		</div>
	);
}

module.exports = LogoLink;