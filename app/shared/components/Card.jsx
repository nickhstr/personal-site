var React = require('react');
var ProgressiveImg = require('ProgressiveImg');

var Card = React.createClass({
	render: function() {
		var {width, height, imgSrc, imgAlt, placeholder} = this.props;
		return (
			<div className="card">
				<ProgressiveImg
					width={width}
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