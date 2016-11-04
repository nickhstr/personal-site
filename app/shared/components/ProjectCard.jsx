var React = require('react');
var Card = require('Card');
var ProjectDetails = require('ProjectDetails');

var ProjectCard = React.createClass({
	render: function() {
		var {imgSrc, imgAlt, placeholder, name, summary, projectPage, projectUrl, sourceCode} = this.props.project;
		var {width, height, margin} = this.props.cardDimensions;
		var href = projectPage ? ('/projects' + projectPage) : '/projects';
		return (
			<a href={href} style={{margin: margin}} className="project-card">
				<Card
					width={width}
					height={height}
					imgSrc={imgSrc}
					imgAlt={imgAlt}
					placeholder={placeholder}>
					<ProjectDetails
							name={name}
							summary={summary}
							projectUrl={projectUrl}
							sourceCode={sourceCode}></ProjectDetails>
				</Card>
			</a>
		);
	}
});

module.exports = ProjectCard;