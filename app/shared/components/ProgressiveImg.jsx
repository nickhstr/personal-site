var React = require('react');

var ProgressiveImg = React.createClass({
	hidePlaceholder: function() {
		var placeholder = this.refs.placeholder;
		var img = this.refs.img;
		img.removeAttribute('src');
		placeholder.classList.add('disappear');
	},
	render: function() {
		var {imgSrc, placeholder, imgAlt, width, height, flexClass} = this.props;

		if (placeholder) {
			var placeholderStyle = {
				backgroundImage: `url('${placeholder}')`
			};
		}
		
		var fullImageStyle = {
			backgroundImage: `url('${imgSrc}')`
		};
		var progressiveImgStyle = {
			width: width || '400px',
			height: height || '225px'
		};

		return (
			<div className="progressive-img" style={progressiveImgStyle}>
				<section className={flexClass}>
					{this.props.children}
				</section>
				<div ref="placeholder" className="placeholder" style={placeholderStyle}></div>
				<img ref="img" src={imgSrc} alt={imgAlt} onLoad={this.hidePlaceholder}/>
				<div className="full-image" style={fullImageStyle}></div>
			</div>
		);
	}
});

module.exports = ProgressiveImg;