var React = require('react');
var Card = require('Card');
var ProjectDetails = require('ProjectDetails');

var ProjectCard = React.createClass({
	render: function() {
		var {width, height, imgSrc, imgAlt, placeholder, projectName, projectDescription} = this.props;
		return (
			<div>
				<Card
					width={width}
					height={height}
					imgSrc={imgSrc}
					imgAlt={imgAlt}
					placeholder={placeholder}>
					<ProjectDetails name={projectName} description={projectDescription}></ProjectDetails>
				</Card>
			</div>
		);
	}
});

module.exports = ProjectCard;