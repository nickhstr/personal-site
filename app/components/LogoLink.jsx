var React = require('react');

var LogoLink = React.createClass({
	render: function() {
		var {imgUrl, imgAlt} = this.props;
		return (
			<div>
				<a className="logo-link" href="/">
					<img src={imgUrl} alt={imgAlt}/>
					<span>Nick Hester</span>
				</a>
			</div>
		);
	}
});

module.exports = LogoLink;