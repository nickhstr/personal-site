var React = require('react');
var ProgressiveImg = require('ProgressiveImg');
var MainTitle = require('MainTitle');
var ProjectCard = require('ProjectCard');
var FeaturedProjects = require('FeaturedProjects');

var HomeMain = React.createClass({
	render: function() {
		var {placeholder, src, alt} = this.props.mainImg;
		return (
			<main>
				<ProgressiveImg
					width="100%"
					height="100vh"
					imgSrc={src}
					imgAlt={alt}
					placeholder={placeholder}
					flexClass="flex-start-end">
					<MainTitle primary="Nick Hester" secondary="Web Developer"></MainTitle>
				</ProgressiveImg>
				<FeaturedProjects></FeaturedProjects>
			</main>
		);
	}
});

module.exports = HomeMain;