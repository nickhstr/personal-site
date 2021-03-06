var React = require('react');
var ProgressiveImg = require('ProgressiveImg');
var MainTitle = require('MainTitle');
var LatestBlogPost = require('LatestBlogPost');
var FeaturedProjects = require('FeaturedProjects');

var HomeMain = React.createClass({
	render() {
		var {placeholder, src, alt} = this.props.mainImg;
		return (
			<main>
				<ProgressiveImg
						width="100%"
						height={window.innerHeight}
						imgSrc={src}
						imgAlt={alt}
						placeholder={placeholder}
						flexClass="flex-start-end">
                    <MainTitle 
                        primary="Nick Hester" 
                        secondary="Software Engineer">
                    </MainTitle>
				</ProgressiveImg>
				<LatestBlogPost></LatestBlogPost>
				<FeaturedProjects></FeaturedProjects>
			</main>
		);
	}
});

module.exports = HomeMain;
