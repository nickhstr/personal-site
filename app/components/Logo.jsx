var React = require('react');

var Logo = React.createClass({
	render: function() {
		var {imgUrl, imgAlt} = this.props;
		return (
			<img src={imgUrl} alt={imgAlt}/>
		);
	}
});

module.exports = Logo;