var React = require('react');

var ProgressiveImg = React.createClass({
	hidePlaceholder: function() {
		var placeholder = this.refs.placeholder;
		var img = this.refs.img;
		img.removeAttribute('src');
		setTimeout(function() {
			placeholder.classList.add('disappear');
		}, 300);
	},
	render: function() {
		var {imgSrc, placeholder, imgAlt, width, height, flexClass} = this.props;
		var placeholderStyle = {
			backgroundImage: `url('${placeholder}')`
		};
		var fullImageStyle = {
			backgroundImage: `url('${imgSrc}')`
		};
		var progressiveImgStyle = {
			width: width || '400px',
			height: height || '300px'
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