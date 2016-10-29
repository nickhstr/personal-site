var React = require('react');
var ProgressiveImg = require('ProgressiveImg');

var Card = React.createClass({
	getInitialState: function() {
		return this.newDimensions();
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.updateDimensions);
	},
	updateDimensions: function(e) {
		this.setState(this.newDimensions());
	},
	newDimensions: function() {
		var width = window.innerWidth;
		if (width > 649) {
			if (width > 950) {
				return {
					width: this.props.width,
					height: this.props.height
				};
			}
			return {
				width: '300px',
				height: '225px'
			};
		}
		else if (width < 650) {
			return {
				width: '100%',
				height: '225px'
			};
		}
	},
	render: function() {
		var {imgSrc, imgAlt, placeholder} = this.props;
		var {width, height} = this.state;
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