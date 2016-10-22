var React = require('react');

var Logo = React.createClass({
	render: () => {
		var divStyle = {
			display: 'inline-block'
		};
		return (
			<div style={divStyle}>
				<a className="logo" href="/">Nick Hester</a>
			</div>
		);
	}
});

module.exports = Logo;