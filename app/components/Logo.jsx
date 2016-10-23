var React = require('react');

var Logo = React.createClass({
	render: function() {
		var {imgUrl, imgAlt} = this.props;
		return (
			<div>
				<a className="logo" href="/">
					<img src={imgUrl} alt={imgAlt}/>
					<span>Nick Hester</span>
				</a>
			</div>
		);
	}
});

module.exports = Logo;