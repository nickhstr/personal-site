var React = require('react');
var ProgressiveImg = require('ProgressiveImg');

var Card = React.createClass({
	render: function() {
		var {width, height, imgSrc, imgAlt, placeholder} = this.props;
		var cardStyle = {
			width
		};
		return (
			<div style={cardStyle} className="card">
				<ProgressiveImg
					width="100%"
					height={height}
					imgSrc={imgSrc}
					imgAlt={imgAlt}
					placeholder={placeholder}>
				</ProgressiveImg>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Card;