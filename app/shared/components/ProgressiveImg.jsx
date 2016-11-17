var React = require('react');

var ProgressiveImg = React.createClass({
	hidePlaceholder() {
		var placeholder = this.refs.placeholder;
		var img = this.refs.img;
		img.removeAttribute('src');
		placeholder.classList.add('disappear');
	},
	render() {
		var {imgSrc, placeholder, imgAlt, width, height, borderRadius, flexClass} = this.props;

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
			height: height || '225px',
			borderTopLeftRadius: borderRadius || 'inherit',
			borderTopRightRadius: borderRadius || 'inherit',
			borderBottomLeftRadius: borderRadius || '0',
			borderBottomRightRadius: borderRadius || '0'
		};

		return (
			<div className="progressive-img" style={progressiveImgStyle}>
				{this.props.children ? <section className={flexClass}>{this.props.children}</section> : null}
				<div ref="placeholder" className="placeholder" style={placeholderStyle}></div>
				<img ref="img" src={imgSrc} alt={imgAlt} onLoad={this.hidePlaceholder}/>
				<div className="full-image" style={fullImageStyle}></div>
			</div>
		);
	}
});

module.exports = ProgressiveImg;